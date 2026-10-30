import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { modules, type Module } from '../data/content.ts';
import { BulbRow } from './Fairground.tsx';
import { CategoryTag } from './ui.tsx';

const AUTOPLAY_MS = 6000;

interface SlideCardProps {
  module: Module;
  active: boolean;
}

function SlideCard({ module, active }: SlideCardProps) {
  const [from, to] = module.art;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-card border bg-surface transition-all duration-300 ${
        active
          ? '-translate-y-1 border-bubble-300 shadow-lift'
          : 'border-line shadow-soft hover:-translate-y-1 hover:border-bubble-300'
      }`}
    >
      {/* Toldo de caseta */}
      <div aria-hidden="true" className="awning h-3 w-full" />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <CategoryTag>{module.tag}</CategoryTag>
          <span className="shrink-0 rounded-pill bg-sun-50 px-2.5 py-1 text-[0.65rem] font-semibold text-sun-600">
            {module.ride}
          </span>
        </div>

        {/* Portada ilustrada */}
        <div
          className="relative mt-4 h-48 w-full overflow-hidden rounded-card"
          style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
          role="img"
          aria-label={`Ilustración del módulo ${module.title}`}
        >
          <span aria-hidden="true" className="absolute inset-0 grid place-items-center text-6xl text-white/25">
            {module.glyph}
          </span>
          <span className="absolute bottom-3 left-3 rounded-pill bg-white/90 px-3 py-1 text-[0.65rem] font-semibold text-ink">
            {module.duration}
          </span>
          <button
            type="button"
            aria-label={`Reproducir ${module.title}`}
            className="absolute inset-0 grid place-items-center transition-transform duration-200 hover:scale-105"
          >
            <span className="grid h-14 w-14 place-items-center rounded-pill bg-white/95 text-lg text-bubble-600 shadow-lift">
              ▶
            </span>
          </button>
        </div>

        <p className="mt-4 text-xs text-muted">
          {module.date} · {module.author}
        </p>

        <h3 className="mt-2 font-display text-xl leading-snug font-bold text-ink">
          {module.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{module.description}</p>

        <a
          href={`#modulo-${module.id}`}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-pill bg-gradient-to-r from-grape-600 to-bubble-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape-600"
        >
          Subir al módulo
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </article>
  );
}

export function SlideCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const trackRef = useRef<HTMLUListElement>(null);
  const total = modules.length;

  /** Desplaza la pista hasta la diapositiva indicada. */
  const scrollToSlide = useCallback((target: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[target];
    if (!(slide instanceof HTMLElement)) return;

    // Centrado manual: scrollIntoView en horizontal también mueve la página.
    const left = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
    track.scrollTo({ left, behavior: 'smooth' });
  }, []);

  const go = useCallback(
    (delta: number) => {
      setIndex((prev) => {
        const next = (prev + delta + total) % total;
        scrollToSlide(next);
        return next;
      });
    },
    [scrollToSlide, total],
  );

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [playing, go, index]);

  // Mantiene los puntos sincronizados si se desliza con el dedo o el trackpad.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let min = Number.POSITIVE_INFINITY;

        for (let i = 0; i < track.children.length; i += 1) {
          const child = track.children[i];
          if (!(child instanceof HTMLElement)) continue;
          const childCenter = child.offsetLeft + child.clientWidth / 2;
          const distance = Math.abs(childCenter - center);
          if (distance < min) {
            min = distance;
            closest = i;
          }
        }
        setIndex((prev) => (prev === closest ? prev : closest));
      });
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

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
    <section id="carrusel" className="relative border-t border-line bg-surface">
      <BulbRow className="pt-8" count={16} />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-pill bg-sun-100 px-4 py-1.5 text-xs font-semibold text-sun-600">
            🎡 La feria de los saberes
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Súbete a cada <span className="text-gradient">atracción</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Desliza, toca o deja que gire solo. Cada módulo es una parada distinta de la feria.
          </p>
        </div>

        <div
          role="group"
          aria-roledescription="carrusel"
          aria-label="Módulos destacados"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="relative mt-10 rounded-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-grape-600"
        >
          <ul ref={trackRef} className="slide-track">
            {modules.map((module, i) => (
              <li key={module.id} className="slide-item">
                <SlideCard module={module} active={i === index} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Módulo anterior"
            className="absolute top-1/2 left-0 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-pill border border-line bg-surface/95 text-ink shadow-soft backdrop-blur transition-all duration-200 hover:-translate-x-0.5 hover:border-bubble-300 hover:text-bubble-600 sm:-left-4"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Módulo siguiente"
            className="absolute top-1/2 right-0 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-pill border border-line bg-surface/95 text-ink shadow-soft backdrop-blur transition-all duration-200 hover:translate-x-0.5 hover:border-bubble-300 hover:text-bubble-600 sm:-right-4"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Controles de la feria */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? 'Pausar recorrido automático' : 'Reanudar recorrido automático'}
            className="grid h-10 w-10 place-items-center rounded-pill bg-gradient-to-br from-grape-600 to-bubble-500 text-sm text-white shadow-soft transition-transform duration-200 hover:scale-105"
          >
            <span aria-hidden="true">{playing ? '❙❙' : '▶'}</span>
          </button>

          <ul className="flex items-center gap-2">
            {modules.map((module, i) => (
              <li key={module.id}>
                <button
                  type="button"
                  onClick={() => {
                    setIndex(i);
                    scrollToSlide(i);
                  }}
                  aria-label={`Ir al módulo ${i + 1}: ${module.title}`}
                  aria-current={i === index}
                  className="relative h-2 overflow-hidden rounded-pill bg-line transition-all duration-300"
                  style={{ width: i === index ? '2.5rem' : '0.5rem' }}
                >
                  {i === index && (
                    <span
                      key={`${index}-${playing}`}
                      className="progress-fill absolute inset-0 rounded-pill bg-gradient-to-r from-grape-600 to-bubble-500"
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

        <p className="sr-only" aria-live="polite">
          {activeModule
            ? `Módulo ${index + 1} de ${total}: ${activeModule.title}, por ${activeModule.author}`
            : ''}
        </p>
      </div>
    </section>
  );
}
