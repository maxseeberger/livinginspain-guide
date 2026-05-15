import HomepageHero from '@/components/HomepageHero';
import PillarGrid from '@/components/PillarGrid';
import FeaturedArticles from '@/components/FeaturedArticles';
import Newsletter from '@/components/Newsletter';
import CTABox from '@/components/CTABox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'livinginSpain.guide — Practical Guides for Non-Resident Property Owners in Spain',
  description:
    'English-language guides on Modelo 210, NIE applications, inheritance, tourist rentals, and daily life for non-resident property owners in Spain and Mallorca.',
};

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <FeaturedArticles />
      <PillarGrid />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CTABox
          title="Need a gestoría you can trust?"
          body="Global Consulting Mallorca handles Modelo 210, NIE applications, and all Spanish tax filings for non-residents — in English, German, and Spanish. Used personally by the site owner."
          buttonText="Learn about Global Consulting Mallorca →"
          buttonHref="/professionals/global-consulting-mallorca"
        />
      </div>
      <Newsletter />
    </>
  );
}
