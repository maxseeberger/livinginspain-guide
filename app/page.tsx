import HomepageHero from '@/components/HomepageHero';
import FeaturedArticles from '@/components/FeaturedArticles';
import PillarGrid from '@/components/PillarGrid';
import MarketSnapshot from '@/components/MarketSnapshot';
import Newsletter from '@/components/Newsletter';
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
      <MarketSnapshot />
      <Newsletter />
    </>
  );
}
