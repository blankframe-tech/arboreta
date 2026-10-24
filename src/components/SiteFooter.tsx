import { Logo } from '@/components/Logo';
import Link from 'next/link';

const linkClass = 'text-cream-100/80 hover:text-gold-300 transition-colors';

export function SiteFooter() {
  return (
    <footer className="bg-forest-900 text-cream-50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-11 w-11" />
              <div className="leading-none">
                <p className="font-display text-xl font-bold text-cream-50">Arboreta</p>
                <p className="font-accent italic text-gold-300 mt-1">by Shifuta</p>
              </div>
            </div>
            <p className="text-sm text-cream-100/70">Cultivate the extraordinary.</p>
          </div>
          <div>
            <h3 className="font-display text-lg text-cream-50 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories/seeds" className={linkClass}>Seeds</Link></li>
              <li><Link href="/categories/flowers" className={linkClass}>Flowering Plants</Link></li>
              <li><Link href="/categories/bonsai" className={linkClass}>Bonsais</Link></li>
              <li><Link href="/categories/fruit" className={linkClass}>Fruit Trees</Link></li>
              <li><Link href="/rarest" className={linkClass}>Rarest Finds</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg text-cream-50 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/blog" className={linkClass}>Blog</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
              <li><Link href="/faq" className={linkClass}>FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg text-cream-50 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className={linkClass}>Privacy</Link></li>
              <li><Link href="/terms" className={linkClass}>Terms</Link></li>
              <li><Link href="/shipping" className={linkClass}>Shipping</Link></li>
              <li><Link href="/returns" className={linkClass}>Returns</Link></li>
              <li><Link href="/credits" className={linkClass}>Photo credits</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg text-cream-50 mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://instagram.com" className={linkClass}>Instagram</a></li>
              <li><a href="https://pinterest.com" className={linkClass}>Pinterest</a></li>
              <li><a href="https://facebook.com" className={linkClass}>Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-forest-700 pt-8 text-center text-sm text-cream-200">
          <p>&copy; 2026 Arboreta by Shifuta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
