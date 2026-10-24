import { BlogBody } from '@/components/BlogBody';
import { BLOG_POSTS, formatPostDate, getPostBySlug, readingMinutes } from '@/lib/blog-posts';
import { getProductBySlug } from '@/lib/dummy-products';
import { PlantImage } from '@/components/PlantImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return post ? { title: `${post.title} — Arboreta Journal`, description: post.excerpt } : {};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const idx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const newer = BLOG_POSTS[idx - 1];
  const older = BLOG_POSTS[idx + 1];
  const related = (post.relatedProductSlugs ?? []).map(getProductBySlug).filter(Boolean);

  return (
    <article className="bg-cream-50">
      <header className="bg-forest-700 pt-14 pb-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/blog" className="text-gold-300 hover:text-gold-200 text-sm tracking-wide">← All posts</Link>
          <p className="mt-6 text-gold-300 tracking-[0.25em] text-xs uppercase">{post.category}</p>
          <h1 className="!text-cream-50 font-display font-bold text-3xl md:text-5xl mt-4 mb-5 !leading-tight">{post.title}</h1>
          <p className="text-cream-100/70 text-sm">
            {post.author} · {formatPostDate(post.date)} · {readingMinutes(post.body)} min read
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-14">
        <div className="h-64 md:h-96 rounded-lg overflow-hidden shadow-card-hover">
          <PlantImage src={post.coverImage} alt={post.title} />
        </div>

        <div className="py-12">
          <BlogBody body={post.body} />
        </div>

        {related.length > 0 && (
          <section className="border-t border-cream-200 py-10">
            <h2 className="!text-2xl font-display font-bold text-forest-700 mb-6">Plants mentioned</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((p) => p && (
                <Link key={p.id} href={`/products/${p.slug}`} className="group flex gap-4 rounded-lg bg-white card-shadow p-3">
                  <div className="h-20 w-20 shrink-0 rounded-sm bg-sage-100 overflow-hidden">
                    <PlantImage src={p.imageUrls[0]} alt={p.name} />
                  </div>
                  <div className="self-center">
                    <p className="font-display font-bold text-forest-700 group-hover:text-gold-500 transition-colors">{p.name}</p>
                    <p className="text-gold-500 font-600">৳ {p.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <nav className="grid sm:grid-cols-2 gap-4 border-t border-cream-200 py-10">
          {newer ? (
            <Link href={`/blog/${newer.slug}`} className="rounded-lg border border-cream-200 bg-white p-5 hover:border-forest-700 transition-colors">
              <span className="text-xs uppercase tracking-widest text-charcoal/50">← Newer</span>
              <span className="block font-display font-bold text-forest-700 mt-1">{newer.title}</span>
            </Link>
          ) : <span />}
          {older && (
            <Link href={`/blog/${older.slug}`} className="rounded-lg border border-cream-200 bg-white p-5 text-right hover:border-forest-700 transition-colors">
              <span className="text-xs uppercase tracking-widest text-charcoal/50">Older →</span>
              <span className="block font-display font-bold text-forest-700 mt-1">{older.title}</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
