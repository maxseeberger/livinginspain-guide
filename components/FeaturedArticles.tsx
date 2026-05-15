import Link from 'next/link';

const featured = [
  {
    category: 'Taxes & Finance',
    title: 'Modelo 210: Spain\'s Annual Non-Resident Property Tax',
    description: 'Every non-resident property owner must file this annual declaration. Here\'s exactly what it is, what you pay, and how to file.',
    href: '/taxes/modelo-210',
    readingTime: 12,
  },
  {
    category: 'NIE & Residency',
    title: 'How to Get a NIE in Spain: Complete Guide',
    description: 'The NIE is the foundation of everything in Spain — taxes, property, banking. Step-by-step guide for non-residents.',
    href: '/nie/how-to-apply',
    readingTime: 10,
  },
  {
    category: 'Inheritance',
    title: 'Balearics 100% Inheritance Tax Exemption',
    description: 'If your property is in Mallorca, Ibiza or Menorca, your heirs may pay zero inheritance tax. Here\'s what applies and how.',
    href: '/inheritance/balearics-100-exemption',
    readingTime: 8,
  },
];

export default function FeaturedArticles() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-navy mb-2">Start here</h2>
        <p className="text-text-lt text-lg mb-10">The three guides every non-resident owner needs to read.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group block bg-white rounded-xl border border-border hover:border-terra hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div className="px-7 py-7">
                <span className="tag">{a.category}</span>
                <h3 className="font-serif text-navy text-xl font-semibold mt-3 mb-3 group-hover:text-terra transition-colors leading-snug">
                  {a.title}
                </h3>
                <p className="text-text-lt text-sm leading-relaxed mb-5">{a.description}</p>
                <span className="text-terra text-sm font-semibold group-hover:text-terra-lt transition-colors">
                  Read guide ({a.readingTime} min) →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
