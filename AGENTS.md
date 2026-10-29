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

Para habilitar el push hay que ampliar **Contents: Read and write** en la app de
OpenHands instalada en la cuenta, o aportar un PAT con scope `repo`.

## Preferencias del usuario
Trabaja en español. Prefiere entregables autocontenidos y sin dependencias externas
pesadas.
