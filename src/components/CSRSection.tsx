import { motion } from 'framer-motion';
import { ArrowUpRight, Heart } from 'lucide-react';

export default function CSRSection() {
  return (
    <section id="csr" className="relative bg-black text-white py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-white/10">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

          <div className="relative p-10 md:p-16 lg:p-20 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 mb-6">
                <Heart className="w-3.5 h-3.5" />
                <span className="text-xs tracking-widest uppercase">SBP CSR</span>
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light mb-6"
                style={{ letterSpacing: '-0.03em' }}
              >
                Building homes.
                <br />
                <span className="text-white/50">Building communities.</span>
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-8">
                From education and skill-building to healthcare and disaster relief — every key handed over funds a wider promise to the communities we work in.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 liquid-glass border border-white/20 px-7 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-200"
              >
                Discover the Initiative <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { n: '50K+', l: 'Lives impacted' },
                { n: '120+', l: 'Initiatives run' },
                { n: '15', l: 'Years giving back' },
                { n: '6', l: 'States reached' },
              ].map((s) => (
                <div key={s.l} className="liquid-glass border border-white/15 rounded-2xl p-6">
                  <div
                    className="text-3xl md:text-4xl font-light mb-1"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {s.n}
                  </div>
                  <div className="text-xs text-white/60 tracking-wide">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
