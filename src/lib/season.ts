import { Product } from '@/types/product';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function monthName(m: number) {
  return MONTH_NAMES[(m - 1 + 12) % 12];
}

/** True when the product has a season and `month` (1-12) is inside it. */
export function isInSeason(p: Product, month: number): boolean {
  return !!p.season && p.season.months.includes(month);
}
