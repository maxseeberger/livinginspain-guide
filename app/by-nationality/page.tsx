import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'By Nationality — Spain Guides for Non-Residents',
  description: 'Tailored guides for British, German, American, Swiss, Dutch, and Belgian property owners in Spain.',
};

export default function ByNationalityPage() {
  const articles = getAllArticlesDeep('by-nationality', '/by-nationality');
  return (
    <CategoryLayout
      title="By Nationality"
      description="Your home country changes everything — from which tax treaty applies to which visa you need. Guides tailored for British, German, American, Swiss, Dutch, and Belgian owners."
      articles={articles}
    />
  );
}
