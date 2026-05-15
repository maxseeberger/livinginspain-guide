'use client';

import { useState } from 'react';

type Mode = 'simple' | 'bullet' | 'example';

interface SimplifyButtonProps {
  articleContent: string;
}

const modes: { key: Mode; label: string; emoji: string }[] = [
  { key: 'simple',  label: 'Explain simply',       emoji: '✨' },
  { key: 'bullet',  label: 'Key points only',       emoji: '📋' },
  { key: 'example', label: 'Show me a real example', emoji: '🔢' },
];

export default function SimplifyButton({ articleContent }: SimplifyButtonProps) {
  const [activeMode, setActiveMode] = useState<Mode | null>(null);
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleMode(mode: Mode) {
    if (activeMode === mode && result) return;
    setActiveMode(mode);
    setLoading(true);
    setError('');
    setResult('');

    try {
      const res = await fetch('/api/simplify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ articleContent, mode }),
      });
      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      setResult(data.text);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-navy rounded-xl px-8 py-8 my-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">Powered by Claude AI</p>
      <h3 className="font-serif text-white text-xl mb-4">Simplify this article</h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {modes.map((m) => (
          <button
            key={m.key}
            onClick={() => handleMode(m.key)}
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

      {loading && (
        <div className="bg-white/10 rounded-lg px-5 py-4">
          <p className="text-white/70 text-sm animate-pulse">Thinking…</p>
        </div>
      )}

      {error && (
        <div className="bg-red-900/30 rounded-lg px-5 py-4">
          <p className="text-red-200 text-sm">{error}</p>
        </div>
      )}

      {result && !loading && (
        <div className="bg-white/10 rounded-lg px-5 py-4">
          <p className="text-white text-sm leading-relaxed whitespace-pre-wrap">{result}</p>
        </div>
      )}
    </div>
  );
}
