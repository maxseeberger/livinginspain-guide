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
  return getAllArticles('taxes').map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const article = getArticle('taxes', params.slug);
    return { title: article.title, description: article.description };
  } catch {
    return {};
  }
}

export default function TaxesArticlePage({ params }: Props) {
  let article;
  try {
    article = getArticle('taxes', params.slug);
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
      breadcrumb={[{ label: 'Taxes & Finance', href: '/taxes' }]}
    >
      <MDXRemote source={article.content} components={components} />
      <SimplifyButton articleContent={article.content} />
    </ArticleLayout>
  );
}
