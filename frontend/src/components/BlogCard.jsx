import { Link } from 'react-router-dom';
import './BlogCard.css';

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function BlogCard({ slug, title, date, author, excerpt }) {
  return (
    <Link to={`/blog/${slug}`} className="blog-card">
      <div className="blog-card-meta">
        <span className="blog-card-date">{formatDate(date)}</span>
        <span className="blog-card-dot">·</span>
        <span className="blog-card-author">{author}</span>
      </div>
      <h3 className="blog-card-title">{title}</h3>
      {excerpt && <p className="blog-card-excerpt">{excerpt}</p>}
      <span className="blog-card-readmore">Read more →</span>
    </Link>
  );
}

export default BlogCard;
