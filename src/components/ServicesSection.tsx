import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PILLARS = [
  {
    id: 'residential',
    n: '01',
    label: 'Residential',
    headline: 'Homes from 1 to 4 BHK',
    range: '₹49.77L — ₹4.14Cr',
    desc: 'Premium apartments designed with rooftop pools, fitness clubs and curated landscapes — engineered for the way families actually live.',
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
  return (
    <section className="relative bg-[var(--bg)] py-24 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-[var(--gold)]" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)]">
              Three Portfolios. One Standard.
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]"
            style={{ letterSpacing: '-0.03em', color: 'var(--ivory)' }}
          >
            What we
            <br />
            <span className="italic" style={{ color: 'var(--gold-soft)' }}>build.</span>
          </h2>
        </motion.div>

        {/* Pillars — alternating editorial */}
        <div className="space-y-24 md:space-y-32">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.id}
              id={p.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden project-card-shadow group">
                  <img
                    src={p.img}
                    alt={p.label}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="liquid-glass px-3 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase text-[var(--gold-soft)]">
                      {p.n} · {p.label}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <div className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)] mb-4">
                  {p.range}
                </div>
                <h3
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-5 leading-tight"
                  style={{ letterSpacing: '-0.03em', color: 'var(--ivory)' }}
                >
                  {p.headline}
                </h3>
                <p className="text-base text-[var(--ivory-dim)] leading-relaxed mb-8 max-w-md">
                  {p.desc}
                </p>
                <Link
                  to={`/${p.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-2 text-sm tracking-wide text-[var(--gold-soft)]"
                >
                  Explore {p.label} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
