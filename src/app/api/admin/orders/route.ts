import { NextResponse } from 'next/server';
import { readOrders, updateOrder, OrderStatus } from '@/lib/orders';

function authorized(req: Request) {
  const key = process.env.ADMIN_KEY;
  return !!key && req.headers.get('x-admin-key') === key;
}

export async function GET(req: Request) {
  if (!authorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json({ orders: await readOrders() });
}

const STATUSES: OrderStatus[] = ['new', 'awaiting_confirmation', 'confirmed', 'sent_to_nursery', 'shipped', 'delivered', 'cancelled'];

export async function PATCH(req: Request) {
  if (!authorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { orderNumber, status, adminNote } = await req.json();
  if (status && !STATUSES.includes(status)) return NextResponse.json({ error: 'Bad status' }, { status: 400 });
  const o = await updateOrder(orderNumber, { ...(status ? { status } : {}), ...(typeof adminNote === 'string' ? { adminNote } : {}) });
  if (!o) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ order: o });
}
