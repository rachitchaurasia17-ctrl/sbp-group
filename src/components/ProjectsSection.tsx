import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export default function ProjectsSection() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const current = PROJECTS[active];

  const open = (slug: string) => navigate(`/project/${slug}`);

  return (
    <section
      id="projects"
      className="relative bg-[var(--bg)] border-t border-[var(--line)] py-20 md:py-28 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Section intro */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)]">
                Featured Portfolio
              </span>
            </div>
            <h2
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]"
              style={{ letterSpacing: '-0.03em', color: 'var(--ivory)' }}
            >
              Currently
              <br />
              shaping the
              <br />
              <span className="italic" style={{ color: 'var(--gold-soft)' }}>Tricity skyline.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[var(--muted)] max-w-sm leading-relaxed md:text-right">
            Each project below is live, RERA-registered, and led by an SBP delivery team known for keeping its dates. Tap any to see full details.
          </p>
        </motion.div>
      </div>

      {/* Showcase — big stage + thumbnail rail */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Big image stage — click to open detail */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden project-card-shadow group cursor-pointer"
            onClick={() => open(current.slug)}
          >
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={false}
                animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.04 }}
                transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                className="absolute inset-0"
                style={{ pointerEvents: 'none' }}
              >
                <img src={p.cover} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />
              </motion.div>
            ))}

            {/* Overlay info */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between pointer-events-none">
              <div className="flex items-start justify-between">
                <span className="liquid-glass px-3 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase text-[var(--gold-soft)]">
                  {current.badge}
                </span>
                <span className="liquid-glass px-3 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase text-[var(--ivory)]/80">
                  {String(active + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
                </span>
              </div>

              <div>
                <motion.div
                  key={current.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold-soft)] mb-3">
                    {current.city}
                  </div>
                  <h3
                    className="font-display text-4xl md:text-6xl text-[var(--ivory)] mb-3 leading-none"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {current.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs md:text-sm text-[var(--ivory-dim)] mb-5">
                    <span>{current.location}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                    <span>{current.type}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                    <span style={{ color: 'var(--gold-soft)' }}>{current.status}</span>
                  </div>
                  <span className="btn-gold pointer-events-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide">
                    <span>View Project Details</span>
                    <span>→</span>
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Thumbnail rail — hover previews, click opens detail */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-2">
              All Projects · Tap to explore
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-2 lg:max-h-[600px] lg:overflow-y-auto pr-1">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.slug}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => open(p.slug)}
                  className={`group relative aspect-[4/3] rounded-lg overflow-hidden border transition-all duration-500 ${
                    active === i
                      ? 'border-[var(--gold)] scale-[0.99]'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <img
                    src={p.cover}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      active === i ? 'bg-black/10' : 'bg-black/55 group-hover:bg-black/25'
                    }`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 text-left">
                    <div className="text-[10px] md:text-xs font-medium text-[var(--ivory)] leading-tight truncate">
                      {p.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
