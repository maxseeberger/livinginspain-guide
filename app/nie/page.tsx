import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'NIE & Residency — Spain Guides for Non-Residents',
  description: 'NIE applications, the 183-day rule, Schengen limits, visas, and residency guides for non-residents in Spain.',
};

export default function NiePage() {
  const articles = getAllArticlesDeep('nie', '/nie');
  return (
    <CategoryLayout
      title="NIE & Residency"
      description="Everything you need to know about getting your NIE, understanding the 183-day and 90-day Schengen rules, and navigating Spanish residency options."
      articles={articles}
    />
  );
}
