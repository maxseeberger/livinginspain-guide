export default function Sidebar() {
  return (
    <aside className="space-y-5">
      {/* Partner box */}
      <div className="bg-navy rounded-xl px-5 py-6 text-white">
        <p className="text-2xs font-semibold uppercase tracking-widest text-terra mb-1.5">Recommended gestoría</p>
        <h3 className="font-serif text-white text-lg font-semibold mb-2 leading-snug">Global Consulting Mallorca</h3>
        <p className="text-white/65 text-sm leading-relaxed mb-5">
          Modelo 210, NIE applications, tax filings. Used personally by the site owner.
        </p>
        <a
          href="/professionals/global-consulting-mallorca"
          className="block text-center bg-terra hover:bg-terra-lt text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          Get expert help →
        </a>
      </div>

      {/* Key deadlines */}
      <div className="bg-white border border-border rounded-xl px-5 py-5">
        <h3 className="font-serif text-navy font-semibold text-base mb-4">Key deadlines 2026</h3>
        <ul className="space-y-3">
          {[
            { label: 'Modelo 210', date: '31 Dec 2026', urgent: true },
            { label: 'Wealth tax (Patrimonio)', date: '30 Jun 2026', urgent: false },
            { label: 'IBI', date: 'Varies by municipality', urgent: false },
          ].map(({ label, date, urgent }) => (
            <li key={label} className="flex items-start justify-between gap-3">
              <span className="text-text-md text-sm">{label}</span>
              <span className={`text-xs font-semibold whitespace-nowrap mt-0.5 ${urgent ? 'text-terra' : 'text-navy'}`}>
                {date}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-border">
          <a href="/tools/tax-calendar" className="text-terra text-xs font-semibold hover:text-terra-lt transition-colors flex items-center gap-1">
            Full tax calendar
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Modelo 210 calculator */}
      <div className="bg-terra-bg border border-terra/20 rounded-xl px-5 py-5">
        <h3 className="font-serif text-navy font-semibold text-base mb-1">Modelo 210 estimate</h3>
        <p className="text-text-lt text-xs leading-relaxed mb-4">
          Estimate your annual tax based on your property&apos;s cadastral value.
        </p>
        <a
          href="/tools/modelo-210-calculator"
          className="block text-center bg-terra hover:bg-terra-lt text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          Open calculator →
        </a>
      </div>
    </aside>
  );
}
