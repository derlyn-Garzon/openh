# Cadencia — landing page

Landing page de producto para **Cadencia**, una app de planificación de
trabajo por ciclos semanales.

## Contenido

Un único archivo, `index.html`, autocontenido:

- Tailwind CSS vía CDN, con paleta y tipografías propias configuradas en línea.
- Sin JavaScript propio; la validación del formulario usa las reglas nativas
  del navegador (`required`, `type="email"`).
- Responsive, con animaciones de entrada en CSS puro que respetan
  `prefers-reduced-motion`.

## Secciones

1. Navegación fija con enlaces internos.
2. Hero con titular, subtítulo y doble llamada a la acción.
3. Producto: tres tarjetas de propuesta de valor.
4. Método: los cuatro momentos del ciclo semanal.
5. Llamada a la acción final sobre fondo invertido.
6. Contacto: datos directos y formulario.
7. Pie con enlaces legales.

## Uso local

Abre `index.html` directamente en el navegador, o sírvelo con:

```bash
python3 -m http.server 8000
```

Y visita `http://localhost:8000`.

## Pendiente

El formulario de contacto apunta a `action="#"` y todavía no envía a ningún
servidor. Para conectarlo, sustituye ese atributo por la URL del endpoint real
y ajusta el `method` según lo que espere el servicio.
