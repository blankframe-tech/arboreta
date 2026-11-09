import { CatalogView } from '@/components/CatalogView';
import { CATEGORIES, CATEGORY_MAP } from '@/lib/categories';
import { Category } from '@/types/product';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.id }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!CATEGORY_MAP[slug]) notFound();
  return <CatalogView initialCategory={slug as Category} />;
}
