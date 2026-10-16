import { useParams, Link, Navigate } from 'react-router-dom';
import { getPostBySlug } from '../lib/blog';
import BlogTabs from '../components/BlogTabs';
import './DetailPage.css';
import './BlogPostPage.css';

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="detail-page">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <article className="detail-content blog-post">
        <span className="detail-badge">{formatDate(post.date)} · {post.author}</span>
        <h1>{post.title}</h1>
        {post.excerpt && <p className="detail-lead">{post.excerpt}</p>}
        {post.tabs ? (
          <BlogTabs tabs={post.tabs} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        )}
      </article>
    </div>
  );
}

export default BlogPostPage;
