import { useEffect, useRef, useState } from 'react';

const supportsObserver = typeof IntersectionObserver !== 'undefined';

export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(!supportsObserver);

  useEffect(() => {
    const el = ref.current;
    if (!el || !supportsObserver) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
