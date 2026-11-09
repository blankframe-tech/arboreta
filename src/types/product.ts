export type Rarity = 'common' | 'rare' | 'ultra-rare';
export type LightNeeds = 'low' | 'medium' | 'bright';
export type WateringFrequency = 'daily' | '2-3x week' | 'weekly' | 'monthly';
export type HumidityPreference = 'low' | 'medium' | 'high';
export type Category = 'seeds' | 'flowers' | 'seasonal' | 'bonsai' | 'fruit' | 'fertilizers' | 'office';
export type Placement = 'indoor' | 'outdoor';

/** When a product is best planted / sown / bought. Leave `season` out for year-round items. */
export interface Season {
  /** Months (1 = January … 12 = December) when it is "in season". */
  months: number[];
  /** Short human text, e.g. "Best planted June–September". */
  label: string;
}

export interface Product {
  id: string;
  name: string;
  /** Bangla name shown next to the Latin name (optional). */
  bnName?: string;
  slug: string;
  category: Category;
  /** Retail price in BDT. */
  price: number;
  /** Size / pack info shown under the name, e.g. "6-inch pot" or "1 kg". */
  size?: string;
  description: string;
  careGuide?: string;
  latinName?: string;
  rarity: Rarity;
  petSafe: boolean;
  lightNeeds: LightNeeds;
  wateringFrequency: WateringFrequency;
  humidityPreference: HumidityPreference;
  toxicityNotes?: string;
  placement: Placement[];
  imageUrls: string[];
  season?: Season;

  // ---- Dropshipping ----
  /** Which partner nursery ships this (see src/lib/nurseries.ts). Empty = not assigned yet. */
  nurseryId?: string;
  /** Set to false when the nursery does not have it right now — the site shows "Currently unavailable". */
  available: boolean;

  /** Set when the item was added via the Lucky Tree Finder (৳ off per unit). */
  luckyDiscount?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductDetail {
  id: string;
  productId: string;
  potSize?: string;
  origin?: string;
  careLevel: 'beginner' | 'intermediate' | 'expert';
  features: string[];
  similarProductIds: string[];
}
