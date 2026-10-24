/**
 * Shop settings you will want to change. All values here are PLACEHOLDERS — replace them
 * with your real numbers before going live.
 */

/** Your bKash / Nagad PERSONAL or MERCHANT numbers where customers send money. */
export const BKASH_NUMBER = '01XXXXXXXXX';
export const NAGAD_NUMBER = '01XXXXXXXXX';

/** Delivery charge (৳). Free delivery above FREE_SHIPPING_OVER. Adjust after you talk to the nurseries. */
export const SHIPPING_CHARGE = 120;
export const FREE_SHIPPING_OVER = 3000;

export function shippingFor(subtotal: number) {
  return subtotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_CHARGE;
}

export type PaymentMethod = 'bkash' | 'nagad' | 'cod';

export const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  bkash: 'bKash',
  nagad: 'Nagad',
  cod: 'Cash on Delivery',
};
