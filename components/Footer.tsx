import Link from 'next/link';
import type { Locale } from '@/lib/mdx';

function getColumns(locale: Locale) {
  const p = locale === 'de' ? '/de' : '';
  if (locale === 'de') {
    return [
      {
        heading: 'Steuern',
        links: [
          { label: 'Modelo 210', href: `${p}/taxes/modelo-210` },
          { label: 'IBI', href: `${p}/taxes/ibi` },
          { label: 'ITP', href: `${p}/taxes/itp` },
          { label: 'Plusvalía', href: `${p}/taxes/plusvalia` },
          { label: 'Immobilien verkaufen', href: `${p}/taxes/selling-property` },
          { label: 'Vermögenssteuer', href: `${p}/taxes/wealth-tax` },
        ],
      },
      {
        heading: 'NIE & Aufenthalt',
        links: [
          { label: 'NIE beantragen', href: `${p}/nie/how-to-apply` },
          { label: 'NIE vs. TIE vs. NIF', href: `${p}/nie/nie-vs-tie-nif` },
          { label: '183-Tage-Regel', href: `${p}/nie/183-day-rule` },
          { label: '90-Tage-Schengen-Regel', href: `${p}/nie/90-day-schengen-rule` },
          { label: 'Empadronamiento', href: `${p}/nie/empadronamiento` },
        ],
      },
      {
        heading: 'Immobilien',
        links: [
          { label: 'Kaufprozess', href: `${p}/property/buying-process` },
          { label: 'Ferienvermietung (Mallorca)', href: `${p}/property/tourist-rentals/etv-mallorca` },
          { label: 'NRA-Mietregister', href: `${p}/property/tourist-rentals/nra-registry` },
          { label: 'Nota simple', href: `${p}/property/nota-simple` },
        ],
      },
      {
        heading: 'Erbschaft',
        links: [
          { label: 'Balearen-Befreiung', href: `${p}/inheritance/balearics-100-exemption` },
          { label: 'Spanisches Testament', href: `${p}/inheritance/spanish-will` },
          { label: 'Nach Region', href: `${p}/inheritance/by-region` },
          { label: 'Erbschaftsprozess', href: `${p}/inheritance/process` },
        ],
      },
      {
        heading: 'Werkzeuge & Mehr',
        links: [
          { label: 'Steuerkalender', href: `${p}/tools/tax-calendar` },
          { label: 'Glossar', href: `${p}/tools/glossary` },
          { label: 'Mallorca-Ratgeber', href: `${p}/mallorca` },
          { label: 'Nach Nationalität', href: `${p}/by-nationality` },
          { label: 'Modelo 210 Rechner', href: `${p}/tools/modelo-210-calculator` },
        ],
      },
    ];
  }
  return [
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
        { label: 'Mallorca guides', href: '/mallorca' },
        { label: 'By nationality', href: '/by-nationality' },
        { label: 'Modelo 210 calculator', href: '/tools/modelo-210-calculator' },
      ],
    },
  ];
}

interface FooterProps {
  locale?: Locale;
}

export default function Footer({ locale = 'en' }: FooterProps) {
  const columns = getColumns(locale);
  const homeHref = locale === 'de' ? '/de' : '/';
  const calendarHref = locale === 'de' ? '/de/tools/tax-calendar' : '/tools/tax-calendar';
  const calendarLabel = locale === 'de' ? 'Steuerkalender' : 'Tax calendar';
  const tagline = locale === 'de'
    ? 'Unabhängige Ratgeber für nicht-ansässige Immobilieneigentümer in Spanien. Keine Rechts- oder Steuerberatung — stets mit einer qualifizierten Gestoría verifizieren.'
    : 'Independent guides for non-resident property owners in Spain. Not legal or tax advice — always verify with a qualified gestoría.';
  const legal = locale === 'de' ? 'Unabhängig. Keine Rechts- oder Steuerberatung.' : 'Independent. Not legal or tax advice.';

  return (
    <footer className="bg-navy-dk text-white">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 pt-16 pb-8">

        {/* Top */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <Link href={homeHref} className="inline-flex items-center gap-2 group mb-3">
              <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center shrink-0">
                <span className="text-terra font-display font-bold text-sm leading-none">ES</span>
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-white/80 transition-colors">
                livingin<span className="text-terra">Spain</span>.guide
              </span>
            </Link>
            <p className="text-white/35 text-xs leading-relaxed max-w-xs">{tagline}</p>
          </div>
          <Link href={calendarHref} className="btn-primary self-start">
            {calendarLabel}
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
                    <Link href={link.href} className="text-[0.8125rem] text-white/55 hover:text-white transition-colors">
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
          <p className="text-white/35 text-xs">© {new Date().getFullYear()} livinginSpain.guide</p>
          <p className="text-white/35 text-xs">{legal}</p>
        </div>

      </div>
    </footer>
  );
}
