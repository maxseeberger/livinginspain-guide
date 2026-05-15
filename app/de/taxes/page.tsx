import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Steuern & Finanzen — Ratgeber für nicht-ansässige Immobilieneigentümer',
  description: 'Modelo 210, IBI, ITP, Vermögenssteuer, Doppelbesteuerungsabkommen — praktische Steuerratgeber für nicht-ansässige Immobilieneigentümer in Spanien.',
};

export default function DeTaxesPage() {
  const articles = getAllArticlesDeep('taxes', '/de/taxes', 'de');
  return (
    <CategoryLayout
      title="Steuern & Finanzen"
      description="Modelo 210, IBI, ITP, Vermögenssteuer, Doppelbesteuerungsabkommen — praktische Ratgeber zu allen steuerlichen Pflichten als nicht-ansässiger Immobilieneigentümer in Spanien."
      articles={articles}
      locale="de"
    />
  );
}
