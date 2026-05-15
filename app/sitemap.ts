import { MetadataRoute } from 'next';
import { getAllArticlesDeep } from '@/lib/mdx';

const base = 'https://livinginspain.guide';
const sections = ['taxes', 'nie', 'property', 'inheritance', 'banking', 'daily-life', 'by-nationality', 'mallorca', 'tools'];
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, priority: 1.0 },
    { url: `${base}/de`, lastModified: now, priority: 1.0 },
  ];

  for (const section of sections) {
    entries.push({ url: `${base}/${section}`, lastModified: now, priority: 0.8 });
    entries.push({ url: `${base}/de/${section}`, lastModified: now, priority: 0.8 });

    const articles = getAllArticlesDeep(section, `/${section}`);
    for (const article of articles) {
      entries.push({ url: `${base}${article.href}`, lastModified: now, priority: 0.7 });
    }

    const deArticles = getAllArticlesDeep(section, `/de/${section}`, 'de');
    for (const article of deArticles) {
      entries.push({ url: `${base}${article.href}`, lastModified: now, priority: 0.7 });
    }
  }

  return entries;
}
