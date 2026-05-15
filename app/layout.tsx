import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'livinginSpain.guide — Guides for Non-Resident Property Owners',
    template: '%s | livinginSpain.guide',
  },
  description:
    'Practical English-language guides on Spanish taxes, NIE, inheritance, tourist rentals, and property ownership — for non-resident owners in Spain.',
  metadataBase: new URL('https://livinginspain.guide'),
  openGraph: {
    siteName: 'livinginSpain.guide',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'livinginSpain.guide — Practical guides for non-resident property owners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans text-text bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
