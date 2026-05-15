import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Property — Spain Guides for Non-Residents',
  description: 'Buying process, tourist rental licences, nota simple, and property management guides for non-residents owning property in Spain.',
};

export default function PropertyPage() {
  const articles = getAllArticlesDeep('property', '/property');
  return (
    <CategoryLayout
      title="Property"
      description="From the step-by-step buying process to tourist rental licences (ETV in Mallorca, VUT on the mainland), nota simple checks, and day-to-day property management."
      articles={articles}
    />
  );
}
