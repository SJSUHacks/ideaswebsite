import { useCallback, useEffect, useRef, useState } from 'react';

const supportsObserver = typeof IntersectionObserver !== 'undefined';

export function useReveal() {
  const observerRef = useRef(null);
  const [visible, setVisible] = useState(!supportsObserver);

  const ref = useCallback(el => {
    observerRef.current?.disconnect();
    observerRef.current = null;
    if (!el || !supportsObserver) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(el);
    observerRef.current = observer;
  }, []);

  useEffect(() => () => observerRef.current?.disconnect(), []);

  return [ref, visible];
}
