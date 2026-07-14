'use client';

import { ProductCard } from '@/components/ProductCard';
import { useCart } from '@/lib/cart-context';
import { DUMMY_PRODUCTS } from '@/lib/dummy-products';
import Link from 'next/link';

export default function HomePage() {
  const { addItem } = useCart();

  const categories = [
    { id: 'seeds', label: 'Seeds', icon: '🌱' },
    { id: 'flowers', label: 'Flower Trees', icon: '🌸' },
    { id: 'seasonal', label: 'Seasonal', icon: '🍂' },
    { id: 'bonsai', label: 'Bonsais', icon: '🌲' },
    { id: 'fruit', label: 'Fruit Trees', icon: '🥭' },
    { id: 'fertilizers', label: 'Fertilizers', icon: '🧪' },
    { id: 'office', label: 'Office Plants', icon: '🪴' },
  ];

  // Get featured plants (ultra-rare first, then the rarest)
  const featuredPlants = DUMMY_PRODUCTS.filter((p) => p.rarity === 'ultra-rare').slice(0, 4);

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
            <button className="btn-primary text-lg px-8 py-4">
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
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href="/categories"
                className="flex flex-col items-center p-6 rounded-lg bg-white card-shadow hover:bg-cream-100 transition-smooth group"
              >
                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <span className="text-center font-body text-sm font-600 text-forest-700">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rarest Finds */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-forest-700 mb-4">
              This Month's Rarest Finds
            </h2>
            <p className="text-lg text-charcoal/60 font-body">
              Hand-selected specimens for the collector's garden
            </p>
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
