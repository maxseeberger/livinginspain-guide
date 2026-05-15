import Link from 'next/link';

export default function HomepageHero() {
  return (
    <div>
      {/* Deadline strip */}
      <div className="bg-terra">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-2.5 flex items-center gap-3 text-white text-sm">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-white/70 shrink-0 hidden sm:block">Deadline</span>
          <span className="w-px h-3 bg-white/30 hidden sm:block shrink-0" />
          <span className="font-medium">
            Modelo 210 — file by <strong>31 December 2026.</strong>
          </span>
          <Link href="/taxes/modelo-210" className="ml-auto shrink-0 text-white/80 hover:text-white underline underline-offset-2 text-sm font-medium whitespace-nowrap">
            Read guide →
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy-dk overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 pt-16 pb-0 lg:pt-20">
          <div className="grid lg:grid-cols-[1fr_420px] gap-0 lg:gap-16 items-end">

            {/* Left — text */}
            <div className="pb-16 lg:pb-20">
              <p className="label-white mb-6">For non-resident property owners in Spain</p>

              <h1 className="font-display font-bold text-white leading-[0.95] tracking-tighter text-[clamp(2.75rem,6vw,5.5rem)] mb-8">
                Own property<br className="hidden sm:block" /> in Spain.<br />
                <span className="text-terra">Know what<br className="hidden sm:block" /> it means.</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                61 practical guides on Spanish taxes, NIE applications, inheritance, tourist rentals, and daily life — in plain English.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/taxes/modelo-210" className="btn-primary">
                  Modelo 210 guide
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/nie/how-to-apply" className="btn-outline-white">
                  Get your NIE
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
                {[
                  { n: '61', unit: 'guides' },
                  { n: '8', unit: 'topics' },
                  { n: '2026', unit: 'updated' },
                ].map(({ n, unit }) => (
                  <div key={unit}>
                    <div className="font-display font-bold text-white text-3xl leading-none tracking-tight">{n}</div>
                    <div className="label-white mt-1.5">{unit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stacked guide cards */}
            <div className="hidden lg:flex flex-col gap-0 self-end">
              {[
                { label: 'Most read', title: 'Modelo 210', sub: 'Annual non-resident tax', href: '/taxes/modelo-210', bg: 'bg-navy' },
                { label: 'Essential', title: 'Get your NIE', sub: 'Step-by-step application', href: '/nie/how-to-apply', bg: 'bg-terra' },
                { label: 'Balearics', title: '100% Inheritance\nTax Exemption', sub: 'How it works in Mallorca', href: '/inheritance/balearics-100-exemption', bg: 'bg-[#1F5C35]' },
              ].map((card, i) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className={`group block ${card.bg} px-6 py-5 border-t border-white/10 hover:brightness-110 transition-all`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="label-white mb-1">{card.label}</p>
                      <h3 className="font-display font-bold text-white text-xl leading-snug whitespace-pre-line">
                        {card.title}
                      </h3>
                      <p className="text-white/50 text-xs mt-1">{card.sub}</p>
                    </div>
                    <svg className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
              {/* Bottom CTA */}
              <Link
                href="/professionals/global-consulting-mallorca"
                className="block bg-terra px-6 py-4 border-t border-white/10 group hover:brightness-110 transition-all"
              >
                <p className="label-white mb-0.5">Recommended gestoría</p>
                <p className="text-white font-display font-bold text-base">Get expert help →</p>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
