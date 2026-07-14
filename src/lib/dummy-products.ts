import { Product } from '@/types/product';

export const DUMMY_PRODUCTS: Product[] = [
  // Flower Trees
  {
    id: '1',
    name: 'Monstera Deliciosa',
    slug: 'monstera-deliciosa',
    category: 'flowers',
    price: 45000,
    description:
      'A stunning tropical vining philodendron with distinctive fenestration. This rare variegated specimen is a collector\'s favorite, perfect for bright indirect light.',
    careGuide: '## Care Guide\n\n- **Light**: Bright, indirect light\n- **Water**: Water when soil is 50% dry\n- **Humidity**: 60-80% preferred\n- **Temperature**: 65-75°F\n- **Propagation**: Readily propagates from stem cuttings',
    latinName: 'Rhaphidophora deliciosa',
    rarity: 'rare',
    petSafe: false,
    lightNeeds: 'bright',
    wateringFrequency: 'weekly',
    humidityPreference: 'high',
    toxicityNotes: 'Mildly toxic to cats and dogs',
    imageUrls: ['https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&h=500&fit=crop'],
    stockQuantity: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Anthurium Clarinervium',
    slug: 'anthurium-clarinervium',
    category: 'flowers',
    price: 16000,
    description:
      'Stunning dark burgundy leaves with brilliant white veining. A dramatic addition to any collection.',
    careGuide:
      '- Light: Medium to bright indirect\n- Water: Keep soil moist but not soggy\n- Humidity: 70%+ ideal\n- Temperature: 65-80°F',
    latinName: 'Anthurium clarinervium',
    rarity: 'rare',
    petSafe: false,
    lightNeeds: 'medium',
    wateringFrequency: '2-3x week',
    humidityPreference: 'high',
    imageUrls: ['https://images.unsplash.com/photo-1598187306259-e51c96a41a35?w=500&h=500&fit=crop'],
    stockQuantity: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'Philodendron Pink Princess',
    slug: 'philodendron-pink-princess',
    category: 'flowers',
    price: 22000,
    description:
      'Deep green heart-shaped leaves with pink variegation. A contemporary favorite among plant collectors.',
    careGuide: '- Light: Bright, indirect light enhances pink coloration\n- Water: Weekly watering\n- Humidity: 50%+\n- Temperature: 65-75°F',
    latinName: 'Philodendron erubescens',
    rarity: 'rare',
    petSafe: false,
    lightNeeds: 'bright',
    wateringFrequency: 'weekly',
    humidityPreference: 'medium',
    imageUrls: ['https://images.unsplash.com/photo-1611065469378-a06c9fe1f5a2?w=500&h=500&fit=crop'],
    stockQuantity: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Bonsai
  {
    id: '4',
    name: 'Japanese Black Pine',
    slug: 'japanese-black-pine-bonsai',
    category: 'bonsai',
    price: 120000,
    description:
      'A 40-year-old exhibition-ready black pine bonsai. Hand-trained by a master craftsperson. This is an investment piece.',
    careGuide:
      '- Display outdoors most of the year\n- Water daily during growing season\n- Prune new growth to maintain shape\n- Repot every 2-3 years\n- Expertise required',
    latinName: 'Pinus thunbergii',
    rarity: 'ultra-rare',
    petSafe: true,
    lightNeeds: 'bright',
    wateringFrequency: 'daily',
    humidityPreference: 'medium',
    imageUrls: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd37e72?w=500&h=500&fit=crop'],
    stockQuantity: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    name: 'Ficus Retusa Bonsai',
    slug: 'ficus-retusa-bonsai',
    category: 'bonsai',
    price: 35000,
    description:
      'Elegant Ficus bonsai with aerial roots and naturally compact growth. Perfect for intermediate bonsai enthusiasts.',
    careGuide:
      '- Light: Bright, indirect light\n- Water: Keep soil moist\n- Temperature: 60-75°F\n- Humidity: 50%+\n- Prune regularly to maintain shape',
    latinName: 'Ficus retusa',
    rarity: 'rare',
    petSafe: false,
    lightNeeds: 'bright',
    wateringFrequency: 'weekly',
    humidityPreference: 'high',
    imageUrls: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd37e72?w=500&h=500&fit=crop'],
    stockQuantity: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Fruit Trees
  {
    id: '6',
    name: 'Dragon Fruit Tree',
    slug: 'dragon-fruit-tree',
    category: 'fruit',
    price: 18000,
    description:
      'Vibrant pink flowers and exotic magenta fruits. A showstopper in any garden. Edible, sweet fruit produced annually.',
    careGuide:
      '- Light: Full sun (6+ hours daily)\n- Water: Deep watering once weekly\n- Temperature: 50-90°F\n- Soil: Well-draining cactus mix\n- Fruiting: Year 2-3 after planting',
    latinName: 'Hylocereus undatus',
    rarity: 'rare',
    petSafe: true,
    lightNeeds: 'bright',
    wateringFrequency: 'weekly',
    humidityPreference: 'low',
    imageUrls: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd37e72?w=500&h=500&fit=crop'],
    stockQuantity: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '7',
    name: 'Mango Tree (Grafted)',
    slug: 'mango-tree-grafted',
    category: 'fruit',
    price: 12000,
    description:
      'Grafted mango tree ready to produce in 1-2 years. Sweet, juicy fruits. Brings tropical abundance to warm climates.',
    careGuide:
      '- Light: Full sun (8+ hours)\n- Water: Regular watering, reduce in winter\n- Temperature: 70-85°F ideal\n- Soil: Rich, well-draining\n- Harvesting: May-July in most climates',
    latinName: 'Mangifera indica',
    rarity: 'common',
    petSafe: true,
    lightNeeds: 'bright',
    wateringFrequency: 'weekly',
    humidityPreference: 'medium',
    imageUrls: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd37e72?w=500&h=500&fit=crop'],
    stockQuantity: 8,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Office Plants
  {
    id: '8',
    name: 'Nepenthes Rajah (Pitcher Plant)',
    slug: 'nepenthes-rajah',
    category: 'office',
    price: 28000,
    description:
      'Spectacular carnivorous pitcher plant with intricate, exotic pitchers. For advanced collectors. A conversation piece.',
    careGuide:
      '- Light: Bright, indirect\n- Water: Distilled water only\n- Humidity: 80%+ (terrarium recommended)\n- Temperature: 65-75°F\n- Feeding: Insects if outdoors',
    latinName: 'Nepenthes rajah',
    rarity: 'ultra-rare',
    petSafe: false,
    lightNeeds: 'bright',
    wateringFrequency: 'daily',
    humidityPreference: 'high',
    imageUrls: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd37e72?w=500&h=500&fit=crop'],
    stockQuantity: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '9',
    name: 'Lucky Bamboo (Dracaena)',
    slug: 'lucky-bamboo',
    category: 'office',
    price: 3200,
    description:
      'Classic Feng Shui favorite. Air-purifying, low-maintenance, brings positive energy to any space. Easy to propagate.',
    careGuide:
      '- Light: Low to medium light tolerant\n- Water: Keep soil moist or use water propagation\n- Temperature: 60-75°F\n- Humidity: Average room humidity\n- Maintenance: Minimal',
    latinName: 'Dracaena sanderiana',
    rarity: 'common',
    petSafe: true,
    lightNeeds: 'low',
    wateringFrequency: 'weekly',
    humidityPreference: 'medium',
    imageUrls: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd37e72?w=500&h=500&fit=crop'],
    stockQuantity: 12,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '10',
    name: 'Money Tree (Pachira aquatica)',
    slug: 'money-tree',
    category: 'office',
    price: 5600,
    description:
      'Braided trunk variety. Symbols prosperity and good fortune. Attractive glossy green leaves, compact growth.',
    careGuide:
      '- Light: Bright, indirect light\n- Water: Allow soil to dry between watering\n- Temperature: 65-75°F\n- Humidity: 50%+\n- Rotate regularly for even growth',
    latinName: 'Pachira aquatica',
    rarity: 'common',
    petSafe: true,
    lightNeeds: 'bright',
    wateringFrequency: 'weekly',
    humidityPreference: 'medium',
    imageUrls: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd37e72?w=500&h=500&fit=crop'],
    stockQuantity: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Seasonal
  {
    id: '11',
    name: 'Corpse Flower',
    slug: 'corpse-flower',
    category: 'seasonal',
    price: 35000,
    description:
      'Amorphophallus titanium. Blooms once every 7 years with an unmistakable (pungent) scent. A rare botanical marvel for serious collectors.',
    careGuide:
      '- Light: Bright, indirect\n- Water: Keep soil moist during growing season\n- Temperature: 70-80°F\n- Humidity: 70%+\n- Dormancy: 4-6 months yearly\n- Note: Highly specialized cultivation required',
    latinName: 'Amorphophallus titanium',
    rarity: 'ultra-rare',
    petSafe: true,
    lightNeeds: 'bright',
    wateringFrequency: 'daily',
    humidityPreference: 'high',
    imageUrls: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd37e72?w=500&h=500&fit=crop'],
    stockQuantity: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Seeds
  {
    id: '12',
    name: 'Heirloom Tomato Seeds',
    slug: 'heirloom-tomato-seeds',
    category: 'seeds',
    price: 600,
    description:
      '50 seeds of organic, open-pollinated heirloom tomatoes. Flavor over volume. Non-GMO, sustainably sourced.',
    careGuide:
      '- Start indoors 6-8 weeks before last frost\n- Germination: 5-10 days at 70-75°F\n- Plant depth: ¼ inch\n- Transplant outdoors after danger of frost\n- Full sun required (6-8 hours)',
    latinName: 'Solanum lycopersicum',
    rarity: 'common',
    petSafe: false,
    lightNeeds: 'bright',
    wateringFrequency: 'weekly',
    humidityPreference: 'medium',
    imageUrls: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd37e72?w=500&h=500&fit=crop'],
    stockQuantity: 50,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '13',
    name: 'Wildflower Seed Mix',
    slug: 'wildflower-seed-mix',
    category: 'seeds',
    price: 1200,
    description:
      'Pollinator-friendly wildflower blend. 100+ species. Creates a vibrant, low-maintenance meadow garden. Supports bees and butterflies.',
    careGuide:
      '- Sow directly on prepared soil\n- Minimal water needed once established\n- Blooms: Spring through fall\n- Perennial varieties return yearly\n- Great for cottage gardens',
    latinName: 'Mixed species',
    rarity: 'common',
    petSafe: true,
    lightNeeds: 'bright',
    wateringFrequency: 'monthly',
    humidityPreference: 'medium',
    imageUrls: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd37e72?w=500&h=500&fit=crop'],
    stockQuantity: 40,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Fertilizers
  {
    id: '14',
    name: 'Organic Seaweed Fertilizer',
    slug: 'organic-seaweed-fertilizer',
    category: 'fertilizers',
    price: 2500,
    description:
      'Cold-pressed kelp-based organic fertilizer. 1kg. Slow-release nutrients, microbes, and growth hormones. Perfect for all plants.',
    careGuide:
      '- Apply every 2-4 weeks during growing season\n- Mix with water according to instructions\n- Suitable for all plant types\n- Certified organic\n- Improves soil structure over time',
    latinName: 'N/A',
    rarity: 'common',
    petSafe: true,
    lightNeeds: 'low',
    wateringFrequency: 'monthly',
    humidityPreference: 'low',
    imageUrls: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd37e72?w=500&h=500&fit=crop'],
    stockQuantity: 30,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '15',
    name: 'Orchid Care Bundle',
    slug: 'orchid-care-bundle',
    category: 'fertilizers',
    price: 4200,
    description:
      '3-piece specialty orchid care set: orchid-specific fertilizer, bark substrate, and humidity tray. Everything needed for thriving orchids.',
    careGuide:
      '- Fertilize weekly during bloom\n- Re-pot in bark every 1-2 years\n- Humidity tray keeps roots moist without waterlogging\n- For all orchid varieties\n- Sustainably sourced components',
    latinName: 'N/A',
    rarity: 'common',
    petSafe: false,
    lightNeeds: 'low',
    wateringFrequency: 'weekly',
    humidityPreference: 'medium',
    imageUrls: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd37e72?w=500&h=500&fit=crop'],
    stockQuantity: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function getProductsByCategory(category: string): Product[] {
  return DUMMY_PRODUCTS.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return DUMMY_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return DUMMY_PRODUCTS.find((p) => p.id === id);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return DUMMY_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.latinName?.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}
