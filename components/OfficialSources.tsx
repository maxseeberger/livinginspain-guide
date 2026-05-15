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
    <div className="not-prose bg-sand border border-border rounded-xl px-6 py-5 my-8">
      <h3 className="font-serif text-base text-navy font-semibold mb-3">Official sources</h3>
      <ul className="space-y-2">
        {sources.map((s, i) => (
          <li key={i}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terra hover:text-terra-lt text-[0.95rem] flex items-start gap-1.5 group"
            >
              <span className="transition-transform duration-150 group-hover:translate-x-0.5 mt-0.5">→</span>
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
