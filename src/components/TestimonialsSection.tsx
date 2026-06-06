import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: 'Got my keys two months ahead of schedule. M PRO delivered exactly what was promised on the brochure.',
    name: 'Harpreet Singh',
    location: 'City of Dreams, Mohali',
  },
  {
    quote: 'We compared every major builder in Zirakpur. M PRO\'s amenity standard and finish quality stood out by a mile.',
    name: 'Anjali Mehra',
    location: 'M PRO Housing Park',
  },
  {
    quote: 'As an NRI, the after-sales coordination made the entire purchase feel effortless. Genuinely impressed.',
    name: 'Rajiv Kapoor',
    location: 'Toronto · F Towers, Ludhiana',
  },
  {
    quote: 'The clubhouse, the pool, the kids\' play deck — everything is exactly as the model showed.',
    name: 'Neha & Vikram',
    location: 'M PRO Parivaas, Banur',
  },
  {
    quote: 'Booked our showroom at RIO ONE. The location and footfall projections were spot on.',
    name: 'Manmohan Sethi',
    location: 'RIO ONE, Zirakpur',
  },
];

const PRESS = ['Times of India', 'Hindustan Times', 'The Tribune', 'Economic Times', 'Mint', 'Business Standard', 'NDTV'];

export default function TestimonialsSection() {
  return (
    <section
      id="media"
      className="relative bg-[var(--bg)] border-t border-[var(--line)] py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-8 h-px bg-[var(--gold)]" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)]">Voices of Trust</span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]"
            style={{ letterSpacing: '-0.03em', color: 'var(--ivory)' }}
          >
            Trusted by families
            <span className="italic" style={{ color: 'var(--gold-soft)' }}> and investors alike.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee testimonials (CSS-driven for reliable mobile playback) */}
      <div className="marquee">
        <div className="marquee-track gap-6 px-3" style={{ animationDuration: '50s' }}>
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-[320px] md:w-[440px] liquid-glass rounded-2xl p-7 md:p-8"
            >
              <Quote className="w-6 h-6 text-[var(--gold)] mb-4" />
              <p className="font-display text-lg md:text-xl text-[var(--ivory)] leading-snug mb-6 font-light">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-[var(--line)]">
                <div className="text-sm font-medium text-[var(--ivory)]">{t.name}</div>
                <div className="text-xs text-[var(--muted)] mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Press logos strip */}
      <div className="mt-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-[10px] text-[var(--muted)] tracking-[0.35em] uppercase mb-6 text-center">As featured in</div>
        <div className="marquee border-y border-[var(--line)] py-6">
          <div className="marquee-track gap-16" style={{ animationDuration: '32s' }}>
            {[...PRESS, ...PRESS].map((name, i) => (
              <span key={i} className="font-display text-2xl md:text-3xl text-[var(--ivory)]/35 font-light tracking-tight whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
