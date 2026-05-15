import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Mallorca — Ratgeber für nicht-ansässige Immobilieneigentümer',
  description: 'Wohngebiete, IBI nach Gemeinde, Flugrabatt für Einwohner, internationale Schulen und Mallorca-spezifische Ratgeber für Immobilieneigentümer.',
};

export default function DeMallorcaPage() {
  const articles = getAllArticlesDeep('mallorca', '/de/mallorca', 'de');
  return (
    <CategoryLayout
      title="Mallorca"
      description="Mallorca-spezifische Ratgeber: die besten Wohngebiete, IBI nach Gemeinde, der Einwohner-Flugrabatt, internationale Schulen und der Transport von Haustieren auf die Insel."
      articles={articles}
      locale="de"
    />
  );
}
