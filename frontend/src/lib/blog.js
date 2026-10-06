import { marked } from 'marked';

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const [, frontmatterBlock, content] = match;
  const data = {};

  frontmatterBlock.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    value = value.replace(/^["']|["']$/g, '');
    data[key] = value;
  });

  return { data, content };
}

const postModules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true });

const posts = Object.entries(postModules).map(([path, raw]) => {
  const { data, content } = parseFrontmatter(raw);
  const slug = data.slug || path.split('/').pop().replace(/\.md$/, '');

  return {
    slug,
    title: data.title || 'Untitled Post',
    date: data.date || '',
    author: data.author || 'IDEAS Club',
    excerpt: data.excerpt || '',
    cover: data.cover || '',
    html: marked.parse(content.trim()),
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug) || null;
}
