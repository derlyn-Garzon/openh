import type { Module } from '../data/content.ts';
import { CategoryTag } from './ui.tsx';

interface ModuleArtProps {
  module: Module;
  /** Relación de aspecto de la portada. */
  aspect?: 'story' | 'wide';
  compact?: boolean;
}

/** Portada ilustrada: degradado del módulo + glifo, sin imágenes externas. */
export function ModuleArt({ module, aspect = 'wide', compact = false }: ModuleArtProps) {
  const [from, to] = module.art;
  const height = aspect === 'story' ? 'h-52 sm:h-60' : 'h-40';

  return (
    <div
      className={`relative w-full overflow-hidden rounded-card ${height}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      role="img"
      aria-label={`Ilustración del módulo ${module.title}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 grid place-items-center text-6xl text-white/25"
      >
        {module.glyph}
      </span>

      {!compact && (
        <button
          type="button"
          aria-label={`Reproducir ${module.title}`}
          className="absolute inset-0 grid place-items-center transition-transform duration-200 hover:scale-105"
        >
          <span className="grid h-14 w-14 place-items-center rounded-pill bg-white/90 text-lg text-grape-600 shadow-lift">
            ▶
          </span>
        </button>
      )}
    </div>
  );
}

interface ModuleCardProps {
  module: Module;
  cta?: string;
  className?: string;
}

/** Tarjeta de módulo, misma anatomía en carrusel y en cuadrícula. */
export function ModuleCard({ module, cta = 'Ver Módulo', className = '' }: ModuleCardProps) {
  return (
    <article
      className={`group flex flex-col rounded-card border border-line bg-surface p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${className}`}
    >
      <CategoryTag>{module.tag}</CategoryTag>

      <div className="mt-3">
        <ModuleArt module={module} />
      </div>

      <p className="mt-4 text-xs text-muted">
        {module.date} · {module.duration}
      </p>

      <h3 className="mt-2 font-display text-lg leading-snug font-semibold text-ink">
        {module.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{module.description}</p>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
        <span className="truncate text-xs text-muted">{module.author}</span>
        <a
          href={`#modulo-${module.id}`}
          className="inline-flex shrink-0 items-center gap-1 rounded-pill px-3 py-1.5 text-xs font-semibold text-grape-600 transition-all duration-200 hover:bg-grape-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape-600"
        >
          {cta}
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </article>
  );
}
