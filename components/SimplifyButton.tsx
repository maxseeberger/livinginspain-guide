'use client';

import { useState } from 'react';

type Mode = 'simple' | 'bullet' | 'example';

interface SimplifyButtonProps {
  simple: string;
  bullet: string;
  example: string;
  locale?: 'en' | 'de';
}

export default function SimplifyButton({ simple, bullet, example, locale = 'en' }: SimplifyButtonProps) {
  const de = locale === 'de';
  const modes: { key: Mode; label: string }[] = [
    { key: 'simple',  label: de ? 'Einfach erklärt' : 'Explain simply' },
    { key: 'bullet',  label: de ? 'Wichtigste Punkte' : 'Key points' },
    { key: 'example', label: de ? 'Praxisbeispiel' : 'Real example' },
  ];
  const [active, setActive] = useState<Mode | null>(null);
  const content: Record<Mode, string> = { simple, bullet, example };

  return (
    <div className="not-prose border border-border rounded-2xl overflow-hidden my-10">
      <div className="bg-navy-dk px-6 py-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="label-terra mb-0.5">{de ? 'Lesehilfen' : 'Reading tools'}</p>
          <p className="font-display font-bold text-white text-lg">{de ? 'Artikel vereinfachen' : 'Simplify this article'}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {modes.map((m) => (
            <button
              key={m.key}
              onClick={() => setActive(active === m.key ? null : m.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 ${
                active === m.key
                  ? 'bg-terra text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
      {active && (
        <div className="bg-sand px-6 py-5 border-t border-border">
          <p className="text-text-md text-[0.9375rem] leading-relaxed whitespace-pre-wrap">{content[active]}</p>
        </div>
      )}
    </div>
  );
}
