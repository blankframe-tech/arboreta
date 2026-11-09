/**
 * HOW TO ADD A BLOG POST
 * ----------------------
 * 1. Copy one of the objects below and paste it at the TOP of BLOG_POSTS.
 * 2. Give it a unique `slug` (this becomes /blog/<slug>), a title, date (YYYY-MM-DD), etc.
 * 3. Write the `body` in simple markdown-style text:
 *      - blank line between paragraphs
 *      - "## Heading" for a section heading
 *      - "- item" for bullet points
 *      - "> text" for a highlighted note / quote
 *      - **bold** for emphasis
 * 4. (Optional) `relatedProductSlugs` shows "Plants mentioned" cards under the post.
 * Save the file — the site updates by itself.
 */

export type BlogCategory = 'Plant Care' | 'Fertilizer' | 'Events' | 'Guides';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  category: BlogCategory;
  author: string;
  coverImage?: string;
  relatedProductSlugs?: string[];
  body: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'monstera-care-guide',
    title: 'Monstera Care: Light, Water, and a Little Patience',
    excerpt:
      'The monstera is the plant everyone wants and half of us accidentally overwater. Here is how to keep one happy — and get those big split leaves.',
    date: '2026-10-24',
    category: 'Plant Care',
    author: 'Arboreta Journal',
    relatedProductSlugs: ['monstera-deliciosa'],
    body: `A healthy monstera is one of the most generous plants you can own. It grows fast when it is happy, it tells you clearly when it is not, and it rewards patience with those big, split leaves everyone photographs. Most problems come down to two things: how much light it gets and how often it is watered.

## Give it bright, indirect light

Think of the light you would be comfortable reading in, close to a window but not in the full beam of the afternoon sun. Direct sun through glass can scorch the leaves and leave pale, papery patches. Too little light is the quieter problem: the plant keeps growing, but the stems stretch, the leaves stay small, and the splits never appear.

> Splits and holes are a sign of maturity and good light. A young plant in a dim corner will simply not make them, however well you look after it.

## Water when the top of the soil is dry

Push a finger about two to three centimetres into the soil. If it still feels damp, wait. If it is dry, water thoroughly until it drains out of the bottom, then let it drain completely. Never leave the pot standing in a saucer of water.

During the monsoon, soil stays wet far longer than you expect, so you will water less often than in the dry months. The calendar is a poor guide; the soil is a good one.

## Reading the leaves

- **Yellow leaves, soft stems:** almost always too much water or a pot that does not drain.
- **Brown, crispy edges:** dry air, or the plant went too long between waterings.
- **Brown, bleached patches:** sunburn from direct light.
- **Leaves leaning hard toward the window:** it wants more light — turn the pot a quarter every week or two.

## Soil, pot, and support

Use a loose, airy mix — regular potting soil with some bark and perlite or coarse sand works well. A pot with a drainage hole is not optional. As the plant climbs, give it a moss pole or sturdy stake; supported stems produce bigger leaves.

## A note for pet owners

Monstera leaves and stems contain compounds that irritate the mouth and stomach of cats and dogs. Keep it out of reach if your pet likes to chew.

Be patient: a monstera may sit still for a few weeks after a move, then suddenly push out a new leaf. That is normal, not a problem.`,
  },
  {
    slug: 'organic-vs-chemical-fertilizer',
    title: 'Organic or Chemical Fertilizer? A Plain-Spoken Guide',
    excerpt:
      'Neither is “good” or “bad”. What matters is what your plant needs, how much you give, and when. Here is how to choose without the guesswork.',
    date: '2026-10-17',
    category: 'Fertilizer',
    author: 'Arboreta Journal',
    relatedProductSlugs: ['organic-seaweed-fertilizer', 'orchid-care-bundle'],
    body: `Walk into any nursery and you will find a wall of bags and bottles, each promising greener leaves and more flowers. Before you buy anything, it helps to know what the numbers on the label actually mean and what kind of feeding your plant really needs.

## What N-P-K means

Most fertilizers list three numbers, such as 10-10-10. They are the proportions of nitrogen (N), phosphorus (P) and potassium (K).

- **Nitrogen** drives leafy growth — useful for foliage plants.
- **Phosphorus** supports roots and flowering.
- **Potassium** helps overall strength and fruiting.

A fruiting plant like a dragon fruit or a mango has different needs from a lush foliage plant like a monstera, which is why one bag rarely suits everything.

## Organic fertilizers

Compost, vermicompost, cow-dung compost, bone meal, and seaweed extracts all count here. They usually release nutrients slowly, improve the soil as well as feed the plant, and are gentle: it is hard to burn roots with them. The trade-off is that they act more slowly and the nutrient content is less precise.

## Chemical (synthetic) fertilizers

These deliver nutrients in a form the plant can use right away, in exact proportions. They are effective and economical, but also easy to overdo. Too much can build up as salts in the soil and burn the roots — you will see brown leaf tips and crusty white residue on the soil or pot.

## So which one?

For most home growers, a sensible approach is to build the soil with organic matter and use a mild liquid feed during the growing season. If you use a synthetic product, **follow the label and then dilute it a little more** — a weak dose given regularly is safer than a strong dose given rarely.

> Weakly, weekly beats strongly, rarely.

## When not to fertilize

- A plant that was just repotted or bought — give it a few weeks to settle.
- A plant that is sick, stressed, or sitting in waterlogged soil. Fertilizer is food, not medicine.
- A plant that is dormant or growing very slowly. Feed during active growth.
- Dry soil. Water first, then feed, so the roots are not shocked.

## Quick checklist

Check the plant type, check the N-P-K, check the season, then start with half the recommended dose. If the plant responds well after a few weeks, you can move up to the full dose. If in doubt, skip a feed — plants forgive under-feeding far more easily than over-feeding.`,
  },
  {
    slug: 'first-time-at-a-vriksha-mela',
    title: 'Your First Vriksha Mela: A Field Guide',
    excerpt:
      'Tree fairs are wonderful, crowded, and easy to overspend at. Here is what to bring, how to spot a healthy plant, and how to get it home safely.',
    date: '2026-10-09',
    category: 'Events',
    author: 'Arboreta Journal',
    body: `A vriksha mela — a tree and plant fair — is one of the best ways to find unusual plants, meet growers who really know their stock, and spend far more money than you planned. Go in with a little preparation and you will come home with plants that thrive.

## Before you go

- **Decide what you want.** A rough list — one flowering plant, one fruit tree, something for the balcony — stops you from buying whatever is prettiest at the first stall.
- **Know your space.** Measure how much light your balcony or window really gets. A plant that wants full sun will struggle in a shady flat, however lovely it looks at the fair.
- **Carry cash and a mobile payment option.** Some stalls will not have a card machine or a reliable connection.
- **Bring newspaper, a cloth, and a sturdy bag or box** for wrapping and carrying.

## Go early

Mornings are cooler and calmer, the plants look fresher, and the best pieces have not been picked over. Weekdays, if the fair allows, are quieter than weekends.

## How to spot a healthy plant

- Look under the leaves and along the stems for tiny insects, sticky residue, or fine webbing.
- Check the leaves: a few older yellow ones are normal; widespread yellowing or spotting is not.
- Gently wiggle the stem. A plant that moves like it is loose in the pot may have weak roots.
- Peek at the drainage hole. A few roots showing is fine; a solid mat of roots means it is badly root-bound.
- Smell the soil. A sour or rotten smell suggests it has been sitting wet.

## Talk to the seller

Ask what the plant needs: how much light, how often to water, whether it can live outdoors. Ask how old it is and when it was last repotted. Good growers love these questions. Polite bargaining is common at fairs, but remember that a healthy, well-grown plant is worth the asking price — a bargain plant that dies is no bargain.

## Getting it home

Keep plants upright, wrapped loosely so leaves are not crushed, and out of direct sun in the car. Do not leave them in a closed, hot vehicle even for a short time.

## The first two weeks at home

Keep new plants **apart from your existing collection** for about two weeks in case they brought pests with them. Let them rest in a spot with gentle light, water only if the soil is dry, and hold off on repotting and fertilizing. Plants often drop a leaf or two after a move; that is normal as they adjust.

Enjoy the fair, and bring a friend who will stop you from buying a fourth fern.`,
  },
  {
    slug: 'office-plants-that-forgive-you',
    title: 'Office Plants That Forgive You',
    excerpt:
      'Busy week, air-conditioned room, no window to speak of? These plants can handle it. Here is how to choose and look after them.',
    date: '2026-09-30',
    category: 'Guides',
    author: 'Arboreta Journal',
    relatedProductSlugs: ['lucky-bamboo', 'money-tree'],
    body: `An office is a tough place for a plant: patchy light, cool air-conditioning, and long weekends when nobody remembers to water. The good news is that a handful of plants are happy with exactly this kind of life. The trick is choosing the right one and being honest about how much attention you can give it.

## First, look at the light

Stand at the desk where the plant will live. If you can comfortably read there without turning on a lamp, a medium-light plant will manage. If it is quite dim, choose the toughest options and consider a small desk lamp with a grow bulb. Few plants like a spot directly in front of an air-conditioning vent — the cold, dry draft is harder on them than low light.

## Plants that cope well

- **Lucky bamboo:** tolerates low light and can live in water or soil. If you grow it in water, change the water about once a week and avoid letting it go stagnant.
- **Money tree:** a braided trunk and glossy leaves. It likes bright, indirect light and prefers to dry out a little between waterings. It does not enjoy being moved around.
- **Snake plant and ZZ plant:** classic low-effort choices that store water and can go a couple of weeks without a drink.
- **Pothos:** trails nicely from a shelf, and its droopy leaves tell you clearly when it needs water.

## The rule that keeps them alive

When in doubt, **do not water**. Most office plants are lost to overwatering, not neglect. Check that the soil is dry a couple of centimetres down before you pour, and make sure the pot has a drainage hole with a saucer you can empty.

## Going on holiday

For a long weekend, water well beforehand and move the plant slightly away from the window. For a week or two, a deep watering and a spot out of direct sun is usually enough for the tougher plants above.

## Keep it simple

Pick one plant, put it where you will see it every day, and learn its habits. A plant on your desk is a small reminder to breathe and look at something green for a moment — and that is reason enough to have one.

> Start with one plant. If it is still thriving after three months, add a second.`,
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function readingMinutes(body: string) {
  return Math.max(1, Math.round(body.trim().split(/\s+/).length / 200));
}

export function formatPostDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
