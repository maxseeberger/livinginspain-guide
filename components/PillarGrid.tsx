import Link from 'next/link';

const pillars = [
  {
    title: 'Taxes & Finance',
    description: 'Modelo 210, IBI, ITP, wealth tax, double taxation treaties, and filing online.',
    href: '/taxes/modelo-210',
    count: 12,
    color: 'terra',
  },
  {
    title: 'NIE & Residency',
    description: 'How to get a NIE, the 183-day rule, Schengen limits, and residency visas.',
    href: '/nie/how-to-apply',
    count: 10,
    color: 'navy',
  },
  {
    title: 'Property',
    description: 'Buying process, tourist rental licences, nota simple, and management.',
    href: '/property/buying-process',
    count: 7,
    color: 'green',
  },
  {
    title: 'Inheritance',
    description: 'Balearics 100% exemption, Spanish wills, the inheritance process by region.',
    href: '/inheritance/balearics-100-exemption',
    count: 8,
    color: 'terra',
  },
  {
    title: 'Banking & Money',
    description: 'Opening a Spanish bank account and moving money between countries.',
    href: '/banking/open-account',
    count: 2,
    color: 'navy',
  },
  {
    title: 'Daily Life',
    description: 'Electricity, healthcare, car insurance, driving licences, and ITV.',
    href: '/daily-life/electricity-contracts',
    count: 7,
    color: 'green',
  },
  {
    title: 'By Nationality',
    description: 'Tailored guides for British, German, American, Swiss, and Dutch owners.',
    href: '/by-nationality/british-owners',
    count: 5,
    color: 'terra',
  },
  {
    title: 'Mallorca',
    description: 'Living areas, IBI by municipality, resident flight discount, and schools.',
    href: '/mallorca/living-areas',
    count: 5,
    color: 'navy',
  },
];

const colorMap: Record<string, { bar: string; tag: string; arrow: string; bg: string }> = {
  terra: {
    bar: 'bg-terra',
    tag: 'text-terra',
    arrow: 'text-terra',
    bg: 'group-hover:bg-terra-bg',
  },
  navy: {
    bar: 'bg-navy',
    tag: 'text-navy',
    arrow: 'text-navy',
    bg: 'group-hover:bg-sand',
  },
  green: {
    bar: 'bg-green',
    tag: 'text-green',
    arrow: 'text-green',
    bg: 'group-hover:bg-[#F0F7F2]',
  },
};

export default function PillarGrid() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-navy text-3xl lg:text-[2rem] font-semibold">Browse by topic</h2>
            <p className="text-text-lt mt-1.5">61 guides across 8 areas of Spanish property ownership.</p>
          </div>
          <Link href="/tools/tax-calendar" className="text-terra text-sm font-semibold hover:text-terra-lt transition-colors whitespace-nowrap shrink-0">
            Tax calendar →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => {
            const c = colorMap[p.color];
            return (
              <Link
                key={p.href}
                href={p.href}
                className={`group block border border-border rounded-xl overflow-hidden hover:shadow-card-hover transition-all duration-200 bg-white ${c.bg}`}
              >
                {/* Color bar */}
                <div className={`h-1 w-full ${c.bar}`} />

                <div className="px-5 py-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-serif text-navy text-[1.0625rem] font-semibold leading-snug group-hover:text-navy-dk transition-colors">
                      {p.title}
                    </h3>
                    <span className={`${c.tag} text-xs font-bold shrink-0 mt-0.5`}>{p.count}</span>
                  </div>
                  <p className="text-text-lt text-sm leading-relaxed mb-4">{p.description}</p>
                  <span className={`${c.arrow} text-xs font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all`}>
                    View guides
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
