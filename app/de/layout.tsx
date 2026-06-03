import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Living in Spain — Ratgeber für nicht-ansässige Immobilieneigentümer',
    template: '%s | living-in-spain.com',
  },
  description:
    'Praktische deutschsprachige Ratgeber zu spanischen Steuern, NIE, Erbschaft, Ferienvermietung und Immobilieneigentum — für nicht-ansässige Eigentümer in Spanien.',
  metadataBase: new URL('https://www.living-in-spain.com'),
  openGraph: {
    siteName: 'Living in Spain',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
