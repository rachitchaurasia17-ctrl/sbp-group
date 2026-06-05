import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SiteNav from '../components/SiteNav';
import Footer from '../components/Footer';
import ContactLink from '../components/ContactLink';

const PILLARS = [
  {
    title: 'Education',
    desc: 'Scholarships, school infrastructure and digital classrooms that put opportunity within reach of every child in our communities.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2400&auto=format&fit=crop',
  },
  {
    title: 'Healthcare',
    desc: 'Free medical camps, diagnostic drives and support for local clinics — bringing quality care closer to those who need it.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2400&auto=format&fit=crop',
  },
  {
    title: 'Skill & Livelihood',
    desc: 'Vocational training and women-led entrepreneurship programmes that build dignified, lasting livelihoods.',
    img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2400&auto=format&fit=crop',
  },
  {
    title: 'Environment',
    desc: 'Tree plantation drives, water conservation and green public spaces woven into every community we touch.',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2400&auto=format&fit=crop',
  },
];

const STATS = [
  { n: '50K+', l: 'Lives Impacted' },
  { n: '120+', l: 'Initiatives Run' },
  { n: '15', l: 'Years Giving Back' },
  { n: '6', l: 'States Reached' },
];

export default function CSRPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="relative h-[75vh] min-h-[540px] overflow-hidden flex items-end">
        <motion.img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2400&auto=format&fit=crop"
          alt="SBP CSR"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
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
              <div className="flex items-center gap-3 mb-5 text-[var(--gold-soft)]">
                <Link to="/" className="text-xs tracking-wide hover:text-[var(--ivory)] transition-colors">Home</Link>
                <span className="opacity-50">/</span>
                <span className="text-xs tracking-wide">SBP CSR</span>
              </div>
              <div className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)] mb-4">
                Corporate Social Responsibility
              </div>
              <h1
                className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-[var(--ivory)] leading-[0.95]"
                style={{ letterSpacing: '-0.04em' }}
              >
                Building homes.
                <br />
                <span className="italic text-[var(--gold-soft)]">Building communities.</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 mb-8">
            <span className="w-8 h-px bg-[var(--gold)]" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)]">Our Commitment</span>
            <span className="w-8 h-px bg-[var(--gold)]" />
          </div>
          <p className="font-display text-2xl md:text-4xl font-light text-[var(--ivory)] leading-[1.3]" style={{ letterSpacing: '-0.02em' }}>
            For SBP, every key handed over funds a wider promise. We invest back into the communities we build in — through
            <span className="italic text-[var(--gold-soft)]"> education, healthcare, livelihood and a greener tomorrow.</span>
          </p>
        </div>
      </section>

      {/* Impact stats */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="gold-line mb-12" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="font-display text-5xl md:text-7xl text-[var(--gold-soft)] mb-2 leading-none" style={{ letterSpacing: '-0.04em' }}>
                  {s.n}
                </div>
                <div className="text-sm text-[var(--ivory-dim)]">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)]">Focus Areas</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[var(--ivory)]" style={{ letterSpacing: '-0.03em' }}>
              Four ways we give back.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10]"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-display text-3xl md:text-4xl text-[var(--ivory)] mb-3" style={{ letterSpacing: '-0.02em' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--ivory-dim)] max-w-md leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-16 pb-28">
        <div className="max-w-7xl mx-auto liquid-glass rounded-3xl p-10 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-[var(--ivory)] mb-4" style={{ letterSpacing: '-0.03em' }}>
            Partner with us on purpose.
          </h2>
          <p className="text-[var(--ivory-dim)] mb-8 max-w-xl mx-auto">
            Organisations and individuals who want to collaborate on an SBP CSR initiative are always welcome.
          </p>
          <ContactLink className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide">
            <span>Get in Touch</span>
            <span>→</span>
          </ContactLink>
        </div>
      </section>

      <Footer />
    </div>
  );
}
