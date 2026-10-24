'use client';

import { useCallback, useState } from 'react';
import type { Order, OrderStatus } from '@/lib/orders';
import { NURSERIES, getNursery } from '@/lib/nurseries';
import { PAYMENT_LABELS } from '@/lib/shop-config';

const STATUS_LABEL: Record<OrderStatus, string> = {
  new: 'New (check payment)',
  awaiting_confirmation: 'Call customer (COD)',
  confirmed: 'Confirmed',
  sent_to_nursery: 'Sent to nursery',
  shipped: 'Shipped',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
};

function dispatchMessage(o: Order, nurseryId: string) {
  const lines = o.items.filter((i) => (i.nurseryId ?? '') === nurseryId).map((i) => `- ${i.name} × ${i.quantity}`);
  return [
    `নতুন অর্ডার ${o.orderNumber}`,
    ...lines,
    `কাস্টমার: ${o.customer.name}`,
    `ফোন: ${o.customer.phone}`,
    `ঠিকানা: ${o.customer.address}, ${o.customer.city}`,
    o.paymentMethod === 'cod' ? `ক্যাশ অন ডেলিভারি — কাস্টমার থেকে নিতে হবে: ৳${o.total}` : 'পেমেন্ট হয়ে গেছে',
    o.customer.note ? `নোট: ${o.customer.note}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

export default function AdminOrdersPage() {
  const [key, setKey] = useState('');
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [error, setError] = useState('');

  const load = useCallback(async (k: string) => {
    const res = await fetch('/api/admin/orders', { headers: { 'x-admin-key': k } });
    if (!res.ok) {
      setError('Wrong key (or ADMIN_KEY not set in .env.local)');
      setOrders(null);
      return;
    }
    setError('');
    setOrders((await res.json()).orders);
  }, []);

  async function setStatus(orderNumber: string, status: OrderStatus) {
    await fetch('/api/admin/orders', {
      method: 'PATCH',
      headers: { 'x-admin-key': key, 'content-type': 'application/json' },
      body: JSON.stringify({ orderNumber, status }),
    });
    load(key);
  }

  if (!orders) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            load(key);
          }}
          className="bg-white p-8 rounded-lg card-shadow w-full max-w-sm"
        >
          <h1 className="text-2xl font-display font-bold text-forest-700 mb-4">Orders — admin</h1>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Admin key"
            className="w-full border border-sage-200 rounded-xs px-3 py-2 mb-3"
          />
          {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
          <button className="btn-primary w-full">Open</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-display font-bold text-forest-700">Orders ({orders.length})</h1>
          <button onClick={() => load(key)} className="text-sm underline text-forest-700">
            Refresh
          </button>
        </div>
        {orders.length === 0 && <p className="text-charcoal/60">No orders yet.</p>}
        <div className="space-y-5">
          {orders.map((o) => {
            const nurseryIds = Array.from(new Set(o.items.map((i) => i.nurseryId ?? '')));
            return (
              <div key={o.orderNumber} className="bg-white rounded-lg p-6 card-shadow">
                <div className="flex flex-wrap justify-between gap-2 mb-3">
                  <div>
                    <p className="font-display font-bold text-forest-700">{o.orderNumber}</p>
                    <p className="text-xs text-charcoal/60">{new Date(o.createdAt).toLocaleString()}</p>
                  </div>
                  <select
                    value={o.status}
                    onChange={(e) => setStatus(o.orderNumber, e.target.value as OrderStatus)}
                    className="border border-sage-200 rounded-xs px-2 py-1 text-sm"
                  >
                    {Object.entries(STATUS_LABEL).map(([v, l]) => (
                      <option key={v} value={v}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="text-sm">
                  <strong>{o.customer.name}</strong> ·{' '}
                  <a className="underline" href={`tel:${o.customer.phone}`}>
                    {o.customer.phone}
                  </a>
                </p>
                <p className="text-sm text-charcoal/70 mb-3">
                  {o.customer.address}, {o.customer.city}
                  {o.customer.note ? ` — “${o.customer.note}”` : ''}
                </p>
                <p className="text-sm mb-3">
                  {PAYMENT_LABELS[o.paymentMethod]}
                  {o.transactionId ? ` · TrxID ${o.transactionId}` : ''}
                  {o.payerNumber ? ` · from ${o.payerNumber}` : ''} · <strong>৳{o.total.toLocaleString()}</strong> (incl. shipping ৳{o.shipping})
                </p>
                <ul className="text-sm mb-4 list-disc pl-5">
                  {o.items.map((i, idx) => (
                    <li key={idx}>
                      {i.name} × {i.quantity} — ৳{i.unitPrice}
                      {i.luckyDiscount ? ' 🍀' : ''}
                      {' · '}
                      <span className="text-charcoal/60">{getNursery(i.nurseryId)?.name ?? 'no nursery assigned'}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {nurseryIds.map((nid) => (
                    <button
                      key={nid}
                      onClick={() => navigator.clipboard.writeText(dispatchMessage(o, nid))}
                      className="text-xs border border-forest-700 text-forest-700 rounded-xs px-3 py-1 hover:bg-forest-50"
                    >
                      Copy message for {NURSERIES.find((n) => n.id === nid)?.name ?? 'nursery'}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
