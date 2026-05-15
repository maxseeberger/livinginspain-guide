import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Locale = 'en' | 'de';

const contentRoot = path.join(process.cwd(), 'content');

function sectionDir(section: string, locale?: Locale) {
  if (locale && locale !== 'en') {
    return path.join(contentRoot, locale, section);
  }
  return path.join(contentRoot, section);
}

export interface ArticleMeta {
  title: string;
  description: string;
  category: string;
  slug: string;
  lastUpdated: string;
  readingTime: number;
  simplifySimple: string;
  simplifyBullet: string;
  simplifyExample: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export interface ArticleWithHref extends ArticleMeta {
  href: string;
}

export function getArticle(section: string, slug: string, locale?: Locale): Article {
  const filePath = path.join(sectionDir(section, locale), `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { ...(data as ArticleMeta), content };
}

export function getAllArticles(section: string, locale?: Locale): ArticleMeta[] {
  const dir = sectionDir(section, locale);
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

export function getAllArticlesDeep(section: string, basePath: string, locale?: Locale): ArticleWithHref[] {
  const dir = sectionDir(section, locale);
  if (!fs.existsSync(dir)) return [];

  const results: ArticleWithHref[] = [];

  function readDir(dirPath: string, urlPath: string) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        readDir(path.join(dirPath, entry.name), `${urlPath}/${entry.name}`);
      } else if (entry.name.endsWith('.mdx')) {
        const raw = fs.readFileSync(path.join(dirPath, entry.name), 'utf-8');
        const { data } = matter(raw);
        const slug = entry.name.replace(/\.mdx$/, '');
        results.push({
          ...(data as ArticleMeta),
          href: `${urlPath}/${slug}`,
        });
      }
    }
  }

  readDir(dir, basePath);
  return results;
}

export function getNestedArticle(section: string, slugParts: string[], locale?: Locale): Article {
  const filePath = path.join(sectionDir(section, locale), ...slugParts.slice(0, -1), `${slugParts[slugParts.length - 1]}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { ...(data as ArticleMeta), content };
}
