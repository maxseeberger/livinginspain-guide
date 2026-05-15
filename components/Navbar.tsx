'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  {
    label: 'Taxes',
    href: '/taxes/modelo-210',
    children: [
      { label: 'Modelo 210 (annual tax)', href: '/taxes/modelo-210' },
      { label: 'Modelo 030 (NIE activation)', href: '/taxes/modelo-030' },
      { label: 'IBI (local property tax)', href: '/taxes/ibi' },
      { label: 'ITP (transfer tax)', href: '/taxes/itp' },
      { label: 'Plusvalía', href: '/taxes/plusvalia' },
      { label: 'Selling property', href: '/taxes/selling-property' },
      { label: 'Wealth tax', href: '/taxes/wealth-tax' },
      { label: 'Germany–Spain DTA', href: '/taxes/germany-spain-dta' },
      { label: 'UK–Spain DTA', href: '/taxes/uk-spain-dta' },
    ],
  },
  {
    label: 'NIE & Residency',
    href: '/nie/how-to-apply',
    children: [
      { label: 'How to get a NIE', href: '/nie/how-to-apply' },
      { label: 'NIE vs TIE vs NIF', href: '/nie/nie-vs-tie-nif' },
      { label: '183-day rule', href: '/nie/183-day-rule' },
      { label: '90-day Schengen rule', href: '/nie/90-day-schengen-rule' },
      { label: 'Non-lucrative visa', href: '/nie/non-lucrative-visa' },
      { label: 'Empadronamiento', href: '/nie/empadronamiento' },
      { label: 'Brexit withdrawal rights', href: '/nie/withdrawal-agreement' },
    ],
  },
  {
    label: 'Property',
    href: '/property/buying-process',
    children: [
      { label: 'Buying process', href: '/property/buying-process' },
      { label: 'Nota simple', href: '/property/nota-simple' },
      { label: 'Tourist rentals — Mallorca', href: '/property/tourist-rentals/etv-mallorca' },
      { label: 'Tourist rentals — mainland', href: '/property/tourist-rentals/vut-mainland' },
      { label: 'NRA rental registry', href: '/property/tourist-rentals/nra-registry' },
      { label: 'Property management', href: '/property/management' },
    ],
  },
  {
    label: 'Inheritance',
    href: '/inheritance/balearics-100-exemption',
    children: [
      { label: 'Balearics 100% exemption', href: '/inheritance/balearics-100-exemption' },
      { label: 'Inheritance process', href: '/inheritance/process' },
      { label: 'Spanish will', href: '/inheritance/spanish-will' },
      { label: 'Tax by region', href: '/inheritance/by-region' },
    ],
  },
  {
    label: 'More',
    href: '#',
    children: [
      { label: 'Banking & currency', href: '/banking/open-account' },
      { label: 'Daily life', href: '/daily-life/electricity-contracts' },
      { label: 'By nationality', href: '/by-nationality/british-owners' },
      { label: 'Mallorca guides', href: '/mallorca/living-areas' },
      { label: 'Tax calendar', href: '/tools/tax-calendar' },
      { label: 'Glossary', href: '/tools/glossary' },
    ],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <Link href="/" className="shrink-0 group flex items-center gap-2">
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

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/professionals/global-consulting-mallorca"
              className="btn-primary"
            >
              Get expert help
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
          <div className="px-5 pt-6">
            <Link
              href="/professionals/global-consulting-mallorca"
              className="btn-primary w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Get expert help
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
