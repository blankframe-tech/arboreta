import type { Metadata } from 'next';
import { CartDrawer } from '@/components/CartDrawer';
import { LuckyTreeFinder } from '@/components/LuckyTreeFinder';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { CartProvider } from '@/lib/cart-context';
import { LuckyProvider } from '@/lib/lucky-context';
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
        <CartProvider>
          <LuckyProvider>
            <div className="min-h-screen flex flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <CartDrawer />
            <LuckyTreeFinder />
          </LuckyProvider>
        </CartProvider>
      </body>
    </html>
  );
}
