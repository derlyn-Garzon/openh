# Cyber Bionikas — Espacio Colectivo & Vivo

Interfaz web para una plataforma de formación, pensamiento crítico y
colectividad. Estética de carrusel/historias, esquinas redondeadas y paleta
cálida de rosas, lilas y morados.

## Stack

| Capa | Tecnología |
|---|---|
| Lenguaje | TypeScript (modo `strict`) |
| UI | React 19 |
| Build | Vite 8 |
| Estilos | Tailwind CSS 4 (plugin oficial de Vite) |

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo
npm run build      # typecheck + build de producción a dist/
npm run preview    # servir el build de producción
npm run typecheck  # solo comprobación de tipos
```

## Identidad visual

Los tokens viven en `src/index.css`, dentro del bloque `@theme` de Tailwind 4.
Cambiar ahí la paleta re-tiñe toda la interfaz, sin tocar componentes.

| Token | Uso |
|---|---|
| `--color-cream` | Fondo general, limpio |
| `--color-surface` | Tarjetas y superficies |
| `--color-rose-500/600` | Acento cálido |
| `--color-lilac-*` | Superficies suaves y estados hover |
| `--color-violet-500/600/700` | Primario y titulares |
| `--color-ink` | Texto principal |
| `--radius-card` | Radio amplio de tarjetas (1.75rem) |
| `--radius-pill` | Botones y etiquetas |
| `--shadow-soft` / `--shadow-lift` | Profundidad difuminada |

La clase `.text-gradient` aplica el degradado morado a titulares destacados.

## Estructura

```
src/
  App.tsx                     composición de secciones
  index.css                   tokens de diseño, 3D y animaciones
  data/content.ts             módulos, filtros y navegación, tipados
  components/
    ui.tsx                    Button, ButtonLink, Pill, CategoryTag
    ModuleCard.tsx            ModuleCard + ModuleArt (portada ilustrada)
    Navbar.tsx                barra fija con menú móvil
    Hero.tsx                  píldora, titular con degradado y CTAs
    Carousel3D.tsx            carrusel en perspectiva con autoplay
    Catalog.tsx               buscador + filtros en píldora + cuadrícula
    Community.tsx             Community y Donate
    Footer.tsx                pie con columnas
public/favicon.svg            icono
```

## Componentes clave

**`Carousel3D`** — las tarjetas se colocan con `translateX`, `translateZ`,
`rotateY` y `scale` según su distancia a la activa. La distancia es **circular**,
así que la última queda junto a la primera y el recorrido no tiene saltos.
Incluye autoplay (6 s), pausa, flechas, puntos de progreso y navegación con
las flechas del teclado.

**`Catalog`** — filtra por categoría y busca en título, descripción, etiqueta y
autoría a la vez. Si no hay resultados muestra un estado vacío con botón para
restablecer.

**`ModuleArt`** — la portada es un degradado con glifo, no una imagen externa.
Evita peticiones de red y funciona sin conexión.

## Notas de implementación

- **El recorte del carrusel va en `.stage`, no en `.deck`.** Un `overflow`
  distinto de `visible` sobre `.deck` anularía su `transform-style: preserve-3d`
  y aplanaría el efecto.
- `html { overflow-x: clip }` es una red de seguridad contra desbordamiento
  horizontal residual.
- Las animaciones se desactivan con `prefers-reduced-motion`.

## Accesibilidad

- Enlace "Saltar al contenido" al principio del documento.
- El carrusel expone `aria-roledescription="carrusel"`, es enfocable y responde
  al teclado; el módulo activo se anuncia con `aria-live`.
- Los filtros usan `aria-pressed`; los puntos, `aria-current`.
- El contador de resultados del catálogo es `aria-live="polite"`.
