'use client';

import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>(
    'shipping'
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    postal: '',
  });
  const [orderNumber, setOrderNumber] = useState('');

  const shipping = subtotal >= 5000 ? 0 : 200;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.street &&
      formData.city &&
      formData.postal
    ) {
      setStep('payment');
    }
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment success
    const number = `ORD-${Date.now().toString().slice(-8)}`;
    setOrderNumber(number);
    clearCart();
    setStep('confirmation');
  };

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-display font-bold text-forest-700 mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-charcoal/60 font-body mb-8">
            Add some beautiful plants to your collection before checking out.
          </p>
          <Link href="/categories">
            <button className="btn-primary">Continue Shopping</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Indicator */}
        <div className="flex justify-center gap-4 mb-12">
          {(['shipping', 'payment', 'confirmation'] as const).map(
            (s, index) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold ${
                    step === s || (step === 'confirmation' && s !== 'confirmation')
                      ? 'bg-forest-700 text-cream-50'
                      : 'bg-sage-200 text-forest-700'
                  }`}
                >
                  {index + 1}
                </div>
                <span className="font-body text-sm text-forest-700 capitalize">
                  {s}
                </span>
                {index < 2 && (
                  <div className="w-12 h-0.5 bg-sage-200 mx-2" />
                )}
              </div>
            )
          )}
        </div>

        {step === 'confirmation' ? (
          // Confirmation
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-6xl mb-6">🎉</div>
              <h1 className="text-5xl font-display font-bold text-forest-700 mb-4">
                Order Placed!
              </h1>
              <p className="text-xl text-charcoal/60 font-body mb-2">
                Thank you for your purchase.
              </p>
              <p className="text-lg font-display font-bold text-gold-400">
                Order #{orderNumber}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 mb-8 card-shadow">
              <h2 className="text-2xl font-display font-bold text-forest-700 mb-6">
                Order Details
              </h2>

              <div className="space-y-4 mb-8 border-b border-cream-200 pb-8">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <div>
                      <p className="font-body font-600 text-forest-700">
                        {item.product.name}
                      </p>
                      <p className="text-sm text-charcoal/60 font-body">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-body font-600 text-forest-700">
                      ৳ {(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-charcoal/70">
                  <span className="font-body">Subtotal</span>
                  <span>৳ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-charcoal/70">
                  <span className="font-body">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `৳ ${shipping}`}</span>
                </div>
                <div className="flex justify-between text-charcoal/70">
                  <span className="font-body">Tax (5%)</span>
                  <span>৳ {tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-cream-200 pt-3">
                  <span className="font-display font-bold text-forest-700">
                    Total
                  </span>
                  <span className="font-display font-bold text-lg text-gold-400">
                    ৳ {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg">
                <h3 className="font-display font-bold text-forest-700 mb-4">
                  Shipping To
                </h3>
                <p className="font-body text-charcoal mb-1">{formData.name}</p>
                <p className="font-body text-charcoal/70 text-sm">
                  {formData.street}, {formData.city} {formData.postal}
                </p>
                <p className="font-body text-charcoal/70 text-sm">{formData.email}</p>
              </div>
            </div>

            <div className="bg-forest-100 border border-forest-400 rounded-lg p-6 mb-8">
              <p className="font-body text-forest-700">
                📧 A confirmation email has been sent to{' '}
                <span className="font-bold">{formData.email}</span>
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <Link href="/">
                <button className="btn-primary">Back to Home</button>
              </Link>
              <Link href="/categories">
                <button className="btn-secondary">Continue Shopping</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 card-shadow">
                {step === 'shipping' ? (
                  <form onSubmit={handleShippingSubmit}>
                    <h2 className="text-2xl font-display font-bold text-forest-700 mb-8">
                      Shipping Address
                    </h2>

                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="col-span-2"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="col-span-2"
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="col-span-2"
                        />
                        <input
                          type="text"
                          name="street"
                          placeholder="Street Address"
                          value={formData.street}
                          onChange={handleInputChange}
                          required
                          className="col-span-2"
                        />
                        <input
                          type="text"
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="text"
                          name="postal"
                          placeholder="Postal Code"
                          value={formData.postal}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <button type="submit" className="w-full btn-primary mt-8">
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handlePaymentSubmit}>
                    <h2 className="text-2xl font-display font-bold text-forest-700 mb-8">
                      Payment Method
                    </h2>

                    <div className="space-y-6">
                      <div className="border border-forest-400 rounded-xs p-6 bg-cream-50">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="payment"
                            defaultChecked
                            className="w-5 h-5"
                          />
                          <span className="font-body font-600 text-forest-700">
                            Credit / Debit Card (Stripe)
                          </span>
                        </label>
                      </div>

                      <div className="p-6 bg-forest-50 rounded-xs border border-forest-200">
                        <p className="text-sm text-charcoal/60 font-body mb-4">
                          Demo mode: Use any card number. This is a demonstration checkout.
                        </p>
                        <div className="space-y-4">
                          <input
                            type="text"
                            placeholder="Card Number (4242 4242 4242 4242)"
                            className="w-full"
                            defaultValue="4242 4242 4242 4242"
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full"
                              defaultValue="12/25"
                            />
                            <input
                              type="text"
                              placeholder="CVC"
                              className="w-full"
                              defaultValue="123"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep('shipping')}
                          className="flex-1 btn-secondary"
                        >
                          Back
                        </button>
                        <button type="submit" className="flex-1 btn-primary">
                          Complete Order
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-8 card-shadow sticky top-24">
                <h3 className="text-xl font-display font-bold text-forest-700 mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-8 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex justify-between pb-4 border-b border-cream-200"
                    >
                      <div>
                        <p className="font-body font-600 text-forest-700 text-sm">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-charcoal/50">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-body font-600 text-forest-700">
                        ৳ {(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-cream-200 pt-6 space-y-3">
                  <div className="flex justify-between text-charcoal/70 text-sm">
                    <span>Subtotal</span>
                    <span>৳ {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-charcoal/70 text-sm">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `৳ ${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-charcoal/70 text-sm">
                    <span>Tax (5%)</span>
                    <span>৳ {tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t border-cream-200 pt-3">
                    <span className="font-display font-bold text-forest-700">
                      Total
                    </span>
                    <span className="text-gold-400 font-display font-bold text-lg">
                      ৳ {total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
