import Link from 'next/link';
import { ReactNode } from 'react';

export interface StaticSection {
  heading: string;
  body: string[];
}

/**
 * Shared layout for the simple content pages (About, Shipping, Returns, Privacy, Terms…).
 * Everything is placeholder copy for now — edit the `sections` array in each page file.
 */
export function StaticPage({
  eyebrow,
  title,
  intro,
  sections,
  children,
  placeholder = true,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections?: StaticSection[];
  children?: ReactNode;
  placeholder?: boolean;
}) {
  return (
    <div className="bg-cream-50">
      <section className="bg-forest-700 py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gold-300 tracking-[0.3em] text-xs uppercase mb-4">{eyebrow}</p>
          <h1 className="!text-cream-50 font-display font-bold text-4xl md:text-5xl mb-4">{title}</h1>
          <p className="text-lg text-cream-100/80 font-body">{intro}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        {placeholder && (
          <p className="mb-10 rounded-sm border border-gold-300 bg-gold-50 px-4 py-3 text-sm text-gold-700">
            ✎ Placeholder content — structure and layout are final, the wording will be replaced.
          </p>
        )}
        {sections?.map((s) => (
          <section key={s.heading} className="mb-10">
            <h2 className="!text-2xl font-display font-bold text-forest-700 mb-3">{s.heading}</h2>
            {s.body.map((para, i) => (
              <p key={i} className="text-charcoal/75 font-body leading-relaxed mb-3">{para}</p>
            ))}
          </section>
        ))}
        {children}
        <div className="mt-12 pt-8 border-t border-cream-200">
          <Link href="/" className="text-forest-700 hover:text-gold-500 font-500">← Back to home</Link>
        </div>
      </div>
    </div>
  );
}

export const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';
