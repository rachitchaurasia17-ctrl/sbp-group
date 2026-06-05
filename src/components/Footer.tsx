import { Link } from 'react-router-dom';
import ContactLink from './ContactLink';

type NavItem = { label: string; to?: string };

const NAV: Record<string, NavItem[]> = {
  Portfolio: [
    { label: 'Residential', to: '/residential' },
    { label: 'Commercial', to: '/commercial' },
    { label: 'Industrial', to: '/industrial' },
    { label: 'SBP CSR', to: '/csr' },
  ],
  Company: [
    { label: 'About' },
    { label: 'Group Directors' },
    { label: 'Careers' },
    { label: 'NRI Corner' },
  ],
  Resources: [
    { label: 'Blog' },
    { label: 'Media Centre' },
    { label: 'Press Kit' },
    { label: 'Newsletter' },
  ],
  Support: [
    { label: 'Contact', to: '__contact' },
    { label: 'Site Visits', to: '__contact' },
    { label: 'RERA Info' },
    { label: 'Sitemap' },
  ],
};

const SOCIALS = ['Instagram', 'YouTube', 'LinkedIn', 'X', 'Facebook'];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg)] border-t border-white/10 overflow-hidden">
      {/* Massive brand watermark */}
      <div className="px-6 md:px-12 lg:px-16 pt-24 pb-10 select-none">
        <div className="max-w-7xl mx-auto">
          <div className="gold-line mb-12" />
          <h2
            className="font-display text-[20vw] md:text-[16vw] font-light leading-[0.82] tracking-tight"
            style={{
              letterSpacing: '-0.05em',
              background: 'linear-gradient(180deg, rgba(245,239,228,0.08) 0%, rgba(201,161,74,0.03) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            SBP Group
          </h2>
          <div className="font-display italic text-xl md:text-2xl text-[var(--gold-soft)] mt-4">
            Built on Trust. Proven by Delivery.
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-16 pb-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="font-display text-3xl text-[var(--ivory)]">SBP</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] border-l border-white/15 pl-2.5">
                Group
              </span>
            </div>
            <p className="text-sm text-[var(--muted)] mt-5 max-w-xs leading-relaxed">
              Punjab's No.1 housing brand. Eighteen years of crafting landmark addresses across the Tricity.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-3 py-1.5 rounded-full border border-white/15 text-[10px] tracking-[0.2em] uppercase text-[var(--ivory-dim)] hover:border-[var(--gold)] hover:text-[var(--gold-soft)] transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(NAV).map(([section, items]) => (
            <div key={section}>
              <div className="text-[10px] tracking-[0.3em] text-[var(--gold-soft)] uppercase mb-5">{section}</div>
              <ul className="space-y-2.5">
                {items.map((item) => {
                  const cls =
                    'link-underline text-sm text-[var(--ivory-dim)] hover:text-[var(--ivory)] transition-colors';
                  return (
                    <li key={item.label}>
                      {item.to === '__contact' ? (
                        <ContactLink className={cls}>{item.label}</ContactLink>
                      ) : item.to ? (
                        <Link to={item.to} className={cls}>
                          {item.label}
                        </Link>
                      ) : (
                        <a href="#" className={cls}>
                          {item.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <div>© {new Date().getFullYear()} SBP Group. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-[var(--gold-soft)] transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-[var(--gold-soft)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--gold-soft)] transition-colors">Cookies</a>
            <a href="#" className="hover:text-[var(--gold-soft)] transition-colors">RERA Registrations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
