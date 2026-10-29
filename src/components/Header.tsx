import { navLinks } from '../data/content.ts';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-sm text-lime">
            C
          </span>
          Cadencia
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden text-sm text-muted transition-colors hover:text-ink sm:block">
            Entrar
          </a>
          <a
            href="#empezar"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            Empezar gratis
          </a>
        </div>
      </nav>
    </header>
  );
}
