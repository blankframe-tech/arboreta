/**
 * Shop settings you will want to change. All values here are PLACEHOLDERS — replace them
 * with your real numbers before going live.
 */

/**
 * Numbers customers send money to. Both are PERSONAL accounts, so customers use "Send Money"
 * (not "Payment" / merchant pay). Leave a number '' to hide that method at checkout.
 */
export const BKASH_NUMBER = '01535836896';
export const NAGAD_NUMBER = ''; // not given yet: Nagad stays hidden until the owner confirms a number

/** Delivery charge (৳). Free delivery above FREE_SHIPPING_OVER. Adjust after you talk to the nurseries. */
export const SHIPPING_CHARGE = 120;
export const FREE_SHIPPING_OVER = 3000;

export function shippingFor(subtotal: number) {
  return subtotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_CHARGE;
}

export type PaymentMethod = 'bkash' | 'nagad' | 'cod';

/** Methods offered at checkout: a mobile wallet only shows when its number is set. */
export const PAYMENT_METHODS: PaymentMethod[] = (['bkash', 'nagad', 'cod'] as const).filter(
  (m) => m === 'cod' || (m === 'bkash' ? BKASH_NUMBER : NAGAD_NUMBER),
);

export const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  bkash: 'bKash',
  nagad: 'Nagad',
  cod: 'Cash on Delivery',
};
