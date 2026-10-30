import { useMemo } from 'react';

const CONFETTI_COLORS = [
  '#ff5fa8',
  '#ffb703',
  '#10b981',
  '#7cc4fb',
  '#7c4dff',
  '#ff7a55',
] as const;

interface ConfettiProps {
  /** Número de piezas. Conviene bajarlo en móvil. */
  count?: number;
  className?: string;
}

/** Lluvia de confeti decorativa; puramente ornamental. */
export function Confetti({ count = 26, className = '' }: ConfettiProps) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const size = 6 + Math.round(Math.random() * 8);
        return {
          id: i,
          left: Math.round(Math.random() * 100),
          delay: Math.round(Math.random() * 90) / 10,
          duration: 7 + Math.round(Math.random() * 7),
          drift: Math.round((Math.random() - 0.5) * 180),
          width: size,
          height: size + Math.round(Math.random() * 6),
          color: CONFETTI_COLORS[i % CONFETTI_COLORS.length] ?? '#ff5fa8',
        };
      }),
    [count],
  );

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            width: piece.width,
            height: piece.height,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            ['--drift' as string]: `${piece.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

/** Guirnalda de banderines colgada de un borde. */
export function Bunting({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`bunting h-2.5 w-full ${className}`} />;
}

interface BulbRowProps {
  count?: number;
  className?: string;
}

/** Fila de bombillas de marquesina, con parpadeo escalonado. */
export function BulbRow({ count = 14, className = '' }: BulbRowProps) {
  return (
    <ul
      aria-hidden="true"
      className={`flex items-center justify-center gap-3 ${className}`}
    >
      {Array.from({ length: count }, (_, i) => (
        <li
          key={i}
          className={`bulb bulb-blink h-2.5 w-2.5 rounded-pill ${
            i % 3 === 0 ? 'bg-sun-300 text-sun-300' : i % 3 === 1 ? 'bg-bubble-500 text-bubble-500' : 'bg-sky-300 text-sky-300'
          }`}
          style={{ animationDelay: `${(i % 6) * 0.22}s` }}
        />
      ))}
    </ul>
  );
}

/** Noria decorativa que gira lentamente. */
export function FerrisWheel({ className = '' }: { className?: string }) {
  const spokes = Array.from({ length: 10 }, (_, i) => i * 36);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={`bob ${className}`}
      fill="none"
      strokeLinecap="round"
    >
      <g className="wheel-spin">
        <circle cx="100" cy="100" r="72" stroke="#ff5fa8" strokeWidth="4" />
        <circle cx="100" cy="100" r="54" stroke="#ffb703" strokeWidth="3" />
        {spokes.map((angle) => (
          <line
            key={angle}
            x1="100"
            y1="100"
            x2={100 + 72 * Math.cos((angle * Math.PI) / 180)}
            y2={100 + 72 * Math.sin((angle * Math.PI) / 180)}
            stroke="#7cc4fb"
            strokeWidth="2.5"
          />
        ))}
        {spokes.map((angle, i) => (
          <circle
            key={`c${angle}`}
            cx={100 + 72 * Math.cos((angle * Math.PI) / 180)}
            cy={100 + 72 * Math.sin((angle * Math.PI) / 180)}
            r="9"
            fill={['#ffb703', '#10b981', '#7c4dff', '#ff7a55', '#2f9fe8'][i % 5]}
          />
        ))}
      </g>
      <circle cx="100" cy="100" r="10" fill="#ff5fa8" />
      <path d="M100 172 L78 196 M100 172 L122 196" stroke="#7c4dff" strokeWidth="4" />
    </svg>
  );
}
