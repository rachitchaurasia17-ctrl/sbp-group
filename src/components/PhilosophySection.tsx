import { motion } from 'framer-motion';
import { Flame, Gem, TrendingUp } from 'lucide-react';

const PILLARS = [
  {
    icon: Flame,
    word: 'Passion',
    desc: 'We pursue every mandate with relentless energy and genuine care for the people it serves — because real estate is never just a transaction.',
  },
  {
    icon: Gem,
    word: 'Perfection',
    desc: 'Obsessive attention to detail, from the first market study to the final handover. Nothing leaves our hands until it is right.',
  },
  {
    icon: TrendingUp,
    word: 'Prosperity',
    desc: 'We build lasting value and impactful relationships — measured not only in returns, but in the trust of every client and stakeholder.',
  },
];

export default function PhilosophySection() {
  return (
    <section className="relative bg-[var(--bg-elev)] border-t border-[var(--line)] overflow-hidden py-20 md:py-28 px-6 md:px-12 lg:px-16">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(224,35,39,0.10) 0%, transparent 70%)' }}
      />
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-[var(--gold)]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-soft)]">Our Philosophy</span>
            <span className="w-8 h-px bg-[var(--gold)]" />
          </div>
          <h2
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.04] text-[var(--ivory)]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Passion. <span className="italic text-[var(--gold-soft)]">Perfection.</span> Prosperity.
          </h2>
          <p className="text-base md:text-lg text-[var(--ivory-dim)] leading-relaxed mt-6">
            Three words define everything we do — redefining real estate with professionalism,
            excellence, integrity, tailored solutions and lasting relationships.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative rounded-2xl p-8 md:p-10 border border-[rgba(224,35,39,0.18)] transition-all duration-500 hover:border-[rgba(224,35,39,0.5)] hover:-translate-y-1.5 text-center overflow-hidden"
              style={{
                background:
                  'linear-gradient(160deg, rgba(36,16,16,0.55) 0%, rgba(22,12,12,0.6) 55%, rgba(14,10,10,0.65) 100%)',
              }}
            >
              <span className="pointer-events-none select-none absolute -top-6 right-3 font-display text-[6rem] leading-none text-[rgba(224,35,39,0.08)]">
                0{i + 1}
              </span>
              <div className="relative mx-auto w-14 h-14 mb-6 rounded-full flex items-center justify-center border border-[rgba(224,35,39,0.35)] bg-[rgba(224,35,39,0.10)]">
                <p.icon className="w-6 h-6 text-[var(--gold-soft)] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-light mb-3 text-[var(--ivory)]" style={{ letterSpacing: '-0.02em' }}>
                {p.word}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
