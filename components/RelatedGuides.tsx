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
    <div className="not-prose border border-border rounded-xl px-6 py-5 my-8 bg-white">
      <h3 className="font-serif text-base text-navy font-semibold mb-3">Related guides</h3>
      <ul className="space-y-2">
        {guides.map((g, i) => (
          <li key={i}>
            <a
              href={g.href}
              className="text-terra hover:text-terra-lt text-[0.95rem] flex items-center gap-1 group"
            >
              <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              {g.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
