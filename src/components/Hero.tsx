import { heroPillars } from '../data/content.ts';
import { Bunting, Confetti, FerrisWheel } from './Fairground.tsx';
import { ButtonLink, Pill } from './ui.tsx';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <Confetti count={22} />

      {/* Halos de color */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-pill bg-bubble-100 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-16 right-0 h-80 w-80 rounded-pill bg-sun-100 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-pill bg-mint-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <div className="rise">
              <Pill className="border-bubble-300 bg-surface text-bubble-600">
                Plataforma de Formación &amp; Pensamiento Crítico
              </Pill>
            </div>

            <h1 className="rise mt-6 font-display text-4xl leading-[1.06] font-extrabold tracking-tight text-balance [animation-delay:.08s] sm:text-5xl lg:text-6xl">
              Tejiendo <span className="text-gradient">Saberes</span> y Construyendo{' '}
              <span className="text-gradient">Colectividad</span>
            </h1>

            <p className="rise mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft [animation-delay:.16s] sm:text-lg lg:mx-0">
              Aprender aquí es una fiesta: entras, te encuentras con otras y sales con más preguntas
              y más ganas. Formación con alegría, empatía y apoyo mutuo.
            </p>

            <div className="rise mt-9 flex flex-col items-center gap-3 [animation-delay:.24s] sm:flex-row lg:justify-start">
              <ButtonLink href="#donar" size="lg" className="w-full sm:w-auto">
                Apoya a la Escuela
              </ButtonLink>
              <ButtonLink href="#carrusel" variant="ghost" size="lg" className="w-full sm:w-auto">
                🎡 Entrar a la feria
              </ButtonLink>
            </div>

            <ul className="rise mt-10 flex flex-wrap items-center justify-center gap-2.5 [animation-delay:.32s] lg:justify-start">
              {heroPillars.map((pillar) => (
                <li key={pillar.href}>
                  <a
                    href={pillar.href}
                    className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-4 py-2 text-xs font-medium text-ink-soft shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-bubble-300 hover:text-bubble-600"
                  >
                    <span aria-hidden="true" className="text-bubble-500">
                      {pillar.glyph}
                    </span>
                    {pillar.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Noria decorativa */}
          <div className="relative mx-auto hidden w-full max-w-sm lg:block">
            <div className="relative rounded-card border border-line bg-surface p-6 shadow-lift">
              <FerrisWheel className="mx-auto w-full max-w-[16rem]" />
              <p className="mt-4 text-center font-display text-sm font-bold text-ink">
                La feria de los saberes
              </p>
              <p className="mt-1 text-center text-xs text-muted">
                Abierta todos los días, gratis y para siempre
              </p>
            </div>
          </div>
        </div>
      </div>

      <Bunting className="mt-4" />
    </section>
  );
}
