import { BLOG_POSTS, formatPostDate, readingMinutes } from '@/lib/blog-posts';
import { PlantImage } from '@/components/PlantImage';
import Link from 'next/link';

export const metadata = { title: 'Blog — Arboreta by Shifuta' };

export default function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="bg-cream-50">
      <section className="bg-forest-700 py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gold-300 tracking-[0.3em] text-xs uppercase mb-4">The Arboreta Journal</p>
          <h1 className="!text-cream-50 font-display font-bold text-4xl md:text-6xl mb-4">Notes from the Nursery</h1>
          <p className="text-lg text-cream-100/80 font-body">Plant care, fertilizer talk, and tree fairs — written as we learn.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-0 rounded-lg overflow-hidden bg-white card-shadow mb-14">
            <div className="h-72 md:h-auto bg-sage-100 overflow-hidden">
              <PlantImage src={featured.coverImage} alt={featured.title} className="group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-500 font-600 mb-3">Latest · {featured.category}</p>
              <h2 className="!text-3xl md:!text-4xl font-display font-bold text-forest-700 group-hover:text-gold-500 transition-colors mb-4">{featured.title}</h2>
              <p className="text-charcoal/70 mb-6">{featured.excerpt}</p>
              <p className="text-sm text-charcoal/50">{formatPostDate(featured.date)} · {readingMinutes(featured.body)} min read</p>
            </div>
          </Link>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col rounded-lg overflow-hidden bg-white card-shadow">
              <div className="h-52 bg-sage-100 overflow-hidden">
                <PlantImage src={post.coverImage} alt={post.title} className="group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-gold-500 font-600 mb-2">{post.category}</p>
                <h3 className="!text-xl font-display font-bold text-forest-700 group-hover:text-gold-500 transition-colors mb-3">{post.title}</h3>
                <p className="text-sm text-charcoal/70 mb-4 flex-1">{post.excerpt}</p>
                <p className="text-xs text-charcoal/50">{formatPostDate(post.date)} · {readingMinutes(post.body)} min read</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
