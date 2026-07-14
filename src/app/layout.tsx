import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arboreta by Shifuta — Premium Botanical Curation',
  description: 'Cultivate the extraordinary. Curated plants, seeds, and botanical care for the discerning collector.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream-50 text-charcoal">
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-40 bg-forest-700 text-cream-50 shadow-card">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
              <div className="text-2xl font-display font-bold">Arboreta</div>
              <div className="hidden md:flex gap-8 text-sm">
                <a href="/" className="hover:text-gold-400 transition-smooth">Home</a>
                <a href="/categories" className="hover:text-gold-400 transition-smooth">Shop</a>
                <a href="/about" className="hover:text-gold-400 transition-smooth">About</a>
                <a href="/contact" className="hover:text-gold-400 transition-smooth">Contact</a>
              </div>
              <div className="flex gap-4">
                <button className="p-2 hover:text-gold-400 transition-smooth">🛒 Cart</button>
                <button className="p-2 hover:text-gold-400 transition-smooth">❤️ Wishlist</button>
              </div>
            </nav>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="bg-forest-900 text-cream-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div>
                  <h3 className="font-display font-600 mb-4">Shop</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/categories/seeds" className="hover:text-gold-400 transition-smooth">Seeds</a></li>
                    <li><a href="/categories/flowers" className="hover:text-gold-400 transition-smooth">Flower Trees</a></li>
                    <li><a href="/categories/bonsai" className="hover:text-gold-400 transition-smooth">Bonsais</a></li>
                    <li><a href="/categories/fruit" className="hover:text-gold-400 transition-smooth">Fruit Trees</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display font-600 mb-4">Company</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/about" className="hover:text-gold-400 transition-smooth">About</a></li>
                    <li><a href="/blog" className="hover:text-gold-400 transition-smooth">Care Guides</a></li>
                    <li><a href="/contact" className="hover:text-gold-400 transition-smooth">Contact</a></li>
                    <li><a href="/faq" className="hover:text-gold-400 transition-smooth">FAQ</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display font-600 mb-4">Legal</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/privacy" className="hover:text-gold-400 transition-smooth">Privacy</a></li>
                    <li><a href="/terms" className="hover:text-gold-400 transition-smooth">Terms</a></li>
                    <li><a href="/shipping" className="hover:text-gold-400 transition-smooth">Shipping</a></li>
                    <li><a href="/returns" className="hover:text-gold-400 transition-smooth">Returns</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display font-600 mb-4">Connect</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="https://instagram.com" className="hover:text-gold-400 transition-smooth">Instagram</a></li>
                    <li><a href="https://pinterest.com" className="hover:text-gold-400 transition-smooth">Pinterest</a></li>
                    <li><a href="https://facebook.com" className="hover:text-gold-400 transition-smooth">Facebook</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-forest-700 pt-8 text-center text-sm text-cream-200">
                <p>&copy; 2026 Arboreta by Shifuta. All rights reserved. Cultivate the extraordinary.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
