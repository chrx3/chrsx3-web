# chrsx3.com

Sitio personal y portafolio de Christian Alcántara.

Astro con salida estática: la portada más una ficha por proyecto en
`/trabajo/<slug>`. Desplegado en servidor propio con Coolify, detrás de nginx.

El diseño es «Ficha técnica» en negativo: papel carbón, tinta clara, una
grotesca de sistema a tamaño cartel y un solo azul cobalto como tinta de
imprenta. La retícula de 12 columnas queda a la vista con filetes.

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

Todo el contenido vive en `src/data/site.ts`. Para sumar un proyecto, agrega una
entrada a `work`; no hay que tocar plantillas ni crear páginas — la ficha se
genera sola desde el `slug`, y la portada lo suma a la tira, al índice y al
visor. El orden de `work` es la numeración del índice (01, 02…).

Campos obligatorios: `slug`, `name`, `tag`, `host`, `url`, `line`, y las dos
capturas:

- `shot` — captura completa. El visor de la portada la recorre de arriba abajo,
  y la ficha la muestra sin recortar. Si es más baja que el marco del visor (una
  sola pantalla, no una página entera), el visor la deja quieta y centrada.
- `shotTop` — solo el encabezado en 16:10 (760×475). Lo usan la tira sobre el
  pliegue y las miniaturas del índice en móvil.

Campos opcionales, todos a mano; la ficha solo muestra los que estén escritos,
así que nada se inventa por omisión:

- `featured` — lo marca como destacado en la ficha de la portada. Marca solo uno.
- `detail`, `year`, `role`, `stack`, `hostLabel` (rótulo del host; si falta,
  «Sitio»), `cta` (texto del botón al proyecto; si falta, «Abrir {host}»),
  `shotNote` (pie de la captura), `gallery`.
- `features` — lista de funciones. Un proyecto con `features` se abre en la
  portada en un bloque extendido bajo su fila (detalle, stack, funciones y
  botones), además de mostrarlas en su ficha.
- `downloads` — botones de descarga (`{ label, url }[]`), en el bloque extendido
  y en la ficha. Van antes del botón `cta`, que pasa a ser secundario.

## Estructura

```
src/
  assets/shots/               capturas completas
  assets/shots/reel/          recortes 16:10 del encabezado
  data/site.ts                contenido: contacto, proyectos, servicios, stack
  layouts/Base.astro          head, barra, pie, gato y el script de cliente
  pages/index.astro           la portada
  pages/trabajo/[slug].astro  la ficha de cada proyecto
  styles/global.css           sistema de diseño (portada y fichas)
public/                       favicon, robots.txt, sprites del gato
```

Los sprites del gato viven en `public/` a propósito: son pixel art y un webp
animado, y pasar por el optimizador los rompería.

## Decisiones que no se ven

- **Cero peticiones a terceros.** Ni fuentes, ni analítica, ni APIs desde el
  navegador. Todo sale del mismo dominio.
- **Fuentes del sistema.** `--sans` cae en Helvetica Neue / Segoe UI y `--mono`
  en SF Mono / Cascadia. No hay webfonts ni pipeline de fuentes.
- **Contraste.** La paleta está en `:root` de `global.css`, con el ratio WCAG de
  cada par anotado al lado. Todo el texto pasa 4.5:1.
- **Sin formulario de contacto.** «Hablemos» abre el correo con el asunto ya
  escrito; al lado van Correo, LinkedIn y GitHub. No hay nada que guardar ni que
  validar del lado del sitio.
- **Versión de Atic en el build.** `site.ts` consulta el último release de
  GitHub al compilar: tag y enlaces directos de Windows y macOS. Si la API no
  responde, usa el respaldo escrito ahí. El navegador nunca llama a GitHub.
- **Visor.** En escritorio, la fila bajo el cursor o con el foco del teclado
  elige la captura del visor fijo. Escucha `pointermove`, no `pointerenter`: al
  hacer scroll con el mouse quieto, la fila que pasa por debajo no le roba el
  visor a la que tiene el foco. En móvil el visor está en `display: none` y sus
  imágenes son lazy, así que las capturas completas no se descargan; cada fila
  lleva su miniatura 16:10.
- **Reloj.** La hora de Santiago en la barra sale de `Intl.DateTimeFormat` con
  la zona `America/Santiago`. Sin red.
- **Gato.** El de Pet Float cruza el pie una vez, cuando entra en pantalla, y se
  sienta al final. Lleva un contorno de un píxel para leerse sobre el carbón.
- **JavaScript de cliente.** El enrutador de transiciones de vista de Astro y un
  solo script (reloj, visor y gato) en `Base.astro`. Cuelga de
  `astro:page-load`, no del load inicial, para volver a enganchar todo después
  de cada navegación.
- **Imágenes.** `<Picture>` genera AVIF y WebP con `srcset` y `sizes` ajustados
  a cada uso: recortes de 380/760 px para la tira y las miniaturas, capturas de
  560/1120 px para el visor y hasta 1440 px en la ficha.
- **`prefers-reduced-motion`** apaga el parpadeo del cursor, la entrada del
  titular y de la tira, el recorrido del visor, el paseo del gato, las
  transiciones y el scroll suave.
