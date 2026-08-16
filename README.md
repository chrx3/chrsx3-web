# chrsx3.com

Sitio personal y portafolio de Christian Alcántara.

Astro con salida estática: la portada más una ficha por proyecto en
`/trabajo/<slug>`. Desplegado en servidor propio con Coolify, detrás de nginx.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

El build descarga y subsetea las fuentes, así que la primera compilación necesita red.

## Contenido

Todo el contenido vive en `src/data/site.ts`. Para sumar un proyecto, agrega una
entrada a `work`; no hay que tocar plantillas ni crear páginas — la ficha se
genera sola desde el `slug`.

Campos obligatorios: `slug`, `name`, `tag`, `host`, `url`, `line`, y las dos
capturas:

- `shot` — captura de página completa. La tarjeta la recorre entera al pasar el
  mouse, y la ficha la muestra sin recortar.
- `shotTop` — solo el encabezado en 16:10, para el reel de la portada, que nunca
  muestra más que eso y carga sobre el pliegue.

Campos opcionales, todos a mano: `featured` (sube el proyecto a la tarjeta grande;
marca solo uno), `detail`, `year`, `role`, `stack`, `hostLabel`, `cta`, `download`,
`shotNote`, `features` y `gallery`. La ficha solo muestra los que estén escritos,
así que nada se inventa por omisión.

## Estructura

```
src/
  assets/shots/           capturas de página completa
  assets/shots/reel/      recortes 16:10 del encabezado
  data/site.ts            contenido: contacto, proyectos, servicios, stack
  pages/index.astro       la portada
  pages/trabajo/[slug].astro  la ficha de cada proyecto
  styles/global.css       sistema de diseño
public/                   favicon, robots.txt, sprites del gato
```

Los sprites del gato viven en `public/` a propósito: son pixel art y un webp
animado, y pasar por el optimizador los rompería.

## Decisiones que no se ven

- **JavaScript de cliente.** Solo el enrutador de transiciones de vista de Astro
  y dos scripts en línea (el revelado al hacer scroll y el formulario de
  WhatsApp). Esos dos cuelgan de `astro:page-load`, no del load inicial: si no,
  al volver desde una ficha los elementos se quedarían invisibles.
- **Imágenes.** `<Picture>` genera AVIF y WebP con `srcset`.
- **Fuentes.** Auto-hospedadas por la API de fuentes de Astro
  (`experimental.fonts`). Cero peticiones a terceros en toda la página.
- **Animación por scroll.** La barra de progreso del nav y el drift de las
  capturas usan `animation-timeline` nativo, detrás de `@supports`. Los
  navegadores sin soporte se quedan con la versión estática, no con una rota.
- **Tres propiedades sobre la misma imagen** sin pisarse: `scale` tapa los bordes
  que descubre el drift, `translate` lo mueve el scroll y `object-position`
  recorre la captura en hover.
- **El gato del pie** es CSS puro: el viaje, el giro y las pausas sentado están
  en los keyframes, sin temporizadores ni listeners.
- **`prefers-reduced-motion`** apaga todo lo anterior, animación por animación.
