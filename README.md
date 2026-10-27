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

- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** — Brand identity, color palette, typography, component library, and all design specifications
- **[APP_PLAN.md](./APP_PLAN.md)** — Complete feature set, technical architecture, database schema, API routes, and roadmap

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
| **Frontend** | Next.js 15, React 19, Tailwind CSS |
| **Backend** | Next.js API Routes, Node.js |
| **Database** | Supabase (PostgreSQL) |
| **Storage** | Supabase Storage / Cloudinary |
| **Payment** | Stripe |
| **Email** | Resend |
| **Hosting** | Vercel |

---

## 📦 Project Structure

```
arboreta/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout (header, footer)
│   │   ├── page.tsx         # Homepage
│   │   ├── globals.css      # Global styles + design tokens
│   │   └── api/             # API routes (coming soon)
│   ├── components/          # React components (coming soon)
│   ├── lib/                 # Utilities and helpers
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
├── DESIGN_SYSTEM.md         # Brand identity
├── APP_PLAN.md              # Feature roadmap & architecture
└── package.json
```

---

## 🛠 Getting Started

### Prerequisites
- Node.js ≥ 18
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/arboreta.git
   cd arboreta
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Fill in your Supabase, Stripe, and Resend API keys
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deploy (Vercel + Supabase)

Orders are stored in Supabase when `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are set, otherwise in `data/orders.json` (local only; Vercel does not keep files).

1. Create a Supabase project, then apply the migration: `supabase link --project-ref <ref>` and `supabase db push` (or paste `supabase/migrations/*_orders.sql` into the SQL editor).
2. `vercel link`, then add `ADMIN_KEY`, `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` with `vercel env add <NAME>` (Production and Preview).
3. `vercel` deploys a preview, `vercel --prod` deploys production.

---

## 📝 Key Features (MVP)

- ✨ **Homepage** with category preview and featured plants
- 🛍️ **Product browsing** with filters (care level, price, rarity, pet-safe)
- 🛒 **Shopping cart** with slide-in drawer UI
- 💳 **Checkout flow** with Stripe payment integration
- 👤 **Admin dashboard** for product and order management (coming soon)
- 📧 **Email notifications** with Resend
- ❤️ **Wishlist** functionality (coming soon)

---

## 🎯 Roadmap

### Phase 1 (Current)
- [x] Design system
- [x] Project scaffolding
- [ ] Homepage + category pages
- [ ] Product detail pages
- [ ] Shopping cart + checkout
- [ ] Admin dashboard

### Phase 2 (v1.1)
- [ ] User accounts + wishlist
- [ ] Advanced analytics
- [ ] Email marketing
- [ ] Social integration

### Phase 3 (v1.2)
- [ ] Blog / care guides
- [ ] Subscription boxes
- [ ] Community features
- [ ] International shipping

---

## 💰 Product Categories

1. **Seeds** — vegetable, flower, tree seeds
2. **Flower Trees** — tropical/deciduous flowering trees
3. **Seasonal** — holiday plants, limited availability
4. **Bonsais** — miniature, curated specimens
5. **Fruit Trees** — mango, lemon, dragon fruit, etc.
6. **Fertilizers** — organic, specialty, branded
7. **Office Plants** — air-purifying, low-maintenance

---

## 🤝 Contributing

This is a private project for Arboreta by Shifuta. Contributions by invitation only.

---

## 📄 License

All rights reserved © 2026 Arboreta by Shifuta.

---

## 📞 Contact

For inquiries about the platform or plant sourcing:
- Email: contact@arboreta.example
- Instagram: [@ArboretaByShifuta](https://instagram.com)

---

**Built with ❤️ and obsessive attention to detail.**