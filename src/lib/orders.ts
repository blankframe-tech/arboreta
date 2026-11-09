import { promises as fs } from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { PaymentMethod } from '@/lib/shop-config';

/**
 * Order storage. With SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY set (always on Vercel), orders go to the
 * Supabase `orders` table (supabase/migrations). Without them, they go to data/orders.json (gitignored),
 * which is for local development only: Vercel's disk does not keep files.
 */

export type OrderStatus =
  | 'new' // just placed
  | 'awaiting_confirmation' // COD: you must call the customer
  | 'confirmed' // COD confirmed by phone, or bKash/Nagad payment verified
  | 'sent_to_nursery' // you told the nursery to ship
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  luckyDiscount: number;
  nurseryId?: string;
}

export interface Order {
  orderNumber: string;
  createdAt: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  /** bKash/Nagad: the transaction ID the customer typed. */
  transactionId?: string;
  /** bKash/Nagad: the number the customer paid from. */
  payerNumber?: string;
  customer: { name: string; phone: string; email?: string; address: string; city: string; note?: string };
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  adminNote?: string;
}

// Server-only: the service key bypasses row level security, so it must never reach the browser.
const db =
  process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
    ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } })
    : null;

// Vercel's disk does not keep files, so the JSON fallback would lose every order there: fail at startup instead.
if (process.env.VERCEL && !db) {
  throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set on Vercel; orders cannot be saved without them.');
}

type OrderRow = {
  order_number: string;
  created_at: string;
  status: OrderStatus;
  payment_method: PaymentMethod;
  transaction_id: string | null;
  payer_number: string | null;
  customer: Order['customer'];
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  admin_note: string | null;
};

export function toRow(o: Order): OrderRow {
  return {
    order_number: o.orderNumber,
    created_at: o.createdAt,
    status: o.status,
    payment_method: o.paymentMethod,
    transaction_id: o.transactionId ?? null,
    payer_number: o.payerNumber ?? null,
    customer: o.customer,
    items: o.items,
    subtotal: o.subtotal,
    shipping: o.shipping,
    total: o.total,
    admin_note: o.adminNote ?? null,
  };
}

export function fromRow(r: OrderRow): Order {
  return {
    orderNumber: r.order_number,
    createdAt: r.created_at,
    status: r.status,
    paymentMethod: r.payment_method,
    transactionId: r.transaction_id ?? undefined,
    payerNumber: r.payer_number ?? undefined,
    customer: r.customer,
    items: r.items,
    subtotal: r.subtotal,
    shipping: r.shipping,
    total: r.total,
    adminNote: r.admin_note ?? undefined,
  };
}

const FILE = path.join(process.cwd(), 'data', 'orders.json');

export async function readOrders(): Promise<Order[]> {
  if (db) {
    const { data, error } = await db.from('orders').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return (data as OrderRow[]).map(fromRow);
  }
  try {
    return JSON.parse(await fs.readFile(FILE, 'utf8')) as Order[];
  } catch {
    return [];
  }
}

async function writeOrders(orders: Order[]) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(orders, null, 2));
}

export async function addOrder(order: Order) {
  if (db) {
    const { error } = await db.from('orders').insert(toRow(order));
    if (error) throw error;
    return;
  }
  const orders = await readOrders();
  orders.unshift(order);
  await writeOrders(orders);
}

export async function updateOrder(orderNumber: string, patch: Partial<Pick<Order, 'status' | 'adminNote'>>) {
  if (db) {
    const row = { ...(patch.status ? { status: patch.status } : {}), ...(patch.adminNote !== undefined ? { admin_note: patch.adminNote } : {}) };
    const { data, error } = await db.from('orders').update(row).eq('order_number', orderNumber).select().maybeSingle();
    if (error) throw error;
    return data ? fromRow(data as OrderRow) : null;
  }
  const orders = await readOrders();
  const o = orders.find((x) => x.orderNumber === orderNumber);
  if (!o) return null;
  Object.assign(o, patch);
  await writeOrders(orders);
  return o;
}

export function newOrderNumber() {
  return `AR-${Date.now().toString(36).toUpperCase().slice(-6)}${Math.floor(Math.random() * 90 + 10)}`;
}
