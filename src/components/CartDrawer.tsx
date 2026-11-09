'use client';

import { useCart } from '@/lib/cart-context';
import { shippingFor } from '@/lib/shop-config';
import Link from 'next/link';

export function CartDrawer() {
  const { items, removeItem, updateQuantity, subtotal, isOpen, closeCart } = useCart();
  const setIsOpen = (open: boolean) => { if (!open) closeCart(); };

  

  return (
    <>
      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-cream-50 shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 border-b border-cream-200 pb-6">
            <h2 className="text-2xl font-display font-bold text-forest-700">
              Your Cart
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-forest-700 hover:text-gold-400 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 space-y-6 overflow-y-auto">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-charcoal/60 font-body">Your cart is empty</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 text-forest-700 hover:text-gold-400 transition-colors font-body font-600"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 pb-6 border-b border-cream-200"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded bg-sage-100 flex items-center justify-center flex-shrink-0">
                    {item.product.imageUrls?.[0] ? (
                      <img
                        src={item.product.imageUrls[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <span className="text-2xl">🌿</span>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-forest-700 mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-gold-400 font-bold mb-2">
                      ৳ {item.product.price.toLocaleString()}
                    </p>
                    {item.product.luckyDiscount && (
                      <p className="inline-block mb-2 text-xs font-600 text-forest-700 bg-gold-100 border border-gold-300 rounded-full px-2 py-0.5">
                        🍀 Lucky Tree −৳{item.product.luckyDiscount}
                      </p>
                    )}

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mb-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center border border-forest-700 rounded text-forest-700 hover:bg-forest-50 transition-colors text-sm"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-body font-600">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center border border-forest-700 rounded text-forest-700 hover:bg-forest-50 transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-xs text-charcoal/50 hover:text-charcoal transition-colors font-body"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary */}
          {items.length > 0 && (
            <div className="border-t border-cream-200 pt-6 space-y-3">
              <div className="flex justify-between text-charcoal/70 font-body text-sm">
                <span>Subtotal</span>
                <span>৳ {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-charcoal/70 font-body text-sm">
                <span>Shipping</span>
                <span>{shippingFor(subtotal) === 0 ? 'Free' : `৳ ${shippingFor(subtotal)}`}</span>
              </div>
              <div className="flex justify-between border-t border-cream-200 pt-3">
                <span className="font-display font-bold text-forest-700">
                  Total
                </span>
                <span className="text-gold-400 font-display font-bold text-lg">
                  ৳ {(subtotal + shippingFor(subtotal)).toLocaleString()}
                </span>
              </div>

              {/* CTA */}
              <Link href="/checkout" onClick={() => setIsOpen(false)}>
                <button className="w-full btn-primary mt-6">
                  Proceed to Checkout
                </button>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full btn-secondary"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>

    </>
  );
}
