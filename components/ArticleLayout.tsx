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
      <div className="bg-cream border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <a href="/" className="text-terra hover:text-terra-lt">Home</a>
            {breadcrumb.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <span className="text-text-lt">/</span>
                <a href={crumb.href} className="text-terra hover:text-terra-lt">{crumb.label}</a>
              </span>
            ))}
            <span className="text-text-lt">/</span>
            <span className="text-text-lt truncate">{title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <span className="tag">{category}</span>
          <h1 className="font-serif text-3xl sm:text-4xl text-navy mt-3 mb-4 leading-tight">{title}</h1>
          <p className="text-text-lt text-lg max-w-2xl mb-4">{description}</p>
          <div className="flex items-center gap-4 text-xs text-text-lt">
            <span>Updated {formattedDate}</span>
            <span>·</span>
            <span>{readingTime} min read</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          <article className="prose prose-lg max-w-none font-sans">{children}</article>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
