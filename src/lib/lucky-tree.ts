import { DUMMY_PRODUCTS } from '@/lib/dummy-products';
import { Category, LightNeeds, Product, WateringFrequency } from '@/types/product';

/** ৳ taken off a tree that was found through the Lucky Tree Finder. */
export const LUCKY_DISCOUNT = 20;

export type Placement = 'indoor' | 'outdoor' | 'either';
export type WaterRhythm = 'often' | 'weekly' | 'rarely';

export interface LuckyAnswers {
  placement: Placement;
  sun: LightNeeds;
  water: WaterRhythm;
  pets: boolean;
}

export interface LuckyMatch {
  product: Product;
  score: number;
  reasons: string[];
  petWarning: boolean;
}

/** Only living plants take part in the quiz (no seeds / fertilizers). */
const PLANT_CATEGORIES: Category[] = ['flowers', 'seasonal', 'bonsai', 'fruit', 'office'];

/** Where each category generally lives. Edit freely when the catalog grows. */
const PLACEMENT: Record<string, Array<'indoor' | 'outdoor'>> = {
  office: ['indoor'],
  bonsai: ['indoor', 'outdoor'],
  flowers: ['indoor', 'outdoor'],
  fruit: ['outdoor'],
  seasonal: ['outdoor'],
};

const LIGHT_ORDER: LightNeeds[] = ['low', 'medium', 'bright'];
const WATER_ORDER: WaterRhythm[] = ['often', 'weekly', 'rarely'];
const RARITY_BONUS = { common: 0, rare: 0.1, 'ultra-rare': 0.2 } as const;

function waterRhythmOf(f: WateringFrequency): WaterRhythm {
  if (f === 'daily' || f === '2-3x week') return 'often';
  if (f === 'weekly') return 'weekly';
  return 'rarely';
}

export function findLuckyTrees(answers: LuckyAnswers): LuckyMatch[] {
  const candidates = DUMMY_PRODUCTS.filter((p) => p.available && PLANT_CATEGORIES.includes(p.category));

  const matches = candidates.map((p): LuckyMatch => {
    let score = RARITY_BONUS[p.rarity];
    const reasons: string[] = [];

    // 1. Placement
    const places = p.placement?.length ? p.placement : (PLACEMENT[p.category] ?? ['indoor', 'outdoor']);
    if (answers.placement === 'either') {
      score += 2;
    } else if (places.includes(answers.placement)) {
      score += 3;
      reasons.push(answers.placement === 'indoor' ? 'Happy indoors' : 'Loves the outdoors');
    } else {
      score -= 5;
    }

    // 2. Light
    const lightGap = Math.abs(LIGHT_ORDER.indexOf(p.lightNeeds) - LIGHT_ORDER.indexOf(answers.sun));
    if (lightGap === 0) {
      score += 3;
      reasons.push(
        answers.sun === 'low' ? 'Fine in shade' : answers.sun === 'medium' ? 'Loves bright, indirect light' : 'Thrives in strong sun'
      );
    } else if (lightGap === 1) {
      score += 1;
    } else {
      score -= 2;
    }

    // 3. Watering
    const rhythm = waterRhythmOf(p.wateringFrequency);
    const waterGap = Math.abs(WATER_ORDER.indexOf(rhythm) - WATER_ORDER.indexOf(answers.water));
    if (waterGap === 0) {
      score += 3;
      reasons.push(
        answers.water === 'often' ? 'Enjoys frequent watering' : answers.water === 'weekly' ? 'Happy with weekly watering' : 'Forgiving if you forget'
      );
    } else if (waterGap === 1) {
      score += 1;
    } else {
      score -= 2;
    }

    // 4. Pets
    if (answers.pets) {
      if (p.petSafe) {
        score += 3;
        reasons.push('Safe around pets');
      } else {
        score -= 6;
      }
    }

    return { product: p, score, reasons, petWarning: answers.pets && !p.petSafe };
  });

  return matches.sort((a, b) => b.score - a.score).slice(0, 3);
}
