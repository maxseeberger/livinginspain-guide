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
    heading: 'Tools & More',
    links: [
      { label: 'Tax calendar', href: '/tools/tax-calendar' },
      { label: 'Glossary', href: '/tools/glossary' },
      { label: 'Mallorca guides', href: '/mallorca/living-areas' },
      { label: 'By nationality', href: '/by-nationality/british-owners' },
      { label: 'Get expert help', href: '/professionals/global-consulting-mallorca' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dk text-white mt-16 lg:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-14">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-2xs font-semibold uppercase tracking-[0.12em] text-terra mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.8125rem] text-white/55 hover:text-white transition-colors leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row justify-between items-start gap-5">
          <div>
            <Link href="/" className="font-serif text-white font-semibold text-lg mb-2 block hover:text-cream transition-colors">
              livingin<span className="text-terra">Spain</span>
              <span className="text-white/40 font-sans font-normal text-sm">.guide</span>
            </Link>
            <p className="text-white/35 text-xs leading-relaxed max-w-sm">
              Independent guides for non-resident property owners in Spain. Not legal or tax advice — always verify with a qualified gestoría.
            </p>
          </div>
          <p className="text-white/20 text-xs whitespace-nowrap">
            © {new Date().getFullYear()} livinginSpain.guide
          </p>
        </div>
      </div>
    </footer>
  );
}
