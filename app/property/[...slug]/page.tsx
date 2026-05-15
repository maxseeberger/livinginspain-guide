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
    { slug: ['buying-process'] },
    { slug: ['nota-simple'] },
    { slug: ['cedula-habitabilidad'] },
    { slug: ['management'] },
    { slug: ['tourist-rentals', 'etv-mallorca'] },
    { slug: ['tourist-rentals', 'vut-mainland'] },
    { slug: ['tourist-rentals', 'nra-registry'] },
  ];
}

interface Props {
  params: { slug: string[] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const article = getNestedArticle('property', params.slug);
    return { title: article.title, description: article.description };
  } catch {
    return {};
  }
}

export default function PropertyArticlePage({ params }: Props) {
  let article;
  try {
    article = getNestedArticle('property', params.slug);
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
      breadcrumb={[{ label: 'Property', href: '/property' }]}
    >
      <MDXRemote source={article.content} components={components} />
      <SimplifyButton articleContent={article.content} />
    </ArticleLayout>
  );
}
