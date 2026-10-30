export type Category = 'Teoría' | 'Comunidad' | 'Ecología' | 'Interseccionalidad' | 'Literatura';

export interface Module {
  id: string;
  category: Category;
  tag: string;
  title: string;
  description: string;
  author: string;
  date: string;
  duration: string;
  /** Tinte de la ilustración; se usa para generar el degradado de portada. */
  art: readonly [string, string];
  glyph: string;
}

export const modules: readonly Module[] = [
  {
    id: 'poesia-feminista',
    category: 'Literatura',
    tag: 'Literatura y Poesía Feminista',
    title: 'La palabra como territorio propio',
    description:
      'Un recorrido por voces que escribieron el cuerpo y la memoria antes de pedir permiso.',
    author: 'Colectivo Bionikas',
    date: '12 mar 2026',
    duration: '18 min',
    art: ['#9a6ef0', '#ec5c93'],
    glyph: '✶',
  },
  {
    id: 'apoyo-mutuo',
    category: 'Comunidad',
    tag: 'Redes de Apoyo Mutuo',
    title: 'Cuidar en red, sostener la vida',
    description:
      'Cómo se organizan los cuidados colectivos cuando el Estado no llega y la comunidad sí.',
    author: 'Mesa de Cuidados',
    date: '04 mar 2026',
    duration: '24 min',
    art: ['#ec5c93', '#f7a8c4'],
    glyph: '❋',
  },
  {
    id: 'decolonial',
    category: 'Interseccionalidad',
    tag: 'Perspectiva Decolonial',
    title: 'Desaprender para poder mirar',
    description:
      'Las categorías que heredamos y por qué nombrarlas es el primer acto político.',
    author: 'Núcleo Sur',
    date: '27 feb 2026',
    duration: '31 min',
    art: ['#7c4dff', '#6d3bd6'],
    glyph: '◈',
  },
  {
    id: 'ecologia',
    category: 'Ecología',
    tag: 'Ecología y Territorio',
    title: 'Cuerpos, tierra y agua',
    description:
      'La defensa del territorio como continuidad de la defensa del propio cuerpo.',
    author: 'Asamblea Verde',
    date: '19 feb 2026',
    duration: '22 min',
    art: ['#6d3bd6', '#9a6ef0'],
    glyph: '❀',
  },
  {
    id: 'pedagogia',
    category: 'Teoría',
    tag: 'Pedagogías Críticas',
    title: 'Enseñar sin domesticar',
    description:
      'Otra escuela es posible: aprendizaje liberador frente a la reproducción del orden.',
    author: 'Escuela Bionikas',
    date: '08 feb 2026',
    duration: '27 min',
    art: ['#f7a8c4', '#9a6ef0'],
    glyph: '✦',
  },
  {
    id: 'archivo',
    category: 'Teoría',
    tag: 'Archivo Vivo',
    title: 'Memoria de las que vinieron',
    description:
      'Un archivo abierto de luchas, textos y consignas que sostienen el presente.',
    author: 'Colectivo Bionikas',
    date: '30 ene 2026',
    duration: '15 min',
    art: ['#db3f7c', '#7c4dff'],
    glyph: '❃',
  },
] as const;

export const filters = ['Todos', 'Teoría', 'Comunidad', 'Ecología', 'Interseccionalidad'] as const;
export type Filter = (typeof filters)[number];

export const navLinks = [
  { href: '#carrusel', label: 'Carrusel 3D' },
  { href: '#recursos', label: 'Recursos' },
  { href: '#comunidad', label: 'Comunidad' },
  { href: '#donar', label: 'Donar' },
] as const;

export const heroPillars = [
  { href: '#carrusel', label: 'Módulos Audiovisuales', glyph: '▶' },
  { href: '#comunidad', label: 'Redes de Apoyo Mutuo', glyph: '❋' },
  { href: '#recursos', label: 'Perspectiva Decolonial', glyph: '◈' },
] as const;
