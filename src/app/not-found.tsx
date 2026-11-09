import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-28 text-center">
      <p className="text-6xl mb-4">🌱</p>
      <h1 className="font-display font-bold text-forest-700 text-4xl mb-4">Nothing growing here</h1>
      <p className="text-charcoal/70 mb-8">The page you’re looking for doesn’t exist — yet.</p>
      <Link href="/" className="btn-primary inline-block">Back to home</Link>
    </div>
  );
}
