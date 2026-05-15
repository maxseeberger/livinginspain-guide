import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

interface ArticleLayoutProps {
  title: string;
  description: string;
  category: string;
  lastUpdated: string;
  readingTime: number;
  breadcrumb: { label: string; href: string }[];
  children: React.ReactNode;
}

export default function ArticleLayout({
  title,
  description,
  category,
  lastUpdated,
  readingTime,
  breadcrumb,
  children,
}: ArticleLayoutProps) {
  const formattedDate = new Date(lastUpdated).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border-lt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-[0.8125rem] text-text-lt flex-wrap">
            <Link href="/" className="hover:text-terra transition-colors">Home</Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-border shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href={crumb.href} className="hover:text-terra transition-colors">{crumb.label}</Link>
              </span>
            ))}
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-border shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-text-lt truncate max-w-[200px] sm:max-w-none">{title}</span>
            </span>
          </nav>
        </div>
      </div>

      {/* Article header */}
      <div className="bg-white border-b border-border-lt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="max-w-3xl">
            <span className="inline-block text-2xs font-semibold uppercase tracking-widest text-terra mb-4">
              {category}
            </span>
            <h1 className="font-serif text-navy text-3xl sm:text-[2.25rem] lg:text-[2.5rem] font-bold leading-[1.15] mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-text-md text-lg leading-relaxed mb-6 max-w-2xl">{description}</p>
            <div className="flex items-center gap-3 text-xs text-text-lt">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Updated {formattedDate}
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-14">
            <article className="prose prose-lg max-w-none font-sans">
              {children}
            </article>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
