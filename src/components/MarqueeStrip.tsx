import { motion } from 'framer-motion';

const ITEMS = [
  'Built on Trust',
  'Proven by Delivery',
  '15,000+ Homes',
  '18 Years',
  '32 Projects',
  'Chandigarh · Mohali · Zirakpur · Ludhiana',
  'RERA Certified',
  'No.1 in Punjab',
];

export default function MarqueeStrip() {
  return (
    <div className="relative w-full border-y border-white/10 bg-black overflow-hidden py-6">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-12 text-white/90">
            <span className="text-2xl md:text-4xl font-light tracking-tight">{item}</span>
            <span className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
