import { describe, expect, it, vi } from 'vitest';
import { fromRow, toRow, Order } from './orders';

describe('order <-> Supabase row', () => {
  it('round-trips with and without optional fields', () => {
    const full: Order = {
      orderNumber: 'AR-ABC12345',
      createdAt: '2026-10-28T10:00:00.000Z',
      status: 'new',
      paymentMethod: 'bkash',
      transactionId: 'TRX123456',
      payerNumber: '01711111111',
      customer: { name: 'A', phone: '01711111111', address: 'House 1, Road 2', city: 'Dhaka' },
      items: [{ productId: 'p1', name: 'Bonsai', quantity: 1, unitPrice: 500, luckyDiscount: 0 }],
      subtotal: 500,
      shipping: 120,
      total: 620,
      adminNote: 'paid',
    };
    expect(fromRow(toRow(full))).toEqual(full);
    const bare: Order = { ...full, transactionId: undefined, payerNumber: undefined, adminNote: undefined };
    expect(toRow(bare).transaction_id).toBeNull();
    expect(fromRow(toRow(bare))).toEqual(bare);
  });
});

describe('order storage on Vercel', () => {
  it('refuses to start without Supabase env', async () => {
    const env = { ...process.env };
    process.env.VERCEL = '1';
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
    vi.resetModules();
    await expect(import('./orders')).rejects.toThrow(/SUPABASE_URL/);
    process.env = env;
  });
});
