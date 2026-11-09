import { Fragment, ReactNode } from 'react';

/** Turns **bold** into <strong>. */
function inline(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-700 text-forest-700">{part.slice(2, -2)}</strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

/** Renders the simple markdown-style `body` used in blog-posts.ts. */
export function BlogBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n\s*\n/);

  return (
    <div className="space-y-5 text-[17px] leading-[1.8] text-charcoal/85 font-body">
      {blocks.map((block, i) => {
        const b = block.trim();
        if (b.startsWith('## ')) {
          return (
            <h2 key={i} className="!text-3xl font-display font-bold text-forest-700 pt-6">
              {b.slice(3)}
            </h2>
          );
        }
        if (b.startsWith('> ')) {
          return (
            <blockquote key={i} className="border-l-4 border-gold-300 bg-gold-50 px-6 py-4 font-accent text-2xl italic text-forest-700 leading-snug">
              {inline(b.replace(/^> ?/gm, ''))}
            </blockquote>
          );
        }
        if (b.startsWith('- ')) {
          return (
            <ul key={i} className="space-y-2 pl-5 list-disc marker:text-gold-500">
              {b.split('\n').map((li, j) => (
                <li key={j}>{inline(li.replace(/^- /, ''))}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{inline(b)}</p>;
      })}
    </div>
  );
}
