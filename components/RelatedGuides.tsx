interface Guide {
  title: string;
  href: string;
}

interface RelatedGuidesProps {
  guides: Guide[];
}

export default function RelatedGuides({ guides }: RelatedGuidesProps) {
  if (!guides?.length) return null;
  return (
    <div className="not-prose border border-border rounded-2xl px-6 py-5 my-8 bg-white">
      <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-md mb-4">Related guides</p>
      <ul className="space-y-2">
        {guides.map((g, i) => (
          <li key={i}>
            <a
              href={g.href}
              className="text-sm font-medium text-navy hover:text-terra flex items-center gap-2 group transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-terra shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {g.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
