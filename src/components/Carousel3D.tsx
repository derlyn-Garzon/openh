import { useCallback, useEffect, useState, type KeyboardEvent } from 'react';
import { modules, type Module } from '../data/content.ts';
import { ModuleArt } from './ModuleCard.tsx';
import { CategoryTag } from './ui.tsx';

const AUTOPLAY_MS = 6000;
/** Cuántas tarjetas se muestran a cada lado de la activa. */
const VISIBLE = 2;

interface DeckCardProps {
  module: Module;
  offset: number;
  active: boolean;
  onSelect: () => void;
}

function DeckCard({ module, offset, active, onSelect }: DeckCardProps) {
  const distance = Math.abs(offset);
  const hidden = distance > VISIBLE;

  const transform = [
    `translateX(${offset * 58}%)`,
    `translateZ(${-distance * 150}px)`,
    `rotateY(${-offset * 20}deg)`,
    `scale(${1 - distance * 0.07})`,
  ].join(' ');

  return (
    <li
      aria-hidden={!active}
      className="card-3d absolute top-0 left-1/2 w-[80%] max-w-sm sm:w-[62%]"
      style={{
        transform: `translateX(-50%) ${transform}`,
        opacity: hidden ? 0 : 1,
        filter: active ? 'none' : 'saturate(0.75)',
        zIndex: 10 - distance,
        pointerEvents: hidden ? 'none' : 'auto',
      }}
    >
      <article className="flex flex-col rounded-card border border-line bg-surface p-4 shadow-lift">
        <CategoryTag>{module.tag}</CategoryTag>

        <div className="mt-3">
          <ModuleArt module={module} aspect="story" compact={!active} />
        </div>

        <p className="mt-4 text-xs text-muted">
          {module.date} · {module.duration}
        </p>

        <h3 className="mt-2 font-display text-xl leading-snug font-bold text-ink">
          {module.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {module.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
          <span className="truncate text-xs text-muted">{module.author}</span>
          <button
            type="button"
            onClick={onSelect}
            className="shrink-0 rounded-pill bg-lilac-100 px-4 py-2 text-xs font-semibold text-violet-700 transition-all duration-200 hover:bg-violet-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
          >
            Ver Módulo →
          </button>
        </div>
      </article>
    </li>
  );
}

export function Carousel3D() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const total = modules.length;

  const go = useCallback(
    (delta: number) => setIndex((prev) => (prev + delta + total) % total),
    [total],
  );

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [playing, go, index]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>): void {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      go(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      go(-1);
    }
  }

  const activeModule = modules[index];

  return (
    <section id="carrusel" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Historias que <span className="text-gradient">sostienen</span> el aprendizaje
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Desliza por los módulos como si recorrieras un archivo vivo de saberes colectivos.
          </p>
        </div>

        <div
          role="group"
          aria-roledescription="carrusel"
          aria-label="Módulos destacados"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="stage relative mt-12 rounded-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600"
        >
          <ul className="deck relative mx-auto h-[34rem] list-none sm:h-[32rem]">
            {modules.map((module, i) => {
              // Distancia circular: permite que la última quede junto a la primera.
              let offset = i - index;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              return (
                <DeckCard
                  key={module.id}
                  module={module}
                  offset={offset}
                  active={offset === 0}
                  onSelect={() => setIndex(i)}
                />
              );
            })}
          </ul>

          {/* Flechas laterales */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Módulo anterior"
            className="absolute top-1/2 left-1 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-pill border border-line bg-surface/90 text-ink shadow-soft backdrop-blur transition-all duration-200 hover:-translate-x-0.5 hover:border-lilac-300 hover:text-violet-600 sm:left-4"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Módulo siguiente"
            className="absolute top-1/2 right-1 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-pill border border-line bg-surface/90 text-ink shadow-soft backdrop-blur transition-all duration-200 hover:translate-x-0.5 hover:border-lilac-300 hover:text-violet-600 sm:right-4"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Controles inferiores */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? 'Pausar recorrido automático' : 'Reanudar recorrido automático'}
            className="grid h-10 w-10 place-items-center rounded-pill bg-gradient-to-br from-violet-600 to-rose-500 text-sm text-white shadow-soft transition-transform duration-200 hover:scale-105"
          >
            <span aria-hidden="true">{playing ? '❙❙' : '▶'}</span>
          </button>

          <ul className="flex items-center gap-2">
            {modules.map((module, i) => (
              <li key={module.id}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ir al módulo ${i + 1}: ${module.title}`}
                  aria-current={i === index}
                  className="relative h-2 overflow-hidden rounded-pill bg-line transition-all duration-300"
                  style={{ width: i === index ? '2.5rem' : '0.5rem' }}
                >
                  {i === index && (
                    <span
                      key={`${index}-${playing}`}
                      className="progress-fill absolute inset-0 rounded-pill bg-gradient-to-r from-violet-600 to-rose-500"
                      style={{
                        animationDuration: `${AUTOPLAY_MS}ms`,
                        animationPlayState: playing ? 'running' : 'paused',
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <span className="w-10 text-xs text-muted tabular-nums">
            {index + 1}/{total}
          </span>
        </div>

        {/* Texto alternativo para lectores de pantalla */}
        <p className="sr-only" aria-live="polite">
          {activeModule
            ? `Módulo ${index + 1} de ${total}: ${activeModule.title}, por ${activeModule.author}`
            : ''}
        </p>
      </div>
    </section>
  );
}
