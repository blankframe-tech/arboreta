# 🌿 Arboreta by Shifuta — Project Delivery Summary

## ✅ What's Been Delivered

### 1. **Design System** (DESIGN_SYSTEM.md)
A complete, production-ready brand identity that makes users feel *that* feeling.

#### Color Palette
```
🟩 Deep Forest Green  #1a472a  ← Primary, authority, growth
🟩 Sage Green         #6b8e6f  ← Secondary, calm, balance
🟨 Cream              #f5f3f0  ← Backgrounds, premium feel
🟨 Soft Gold          #d4a574  ← Accents, luxury, highlights
🟥 Terracotta         #c77a5a  ← Rare species badges
🩷 Muted Blush        #d8b8b0  ← Delicate highlights
```

#### Typography Hierarchy
| Element | Font | Size | Weight | Use |
|---------|------|------|--------|-----|
| Page H1 | Playfair Display | 56px | 400 | Hero, main headings |
| Page H2 | Playfair Display | 40px | 400 | Section headings |
| Card Title | Playfair Display | 24px | 500 | Product names |
| Body | Inter | 16px | 400 | All body copy |
| Price | Playfair Display | 28px | 300 | Product prices |
| Accent | Cormorant Garamond | italic | 300 | Latin names, callouts |

#### Visual Language
- **Photography**: Studio-lit botanical, minimal backgrounds, white space
- **Shadows**: Subtle card shadows (not drop-shadows), hover lift effect
- **Motion**: Staggered fade-ins, smooth 300ms transitions, leaf-spin loading
- **Spacing**: 8px grid, breathing room between plants, never crowded
- **Forms**: Cream fields with sage borders, gold focus states

---

### 2. **App Plan** (APP_PLAN.md)
Complete technical blueprint covering features, architecture, and roadmap.

#### Feature Set (MVP)
- ✅ Homepage with hero, category preview, featured plants
- ✅ Category listing pages with filters & sorting
- ✅ Product detail pages with image carousel
- ✅ Shopping cart (slide-in drawer)
- ✅ Checkout flow (Stripe integration)
- ✅ Order confirmation & emails
- ✅ Admin dashboard (products, orders, analytics)
- ✅ Wishlist functionality (optional v1.1)

#### Technology Stack
```
┌─────────────────────────────────────────────────────────┐
│  Frontend: Next.js 15 + React 19 + Tailwind CSS        │
│  Backend: Node.js + Next.js API Routes                 │
│  Database: Supabase (PostgreSQL)                       │
│  Storage: Supabase Storage / Cloudinary                │
│  Payment: Stripe                                        │
│  Email: Resend                                          │
│  Hosting: Vercel (global edge network)                 │
│  Monitoring: Vercel Analytics + Sentry                 │
└─────────────────────────────────────────────────────────┘
```

#### Product Categories (7)
1. **Seeds** — vegetable, flower, tree seeds
2. **Flower Trees** — tropical/deciduous flowering specimens
3. **Seasonal** — holiday plants, limited availability
4. **Bonsais** — miniature, curated specimens (exhibition-ready)
5. **Fruit Trees** — mango, lemon, dragon fruit, passion fruit
6. **Fertilizers** — organic, specialty, branded formulas
7. **Office Plants** — air-purifying, money plants, low-maintenance

#### Database Schema
```
products
├── id, name, slug, category
├── price, description, careGuide, latinName
├── rarity, petSafe, lightNeeds, wateringFrequency
├── humidityPreference, toxicityNotes
├── imageUrls[], stockQuantity
└── timestamps

orders
├── id, orderNumber, customerEmail, customerName
├── shippingAddress, items[], subtotal, shipping, tax, total
├── paymentStatus, orderStatus, stripePaymentId
└── timestamps

wishlist_items
├── id, productId, userEmail
└── timestamps

settings (admin)
├── key, value (store config)
└── timestamps
```

---

### 3. **Next.js Project Scaffolding**

#### Project Structure
```
arboreta/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 ← Root layout (header, footer, nav)
│   │   ├── page.tsx                   ← Beautiful homepage (hero, featured)
│   │   ├── globals.css                ← Design tokens as CSS variables
│   │   ├── api/                       ← API routes (coming soon)
│   │   └── (marketing)/               ← Public pages (coming soon)
│   ├── components/                    ← React components (coming soon)
│   ├── lib/
│   │   └── utils.ts                   ← Formatting, calculations, helpers
│   ├── types/
│   │   ├── product.ts                 ← Product types
│   │   └── order.ts                   ← Order/cart types
│   └── styles/                        ← Component-level styles (coming soon)
├── public/                            ← Static assets
├── DESIGN_SYSTEM.md                   ← Brand identity (THIS)
├── APP_PLAN.md                        ← Feature & architecture plan
├── README.md                          ← Project overview
├── package.json                       ← Dependencies
├── tsconfig.json                      ← TypeScript config
├── next.config.js                     ← Next.js config
├── tailwind.config.js                 ← Tailwind tokens
├── postcss.config.js                  ← PostCSS (autoprefixer)
└── .env.example                       ← Environment template
```

#### Key Files Created

**`layout.tsx`** — Root layout with:
- Sticky header (forest green, sticky top-0)
- Category navigation
- Cart & wishlist icons
- Rich footer with 4-column link structure

**`page.tsx`** — Beautiful homepage featuring:
- **Hero section**: Gradient forest background, tagline, CTA button
- **Category pills**: 7 interactive cards with icons, hover effects
- **Featured plants**: Grid of 4 premium specimens with price, rarity badges
- **Trust callout**: Why customers choose Arboreta
- **Newsletter CTA**: Minimal email signup

**`globals.css`** — Complete design system implementation:
- Google Fonts imports (Playfair Display, Inter, Cormorant Garamond)
- Tailwind utilities for premium buttons, cards, spacing
- Global color palette as CSS variables
- Accessibility focus rings (gold, 2px)
- Smooth animations (leaf-spin, fade-ins)

**`tailwind.config.js`** — Design tokens:
- Custom color scales (forest, cream, gold, etc.)
- Custom font families
- Custom font sizes (display-xl, display-lg, body-base, etc.)
- Custom spacing scale
- Custom border radius
- Custom shadows (card, card-hover)
- Custom animations

**`utils.ts`** — Helper functions:
- `formatPrice()` — Bengali currency formatting
- `formatDate()` — Localized dates
- `slugify()` — URL-safe names
- `cn()` — Class name merging
- `generateOrderNumber()` — Unique order IDs
- `calculateTax()`, `calculateShipping()`, `calculateTotal()`

---

## 🎨 Design Decisions & Philosophy

### Why This Design Works

1. **Deep Green ≠ Environmental**
   - The deep forest green (#1a472a) is about *luxury* and *heritage*, not "eco-friendly" marketing
   - Paired with cream and gold, it feels like a rare book collection, not a gardening store

2. **Serif Headings (Playfair Display)**
   - Conveys editorial curation, not commercial sales
   - Users feel they're discovering things, not being sold to

3. **Breathing Room**
   - 2-column grid (desktop), never 4+ products in a row
   - Large negative space between cards
   - White space is the premium signal

4. **Price as Gold Accent**
   - Gold prices feel special, not utilitarian
   - Positioned under the plant name (product-first, not sale-first)

5. **No Urgency Marketing**
   - Zero countdown timers, "last 3 in stock" badges, or discount tags
   - Only honest labels: "Rare", "Ultra-rare", "Limited stock"
   - Builds trust through scarcity, not FOMO

6. **Subtle Shadows & Hover Effects**
   - Cards lift on hover (not flip or morph)
   - Images zoom subtly (1.02×)
   - No jarring transitions

---

## 🚀 Next Steps (Implementation Order)

### Phase 1: Core Experience (Weeks 1–2)
- [ ] Set up Supabase database & load product schema
- [ ] Seed database with 50–100 dummy products (outrageous prices, beautiful images)
- [ ] Build product listing page with filters & sorting
- [ ] Build product detail page with image carousel
- [ ] Implement cart state management (React Context or TanStack Query)
- [ ] Create cart drawer UI

### Phase 2: Checkout & Payment (Week 3)
- [ ] Integrate Stripe (publishable key, secret key, webhook)
- [ ] Build checkout form (shipping address, payment method)
- [ ] Implement order creation flow
- [ ] Set up Resend email integration (order confirmation, shipping)
- [ ] Create order confirmation page

### Phase 3: Admin & Management (Week 4)
- [ ] Set up Supabase Auth for admin login
- [ ] Build admin dashboard (order list, product management)
- [ ] Create product upload form (bulk upload CSV)
- [ ] Implement analytics (sales by category, top products, revenue)
- [ ] Order status management (pending → shipped → delivered)

### Phase 4: Polish & Deploy (Week 5)
- [ ] Image optimization (WebP, lazy loading)
- [ ] Mobile responsiveness (test on all devices)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance optimization (Lighthouse score > 95)
- [ ] Set up staging environment on Vercel
- [ ] Deploy to production

---

## 💡 Dummy Product Examples

These show the *aesthetic* of outrageous pricing + premium positioning:

| Product | Category | Price | Rarity | Why Special |
|---------|----------|-------|--------|------------|
| Monstera Deliciosa "Variegata" | Flowers | ৳ 45,000 | Rare | Fenestrated leaves, vining habit |
| Japanese Black Pine Bonsai | Bonsais | ৳ 120,000 | Ultra-rare | 40-year-old specimen, exhibition-ready |
| Corpse Flower | Seasonal | ৳ 35,000 | Ultra-rare | Blooms once every 7 years |
| Dragon Fruit Tree | Fruit | ৳ 18,000 | Rare | Pink flowers, magenta edible fruits |
| Nepenthes Rajah | Office | ৳ 28,000 | Ultra-rare | Carnivorous pitcher plant |
| Heirloom Tomato Seeds | Seeds | ৳ 600 | Common | 50 seeds, open-pollinated, organic |
| Organic Seaweed Fertilizer | Fertilizers | ৳ 2,500 | Common | 1kg, slow-release, kelp-based |
| Lucky Bamboo (Dracaena) | Office | ৳ 3,200 | Common | Feng Shui favorite, air-purifying |

**Pricing Strategy:**
- Common plants: ৳ 600–3,200 (seeds, basic office plants)
- Rare plants: ৳ 15,000–45,000 (specialty trees, beginner bonsai)
- Ultra-rare: ৳ 50,000–200,000+ (exhibition bonsai, rare specimens)

The *outrageous* pricing is the point — it signals that these are investments, not impulse buys. Premium buyers feel they're acquiring something rare.

---

## 📊 Success Metrics

| Metric | Target |
|--------|--------|
| Page load time | < 2 seconds |
| Lighthouse score | > 95 |
| Mobile responsiveness | Pixel-perfect on all devices |
| Accessibility (WCAG 2.1 AA) | 100% |
| Cart abandonment | < 60% |
| Conversion rate | 2–3% (premium positioning, not volume) |

---

## 🎯 Brand Voice & Tone

### ✅ Do This
- "This rare Rhaphidophora loves humid shade"
- "Propagates readily from cuttings — perfect for sharing"
- "Each plant is hand-selected for health and rarity"

### ❌ Don't Do This
- "BUY NOW LIMITED TIME"
- "FAST SHIPPING!"
- "Don't miss out on this rare opportunity!"
- Marketing-speak, urgency, FOMO

The tone is **knowledgeable, curated, never salesy**. Botanical Latin names are always included. Care language is inviting, not demanding.

---

## 📝 Git Commit Message

```
feat: establish arboreta design system, app plan, and initial next.js scaffolding

- Add comprehensive DESIGN_SYSTEM.md with premium brand identity
  - Color palette: deep forest green, sage, cream, soft gold
  - Typography: Playfair Display, Inter, Cormorant Garamond
  - Component library specs, spacing, motion, accessibility
  
- Add detailed APP_PLAN.md with complete technical architecture
  - Feature set: products, categories, cart, checkout, admin
  - Tech stack: Next.js 15, Supabase, Stripe, Resend, Vercel
  - Database schema for products, orders, wishlists
  - 7-category product structure

- Initialize Next.js 15 project with production setup
  - Tailwind CSS with design tokens as CSS variables
  - Type-safe TypeScript configuration
  - Premium homepage with hero, category preview, featured plants
  - Root layout with header, footer, navigation
  - Global styles implementing full design system
  - Utility functions for formatting, calculations

- Create comprehensive documentation
  - Updated README with vision, tech stack, structure
  - Environment variables template
  - .gitignore for Node.js/Next.js projects

The design is aesthetic, premium, and feels like a curated gallery.
```

---

## 🚀 Ready to Build!

Everything is set up and committed to git. The design system is locked in, the architecture is documented, and the Next.js boilerplate is ready.

**Your next move:** Set up Supabase, seed some beautiful products, and start building the product listing page. The hard part (design, planning, structure) is done. Now it's just connecting the pieces.

---

**Built with ❤️ and obsessive attention to detail.**

*Made for collectors. Made for beauty. Made to feel right.*
