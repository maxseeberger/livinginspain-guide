import type { Locale } from '@/lib/mdx';

interface SidebarProps {
  locale?: Locale;
}

export default function Sidebar({ locale = 'en' }: SidebarProps) {
  const de = locale === 'de';
  const calendarHref = de ? '/de/tools/tax-calendar' : '/tools/tax-calendar';
  const calcHref = de ? '/de/tools/modelo-210-calculator' : '/tools/modelo-210-calculator';

  return (
    <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">

      {/* Deadlines */}
      <div className="bg-sand rounded-2xl p-6">
        <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.18em] text-text-md mb-4">
          {de ? 'Wichtige Fristen 2026' : 'Key deadlines 2026'}
        </p>
        <div className="space-y-3">
          {[
            { label: 'Modelo 210', date: '31 Dec 2026', hot: true },
            { label: de ? 'Vermögenssteuer' : 'Wealth tax', date: '30 Jun 2026', hot: false },
            { label: 'IBI', date: de ? 'Je nach Gemeinde' : 'Varies by town', hot: false },
          ].map(({ label, date, hot }) => (
            <div key={label} className="flex items-start justify-between gap-2">
              <span className="text-text-md text-sm">{label}</span>
              <span className={`text-xs font-semibold shrink-0 ${hot ? 'text-terra' : 'text-navy'}`}>{date}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <a href={calendarHref} className="text-terra text-xs font-semibold hover:text-terra-lt transition-colors flex items-center gap-1">
            {de ? 'Vollständiger Steuerkalender →' : 'Full tax calendar →'}
          </a>
        </div>
      </div>

      {/* Calculator */}
      <div className="border border-border rounded-2xl p-6">
        <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.18em] text-text-md mb-3">
          {de ? 'Modelo 210 Schätzung' : 'Modelo 210 estimate'}
        </p>
        <p className="text-text-lt text-xs leading-relaxed mb-4">
          {de
            ? 'Schätzen Sie Ihre Jahressteuer anhand des Katasterwertes Ihrer Immobilie.'
            : "Estimate your annual tax from your property's cadastral value."}
        </p>
        <a
          href={calcHref}
          className="block text-center bg-navy hover:bg-navy-dk text-white text-sm font-semibold px-4 py-3 rounded-full transition-colors"
        >
          {de ? 'Rechner öffnen →' : 'Open calculator →'}
        </a>
      </div>

    </aside>
  );
}
