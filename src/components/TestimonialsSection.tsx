import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: 'Got my keys two months ahead of schedule. SBP delivered exactly what was promised on the brochure.',
    name: 'Harpreet Singh',
    location: 'City of Dreams, Mohali',
  },
  {
    quote: 'We compared every major builder in Zirakpur. SBP\'s amenity standard and finish quality stood out by a mile.',
    name: 'Anjali Mehra',
    location: 'SBP Housing Park',
  },
  {
    quote: 'As an NRI, the after-sales coordination made the entire purchase feel effortless. Genuinely impressed.',
    name: 'Rajiv Kapoor',
    location: 'Toronto · F Towers, Ludhiana',
  },
  {
    quote: 'The clubhouse, the pool, the kids\' play deck — everything is exactly as the model showed.',
    name: 'Neha & Vikram',
    location: 'SBP Parivaas, Banur',
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
      className="relative bg-black text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-white/50 uppercase">Voices of Trust</span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 max-w-3xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            15,000+ keys.
            <br />
            <span className="text-white/40">15,000+ families.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee testimonials */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-[340px] md:w-[420px] liquid-glass border border-white/10 rounded-2xl p-7"
            >
              <Quote className="w-6 h-6 text-white/30 mb-4" />
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 font-light">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-white/50 mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Press logos strip */}
      <div className="mt-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-xs text-white/40 tracking-[0.3em] uppercase mb-6 text-center">As featured in</div>
        <div className="relative overflow-hidden border-y border-white/10 py-6">
          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          >
            {[...PRESS, ...PRESS, ...PRESS].map((name, i) => (
              <span key={i} className="text-2xl md:text-3xl text-white/40 font-light tracking-tight">
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
