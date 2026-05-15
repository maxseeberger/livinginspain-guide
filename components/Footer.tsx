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
    <footer className="bg-navy-dk text-white">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 pt-16 pb-8">

        {/* Top: logo + tagline */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group mb-3">
              <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center shrink-0">
                <span className="text-terra font-display font-extrabold text-sm leading-none">ES</span>
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-white/80 transition-colors">
                livingin<span className="text-terra">Spain</span>.guide
              </span>
            </Link>
            <p className="text-white/35 text-xs leading-relaxed max-w-xs">
              Independent guides for non-resident property owners in Spain. Not legal or tax advice — always verify with a qualified gestoría.
            </p>
          </div>
          <Link
            href="/professionals/global-consulting-mallorca"
            className="btn-primary self-start"
          >
            Get expert help
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-white/10">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="label-terra mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.8125rem] text-white/45 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex justify-between items-center gap-4">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} livinginSpain.guide</p>
          <p className="text-white/20 text-xs">Independent. Not legal or tax advice.</p>
        </div>

      </div>
    </footer>
  );
}
