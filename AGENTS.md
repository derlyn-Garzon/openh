# AGENTS.md

## Proyecto
Landing page de "Cadencia" — un único `index.html` autocontenido (Tailwind vía CDN,
sin JS propio, validación nativa de formularios). Ver `README.md`.

## Entorno
- Servidor de vista previa: `python3 -m http.server 12000` desde la raíz del proyecto.
- Python: `/usr/local/bin/python`.

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
