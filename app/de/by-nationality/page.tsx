import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Nach Nationalität — Ratgeber für nicht-ansässige Immobilieneigentümer',
  description: 'Maßgeschneiderte Ratgeber für britische, deutsche, amerikanische, Schweizer, niederländische und belgische Immobilieneigentümer in Spanien.',
};

export default function DeByNationalityPage() {
  const articles = getAllArticlesDeep('by-nationality', '/de/by-nationality', 'de');
  return (
    <CategoryLayout
      title="Nach Nationalität"
      description="Ihr Heimatland verändert alles — welches Steuerabkommen gilt, welches Visum Sie benötigen. Ratgeber für britische, deutsche, amerikanische, Schweizer, niederländische und belgische Eigentümer."
      articles={articles}
      locale="de"
    />
  );
}
