import { team } from '../data/content.ts';
import { Bunting } from './Fairground.tsx';

export function Team() {
  return (
    <section id="equipo" className="relative border-t border-line">
      <Bunting className="mt-0" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-pill bg-mint-100 px-4 py-1.5 text-xs font-semibold text-mint-500">
            ✿ Quiénes sostienen esto
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Conoce al <span className="text-gradient">equipo</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Somos pocas y nos repartimos el trabajo con cuidado. Cada una trae su saber y lo pone en
            común.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => {
            const [from, to] = member.art;
            return (
              <li
                key={member.name}
                className="rise"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <article className="group flex h-full flex-col items-center rounded-card border border-line bg-surface p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-bubble-300 hover:shadow-lift">
                  {/* Retrato con degradado e iniciales */}
                  <div
                    className="grid h-24 w-24 place-items-center rounded-pill font-display text-2xl font-extrabold text-white shadow-soft transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
                    role="img"
                    aria-label={`Retrato de ${member.name}`}
                  >
                    {member.initials}
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{member.name}</h3>

                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-pill bg-grape-50 px-3 py-1 text-[0.7rem] font-semibold text-grape-600">
                    <span aria-hidden="true">{member.mark}</span>
                    {member.role}
                  </span>

                  <p className="mt-4 text-sm leading-relaxed text-muted">{member.bio}</p>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 rounded-card border border-dashed border-bubble-300 bg-bubble-50 px-6 py-10 text-center">
          <p className="font-display text-lg font-bold text-ink">
            ¿Quieres sumarte al equipo?
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Buscamos talleristas, traductoras y personas que cuiden la comunidad. Escríbenos y
            hablamos.
          </p>
          <a
            href="#unirse"
            className="mt-5 inline-flex items-center gap-2 rounded-pill bg-gradient-to-r from-grape-600 to-bubble-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
          >
            + Unirse
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
