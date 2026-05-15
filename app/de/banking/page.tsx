import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Banking & Finanzen — Ratgeber für nicht-ansässige Immobilieneigentümer',
  description: 'Spanisches Bankkonto eröffnen, Währungsumtausch und Geldtransfer für nicht-ansässige Immobilieneigentümer in Spanien.',
};

export default function DeBankingPage() {
  const articles = getAllArticlesDeep('banking', '/de/banking', 'de');
  return (
    <CategoryLayout
      title="Banking & Finanzen"
      description="Wie Sie als Nicht-Ansässiger ein spanisches Bankkonto eröffnen und Geld effizient zwischen Ländern transferieren — einschließlich der besten Optionen für Währungsumtausch."
      articles={articles}
      locale="de"
    />
  );
}
