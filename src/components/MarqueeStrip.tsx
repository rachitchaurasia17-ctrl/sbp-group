import { motion } from 'framer-motion';

const ITEMS = [
  'Built on Trust',
  'Proven by Delivery',
  '15,000+ Homes',
  '18 Years',
  '32 Landmarks',
  'Chandigarh · Mohali · Zirakpur · Ludhiana',
  'RERA Certified',
  'No.1 in Punjab',
];

export default function MarqueeStrip() {
  return (
    <div className="relative w-full border-y border-[var(--line)] bg-[var(--bg-elev)] overflow-hidden py-5 md:py-6">
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-display text-2xl md:text-3xl font-light tracking-tight text-[var(--ivory)]">
              {item}
            </span>
            <span className="text-[var(--gold)] text-lg leading-none">✦</span>
          </div>
        ))}
      </motion.div>
      {/* edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[var(--bg-elev)] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[var(--bg-elev)] to-transparent pointer-events-none" />
    </div>
  );
}
