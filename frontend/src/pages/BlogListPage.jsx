import { getAllPosts } from '../lib/blog';
import BlogCard from '../components/BlogCard';
import './DetailPage.css';
import './BlogListPage.css';

function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className="blog-list-page">
      <div className="blog-list-header">
        <span className="detail-badge">BLOG</span>
        <h1>IDEAS Blog</h1>
        <p className="detail-lead">Stories, recaps, and updates from the IDEAS community at SJSU.</p>
      </div>

      {posts.length === 0 ? (
        <p className="blog-empty">No posts yet — check back soon.</p>
      ) : (
        <div className="blog-grid">
          {posts.flatMap(post => post.tabs
            ? post.tabs.map(tab => (
                <BlogCard
                  key={`${post.slug}#${tab.id}`}
                  slug={post.slug}
                  hash={tab.id}
                  title={tab.title}
                  date={post.date}
                  author={post.author}
                  excerpt={tab.excerpt}
                />
              ))
            : [<BlogCard key={post.slug} {...post} />]
          )}
        </div>
      )}
    </div>
  );
}

export default BlogListPage;
