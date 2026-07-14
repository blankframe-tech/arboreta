'use client';

import { useCart } from '@/lib/cart-context';
import { DUMMY_PRODUCTS, getProductBySlug } from '@/lib/dummy-products';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  // Get related products (same category)
  const relatedProducts = DUMMY_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const rarityColors: Record<string, { bg: string; text: string }> = {
    common: { bg: 'bg-sage-200', text: 'text-forest-700' },
    rare: { bg: 'bg-terracotta/20', text: 'text-terracotta' },
    'ultra-rare': { bg: 'bg-gold/20', text: 'text-gold-400' },
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-2 text-sm text-charcoal/60 font-body">
          <Link href="/" className="hover:text-forest-700 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/categories"
            className="hover:text-forest-700 transition-colors"
          >
            Categories
          </Link>
          <span>/</span>
          <span className="text-forest-700 font-600">{product.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="h-96 lg:h-[600px] bg-gradient-to-b from-sage-200 to-cream-100 rounded-lg flex items-center justify-center overflow-hidden">
            {product.imageUrls?.[0] ? (
              <img
                src={product.imageUrls[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-9xl">🌿</span>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="mb-6">
                <h1 className="text-5xl font-display font-bold text-forest-700 mb-2">
                  {product.name}
                </h1>
                {product.latinName && (
                  <p className="text-lg font-accent italic text-charcoal/60">
                    {product.latinName}
                  </p>
                )}
              </div>

              {/* Badges */}
              <div className="flex gap-3 mb-8 flex-wrap">
                <span
                  className={`text-xs uppercase tracking-widest font-body font-600 px-4 py-2 rounded-xs ${
                    rarityColors[product.rarity].bg
                  } ${rarityColors[product.rarity].text}`}
                >
                  {product.rarity}
                </span>
                {product.petSafe && (
                  <span className="text-xs uppercase tracking-widest font-body font-600 px-4 py-2 rounded-xs bg-forest-100 text-forest-700">
                    Pet Safe
                  </span>
                )}
                {product.stockQuantity === 0 && (
                  <span className="text-xs uppercase tracking-widest font-body font-600 px-4 py-2 rounded-xs bg-gray-300 text-gray-700">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-display text-gold-400 font-bold">
                  ৳ {product.price.toLocaleString()}
                </span>
              </div>

              {/* Description */}
              <p className="text-lg text-charcoal/80 font-body mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Care Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 bg-white p-6 rounded-lg">
                <div>
                  <p className="text-xs uppercase tracking-widest font-body font-600 text-forest-700 mb-2">
                    Light Needs
                  </p>
                  <p className="capitalize font-body text-charcoal">
                    {product.lightNeeds}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-body font-600 text-forest-700 mb-2">
                    Watering
                  </p>
                  <p className="capitalize font-body text-charcoal">
                    {product.wateringFrequency}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-body font-600 text-forest-700 mb-2">
                    Humidity
                  </p>
                  <p className="capitalize font-body text-charcoal">
                    {product.humidityPreference}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-body font-600 text-forest-700 mb-2">
                    Stock
                  </p>
                  <p className="font-body text-charcoal">
                    {product.stockQuantity} available
                  </p>
                </div>
              </div>

              {/* Toxicity Note */}
              {product.toxicityNotes && (
                <div className="bg-blush/20 border border-blush rounded-lg p-4 mb-8">
                  <p className="text-sm font-body text-charcoal">
                    <span className="font-600">Note:</span> {product.toxicityNotes}
                  </p>
                </div>
              )}
            </div>

            {/* CTA Section */}
            {product.stockQuantity > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 border border-forest-700 rounded-xs p-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center text-forest-700 hover:bg-forest-50 transition-colors text-sm font-bold"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-body font-600 text-forest-700">
                      {quantity}
                    </span>
                    <button
                      onClick={() =>
                        setQuantity(
                          Math.min(product.stockQuantity, quantity + 1)
                        )
                      }
                      className="w-8 h-8 flex items-center justify-center text-forest-700 hover:bg-forest-50 transition-colors text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 px-6 rounded-xs font-display font-bold text-lg transition-smooth ${
                    addedToCart
                      ? 'bg-sage-400 text-cream-50'
                      : 'bg-forest-700 text-cream-50 hover:bg-forest-800'
                  }`}
                >
                  {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                </button>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-full py-3 px-6 rounded-xs font-body font-600 transition-smooth border ${
                    isWishlisted
                      ? 'bg-terracotta/20 text-terracotta border-terracotta'
                      : 'border-forest-700 text-forest-700 hover:bg-forest-50'
                  }`}
                >
                  {isWishlisted ? '❤ Wishlisted' : '♡ Add to Wishlist'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Care Guide */}
        {product.careGuide && (
          <div className="mt-24 max-w-3xl">
            <h2 className="text-3xl font-display font-bold text-forest-700 mb-8">
              Care Guide
            </h2>
            <div className="prose prose-sm max-w-none bg-white p-8 rounded-lg text-charcoal font-body">
              {product.careGuide.split('\n').map((line, i) => {
                if (line.startsWith('##')) {
                  return (
                    <h3 key={i} className="text-xl font-display font-bold mt-4 mb-2">
                      {line.replace(/^##\s+/, '')}
                    </h3>
                  );
                }
                if (line.startsWith('-')) {
                  return (
                    <p key={i} className="mb-2">
                      {line.replace(/^-\s+/, '')}
                    </p>
                  );
                }
                return line ? <p key={i} className="mb-4">{line}</p> : null;
              })}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-3xl font-display font-bold text-forest-700 mb-12">
              More from This Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="group flex flex-col card-shadow rounded-lg overflow-hidden hover:shadow-card-hover transition-smooth"
                >
                  <div className="h-64 bg-gradient-to-b from-sage-200 to-cream-100 flex items-center justify-center overflow-hidden">
                    <span className="text-6xl">🌿</span>
                  </div>
                  <div className="p-4 bg-cream-50">
                    <h3 className="font-display font-bold text-forest-700 mb-1 group-hover:text-gold-400">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gold-400 font-bold">
                      ৳ {relatedProduct.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
