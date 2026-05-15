import Link from 'next/link';

const pillars = [
  { title: 'Taxes & Finance', description: 'Modelo 210, IBI, ITP, wealth tax, double taxation treaties.', href: '/taxes/modelo-210', count: 12, accent: 'navy' },
  { title: 'NIE & Residency', description: 'NIE application, 183-day rule, Schengen limits, visas.', href: '/nie/how-to-apply', count: 10, accent: 'terra' },
  { title: 'Property', description: 'Buying process, tourist rental licences, nota simple.', href: '/property/buying-process', count: 7, accent: 'green' },
  { title: 'Inheritance', description: 'Balearics 100% exemption, Spanish wills, process by region.', href: '/inheritance/balearics-100-exemption', count: 8, accent: 'navy' },
  { title: 'Banking & Money', description: 'Opening a Spanish bank account, currency transfers.', href: '/banking/open-account', count: 2, accent: 'terra' },
  { title: 'Daily Life', description: 'Electricity, healthcare, car insurance, driving licences.', href: '/daily-life/electricity-contracts', count: 7, accent: 'green' },
  { title: 'By Nationality', description: 'Guides for British, German, American, Swiss owners.', href: '/by-nationality/british-owners', count: 5, accent: 'navy' },
  { title: 'Mallorca', description: 'Living areas, IBI by municipality, resident discounts.', href: '/mallorca/living-areas', count: 5, accent: 'terra' },
];

const accentMap: Record<string, { bar: string; num: string; hover: string }> = {
  navy:  { bar: 'bg-navy',  num: 'text-navy',  hover: 'group-hover:text-navy' },
  terra: { bar: 'bg-terra', num: 'text-terra',  hover: 'group-hover:text-terra' },
  green: { bar: 'bg-green', num: 'text-green',  hover: 'group-hover:text-green' },
};

export default function PillarGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="label mb-3">61 guides</p>
            <h2 className="font-display font-bold text-ink text-4xl sm:text-5xl tracking-tight leading-[1.0]">
              Browse by topic.
            </h2>
          </div>
          <Link href="/tools/tax-calendar" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-text-md hover:text-ink transition-colors group shrink-0">
            Tax calendar
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {pillars.map((p) => {
            const a = accentMap[p.accent];
            return (
              <Link
                key={p.href}
                href={p.href}
                className="group block bg-white hover:bg-sand transition-colors duration-200 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-5 h-1 rounded-full ${a.bar}`} />
                  <span className={`font-display font-bold text-2xl leading-none ${a.num} opacity-25 group-hover:opacity-100 transition-opacity`}>
                    {p.count}
                  </span>
                </div>
                <h3 className={`font-display font-bold text-ink text-lg leading-snug mb-2 tracking-tight ${a.hover} transition-colors`}>
                  {p.title}
                </h3>
                <p className="text-text-md text-sm leading-relaxed mb-4">{p.description}</p>
                <span className={`text-xs font-medium flex items-center gap-1.5 ${a.num} group-hover:gap-2.5 transition-all`}>
                  Explore
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
