import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Alltag — Ratgeber für nicht-ansässige Immobilieneigentümer',
  description: 'Stromverträge, Gesundheitsversorgung, KFZ-Versicherung, Führerschein und alltägliche Praktisches für Immobilieneigentümer in Spanien.',
};

export default function DeDailyLifePage() {
  const articles = getAllArticlesDeep('daily-life', '/de/daily-life', 'de');
  return (
    <CategoryLayout
      title="Alltag"
      description="Praktische Ratgeber zum Alltag als Immobilieneigentümer in Spanien — Strom und Wasser anmelden, Gesundheitsversorgung, Führerschein, KFZ-Versicherung und ITV-Hauptuntersuchung."
      articles={articles}
      locale="de"
    />
  );
}
