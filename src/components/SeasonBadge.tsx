'use client';

import { isInSeason } from '@/lib/season';
import { Product } from '@/types/product';
import { useEffect, useState } from 'react';

/** "In season now" pill — computed in the browser so it always uses the visitor's current month. */
export function SeasonBadge({ product, className = '' }: { product: Product; className?: string }) {
  const [now, setNow] = useState<boolean | null>(null);
  useEffect(() => setNow(isInSeason(product, new Date().getMonth() + 1)), [product]);
  if (!now) return null;
  return (
    <span className={`text-xs uppercase tracking-widest font-600 px-3 py-1 rounded-xs bg-gold-100 text-gold-700 ${className}`}>
      🌿 In season now
    </span>
  );
}
