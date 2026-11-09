import { LOREM, StaticPage } from '@/components/StaticPage';

export const metadata = { title: 'FAQ — Arboreta by Shifuta' };

const FAQS = [
  { q: 'How do I place an order?', a: LOREM },
  { q: 'How long does delivery take?', a: LOREM },
  { q: 'What if my plant arrives damaged?', a: LOREM },
  { q: 'Do you ship seeds and fertilizers too?', a: LOREM },
  { q: 'How does the Lucky Tree discount work?', a: LOREM },
  { q: 'Can I request a plant you don’t have listed?', a: LOREM },
];

export default function FaqPage() {
  return (
    <StaticPage eyebrow="Questions" title="Frequently Asked Questions" intro="Quick answers to the things people ask us most.">
      <div className="divide-y divide-cream-200 border-y border-cream-200">
        {FAQS.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-forest-700">
              {f.q}
              <span className="text-gold-500 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-charcoal/75 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </StaticPage>
  );
}
