import { motion } from 'framer-motion';

interface Founder {
  name: string;
  role: string;
  index: string;
  photo: string;
  tags: string[];
  bio: string[];
  quote: string;
}

const FOUNDERS: Founder[] = [
  {
    name: 'Inderjit Aulakh',
    role: 'Founder',
    index: '01',
    photo: '/founders/inderjit-kaur.jpg',
    tags: ['Luxury & UHNW', 'Miami · KL · Frankfurt', 'EB-5 Specialist'],
    quote: 'Zero compromise. Research first. Client always.',
    bio: [
      'Ms. Inderjit Aulakh began her career as a management trainee with one of Punjab’s most prominent real estate conglomerates, learning large-scale development from the ground up. Her path carried her across Delhi-NCR and Gurugram, where she sharpened a rare command of legal compliance, retail leasing and high-value residential sales.',
      'In 2014 she took her practice global — joining a European design studio to shape luxury real estate for ultra-high-net-worth clients across Miami, Kuala Lumpur and Frankfurt, before advising investors in the United States on the EB-5 Immigrant Investor Program. She returned to India in 2020 to found M PRO, driven by zero-compromise principles and a deep commitment to championing women and young talent across the industry.',
    ],
  },
  {
    name: 'Jatinder Singh',
    role: 'Co-Founder',
    index: '02',
    photo: '/founders/jatinder-singh.jpg',
    tags: ['Founded M PRO · 2021', 'Township Marketing', 'Tricity Developer'],
    quote: 'A new era of progressive prosperity — for every stakeholder.',
    bio: [
      'Mr. Jatinder Singh’s journey is defined by discipline and relentless momentum. He began at just nineteen as a solutions implementation advisor in international business processing, balancing demanding work with an exemplary academic record before entering real estate with a leading American advisory firm in Punjab.',
      'He mastered franchisee development and exclusive project marketing, then moved into marketing operations for township developments and joined one of the largest developers in the Chandigarh tricity — where record-breaking results made him one of the region’s most sought-after sales minds. In 2021 he co-founded M PRO to reimagine a fragmented sector and usher in a new era of progressive prosperity.',
    ],
  },
];

function FounderBlock({ f, flip }: { f: Founder; flip: boolean }) {
  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, x: flip ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}
      >
        <div className="group relative">
          {/* offset red glow panel */}
          <div
            className={`absolute -inset-3 md:-inset-4 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none ${
              flip ? 'bg-gradient-to-bl' : 'bg-gradient-to-br'
            }`}
            style={{ background: 'radial-gradient(60% 60% at 50% 30%, rgba(224,35,39,0.35) 0%, transparent 70%)' }}
          />
          {/* solid accent corner */}
          <div
            className={`absolute -z-0 ${flip ? '-right-4 -bottom-4' : '-left-4 -bottom-4'} w-28 h-28 rounded-2xl`}
            style={{ background: 'linear-gradient(135deg, var(--gold) 0%, var(--champagne) 100%)', opacity: 0.9 }}
          />
          <div className="relative rounded-[1.6rem] overflow-hidden ring-1 ring-white/12 shadow-2xl">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={f.photo}
                alt={`${f.role} ${f.name}`}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
              />
            </div>
            {/* bottom scrim + nameplate */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute left-5 right-5 bottom-5">
              <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-soft)] mb-1">{f.role}</div>
              <div className="font-display text-2xl md:text-3xl text-white leading-none" style={{ letterSpacing: '-0.02em' }}>
                {f.name}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className={`lg:col-span-7 relative ${flip ? 'lg:order-1' : ''}`}
      >
        {/* ghost index numeral */}
        <div
          className="pointer-events-none select-none absolute -top-10 md:-top-16 font-display leading-none text-[7rem] md:text-[10rem]"
          style={{
            [flip ? 'right' : 'left']: '-0.5rem',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(224,35,39,0.18)',
          } as React.CSSProperties}
        >
          {f.index}
        </div>

        <div className="relative">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-10 h-px bg-[var(--gold)]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-soft)]">{f.role} · M PRO</span>
          </div>

          <h3
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[var(--ivory)] leading-[1.02] mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            {f.name.split(' ')[0]}{' '}
            <span className="italic text-[var(--gold-soft)]">{f.name.split(' ').slice(1).join(' ')}</span>
          </h3>

          <div className="space-y-4 max-w-2xl">
            {f.bio.map((p, i) => (
              <p key={i} className="text-[15px] md:text-base text-[var(--ivory-dim)] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* pull quote */}
          <blockquote className="mt-7 pl-5 border-l-2 border-[var(--gold)] font-display italic text-xl md:text-2xl text-[var(--ivory)]">
            “{f.quote}”
          </blockquote>

          {/* highlight chips */}
          <div className="flex flex-wrap gap-2.5 mt-7">
            {f.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] tracking-wide text-[var(--gold-soft)] border border-[rgba(224,35,39,0.35)] rounded-full px-4 py-1.5 bg-[rgba(224,35,39,0.06)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function FoundersSection() {
  return (
    <section
      id="founders"
      className="relative bg-[var(--bg)] border-t border-[var(--line)] overflow-hidden py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-16"
    >
      {/* ambient red glows */}
      <div
        className="absolute top-24 -left-40 w-[620px] h-[620px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(224,35,39,0.10) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 -right-40 w-[560px] h-[560px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(224,35,39,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-8 h-px bg-[var(--gold)]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold-soft)]">Leadership</span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.04] text-[var(--ivory)]"
            style={{ letterSpacing: '-0.03em' }}
          >
            The minds redefining
            <span className="italic text-[var(--gold-soft)]"> real estate.</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--ivory-dim)] leading-relaxed mt-6">
            M PRO was founded on a simple conviction — that real estate deserves professionalism,
            integrity and global standards. Meet the founders turning that conviction into landmarks.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {FOUNDERS.map((f, i) => (
            <FounderBlock key={f.name} f={f} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
