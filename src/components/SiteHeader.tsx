'use client';

import { Logo } from '@/components/Logo';
import { PlantImage } from '@/components/PlantImage';
import { useCart } from '@/lib/cart-context';
import { CATEGORIES } from '@/lib/categories';
import { getProductsByCategory } from '@/lib/dummy-products';
import { useLucky } from '@/lib/lucky-context';
import { Category } from '@/types/product';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const navLink =
  'text-sm font-body font-500 tracking-wide text-cream-50 hover:text-gold-300 transition-colors';

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount, toggleCart } = useCart();
  const { openLucky } = useLucky();

  const [shopOpen, setShopOpen] = useState(false);
  const [activeCat, setActiveCat] = useState<Category>(CATEGORIES[1].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCat, setMobileCat] = useState<Category | null>(null);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menus on navigation
  useEffect(() => {
    setShopOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Esc closes the mega menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShopOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setShopOpen(false), 180);
  };

  const active = CATEGORIES.find((c) => c.id === activeCat)!;
  const activeProducts = getProductsByCategory(activeCat);

  return (
    <header
      className="sticky top-0 z-40 bg-forest-700 text-cream-50 shadow-card"
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 shrink-0 text-cream-50 hover:text-cream-50" aria-label="Arboreta by Shifuta — home">
          <Logo className="h-12 w-12" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[26px] font-bold tracking-wide">Arboreta</span>
            <span className="font-accent italic text-gold-300 text-[17px] mt-1 tracking-wide">by Shifuta</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-9">
          <div onMouseEnter={() => { cancelClose(); setShopOpen(true); }}>
            <button
              type="button"
              className={`${navLink} flex items-center gap-1.5 py-2`}
              aria-expanded={shopOpen}
              aria-haspopup="true"
              onClick={() => setShopOpen(true)}
            >
              Shop
              <svg className={`h-3 w-3 transition-transform ${shopOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 4.5 6 8.5 10 4.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
          <Link href="/rarest" className={`${navLink} flex items-center gap-1.5`} onMouseEnter={() => setShopOpen(false)}>
            <span className="text-gold-300">✦</span> Rarest Finds
          </Link>
          <Link href="/blog" className={navLink} onMouseEnter={() => setShopOpen(false)}>
            Blog
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openLucky}
            className="hidden md:flex items-center gap-2 rounded-full border border-gold-300 text-gold-300 px-4 py-2 text-sm font-500 hover:bg-gold-300 hover:text-forest-800 transition-colors"
          >
            <span aria-hidden>🍀</span> Find Your Lucky Tree
          </button>

          <button
            type="button"
            onClick={toggleCart}
            className="relative p-2 text-cream-50 hover:text-gold-300 transition-colors"
            aria-label={`Open cart (${itemCount} items)`}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14l-1.2 11.2a1.5 1.5 0 0 1-1.5 1.3H7.7a1.5 1.5 0 0 1-1.5-1.3L5 8Z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /></svg>
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-gold-300 text-forest-800 text-[11px] font-700 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="lg:hidden p-2 text-cream-50"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {mobileOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Desktop mega menu */}
      {shopOpen && (
        <div className="hidden lg:block absolute left-0 right-0 top-full bg-cream-50 text-charcoal shadow-card-hover border-t-2 border-gold-300" onMouseEnter={cancelClose}>
          <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-12 gap-10">
            {/* Category list */}
            <ul className="col-span-3 space-y-1">
              <li className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-3 font-500">Categories</li>
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/categories/${c.id}`}
                    onMouseEnter={() => setActiveCat(c.id)}
                    onFocus={() => setActiveCat(c.id)}
                    className={`flex items-center justify-between rounded-sm px-4 py-3 transition-colors ${
                      activeCat === c.id ? 'bg-forest-700 text-cream-50 hover:text-cream-50' : 'text-forest-700 hover:bg-forest-50'
                    }`}
                  >
                    <span className="flex items-center gap-3 font-body font-500">
                      <span className="text-xl">{c.icon}</span>
                      {c.name}
                    </span>
                    <span className="text-xs opacity-60">{getProductsByCategory(c.id).length}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Postings in the active category */}
            <div className="col-span-9">
              <div className="flex items-end justify-between mb-5">
                <div>
                  <p className="font-display text-2xl text-forest-700 font-bold">{active.name}</p>
                  <p className="text-sm text-charcoal/60 mt-1">{active.description}</p>
                </div>
                <Link href={`/categories/${active.id}`} className="text-sm font-500 text-forest-700 hover:text-gold-500 whitespace-nowrap">
                  View all →
                </Link>
              </div>

              {activeProducts.length === 0 ? (
                <p className="text-sm text-charcoal/50 py-8">New arrivals coming soon.</p>
              ) : (
                <div className="grid grid-cols-4 gap-5">
                  {activeProducts.slice(0, 4).map((p) => (
                    <Link key={p.id} href={`/products/${p.slug}`} className="group block">
                      <div className="aspect-square overflow-hidden rounded-sm bg-sage-100">
                        <PlantImage src={p.imageUrls[0]} alt={p.name} emoji={active.icon} className="group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <p className="mt-3 text-sm font-500 text-forest-700 group-hover:text-gold-500 leading-snug">{p.name}</p>
                      <p className="text-sm text-gold-500 font-600">৳ {p.price.toLocaleString()}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-forest-800 text-cream-50 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-forest-600">
          <div className="px-4 py-4 space-y-1">
            <button
              type="button"
              className="w-full flex items-center justify-between py-3 text-left font-500"
              onClick={() => setMobileShopOpen((v) => !v)}
              aria-expanded={mobileShopOpen}
            >
              Shop <span className="text-gold-300">{mobileShopOpen ? '−' : '+'}</span>
            </button>
            {mobileShopOpen && (
              <div className="pl-3 pb-2 space-y-1 border-l border-forest-600">
                {CATEGORIES.map((c) => (
                  <div key={c.id}>
                    <div className="flex items-center justify-between">
                      <Link href={`/categories/${c.id}`} className="flex-1 py-2 text-cream-100 hover:text-gold-300">
                        {c.icon} {c.name}
                      </Link>
                      <button
                        type="button"
                        className="px-3 py-2 text-gold-300"
                        aria-label={`Show ${c.name} items`}
                        onClick={() => setMobileCat(mobileCat === c.id ? null : c.id)}
                      >
                        {mobileCat === c.id ? '−' : '+'}
                      </button>
                    </div>
                    {mobileCat === c.id && (
                      <ul className="pl-6 pb-2 space-y-1">
                        {getProductsByCategory(c.id).map((p) => (
                          <li key={p.id}>
                            <Link href={`/products/${p.slug}`} className="block py-1 text-sm text-cream-100/80 hover:text-gold-300">
                              {p.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
            <Link href="/rarest" className="block py-3 font-500 text-cream-50"><span className="text-gold-300">✦</span> Rarest Finds</Link>
            <Link href="/blog" className="block py-3 font-500 text-cream-50">Blog</Link>
            <Link href="/about" className="block py-3 font-500 text-cream-50">About</Link>
            <Link href="/contact" className="block py-3 font-500 text-cream-50">Contact</Link>
            <button
              type="button"
              onClick={() => { setMobileOpen(false); openLucky(); }}
              className="mt-3 w-full flex items-center justify-center gap-2 rounded-full border border-gold-300 text-gold-300 px-4 py-3 text-sm font-500"
            >
              🍀 Find Your Lucky Tree
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
