'use client';

import { StaticPage } from '@/components/StaticPage';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <StaticPage eyebrow="Say hello" title="Contact" intro="Questions about a plant, an order, or a collaboration? We’d love to hear from you.">
      <div className="grid sm:grid-cols-3 gap-4 mb-10 text-sm">
        {[
          ['Email', 'hello@example.com'],
          ['Phone', '+880 1XXX-XXXXXX'],
          ['Nursery', 'Address to be added'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-sm bg-white border border-cream-200 p-4">
            <p className="text-xs uppercase tracking-widest text-charcoal/50 mb-1">{k}</p>
            <p className="text-forest-700 font-500">{v}</p>
          </div>
        ))}
      </div>

      {sent ? (
        <p className="rounded-sm bg-forest-50 border border-forest-200 text-forest-700 p-5">
          Thanks! (Placeholder — the form isn’t connected to anything yet.)
        </p>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="How can we help?" rows={5} required />
          <button type="submit" className="btn-primary">Send message</button>
        </form>
      )}
    </StaticPage>
  );
}
