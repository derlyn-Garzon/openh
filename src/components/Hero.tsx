import { heroPillars } from '../data/content.ts';
import { ButtonLink, Pill } from './ui.tsx';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Halos suaves de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-pill bg-lilac-100 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-0 h-80 w-80 rounded-pill bg-rose-100 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-5 pt-16 pb-14 text-center sm:px-8 sm:pt-24 sm:pb-20">
        <div className="rise">
          <Pill className="border-lilac-300 bg-surface text-violet-700">
            Plataforma de Formación &amp; Pensamiento Crítico
          </Pill>
        </div>

        <h1 className="rise mt-7 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-balance [animation-delay:.08s] sm:text-6xl">
          Tejiendo <span className="text-gradient">Saberes</span> y Construyendo{' '}
          <span className="text-gradient">Colectividad</span>
        </h1>

        <p className="rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted [animation-delay:.16s] sm:text-lg">
          Un espacio vivo para aprender con otras, cuestionar lo que nos enseñaron y sostenernos
          en red. Formación con empatía, mirada decolonial y apoyo mutuo.
        </p>

        <div className="rise mt-9 flex flex-col items-center justify-center gap-3 [animation-delay:.24s] sm:flex-row">
          <ButtonLink href="#donar" size="lg" className="w-full sm:w-auto">
            Apoya a la Escuela
          </ButtonLink>
          <ButtonLink href="#carrusel" variant="ghost" size="lg" className="w-full sm:w-auto">
            Explorar módulos
          </ButtonLink>
        </div>

        <ul className="rise mt-12 flex flex-wrap items-center justify-center gap-2.5 [animation-delay:.32s]">
          {heroPillars.map((pillar) => (
            <li key={pillar.href}>
              <a
                href={pillar.href}
                className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-4 py-2 text-xs font-medium text-ink-soft shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-lilac-300 hover:text-violet-600"
              >
                <span aria-hidden="true" className="text-violet-500">
                  {pillar.glyph}
                </span>
                {pillar.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
