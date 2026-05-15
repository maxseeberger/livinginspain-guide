import Link from 'next/link';
import { ArticleWithHref } from '@/lib/mdx';
import type { Locale } from '@/lib/mdx';

interface CategoryLayoutProps {
  title: string;
  description: string;
  articles: ArticleWithHref[];
  locale?: Locale;
}

export default function CategoryLayout({ title, description, articles, locale = 'en' }: CategoryLayoutProps) {
  const de = locale === 'de';
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-navy-dk">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-14 lg:py-20">
          <p className="label-white mb-4">{de ? 'Ratgeber durchsuchen' : 'Browse guides'}</p>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.0] mb-5">
            {title}
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-2xl">{description}</p>
        </div>
      </div>

      {/* Article tiles */}
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-14 lg:py-20">
        {articles.length === 0 ? (
          <p className="text-text-lt text-sm">{de ? 'Noch keine Ratgeber verfügbar.' : 'No guides available yet.'}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group block bg-white border border-border rounded-2xl p-6 hover:bg-sand hover:border-border transition-all duration-200"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-md">
                      {article.category}
                    </span>
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-lt">
                      {article.readingTime} {de ? 'Min.' : 'min'}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-ink text-xl leading-snug tracking-tight mb-3 group-hover:text-navy transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-text-md text-sm leading-relaxed flex-1 mb-5">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-terra group-hover:gap-2.5 transition-all">
                    {de ? 'Ratgeber lesen' : 'Read guide'}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
