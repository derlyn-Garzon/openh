import { useState, type FormEvent } from 'react';
import { teamSizes } from '../data/content.ts';
import { SectionHeading, SectionLabel } from './Section.tsx';

interface FormState {
  nombre: string;
  email: string;
  equipo: string;
  mensaje: string;
  privacidad: boolean;
}

type SubmitStatus =
  | { kind: 'idle' }
  | { kind: 'error'; message: string }
  | { kind: 'success'; message: string };

const initialState: FormState = {
  nombre: '',
  email: '',
  equipo: teamSizes[0]?.value ?? '',
  mensaje: '',
  privacidad: false,
};

const inputClasses =
  'mt-2 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-ink';
const labelClasses = 'block text-xs font-medium uppercase tracking-[0.12em] text-muted';

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<SubmitStatus>({ kind: 'idle' });

  function update<K extends keyof FormState>(key: K, value: FormState[K]): void {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (!form.privacidad) {
      setStatus({ kind: 'error', message: 'Marca la casilla de consentimiento para continuar.' });
      return;
    }

    // No hay endpoint todavía: se sustituye por la URL real cuando exista.
    setStatus({
      kind: 'success',
      message: `Gracias, ${form.nombre.trim() || 'equipo'}. Te escribimos a ${form.email} en menos de un día laborable.`,
    });
  }

  return (
    <section id="contacto" className="border-t border-line bg-white/50">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:py-28">
        <div>
          <SectionLabel>Contacto</SectionLabel>
          <SectionHeading>Cuéntanos cómo trabajáis hoy.</SectionHeading>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            Te escribimos en menos de un día laborable con una propuesta concreta para vuestro
            equipo. Sin demos genéricas.
          </p>

          <dl className="mt-10 space-y-4 text-sm">
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-muted">Correo</dt>
              <dd>
                <a
                  href="mailto:hola@cadencia.app"
                  className="underline decoration-line underline-offset-4 hover:decoration-ink"
                >
                  hola@cadencia.app
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-muted">Horario</dt>
              <dd>Lunes a viernes, 9:00–18:00 (CET)</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-line bg-paper p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className={labelClasses}>
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                autoComplete="name"
                placeholder="Ada Lovelace"
                value={form.nombre}
                onChange={(e) => update('nombre', e.target.value)}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Correo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="ada@equipo.com"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className={inputClasses}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="equipo" className={labelClasses}>
                Tamaño del equipo
              </label>
              <select
                id="equipo"
                name="equipo"
                value={form.equipo}
                onChange={(e) => update('equipo', e.target.value)}
                className={`${inputClasses} appearance-none`}
              >
                {teamSizes.map((size) => (
                  <option key={size.value} value={size.value}>
                    {size.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="mensaje" className={labelClasses}>
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                placeholder="Contadnos en qué punto está vuestro proceso de planificación."
                value={form.mensaje}
                onChange={(e) => update('mensaje', e.target.value)}
                className={`${inputClasses} resize-y`}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label htmlFor="privacidad" className="flex items-start gap-2.5 text-xs text-muted">
              <input
                id="privacidad"
                name="privacidad"
                type="checkbox"
                checked={form.privacidad}
                onChange={(e) => update('privacidad', e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-line accent-ink"
              />
              <span>Acepto que Cadencia use mis datos para responder a esta consulta.</span>
            </label>

            <button
              type="submit"
              className="shrink-0 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              Enviar mensaje
            </button>
          </div>

          {status.kind !== 'idle' && (
            <p
              role="status"
              className={`mt-4 text-xs ${
                status.kind === 'error' ? 'text-red-700' : 'text-muted'
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
