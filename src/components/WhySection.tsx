import { motion } from 'framer-motion';
import { Shield, Award, Clock, Sparkles, Users, Leaf } from 'lucide-react';

const FEATURES = [
  { icon: Shield, t: 'RERA Compliant', d: 'Every engagement registered, every promise documented.' },
  { icon: Clock, t: 'On-Time Delivery', d: 'Disciplined execution and transparent timelines — no surprises.' },
  { icon: Award, t: 'Global Standards', d: 'Luxury expertise drawn from Miami, Kuala Lumpur and Frankfurt.' },
  { icon: Sparkles, t: 'Premium by Design', d: 'Considered finishes, amenities and craftsmanship as standard.' },
  { icon: Users, t: 'Client-First, Always', d: 'Tailored solutions and lasting, impactful relationships.' },
  { icon: Leaf, t: 'Research-Driven', d: 'Every decision backed by deep, current market insight.' },
];

const FEATURE_IMG =
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop';

export default function WhySection() {
  return (
    <section className="relative bg-[var(--bg)] border-t border-[var(--line)] py-20 md:py-28 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Animated aurora colour field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="aurora-blob absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(224,35,39,0.30) 0%, transparent 70%)' }}
        />
        <div
          className="aurora-blob alt absolute top-1/3 -right-32 w-[560px] h-[560px] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(255,90,50,0.22) 0%, transparent 70%)' }}
        />
        <div
          className="aurora-blob absolute -bottom-40 left-1/3 w-[480px] h-[480px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(224,35,143,0.16) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* LEFT — heading + featured image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 lg:sticky lg:top-24"
        >
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-8 h-px bg-[var(--gold)]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-soft)]">Why M PRO</span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-[var(--ivory)]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Six reasons clients
            <span className="italic text-[var(--gold-soft)]"> choose M PRO.</span>
          </h2>
          <p className="text-base text-[var(--ivory-dim)] leading-relaxed mt-5 max-w-md">
            Global standards, local mastery and a zero-compromise ethic — the difference shows in
            everything we touch.
          </p>

          {/* Featured image with rotating multi-colour glow ring */}
          <div className="relative mt-9">
            <div
              className="spin-ring absolute -inset-6 rounded-[2rem] blur-2xl opacity-60 pointer-events-none"
              style={{
                background:
                  'conic-gradient(from 0deg, #e02327, #ff7a3d, #b91d1a, #e0238f, #e02327)',
              }}
            />
            <div className="relative rounded-[1.6rem] overflow-hidden ring-1 ring-white/12 shadow-2xl">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={FEATURE_IMG}
                  alt="M PRO architecture"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-105"
                />
              </div>
              {/* brand red duotone wash */}
              <div
                className="absolute inset-0 mix-blend-multiply pointer-events-none"
                style={{ background: 'linear-gradient(160deg, rgba(224,35,39,0.45) 0%, transparent 55%, rgba(108,22,20,0.55) 100%)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-5 bottom-5">
                <div className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)]">Punjab · Since 2021</div>
                <div className="font-display text-xl text-white leading-none mt-1">Built to a higher standard</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — reasons */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 + Math.floor(i / 2) * 0.06 }}
              className="reason-row group rounded-2xl p-7 md:p-8 border border-[rgba(224,35,39,0.18)] transition-all duration-500 hover:border-[rgba(224,35,39,0.55)] hover:-translate-y-1.5"
              style={{
                background:
                  'linear-gradient(155deg, rgba(36,16,16,0.55) 0%, rgba(22,12,12,0.6) 55%, rgba(14,10,10,0.66) 100%)',
              }}
            >
              <span className="reason-sheen" />
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center border border-[rgba(224,35,39,0.35)] bg-[rgba(224,35,39,0.10)] group-hover:bg-[rgba(224,35,39,0.18)] transition-colors">
                  <f.icon
                    className="w-5 h-5 text-[var(--gold-soft)] group-hover:scale-110 transition-transform duration-500"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-2xl md:text-[1.7rem] font-light text-[var(--ivory)]" style={{ letterSpacing: '-0.02em' }}>
                      {f.t}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mt-1.5">{f.d}</p>
                </div>
              </div>
              <span className="pointer-events-none select-none absolute top-4 right-5 font-display text-sm text-[rgba(244,86,75,0.5)]">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
