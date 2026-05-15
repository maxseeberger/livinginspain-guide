import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Immobilien — Ratgeber für nicht-ansässige Immobilieneigentümer',
  description: 'Kaufprozess, Ferienvermietungslizenzen, Nota simple und Immobilienverwaltung für nicht-ansässige Eigentümer in Spanien.',
};

export default function DePropertyPage() {
  const articles = getAllArticlesDeep('property', '/de/property', 'de');
  return (
    <CategoryLayout
      title="Immobilien"
      description="Vom schrittweisen Kaufprozess bis zu Ferienvermietungslizenzen (ETV auf Mallorca, VUT auf dem Festland), Nota simple und täglichem Immobilienmanagement."
      articles={articles}
      locale="de"
    />
  );
}
