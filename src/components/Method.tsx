import { methodSteps } from '../data/content.ts';
import { SectionHeading, SectionLabel } from './Section.tsx';

export function Method() {
  return (
    <section id="metodo" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:py-28">
        <div>
          <SectionLabel>Método</SectionLabel>
          <SectionHeading>Cuatro pasos, una semana.</SectionHeading>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            Cadencia no impone una metodología nueva. Ordena la que ya tienes en cuatro momentos
            concretos de la semana.
          </p>
        </div>

        <ol className="divide-y divide-line border-y border-line">
          {methodSteps.map((step) => (
            <li key={step.marker} className="flex gap-6 py-6">
              <span className="font-display text-2xl text-muted">{step.marker}</span>
              <div>
                <h3 className="font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-1 text-sm text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
