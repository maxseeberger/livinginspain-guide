import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'NIE & Aufenthalt — Ratgeber für nicht-ansässige Immobilieneigentümer',
  description: 'NIE-Antrag, 183-Tage-Regel, Schengen-Grenzen, Visa und Aufenthaltsratgeber für nicht-ansässige Eigentümer in Spanien.',
};

export default function DeNiePage() {
  const articles = getAllArticlesDeep('nie', '/de/nie', 'de');
  return (
    <CategoryLayout
      title="NIE & Aufenthalt"
      description="Alles Wichtige zum NIE-Antrag, zur 183-Tage- und 90-Tage-Schengen-Regel sowie zu spanischen Aufenthaltsoptionen für nicht-ansässige Eigentümer."
      articles={articles}
      locale="de"
    />
  );
}
