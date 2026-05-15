'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { Locale } from '@/lib/mdx';

function getNavItems(locale: Locale) {
  const p = locale === 'de' ? '/de' : '';
  if (locale === 'de') {
    return [
      {
        label: 'Steuern',
        href: `${p}/taxes`,
        children: [
          { label: 'Modelo 210 (Jahressteuer)', href: `${p}/taxes/modelo-210` },
          { label: 'Modelo 030 (NIE-Aktivierung)', href: `${p}/taxes/modelo-030` },
          { label: 'IBI (kommunale Grundsteuer)', href: `${p}/taxes/ibi` },
          { label: 'ITP (Grunderwerbsteuer)', href: `${p}/taxes/itp` },
          { label: 'Plusvalía', href: `${p}/taxes/plusvalia` },
          { label: 'Immobilien verkaufen', href: `${p}/taxes/selling-property` },
          { label: 'Vermögenssteuer', href: `${p}/taxes/wealth-tax` },
          { label: 'DBA Deutschland–Spanien', href: `${p}/taxes/germany-spain-dta` },
          { label: 'DBA UK–Spanien', href: `${p}/taxes/uk-spain-dta` },
        ],
      },
      {
        label: 'NIE & Aufenthalt',
        href: `${p}/nie`,
        children: [
          { label: 'NIE beantragen', href: `${p}/nie/how-to-apply` },
          { label: 'NIE vs. TIE vs. NIF', href: `${p}/nie/nie-vs-tie-nif` },
          { label: 'Die 183-Tage-Regel', href: `${p}/nie/183-day-rule` },
          { label: 'Die 90-Tage-Schengen-Regel', href: `${p}/nie/90-day-schengen-rule` },
          { label: 'Nicht-Erwerbstätigen-Visum', href: `${p}/nie/non-lucrative-visa` },
          { label: 'Empadronamiento', href: `${p}/nie/empadronamiento` },
          { label: 'Brexit-Bestandsschutzrechte', href: `${p}/nie/withdrawal-agreement` },
        ],
      },
      {
        label: 'Immobilien',
        href: `${p}/property`,
        children: [
          { label: 'Kaufprozess', href: `${p}/property/buying-process` },
          { label: 'Nota simple', href: `${p}/property/nota-simple` },
          { label: 'Ferienvermietung — Mallorca', href: `${p}/property/tourist-rentals/etv-mallorca` },
          { label: 'Ferienvermietung — Festland', href: `${p}/property/tourist-rentals/vut-mainland` },
          { label: 'NRA-Mietregister', href: `${p}/property/tourist-rentals/nra-registry` },
          { label: 'Immobilienverwaltung', href: `${p}/property/management` },
        ],
      },
      {
        label: 'Erbschaft',
        href: `${p}/inheritance`,
        children: [
          { label: 'Balearen 100% Befreiung', href: `${p}/inheritance/balearics-100-exemption` },
          { label: 'Erbschaftsprozess', href: `${p}/inheritance/process` },
          { label: 'Spanisches Testament', href: `${p}/inheritance/spanish-will` },
          { label: 'Steuer nach Region', href: `${p}/inheritance/by-region` },
        ],
      },
      {
        label: 'Mehr',
        href: '#',
        children: [
          { label: 'Banking & Währungsumtausch', href: `${p}/banking` },
          { label: 'Alltag', href: `${p}/daily-life` },
          { label: 'Nach Nationalität', href: `${p}/by-nationality` },
          { label: 'Mallorca-Ratgeber', href: `${p}/mallorca` },
          { label: 'Steuerkalender', href: `${p}/tools/tax-calendar` },
          { label: 'Glossar', href: `${p}/tools/glossary` },
        ],
      },
    ];
  }
  return [
    {
      label: 'Taxes',
      href: `${p}/taxes`,
      children: [
        { label: 'Modelo 210 (annual tax)', href: `${p}/taxes/modelo-210` },
        { label: 'Modelo 030 (NIE activation)', href: `${p}/taxes/modelo-030` },
        { label: 'IBI (local property tax)', href: `${p}/taxes/ibi` },
        { label: 'ITP (transfer tax)', href: `${p}/taxes/itp` },
        { label: 'Plusvalía', href: `${p}/taxes/plusvalia` },
        { label: 'Selling property', href: `${p}/taxes/selling-property` },
        { label: 'Wealth tax', href: `${p}/taxes/wealth-tax` },
        { label: 'Germany–Spain DTA', href: `${p}/taxes/germany-spain-dta` },
        { label: 'UK–Spain DTA', href: `${p}/taxes/uk-spain-dta` },
      ],
    },
    {
      label: 'NIE & Residency',
      href: `${p}/nie`,
      children: [
        { label: 'How to get a NIE', href: `${p}/nie/how-to-apply` },
        { label: 'NIE vs TIE vs NIF', href: `${p}/nie/nie-vs-tie-nif` },
        { label: '183-day rule', href: `${p}/nie/183-day-rule` },
        { label: '90-day Schengen rule', href: `${p}/nie/90-day-schengen-rule` },
        { label: 'Non-lucrative visa', href: `${p}/nie/non-lucrative-visa` },
        { label: 'Empadronamiento', href: `${p}/nie/empadronamiento` },
        { label: 'Brexit withdrawal rights', href: `${p}/nie/withdrawal-agreement` },
      ],
    },
    {
      label: 'Property',
      href: `${p}/property`,
      children: [
        { label: 'Buying process', href: `${p}/property/buying-process` },
        { label: 'Nota simple', href: `${p}/property/nota-simple` },
        { label: 'Tourist rentals — Mallorca', href: `${p}/property/tourist-rentals/etv-mallorca` },
        { label: 'Tourist rentals — mainland', href: `${p}/property/tourist-rentals/vut-mainland` },
        { label: 'NRA rental registry', href: `${p}/property/tourist-rentals/nra-registry` },
        { label: 'Property management', href: `${p}/property/management` },
      ],
    },
    {
      label: 'Inheritance',
      href: `${p}/inheritance`,
      children: [
        { label: 'Balearics 100% exemption', href: `${p}/inheritance/balearics-100-exemption` },
        { label: 'Inheritance process', href: `${p}/inheritance/process` },
        { label: 'Spanish will', href: `${p}/inheritance/spanish-will` },
        { label: 'Tax by region', href: `${p}/inheritance/by-region` },
      ],
    },
    {
      label: 'More',
      href: '#',
      children: [
        { label: 'Banking & currency', href: `${p}/banking` },
        { label: 'Daily life', href: `${p}/daily-life` },
        { label: 'By nationality', href: `${p}/by-nationality` },
        { label: 'Mallorca guides', href: `${p}/mallorca` },
        { label: 'Tax calendar', href: `${p}/tools/tax-calendar` },
        { label: 'Glossary', href: `${p}/tools/glossary` },
      ],
    },
  ];
}

interface NavbarProps {
  locale?: Locale;
}

export default function Navbar({ locale = 'en' }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isGerman = pathname.startsWith('/de');
  const otherLangHref = isGerman ? pathname.slice(3) || '/' : `/de${pathname}`;
  const navItems = getNavItems(locale);
  const ctaLabel = locale === 'de' ? 'Steuerkalender' : 'Tax calendar';
  const ctaHref = locale === 'de' ? '/de/tools/tax-calendar' : '/tools/tax-calendar';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-200 ${scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'border-b border-border-lt'}`}>
      <nav className="max-w-screen-xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href={locale === 'de' ? '/de' : '/'} className="shrink-0 group flex items-center gap-2">
            <div className="w-7 h-7 bg-navy rounded-md flex items-center justify-center shrink-0">
              <span className="text-terra font-display font-bold text-xs leading-none">ES</span>
            </div>
            <span className="font-display font-bold text-ink text-[0.9375rem] tracking-tight group-hover:text-navy transition-colors">
              livingin<span className="text-terra">Spain</span>.guide
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3.5 py-2.5 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                    openMenu === item.label
                      ? 'text-ink bg-sand'
                      : 'text-text-md hover:text-ink hover:bg-sand'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className={`w-3 h-3 transition-transform duration-150 ${openMenu === item.label ? 'rotate-180 text-terra' : 'text-text-lt'}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {item.children && openMenu === item.label && (
                  <div className="dropdown-enter absolute top-[calc(100%+4px)] left-0 w-60 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.14)] border border-border-lt overflow-hidden z-50">
                    <div className="p-1.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3.5 py-2 text-sm text-text-md hover:text-ink hover:bg-sand rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right — CTA + language switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href={otherLangHref} className="text-xs font-mono font-semibold uppercase tracking-widest text-text-md hover:text-ink transition-colors px-2 py-1 rounded-md hover:bg-sand">
              {isGerman ? 'EN' : 'DE'}
            </Link>
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-text-md hover:text-ink p-2 rounded-lg hover:bg-sand transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white pb-6 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="px-5 pt-5">
              <p className="label-terra mb-2">{item.label}</p>
              <div className="space-y-0.5">
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-3 py-2 text-sm text-text-md hover:text-ink hover:bg-sand rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="px-5 pt-6 flex gap-3">
            <Link
              href={otherLangHref}
              className="flex-1 text-center border border-border text-text-md text-sm font-semibold px-4 py-3 rounded-full hover:bg-sand transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {isGerman ? '🇬🇧 English' : '🇩🇪 Deutsch'}
            </Link>
            <Link
              href={ctaHref}
              className="flex-1 btn-primary justify-center"
              onClick={() => setMobileOpen(false)}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
