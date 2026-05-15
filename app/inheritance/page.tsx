import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Inheritance — Spain Guides for Non-Residents',
  description: 'Balearics 100% exemption, Spanish wills, inheritance process by region, and how to handle a Spanish estate as a non-resident.',
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
