/**
 * Your partner nurseries (dropshipping). Fill in the real names / areas / phone numbers
 * and then set `nurseryId` on each product in dummy-products.ts.
 * The order admin page shows which nursery should ship each item.
 */
export interface Nursery {
  id: string;
  name: string;
  area: string;
  phone: string;
}

export const NURSERIES: Nursery[] = [
  { id: 'nursery-1', name: 'Nursery 1 (rename me)', area: '', phone: '' },
  { id: 'nursery-2', name: 'Nursery 2 (rename me)', area: '', phone: '' },
  { id: 'nursery-3', name: 'Nursery 3 (rename me)', area: '', phone: '' },
  { id: 'nursery-4', name: 'Nursery 4 (rename me)', area: '', phone: '' },
  { id: 'nursery-5', name: 'Nursery 5 (rename me)', area: '', phone: '' },
];

export function getNursery(id?: string): Nursery | undefined {
  return NURSERIES.find((n) => n.id === id);
}
