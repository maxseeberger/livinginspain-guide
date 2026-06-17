'use client';

import { useEffect } from 'react';

// ─── AdSense configuration ────────────────────────────────────────────────────
// Set ADSENSE_ENABLED to true once your AdSense account is approved.
// Replace PUBLISHER_ID with your ca-pub-XXXXXXXXXXXXXXXX value.
// Replace the slot IDs below with the slot IDs from your AdSense dashboard.
const ADSENSE_ENABLED = false;
const PUBLISHER_ID = 'ca-pub-XXXXXXXXXXXXXXXX';

export const AD_SLOTS = {
  inArticle: 'XXXXXXXXXX',   // In-article ad (after intro)
  sidebar:   'XXXXXXXXXX',   // Sidebar ad
  endOfPage: 'XXXXXXXXXX',   // End of article ad
} as const;

type AdSlot = keyof typeof AD_SLOTS;

interface AdSenseAdProps {
  slot: AdSlot;
  format?: 'auto' | 'rectangle' | 'horizontal';
  className?: string;
}

export default function AdSenseAd({ slot, format = 'auto', className = '' }: AdSenseAdProps) {
  useEffect(() => {
    if (!ADSENSE_ENABLED) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {}
  }, []);

  if (!ADSENSE_ENABLED) return null;

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={AD_SLOTS[slot]}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
