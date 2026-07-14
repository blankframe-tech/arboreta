# Arboreta by Shifuta — App Plan & Architecture

## Project Overview

**Vision**: A zero-friction premium botanical e-commerce platform that feels like a curated gallery, not a marketplace.

**Core Philosophy**:
- Products > Everything else (no fluff, no urgency marketing)
- Design > Features (beautiful before functional)
- Aesthetic > Scale (better to show 100 premium plants than 1000 mediocre ones)
- Owner agency > Automation (human curation, not algorithm feeds)

---

## Feature Set (MVP)

### 1. Homepage
- **Hero banner**: Rotating featured plant image, tagline, CTA
- **Category navigation**: 7 category pills with preview cards
- **Featured section**: "This month's rarest finds" (owner-curated carousel)
- **Newsletter signup**: Minimal email capture
- **Footer**: Links, info, social

### 2. Product Browsing
- **Category listing pages**: Grid view (2 columns desktop, 1 mobile)
- **Filters**: Care level (beginner–expert), price range, rarity (common/rare/ultra-rare), pet-safe
- **Sort**: Price, newest, rarest, bestseller
- **Infinite scroll** or pagination
- **Product detail page**: Full image carousel, specs, care guide, related products

### 3. Cart & Checkout
- **Shopping cart**: Slide-in drawer from right, minimalist UI
- **Checkout flow**: Address → Payment → Confirmation (no account required)
- **Payment**: Stripe integration (cards, digital wallets)
- **Order confirmation**: Email with order details, plant care tips, tracking link

### 4. Admin Dashboard (Owner only)
- **Product management**: Add/edit/delete products, upload images, manage inventory
- **Order management**: View orders, mark as "shipped", print labels
- **Analytics**: Sales by category, top products, revenue
- **Settings**: Store settings, email templates, integrations

### 5. User Accounts (Optional, v1.1)
- **Wishlist**: Save favorite plants, email when in stock
- **Order history**: View past orders, reorder
- **Account settings**: Saved addresses, payment methods

---

## Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + custom CSS variables for design tokens
- **UI Components**: Shadcn/ui (minimal, premium-friendly) + custom components
- **Image handling**: Next.js Image optimization, WebP conversion
- **State**: React Context + TanStack Query (data fetching, caching)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion (subtle, tasteful)

### Backend
- **Runtime**: Node.js (Next.js API routes)
- **Database**: Supabase (PostgreSQL) — fast setup, good free tier
- **Auth**: Supabase Auth (admin dashboard) + anonymous checkout
- **Image storage**: Supabase Storage or Cloudinary (CDN-backed)
- **Payment**: Stripe API
- **Email**: Resend (modern, clean APIs)

### Infrastructure
- **Hosting**: Vercel (Next.js native, global edge network)
- **CDN**: Vercel CDN (included)
- **Monitoring**: Vercel Analytics + Sentry (error tracking)
- **Backup**: Supabase automated backups

### Dev Tools
- **Package manager**: pnpm
- **Testing**: Vitest (unit), Playwright (E2E)
- **Linting**: ESLint + Prettier
- **Git**: Conventional commits, semantic versioning
- **Deployment**: Vercel (main) + staging environment

---

## Database Schema

### Products
```sql
CREATE TABLE products (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL, -- seeds|flower-trees|seasonal|bonsai|fruit-trees|fertilizers|office-plants
  price DECIMAL(10,2) NOT NULL,
  description TEXT NOT NULL,
  care_guide TEXT, -- markdown
  latin_name TEXT, -- botanical name
  rarity TEXT DEFAULT 'common', -- common|rare|ultra-rare
  pet_safe BOOLEAN DEFAULT false,
  light_needs TEXT, -- low|medium|bright
  watering_frequency TEXT, -- daily|2-3x week|weekly|monthly
  humidity_preference TEXT, -- low|medium|high
  toxicity_notes TEXT,
  image_urls TEXT[], -- array of image URLs
  stock_quantity INT DEFAULT 0,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE product_details (
  id UUID PRIMARY KEY,
  product_id UUID REFERENCES products(id),
  pot_size TEXT, -- "6 inch", "8 inch", etc.
  origin TEXT, -- where the plant is sourced
  care_level TEXT, -- beginner|intermediate|expert
  features TEXT[], -- array: "rare", "propagates easily", etc.
  similar_products UUID[] -- related product IDs
);
```

### Orders
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL, -- e.g., "ORD-2026-07-001"
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  shipping_address JSON, -- {street, city, postal, phone}
  items JSON NOT NULL, -- [{product_id, name, price, quantity}]
  subtotal DECIMAL(10,2),
  shipping_cost DECIMAL(10,2),
  tax DECIMAL(10,2),
  total DECIMAL(10,2),
  payment_status TEXT, -- pending|paid|failed
  order_status TEXT DEFAULT 'pending', -- pending|shipped|delivered
  stripe_payment_id TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE wishlist_items (
  id UUID PRIMARY KEY,
  product_id UUID REFERENCES products(id),
  user_email TEXT NOT NULL,
  created_at TIMESTAMP,
  UNIQUE(product_id, user_email)
);
```

### Admin Settings
```sql
CREATE TABLE settings (
  id UUID PRIMARY KEY,
  key TEXT UNIQUE NOT NULL, -- "store_name", "newsletter_enabled", etc.
  value TEXT,
  updated_at TIMESTAMP
);
```

---

## API Routes (Next.js)

### Public Routes
```
GET  /api/products               -- List all products with filters
GET  /api/products/:slug         -- Get single product detail
GET  /api/categories             -- List categories + counts
POST /api/cart/validate          -- Validate cart items (check stock)
POST /api/checkout               -- Create Stripe session
GET  /api/checkout/success       -- Order confirmation
POST /api/newsletter/subscribe   -- Email signup
```

### Admin Routes (Protected by Supabase Auth)
```
POST   /api/admin/products          -- Create product
PATCH  /api/admin/products/:id      -- Update product
DELETE /api/admin/products/:id      -- Delete product
GET    /api/admin/orders            -- List orders (with filters)
PATCH  /api/admin/orders/:id        -- Update order status
POST   /api/admin/images/upload     -- Upload product image
GET    /api/admin/analytics         -- Sales stats, top products
PATCH  /api/admin/settings          -- Update store settings
```

### Webhook Routes
```
POST /api/webhooks/stripe       -- Stripe payment confirmation
```

---

## User Flows

### Customer Journey
1. **Landing** → Homepage hero, category preview
2. **Browse** → Category page, apply filters, scroll products
3. **Discover** → Click product card → Detail page (images, specs, care guide)
4. **Add to cart** → Slide-in drawer shows item, update qty, continue shopping
5. **Checkout** → Cart drawer "Proceed" → Shipping form → Stripe payment modal
6. **Confirmation** → Order placed page, email sent with tracking
7. **Wishlist** (optional) → Heart icon on any product, saved for later

### Admin Workflow
1. **Login** → Email/password via Supabase
2. **Dashboard** → View sales, top products, pending orders
3. **Add product** → Form with images, specs, care guide, pricing
4. **Manage orders** → Mark shipped, send tracking
5. **Settings** → Store info, email templates, integrations

---

## Product Categories & Dummy Data

### Categories (7)
1. **Seeds** — vegetable, flower, tree seeds ($5–50)
2. **Flower Trees** — flowering tropical/deciduous trees ($100–15,000)
3. **Seasonal** — holiday plants, limited seasonal ($80–8,000)
4. **Bonsais** — miniature, curated specimens ($500–50,000)
5. **Fruit Trees** — mango, lemon, dragon fruit, etc. ($200–12,000)
6. **Fertilizers** — organic, specialty, branded ($15–200)
7. **Office Plants** — air-purifying, low-maintenance ($100–5,000)

### Example Products (with outrageous prices for aesthetic effect)

| Name | Category | Price | Rarity | Description |
|------|----------|-------|--------|-------------|
| Monstera Deliciosa "Variegata" | Flower Trees | ৳ 45,000 | Rare | Tropical vining with distinctive fenestration |
| Japanese Black Pine Bonsai | Bonsais | ৳ 120,000 | Ultra-rare | 40-year-old specimen, exhibition-ready |
| Corpse Flower (Amorphophallus) | Seasonal | ৳ 35,000 | Ultra-rare | Blooms once every 7 years, unmistakable scent |
| Dragon Fruit Tree | Fruit Trees | ৳ 18,000 | Rare | Bright pink flowers, edible magenta fruits |
| Nepenthes Rajah (Pitcher Plant) | Office Plants | ৳ 28,000 | Ultra-rare | Carnivorous, intricate pitchers, humidity lover |
| Heirloom Tomato Seeds | Seeds | ৳ 600 | Common | 50 seeds, open-pollinated, organic |
| Organic Seaweed Fertilizer | Fertilizers | ৳ 2,500 | Common | 1kg, slow-release, kelp-based |
| Anthurium Clarinervium | Flower Trees | ৳ 16,000 | Rare | Deep burgundy leaves with white veining |
| Orchid Care Bundle | Fertilizers | ৳ 4,200 | Common | 3-piece set, specialty orchid focus |
| Lucky Bamboo (Dracaena) | Office Plants | ৳ 3,200 | Common | Feng Shui favorite, air-purifying |

---

## Content Strategy

### Homepage Copy
- **Hero**: "Cultivate the extraordinary" (tagline)
- **Featured section**: "This month's rarest finds" (owner picks 4–6 weekly)
- **Trust callout**: "Each plant is sourced, inspected, and cared for with obsessive attention"

### Product Pages
- **Title + botanical name**: "Monstera Deliciosa — Trailing Tropical Philodendron"
- **Short description**: 1–2 sentences on why it's special
- **Care guide**: Markdown formatted with icons (☀️ light, 💧 water, 💨 humidity)
- **Collector's notes**: Why someone collects this plant (rarity, aesthetics, propagation potential)

### Email Templates
- **Order confirmation**: Plant care tips, encouragement, tracking link
- **Shipping notification**: Tracking number, estimated delivery
- **Newsletter**: Monthly curator's picks, seasonal recommendations

---

## Design Integration Points

### Key Visual Moments
1. **Hero image**: Full-width plant photography (dramatic lighting)
2. **Category pills**: Hover state shows preview image
3. **Product cards**: Image carousel on hover (subtle, 3–5 images)
4. **Price reveal**: Gold text, positioned under plant name (premium feel)
5. **Cart drawer**: Slides from right, minimal distractions
6. **Loading states**: Animated leaf icon (branded micro-interaction)
7. **Confirmation page**: Illustrated plant with order number, plant care tips

### Color Usage
- **Navigation**: Deep green background, cream text
- **Buttons**: Deep green, cream text (except ghost secondary buttons)
- **Prices**: Soft gold accent
- **Badges**: Terracotta for "Limited stock", muted blush for "Rare"
- **Links**: Sage green with gold underline on hover

---

## Success Metrics (Phase 1)

- **Page load time**: < 2 seconds (Vercel Edge, image optimization)
- **Mobile responsiveness**: 95+ Lighthouse score
- **Conversion rate goal**: 2–3% (premium positioning, not volume)
- **Cart abandonment**: < 60% (test copy, payment options, checkout speed)
- **Wishlist feature**: Track add-to-wishlist rate (signals interest without purchase)

---

## Roadmap

### Phase 1 (MVP — This build)
- ✅ Homepage + category pages
- ✅ Product detail pages
- ✅ Shopping cart + checkout (Stripe)
- ✅ Admin dashboard (products, orders, analytics)
- ✅ Design system fully implemented
- ✅ Email notifications

### Phase 2 (v1.1)
- User accounts + wishlist
- Advanced analytics (cohort analysis, customer LTV)
- Inventory alerts (stock running low)
- Email marketing campaigns (Resend)
- Social media integration (Instagram feed)

### Phase 3 (v1.2)
- Blog (care guides, plant stories)
- Subscription boxes ("Plant of the month")
- Plant community (user photos, reviews)
- International shipping integration
- Multi-currency support

---

## Deployment Checklist

- [ ] Vercel account created, GitHub repo linked
- [ ] Supabase project initialized, tables seeded
- [ ] Stripe live mode keys configured
- [ ] Resend email templates set up
- [ ] Environment variables configured (production)
- [ ] SSL certificate (auto with Vercel)
- [ ] 404/500 error pages customized
- [ ] Analytics configured (Vercel + Sentry)
- [ ] Monitoring alerts set up (downtime, errors)
- [ ] Staging environment cloned

---

## Files & Folder Structure

```
arboreta/
├── README.md
├── DESIGN_SYSTEM.md          ← Brand identity
├── APP_PLAN.md                ← This file
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── .env.example
├── .env.local (gitignored)
├── .gitignore
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── images/
│       └── hero-plant.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx           -- Root layout (header, footer, theme)
│   │   ├── page.tsx             -- Homepage
│   │   ├── globals.css          -- Global styles + design tokens
│   │   ├── (marketing)/
│   │   │   ├── categories/[slug]/page.tsx
│   │   │   ├── products/[slug]/page.tsx
│   │   │   └── cart/page.tsx
│   │   └── api/
│   │       ├── products/
│   │       ├── checkout/
│   │       ├── webhooks/
│   │       └── admin/ (protected)
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGallery.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── CheckoutForm.tsx
│   │   └── admin/
│   │       ├── Dashboard.tsx
│   │       ├── ProductForm.tsx
│   │       └── OrderList.tsx
│   ├── lib/
│   │   ├── supabase.ts          -- Client + server
│   │   ├── stripe.ts            -- Stripe utilities
│   │   ├── api.ts               -- API client
│   │   └── utils.ts             -- Helpers
│   ├── hooks/
│   │   ├── useCart.ts
│   │   ├── useWishlist.ts
│   │   └── useAuth.ts
│   ├── types/
│   │   ├── database.ts          -- Supabase schema types
│   │   ├── product.ts
│   │   └── order.ts
│   └── styles/
│       ├── variables.css        -- Design tokens
│       └── components.css       -- Component base styles
└── scripts/
    └── seed-products.ts         -- Populate demo data
```

---

## Next Steps (Implementation Order)

1. **Set up repo** ← You are here
2. **Design tokens** → Implement CSS variables, Tailwind config
3. **Component library** → Build reusable components (Card, Button, Form)
4. **Homepage** → Hero, category preview, footer
5. **Product pages** → Listing + detail pages
6. **Cart** → State management, drawer UI
7. **Checkout** → Stripe integration, confirmation email
8. **Admin** → Dashboard, product/order management
9. **Polish** → Testing, performance, accessibility
10. **Deploy** → Staging → Production (Vercel)

---

**Version**: 1.0  
**Last updated**: 2026-07-14  
**Owner**: Arboreta by Shifuta
