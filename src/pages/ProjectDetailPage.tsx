import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SiteNav from '../components/SiteNav';
import Footer from '../components/Footer';
import ContactLink from '../components/ContactLink';
import { getProject, byCategory, CATEGORY_META } from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const related = byCategory(project.category)
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);
  const meta = CATEGORY_META[project.category];

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <SiteNav />

      {/* Cinematic hero */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden flex items-end">
        <motion.img
          src={project.cover}
          alt={project.name}
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/45 to-black/40" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-14 md:pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-5 text-[var(--gold-soft)] flex-wrap">
                <Link to="/" className="text-xs tracking-wide hover:text-[var(--ivory)] transition-colors">Home</Link>
                <span className="opacity-50">/</span>
                <Link to={`/${project.category}`} className="text-xs tracking-wide hover:text-[var(--ivory)] transition-colors">{meta.title}</Link>
                <span className="opacity-50">/</span>
                <span className="text-xs tracking-wide text-[var(--ivory-dim)]">{project.name}</span>
              </div>

              <div className="flex flex-wrap gap-3 mb-5">
                <span className="liquid-glass px-3 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase text-[var(--gold-soft)]">
                  {project.badge}
                </span>
                <span className="liquid-glass px-3 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase text-[var(--ivory)]/80">
                  {project.status}
                </span>
              </div>

              <h1
                className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-[var(--ivory)] leading-[0.92]"
                style={{ letterSpacing: '-0.04em' }}
              >
                {project.name}
              </h1>
              <p className="font-display italic text-xl md:text-2xl text-[var(--gold-soft)] mt-4">
                {project.tagline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key facts bar */}
      <section className="px-6 md:px-12 lg:px-16 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="liquid-glass rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {project.specs.map((s) => (
              <div key={s.label} className="p-5 md:p-7">
                <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold-soft)] mb-2">{s.label}</div>
                <div className="text-sm md:text-base text-[var(--ivory)] font-medium">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview + highlights */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)]">Overview</span>
            </div>
            <h2
              className="font-display text-3xl md:text-5xl font-light text-[var(--ivory)] leading-tight mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              {project.tagline}
            </h2>
            <p className="text-base md:text-lg text-[var(--ivory-dim)] leading-relaxed">
              {project.overview}
            </p>

            {project.rera && (
              <div className="mt-8 text-xs text-[var(--muted)]">
                <span className="tracking-[0.25em] uppercase">RERA</span> · {project.rera}
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="liquid-glass rounded-2xl p-8">
              <div className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)] mb-6">Highlights</div>
              <ul className="space-y-4">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                    <span className="text-[var(--ivory-dim)]">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 mb-8">
            <span className="w-8 h-px bg-[var(--gold)]" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)]">Gallery</span>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden project-card-shadow mb-4">
            {project.gallery.map((g, i) => (
              <motion.img
                key={g + i}
                src={g}
                alt={`${project.name} ${i + 1}`}
                initial={false}
                animate={{ opacity: activeImg === i ? 1 : 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ))}
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
            {project.gallery.map((g, i) => (
              <button
                key={g + i}
                onClick={() => setActiveImg(i)}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all duration-300 ${
                  activeImg === i ? 'border-[var(--gold)]' : 'border-white/10 hover:border-white/30'
                }`}
              >
                <img src={g} alt="" className="w-full h-full object-cover" />
                {activeImg !== i && <div className="absolute inset-0 bg-black/40" />}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 mb-10">
            <span className="w-8 h-px bg-[var(--gold)]" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)]">Amenities</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {project.amenities.map((a) => (
              <div key={a} className="bg-[var(--bg)] p-6 md:p-7 hover:bg-[var(--bg-elev)] transition-colors duration-500">
                <span className="text-sm text-[var(--ivory-dim)] leading-snug">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto liquid-glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(201,161,74,0.1) 0%, transparent 70%)' }}
          />
          <div className="relative">
            <h2
              className="font-display text-4xl md:text-6xl font-light text-[var(--ivory)] mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              Visit {project.name}
            </h2>
            <p className="text-[var(--ivory-dim)] mb-8 max-w-xl mx-auto">
              Schedule a guided site visit or request a callback — our team responds within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ContactLink className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide">
                <span>Book a Site Visit</span>
                <span>→</span>
              </ContactLink>
              <a href="tel:9316004242" className="btn-ghost inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide">
                Call +91 93160 04242
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 md:px-12 lg:px-16 pb-28">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--ivory)]" style={{ letterSpacing: '-0.02em' }}>
                More {meta.title}
              </h2>
              <Link to={`/${project.category}`} className="link-underline text-sm text-[var(--gold-soft)]">
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/project/${p.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--gold)]/50 transition-all duration-500"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img src={p.cover} alt={p.name} className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="font-display text-2xl text-[var(--ivory)] leading-none">{p.name}</h3>
                      <p className="text-xs text-[var(--ivory-dim)] mt-1">{p.location}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
