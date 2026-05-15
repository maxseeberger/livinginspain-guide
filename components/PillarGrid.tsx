import Link from 'next/link';

const pillars = [
  {
    title: 'Taxes & Finance',
    description: 'Modelo 210, IBI, ITP, wealth tax, double taxation treaties, and how to file online.',
    href: '/taxes/modelo-210',
    icon: '📊',
    count: 12,
  },
  {
    title: 'NIE & Residency',
    description: 'How to get a NIE, the 183-day rule, Schengen limits, and residency visas.',
    href: '/nie/how-to-apply',
    icon: '🪪',
    count: 10,
  },
  {
    title: 'Property',
    description: 'Buying process, tourist rental licences, nota simple, and property management.',
    href: '/property/buying-process',
    icon: '🏡',
    count: 7,
  },
  {
    title: 'Inheritance',
    description: 'Balearics 100% exemption, Spanish wills, the inheritance process, and tax by region.',
    href: '/inheritance/balearics-100-exemption',
    icon: '📜',
    count: 8,
  },
  {
    title: 'Banking & Money',
    description: 'Opening a Spanish bank account and moving money between countries.',
    href: '/banking/open-account',
    icon: '💶',
    count: 2,
  },
  {
    title: 'Daily Life',
    description: 'Electricity contracts, healthcare, car insurance, driving licences, and ITV.',
    href: '/daily-life/electricity-contracts',
    icon: '☀️',
    count: 7,
  },
  {
    title: 'By Nationality',
    description: 'Tailored guides for British, German, American, Swiss, and Dutch/Belgian owners.',
    href: '/by-nationality/british-owners',
    icon: '🌍',
    count: 5,
  },
  {
    title: 'Mallorca',
    description: 'Living areas, IBI rates by municipality, resident flight discount, and schools.',
    href: '/mallorca/living-areas',
    icon: '🏝️',
    count: 5,
  },
];

export default function PillarGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-navy mb-2">Browse by topic</h2>
        <p className="text-text-lt text-lg mb-10">61 guides across 8 areas of Spanish property ownership.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group block border border-border rounded-xl px-6 py-6 hover:border-terra hover:shadow-md transition-all duration-200 bg-white"
            >
              <span className="text-3xl mb-3 block">{p.icon}</span>
              <h3 className="font-serif text-navy text-lg font-semibold mb-1 group-hover:text-terra transition-colors">
                {p.title}
              </h3>
              <p className="text-text-lt text-sm leading-relaxed mb-3">{p.description}</p>
              <span className="text-xs font-semibold text-terra">{p.count} guides →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
