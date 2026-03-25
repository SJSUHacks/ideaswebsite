import { Link } from 'react-router-dom';
import './Button.css';

function Button({ children, onClick, variant = 'primary', href, to }) {
  // If to is provided, render as an internal router Link
  if (to) {
    return (
      <Link to={to} className={`button button-${variant}`}>
        {children}
      </Link>
    );
  }

  // If href is provided, render as an external link
  if (href) {
    return (
      <a 
        href={href} 
        className={`button button-${variant}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  // Otherwise, render as a button
  return (
    <button className={`button button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;


