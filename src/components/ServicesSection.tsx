import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const PILLARS = [
  {
    id: 'residential',
    n: '01',
    label: 'Residential',
    headline: 'Homes from 1 to 4 BHK',
    range: '₹49.77L — ₹4.14Cr',
    desc: 'Premium apartments with rooftop pools, fitness clubs and curated landscapes — engineered for the way families actually live.',
    img: '/projects/cityofdream.avif',
  },
  {
    id: 'commercial',
    n: '02',
    label: 'Commercial',
    headline: 'Showrooms & High-Streets',
    range: 'from ₹52.50L',
    desc: 'Flagship retail destinations engineered for footfall, frontage and future-proof returns at the most strategic Tricity addresses.',
    img: '/projects/rio-one.webp',
  },
  {
    id: 'industrial',
    n: '03',
    label: 'Industrial',
    headline: 'Estates & Parks',
    range: 'Plug-and-play units',
    desc: 'Industrial estates around Rajpura, Derabassi and Banur — built with the scale, infrastructure and approvals manufacturers need.',
    img: '/projects/siel.webp',
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <section className="relative bg-[var(--bg)] border-t border-[var(--line)] py-20 md:py-28 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)]">
                Three Portfolios. One Standard.
              </span>
            </div>
            <h2
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.02]"
              style={{ letterSpacing: '-0.03em', color: 'var(--ivory)' }}
            >
              What we <span className="italic" style={{ color: 'var(--gold-soft)' }}>build.</span>
            </h2>
          </div>
          <p className="text-sm text-[var(--muted)] max-w-xs md:text-right">
            Hover or tap a panel to explore each portfolio.
          </p>
        </motion.div>

        {/* Expanding panels */}
        <div className="flex flex-col lg:flex-row gap-3 lg:h-[78vh] lg:max-h-[720px]">
          {PILLARS.map((p, i) => {
            const isActive = active === i;
            const sizeStyle = isDesktop
              ? { width: isActive ? '60%' : '18%' }
              : { width: '100%', height: isActive ? 440 : 104 };
            return (
              <div
                key={p.id}
                data-active={isActive}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                style={sizeStyle}
                className="build-panel group relative overflow-hidden rounded-2xl cursor-pointer border border-[var(--line)]"
              >
                {/* Background image */}
                <img
                  src={p.img}
                  alt={p.label}
                  style={{ transform: isActive ? 'scale(1.08)' : 'scale(1)' }}
                  className="build-img absolute inset-0 w-full h-full object-cover"
                />
                {/* Scrims */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ background: 'linear-gradient(90deg, rgba(7,5,2,0.7) 0%, transparent 60%)', opacity: isActive ? 1 : 0.4 }}
                />

                {/* Number + label — always visible */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[var(--gold-soft)]">
                    {p.n}
                  </span>
                  <span
                    className={`liquid-glass px-3 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase transition-colors ${
                      isActive ? 'text-[var(--gold-soft)]' : 'text-[var(--ivory)]/70'
                    }`}
                  >
                    {p.label}
                  </span>
                </div>

                {/* Collapsed label (vertical) — desktop only, when not active */}
                {!isActive && (
                  <div className="hidden lg:flex absolute inset-0 items-end justify-center pb-8 pointer-events-none">
                    <span
                      className="font-display text-3xl text-[var(--ivory)] whitespace-nowrap"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '-0.02em' }}
                    >
                      {p.label}
                    </span>
                  </div>
                )}

                {/* Active content */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[var(--gold-soft)] mb-3">
                          {p.range}
                        </div>
                        <h3
                          className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-[var(--ivory)] leading-[0.98] mb-4"
                          style={{ letterSpacing: '-0.03em' }}
                        >
                          {p.headline}
                        </h3>
                        <p className="text-sm md:text-base text-[var(--ivory-dim)] leading-relaxed max-w-xl mb-6">
                          {p.desc}
                        </p>
                        <Link
                          to={`/${p.id}`}
                          className="btn-gold inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium tracking-wide"
                        >
                          <span>Explore {p.label}</span>
                          <span>→</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
