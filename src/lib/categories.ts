import { Category } from '@/types/product';

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'seeds', name: 'Seeds', icon: '🌱', description: 'Vegetable and flower seeds for the right sowing season' },
  { id: 'flowers', name: 'Flowering Plants', icon: '🌸', description: 'Hibiscus, roses, bougainvillea and other garden bloomers' },
  { id: 'seasonal', name: 'Seasonal Flowers', icon: '🍂', description: 'Winter flower seedlings and what to sow this month' },
  { id: 'bonsai', name: 'Bonsais', icon: '🌲', description: 'Miniature trees to shape and keep for years' },
  { id: 'fruit', name: 'Fruit Trees', icon: '🥭', description: 'Grafted saplings — mango, lemon, guava, dragon fruit and more' },
  { id: 'fertilizers', name: 'Fertilizers & Care', icon: '🧪', description: 'Organic fertilizers and soil boosters, sold by weight' },
  { id: 'office', name: 'Indoor & Office Plants', icon: '🪴', description: 'Easy-care plants for rooms, desks and shady corners' },
];

export const CATEGORY_MAP: Record<string, CategoryInfo> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c])
);
