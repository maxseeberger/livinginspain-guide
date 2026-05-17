import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticle } from '@/lib/mdx';
import LegalLayout from '@/components/LegalLayout';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return [{ slug: 'impressum' }, { slug: 'datenschutz' }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const article = getArticle('legal', slug, 'de');
    return { title: article.title, description: article.description };
  } catch { return {}; }
}

export default async function DeLegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let article;
  try { article = getArticle('legal', slug, 'de'); } catch { notFound(); }

  return (
    <LegalLayout title={article.title} lastUpdated={article.lastUpdated} locale="de">
      <MDXRemote source={article.content} />
    </LegalLayout>
  );
}
