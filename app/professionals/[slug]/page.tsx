import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticle, getAllArticles } from '@/lib/mdx';
import ArticleLayout from '@/components/ArticleLayout';
import Callout from '@/components/Callout';
import SummaryBox from '@/components/SummaryBox';
import DataTable from '@/components/DataTable';
import CTABox from '@/components/CTABox';
import RelatedGuides from '@/components/RelatedGuides';
import OfficialSources from '@/components/OfficialSources';
import type { Metadata } from 'next';

const components = { Callout, SummaryBox, DataTable, CTABox, RelatedGuides, OfficialSources };

export async function generateStaticParams() {
  return getAllArticles('professionals').map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const article = getArticle('professionals', slug);
    return { title: article.title, description: article.description };
  } catch { return {}; }
}

export default async function ProfessionalsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let article;
  try { article = getArticle('professionals', slug); } catch { notFound(); }

  return (
    <ArticleLayout title={article.title} description={article.description} category={article.category}
      lastUpdated={article.lastUpdated} readingTime={article.readingTime}
      breadcrumb={[{ label: 'Professionals', href: '/professionals' }]}>
      <MDXRemote source={article.content} components={components} />
    </ArticleLayout>
  );
}
