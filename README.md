# 🌿 Arboreta by Shifuta

**Premium Botanical E-Commerce Platform**

> Cultivate the extraordinary. A design-first, aesthetic-luxury plant marketplace built for collectors.

---

## ✨ Vision

Arboreta by Shifuta is a curated botanical e-commerce platform that feels like a gallery, not a marketplace. Every element is obsessively designed to create a "feel-good" shopping experience for premium plant collectors.

**Key Principles:**
- **Products over everything** — no fluff, no urgency marketing
- **Design over features** — beautiful before functional
- **Aesthetic over scale** — better 100 premium plants than 1000 mediocre ones
- **Owner agency over automation** — human curation, never algorithmic feeds

---

## 📁 Documentation

- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)**: brand identity, colours, typography and components
- **[nursery-checklist.csv](./nursery-checklist.csv)**: every product with its price, to be filled in with the nursery that stocks it
- **[docs/archive/](./docs/archive/)**: the July 2026 plans (Stripe, Resend, accounts). Superseded; history only

---

## 🎨 Design Identity

### Color Palette
- **Deep Forest Green** `#1a472a` — primary, authority
- **Sage Green** `#6b8e6f` — secondary, calm
- **Cream** `#f5f3f0` — backgrounds, breathing room
- **Soft Gold** `#d4a574` — accents, prestige

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Accents**: Cormorant Garamond (italic)

### Components
All components are premium-first: cards with subtle shadows, smooth transitions, and lots of white space.

---

## 🚀 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 15 (App Router), React 19, Tailwind CSS |
| **Backend** | Next.js API routes (`/api/orders`, `/api/admin/orders`) |
| **Orders** | Supabase Postgres (`supabase/migrations`), or `data/orders.json` locally |
| **Payment** | bKash and Nagad "Send Money" to a personal number (customer enters the TrxID), or Cash on Delivery. No card payments |
| **Hosting** | Vercel |

---

## 📦 Project Structure

```
arboreta/
├── src/
│   ├── app/                 # Pages: home, categories, products, rarest, checkout, blog, admin/orders, policy pages
│   │   └── api/             # orders (place an order), admin/orders (list and update, needs ADMIN_KEY)
│   ├── components/          # Header, footer, cart drawer, catalog, Lucky Tree finder
│   ├── lib/                 # Catalog (dummy-products.ts), nurseries.ts, shop-config.ts, orders.ts, blog posts
│   └── types/
├── supabase/migrations/     # The orders table (RLS on, server key only)
├── public/                  # Images
└── nursery-checklist.csv
```

---

## 🛠 Getting Started

Prerequisites: Node.js 18 or newer and pnpm.

```bash
pnpm install
cp .env.example .env.local   # set ADMIN_KEY; leave the Supabase pair unset to store orders in data/orders.json
pnpm dev                     # http://localhost:3000
pnpm exec vitest run         # tests
pnpm build
```

Shop settings (bKash/Nagad numbers, delivery charge, free-delivery threshold) are in `src/lib/shop-config.ts`.
A wallet with an empty number is hidden at checkout. Partner nurseries are in `src/lib/nurseries.ts`.

### Environment variables

| Name | Where | What |
|---|---|---|
| `ADMIN_KEY` | server | Password for `/admin/orders` |
| `SUPABASE_URL` | server | Supabase project URL. Required on Vercel |
| `SUPABASE_SERVICE_ROLE_KEY` | server | Supabase service key. Required on Vercel; never prefix with `NEXT_PUBLIC_` |
| `NEXT_PUBLIC_APP_URL` | public | The site's URL (in `.env.example`; not read by the code yet) |

On Vercel the app refuses to take orders when the Supabase pair is missing (Vercel does not keep files).

### Deploy (Vercel + Supabase)

1. Create a Supabase project, then `supabase link --project-ref <ref>` and `supabase db push` (or paste `supabase/migrations/*_orders.sql` into the SQL editor).
2. `vercel link`, then add `ADMIN_KEY`, `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` with `vercel env add <NAME>` (Preview first).
3. `vercel` deploys a preview, `vercel --prod` deploys production.

---

## 📝 Features

- 🛍️ **Catalog** in seven categories with season badges, filters and a "rarest" page
- 🍀 **Lucky Tree finder** with a discount checked on the server
- 🛒 **Cart drawer and checkout**: bKash or Nagad (Send Money + TrxID) or Cash on Delivery, free delivery above the threshold
- 📋 **Order admin** at `/admin/orders`: verify the TrxID, move an order through new → awaiting confirmation → confirmed → sent to nursery → shipped → delivered (or cancelled), and see which nursery ships each item
- 📰 **Blog** with plant-care posts
- No customer accounts, wishlist, card payments or email notifications

---

## 💰 Product Categories

Seeds, Flowering Plants, Seasonal Flowers, Bonsais, Fruit Trees, Fertilizers & Care, Indoor & Office Plants (`src/lib/categories.ts`).

---

## 🤝 Contributing

This is a private project for Arboreta by Shifuta. Contributions by invitation only.

---

## 📄 License

All rights reserved © 2026 Arboreta by Shifuta.
