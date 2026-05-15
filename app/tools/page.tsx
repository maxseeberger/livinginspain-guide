import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Tools & Resources — Spain Guides for Non-Residents',
  description: 'Tax calendar, Modelo 210 calculator, glossary, and practical tools for non-resident property owners in Spain.',
};

export default function ToolsPage() {
  const articles = getAllArticlesDeep('tools', '/tools');
  return (
    <CategoryLayout
      title="Tools & Resources"
      description="The Modelo 210 calculator, full tax deadline calendar, and a plain-English glossary of Spanish property and tax terms."
      articles={articles}
    />
  );
}
