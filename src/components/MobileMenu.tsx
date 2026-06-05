import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Projects', to: '/', scrollTo: 'projects' },
  { label: 'Residential', to: '/residential' },
  { label: 'Commercial', to: '/commercial' },
  { label: 'Industrial', to: '/industrial' },
  { label: 'SBP CSR', to: '/csr' },
  { label: 'Contact', to: '/', scrollTo: 'contact' },
];

export default function MobileMenu({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${
          dark
            ? 'border-white/15 text-[var(--ivory)]'
            : 'border-white/20 text-[var(--ivory)]'
        }`}
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] bg-[var(--bg)]/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="font-display text-3xl tracking-tight text-[var(--ivory)]">SBP</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-[var(--ivory)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <Link
                    to={l.to}
                    state={l.scrollTo ? { scrollTo: l.scrollTo } : undefined}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-[var(--ivory)] hover:text-[var(--gold-soft)] transition-colors py-2 block"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-8 pb-10">
              <a
                href="tel:9316004242"
                className="btn-gold w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium tracking-wide"
              >
                <span>Call +91 93160 04242</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
