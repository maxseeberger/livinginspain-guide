import type { Metadata } from 'next';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col font-sans text-text bg-white">
        <Navbar locale="de" />
        <main className="flex-1">{children}</main>
        <Footer locale="de" />
      </body>
    </html>
  );
}
