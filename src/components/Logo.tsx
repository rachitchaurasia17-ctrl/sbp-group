/**
 * M PRO brand lockup — a faceted hexagon "gem" mark (rebuilt as crisp,
 * theme-aware SVG) paired with the serif wordmark. Scales cleanly from a
 * 28px nav mark to a large footer lockup.
 */

interface MarkProps {
  className?: string;
}

/** The geometric hexagon emblem, recreated in low-poly facets. */
export function LogoMark({ className }: MarkProps) {
  // Flat-top hexagon, R=47 around centre (50,50)
  const O = '50,50';
  const V0 = '97,50';
  const V1 = '73.5,9.3';
  const V2 = '26.5,9.3';
  const V3 = '3,50';
  const V4 = '26.5,90.7';
  const V5 = '73.5,90.7';
  const Mt = '50,9.3';
  const Mtr = '85.25,29.65';
  const Mbr = '85.25,70.35';
  const Mbot = '50,90.7';
  const Mbl = '14.75,70.35';
  const Mtl = '14.75,29.65';

  const facets: { p: string; f: string }[] = [
    { p: `${O} ${V2} ${Mt}`, f: '#ef4b46' },
    { p: `${O} ${Mt} ${V1}`, f: '#e93a37' },
    { p: `${O} ${V1} ${Mtr}`, f: '#e63532' },
    { p: `${O} ${Mtr} ${V0}`, f: '#df2528' },
    { p: `${O} ${V0} ${Mbr}`, f: '#d72023' },
    { p: `${O} ${Mbr} ${V5}`, f: '#c91d20' },
    { p: `${O} ${V5} ${Mbot}`, f: '#bd1b1e' },
    { p: `${O} ${Mbot} ${V4}`, f: '#bd1b1e' },
    { p: `${O} ${V4} ${Mbl}`, f: '#c91d20' },
    { p: `${O} ${Mbl} ${V3}`, f: '#d72023' },
    { p: `${O} ${V3} ${Mtl}`, f: '#df2528' },
    { p: `${O} ${Mtl} ${V2}`, f: '#e63532' },
  ];

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" role="img">
      <g stroke="#ffffff" strokeWidth="1.3" strokeLinejoin="round">
        {facets.map((t, i) => (
          <polygon key={i} points={t.p} fill={t.f} />
        ))}
        {/* signature dark maroon inverted triangle */}
        <polygon points="35,17 65,17 50,46" fill="#671614" />
      </g>
    </svg>
  );
}

interface LogoProps {
  /** Tailwind text-color class for the wordmark (defaults to brand red). */
  wordmarkClass?: string;
  /** Mark height in px (wordmark scales relative to it). */
  size?: number;
  /** Show the "Passion. Perfection. Prosperity." tagline beneath. */
  tagline?: boolean;
  className?: string;
}

export default function Logo({
  wordmarkClass = 'text-[var(--gold)]',
  size = 34,
  tagline = false,
  className = '',
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="shrink-0 block drop-shadow-[0_2px_10px_rgba(224,35,39,0.35)]"
        style={{ width: size, height: size }}
      >
        <LogoMark className="w-full h-full block" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display tracking-tight ${wordmarkClass}`}
          style={{ fontSize: size * 0.92, lineHeight: 0.95, letterSpacing: '0.01em' }}
        >
          M&thinsp;PRO
        </span>
        {tagline && (
          <span className="mt-1.5 text-[8px] md:text-[9px] tracking-[0.22em] uppercase text-[var(--gold-soft)]">
            Passion · Perfection · Prosperity
          </span>
        )}
      </span>
    </span>
  );
}
