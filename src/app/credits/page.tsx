import Link from 'next/link';
import { IMAGE_CREDITS } from '@/lib/image-credits';
import { getProductBySlug } from '@/lib/dummy-products';

export const metadata = { title: 'Photo credits — Arboreta by Shifuta' };

export default function CreditsPage() {
  const rows = Object.entries(IMAGE_CREDITS)
    .map(([slug, c]) => ({ slug, c, product: getProductBySlug(slug) }))
    .filter((r) => r.product);
  return (
    <div className="min-h-screen bg-cream-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-display font-bold text-forest-700 mb-4">Photo credits</h1>
        <p className="font-body text-charcoal/70 mb-8">
          Plant photos come from Wikimedia Commons and are used under their free licenses. Thank you to the photographers.
        </p>
        <ul className="space-y-3 font-body text-sm">
          {rows.map(({ slug, c, product }) => (
            <li key={slug} className="bg-white rounded-lg p-4 card-shadow">
              <Link href={`/products/${slug}`} className="font-600 text-forest-700 underline">
                {product!.name}
              </Link>
              {' — '}
              <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
                photo
              </a>{' '}
              by {c.author} ·{' '}
              <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline">
                {c.license}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
