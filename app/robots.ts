import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/professionals/' },
    sitemap: 'https://living-in-spain.com/sitemap.xml',
  };
}
