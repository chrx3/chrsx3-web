# chrsx3.com

Sitio personal y portafolio de Christian Alcántara.

Astro con salida estática: la portada más una ficha por proyecto en
`/trabajo/<slug>`, en español (raíz) e inglés (`/en/`). Desplegado en servidor
propio con Coolify, detrás de nginx.

El diseño es «Herramientas a mano»: fondo claro neutro con una trama halftone
que se carga en las esquinas y se revela bajo el cursor, una grotesca con
carácter (Schibsted Grotesk) y una mono (IBM Plex Mono), alojadas en el propio
sitio con `@fontsource`, y el cobalto como único acento. La navegación es una
pill que parte como notch pegado arriba y se despega al bajar, como la de Atic.
Tiene tema claro y oscuro: sigue al sistema, y el botón de la pill lo fija.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

El build consulta la API de GitHub para resolver el último release de Atic (ver
abajo). Sin red, compila igual con los valores de respaldo.

## Contenido

El contenido en español vive en `src/data/site.ts`, y su traducción al inglés en
`src/data/site.en.ts` (por `slug`, solo los textos). Para sumar un proyecto,
agrega una entrada a `work` y su traducción; no hay que tocar plantillas ni crear
páginas: las dos fichas se generan solas desde el `slug` y la portada lo suma a
su sección. Si falta la traducción, la versión en inglés muestra el español.

Los textos de interfaz (botones, títulos de sección, etiquetas) están en
`src/i18n/ui.ts`, uno por idioma.

Campos obligatorios: `slug`, `name`, `tag`, `host`, `url`, `line`, y las dos
capturas:

- `shot`: captura completa. La ficha la muestra sin recortar.
- `shotTop`: solo el encabezado en 16:10 (760×475). Lo usan la portada y la
  lista de clientes.

Campos opcionales, todos a mano; la ficha solo muestra los que estén escritos,
así que nada se inventa por omisión:

- `detail`, `year`, `role`, `stack`, `hostLabel` (rótulo del host; si falta,
  «Sitio»), `cta` (texto del botón al proyecto; si falta, «Abrir {host}»),
  `shotNote` (pie de la captura), `gallery`.
- `story`: la historia del proyecto (`{ label, title, body }[]`). Atic la usa
  en su capítulo de la portada y en su ficha.
- `features`: lista de funciones, en la sección «Qué hace» de la ficha.
- `highlights`: puntos concretos bajo la descripción en la portada. En móvil se
  ocultan ahí y quedan en la ficha.
- `downloads`: botones de descarga (`{ label, url }[]`). Van antes del botón
  `cta`, que pasa a ser secundario.

## Estructura

```
src/
  assets/shots/               capturas completas
  assets/shots/reel/          recortes 16:10 del encabezado
  data/site.ts                contenido en español: contacto, proyectos y herramientas de Atic
  data/site.en.ts             su traducción al inglés y getSite(lang)
  i18n/ui.ts                  textos de interfaz por idioma y rutas (pathFor)
  layouts/Base.astro          head, pill de navegación, idioma y tema, trama de fondo y pie
  components/Home.astro       la portada, en cualquier idioma
  components/Case.astro       la ficha de un proyecto, en cualquier idioma
  pages/                      solo eligen el idioma: / y /trabajo/<slug>/ (es),
                              /en/ y /en/trabajo/<slug>/ (en)
  styles/global.css           sistema de diseño (portada y fichas)
public/                       favicon, robots.txt, videos y sprites del gato
```

Los sprites del gato viven en `public/` a propósito: son pixel art y un webp
animado, y pasar por el optimizador los rompería.

## Decisiones que no se ven

- **Cero peticiones a terceros.** Ni fuentes, ni analítica, ni APIs desde el
  navegador. Todo sale del mismo dominio.
- **Fuentes propias.** Schibsted Grotesk e IBM Plex Mono se alojan en el sitio
  con `@fontsource`, importadas en `Base.astro`.
- **Contraste.** La paleta está en `:root` de `global.css`, con el ratio WCAG de
  cada par anotado al lado. Todo el texto pasa 4.5:1: los rótulos mono usan
  `--ink-2` en lo claro y `--dark-ink-2` solo dentro de `.dark`.
- **Sin formulario de contacto.** El correo abre con el asunto ya escrito; al
  lado van LinkedIn y GitHub. No hay nada que guardar ni que validar.
- **Versión de Atic en el build.** `site.ts` consulta el último release de
  GitHub al compilar: tag y enlaces directos de Windows y macOS. Si la API no
  responde, usa el respaldo escrito ahí. El navegador nunca llama a GitHub.
- **Idiomas.** Español en la raíz para no romper los enlaces ya compartidos;
  inglés bajo `/en/`. Cada página declara su par con `hreflang` y el sitemap
  también. El selector de idioma lleva a la misma página en el otro idioma.
- **Tema.** Un script en línea del `<head>` pone `data-theme` antes de pintar
  (lo guardado en `localStorage` o, si no hay, el del sistema), así no hay
  destello. El oscuro tiene su propia paleta en `:root[data-theme="dark"]`: no
  es el claro invertido. El acento usa dos tokens: `--accent` para rellenos y
  `--accent-text` para texto, que en oscuro se aclara. Los canvas (trama y
  Halftone) se repintan con el evento `themechange`.
- **Pill de navegación.** Una sola forma SVG que JS transforma de notch a pill
  flotante. Lleva un borde claro casi transparente: invisible sobre la pared
  clara, pero la separa de las secciones oscuras.
- **Sin enrutador de cliente.** Cada página es una carga normal, así los scripts
  corren una vez y no hay que limpiar listeners entre vistas.
- **Imágenes.** `<Picture>` genera AVIF y WebP con `srcset` y `sizes` ajustados
  a cada uso. En la ficha, ninguna captura se amplía por sobre su ancho nativo.
- **Móvil.** La portada se queda con la línea, un medio y los botones de cada
  proyecto; viñetas, galerías y el trailer vertical viven en la ficha.
- **`prefers-reduced-motion`** apaga el autoplay del video de portada, la lupa
  de la trama, la animación de la pill, la entrada de los paneles, el paseo del
  gato y el scroll suave. El video de portada siempre se puede pausar.


## Herramientas de Atic

Las pestañas de la pill de Atic en la portada salen de `aticTools` en
`src/data/site.ts`. Cada herramienta muestra su medio real: `shot` (captura),
`video` (en `public/video/`) o `steps`, un esquema en tres pasos dibujado en
código para las que todavía no tienen captura de la versión GPUI. No uses
capturas de la versión anterior en Tauri.

## Proyectos en la portada

- Atic tiene su propio capítulo.
- Los proyectos con `client: true` van a la lista compacta de clientes.
- El resto va a «Proyectos propios», con `highlights` como lista de puntos. Atic
  para Android, gpui-m3, Halftone Studio y Pet Float tienen una vitrina propia
  (trailer, galería, trama en vivo y el gato); los demás muestran su captura.
- `video`, `docs` e `install` son opcionales y la ficha también los usa.
