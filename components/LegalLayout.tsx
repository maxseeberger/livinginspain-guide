import Link from 'next/link';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  locale?: 'en' | 'de';
}

export default function LegalLayout({ title, lastUpdated, children, locale = 'en' }: LegalLayoutProps) {
  const de = locale === 'de';
  const homeHref = de ? '/de' : '/';
  const homeLabel = de ? 'Startseite' : 'Home';
  const formattedDate = new Date(lastUpdated).toLocaleDateString(de ? 'de-DE' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border-lt bg-white">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-text-lt">
            <Link href={homeHref} className="hover:text-ink transition-colors">{homeLabel}</Link>
            <span className="text-border">/</span>
            <span className="text-text-lt">{title}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-navy-dk">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-12">
          <div className="max-w-2xl">
            <p className="label-white mb-4">{de ? 'Rechtliches' : 'Legal'}</p>
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl tracking-tight leading-tight mb-4">
              {title}
            </h1>
            <p className="text-white/50 text-sm">
              {de ? 'Zuletzt aktualisiert' : 'Last updated'}: {formattedDate}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-12 lg:py-16">
          <div className="max-w-2xl">
            <article className="prose prose-lg max-w-none font-sans">
              {children}
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
