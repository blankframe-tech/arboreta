export type Rarity = 'common' | 'rare' | 'ultra-rare';
export type LightNeeds = 'low' | 'medium' | 'bright';
export type WateringFrequency = 'daily' | '2-3x week' | 'weekly' | 'monthly';
export type HumidityPreference = 'low' | 'medium' | 'high';
export type Category = 'seeds' | 'flowers' | 'seasonal' | 'bonsai' | 'fruit' | 'fertilizers' | 'office';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: Category;
  price: number;
  description: string;
  careGuide?: string;
  latinName?: string;
  rarity: Rarity;
  petSafe: boolean;
  lightNeeds: LightNeeds;
  wateringFrequency: WateringFrequency;
  humidityPreference: HumidityPreference;
  toxicityNotes?: string;
  imageUrls: string[];
  stockQuantity: number;
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
