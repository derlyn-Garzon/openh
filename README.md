# Cyber Bionikas — Espacio Colectivo & Vivo

Interfaz web para una plataforma de formación, pensamiento crítico y
colectividad. Tono positivo y celebratorio, con un carrusel de diapositivas
inspirado en un parque de diversiones.

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

Los tokens viven en `src/index.css`, en el bloque `@theme` de Tailwind 4.
Cambiar ahí la paleta re-tiñe toda la interfaz sin tocar componentes.

| Token | Uso |
|---|---|
| `--color-cream` / `--color-surface` | Fondos limpios y luminosos |
| `--color-bubble-500/600` | Rosa chicle, acento cálido principal |
| `--color-coral-500` | Coral, segundo acento |
| `--color-sun-300/500` | Amarillo sol, energía de feria |
| `--color-mint-500` | Menta, frescura |
| `--color-sky-500` | Cielo, equilibrio frío |
| `--color-grape-600` | Uva, profundidad morada |
| `--radius-card` / `--radius-pill` | 1.75rem y píldora |
| `--shadow-soft` / `--shadow-lift` | Profundidad difuminada |

Clases utilitarias del tema:

- `.text-gradient` — degradado festivo para titulares.
- `.bunting` — guirnalda de banderines.
- `.awning` — toldo a rayas de caseta.
- `.bulb` / `.bulb-blink` — bombillas de marquesina.
- `.slide-track` / `.slide-item` — pista del carrusel.
- `.rise`, `.pop`, `.confetti-piece`, `.wheel-spin`, `.bob` — animaciones.

## Estructura

```
src/
  App.tsx                     composición de secciones
  index.css                   tokens, carrusel, animaciones y decoración
  data/content.ts             módulos, equipo, filtros y navegación, tipados
  components/
    ui.tsx                    Button, ButtonLink, Pill, CategoryTag
    Fairground.tsx            Confetti, Bunting, BulbRow, FerrisWheel
    ModuleCard.tsx            ModuleCard + ModuleArt (portada ilustrada)
    Navbar.tsx                barra fija con menú móvil
    Hero.tsx                  hero con noria y confeti
    SlideCarousel.tsx         carrusel de diapositivas
    Team.tsx                  presentación del equipo
    Catalog.tsx               buscador + filtros en píldora + cuadrícula
    Community.tsx             Community y Donate
    Footer.tsx                pie con columnas
public/favicon.svg            icono
```

## Componentes clave

**`SlideCarousel`** — carrusel de tipo slide con `scroll-snap` nativo. Se
controla con flechas, puntos de progreso, teclado y deslizamiento táctil. El
índice se sincroniza con la posición real del scroll, así que deslizar a mano
también actualiza los indicadores. Autoplay de 6 s con pausa.

**`Team`** — cuadrícula de 1/2/4 columnas con retratos de degradado e iniciales,
más un bloque final de reclutamiento.

**`Fairground`** — decoración puramente ornamental: confeti animado, guirnalda,
bombillas y una noria en SVG. Todo lleva `aria-hidden`.

## Notas de implementación

- **El centrado del carrusel depende del relleno lateral de `.slide-track`.**
  El relleno es `(100% − ancho visible) / 2`, de modo que la primera y la última
  diapositiva también alcanzan el centro. Sin él, la diapositiva 0 nunca se
  centra y el indicador se desincroniza de la posición real.
- El ancho de `.slide-item` es `100%` del área de contenido, no del contenedor:
  el relleno lateral ya descuenta la diferencia.
- El centrado se calcula a mano (`offsetLeft`), no con `scrollIntoView`, porque
  este último también desplaza la página en horizontal.
- `html { overflow-x: clip }` evita cualquier desbordamiento horizontal.
- Todas las animaciones se desactivan con `prefers-reduced-motion`.

## Accesibilidad

- Enlace "Saltar al contenido" al principio del documento.
- El carrusel expone `aria-roledescription="carrusel"`, es enfocable y responde
  a las flechas del teclado; el módulo activo se anuncia con `aria-live`.
- Los puntos usan `aria-current`; los filtros, `aria-pressed`.
- La decoración de feria está marcada `aria-hidden="true"`.
