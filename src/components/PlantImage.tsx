/**
 * Shows a product / post photo, or a soft illustrated placeholder when no photo is set yet.
 * Fills its parent — give the parent a size (e.g. `h-52` or `aspect-square`).
 */
export function PlantImage({
  src,
  alt,
  emoji = '🌿',
  className = '',
}: {
  src?: string;
  alt: string;
  emoji?: string;
  className?: string;
}) {
  if (src) {
    return <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`h-full w-full flex items-center justify-center bg-gradient-to-br from-sage-100 via-sage-200 to-forest-100 ${className}`}
    >
      <span className="text-5xl opacity-70 select-none">{emoji}</span>
    </div>
  );
}
