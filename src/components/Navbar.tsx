import { useState } from 'react';
import { navLinks } from '../data/content.ts';
import { ButtonLink } from './ui.tsx';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#inicio" className={`flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-rose-500 font-display text-sm font-bold text-white"
      >
        CB
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base font-bold tracking-tight text-ink">
          Cyber Bionikas
        </span>
        <span className="block text-[0.6rem] font-semibold tracking-[0.16em] text-muted uppercase">
          Espacio Colectivo &amp; Vivo
        </span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-7 text-sm text-ink-soft lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-200 hover:text-violet-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ButtonLink href="#donar" variant="soft" size="sm" className="hidden sm:inline-flex">
            Apoya a la Escuela
          </ButtonLink>
          <ButtonLink href="#unirse" size="sm">
            + Unirse
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="grid h-9 w-9 place-items-center rounded-2xl border border-line bg-surface text-ink transition-colors duration-200 hover:bg-lilac-50 lg:hidden"
          >
            <span aria-hidden="true" className="text-sm">
              {open ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-line bg-cream px-5 pb-5 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-2.5 text-sm text-ink-soft transition-colors duration-200 hover:bg-lilac-50 hover:text-violet-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href="#donar" variant="soft" size="sm" className="mt-3 w-full">
            Apoya a la Escuela
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
