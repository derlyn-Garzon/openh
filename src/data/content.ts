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
  /** Tinte de la portada: degradado de dos colores. */
  art: readonly [string, string];
  glyph: string;
  /** Atracción de feria asociada, refuerza el tono lúdico. */
  ride: string;
}

export const modules: readonly Module[] = [
  {
    id: 'poesia-feminista',
    category: 'Literatura',
    tag: 'Literatura y Poesía Feminista',
    title: 'La palabra como territorio propio',
    description:
      'Un paseo alegre por voces que escribieron el cuerpo y la memoria antes de pedir permiso.',
    author: 'Colectivo Bionikas',
    date: '12 mar 2026',
    duration: '18 min',
    art: ['#ff5fa8', '#ffb703'],
    glyph: '✶',
    ride: 'Carrusel de letras',
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
    art: ['#10b981', '#7cc4fb'],
    glyph: '❋',
    ride: 'Rueda del cuidado',
  },
  {
    id: 'decolonial',
    category: 'Interseccionalidad',
    tag: 'Perspectiva Decolonial',
    title: 'Desaprender para poder mirar',
    description:
      'Las categorías que heredamos y por qué nombrarlas es el primer acto de libertad.',
    author: 'Núcleo Sur',
    date: '27 feb 2026',
    duration: '31 min',
    art: ['#7c4dff', '#2f9fe8'],
    glyph: '◈',
    ride: 'Túnel de espejos',
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
    art: ['#2f9fe8', '#6ee7b7'],
    glyph: '❀',
    ride: 'Río vivo',
  },
  {
    id: 'pedagogia',
    category: 'Teoría',
    tag: 'Pedagogías Críticas',
    title: 'Enseñar sin domesticar',
    description:
      'Otra escuela es posible: aprendizaje liberador, curioso y lleno de preguntas.',
    author: 'Escuela Bionikas',
    date: '08 feb 2026',
    duration: '27 min',
    art: ['#ffb703', '#ff7a55'],
    glyph: '✦',
    ride: 'Montaña de ideas',
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
    art: ['#f0348b', '#7c4dff'],
    glyph: '❃',
    ride: 'Galería del tiempo',
  },
] as const;

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  art: readonly [string, string];
  initials: string;
  /** Emoji o glifo con el que se identifica la persona. */
  mark: string;
}

export const team: readonly TeamMember[] = [
  {
    name: 'Amara Solano',
    role: 'Dirección pedagógica',
    bio: 'Diseña los recorridos de aprendizaje y cuida que cada módulo se pueda disfrutar sin prisa.',
    art: ['#ff5fa8', '#ffb703'],
    initials: 'AS',
    mark: '✿',
  },
  {
    name: 'Nadia Quispe',
    role: 'Investigación y archivo',
    bio: 'Rastrea textos, memorias y consignas para que el archivo vivo siga creciendo.',
    art: ['#7c4dff', '#2f9fe8'],
    initials: 'NQ',
    mark: '◈',
  },
  {
    name: 'Tomas Ferreira',
    role: 'Comunidad y cuidados',
    bio: 'Teje las redes de apoyo mutuo y sostiene los espacios de escucha del colectivo.',
    art: ['#10b981', '#6ee7b7'],
    initials: 'TF',
    mark: '❋',
  },
  {
    name: 'Lía Mendoza',
    role: 'Audiovisual',
    bio: 'Convierte cada módulo en una historia que se ve, se escucha y se recuerda.',
    art: ['#ff7a55', '#f0348b'],
    initials: 'LM',
    mark: '▶',
  },
] as const;

export const filters = ['Todos', 'Teoría', 'Comunidad', 'Ecología', 'Interseccionalidad'] as const;
export type Filter = (typeof filters)[number];

export const navLinks = [
  { href: '#carrusel', label: 'Carrusel' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#recursos', label: 'Recursos' },
  { href: '#comunidad', label: 'Comunidad' },
  { href: '#donar', label: 'Donar' },
] as const;

export const heroPillars = [
  { href: '#carrusel', label: 'Módulos Audiovisuales', glyph: '▶' },
  { href: '#comunidad', label: 'Redes de Apoyo Mutuo', glyph: '❋' },
  { href: '#recursos', label: 'Perspectiva Decolonial', glyph: '◈' },
] as const;

/** Cifras del bloque de comunidad. */
export const stats = [
  { value: '3.400', label: 'Personas en red' },
  { value: '128', label: 'Módulos abiertos' },
  { value: '24', label: 'Colectivos aliados' },
  { value: '0 €', label: 'Para acceder' },
] as const;
