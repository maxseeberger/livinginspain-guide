import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Erbschaft — Ratgeber für nicht-ansässige Immobilieneigentümer',
  description: 'Balearen 100% Befreiung, spanische Testamente, Erbschaftsprozess nach Region für nicht-ansässige Immobilieneigentümer in Spanien.',
};

export default function DeInheritancePage() {
  const articles = getAllArticlesDeep('inheritance', '/de/inheritance', 'de');
  return (
    <CategoryLayout
      title="Erbschaft"
      description="Die Balearen bieten eine 100% Erbschaftsteuerbefreiung für direkte Nachkommen — erfahren Sie, ob Ihre Erben sich qualifizieren, wie spanische Testamente funktionieren und wie die Steuern nach Region variieren."
      articles={articles}
      locale="de"
    />
  );
}
