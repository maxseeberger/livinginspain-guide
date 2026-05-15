import Link from 'next/link';

export default function HomepageHero() {
  return (
    <section className="bg-navy text-white">
      {/* Urgency banner */}
      <div className="bg-terra/90 text-white text-center py-2.5 px-4 text-sm font-medium">
        ⚠️ <strong>Modelo 210 deadline: 31 December 2026</strong> — Every non-resident property owner must file.{' '}
        <Link href="/taxes/modelo-210" className="underline hover:no-underline font-semibold">
          File now or get help →
        </Link>
      </div>

      {/* Main hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-4">
            For non-resident property owners in Spain
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Everything you need to own property in Spain. In plain English.
          </h1>
          <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            61 practical guides on Spanish taxes, NIE applications, inheritance, tourist rentals, and daily life — written for German, British, and international property owners.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/taxes/modelo-210" className="btn-primary">
              Modelo 210 guide
            </Link>
            <Link
              href="/nie/how-to-apply"
              className="inline-block border-2 border-white/40 hover:border-white text-white font-semibold px-5 py-2.5 rounded-md transition-colors duration-150"
            >
              Get your NIE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
