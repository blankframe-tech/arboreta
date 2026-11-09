'use client';

import { ProductCard } from '@/components/ProductCard';
import { useCart } from '@/lib/cart-context';
import { CATEGORIES } from '@/lib/categories';
import { DUMMY_PRODUCTS } from '@/lib/dummy-products';
import { useLucky } from '@/lib/lucky-context';
import Link from 'next/link';

export default function HomePage() {
  const { addItem } = useCart();
  const { openLucky } = useLucky();

  // Get featured plants (ultra-rare first, then the rarest)
  const featuredPlants = [
    ...DUMMY_PRODUCTS.filter((p) => p.rarity === 'ultra-rare'),
    ...DUMMY_PRODUCTS.filter((p) => p.rarity === 'rare'),
  ].slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-forest-700 to-forest-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-forest-700 via-sage-400 to-forest-700" />
        </div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-4xl md:text-7xl text-cream-50 font-display font-bold mb-6 leading-tight">
            Cultivate the<br />
            <span className="text-gold-300">Extraordinary</span>
          </h1>
          <p className="text-lg md:text-xl text-cream-100 font-body mb-8 opacity-90">
            Curated botanical specimens for the discerning collector
          </p>
          <Link href="/categories">
            <button className="px-8 py-4 text-lg rounded-xs font-500 bg-gold-300 text-forest-800 hover:bg-gold-200 transition-colors">
              Explore Our Collection
            </button>
          </Link>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-display font-bold mb-16 text-forest-700">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                className="flex flex-col items-center p-6 rounded-lg bg-white card-shadow hover:bg-cream-100 transition-smooth group"
              >
                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <span className="text-center font-body text-sm font-600 text-forest-700">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rarest Finds */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-4xl font-display font-bold text-forest-700 mb-4">
                This Month's Rarest Finds
              </h2>
              <p className="text-lg text-charcoal/60 font-body">
                Hand-selected specimens for the collector's garden
              </p>
            </div>
            <Link href="/rarest" className="font-body font-500 text-forest-700 hover:text-gold-500 whitespace-nowrap">
              See all rarest finds →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPlants.map((plant) => (
              <ProductCard
                key={plant.id}
                product={plant}
                onAddToCart={addItem}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lucky Tree Finder banner */}
      <section className="bg-gold-100 border-y border-gold-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-4xl mb-3">🍀</p>
          <h2 className="text-4xl font-display font-bold text-forest-700 mb-4">Find Your Lucky Tree</h2>
          <p className="text-lg text-charcoal/70 font-body mb-8 max-w-2xl mx-auto">
            Answer four quick questions and we&apos;ll pick the tree that suits your space, sun and routine —
            and take ৳20 off when you bring it home.
          </p>
          <button type="button" onClick={openLucky} className="btn-primary text-lg px-8 py-4">
            Start the quiz
          </button>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-forest-700 text-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-display font-bold mb-12">
            Why Collectors Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-display text-2xl mb-3">Curated Selection</h3>
              <p className="text-cream-100/80 font-body">
                Every plant is hand-selected for health, rarity, and beauty
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="font-display text-2xl mb-3">Ethically Sourced</h3>
              <p className="text-cream-100/80 font-body">
                Sourced from sustainable nurseries and expert growers worldwide
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-display text-2xl mb-3">Expert Care Guides</h3>
              <p className="text-cream-100/80 font-body">
                Detailed care instructions and botanical knowledge included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-forest-700 mb-6">
            Get Monthly Curator's Picks
          </h2>
          <p className="text-lg text-charcoal/60 font-body mb-8">
            Receive exclusive access to rare specimens and expert care tips
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white border border-forest-400 rounded-xs focus:outline-none focus:border-gold-300 placeholder:italic placeholder:text-charcoal/40"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
