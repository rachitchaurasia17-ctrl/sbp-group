import { useEffect } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SiteNav from '../components/SiteNav';
import Footer from '../components/Footer';
import ContactLink from '../components/ContactLink';
import { byCategory, CATEGORY_META, type Category } from '../data/projects';

const VALID: Category[] = ['residential', 'commercial', 'industrial'];

export default function CategoryPage() {
  const { pathname } = useLocation();
  const category = pathname.replace(/^\//, '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!VALID.includes(category as Category)) {
    return <Navigate to="/" replace />;
  }

  const cat = category as Category;
  const meta = CATEGORY_META[cat];
  const projects = byCategory(cat);

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <SiteNav />

      {/* Hero banner */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden flex items-end">
        <motion.img
          src={meta.hero}
          alt={meta.title}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/40 to-black/30" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-14 md:pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-5 text-[var(--gold-soft)]">
                <Link to="/" className="text-xs tracking-wide hover:text-[var(--ivory)] transition-colors">Home</Link>
                <span className="opacity-50">/</span>
                <span className="text-xs tracking-wide">{meta.title}</span>
              </div>
              <div className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)] mb-4">
                {meta.kicker}
              </div>
              <h1
                className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-[var(--ivory)] leading-[0.95]"
                style={{ letterSpacing: '-0.04em' }}
              >
                {meta.title}
              </h1>
              <p className="text-base md:text-lg text-[var(--ivory-dim)] mt-6 max-w-2xl leading-relaxed">
                {meta.lede}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Listing */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="text-sm text-[var(--muted)]">
              <span className="font-display text-3xl text-[var(--gold-soft)] mr-2">{projects.length}</span>
              {meta.title.toLowerCase()} {projects.length === 1 ? 'project' : 'projects'}
            </div>
            <div className="gold-line flex-1 ml-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              >
                <Link
                  to={`/project/${p.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--gold)]/50 transition-all duration-500 project-card-shadow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-5 left-5 liquid-glass px-3 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase text-[var(--gold-soft)]">
                      {p.badge}
                    </span>
                    <span className="absolute top-5 right-5 liquid-glass px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase text-[var(--ivory)]/80">
                      {p.status}
                    </span>
                  </div>
                  <div className="p-6 md:p-8 bg-[var(--bg-elev)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className="font-display text-3xl md:text-4xl text-[var(--ivory)] leading-none mb-2"
                          style={{ letterSpacing: '-0.02em' }}
                        >
                          {p.name}
                        </h3>
                        <p className="text-sm text-[var(--muted)] italic font-display">{p.tagline}</p>
                      </div>
                      <span className="shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[var(--gold-soft)] group-hover:bg-[var(--gold)] group-hover:text-[var(--bg)] group-hover:border-[var(--gold)] transition-all duration-500">
                        →
                      </span>
                    </div>
                    <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[var(--ivory-dim)]">
                      <span>{p.location}</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                      <span>{p.type}</span>
                      {p.priceFrom && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                          <span style={{ color: 'var(--gold-soft)' }}>from {p.priceFrom}</span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-16 pb-28">
        <div className="max-w-7xl mx-auto liquid-glass rounded-3xl p-10 md:p-16 text-center">
          <h2
            className="font-display text-4xl md:text-5xl font-light text-[var(--ivory)] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Found something you love?
          </h2>
          <p className="text-[var(--ivory-dim)] mb-8 max-w-xl mx-auto">
            Book a site visit and let an M PRO advisor walk you through the {meta.title.toLowerCase()} portfolio in person.
          </p>
          <ContactLink className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide">
            <span>Book a Site Visit</span>
            <span>→</span>
          </ContactLink>
        </div>
      </section>

      <Footer />
    </div>
  );
}
