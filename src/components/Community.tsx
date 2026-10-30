import { ButtonLink } from './ui.tsx';

export function Community() {
  return (
    <section id="comunidad" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid items-center gap-10 rounded-card border border-line bg-gradient-to-br from-lilac-50 via-surface to-rose-50 p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl">
              Redes de <span className="text-gradient">apoyo mutuo</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              Cyber Bionikas no es un curso: es un espacio donde los saberes circulan y se
              sostienen entre quienes participan. Entra a la comunidad, comparte lo que sabes y
              aprende de lo que otras ya recorrieron.
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
            {[
              { value: '3.400', label: 'Personas en red' },
              { value: '128', label: 'Módulos abiertos' },
              { value: '24', label: 'Colectivos aliados' },
              { value: '0 €', label: 'Para acceder' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-card border border-line bg-surface p-5 text-center shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-extrabold text-gradient">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs text-muted">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Donate() {
  return (
    <section id="donar" className="border-t border-line bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
              Sostener la escuela es <span className="text-rose-300">sostenernos</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
              Todo el material es libre y gratuito. Si puedes aportar, mantienes los servidores,
              pagas a las talleristas y abres la puerta a quien no puede pagar.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-card bg-white/5 p-6">
            <ButtonLink href="#donar" size="lg" className="w-full">
              Apoya a la Escuela
            </ButtonLink>
            <ButtonLink
              href="#unirse"
              variant="ghost"
              size="lg"
              className="w-full border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/10"
            >
              + Unirse
            </ButtonLink>
            <p className="mt-1 text-center text-xs text-white/50">
              Aportación única o mensual · cancela cuando quieras
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
