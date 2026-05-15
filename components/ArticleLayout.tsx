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
      <div className="border-b border-border-lt bg-white">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-text-lt flex-wrap">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                <span className="text-border">/</span>
                <Link href={crumb.href} className="hover:text-ink transition-colors">{crumb.label}</Link>
              </span>
            ))}
            <span className="flex items-center gap-1.5">
              <span className="text-border">/</span>
              <span className="text-text-lt truncate max-w-[200px] sm:max-w-sm">{title}</span>
            </span>
          </nav>
        </div>
      </div>

      {/* Article header */}
      <div className="bg-navy-dk">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="label-terra mb-5">{category}</p>
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.0] tracking-tight mb-5">
              {title}
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-7 max-w-2xl">{description}</p>
            <div className="flex items-center gap-4 text-xs text-white/35">
              <span>Updated {formattedDate}</span>
              <span>·</span>
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
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
