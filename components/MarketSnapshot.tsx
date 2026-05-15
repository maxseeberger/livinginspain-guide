import Link from 'next/link';

// Indicative data — sources: TINSA, Idealista, INE (2019–2024)
const regions = [
  { name: 'Balearic Islands', price: 4200, growth: 52, highlight: true },
  { name: 'Málaga & Costa del Sol', price: 2900, growth: 48, highlight: false },
  { name: 'Canary Islands', price: 2450, growth: 42, highlight: false },
  { name: 'Madrid', price: 4050, growth: 38, highlight: false },
  { name: 'Valencia Region', price: 2000, growth: 36, highlight: false },
  { name: 'Catalonia', price: 3150, growth: 22, highlight: false },
];

const maxGrowth = Math.max(...regions.map((r) => r.growth));

const mallorcaStats = [
  { value: '€4,800', label: 'Avg price per m²', sub: 'Palma area (2024)' },
  { value: '+52%', label: '5-year price growth', sub: 'Balearics 2019–2024' },
  { value: '€7–12k', label: 'Premium areas', sub: 'Andratx, Deià, Son Vida' },
  { value: '4–6%', label: 'Gross rental yield', sub: 'Tourist rental licence required' },
];

export default function MarketSnapshot() {
  return (
    <section className="py-20 bg-navy-dk">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="label-terra mb-3">Property market</p>
            <h2 className="font-display font-bold text-white text-4xl sm:text-5xl tracking-tight leading-[1.0]">
              Where prices are<br className="hidden sm:block" /> rising fastest.
            </h2>
            <p className="text-white/55 mt-4 max-w-lg leading-relaxed">
              The Balearic Islands has led European price growth for five consecutive years.
              Indicative data — sources: TINSA, Idealista, INE.
            </p>
          </div>
          <Link
            href="/property/buying-process"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors group shrink-0 self-start sm:self-end"
          >
            Buying guide
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-12">

          {/* Bar chart */}
          <div className="space-y-4">
            {regions.map((r) => (
              <div key={r.name}>
                <div className="flex items-center justify-between mb-1.5 gap-3">
                  <span className={`text-sm font-medium ${r.highlight ? 'text-white' : 'text-white/65'} flex items-center gap-2`}>
                    {r.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-terra shrink-0" />
                    )}
                    {r.name}
                  </span>
                  <span className={`font-display font-bold text-sm shrink-0 ${r.highlight ? 'text-terra' : 'text-white/65'}`}>
                    +{r.growth}%
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${r.highlight ? 'bg-terra' : 'bg-white/25'}`}
                    style={{ width: `${(r.growth / maxGrowth) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-white/30 text-xs">5-year price growth (2019–2024)</span>
                  <span className="text-white/40 text-xs">~€{r.price.toLocaleString()}/m²</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mallorca stat cards */}
          <div>
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-terra" />
                <p className="label-white">Mallorca at a glance</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {mallorcaStats.map((s) => (
                  <div key={s.label} className="bg-white/[0.05] rounded-xl p-4">
                    <div className="font-display font-bold text-white text-xl leading-none mb-1">
                      {s.value}
                    </div>
                    <div className="text-white/65 text-xs font-medium leading-snug">{s.label}</div>
                    <div className="text-white/35 text-[0.625rem] mt-1 leading-snug">{s.sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-white/10 space-y-2">
                <Link
                  href="/property/buying-process"
                  className="flex items-center justify-between group hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
                >
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">Buying process guide</span>
                  <svg className="w-4 h-4 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/property/tourist-rentals/etv-mallorca"
                  className="flex items-center justify-between group hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
                >
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">Tourist rental licences (ETV)</span>
                  <svg className="w-4 h-4 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/mallorca/living-areas"
                  className="flex items-center justify-between group hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
                >
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">Mallorca living areas guide</span>
                  <svg className="w-4 h-4 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <p className="text-white/25 text-[0.625rem] mt-3 leading-relaxed">
              All figures are indicative. Property prices vary significantly by location, condition, and market timing.
              Always verify with local agents and solicitors before making purchase decisions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
