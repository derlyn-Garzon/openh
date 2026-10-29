export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <p className="reveal inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted [animation-delay:.05s]">
          <span className="h-1.5 w-1.5 rounded-full bg-lime ring-2 ring-lime/40" />
          Ciclo 12 abierto
        </p>

        <h1 className="reveal mt-8 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight [animation-delay:.15s] md:text-7xl">
          Planifica el trabajo por <em className="text-muted italic">ciclos</em>, no por urgencias.
        </h1>

        <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-muted [animation-delay:.25s]">
          Cadencia convierte el ruido de tu equipo en un plan semanal claro: un objetivo por
          ciclo, un tablero que cabe en una pantalla y cero reuniones para saber en qué va todo.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4 [animation-delay:.35s]">
          <a
            href="#empezar"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            Crear mi primer ciclo
          </a>
          <a
            href="#metodo"
            className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-white"
          >
            Ver cómo funciona
          </a>
        </div>

        <p className="reveal mt-6 text-xs text-muted [animation-delay:.35s]">
          14 días de prueba · sin tarjeta · cancelas cuando quieras
        </p>
      </div>
    </section>
  );
}
