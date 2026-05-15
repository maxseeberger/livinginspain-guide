import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticle, getAllArticles } from '@/lib/mdx';
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

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllArticles('by-nationality').map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const article = getArticle('by-nationality', params.slug);
    return { title: article.title, description: article.description };
  } catch {
    return {};
  }
}

export default function ByNationalityArticlePage({ params }: Props) {
  let article;
  try {
    article = getArticle('by-nationality', params.slug);
  } catch {
    notFound();
  }

  return (
    <ArticleLayout
      title={article.title}
      description={article.description}
      category={article.category}
      lastUpdated={article.lastUpdated}
      readingTime={article.readingTime}
      breadcrumb={[{ label: 'By Nationality', href: '/by-nationality' }]}
    >
      <MDXRemote source={article.content} components={components} />
      <SimplifyButton articleContent={article.content} />
    </ArticleLayout>
  );
}
