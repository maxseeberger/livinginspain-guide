import { getAllArticlesDeep } from '@/lib/mdx';
import CategoryLayout from '@/components/CategoryLayout';

export const metadata = {
  title: 'Werkzeuge & Ressourcen — Ratgeber für nicht-ansässige Immobilieneigentümer',
  description: 'Steuerkalender, Modelo 210 Rechner, Glossar und praktische Werkzeuge für nicht-ansässige Immobilieneigentümer in Spanien.',
};

export default function DeToolsPage() {
  const articles = getAllArticlesDeep('tools', '/de/tools', 'de');
  return (
    <CategoryLayout
      title="Werkzeuge & Ressourcen"
      description="Der Modelo 210 Rechner, der vollständige Steuerfristen-Kalender und ein verständliches Glossar spanischer Immobilien- und Steuerbegriffe."
      articles={articles}
      locale="de"
    />
  );
}
