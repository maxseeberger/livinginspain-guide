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

const SummaryBoxDe = (props: { children: React.ReactNode }) => <SummaryBox {...props} label="Kurzfassung" />;
const CTABoxDe = (props: { title?: string; body?: string; buttonText?: string; buttonHref?: string }) => <CTABox {...props} locale="de" />;
const RelatedGuidesDe = (props: { guides: { title: string; href: string }[] }) => <RelatedGuides {...props} label="Verwandte Ratgeber" />;
const OfficialSourcesDe = (props: { sources: { label: string; href: string }[] }) => <OfficialSources {...props} label="Offizielle Quellen" />;
const components = { Callout, SummaryBox: SummaryBoxDe, DataTable, CTABox: CTABoxDe, RelatedGuides: RelatedGuidesDe, OfficialSources: OfficialSourcesDe };

export async function generateStaticParams() {
  return getAllArticles('tools', 'de').map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const article = getArticle('tools', slug, 'de');
    return { title: article.title, description: article.description };
  } catch { return {}; }
}

export default async function DeToolsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let article;
  try { article = getArticle('tools', slug, 'de'); } catch { notFound(); }

  return (
    <ArticleLayout title={article.title} description={article.description} category={article.category}
      lastUpdated={article.lastUpdated} readingTime={article.readingTime} locale="de"
      breadcrumb={[{ label: 'Werkzeuge & Ressourcen', href: '/de/tools' }]}>
      <MDXRemote source={article.content} components={components} />
      <SimplifyButton simple={article.simplifySimple} bullet={article.simplifyBullet} example={article.simplifyExample} locale="de" />
    </ArticleLayout>
  );
}
