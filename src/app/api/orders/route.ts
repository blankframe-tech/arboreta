import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getProductById } from '@/lib/dummy-products';
import { LUCKY_DISCOUNT } from '@/lib/lucky-tree';
import { addOrder, newOrderNumber, Order } from '@/lib/orders';
import { PAYMENT_METHODS, shippingFor } from '@/lib/shop-config';

const schema = z
  .object({
    name: z.string().trim().min(2).max(80),
    phone: z.string().trim().regex(/^(\+?88)?01[3-9]\d{8}$/, 'Enter a valid Bangladeshi mobile number'),
    email: z.string().trim().email().optional().or(z.literal('')),
    address: z.string().trim().min(8).max(300),
    city: z.string().trim().min(2).max(60),
    note: z.string().trim().max(300).optional(),
    paymentMethod: z.enum(['bkash', 'nagad', 'cod']),
    transactionId: z.string().trim().max(40).optional(),
    payerNumber: z.string().trim().max(20).optional(),
    items: z
      .array(z.object({ id: z.string(), quantity: z.number().int().min(1).max(10) }))
      .min(1)
      .max(40),
  })
  .refine((d) => PAYMENT_METHODS.includes(d.paymentMethod), {
    message: 'That payment method is not available',
    path: ['paymentMethod'],
  })
  .refine((d) => d.paymentMethod === 'cod' || (d.transactionId && d.transactionId.length >= 6), {
    message: 'Please enter the bKash/Nagad transaction ID',
    path: ['transactionId'],
  });

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid details' }, { status: 400 });
  }
  const d = parsed.data;

  // Prices are recomputed here from the catalog — never trust the browser's numbers.
  const items: Order['items'] = [];
  for (const line of d.items) {
    const lucky = line.id.endsWith(':lucky');
    const product = getProductById(line.id.split(':')[0]);
    if (!product) return NextResponse.json({ error: 'A product in your cart no longer exists' }, { status: 400 });
    if (!product.available) {
      return NextResponse.json({ error: `${product.name} is currently unavailable. Please remove it from your cart.` }, { status: 400 });
    }
    const discount = lucky ? LUCKY_DISCOUNT : 0;
    items.push({
      productId: product.id,
      name: product.name,
      quantity: line.quantity,
      unitPrice: Math.max(0, product.price - discount),
      luckyDiscount: discount,
      nurseryId: product.nurseryId,
    });
  }

  const subtotal = items.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
  const shipping = shippingFor(subtotal);
  const order: Order = {
    orderNumber: newOrderNumber(),
    createdAt: new Date().toISOString(),
    // COD: you must phone the customer before anything ships. bKash/Nagad: ships once you verify the payment.
    status: d.paymentMethod === 'cod' ? 'awaiting_confirmation' : 'new',
    paymentMethod: d.paymentMethod,
    transactionId: d.transactionId || undefined,
    payerNumber: d.payerNumber || undefined,
    customer: {
      name: d.name,
      phone: d.phone,
      email: d.email || undefined,
      address: d.address,
      city: d.city,
      note: d.note || undefined,
    },
    items,
    subtotal,
    shipping,
    total: subtotal + shipping,
  };

  try {
    await addOrder(order);
  } catch {
    return NextResponse.json({ error: 'Could not save your order. Please call us.' }, { status: 500 });
  }
  return NextResponse.json({ orderNumber: order.orderNumber, total: order.total, status: order.status });
}
