import { motion } from 'framer-motion';
import { Shield, Award, Clock, Sparkles, Users, Leaf } from 'lucide-react';

const FEATURES = [
  { icon: Shield, t: 'RERA Certified', d: 'Every project registered, every promise documented.' },
  { icon: Clock, t: 'On-Time Possession', d: 'A delivery record built across 32 completed projects.' },
  { icon: Award, t: 'Award-Winning Designs', d: 'Recognised as Punjab\'s #1 housing brand for innovation.' },
  { icon: Sparkles, t: 'Premium Amenities', d: 'Rooftop pools, sports courts, fitness clubs as standard.' },
  { icon: Users, t: 'Family-First Communities', d: 'Spaces engineered for connection, not just occupancy.' },
  { icon: Leaf, t: 'Green by Default', d: 'Landscaped acres, sustainability woven into the plan.' },
];

export default function WhySection() {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Soft radial accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-white/50 uppercase">Why SBP</span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 max-w-3xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Six reasons families have trusted us
            <span className="text-white/40"> over 15,000 times.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="bg-black p-8 md:p-10 group hover:bg-white/[0.03] transition-colors duration-500"
            >
              <f.icon className="w-7 h-7 mb-6 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-medium mb-2" style={{ letterSpacing: '-0.02em' }}>
                {f.t}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
