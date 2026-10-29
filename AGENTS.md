# AGENTS.md

## Proyecto
Landing page de "Cadencia" — un único `index.html` autocontenido (Tailwind vía CDN,
sin JS propio, validación nativa de formularios). Ver `README.md`.

## Entorno
- Servidor de vista previa: `python3 -m http.server 12000` desde la raíz del proyecto.
- Python: `/usr/local/bin/python`.

## Git / GitHub — LIMITACIÓN CONOCIDA
El `GITHUB_TOKEN` de este entorno es un **token de usuario de GitHub App**
(prefijo `ghu_`), **solo lectura**. No permite escribir en repositorios remotos.

Síntomas verificados (todos fallan igual):
- `git push` → `403 ... denied to derlyn-Garzon`
- API `PUT /contents/...` → `Resource not accessible by integration`
- API `POST /git/refs` → `403`
- `x-oauth-scopes` en las cabeceras HTTP viene **vacío**

Cuidado: `GET /repos/:owner/:repo` devuelve `permissions: {push: true, admin: true}`
incluso cuando el token no puede escribir. Ese campo refleja los permisos del
**usuario**, no los del token. No es indicativo de que el push vaya a funcionar.

### Dónde se concede realmente el acceso (corregido)
**NO** en GitHub → Settings → Applications → Installed GitHub Apps. La app de
OpenHands Cloud no aparece ahí porque se gestiona desde OpenHands Cloud, no desde
los ajustes personales de GitHub.

El acceso por repositorio se concede en:
- OpenHands Cloud → selector de repositorios → **`+ Add GitHub Repos`**, o
- OpenHands Cloud → **Settings → Integrations → Configure GitHub Repositories**

Docs: https://docs.openhands.dev/openhands/usage/cloud/github-installation.md

Con acceso concedido, OpenHands emite tokens de corta duración (8 h) con
*Contents: Read and write*, y el push funciona.

### Evidencia de que el token actual es un marcador sin permisos
- `GET /user/installations` → `total_count: 0`
- 0 repositorios privados visibles (33 públicos)
- `POST /user/repos` → 403 (no puede ni crear repos)
- `x-accepted-github-permissions: metadata=read`
- La lectura del repo funciona **de forma anónima** (sin token), porque es público:
  no hay que confundir eso con acceso autenticado.

## Preferencias del usuario
Trabaja en español. Prefiere entregables autocontenidos y sin dependencias externas
pesadas.
