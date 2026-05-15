import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Maritime — Boats, Moorings and the Balearic Sea',
  description: 'Buying a boat in Spain, securing a berth, the Balearic mooring shortage, and marina waiting list guides for non-resident property owners.',
};

export default function MaritimePage() {
  const articles = getAllArticlesDeep('maritime', '/maritime');
  return (
    <CategoryLayout
      title="Maritime"
      description="Buying a boat in Spain, mooring options, the Balearic berth shortage, and how to join the right waiting lists — practical guides for non-resident owners."
      articles={articles}
    />
  );
}
