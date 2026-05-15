'use client';

import { useState } from 'react';

type Mode = 'simple' | 'bullet' | 'example';

interface SimplifyButtonProps {
  simple: string;
  bullet: string;
  example: string;
}

const modes: { key: Mode; label: string; icon: React.ReactNode }[] = [
  {
    key: 'simple',
    label: 'Explain simply',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    key: 'bullet',
    label: 'Key points',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    key: 'example',
    label: 'Real example',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function SimplifyButton({ simple, bullet, example }: SimplifyButtonProps) {
  const [activeMode, setActiveMode] = useState<Mode | null>(null);
  const content: Record<Mode, string> = { simple, bullet, example };

  return (
    <div className="border border-border rounded-2xl overflow-hidden my-10">
      {/* Header */}
      <div className="bg-navy px-6 py-5 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-2xs font-semibold uppercase tracking-widest text-terra mb-0.5">Reading tools</p>
          <h3 className="font-serif text-white text-lg font-semibold">Simplify this article</h3>
        </div>
        <div className="flex gap-2 flex-wrap">
          {modes.map((m) => (
            <button
              key={m.key}
              onClick={() => setActiveMode(activeMode === m.key ? null : m.key)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
                activeMode === m.key
                  ? 'bg-terra text-white shadow-sm'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              {m.icon}
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeMode && (
        <div className="bg-sand px-6 py-5 border-t border-border">
          <p className="text-text-md text-[0.9375rem] leading-relaxed whitespace-pre-wrap">
            {content[activeMode]}
          </p>
        </div>
      )}
    </div>
  );
}
