import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-[var(--bg)] border-t border-[var(--line)] py-20 md:py-28 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Ambient gold glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,161,74,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-[var(--gold)]" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--gold-soft)]">
              Get in Touch
            </span>
            <span className="w-8 h-px bg-[var(--gold)]" />
          </div>
          <h2
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05]"
            style={{ letterSpacing: '-0.04em', color: 'var(--ivory)' }}
          >
            Let's find your
            <br />
            <span className="italic" style={{ color: 'var(--gold-soft)' }}>next address.</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--ivory-dim)] mt-8 max-w-xl mx-auto">
            Tell us a little about what you're looking for. Our team responds within 24 hours, no pressure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you. An M PRO advisor will reach out within 24 hours.');
            }}
            className="lg:col-span-3 liquid-glass rounded-2xl p-8 md:p-10 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] text-[var(--muted)] mb-2 tracking-[0.25em] uppercase">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-white/15 py-3 text-[var(--ivory)] placeholder-white/25 focus:border-[var(--gold)] outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-[10px] text-[var(--muted)] mb-2 tracking-[0.25em] uppercase">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-transparent border-b border-white/15 py-3 text-[var(--ivory)] placeholder-white/25 focus:border-[var(--gold)] outline-none transition-colors"
                  placeholder="+91"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-[var(--muted)] mb-2 tracking-[0.25em] uppercase">Email</label>
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-white/15 py-3 text-[var(--ivory)] placeholder-white/25 focus:border-[var(--gold)] outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-[10px] text-[var(--muted)] mb-2 tracking-[0.25em] uppercase">Interest</label>
              <select
                required
                defaultValue=""
                className="w-full bg-transparent border-b border-white/15 py-3 text-[var(--ivory)] outline-none focus:border-[var(--gold)]"
              >
                <option value="" disabled className="bg-[var(--bg)]">Select a portfolio</option>
                <option className="bg-[var(--bg)]">Residential</option>
                <option className="bg-[var(--bg)]">Commercial</option>
                <option className="bg-[var(--bg)]">Industrial</option>
                <option className="bg-[var(--bg)]">NRI Corner</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] text-[var(--muted)] mb-2 tracking-[0.25em] uppercase">Message</label>
              <textarea
                rows={3}
                className="w-full bg-transparent border-b border-white/15 py-3 text-[var(--ivory)] placeholder-white/25 focus:border-[var(--gold)] outline-none transition-colors resize-none"
                placeholder="Tell us what you're looking for"
              />
            </div>

            <button
              type="submit"
              className="btn-gold mt-4 inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide"
            >
              <span>Request a Callback</span>
              <span>→</span>
            </button>
          </motion.form>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 space-y-5"
          >
            <a
              href="tel:9316004242"
              className="block liquid-glass rounded-2xl p-7 hover:border-[var(--gold)] transition-all group"
            >
              <div className="text-[10px] text-[var(--gold-soft)] mb-2 uppercase tracking-[0.3em]">Call</div>
              <div className="font-display text-3xl md:text-4xl text-[var(--ivory)] group-hover:text-[var(--gold-soft)] transition-colors" style={{ letterSpacing: '-0.02em' }}>
                +91 93160 04242
              </div>
            </a>

            <a
              href="mailto:info@mprodevelopers.com"
              className="block liquid-glass rounded-2xl p-7 hover:border-[var(--gold)] transition-all group"
            >
              <div className="text-[10px] text-[var(--gold-soft)] mb-2 uppercase tracking-[0.3em]">Email</div>
              <div className="text-lg md:text-xl text-[var(--ivory)] group-hover:text-[var(--gold-soft)] transition-colors break-all">
                info@mprodevelopers.com
              </div>
            </a>

            <div className="liquid-glass rounded-2xl p-7">
              <div className="text-[10px] text-[var(--gold-soft)] mb-2 uppercase tracking-[0.3em]">Head Office</div>
              <div className="text-base text-[var(--ivory)] leading-relaxed">
                M PRO Developers Corporate Office
                <br />
                <span className="text-[var(--muted)]">Chandigarh · Mohali · Zirakpur</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
