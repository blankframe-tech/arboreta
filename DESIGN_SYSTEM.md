# Arboreta by Shifuta — Design System

## Brand Identity

**Brand Name**: Arboreta by Shifuta  
**Tagline**: *Cultivate the extraordinary*  
**Category**: Premium botanical e-commerce / curated plant marketplace  
**Positioning**: Luxury plant curation for discerning collectors and wellness-focused professionals

---

## Color Palette

### Primary Colors
- **Deep Forest Green** `#1a472a` — authority, growth, natural luxury
- **Sage Green** `#6b8e6f` — approachability, calm, balance
- **Cream** `#f5f3f0` — elegance, breathing room, premium paper feel

### Secondary Colors
- **Soft Gold** `#d4a574` — accent, prestige, organic warmth
- **Warm White** `#faf9f7` — backgrounds, cleanliness, premium finish
- **Charcoal** `#2a2a2a` — text, depth, sophistication

### Accent Colors (minimal use)
- **Terracotta** `#c77a5a` — earth, pottery, tactile warmth
- **Muted Blush** `#d8b8b0` — delicate, rare species highlight

### Psychology
The palette whispers *heritage*, *scarcity*, *care*. Deep greens ground the user; cream and gold create visual rest and luxury. No bright colors — this is quiet luxury, not fast fashion.

---

## Typography

### Font Family
- **Headings**: `Playfair Display` (serif, 300–600 weight)
  - Elegant, editorial, curated-collection feel
  - Sizes: H1 `56px`, H2 `40px`, H3 `28px`, H4 `20px`

- **Body**: `Inter` or `Outfit` (sans-serif, 400–500)
  - Modern, readable, premium tech accessibility
  - Sizes: Body `16px`, Small `14px`, Caption `12px`

- **Accent**: `Cormorant Garamond` (serif, italic, 300 weight)
  - Rare-species botanical Latin names, section callouts

### Typography Hierarchy
| Element | Font | Weight | Size | Spacing |
|---------|------|--------|------|---------|
| Page H1 | Playfair Display | 400 | 56px | Letter-spacing +1px |
| Page H2 | Playfair Display | 400 | 40px | Letter-spacing +0.5px |
| Card Title | Playfair Display | 500 | 24px | — |
| Body | Inter | 400 | 16px | Line-height 1.6 |
| Price | Playfair Display | 300 | 28px | — |
| Label | Inter | 500 | 12px uppercase | Letter-spacing +2px |

---

## Spacing & Grid

- **Base Unit**: 8px
- **Layout Grid**: 12-column with 24px gutters (desktop), 16px (tablet), 8px (mobile)
- **Card Spacing**: 32px (desktop), 24px (tablet), 16px (mobile)
- **Section Padding**: 80px vertical (desktop), 48px (tablet), 32px (mobile)
- **Element Margins**: Multiples of 8px (8, 16, 24, 32, 40, 48, 56, 64)

### Breathing Room Philosophy
Never crowd plants. Each product gets **white space**, never a grid-packed wall. 2 columns on desktop, 1.5 on tablet, 1 on mobile. Users should never scroll past 3 plants without a pause.

---

## Visual Language

### Imagery Style
- **Photography**: Botanical, studio-lit, minimal backgrounds (cream, soft grey)
- **Angles**: Direct frontal or slight 45° to show form and texture
- **Lighting**: Soft north-light quality, no harsh shadows (except a whisper to show depth)
- **Composition**: Center-weighted, negative space on all sides
- **Subjects**: Full plant (roots if potted), close-up detail (leaf texture), lifestyle (in situ, no models)

### Illustration (if needed)
- Fine-line botanical drawings in charcoal or sage green
- Cross-section diagrams (root systems, soil layers)
- Hand-drawn care icons (watering, sunlight, humidity)

### Shadows & Depth
- **Subtle card shadow**: `0 2px 8px rgba(26, 71, 42, 0.08)`
- **Hover lift**: `0 8px 24px rgba(26, 71, 42, 0.12)`
- **No hard shadows** — depth via color separation, not drop-shadows

---

## Component Library

### Cards
```
[Image: full-width plant photo, 280px height]
[Spacing: 20px]
[Title: "Monstera Deliciosa" — Playfair Display, 24px, 500]
[Subtitle: "Tropical climbing philodendron" — gray, italic, 14px]
[Spacing: 12px]
[Price: "৳ 45,000" — Playfair Display, 28px, 300, gold accent]
[Rarity badge if rare: "Limited stock" — charcoal bg, cream text, 10px uppercase]
[Spacing: 16px]
[Quick details: "Non-toxic · Semi-shade tolerant · Propagates easily" — gray, 12px]
[Spacing: 16px]
[Button: "Add to wishlist · View details" — soft secondary buttons]
```

### Navigation
- **Sticky header**: Cream background, sage green text, "Arboreta by Shifuta" logo (left), category pill-nav (center), cart/account icons (right)
- **Categories**: Seeds · Flower Trees · Seasonal · Bonsais · Fruit Trees · Fertilizers · Office Plants
- **Active indicator**: Soft gold underline, no background fill

### Buttons
- **Primary**: Deep green `#1a472a`, cream text, 12px sans uppercase, 8px padding, rounded 4px
- **Secondary**: Cream border (1px), deep green text, transparent fill, hover → light green fill
- **Ghost**: No fill/border, sage green text, underline on hover
- **Disabled**: Muted (40% opacity)

### Forms
- **Inputs**: Cream background, sage border (1px), focus → gold border (2px), padding 12px
- **Placeholders**: Muted gray, italic
- **Labels**: Uppercase, 12px, letter-spacing +1px, above input

---

## Motion & Interaction

### Hover States
- **Cards**: Lift 8px, shadow deepens, image slightly zooms (1.02×) — all over 300ms ease-out
- **Buttons**: Background color shift, text scale 0.98× (subtle press), 200ms ease
- **Links**: Gold underline appears, text stays same color

### Transitions
- **Page enter**: Staggered fade-in (headings 0ms, text 100ms, images 200ms)
- **Cart slide**: Drawer enters from right, 400ms cubic-bezier(0.4, 0, 0.2, 1)
- **Loading**: Animated leaf icon rotating, soft gold color

### Micro-interactions
- **Add to cart**: Button → checkmark, text "Added", auto-revert 2s (no redirect noise)
- **Wishlist toggle**: Heart fill animation, instant feedback
- **Quantity selector**: + / − buttons, smooth number transition

---

## Page Layouts

### Homepage
1. **Hero**: Full-width image (Monstera or Bonsai in dramatic light), overlay text "Cultivate the extraordinary", tagline, CTA button
2. **Category preview**: 7 pill buttons (all categories), each shows 1–2 plants as preview grid
3. **Featured section**: "This month's rarest finds" — 4–6 plants, full cards, left-right scroll or grid
4. **Trust section**: "Curator's notes" — why each plant matters, testimonial-style
5. **CTA section**: "Start your collection" — newsletter signup, minimal form
6. **Footer**: Links, newsletter, social (clean, not cluttered)

### Product Listing (Category)
1. **Header**: Category title, subheading ("Shade-loving tropical climbers")
2. **Filters**: (sidebar or modal) Care level, price, rare/common, pet-safe
3. **Sort**: Price (low/high), newest, rarest, bestseller
4. **Grid**: 2 columns (desktop), 1 (mobile), cards as described
5. **Infinite scroll** or pagination (subtle, not aggressive)

### Product Detail
1. **Hero**: Image carousel (5–8 images), full-width on desktop, swipeable on mobile
2. **Info**: Title, price, rarity, in-stock status (small badge)
3. **Tabs**: Description, Care guide, Why collectors love this
4. **Quick specs**: Light needs, water schedule, humidity, toxicity, pot size
5. **Actions**: Add to cart (primary), Add to wishlist (secondary), Share
6. **Recommended**: 4 related plants (sidebar on desktop, carousel on mobile)

### Cart
1. **Drawer or modal** sliding from right
2. **Minimalist**: Item card (thumbnail, name, qty, price), remove link (not button)
3. **Order summary**: Subtotal, estimated shipping, total (gold accent on total)
4. **CTA**: "Proceed to checkout" (primary button)
5. **Continue shopping** (ghost link)

### Checkout
1. **Progress bar**: Step 1 Shipping · Step 2 Payment · Step 3 Confirm (no per-field progress, just sections)
2. **Form fields**: Shipping address, payment (Stripe integration shown as minimal UI)
3. **Order review**: Item list + address + total on right side (desktop sticky column)
4. **Confirmation**: "Order placed" page with order number, plant care tips, tracking link

---

## Accessibility & Inclusion

- **Color contrast**: All text ≥ 4.5:1 ratio (WCAG AA)
- **Alt text**: Every plant image describes the plant, angle, and notable features
- **Form labels**: Associated with inputs, not placeholders alone
- **Icons**: Paired with text labels, never icon-only (except universally understood: cart, search, menu)
- **Keyboard nav**: Tab-able buttons, skip to main, proper focus rings (gold, 2px)
- **Responsive text**: No text < 14px except captions

---

## Technical Specs (for dev)

| Property | Value |
|----------|-------|
| Font smoothing | `antialiased` |
| Text rendering | `optimizeLegibility` |
| Image optimization | WebP with JPEG fallback, lazy-loaded |
| Dark mode | Not supported (brand is light) |
| Supported browsers | Chrome, Safari, Firefox, Edge (latest 2 versions) |
| Responsive breakpoints | `1200px` (desktop), `768px` (tablet), `480px` (mobile) |

---

## UI Kit Summary

**Download ready**: All colors, fonts, spacing, and component specs above are production-ready and will be implemented as CSS variables and component library in code.

---

## Brand Voice

- **Tone**: Knowledgeable, curated, never salesy
- **Language**: Use botanical names (parenthetical), care language is inviting not demanding
- **Examples**:
  - ✅ "This rare Rhaphidophora loves humid shade"
  - ❌ "BUY NOW LIMITED TIME"
  - ✅ "Propagates readily from cuttings — perfect for sharing"
  - ❌ "FAST SHIPPING!"

---

**Design by**: Arboreta brand vision  
**Version**: 1.0  
**Last updated**: 2026-07-14
