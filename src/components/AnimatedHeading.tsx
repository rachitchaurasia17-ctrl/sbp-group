import { useEffect, useState, type CSSProperties } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  initialDelay?: number;
  charDelay?: number;
}

export default function AnimatedHeading({
  text,
  className = '',
  style,
  initialDelay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');

  // Count total chars before this line for stagger delay
  let globalCharIndex = 0;

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        // Split line into words, preserving spaces between them
        const tokens = line.split(/(\s+)/);

        return (
          <span key={lineIndex} style={{ display: 'block' }}>
            {tokens.map((token, tokenIndex) => {
              if (/^\s+$/.test(token)) {
                // Space token — render as non-breaking space, still animated
                const delay = globalCharIndex * charDelay;
                globalCharIndex += token.length;
                return (
                  <span
                    key={tokenIndex}
                    style={{
                      display: 'inline-block',
                      opacity: animated ? 1 : 0,
                      transition: `opacity 500ms`,
                      transitionDelay: `${delay}ms`,
                    }}
                  >
                    {' '.repeat(token.length)}
                  </span>
                );
              }

              // Word token — wrap in whitespace-nowrap so chars don't break mid-word
              const wordStartIndex = globalCharIndex;
              globalCharIndex += token.length;

              return (
                <span key={tokenIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                  {token.split('').map((char, charIndex) => {
                    const delay = (wordStartIndex + charIndex) * charDelay;
                    return (
                      <span
                        key={charIndex}
                        style={{
                          display: 'inline-block',
                          opacity: animated ? 1 : 0,
                          transform: animated ? 'translateX(0)' : 'translateX(-18px)',
                          transition: `opacity 500ms, transform 500ms`,
                          transitionDelay: `${delay}ms`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
