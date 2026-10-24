'use client';

import { PlantImage } from '@/components/PlantImage';
import { CATEGORY_MAP } from '@/lib/categories';
import { useCart } from '@/lib/cart-context';
import { useLucky } from '@/lib/lucky-context';
import {
  LUCKY_DISCOUNT,
  LuckyAnswers,
  LuckyMatch,
  Placement,
  WaterRhythm,
  findLuckyTrees,
} from '@/lib/lucky-tree';
import { LightNeeds } from '@/types/product';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

interface Option<T> {
  value: T;
  emoji: string;
  label: string;
  hint: string;
}

interface Question {
  key: keyof LuckyAnswers;
  title: string;
  options: Option<any>[];
}

// Four quick questions — keep this list at 4 or fewer.
const QUESTIONS: Question[] = [
  {
    key: 'placement',
    title: 'Where will your tree live?',
    options: [
      { value: 'indoor' satisfies Placement, emoji: '🏠', label: 'Indoors', hint: 'Home or office' },
      { value: 'outdoor' satisfies Placement, emoji: '🌳', label: 'Outdoors', hint: 'Balcony, rooftop or garden' },
      { value: 'either' satisfies Placement, emoji: '✨', label: 'Either', hint: "I'm flexible" },
    ],
  },
  {
    key: 'sun',
    title: 'How much sun does the spot get?',
    options: [
      { value: 'low' satisfies LightNeeds, emoji: '🌥️', label: 'A little', hint: 'Shady corner' },
      { value: 'medium' satisfies LightNeeds, emoji: '⛅', label: 'Some', hint: 'Bright, but not direct' },
      { value: 'bright' satisfies LightNeeds, emoji: '☀️', label: 'A lot', hint: 'Strong, direct sun' },
    ],
  },
  {
    key: 'water',
    title: 'How often can you water?',
    options: [
      { value: 'often' satisfies WaterRhythm, emoji: '💧', label: 'Often', hint: 'Every day or two' },
      { value: 'weekly' satisfies WaterRhythm, emoji: '🗓️', label: 'Weekly', hint: 'Once a week' },
      { value: 'rarely' satisfies WaterRhythm, emoji: '😅', label: 'Rarely', hint: 'I sometimes forget' },
    ],
  },
  {
    key: 'pets',
    title: 'Any pets at home?',
    options: [
      { value: true, emoji: '🐾', label: 'Yes', hint: 'Cat, dog or other' },
      { value: false, emoji: '🙂', label: 'No pets', hint: 'Just humans' },
    ],
  },
];

export function LuckyTreeFinder() {
  const { isOpen, closeLucky } = useLucky();
  const { addLuckyItem, openCart } = useCart();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<LuckyAnswers>>({});
  const [pick, setPick] = useState(0);

  const done = step >= QUESTIONS.length;
  const matches: LuckyMatch[] = useMemo(
    () => (done ? findLuckyTrees(answers as LuckyAnswers) : []),
    [done, answers]
  );
  const match = matches[pick % Math.max(matches.length, 1)];

  const reset = () => {
    setStep(0);
    setAnswers({});
    setPick(0);
  };

  // Esc to close + lock page scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeLucky();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, closeLucky]);

  if (!isOpen) return null;

  const choose = (key: keyof LuckyAnswers, value: unknown) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setStep((s) => s + 1);
  };

  const claim = () => {
    if (!match) return;
    addLuckyItem(match.product);
    closeLucky();
    openCart();
    reset();
  };

  const q = QUESTIONS[step];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-forest-900/70 backdrop-blur-sm" onClick={closeLucky} />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Find your lucky tree"
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-lg bg-cream-50 shadow-card-hover"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 pt-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-500 font-600">🍀 Find your lucky tree</p>
          <button type="button" onClick={closeLucky} aria-label="Close" className="text-2xl leading-none text-forest-700 hover:text-gold-500">✕</button>
        </div>

        {!done && q && (
          <div className="px-6 sm:px-10 pb-10 pt-4 min-h-[440px]">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
              {QUESTIONS.map((_, i) => (
                <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-forest-700' : 'bg-cream-200'}`} />
              ))}
            </div>
            <p className="text-sm text-charcoal/50 mb-2">Question {step + 1} of {QUESTIONS.length}</p>
            <h2 className="!text-3xl sm:!text-4xl font-display font-bold text-forest-700 mb-8">{q.title}</h2>

            <div className={`grid gap-4 ${q.options.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
              {q.options.map((o) => (
                <button
                  key={String(o.value)}
                  type="button"
                  onClick={() => choose(q.key, o.value)}
                  className={`group rounded-lg border bg-white px-5 py-6 text-left transition-all hover:-translate-y-0.5 hover:border-forest-700 hover:shadow-card-hover ${
                    answers[q.key] === o.value ? 'border-forest-700' : 'border-cream-200'
                  }`}
                >
                  <span className="block text-4xl mb-3">{o.emoji}</span>
                  <span className="block font-display text-xl font-bold text-forest-700">{o.label}</span>
                  <span className="block text-sm text-charcoal/60 mt-1">{o.hint}</span>
                </button>
              ))}
            </div>

            {step > 0 && (
              <button type="button" onClick={() => setStep((s) => s - 1)} className="mt-8 text-sm text-forest-700 hover:text-gold-500">
                ← Back
              </button>
            )}
          </div>
        )}

        {done && match && (
          <div className="px-6 sm:px-10 pb-10 pt-4">
            <p className="text-sm text-charcoal/50 mb-2">
              {pick === 0 ? 'Your best match' : `Match #${(pick % matches.length) + 1}`}
            </p>
            <h2 className="!text-3xl sm:!text-4xl font-display font-bold text-forest-700 mb-6">
              This one is lucky for you
            </h2>

            <div className="grid sm:grid-cols-5 gap-6 rounded-lg bg-white border border-cream-200 overflow-hidden">
              <div className="sm:col-span-2 bg-sage-100 min-h-[220px]">
                <PlantImage src={match.product.imageUrls[0]} alt={match.product.name} emoji={CATEGORY_MAP[match.product.category]?.icon} />
              </div>
              <div className="sm:col-span-3 p-6 sm:pl-0 flex flex-col">
                <h3 className="!text-2xl font-display font-bold text-forest-700">{match.product.name}</h3>
                {match.product.latinName && (
                  <p className="font-accent italic text-charcoal/60 mb-3">{match.product.latinName}</p>
                )}
                <p className="text-sm text-charcoal/70 mb-3">Why it suits you:</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {match.reasons.map((r) => (
                    <li key={r} className="text-xs font-500 text-forest-700 bg-forest-50 border border-forest-100 rounded-full px-3 py-1">✓ {r}</li>
                  ))}
                  {match.petWarning && (
                    <li className="text-xs font-500 text-terracotta bg-terracotta/10 border border-terracotta/30 rounded-full px-3 py-1">
                      Not pet-safe — keep out of reach
                    </li>
                  )}
                </ul>
                <div className="mt-auto flex items-baseline gap-3">
                  <span className="font-display text-3xl font-bold text-gold-500">
                    ৳ {(match.product.price - LUCKY_DISCOUNT).toLocaleString()}
                  </span>
                  <span className="text-charcoal/40 line-through">৳ {match.product.price.toLocaleString()}</span>
                </div>
                <p className="text-xs text-forest-700 mt-1">🍀 Lucky Tree offer: ৳{LUCKY_DISCOUNT} off, only through this finder</p>
              </div>
            </div>

            <p className="mt-6 text-charcoal/70">
              Why don&apos;t you take it home? Of everything in our collection, this one fits your space, your sun and
              your routine best.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={claim} className="btn-primary flex-1">
                Claim ৳{LUCKY_DISCOUNT} off &amp; add to cart
              </button>
              <Link href={`/products/${match.product.slug}`} onClick={closeLucky} className="btn-secondary text-center flex-1">
                See full details
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm">
              {matches.length > 1 ? (
                <button type="button" onClick={() => setPick((p) => p + 1)} className="text-forest-700 hover:text-gold-500">
                  Show me another match
                </button>
              ) : <span />}
              <button type="button" onClick={reset} className="text-charcoal/60 hover:text-forest-700">Start over</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
