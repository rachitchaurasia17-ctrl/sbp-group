import { useEffect, useRef, useState } from 'react';

interface Props {
  onDone: () => void;
}

const DEPTH = 2600; // px — length of the room
const DURATION = 3400; // ms of flight
const PHRASE = 'M PRO · '; // short word tiles cleanly and reads big
const ROWS = 6; // text rows per surface
const REPEAT = 7; // phrase repeats per row

function Rows() {
  const line = PHRASE.repeat(REPEAT);
  return (
    <div className="t-rows">
      {Array.from({ length: ROWS }).map((_, i) => (
        <div className="t-row" key={i}>
          {line}
        </div>
      ))}
    </div>
  );
}

/**
 * Single deep room (floor / ceiling / left / right) tiled with gold
 * typography. The camera flies straight through toward the vanishing
 * point, then the whole overlay dissolves smoothly into the homepage.
 *  - one rAF transform write per frame (smooth, GPU-composited)
 *  - wall-clock fallback so a backgrounded tab can never block the site
 */
export default function IntroTunnel({ onDone }: Props) {
  const roomRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<'fly' | 'out' | 'gone'>('fly');

  useEffect(() => {
    let raf = 0;
    let finished = false;
    const start = performance.now();

    // Room is centred at z=0 spanning ±DEPTH/2. Start with the whole room
    // ahead (camera at the front opening) and fly through to past the back,
    // so the four walls fill the screen the entire time.
    const FROM = -DEPTH / 2;
    const TO = DEPTH / 2 + 300;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const finish = () => {
      if (finished) return;
      finished = true;
      setPhase('out');
      setTimeout(() => {
        setPhase('gone');
        onDone();
      }, 950);
    };

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      const z = FROM + (TO - FROM) * easeInOutCubic(t);
      const roll = t * 2.5; // subtle cinematic roll
      if (roomRef.current) {
        roomRef.current.style.transform = `translate3d(0,0,${z}px) rotateZ(${roll}deg)`;
      }
      if (t < 1) raf = requestAnimationFrame(tick);
      else finish();
    };
    raf = requestAnimationFrame(tick);

    // Safety net: rAF is paused in background tabs.
    const fallback = window.setTimeout(finish, DURATION + 600);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, [onDone]);

  if (phase === 'gone') return null;

  return (
    <div className={`intro-tunnel ${phase === 'out' ? 'intro-fade' : ''}`}>
      <div className="intro-stage">
        <div
          className="intro-room"
          ref={roomRef}
          style={{ ['--d' as string]: `${DEPTH}px` }}
        >
          <div className="face face-top"><Rows /></div>
          <div className="face face-bottom"><Rows /></div>
          <div className="face face-left"><Rows /></div>
          <div className="face face-right"><Rows /></div>
        </div>
      </div>

      {/* gentle vanishing-point glow */}
      <div className="intro-core" />
      {/* edge focus */}
      <div className="intro-vignette" />

      {/* logo + tagline reveal */}
      <div className="intro-center">
        <div className="intro-logo">M PRO</div>
        <div className="intro-rule" />
        <div className="intro-sub">Passion · Perfection · Prosperity</div>
      </div>
    </div>
  );
}
