import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Maritime — Boote, Liegeplätze und das Balearische Meer',
  description: 'Boot kaufen in Spanien, Liegeplätze sichern, die Liegeplatzknappheit auf den Balearen und Wartelisten für Marinas — praktische Ratgeber für nicht-ansässige Eigentümer.',
};

export default function DeMaritimePage() {
  const articles = getAllArticlesDeep('maritime', '/de/maritime', 'de');
  return (
    <CategoryLayout
      title="Maritime"
      description="Boot kaufen in Spanien, Liegeplatzoptionen, die Liegeplatzknappheit auf den Balearen und wie Sie sich für die richtigen Wartelisten anmelden — praktische Ratgeber für nicht-ansässige Eigentümer."
      articles={articles}
      locale="de"
    />
  );
}
