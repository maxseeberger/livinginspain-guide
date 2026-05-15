import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Mallorca — Spain Guides for Non-Residents',
  description: 'Living areas, IBI rates by municipality, resident flight discounts, international schools, and Mallorca-specific guides for property owners.',
};

export default function MallorcaPage() {
  const articles = getAllArticlesDeep('mallorca', '/mallorca');
  return (
    <CategoryLayout
      title="Mallorca"
      description="Mallorca-specific guides: the best living areas, IBI rates by municipality, the resident flight discount, international schools, and shipping pets to the island."
      articles={articles}
    />
  );
}
