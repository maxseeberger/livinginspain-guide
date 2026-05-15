import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Taxes & Finance — Spain Guides for Non-Residents',
  description: 'Modelo 210, IBI, ITP, wealth tax, double taxation treaties, and more. Practical tax guides for non-resident property owners in Spain.',
};

export default function TaxesPage() {
  const articles = getAllArticlesDeep('taxes', '/taxes');
  return (
    <CategoryLayout
      title="Taxes & Finance"
      description="Modelo 210, IBI, ITP, wealth tax, double taxation treaties — practical guides to every tax obligation you face as a non-resident property owner in Spain."
      articles={articles}
    />
  );
}
