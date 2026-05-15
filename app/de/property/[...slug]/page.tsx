import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getNestedArticle } from '@/lib/mdx';
import ArticleLayout from '@/components/ArticleLayout';
import SimplifyButton from '@/components/SimplifyButton';
import Callout from '@/components/Callout';
import SummaryBox from '@/components/SummaryBox';
import DataTable from '@/components/DataTable';
import CTABox from '@/components/CTABox';
import RelatedGuides from '@/components/RelatedGuides';
import OfficialSources from '@/components/OfficialSources';
import type { Metadata } from 'next';

const components = { Callout, SummaryBox, DataTable, CTABox, RelatedGuides, OfficialSources };

export async function generateStaticParams() {
  return [
    { slug: ['buying-process'] }, { slug: ['nota-simple'] },
    { slug: ['cedula-habitabilidad'] }, { slug: ['management'] },
    { slug: ['tourist-rentals', 'etv-mallorca'] },
    { slug: ['tourist-rentals', 'vut-mainland'] },
    { slug: ['tourist-rentals', 'nra-registry'] },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const article = getNestedArticle('property', slug, 'de');
    return { title: article.title, description: article.description };
  } catch { return {}; }
}

export default async function DePropertyArticlePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  let article;
  try { article = getNestedArticle('property', slug, 'de'); } catch { notFound(); }

  return (
    <ArticleLayout title={article.title} description={article.description} category={article.category}
      lastUpdated={article.lastUpdated} readingTime={article.readingTime} locale="de"
      breadcrumb={[{ label: 'Immobilien', href: '/de/property' }]}>
      <MDXRemote source={article.content} components={components} />
      <SimplifyButton simple={article.simplifySimple} bullet={article.simplifyBullet} example={article.simplifyExample} />
    </ArticleLayout>
  );
}
