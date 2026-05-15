'use client';

import { useState } from 'react';

type Mode = 'simple' | 'bullet' | 'example';

interface SimplifyButtonProps {
  simple: string;
  bullet: string;
  example: string;
}

const modes: { key: Mode; label: string; emoji: string }[] = [
  { key: 'simple',  label: 'Explain simply',        emoji: '✨' },
  { key: 'bullet',  label: 'Key points only',        emoji: '📋' },
  { key: 'example', label: 'Show me a real example', emoji: '🔢' },
];

export default function SimplifyButton({ simple, bullet, example }: SimplifyButtonProps) {
  const [activeMode, setActiveMode] = useState<Mode | null>(null);

  const content: Record<Mode, string> = { simple, bullet, example };

  return (
    <div className="bg-navy rounded-xl px-8 py-8 my-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">AI summary</p>
      <h3 className="font-serif text-white text-xl mb-4">Simplify this article</h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {modes.map((m) => (
          <button
            key={m.key}
            onClick={() => setActiveMode(activeMode === m.key ? null : m.key)}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
              activeMode === m.key
                ? 'bg-terra text-white'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {m.emoji} {m.label}
          </button>
        ))}
      </div>

      {activeMode && (
        <div className="bg-white/10 rounded-lg px-5 py-4">
          <p className="text-white text-sm leading-relaxed whitespace-pre-wrap">
            {content[activeMode]}
          </p>
        </div>
      )}
    </div>
  );
}
