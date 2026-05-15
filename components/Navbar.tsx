'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  {
    label: 'Taxes',
    href: '/taxes',
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
    href: '/nie',
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
    href: '/property',
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
    href: '/inheritance',
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

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-serif text-white text-lg font-semibold tracking-tight hover:text-cream transition-colors">
            livinginSpain<span className="text-terra">.</span>guide
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-white/85 hover:text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && openMenu === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-border py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-text hover:bg-cream hover:text-terra transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/professionals/global-consulting-mallorca"
              className="ml-3 bg-terra hover:bg-terra-lt text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Get expert help
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white/80 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 pb-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <p className="px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-white/50">
                {item.label}
              </p>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-6 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="px-6 pt-4">
            <Link
              href="/professionals/global-consulting-mallorca"
              className="btn-primary w-full text-center block"
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
