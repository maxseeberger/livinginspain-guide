import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Inheritance in Spain — Probate, Wills & Tax Guides for Non-Residents',
  description: 'Complete guides to Spanish inheritance and probate for non-residents: inheritance tax by region, Balearics 100% exemption, Spanish wills, the probate process, certificate of succession, and deadlines.',
};

export default function InheritancePage() {
  const articles = getAllArticlesDeep('inheritance', '/inheritance');
  return (
    <CategoryLayout
      title="Inheritance"
      description="The Balearics offer a 100% inheritance tax exemption for direct family — find out if your heirs qualify, how Spanish wills work, and how rates vary by region."
      articles={articles}
    />
  );
}
