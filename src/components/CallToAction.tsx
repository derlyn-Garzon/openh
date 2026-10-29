export function CallToAction() {
  return (
    <section id="empezar" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-6xl">
            Tu próximo ciclo empieza el lunes.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-paper/60">
            Crea el espacio, invita a tu equipo y llega al lunes con el plan ya hecho.
          </p>
        </div>

        <div className="flex w-full max-w-sm flex-col gap-3 md:w-auto">
          <a
            href="#"
            className="rounded-full bg-lime px-7 py-3.5 text-center text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Empezar gratis
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-paper/25 px-7 py-3.5 text-center text-sm font-medium text-paper transition-colors hover:bg-paper/10"
          >
            Hablar con el equipo
          </a>
        </div>
      </div>
    </section>
  );
}
