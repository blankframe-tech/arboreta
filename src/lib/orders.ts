import { promises as fs } from 'fs';
import path from 'path';
import { PaymentMethod } from '@/lib/shop-config';

/**
 * Simple file-based order storage (data/orders.json, gitignored).
 * Works on your own computer / a normal server. It will NOT persist on Vercel
 * (read-only disk) — move to a database before deploying there.
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

const FILE = path.join(process.cwd(), 'data', 'orders.json');

export async function readOrders(): Promise<Order[]> {
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
  const orders = await readOrders();
  orders.unshift(order);
  await writeOrders(orders);
}

export async function updateOrder(orderNumber: string, patch: Partial<Pick<Order, 'status' | 'adminNote'>>) {
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
