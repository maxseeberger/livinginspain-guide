export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Upcoming deadlines */}
      <div className="bg-cream border border-border rounded-lg px-5 py-5">
        <h3 className="font-serif text-navy font-semibold text-base mb-3">Key deadlines</h3>
        <ul className="space-y-2.5 text-sm">
          <li className="flex justify-between gap-2">
            <span className="text-text">Modelo 210</span>
            <span className="font-semibold text-terra whitespace-nowrap">31 Dec 2026</span>
          </li>
          <li className="flex justify-between gap-2">
            <span className="text-text">IBI</span>
            <span className="font-semibold text-navy whitespace-nowrap">Varies by municipality</span>
          </li>
          <li className="flex justify-between gap-2">
            <span className="text-text">Wealth tax (Patrimonio)</span>
            <span className="font-semibold text-navy whitespace-nowrap">30 Jun 2026</span>
          </li>
        </ul>
        <a href="/tools/tax-calendar" className="mt-4 inline-block text-terra text-xs font-semibold hover:text-terra-lt">
          Full tax calendar →
        </a>
      </div>

      {/* Partner box */}
      <div className="bg-navy rounded-lg px-5 py-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">Recommended partner</p>
        <h3 className="font-serif text-white text-base font-semibold mb-2">Global Consulting Mallorca</h3>
        <p className="text-white/75 text-sm leading-relaxed mb-4">
          Gestoría for non-residents: Modelo 210, NIE, tax filings. Used personally by the site owner.
        </p>
        <a
          href="/professionals/global-consulting-mallorca"
          className="inline-block bg-terra hover:bg-terra-lt text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
        >
          Get help →
        </a>
      </div>

      {/* Quick Modelo 210 estimate */}
      <div className="border border-border rounded-lg px-5 py-5">
        <h3 className="font-serif text-navy font-semibold text-base mb-1">Modelo 210 estimate</h3>
        <p className="text-text-lt text-xs mb-3">Rough annual tax on your property&apos;s cadastral value.</p>
        <a
          href="/tools/modelo-210-calculator"
          className="btn-primary text-sm w-full text-center block"
        >
          Open calculator →
        </a>
      </div>
    </aside>
  );
}
