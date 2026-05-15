import Link from 'next/link';

const cards = [
  {
    label: 'Tax — annual filing',
    title: 'Modelo 210',
    sub: 'Non-Resident Property Tax',
    description: 'Every non-resident owner must file this annually. Here\'s exactly what it is, what you pay, and how to file online yourself.',
    href: '/taxes/modelo-210',
    readingTime: 12,
    bg: 'bg-navy-dk',
    textColor: 'text-white',
    subColor: 'text-white/60',
    labelColor: 'text-terra',
    arrowColor: 'text-terra',
    badge: 'Deadline: 31 Dec',
  },
  {
    label: 'Inheritance — Balearics',
    title: '100% Inheritance Tax Exemption',
    sub: 'Potentially €0 for your heirs',
    description: 'If your property is in Mallorca, Ibiza or Menorca, your heirs may pay zero inheritance tax. Here\'s exactly who qualifies.',
    href: '/inheritance/balearics-100-exemption',
    readingTime: 8,
    bg: 'bg-[#1F5C35]',
    textColor: 'text-white',
    subColor: 'text-white/60',
    labelColor: 'text-[#7ECBA1]',
    arrowColor: 'text-white',
    badge: null,
  },
  {
    label: 'Rentals — Mallorca',
    title: 'Tourist Rental Licence (ETV)',
    sub: 'Fines up to €400,000 without one',
    description: 'Mallorca has the strictest tourist rental rules in Spain. No new licences are being issued in most zones. Here\'s the full picture.',
    href: '/property/tourist-rentals/etv-mallorca',
    readingTime: 10,
    bg: 'bg-cream',
    textColor: 'text-ink',
    subColor: 'text-text-md',
    labelColor: 'text-terra',
    arrowColor: 'text-navy',
    badge: null,
  },
];

export default function FeaturedArticles() {
  return (
    <section className="py-20 bg-sand">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8">

        {/* Section header */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="label mb-3">Start here</p>
            <h2 className="font-display font-bold text-ink text-4xl sm:text-5xl tracking-tight leading-[1.0]">
              Three guides every<br className="hidden sm:block" /> owner must read.
            </h2>
          </div>
          <Link href="/taxes/modelo-210" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-text-md hover:text-ink transition-colors group shrink-0">
            All guides
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`group block ${c.bg} p-8 rounded-2xl hover:scale-[1.015] hover:shadow-card-hover transition-all duration-200`}
            >
              <div className="flex flex-col h-full min-h-[280px]">
                <div className="flex items-start justify-between gap-2 mb-5">
                  <p className={`font-mono text-[0.625rem] uppercase tracking-[0.18em] ${c.labelColor}`}>{c.label}</p>
                  {c.badge && (
                    <span className="bg-terra text-white text-[0.5625rem] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full shrink-0">
                      {c.badge}
                    </span>
                  )}
                </div>
                <h3 className={`font-display font-bold text-3xl leading-[1.05] tracking-tight mb-2 ${c.textColor}`}>
                  {c.title}
                </h3>
                <p className={`text-sm font-medium mb-4 ${c.subColor}`}>{c.sub}</p>
                <p className={`text-sm leading-relaxed flex-1 ${c.subColor}`}>{c.description}</p>
                <div className={`flex items-center gap-2 mt-6 text-sm font-semibold ${c.arrowColor} group-hover:gap-3 transition-all`}>
                  Read guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
