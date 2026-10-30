import { useMemo, useState } from 'react';
import { filters, modules, type Filter } from '../data/content.ts';
import { ModuleCard } from './ModuleCard.tsx';

export function Catalog() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('Todos');

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();

    return modules.filter((module) => {
      const matchesFilter = filter === 'Todos' || module.category === filter;
      if (!matchesFilter) return false;
      if (term === '') return true;

      return [module.title, module.description, module.tag, module.author]
        .join(' ')
        .toLowerCase()
        .includes(term);
    });
  }, [query, filter]);

  return (
    <section id="recursos" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Catálogo de <span className="text-gradient">módulos</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Busca por palabra clave o filtra por línea de trabajo.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <label htmlFor="buscador" className="sr-only">
            Buscar módulos
          </label>
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-5 -translate-y-1/2 text-sm text-muted"
            >
              ⌕
            </span>
            <input
              id="buscador"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar módulos..."
              className="w-full rounded-pill border border-line bg-surface py-3.5 pr-5 pl-12 text-sm text-ink shadow-soft outline-none transition-colors duration-200 placeholder:text-muted focus:border-grape-300"
            />
          </div>

          <ul className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {filters.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => setFilter(option)}
                  aria-pressed={filter === option}
                  className={`rounded-pill border px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                    filter === option
                      ? 'border-grape-600 bg-grape-600 text-white shadow-soft'
                      : 'border-line bg-surface text-ink-soft hover:border-grape-300 hover:bg-grape-50'
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-xs text-muted" aria-live="polite">
          {results.length === 1 ? '1 módulo encontrado' : `${results.length} módulos encontrados`}
        </p>

        {results.length > 0 ? (
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((module) => (
              <li key={module.id} className="h-full">
                <ModuleCard module={module} cta="Explorar Módulo" className="h-full" />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 rounded-card border border-dashed border-grape-300 bg-grape-50/60 px-6 py-14 text-center">
            <p className="font-display text-lg font-semibold text-ink">
              Todavía no hay módulos para esa búsqueda
            </p>
            <p className="mt-2 text-sm text-muted">
              Prueba con otra palabra o quita los filtros activos.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setFilter('Todos');
              }}
              className="mt-5 rounded-pill bg-grape-600 px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-grape-600"
            >
              Ver todos los módulos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
