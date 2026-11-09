/**
 * Arboreta logo mark — a tree inside a gold ring.
 * Same artwork as /public/logo.svg (kept inline so it renders instantly).
 */
export function Logo({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role="img"
      aria-label="Arboreta logo"
    >
      <circle cx="24" cy="24" r="22.5" fill="#1a472a" stroke="#d4a574" strokeWidth="1.5" />
      <path d="M24 40 V27" stroke="#f5f3f0" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 33 C20.5 32.5 18.2 30.6 17 27.8" stroke="#f5f3f0" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 30 C27.5 29.5 29.8 27.6 31 24.8" stroke="#f5f3f0" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 8.5 C32.5 12.5 34 21 24 26.5 C14 21 15.5 12.5 24 8.5Z" fill="#d4a574" />
      <path d="M11.5 22.5 C12.5 16.5 18.5 14.5 21.5 17.5 C20.5 22.5 15.5 25 11.5 22.5Z" fill="#8fb8a3" />
      <path d="M36.5 22.5 C35.5 16.5 29.5 14.5 26.5 17.5 C27.5 22.5 32.5 25 36.5 22.5Z" fill="#8fb8a3" />
    </svg>
  );
}
