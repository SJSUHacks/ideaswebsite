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

const TAB_MARKER = /<!--\s*tab:\s*([\w-]+)\s*\|\s*(.+?)\s*-->/g;

function parseTabs(content) {
  const markers = [...content.matchAll(TAB_MARKER)];
  if (markers.length === 0) return null;

  return markers.map((marker, i) => {
    const end = i + 1 < markers.length ? markers[i + 1].index : content.length;
    const body = content.slice(marker.index + marker[0].length, end).trim();
    return { id: marker[1], label: marker[2], html: renderMarkdown(body) };
  });
}

// Interviewer questions are written as `**Jupjeet:** ...` paragraphs; tag them so CSS can style them apart from answers.
function renderMarkdown(markdown) {
  return marked.parse(markdown).replace(
    /<p><strong>(Jupjeet):<\/strong>/g,
    '<p class="qa-question"><strong class="qa-label">$1</strong>'
  );
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
    html: renderMarkdown(content.trim()),
    tabs: parseTabs(content),
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug) || null;
}
