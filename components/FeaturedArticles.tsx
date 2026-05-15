import Link from 'next/link';

const cards = [
  {
    label: 'Tax',
    title: 'Modelo 210',
    sub: 'Annual Non-Resident Property Tax',
    description: 'Every non-resident must file this annually. Here\'s exactly what it is, what you pay, and how to file online.',
    href: '/taxes/modelo-210',
    readingTime: 12,
    bg: 'bg-navy-dk',
    textColor: 'text-white',
    subColor: 'text-white/50',
    labelColor: 'text-terra',
    arrowColor: 'text-terra',
  },
  {
    label: 'NIE',
    title: 'Get Your NIE',
    sub: 'Complete Application Guide',
    description: 'The NIE is the foundation of everything in Spain — taxes, property, banking.',
    href: '/nie/how-to-apply',
    readingTime: 10,
    bg: 'bg-terra',
    textColor: 'text-white',
    subColor: 'text-white/60',
    labelColor: 'text-white/60',
    arrowColor: 'text-white',
  },
  {
    label: 'Inheritance',
    title: 'Balearics 100% Exemption',
    sub: 'Zero Inheritance Tax',
    description: 'If your property is in Mallorca, Ibiza or Menorca, your heirs may pay zero inheritance tax.',
    href: '/inheritance/balearics-100-exemption',
    readingTime: 8,
    bg: 'bg-cream',
    textColor: 'text-ink',
    subColor: 'text-text-lt',
    labelColor: 'text-terra',
    arrowColor: 'text-navy',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`group block ${c.bg} p-8 rounded-2xl hover:scale-[1.01] transition-all duration-200`}
            >
              <div className="flex flex-col h-full min-h-[260px]">
                <p className={`font-mono text-[0.625rem] uppercase tracking-[0.2em] mb-4 ${c.labelColor}`}>{c.label}</p>
                <h3 className={`font-display font-bold text-3xl leading-[1.0] tracking-tight mb-2 ${c.textColor}`}>
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
