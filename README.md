# Cadencia — landing page

Landing de producto para **Cadencia**, una app de planificación del trabajo por
ciclos semanales. En español, minimalista, sin dependencias de UI externas.

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

## Estructura

```
index.html              entrada de Vite (monta #root)
src/
  main.tsx              arranque de React
  App.tsx               composición de las secciones
  index.css             tema de Tailwind 4 (@theme) y estilos globales
  data/content.ts       textos y listas, tipados
  components/
    Header.tsx          navegación fija
    Hero.tsx            titular y llamadas a la acción
    Features.tsx        tres propuestas de producto
    Method.tsx          el ciclo semanal en cuatro pasos
    CallToAction.tsx    banda de cierre
    Contact.tsx         formulario de contacto (estado controlado)
    Footer.tsx          pie de página
    Section.tsx         primitivas de etiqueta y titular
public/favicon.svg      icono
```

Los textos viven en `src/data/content.ts`, no incrustados en el marcado, para
poder editarlos sin tocar los componentes.

## Formulario de contacto

Es un formulario controlado con estado en React. Valida en el cliente que el
consentimiento esté marcado; los campos `nombre`, `email` y `mensaje` usan
validación nativa del navegador (`required`, `type="email"`).

**Pendiente:** no hay endpoint conectado. `handleSubmit` en
`src/components/Contact.tsx` solo muestra el mensaje de éxito en pantalla.
Sustituir por la llamada real cuando exista la URL del servicio.

## Accesibilidad

- Cada campo tiene su `<label>` asociado por `id`.
- El resultado del envío se anuncia con `role="status"`.
- `prefers-reduced-motion` desactiva animaciones y desplazamiento suave.
