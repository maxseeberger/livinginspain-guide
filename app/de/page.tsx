import HomepageHero from '@/components/HomepageHero';
import FeaturedArticles from '@/components/FeaturedArticles';
import PillarGrid from '@/components/PillarGrid';
import MarketSnapshot from '@/components/MarketSnapshot';

export default function DeHomePage() {
  return (
    <>
      <HomepageHero locale="de" />
      <FeaturedArticles locale="de" />
      <PillarGrid locale="de" />
      <MarketSnapshot locale="de" />
    </>
  );
}
