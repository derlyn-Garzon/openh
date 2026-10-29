import { features } from '../data/content.ts';
import { SectionHeading, SectionLabel } from './Section.tsx';

export function Features() {
  return (
    <section id="producto" className="border-t border-line bg-white/50">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <SectionLabel>Producto</SectionLabel>
          <SectionHeading>Tres decisiones y el ciclo está en marcha.</SectionHeading>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.step}
              className="bg-paper p-8 transition-colors hover:bg-white"
            >
              <span className="font-display text-3xl text-muted">{feature.step}</span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
