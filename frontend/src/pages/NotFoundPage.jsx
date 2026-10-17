import { Link } from 'react-router-dom';
import './DetailPage.css';

function NotFoundPage() {
  return (
    <div className="detail-page">
      <div className="detail-content">
        <span className="detail-badge">404</span>
        <h1>Page not found</h1>
        <p className="detail-lead">We couldn't find the page you were looking for. It may have moved or the link may be mistyped.</p>
        <Link to="/" className="apply-btn">Back to home</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
