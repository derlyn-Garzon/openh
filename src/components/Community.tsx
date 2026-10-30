import { stats } from '../data/content.ts';
import { Confetti } from './Fairground.tsx';
import { ButtonLink } from './ui.tsx';

export function Community() {
  return (
    <section id="comunidad" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative overflow-hidden rounded-card border border-line bg-gradient-to-br from-sun-50 via-surface to-mint-50 p-8 sm:p-12">
          <Confetti count={14} className="opacity-70" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="inline-flex items-center rounded-pill bg-sun-100 px-4 py-1.5 text-xs font-semibold text-sun-600">
                ❋ Nada de esto se hace sola
              </span>
              <h2 className="mt-5 font-display text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl">
                Redes de <span className="text-gradient">apoyo mutuo</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
                Cyber Bionikas no es un curso: es un espacio donde los saberes circulan y se
                sostienen entre quienes participan. Entra, comparte lo que sabes y aprende de lo
                que otras ya recorrieron.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#unirse" size="lg">
                  + Unirse a la comunidad
                </ButtonLink>
                <ButtonLink href="#donar" variant="ghost" size="lg">
                  Apoya a la Escuela
                </ButtonLink>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rise rounded-card border border-line bg-surface p-5 text-center shadow-soft transition-transform duration-200 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="text-gradient block font-display text-3xl font-extrabold">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs text-muted">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Donate() {
  return (
    <section id="donar" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="relative overflow-hidden rounded-card bg-gradient-to-br from-grape-600 via-bubble-500 to-coral-500 p-8 text-white sm:p-12">
          <Confetti count={18} className="opacity-60" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
                Sostener la escuela es <span className="text-sun-300">sostenernos</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
                Todo el material es libre y gratuito. Si puedes aportar, mantienes los servidores,
                pagas a las talleristas y abres la puerta a quien no puede pagar.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-card bg-white/15 p-6 backdrop-blur">
              <ButtonLink
                href="#donar"
                size="lg"
                className="w-full bg-white text-grape-600 hover:bg-sun-50"
              >
                Apoya a la Escuela
              </ButtonLink>
              <ButtonLink
                href="#unirse"
                variant="ghost"
                size="lg"
                className="w-full border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10"
              >
                + Unirse
              </ButtonLink>
              <p className="mt-1 text-center text-xs text-white/75">
                Aportación única o mensual · cancela cuando quieras
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
