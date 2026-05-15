import Link from 'next/link';

const featured = [
  {
    category: 'Taxes & Finance',
    title: 'Modelo 210: Spain\'s Annual Non-Resident Property Tax',
    description: 'Every non-resident property owner must file this annual declaration. Here\'s exactly what it is, what you pay, and how to file online yourself.',
    href: '/taxes/modelo-210',
    readingTime: 12,
    isLead: true,
  },
  {
    category: 'NIE & Residency',
    title: 'How to Get a NIE in Spain: Complete Guide',
    description: 'The NIE is the foundation of everything in Spain — taxes, property, banking. Step-by-step guide for non-residents.',
    href: '/nie/how-to-apply',
    readingTime: 10,
    isLead: false,
  },
  {
    category: 'Inheritance',
    title: 'Balearics 100% Inheritance Tax Exemption',
    description: 'If your property is in Mallorca, Ibiza or Menorca, your heirs may pay zero inheritance tax. Here\'s what applies.',
    href: '/inheritance/balearics-100-exemption',
    readingTime: 8,
    isLead: false,
  },
];

export default function FeaturedArticles() {
  const lead = featured[0];
  const rest = featured.slice(1);

  return (
    <section className="py-16 lg:py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-navy text-3xl lg:text-[2rem] font-semibold">Start here</h2>
            <p className="text-text-lt mt-1.5">The three guides every non-resident owner needs to read.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr] gap-5">
          {/* Lead card */}
          <Link
            href={lead.href}
            className="group block bg-navy rounded-2xl overflow-hidden hover:shadow-card-hover transition-all duration-200"
          >
            <div className="p-8 h-full flex flex-col">
              <span className="text-terra text-xs font-semibold uppercase tracking-widest mb-4 block">
                {lead.category}
              </span>
              <h3 className="font-serif text-white text-2xl font-semibold leading-snug mb-4 group-hover:text-cream transition-colors flex-1">
                {lead.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {lead.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-terra text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Read guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-white/30 text-xs">{lead.readingTime} min read</span>
              </div>
            </div>
          </Link>

          {/* Secondary cards */}
          {rest.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group block bg-white rounded-2xl border border-border overflow-hidden hover:border-terra/40 hover:shadow-card-hover transition-all duration-200"
            >
              <div className="p-7 h-full flex flex-col">
                <span className="text-terra text-xs font-semibold uppercase tracking-widest mb-3 block">
                  {a.category}
                </span>
                <h3 className="font-serif text-navy text-xl font-semibold leading-snug mb-3 group-hover:text-navy-dk transition-colors flex-1">
                  {a.title}
                </h3>
                <p className="text-text-lt text-sm leading-relaxed mb-5">
                  {a.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-terra text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Read guide
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="text-text-lt text-xs">{a.readingTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
