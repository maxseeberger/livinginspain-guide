import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentRoot = path.join(process.cwd(), 'content');

export interface ArticleMeta {
  title: string;
  description: string;
  category: string;
  slug: string;
  lastUpdated: string;
  readingTime: number;
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getArticle(section: string, slug: string): Article {
  const filePath = path.join(contentRoot, section, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { ...(data as ArticleMeta), content };
}

export function getAllArticles(section: string): ArticleMeta[] {
  const dir = path.join(contentRoot, section);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf-8');
      const { data } = matter(raw);
      return data as ArticleMeta;
    });
}

export function getNestedArticle(section: string, slugParts: string[]): Article {
  const filePath = path.join(contentRoot, section, ...slugParts.slice(0, -1), `${slugParts[slugParts.length - 1]}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { ...(data as ArticleMeta), content };
}
