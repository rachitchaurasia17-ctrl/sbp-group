const ITEMS = [
  'Passion. Perfection. Prosperity.',
  'Redefining Real Estate',
  'Founded 2021',
  'Global Expertise',
  'Research-Led',
  'Chandigarh · Mohali · Zirakpur · Ludhiana',
  'RERA Compliant',
  'Advisory & Development',
];

// Duplicate the set so translateX(-50%) loops seamlessly.
const LOOP = [...ITEMS, ...ITEMS];

export default function MarqueeStrip() {
  return (
    <div className="marquee w-full border-y border-[var(--line)] bg-[var(--bg-elev)] py-5 md:py-6">
      <div className="marquee-track items-center gap-10" style={{ animationDuration: '38s' }}>
        {LOOP.map((item, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-display text-2xl md:text-3xl font-light tracking-tight text-[var(--ivory)]">
              {item}
            </span>
            <span className="text-[var(--gold)] text-lg leading-none">✦</span>
          </div>
        ))}
      </div>
      {/* edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[var(--bg-elev)] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[var(--bg-elev)] to-transparent pointer-events-none" />
    </div>
  );
}
