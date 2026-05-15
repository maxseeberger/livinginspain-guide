import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Daily Life — Spain Guides for Non-Residents',
  description: 'Electricity contracts, healthcare, car insurance, driving licences, and everyday practicalities for property owners spending time in Spain.',
};

export default function DailyLifePage() {
  const articles = getAllArticlesDeep('daily-life', '/daily-life');
  return (
    <CategoryLayout
      title="Daily Life"
      description="Practical guides to the everyday side of owning property in Spain — setting up electricity and water, healthcare access, driving licences, car insurance, and ITV inspections."
      articles={articles}
    />
  );
}
