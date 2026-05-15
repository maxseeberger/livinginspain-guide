export default function Sidebar() {
  return (
    <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">

      {/* Gestoría */}
      <div className="bg-navy-dk rounded-2xl p-6 text-white">
        <p className="label-terra mb-2">Recommended gestoría</p>
        <h3 className="font-display font-bold text-white text-xl leading-snug mb-3">Global Consulting Mallorca</h3>
        <p className="text-white/55 text-sm leading-relaxed mb-5">
          Modelo 210, NIE applications, all Spanish tax filings for non-residents. Used personally by the site owner.
        </p>
        <a
          href="/professionals/global-consulting-mallorca"
          className="block text-center bg-terra hover:bg-terra-lt text-white text-sm font-semibold px-4 py-3 rounded-full transition-colors"
        >
          Get expert help →
        </a>
      </div>

      {/* Deadlines */}
      <div className="bg-sand rounded-2xl p-6">
        <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.18em] text-text-md mb-4">Key deadlines 2026</p>
        <div className="space-y-3">
          {[
            { label: 'Modelo 210', date: '31 Dec 2026', hot: true },
            { label: 'Wealth tax', date: '30 Jun 2026', hot: false },
            { label: 'IBI', date: 'Varies by town', hot: false },
          ].map(({ label, date, hot }) => (
            <div key={label} className="flex items-start justify-between gap-2">
              <span className="text-text-md text-sm">{label}</span>
              <span className={`text-xs font-semibold shrink-0 ${hot ? 'text-terra' : 'text-navy'}`}>{date}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <a href="/tools/tax-calendar" className="text-terra text-xs font-semibold hover:text-terra-lt transition-colors flex items-center gap-1">
            Full tax calendar →
          </a>
        </div>
      </div>

      {/* Calculator */}
      <div className="border border-border rounded-2xl p-6">
        <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.18em] text-text-md mb-3">Modelo 210 estimate</p>
        <p className="text-text-lt text-xs leading-relaxed mb-4">
          Estimate your annual tax from your property&apos;s cadastral value.
        </p>
        <a
          href="/tools/modelo-210-calculator"
          className="block text-center bg-navy hover:bg-navy-dk text-white text-sm font-semibold px-4 py-3 rounded-full transition-colors"
        >
          Open calculator →
        </a>
      </div>

    </aside>
  );
}
