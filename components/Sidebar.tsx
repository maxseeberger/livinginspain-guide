import type { Locale } from '@/lib/mdx';

interface SidebarProps {
  locale?: Locale;
}

export default function Sidebar({ locale = 'en' }: SidebarProps) {
  const de = locale === 'de';
  const calendarHref = de ? '/de/tools/tax-calendar' : '/tools/tax-calendar';

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

    </aside>
  );
}
