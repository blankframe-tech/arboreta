'use client';

import { ProductCard } from '@/components/ProductCard';
import { useCart } from '@/lib/cart-context';
import { DUMMY_PRODUCTS } from '@/lib/dummy-products';

export default function RarestFindsPage() {
  const { addItem } = useCart();
  const ultra = DUMMY_PRODUCTS.filter((p) => p.rarity === 'ultra-rare');
  const rare = DUMMY_PRODUCTS.filter((p) => p.rarity === 'rare');

  return (
    <div className="bg-cream-50">
      <section className="bg-forest-700 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gold-300 tracking-[0.3em] text-xs uppercase mb-4">✦ Hand-selected ✦</p>
          <h1 className="!text-cream-50 font-display font-bold text-5xl md:text-6xl mb-5">The Rarest Finds</h1>
          <p className="text-lg text-cream-100/80 font-body">
            Uncommon plants hand-picked from our partner nurseries.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {ultra.length > 0 && <section>
          <h2 className="!text-3xl font-display font-bold text-forest-700 mb-2">Ultra-rare</h2>
          <p className="text-charcoal/60 mb-8">The ones collectors write to us about.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ultra.map((p) => <ProductCard key={p.id} product={p} onAddToCart={addItem} />)}
          </div>
        </section>}
        <section>
          <h2 className="!text-3xl font-display font-bold text-forest-700 mb-2">Rare</h2>
          <p className="text-charcoal/60 mb-8">Uncommon, healthy, and worth the wait.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rare.map((p) => <ProductCard key={p.id} product={p} onAddToCart={addItem} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
