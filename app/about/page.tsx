import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — living-in-spain.com',
  description: 'Why living-in-spain.com was built, who is behind it, and our editorial approach. A free, independent resource for non-resident property owners in Spain.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-navy-dk">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-12 lg:py-16">
          <div className="max-w-2xl">
            <p className="label-terra mb-5">About</p>
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl leading-tight tracking-tight mb-5">
              About living-in-spain.com
            </h1>
            <p className="text-white/55 text-lg leading-relaxed">
              A free, independent guide built by someone who needed it and couldn't find it.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-12 lg:py-16">
        <div className="max-w-2xl prose prose-lg font-sans">

          <h2>Why this site exists</h2>
          <p>
            I'm Max Seeberger — a management consultant based in Germany and a non-resident property owner in Mallorca. When I first had to deal with Modelo 210, the NIE process, IBI, and everything else that comes with owning property in Spain as a foreigner, I couldn't find a clear, up-to-date English-language resource that explained how it all worked.
          </p>
          <p>
            Everything I found was either in Spanish, three years out of date, buried in a government PDF, or vague enough to be useless. So I built the resource I wished I'd had.
          </p>

          <h2>What this site covers</h2>
          <p>
            living-in-spain.com covers the practical, legal, and financial side of owning property in Spain as a non-resident — primarily for British, German, and Dutch nationals. The main topics are:
          </p>
          <ul>
            <li>Non-resident income tax (Modelo 210) and other Spanish taxes</li>
            <li>NIE applications and residency rules</li>
            <li>Buying and selling property as a non-resident</li>
            <li>Inheritance tax, Spanish wills, and estate planning</li>
            <li>Banking, currency, and daily life in Spain</li>
            <li>Mallorca-specific guides including maritime and mooring</li>
          </ul>
          <p>
            All content is also available in German at <Link href="/de" className="text-terra hover:text-terra-lt transition-colors">/de</Link>.
          </p>

          <h2>Editorial approach</h2>
          <p>
            Every article is written to be practical and specific — not vague. Where rules vary by region or change over time, we say so explicitly. All content carries a "last updated" date.
          </p>
          <p>
            This site is not a law firm or tax advisory. The guides are informational — they help you understand the landscape, prepare for a conversation with your gestoría or abogado, and ask the right questions. We always recommend verifying specifics with a qualified Spanish professional.
          </p>

          <h2>Independence</h2>
          <p>
            living-in-spain.com is independently owned and operated. It has no affiliation with any law firm, gestoría, bank, or property agency. There are no sponsored articles and no paid placements. The site is supported by display advertising.
          </p>

          <h2>Contact</h2>
          <p>
            Questions, corrections, or feedback are welcome at{' '}
            <a href="mailto:info@carsenmallorca.com" className="text-terra hover:text-terra-lt transition-colors">
              info@carsenmallorca.com
            </a>
            .
          </p>
          <p>
            Full legal details are in the <Link href="/legal/imprint" className="text-terra hover:text-terra-lt transition-colors">legal notice</Link>.
          </p>

        </div>
      </div>
    </div>
  );
}
