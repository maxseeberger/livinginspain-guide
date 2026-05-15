interface Source {
  label: string;
  href: string;
}

interface OfficialSourcesProps {
  sources: Source[];
}

export default function OfficialSources({ sources }: OfficialSourcesProps) {
  if (!sources?.length) return null;
  return (
    <div className="not-prose bg-sand border border-border rounded-2xl px-6 py-5 my-8">
      <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-lt mb-4">Official sources</p>
      <ul className="space-y-2.5">
        {sources.map((s, i) => (
          <li key={i}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terra hover:text-terra-lt text-sm flex items-start gap-2 group font-medium"
            >
              <svg className="w-4 h-4 mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
