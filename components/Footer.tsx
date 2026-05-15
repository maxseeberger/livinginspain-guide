import Link from 'next/link';

const columns = [
  {
    heading: 'Taxes',
    links: [
      { label: 'Modelo 210', href: '/taxes/modelo-210' },
      { label: 'IBI', href: '/taxes/ibi' },
      { label: 'ITP', href: '/taxes/itp' },
      { label: 'Plusvalía', href: '/taxes/plusvalia' },
      { label: 'Selling property', href: '/taxes/selling-property' },
      { label: 'Wealth tax', href: '/taxes/wealth-tax' },
    ],
  },
  {
    heading: 'NIE & Residency',
    links: [
      { label: 'How to get a NIE', href: '/nie/how-to-apply' },
      { label: 'NIE vs TIE vs NIF', href: '/nie/nie-vs-tie-nif' },
      { label: '183-day rule', href: '/nie/183-day-rule' },
      { label: '90-day Schengen rule', href: '/nie/90-day-schengen-rule' },
      { label: 'Empadronamiento', href: '/nie/empadronamiento' },
    ],
  },
  {
    heading: 'Property',
    links: [
      { label: 'Buying process', href: '/property/buying-process' },
      { label: 'Tourist rentals (Mallorca)', href: '/property/tourist-rentals/etv-mallorca' },
      { label: 'NRA registry', href: '/property/tourist-rentals/nra-registry' },
      { label: 'Nota simple', href: '/property/nota-simple' },
    ],
  },
  {
    heading: 'Inheritance',
    links: [
      { label: 'Balearics exemption', href: '/inheritance/balearics-100-exemption' },
      { label: 'Spanish will', href: '/inheritance/spanish-will' },
      { label: 'By region', href: '/inheritance/by-region' },
      { label: 'Inheritance process', href: '/inheritance/process' },
    ],
  },
  {
    heading: 'Tools',
    links: [
      { label: 'Tax calendar', href: '/tools/tax-calendar' },
      { label: 'Glossary', href: '/tools/glossary' },
      { label: 'Get expert help', href: '/professionals/global-consulting-mallorca' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <p className="font-serif text-white font-semibold text-lg mb-1">
              livinginSpain<span className="text-terra">.</span>guide
            </p>
            <p className="text-white/50 text-xs max-w-sm">
              Independent guides for non-resident property owners in Spain. Not legal or tax advice — always verify with a qualified gestoría.
            </p>
          </div>
          <p className="text-white/30 text-xs whitespace-nowrap">
            © {new Date().getFullYear()} livinginSpain.guide
          </p>
        </div>
      </div>
    </footer>
  );
}
