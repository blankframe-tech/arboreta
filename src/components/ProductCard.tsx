'use client';

import { Product } from '@/types/product';
import { SeasonBadge } from '@/components/SeasonBadge';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onWishlistToggle?: (productId: string) => void;
}

export function ProductCard({
  product,
  onAddToCart,
  onWishlistToggle,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart?.(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onWishlistToggle?.(product.id);
  };

  const rarityColor = {
    common: 'bg-sage-200 text-forest-700',
    rare: 'bg-terracotta/20 text-terracotta',
    'ultra-rare': 'bg-gold/20 text-gold-400',
  };

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group flex flex-col card-shadow rounded-lg overflow-hidden hover:shadow-card-hover transition-smooth cursor-pointer h-full">
        {/* Image Area */}
        <div className="relative h-80 bg-gradient-to-b from-sage-200 to-cream-100 flex items-center justify-center overflow-hidden">
          {product.imageUrls?.[0] ? (
            <img
              src={product.imageUrls[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <span className="text-8xl">🌿</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between bg-cream-50">
          <div>
            <h3 className="text-xl font-display font-bold text-forest-700 mb-1 group-hover:text-gold-400 transition-colors">
              {product.name}
            </h3>
            {product.latinName && (
              <p className="text-sm font-accent italic text-charcoal/60 mb-4">
                {product.latinName}
              </p>
            )}
            <div className="flex gap-2 mb-6 flex-wrap">
              <span
                className={`text-xs uppercase tracking-widest font-body font-600 px-3 py-1 rounded-xs ${
                  rarityColor[product.rarity]
                }`}
              >
                {product.rarity}
              </span>
              {product.petSafe && (
                <span className="text-xs uppercase tracking-widest font-body font-600 px-3 py-1 rounded-xs bg-forest-100 text-forest-700">
                  Pet Safe
                </span>
              )}
              {!product.available && (
                <span className="text-xs uppercase tracking-widest font-body font-600 px-3 py-1 rounded-xs bg-gray-300 text-gray-700">
                  Unavailable
                </span>
              )}
              <SeasonBadge product={product} />
            </div>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-2xl font-display text-gold-400 font-bold">
              ৳ {product.price.toLocaleString()}
            </span>
          </div>

          <div className="flex gap-2 mt-6 pt-6 border-t border-cream-200">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
              className={`flex-1 py-2 px-4 rounded-xs font-body font-600 text-sm transition-smooth ${
                addedToCart
                  ? 'bg-sage-400 text-cream-50'
                  : 'bg-forest-700 text-cream-50 hover:bg-forest-800'
              }`}
            >
              {addedToCart ? '✓ Added' : 'Add to Cart'}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleWishlist();
              }}
              className={`py-2 px-4 rounded-xs font-body font-600 text-sm transition-smooth ${
                isWishlisted
                  ? 'bg-terracotta/20 text-terracotta border border-terracotta'
                  : 'border border-forest-700 text-forest-700 hover:bg-forest-50'
              }`}
            >
              {isWishlisted ? '❤' : '♡'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
