/**
 * Utility functions for the Arboreta application
 */

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
  }).format(price);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes
    .filter((c) => typeof c === 'string')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function truncate(text: string, length: number = 100): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

export async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function generateOrderNumber(): string {
  const date = new Date();
  const year = date.getFullYear();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORD-${year}-${random}`;
}

export function calculateTax(subtotal: number, taxRate: number = 0.05): number {
  return Math.round(subtotal * taxRate);
}

export function calculateShipping(subtotal: number): number {
  // Free shipping over 5000 BDT
  if (subtotal >= 5000) return 0;
  // Flat 200 BDT shipping
  return 200;
}

export function calculateTotal(
  subtotal: number,
  taxRate: number = 0.05,
): number {
  const tax = calculateTax(subtotal, taxRate);
  const shipping = calculateShipping(subtotal);
  return subtotal + tax + shipping;
}
