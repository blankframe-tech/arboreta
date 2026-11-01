import { describe, expect, it } from 'vitest';
import { DUMMY_PRODUCTS } from './dummy-products';
import { luckyLineError } from './lucky-tree';

const PLANTS = ['flowers', 'seasonal', 'bonsai', 'fruit', 'office'];
const plant = DUMMY_PRODUCTS.find((p) => p.available && PLANTS.includes(p.category))!;
const notPlant = DUMMY_PRODUCTS.find((p) => !PLANTS.includes(p.category))!;

describe('luckyLineError (server-side :lucky check)', () => {
  it('accepts one unit of a plant the finder can suggest, and ignores normal lines', () => {
    expect(luckyLineError([{ id: `${plant.id}:lucky`, quantity: 1 }, { id: notPlant.id, quantity: 3 }])).toBeNull();
  });
  it('rejects the discount on a non-plant, an unknown id, more than one unit, or twice in one order', () => {
    expect(luckyLineError([{ id: `${notPlant.id}:lucky`, quantity: 1 }])).not.toBeNull();
    expect(luckyLineError([{ id: 'no-such-id:lucky', quantity: 1 }])).not.toBeNull();
    expect(luckyLineError([{ id: `${plant.id}:lucky`, quantity: 2 }])).not.toBeNull();
    expect(luckyLineError([{ id: `${plant.id}:lucky`, quantity: 1 }, { id: `${plant.id}:lucky`, quantity: 1 }])).not.toBeNull();
  });
});
