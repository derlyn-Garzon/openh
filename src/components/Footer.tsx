import { Logo } from './Navbar.tsx';
import { navLinks } from '../data/content.ts';

const columns = [
  { title: 'Explorar', links: navLinks.map((l) => ({ href: l.href, label: l.label })) },
  {
    title: 'Escuela',
    links: [
      { href: '#recursos', label: 'Módulos' },
      { href: '#comunidad', label: 'Talleristas' },
      { href: '#donar', label: 'Transparencia' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '#', label: 'Privacidad' },
      { href: '#', label: 'Código de convivencia' },
      { href: '#', label: 'Accesibilidad' },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Formación, pensamiento crítico y colectividad. Un espacio vivo, abierto y
              autogestionado.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-sm font-bold tracking-tight text-ink">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-200 hover:text-grape-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cyber Bionikas. Hecho en colectivo.</p>
          <p>Espacio Colectivo &amp; Vivo</p>
        </div>
      </div>
    </footer>
  );
}
