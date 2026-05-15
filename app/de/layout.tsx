import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'livinginSpain.guide — Ratgeber für nicht-ansässige Immobilieneigentümer',
    template: '%s | livinginSpain.guide',
  },
  description:
    'Praktische deutschsprachige Ratgeber zu spanischen Steuern, NIE, Erbschaft, Ferienvermietung und Immobilieneigentum — für nicht-ansässige Eigentümer in Spanien.',
  metadataBase: new URL('https://livinginspain.guide'),
  openGraph: {
    siteName: 'livinginSpain.guide',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
