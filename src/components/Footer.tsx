const footerLinks = ['Privacidad', 'Términos', 'Estado'] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-paper/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-paper/10 px-6 py-10 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Cadencia. Hecho para equipos que quieren cerrar la semana en paz.</p>
        <nav className="flex gap-6">
          {footerLinks.map((label) => (
            <a key={label} href="#" className="transition-colors hover:text-paper">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
