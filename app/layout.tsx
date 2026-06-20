import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Living in Spain — Guides for Non-Resident Property Owners',
    template: '%s | living-in-spain.com',
  },
  description:
    'Practical English-language guides on Spanish taxes, NIE, inheritance, tourist rentals, and property ownership — for non-resident owners in Spain.',
  metadataBase: new URL('https://www.living-in-spain.com'),
  alternates: {
    canonical: 'https://www.living-in-spain.com',
  },
  openGraph: {
    siteName: 'Living in Spain',
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
        {/* AdSense verification + ad loading — required for site ownership check */}
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3580202702543018" strategy="afterInteractive" crossOrigin="anonymous" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-456BD0MSHN" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-456BD0MSHN');
        `}</Script>
      </body>
    </html>
  );
}
