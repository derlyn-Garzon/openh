export interface Feature {
  step: string;
  title: string;
  body: string;
}

export const features: readonly Feature[] = [
  {
    step: '01',
    title: 'Un objetivo, no veinte',
    body: 'Cada ciclo admite un objetivo principal. Todo lo demás es trabajo de soporte y se ve distinto. Menos ruido, más foco.',
  },
  {
    step: '02',
    title: 'Tablero que cabe entero',
    body: 'Sin scroll infinito ni columnas huérfanas. Si no cabe en la pantalla, es que el ciclo está mal dimensionado.',
  },
  {
    step: '03',
    title: 'Cierre con datos',
    body: 'Al terminar el ciclo, un resumen de lo comprometido frente a lo entregado. Sin dashboards que nadie mira.',
  },
] as const;

export interface MethodStep {
  marker: string;
  title: string;
  body: string;
}

export const methodSteps: readonly MethodStep[] = [
  {
    marker: 'L',
    title: 'Lunes — Planificar',
    body: 'Eliges el objetivo y repartes el trabajo que sí cabe.',
  },
  {
    marker: 'M',
    title: 'Miércoles — Revisar',
    body: 'Un vistazo de cinco minutos: qué se ha movido y qué se atasca.',
  },
  {
    marker: 'V',
    title: 'Viernes — Cerrar',
    body: 'Se archiva el ciclo y queda el resumen entregado frente a lo prometido.',
  },
  {
    marker: '↻',
    title: 'Lunes siguiente — Ajustar',
    body: 'El ciclo nuevo arranca sabiendo cuánto aguanta el equipo de verdad.',
  },
] as const;

export interface TeamSize {
  value: string;
  label: string;
}

export const teamSizes: readonly TeamSize[] = [
  { value: '1-5', label: '1 a 5 personas' },
  { value: '6-15', label: '6 a 15 personas' },
  { value: '16-50', label: '16 a 50 personas' },
  { value: '50+', label: 'Más de 50 personas' },
] as const;

export const navLinks = [
  { href: '#producto', label: 'Producto' },
  { href: '#metodo', label: 'Método' },
  { href: '#contacto', label: 'Contacto' },
] as const;
