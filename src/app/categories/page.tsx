'use client';

import { ProductCard } from '@/components/ProductCard';
import { useCart } from '@/lib/cart-context';
import { DUMMY_PRODUCTS } from '@/lib/dummy-products';
import { useState } from 'react';

const CATEGORY_INFO: Record<
  string,
  { name: string; description: string; icon: string }
> = {
  seeds: {
    name: 'Seeds',
    description: 'Vegetable, flower, and tree seeds from heirloom to hybrid',
    icon: '🌱',
  },
  flowers: {
    name: 'Flower Trees',
    description: 'Tropical and deciduous flowering trees and climbers',
    icon: '🌸',
  },
  seasonal: {
    name: 'Seasonal Plants',
    description: 'Holiday specimens and limited-availability rarities',
    icon: '🍂',
  },
  bonsai: {
    name: 'Bonsais',
    description: 'Miniature trees, exhibition specimens, and cultivars',
    icon: '🌲',
  },
  fruit: {
    name: 'Fruit Trees',
    description: 'Mango, lemon, dragon fruit, passion fruit, and more',
    icon: '🥭',
  },
  fertilizers: {
    name: 'Fertilizers & Care',
    description: 'Organic fertilizers, soil amendments, and care bundles',
    icon: '🧪',
  },
  office: {
    name: 'Office Plants',
    description: 'Air-purifying, low-maintenance indoor specimens',
    icon: '🪴',
  },
};

export default function CategoriesPage() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'newest'>(
    'newest'
  );
  const [filterRarity, setFilterRarity] = useState<string | null>(null);
  const [filterPetSafe, setFilterPetSafe] = useState(false);

  // Get all unique categories
  const categories = Array.from(
    new Set(DUMMY_PRODUCTS.map((p) => p.category))
  );

  // Filter products
  let filtered = selectedCategory
    ? DUMMY_PRODUCTS.filter((p) => p.category === selectedCategory)
    : DUMMY_PRODUCTS;

  if (filterRarity) {
    filtered = filtered.filter((p) => p.rarity === filterRarity);
  }

  if (filterPetSafe) {
    filtered = filtered.filter((p) => p.petSafe);
  }

  // Sort products
  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
      default:
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
    }
  });

  const currentCategory = selectedCategory
    ? CATEGORY_INFO[selectedCategory]
    : null;

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Category Header */}
      {currentCategory && (
        <section className="bg-forest-700 text-cream-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6 mb-4">
              <span className="text-5xl">{CATEGORY_INFO[selectedCategory!].icon}</span>
              <div>
                <h1 className="text-5xl font-display font-bold mb-2">
                  {currentCategory.name}
                </h1>
                <p className="text-lg text-cream-100/80">
                  {currentCategory.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-display font-bold text-forest-700 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-2 rounded-xs transition-colors ${
                      !selectedCategory
                        ? 'bg-forest-700 text-cream-50'
                        : 'hover:bg-sage-100 text-forest-700'
                    }`}
                  >
                    All Plants
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-xs transition-colors ${
                        selectedCategory === cat
                          ? 'bg-forest-700 text-cream-50'
                          : 'hover:bg-sage-100 text-forest-700'
                      }`}
                    >
                      {CATEGORY_INFO[cat]?.name || cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rarity Filter */}
              <div>
                <h3 className="font-display font-bold text-forest-700 mb-4">
                  Rarity
                </h3>
                <div className="space-y-2">
                  {['common', 'rare', 'ultra-rare'].map((rarity) => (
                    <label key={rarity} className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={filterRarity === rarity}
                        onChange={() =>
                          setFilterRarity(
                            filterRarity === rarity ? null : rarity
                          )
                        }
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-body capitalize text-forest-700">
                        {rarity}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pet Safe Filter */}
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filterPetSafe}
                    onChange={(e) => setFilterPetSafe(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-body text-forest-700">
                    Pet Safe Only
                  </span>
                </label>
              </div>

              {/* Sort */}
              <div>
                <h3 className="font-display font-bold text-forest-700 mb-4">
                  Sort By
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as 'price-low' | 'price-high' | 'newest')
                  }
                  className="w-full px-3 py-2 border border-forest-400 rounded-xs text-sm"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-charcoal/60 font-body">
                {sorted.length} plant{sorted.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {sorted.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-lg text-charcoal/60 font-body mb-4">
                  No plants match your filters
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setFilterRarity(null);
                    setFilterPetSafe(false);
                  }}
                  className="text-forest-700 hover:text-gold-400 transition-colors font-body font-600"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sorted.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addItem}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
