import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Banking & Money — Spain Guides for Non-Residents',
  description: 'Opening a Spanish bank account, currency transfers, and managing your money as a non-resident property owner in Spain.',
};

export default function BankingPage() {
  const articles = getAllArticlesDeep('banking', '/banking');
  return (
    <CategoryLayout
      title="Banking & Money"
      description="How to open a Spanish bank account as a non-resident, and how to move money between countries efficiently — including the best currency transfer options."
      articles={articles}
    />
  );
}
