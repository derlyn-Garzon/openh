# AGENTS.md

## Proyecto
Landing page de "Cadencia". Proyecto **Vite + React + TypeScript** con Tailwind 4.
Ver `README.md` para el stack y la estructura.

## Entorno
- Node v24, npm 11. Instalar con `npm install`.
- `npm run build` ejecuta `tsc --noEmit` antes de `vite build`: si el typecheck
  falla, no hay bundle.
- `npm run dev` en el puerto 12001 (host `work-2-...all-hands.dev`).
- Python: `/usr/local/bin/python`.

### Trampas de Vite en este entorno
- `preview`/`server` necesitan `allowedHosts: ['.prod-runtime.all-hands.dev']`,
  o Vite responde *"Blocked request. This host is not allowed."*
- El `index.html` es la entrada de Vite, no la página final: el HTML real se
  genera en `dist/`. No editarlo esperando cambios visuales.

### Verificación visual
La automatización del navegador no siempre dispara los eventos de React en
campos controlados. Para probar el formulario de verdad, usar Puppeteer con
`/usr/lib/chromium/chromium` (ver historial de la sesión) en lugar de fiarse
de `browser_type`.

## Git / GitHub — acceso
El `GITHUB_TOKEN` de este entorno **tiene permiso de escritura** sobre
`derlyn-Garzon/openh` (verificado: `PUT /contents/...` → 201, `git push` OK).

Histórico: al inicio de la sesión el token era un marcador sin permisos y todo
push devolvía 403. Se resolvió concediendo acceso al repositorio desde
OpenHands Cloud (`Settings > Integrations`), que emite tokens de corta duración
con *Contents: Read and write*.

### Trampas conocidas al diagnosticar permisos
- `GET /repos/:owner/:repo` devuelve `permissions: {push: true, admin: true}`
  incluso cuando el token **no** puede escribir. Ese campo refleja los permisos
  del **usuario**, no los del token. No es indicativo de nada.
- La app de OpenHands **no** aparece en GitHub → Settings → Applications →
  Installed GitHub Apps. El acceso se gestiona desde OpenHands Cloud.
- La lectura de un repo público funciona **de forma anónima**, sin token. No
  confundir eso con acceso autenticado.
- La prueba fiable de escritura es `PUT /repos/:owner/:repo/contents/<file>`.

## Preferencias del usuario
Trabaja en español. Prefiere entregables autocontenidos y sin dependencias externas
pesadas.
