export type PaymentStatus = 'pending' | 'paid' | 'failed';
export type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ShippingAddress {
  street: string;
  city: string;
  postal: string;
  phone: string;
  country?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerEmail: string;
  customerName: string;
  shippingAddress: ShippingAddress;
  items: CartItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  stripePaymentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CheckoutSession {
  orderId: string;
  items: CartItem[];
  total: number;
  successUrl: string;
  cancelUrl: string;
}
