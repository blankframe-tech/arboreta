import { Product } from '@/types/product';

/**
 * PRODUCT CATALOG (temporary — will move to a database later).
 *
 * Prices are retail prices in BDT, set from what Bangladeshi online nurseries list today
 * (Oct 2026 research). They are STARTING points — adjust to your own margin.
 *
 * Dropshipping fields per product:
 *   nurseryId  -> which partner nursery ships it (ids live in src/lib/nurseries.ts)
 *   available  -> set to false when the nursery does not have it; the site shows "Currently unavailable"
 *
 * Seasons are general guidance for Bangladesh — confirm with your nurseries.
 * Photos live in /public/plants and are credited in src/lib/image-credits.ts.
 */

const D = new Date('2026-10-01');

type Input = Omit<Product, 'id' | 'imageUrls' | 'available' | 'createdAt' | 'updatedAt' | 'humidityPreference' | 'petSafe' | 'placement'> &
  Partial<Pick<Product, 'humidityPreference' | 'petSafe' | 'placement' | 'available' | 'imageUrls'>>;

let n = 0;
function mk(p: Input): Product {
  n += 1;
  return {
    id: String(n),
    humidityPreference: 'medium',
    petSafe: false,
    placement: ['indoor'],
    imageUrls: [`/plants/${p.slug}.jpg`],
    available: true,
    createdAt: D,
    updatedAt: new Date(D.getTime() + n * 86400000),
    ...p,
  };
}

const MONSOON = { months: [6, 7, 8, 9], label: 'Best planted in the monsoon (June–September)' };
const WINTER_FLOWER = { months: [10, 11, 12, 1, 2], label: 'Winter flower — seedlings available October to February' };

export const DUMMY_PRODUCTS: Product[] = [
  // ───────────── Indoor & Office Plants ─────────────
  mk({
    name: 'Snake Plant', bnName: 'স্নেক প্ল্যান্ট', slug: 'snake-plant', category: 'office', price: 390, size: '6-inch pot',
    latinName: 'Dracaena trifasciata', rarity: 'common', lightNeeds: 'low', wateringFrequency: 'monthly', humidityPreference: 'low',
    description: 'Upright, sword-shaped leaves that look sharp in any corner. One of the toughest houseplants there is — it shrugs off low light and forgotten waterings.',
    careGuide: '- Light: Low to bright indirect light\n- Water: Let the soil dry out fully; every 2–3 weeks is plenty\n- Soil: Fast-draining mix, pot with a drainage hole\n- Tip: Overwatering is the only real way to lose it',
    toxicityNotes: 'Mildly toxic to cats and dogs if chewed.',
  }),
  mk({
    name: 'ZZ Plant', bnName: 'জেডজেড প্ল্যান্ট', slug: 'zz-plant', category: 'office', price: 590, size: '6-inch pot',
    latinName: 'Zamioculcas zamiifolia', rarity: 'common', lightNeeds: 'low', wateringFrequency: 'monthly', humidityPreference: 'low',
    description: 'Glossy, deep-green leaves on thick stems. Stores water in its roots, so it forgives busy weeks and dim rooms.',
    careGuide: '- Light: Low to medium indirect light\n- Water: Only when the soil is completely dry\n- Soil: Well-draining potting mix\n- Tip: Yellowing leaves usually mean too much water',
    toxicityNotes: 'Toxic if eaten — keep away from pets and small children.',
  }),
  mk({
    name: 'Money Plant (Golden Pothos)', bnName: 'মানি প্ল্যান্ট', slug: 'golden-pothos', category: 'office', price: 200, size: '5-inch pot',
    latinName: 'Epipremnum aureum', rarity: 'common', lightNeeds: 'low', wateringFrequency: 'weekly', humidityPreference: 'medium',
    description: 'The classic trailing vine that grows in soil or in a jar of water. Hang it, train it up a pole, or let it spill from a shelf.',
    careGuide: '- Light: Low to bright indirect light (avoid hot direct sun)\n- Water: When the top 2–3 cm of soil is dry; or change jar water weekly\n- Tip: Trim long vines to keep it bushy',
    toxicityNotes: 'Toxic to cats and dogs if chewed.',
  }),
  mk({
    name: 'Peace Lily', bnName: 'পিস লিলি', slug: 'peace-lily', category: 'office', price: 490, size: '6-inch pot',
    latinName: 'Spathiphyllum wallisii', rarity: 'common', lightNeeds: 'medium', wateringFrequency: 'weekly', humidityPreference: 'high',
    description: 'Dark green leaves and elegant white blooms. It droops dramatically when thirsty, then bounces back after a drink.',
    careGuide: '- Light: Bright, indirect light; no harsh sun\n- Water: Keep the soil lightly moist, never soggy\n- Humidity: Likes humid air — mist or group with other plants\n- Tip: Wipe the leaves occasionally to keep them glossy',
    toxicityNotes: 'Irritating to pets and people if chewed.',
  }),
  mk({
    name: 'Lucky Bamboo', bnName: 'লাকি বাম্বু', slug: 'lucky-bamboo', category: 'office', price: 250, size: 'Stalks in vase',
    latinName: 'Dracaena sanderiana', rarity: 'common', lightNeeds: 'low', wateringFrequency: 'weekly', humidityPreference: 'medium',
    description: 'Graceful green stalks that live happily in water. A popular desk and gift plant that asks for almost nothing.',
    careGuide: '- Light: Low to medium indirect light\n- Water: Keep roots covered; change the water every week\n- Water type: Filtered or standing water is best\n- Tip: Yellow stalks mean it is getting too much sun or the water is stale',
    toxicityNotes: 'Toxic to cats and dogs if chewed.',
  }),
  mk({
    name: 'Monstera Deliciosa', bnName: 'মনস্টেরা', slug: 'monstera-deliciosa', category: 'office', price: 990, size: '8-inch pot',
    latinName: 'Monstera deliciosa', rarity: 'rare', lightNeeds: 'medium', wateringFrequency: 'weekly', humidityPreference: 'high',
    description: 'The plant everyone photographs. Big, glossy leaves develop their famous splits as it matures. Bold enough to be the centre of a room.',
    careGuide: '- Light: Bright, indirect light\n- Water: When the top 2–3 cm of soil is dry\n- Support: Give it a moss pole as it climbs\n- Tip: Splits and holes come with maturity and good light',
    toxicityNotes: 'Mildly toxic to cats and dogs.',
  }),
  mk({
    name: 'Rubber Plant', bnName: 'রাবার প্ল্যান্ট', slug: 'rubber-plant', category: 'office', price: 690, size: '8-inch pot',
    latinName: 'Ficus elastica', rarity: 'common', lightNeeds: 'medium', wateringFrequency: 'weekly', humidityPreference: 'medium', placement: ['indoor', 'outdoor'],
    description: 'Thick, glossy leaves on a sturdy stem. Grows into a statement plant and tolerates ordinary home conditions well.',
    careGuide: '- Light: Bright, indirect light\n- Water: When the top few cm of soil are dry\n- Tip: Wipe dust off the leaves; do not move it often',
    toxicityNotes: 'The milky sap can irritate skin and is mildly toxic to pets.',
  }),
  mk({
    name: 'Aglaonema (Red Chinese Evergreen)', bnName: 'অ্যাগ্লাওনিমা', slug: 'aglaonema', category: 'office', price: 790, size: '6-inch pot',
    latinName: 'Aglaonema', rarity: 'rare', lightNeeds: 'low', wateringFrequency: 'weekly', humidityPreference: 'medium',
    description: 'Leaves splashed with pink and red make this one of the prettiest low-light plants. Easy to live with and rarely fussy.',
    careGuide: '- Light: Low to medium indirect light; colours are best in brighter shade\n- Water: When the top of the soil is dry\n- Tip: Keep away from cold air-conditioner drafts',
    toxicityNotes: 'Irritating to pets and people if chewed.',
  }),
  mk({
    name: 'Areca Palm', bnName: 'এরিকা পাম', slug: 'areca-palm', category: 'office', price: 790, size: '10-inch pot',
    latinName: 'Dypsis lutescens', rarity: 'common', lightNeeds: 'medium', wateringFrequency: 'weekly', humidityPreference: 'high', petSafe: true, placement: ['indoor', 'outdoor'],
    description: 'Feathery, arching fronds bring a tropical feel to living rooms and offices — and it is safe around pets.',
    careGuide: '- Light: Bright, indirect light\n- Water: Keep evenly moist, not waterlogged\n- Tip: Brown tips mean dry air or irregular watering',
  }),
  mk({
    name: 'Anthurium', bnName: 'অ্যান্থুরিয়াম', slug: 'anthurium', category: 'office', price: 990, size: '6-inch pot',
    latinName: 'Anthurium andraeanum', rarity: 'rare', lightNeeds: 'medium', wateringFrequency: 'weekly', humidityPreference: 'high',
    description: 'Glossy, heart-shaped red flowers that last for weeks. A reliable indoor bloomer in bright, humid rooms.',
    careGuide: '- Light: Bright, indirect light\n- Water: When the top of the soil feels dry; avoid soggy roots\n- Humidity: Enjoys humid air\n- Tip: Remove spent flowers to encourage new ones',
    toxicityNotes: 'Irritating to pets and people if chewed.',
  }),
  mk({
    name: 'Bird of Paradise', bnName: 'বার্ড অব প্যারাডাইস', slug: 'bird-of-paradise', category: 'office', price: 490, size: '8-inch pot',
    latinName: 'Strelitzia reginae', rarity: 'rare', lightNeeds: 'bright', wateringFrequency: 'weekly', humidityPreference: 'medium', placement: ['indoor', 'outdoor'],
    description: 'Large paddle leaves and, with enough light, the striking orange-and-blue flower it is named for.',
    careGuide: '- Light: Bright light, some direct sun is welcome\n- Water: When the top few cm of soil are dry\n- Tip: Flowers need a mature plant and plenty of light',
    toxicityNotes: 'Seeds and pods are mildly toxic if eaten.',
  }),

  // ───────────── Flowering Plants ─────────────
  mk({
    name: 'Hibiscus', bnName: 'জবা', slug: 'hibiscus', category: 'flowers', price: 250, size: 'Polybag, ~1–1.5 ft',
    latinName: 'Hibiscus rosa-sinensis', rarity: 'common', lightNeeds: 'bright', wateringFrequency: '2-3x week', humidityPreference: 'medium', petSafe: true, placement: ['outdoor'],
    season: MONSOON,
    description: 'Large, showy flowers on a hardy shrub that loves Bangladeshi weather. Blooms almost year-round in good sun.',
    careGuide: '- Light: Full sun (at least 5–6 hours)\n- Water: Regularly in hot weather; let the top soil dry between waterings\n- Feeding: A light feed every few weeks encourages flowers\n- Tip: Prune lightly after flowering to keep it bushy',
  }),
  mk({
    name: 'Adenium (Desert Rose)', bnName: 'অ্যাডেনিয়াম', slug: 'adenium', category: 'flowers', price: 390, size: '5-inch pot',
    latinName: 'Adenium obesum', rarity: 'rare', lightNeeds: 'bright', wateringFrequency: 'weekly', humidityPreference: 'low', placement: ['outdoor'],
    season: { months: [3, 4, 5, 6, 7, 8, 9], label: 'Best planted in the warm months (March–September)' },
    description: 'A swollen, sculptural trunk topped with bright trumpet flowers. Loves heat and sun and looks wonderful on a sunny balcony.',
    careGuide: '- Light: Full sun\n- Water: Water well, then let the soil dry; keep drier in the cool season\n- Soil: Very well-draining mix\n- Tip: Never leave it standing in water — the trunk rots',
    toxicityNotes: 'All parts are toxic — keep away from pets and children.',
  }),
  mk({
    name: 'Rose', bnName: 'গোলাপ', slug: 'rose', category: 'flowers', price: 250, size: 'Polybag, ~1 ft',
    latinName: 'Rosa', rarity: 'common', lightNeeds: 'bright', wateringFrequency: '2-3x week', humidityPreference: 'medium', petSafe: true, placement: ['outdoor'],
    season: { months: [10, 11, 12, 1], label: 'Best planted in the cool season (October–January)' },
    description: 'Classic garden roses that bloom best in the cooler months. Choose a sunny spot and give them good soil.',
    careGuide: '- Light: At least 5–6 hours of sun\n- Water: Regularly; avoid wetting the leaves in the evening\n- Feeding: Organic compost every few weeks\n- Tip: Remove spent blooms and prune lightly after the flowering season',
  }),
  mk({
    name: 'Bougainvillea', bnName: 'বাগানবিলাস', slug: 'bougainvillea', category: 'flowers', price: 300, size: 'Polybag, ~1.5 ft',
    latinName: 'Bougainvillea glabra', rarity: 'common', lightNeeds: 'bright', wateringFrequency: 'weekly', humidityPreference: 'low', petSafe: true, placement: ['outdoor'],
    season: { months: [11, 12, 1, 2, 3], label: 'Blooms best in the dry, sunny months (November–March)' },
    description: 'Sheets of papery pink, magenta or purple bracts on a tough climber. Thrives on sun, heat and a bit of neglect.',
    careGuide: '- Light: Full sun — more sun, more flowers\n- Water: Let the soil dry between waterings; too much water means leaves, not flowers\n- Tip: Prune after a flush of blooms; mind the thorns',
  }),

  // ───────────── Seasonal Flowers ─────────────
  mk({
    name: 'Marigold Seedlings', bnName: 'গাঁদা চারা', slug: 'marigold', category: 'seasonal', price: 150, size: 'Set of 5 seedlings',
    latinName: 'Tagetes erecta', rarity: 'common', lightNeeds: 'bright', wateringFrequency: '2-3x week', placement: ['outdoor'], season: WINTER_FLOWER,
    description: 'Cheerful orange and yellow pom-pom flowers — a winter garden favourite that is easy to grow in pots or beds.',
    careGuide: '- Light: Full sun\n- Water: Keep the soil lightly moist; avoid waterlogging\n- Tip: Pinch the tips when young for a bushier plant with more flowers',
    toxicityNotes: 'May irritate pets if eaten in quantity.',
  }),
  mk({
    name: 'Petunia', bnName: 'পিটুনিয়া', slug: 'petunia', category: 'seasonal', price: 120, size: '4-inch pot',
    latinName: 'Petunia × hybrida', rarity: 'common', lightNeeds: 'bright', wateringFrequency: '2-3x week', petSafe: true, placement: ['outdoor'], season: WINTER_FLOWER,
    description: 'Trumpet flowers in pink, purple and white that fill balcony railings and hanging baskets through the cool season.',
    careGuide: '- Light: Full sun to light shade\n- Water: Regularly; do not let the pot dry out completely\n- Tip: Pinch off faded flowers to keep it blooming',
  }),
  mk({
    name: 'Dahlia', bnName: 'ডালিয়া', slug: 'dahlia', category: 'seasonal', price: 150, size: 'Polybag',
    latinName: 'Dahlia', rarity: 'common', lightNeeds: 'bright', wateringFrequency: '2-3x week', placement: ['outdoor'], season: WINTER_FLOWER,
    description: 'Big, layered blooms in rich reds, pinks and yellows. A showpiece for the winter garden.',
    careGuide: '- Light: Full sun\n- Water: Deeply, but let the top soil dry between waterings\n- Tip: Support tall stems with a stake; pinch for more branches',
    toxicityNotes: 'Mildly toxic to pets if eaten.',
  }),
  mk({
    name: 'Chrysanthemum', bnName: 'চন্দ্রমল্লিকা', slug: 'chrysanthemum', category: 'seasonal', price: 200, size: '5-inch pot',
    latinName: 'Chrysanthemum × morifolium', rarity: 'common', lightNeeds: 'bright', wateringFrequency: '2-3x week', placement: ['outdoor'], season: WINTER_FLOWER,
    description: 'Dense mounds of flowers in warm autumn shades, flowering as the weather cools.',
    careGuide: '- Light: Bright light, several hours of sun\n- Water: Keep evenly moist, not soggy\n- Tip: Pinch young shoots for a compact, flower-packed plant',
    toxicityNotes: 'Toxic to pets if eaten.',
  }),

  // ───────────── Bonsais ─────────────
  mk({
    name: 'Ficus Bonsai (China Bot)', bnName: 'ফাইকাস বনসাই', slug: 'ficus-bonsai', category: 'bonsai', price: 1200, size: 'Ceramic pot, ~1 ft',
    latinName: 'Ficus microcarpa', rarity: 'rare', lightNeeds: 'medium', wateringFrequency: '2-3x week', humidityPreference: 'medium', placement: ['indoor', 'outdoor'],
    description: 'A thick, sculptural trunk with a small leafy crown. One of the most forgiving trees for first-time bonsai owners.',
    careGuide: '- Light: Bright light; some morning sun is fine\n- Water: When the top of the soil is dry — small pots dry fast\n- Pruning: Trim new shoots regularly to keep the shape\n- Tip: Do not let it sit in water',
    toxicityNotes: 'Sap can irritate; mildly toxic to pets.',
  }),
  mk({
    name: 'Juniper Bonsai', bnName: 'জুনিপার বনসাই', slug: 'juniper-bonsai', category: 'bonsai', price: 590, size: 'Pot, ~1 ft',
    latinName: 'Juniperus', rarity: 'rare', lightNeeds: 'bright', wateringFrequency: '2-3x week', humidityPreference: 'low', placement: ['outdoor'],
    description: 'Fine blue-green foliage on a miniature, windswept form. Best kept outdoors in good light.',
    careGuide: '- Light: Full sun to bright light\n- Water: When the soil surface begins to dry; never leave in standing water\n- Tip: Keep it outdoors — junipers do not do well in dim rooms',
    toxicityNotes: 'Berries and foliage are mildly toxic to pets.',
  }),

  // ───────────── Fruit Trees ─────────────
  mk({
    name: 'Red Dragon Fruit', bnName: 'রেড ড্রাগন ফল', slug: 'dragon-fruit', category: 'fruit', price: 250, size: 'Polybag cutting',
    latinName: 'Hylocereus', rarity: 'common', lightNeeds: 'bright', wateringFrequency: 'weekly', humidityPreference: 'low', placement: ['outdoor'], season: MONSOON,
    description: 'A climbing cactus that gives sweet, magenta-fleshed fruit. Needs a sturdy post or frame and plenty of sun — a rooftop favourite.',
    careGuide: '- Light: Full sun\n- Water: Let the soil dry between waterings; avoid waterlogging\n- Support: Grow it on a pole or concrete post\n- Tip: Good drainage matters more than frequent watering',
  }),
  mk({
    name: 'Mango Sapling (Grafted)', bnName: 'কলমের আম (আমপালী)', slug: 'mango', category: 'fruit', price: 200, size: 'Grafted, polybag',
    latinName: 'Mangifera indica', rarity: 'common', lightNeeds: 'bright', wateringFrequency: 'weekly', humidityPreference: 'medium', placement: ['outdoor'], season: MONSOON,
    description: 'A grafted mango sapling (Amrapali). Grafted plants fruit much sooner than seedlings. Needs open sun and space to grow.',
    careGuide: '- Light: Full sun\n- Water: Regularly for the first year; established trees are drought-tolerant\n- Planting: Dig a generous pit and add compost; plant in the monsoon\n- Tip: Protect young saplings from strong wind with a stake',
  }),
  mk({
    name: 'Seedless Lemon', bnName: 'বীজহীন লেবু', slug: 'lemon', category: 'fruit', price: 200, size: 'Grafted, polybag',
    latinName: 'Citrus limon', rarity: 'common', lightNeeds: 'bright', wateringFrequency: '2-3x week', humidityPreference: 'medium', placement: ['outdoor'], season: MONSOON,
    description: 'A compact lemon that fruits well in a large pot, courtyard or rooftop. Fruits are juicy and nearly seedless.',
    careGuide: '- Light: Full sun\n- Water: Regularly; let the top soil dry between waterings\n- Feeding: Organic compost or mustard-cake liquid every 3–4 weeks\n- Tip: Use a large pot with drainage holes',
    toxicityNotes: 'Peel and leaves can upset pets if eaten.',
  }),
  mk({
    name: 'Thai Guava', bnName: 'থাই পেয়ারা', slug: 'guava', category: 'fruit', price: 250, size: 'Grafted, polybag',
    latinName: 'Psidium guajava', rarity: 'common', lightNeeds: 'bright', wateringFrequency: 'weekly', humidityPreference: 'medium', placement: ['outdoor'], season: MONSOON,
    description: 'Large, crunchy guavas on a hardy, fast-fruiting tree. Does well in pots and in the ground.',
    careGuide: '- Light: Full sun\n- Water: Weekly, more in dry spells\n- Tip: Prune to keep it compact; bag fruits to protect from insects',
  }),
  mk({
    name: 'Kul (Jujube) Sapling', bnName: 'বল সুন্দরী কুল', slug: 'jujube-kul', category: 'fruit', price: 250, size: 'Grafted, polybag',
    latinName: 'Ziziphus mauritiana', rarity: 'common', lightNeeds: 'bright', wateringFrequency: 'weekly', humidityPreference: 'low', placement: ['outdoor'], season: MONSOON,
    description: 'A hardy, heavy-bearing fruit tree that gives crisp, sweet kul in the winter months. Easy and rewarding.',
    careGuide: '- Light: Full sun\n- Water: Weekly while young; drought-tolerant once established\n- Tip: Prune after harvest to shape the tree',
  }),
  mk({
    name: 'Rambutan Sapling', bnName: 'রামবুটান', slug: 'rambutan', category: 'fruit', price: 1600, size: 'Grafted, polybag',
    latinName: 'Nephelium lappaceum', rarity: 'rare', lightNeeds: 'bright', wateringFrequency: '2-3x week', humidityPreference: 'high', placement: ['outdoor'], season: MONSOON,
    description: 'A tropical fruit tree with hairy red fruits and sweet, translucent flesh. Likes warmth, humidity and rich, moist soil.',
    careGuide: '- Light: Full sun to light shade\n- Water: Regularly; do not let it dry out\n- Soil: Rich in organic matter\n- Tip: Protect young plants from cold and strong wind',
  }),
  mk({
    name: 'Jabuticaba', bnName: 'জাবুটিকাবা', slug: 'jabuticaba', category: 'fruit', price: 600, size: 'Polybag, ~1.5 ft',
    latinName: 'Plinia cauliflora', rarity: 'rare', lightNeeds: 'bright', wateringFrequency: '2-3x week', humidityPreference: 'high', placement: ['outdoor'], season: MONSOON,
    description: 'The “grape tree” — dark purple fruits grow straight on the trunk. A slow-growing curiosity for patient collectors.',
    careGuide: '- Light: Full sun to light shade\n- Water: Keep the soil moist; it dislikes drying out\n- Soil: Slightly acidic, rich in compost\n- Tip: Slow-growing — a great pot plant for years',
  }),

  // ───────────── Seeds ─────────────
  mk({
    name: 'Tomato Seeds', bnName: 'টমেটো বীজ', slug: 'tomato-seeds', category: 'seeds', price: 50, size: 'Packet',
    latinName: 'Solanum lycopersicum', rarity: 'common', lightNeeds: 'bright', wateringFrequency: '2-3x week', placement: ['outdoor'],
    season: { months: [10, 11], label: 'Sow October–November for the winter crop' },
    description: 'A packet of tomato seeds for the winter vegetable season. Start in trays or small pots, then transplant to a sunny bed or large pot.',
    careGuide: '- Sowing: Start in trays; transplant when seedlings are about 4 weeks old\n- Light: Full sun\n- Water: Evenly moist; avoid wetting the leaves late in the day\n- Tip: Support with stakes once the plant grows',
  }),
  mk({
    name: 'Marigold Seeds', bnName: 'গাঁদা বীজ', slug: 'marigold-seeds', category: 'seeds', price: 40, size: 'Packet',
    latinName: 'Tagetes erecta', rarity: 'common', lightNeeds: 'bright', wateringFrequency: '2-3x week', placement: ['outdoor'],
    season: { months: [9, 10, 11], label: 'Sow September–November' },
    description: 'Easy winter flower seeds. Sow in trays or directly in pots and beds and enjoy weeks of orange and yellow blooms.',
    careGuide: '- Sowing: Barely cover with fine soil\n- Light: Full sun\n- Water: Keep lightly moist until seedlings are established\n- Tip: Thin crowded seedlings for sturdier plants',
  }),
  mk({
    name: 'Sunflower Seeds', bnName: 'সূর্যমুখী বীজ', slug: 'sunflower-seeds', category: 'seeds', price: 60, size: 'Packet',
    latinName: 'Helianthus annuus', rarity: 'common', lightNeeds: 'bright', wateringFrequency: '2-3x week', petSafe: true, placement: ['outdoor'],
    season: { months: [10, 11, 12], label: 'Sow October–December' },
    description: 'Tall, sun-following flowers that are fun to grow with kids. Sow directly where they will bloom.',
    careGuide: '- Sowing: About 2–3 cm deep, spaced well apart\n- Light: Full sun\n- Water: Regularly while young; deeply but less often later\n- Tip: Stake tall varieties in windy spots',
  }),

  // ───────────── Fertilizers & Care ─────────────
  mk({
    name: 'Mustard Oil Cake (Shorisha Khoil)', bnName: 'সরিষার খৈল', slug: 'mustard-oil-cake', category: 'fertilizers', price: 75, size: '1 kg',
    rarity: 'common', lightNeeds: 'low', wateringFrequency: 'monthly', placement: ['indoor', 'outdoor'], imageUrls: [],
    description: 'A traditional organic feed rich in nitrogen. Popular for leafy plants, fruit trees and vegetables.',
    careGuide: '- Use: Ferment in water for several days before using as a liquid feed, or mix a small amount into soil\n- Dose: Start small — a little goes a long way\n- Tip: Keep it away from pets (it attracts them)',
  }),
  mk({
    name: 'Bone Meal (Harer Gura)', bnName: 'হাড়ের গুঁড়া', slug: 'bone-meal', category: 'fertilizers', price: 120, size: '1 kg',
    rarity: 'common', lightNeeds: 'low', wateringFrequency: 'monthly', placement: ['indoor', 'outdoor'], imageUrls: [],
    description: 'A slow-release source of phosphorus and calcium that supports roots and flowering. Good for roses, fruit trees and bulbs.',
    careGuide: '- Use: Mix into the soil at planting time or sprinkle around the base and water in\n- Dose: Follow pack directions; do not overdo it\n- Tip: Keep away from pets',
  }),
  mk({
    name: 'Epsom Salt (Magnesium Sulfate)', bnName: 'ইপসম সল্ট', slug: 'epsom-salt', category: 'fertilizers', price: 100, size: '1 kg',
    rarity: 'common', lightNeeds: 'low', wateringFrequency: 'monthly', placement: ['indoor', 'outdoor'], imageUrls: [],
    description: 'A magnesium and sulphur supplement used by many growers to help leaf colour and flowering when plants show a deficiency.',
    careGuide: '- Use: Dissolve a small amount in water and apply occasionally\n- Dose: About 1 teaspoon per litre of water is a common starting point\n- Tip: It supplements — it does not replace — a balanced fertilizer',
  }),
  mk({
    name: 'Vermicompost (Keincho Shar)', bnName: 'কেঁচো সার', slug: 'vermicompost', category: 'fertilizers', price: 250, size: '5 kg',
    rarity: 'common', lightNeeds: 'low', wateringFrequency: 'monthly', placement: ['indoor', 'outdoor'], imageUrls: [],
    description: 'Dark, crumbly worm compost that improves soil and feeds plants gently. Safe to mix into potting soil for almost any plant.',
    careGuide: '- Use: Mix about one part vermicompost to three parts potting soil, or top-dress the pot\n- Dose: A handful per medium pot every month or two\n- Tip: Hard to overuse — a great starter feed for beginners',
  }),
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
