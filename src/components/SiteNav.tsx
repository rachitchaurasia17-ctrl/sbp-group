import { Link } from 'react-router-dom';
import ContactLink from './ContactLink';
import MobileMenu from './MobileMenu';

const LINKS: { label: string; to: string }[] = [
  { label: 'Residential', to: '/residential' },
  { label: 'Commercial', to: '/commercial' },
  { label: 'Industrial', to: '/industrial' },
  { label: 'SBP CSR', to: '/csr' },
];

/**
 * Solid navbar used on interior pages. The home hero has its own
 * transparent nav.
 */
export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 liquid-glass border-b border-white/10">
      <div className="px-6 md:px-12 lg:px-16">
        <nav className="flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="font-display text-3xl tracking-tight text-[var(--ivory)]">SBP</span>
            <span className="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] border-l border-white/15 pl-2.5">
              Group
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="link-underline text-sm tracking-wide text-[var(--ivory)]/85 hover:text-[var(--ivory)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ContactLink className="hidden sm:inline-flex btn-gold px-5 md:px-7 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide items-center gap-2">
              <span>Get in Touch</span>
              <span className="text-base leading-none">→</span>
            </ContactLink>
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}
