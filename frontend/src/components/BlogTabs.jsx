import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BlogTabs.css';

function BlogTabs({ tabs }) {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const tabRefs = useRef([]);

  const hashId = decodeURIComponent(hash.replace(/^#/, ''));
  const activeIndex = Math.max(0, tabs.findIndex(tab => tab.id === hashId));

  const selectTab = (index, { focus = false } = {}) => {
    navigate({ hash: `#${tabs[index].id}` }, { replace: true, preventScrollReset: true });
    if (focus) tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event, index) => {
    const last = tabs.length - 1;
    const targets = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    if (!(event.key in targets)) return;
    event.preventDefault();
    selectTab(targets[event.key], { focus: true });
  };

  return (
    <div className="blog-tabs">
      <div className="blog-tablist" role="tablist" aria-label="Blog sections">
        {tabs.map((tab, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={tab.id}
              ref={el => { tabRefs.current[index] = el; }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              className={`blog-tab${selected ? ' is-active' : ''}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => selectTab(index)}
              onKeyDown={event => handleKeyDown(event, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          className="blog-tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          tabIndex={0}
          hidden={index !== activeIndex}
          dangerouslySetInnerHTML={{ __html: tab.html }}
        />
      ))}
    </div>
  );
}

export default BlogTabs;
