'use client';

import { useCart } from '@/lib/cart-context';
import {
  BKASH_NUMBER,
  NAGAD_NUMBER,
  PAYMENT_LABELS,
  PAYMENT_METHODS,
  PaymentMethod,
  shippingFor,
} from '@/lib/shop-config';
import Link from 'next/link';
import { useState } from 'react';

const inputCls =
  'w-full border border-sage-200 rounded-xs px-3 py-2 font-body bg-white focus:outline-none focus:border-forest-700';

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    note: '',
    transactionId: '',
    payerNumber: '',
  });
  const [method, setMethod] = useState<PaymentMethod>('bkash');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState<{ orderNumber: string; total: number; method: PaymentMethod } | null>(null);

  const shipping = shippingFor(subtotal);
  const total = subtotal + shipping;
  const payNumber = method === 'bkash' ? BKASH_NUMBER : NAGAD_NUMBER;

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...form,
          paymentMethod: method,
          items: items.map((i) => ({ id: i.product.id, quantity: i.quantity })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }
      setDone({ orderNumber: data.orderNumber, total: data.total, method });
      clearCart();
    } catch {
      setError('Network problem. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="min-h-screen bg-cream-50 py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-6xl mb-6">🌱</div>
          <h1 className="text-4xl font-display font-bold text-forest-700 mb-3">Order received!</h1>
          <p className="text-lg font-display font-bold text-gold-400 mb-6">Order #{done.orderNumber}</p>
          <div className="bg-white rounded-lg p-6 card-shadow text-left font-body text-charcoal/80 space-y-3 mb-8">
            {done.method === 'cod' ? (
              <p>
                We will <strong>call you on the phone number you gave</strong> to confirm your order. Your plants are
                shipped after that call. Please keep ৳{done.total.toLocaleString()} ready to pay on delivery.
              </p>
            ) : (
              <p>
                Thank you! We will verify your {PAYMENT_LABELS[done.method]} payment of ৳{done.total.toLocaleString()} and
                your plants will be on their way to you.
              </p>
            )}
            <p className="text-sm text-charcoal/60">Plants are sent directly from our partner nursery, carefully packed.</p>
          </div>
          <Link href="/categories">
            <button className="btn-primary">Keep browsing</button>
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-display font-bold text-forest-700 mb-4">Your Cart is Empty</h1>
          <p className="text-charcoal/60 font-body mb-8">Add some beautiful plants before checking out.</p>
          <Link href="/categories">
            <button className="btn-primary">Continue Shopping</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-forest-700 mb-8">Checkout</h1>
        <form onSubmit={submit} className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-lg p-6 card-shadow">
              <h2 className="text-xl font-display font-bold text-forest-700 mb-4">Delivery details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required name="name" value={form.name} onChange={set} placeholder="Full name" className={inputCls} />
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={set}
                  placeholder="Mobile number (01XXXXXXXXX)"
                  inputMode="tel"
                  className={inputCls}
                />
                <input name="email" type="email" value={form.email} onChange={set} placeholder="Email (optional)" className={`${inputCls} sm:col-span-2`} />
                <input required name="address" value={form.address} onChange={set} placeholder="Full address (house, road, area)" className={`${inputCls} sm:col-span-2`} />
                <input required name="city" value={form.city} onChange={set} placeholder="District / city" className={inputCls} />
                <input name="note" value={form.note} onChange={set} placeholder="Note for delivery (optional)" className={inputCls} />
              </div>
            </section>

            <section className="bg-white rounded-lg p-6 card-shadow">
              <h2 className="text-xl font-display font-bold text-forest-700 mb-4">Payment</h2>
              <div className={`grid gap-3 mb-5 ${PAYMENT_METHODS.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
                {PAYMENT_METHODS.map((m) => (
                  <label
                    key={m}
                    className={`cursor-pointer border rounded-xs px-4 py-3 text-center font-body font-600 ${
                      method === m ? 'border-forest-700 bg-forest-50 text-forest-700' : 'border-sage-200 text-charcoal/70'
                    }`}
                  >
                    <input type="radio" name="method" className="sr-only" checked={method === m} onChange={() => setMethod(m)} />
                    {PAYMENT_LABELS[m]}
                  </label>
                ))}
              </div>

              {method === 'cod' ? (
                <p className="text-sm font-body text-charcoal/70 bg-cream-100 rounded-xs p-4">
                  Pay in cash when your plants arrive. <strong>We will call you first</strong> to confirm the order — it is
                  shipped only after that call, so please keep your phone on.
                </p>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm font-body text-charcoal/70 bg-cream-100 rounded-xs p-4">
                    1. Open {PAYMENT_LABELS[method]} and <strong>Send Money</strong> ৳{total.toLocaleString()} to{' '}
                    <strong>{payNumber}</strong> (a personal account, so choose Send Money, not Payment).
                    <br />
                    2. Enter the number you paid from and the Transaction ID below.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      required
                      name="payerNumber"
                      value={form.payerNumber}
                      onChange={set}
                      placeholder={`Your ${PAYMENT_LABELS[method]} number`}
                      inputMode="tel"
                      className={inputCls}
                    />
                    <input
                      required
                      name="transactionId"
                      value={form.transactionId}
                      onChange={set}
                      placeholder="Transaction ID (TrxID)"
                      className={inputCls}
                    />
                  </div>
                </div>
              )}
            </section>
          </div>

          <aside className="bg-white rounded-lg p-6 card-shadow h-fit">
            <h2 className="text-xl font-display font-bold text-forest-700 mb-4">Your order</h2>
            <div className="space-y-3 mb-5 border-b border-cream-200 pb-5">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm font-body">
                  <span>
                    {item.product.name} × {item.quantity}
                    {item.product.luckyDiscount ? ' 🍀' : ''}
                  </span>
                  <span>৳ {(item.product.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm font-body text-charcoal/70 mb-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>৳ {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>{shipping === 0 ? 'Free' : `৳ ${shipping}`}</span>
              </div>
              <div className="flex justify-between text-lg font-display font-bold text-forest-700 pt-2 border-t border-cream-200">
                <span>Total</span>
                <span>৳ {total.toLocaleString()}</span>
              </div>
            </div>
            {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
            <button disabled={busy} className="btn-primary w-full disabled:opacity-60">
              {busy ? 'Placing order…' : method === 'cod' ? 'Place order (we will call you)' : 'Place order'}
            </button>
          </aside>
        </form>
      </div>
    </div>
  );
}
