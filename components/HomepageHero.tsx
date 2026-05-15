import Link from 'next/link';

const quickLinks = [
  { label: 'Modelo 210', sub: 'Annual non-resident tax', href: '/taxes/modelo-210' },
  { label: 'Get your NIE', sub: 'Step-by-step application', href: '/nie/how-to-apply' },
  { label: 'Buying property', sub: 'Full process guide', href: '/property/buying-process' },
  { label: 'Balearics inheritance', sub: '100% tax exemption', href: '/inheritance/balearics-100-exemption' },
];

export default function HomepageHero() {
  return (
    <div>
      {/* Deadline banner */}
      <div className="bg-terra text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-2 text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block shrink-0" />
          <span>
            <strong>Modelo 210 deadline: 31 December 2026.</strong>{' '}
            Every non-resident property owner must file.{' '}
            <Link href="/taxes/modelo-210" className="underline underline-offset-2 hover:no-underline font-semibold">
              Read the guide →
            </Link>
          </span>
        </div>
      </div>

      {/* Hero section */}
      <section className="bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-center py-16 lg:py-20">

            {/* Text */}
            <div>
              <p className="text-terra text-xs font-semibold uppercase tracking-[0.15em] mb-5">
                For non-resident property owners in Spain
              </p>
              <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] font-bold mb-6 tracking-tight">
                Own property in Spain.<br />
                <span className="text-cream/80">Know exactly what it means.</span>
              </h1>
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-lg">
                61 practical guides on Spanish taxes, NIE applications, inheritance, tourist rentals, and daily life — written for German, British, and international owners.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/taxes/modelo-210" className="btn-primary">
                  Modelo 210 guide
                </Link>
                <Link
                  href="/nie/how-to-apply"
                  className="inline-flex items-center gap-1.5 border border-white/25 text-white hover:border-white hover:bg-white/10 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-150"
                >
                  Get your NIE
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/10">
                {[
                  { n: '61', label: 'guides' },
                  { n: '8', label: 'topic areas' },
                  { n: '2026', label: 'up to date' },
                ].map(({ n, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-serif text-white font-bold">{n}</div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links card */}
            <div className="hidden lg:block">
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">
                  Most-read guides
                </p>
                <div className="space-y-2">
                  {quickLinks.map((ql) => (
                    <Link
                      key={ql.href}
                      href={ql.href}
                      className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/[0.06] hover:border-white/15 transition-all duration-150 group"
                    >
                      <div>
                        <div className="text-white text-sm font-semibold group-hover:text-cream transition-colors">{ql.label}</div>
                        <div className="text-white/45 text-xs mt-0.5">{ql.sub}</div>
                      </div>
                      <svg className="w-4 h-4 text-terra shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Link href="/professionals/global-consulting-mallorca" className="block text-center py-3 rounded-xl bg-terra hover:bg-terra-lt text-white text-sm font-semibold transition-colors">
                    Talk to a gestoría expert →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
