/* `shot` es la captura completa: el visor de la portada la recorre entera y la
   ficha la muestra sin recortar. `shotTop` es solo el encabezado en 16:10, para
   la tira sobre el pliegue y las miniaturas del índice en móvil. */
import atic from '../assets/shots/atic-code.png'
import halftone from '../assets/shots/halftone.jpg'
import halftone3d from '../assets/shots/halftone-3d.jpg'
import hminova from '../assets/shots/hminova.jpg'
import katemi from '../assets/shots/katemi.jpg'
import pedi from '../assets/shots/pedi.jpg'
import petfloat from '../assets/shots/petfloat.jpg'

import aticTop from '../assets/shots/reel/atic-code.png'
import halftoneTop from '../assets/shots/reel/halftone.jpg'
import hminovaTop from '../assets/shots/reel/hminova.jpg'
import katemiTop from '../assets/shots/reel/katemi.jpg'
import pediTop from '../assets/shots/reel/pedi.jpg'
import petfloatTop from '../assets/shots/reel/petfloat.jpg'

/* Capturas de la pill actual (GPUI). Las de la versión anterior en Tauri
   (tira, pizarra, marca) ya no se usan: no muestran la app que se descarga. */
import aticCodeHd from '../assets/shots/atic/atic-code-hd.jpg'
import aticReuniones from '../assets/shots/atic/reuniones.png'
import aticAjustes from '../assets/shots/atic/ajustes.png'
import aticCelular from '../assets/shots/atic/celular.png'
import aticTextos from '../assets/shots/atic/textos.png'
import aticApps from '../assets/shots/atic/apps.png'

import androidMusica from '../assets/shots/android/01-musica-con-letra.jpg'
import androidAtajos from '../assets/shots/android/04-atajos.jpg'
import androidReunion from '../assets/shots/android/07-resumen-de-reunion.jpg'
import androidPermiso from '../assets/shots/android/08-permiso-de-agente.jpg'
import androidPanel from '../assets/shots/android/09-panel-tactil-pc.jpg'

import m3Buttons from '../assets/shots/m3/buttons-dark.jpg'
import m3Shapes from '../assets/shots/m3/shapes-dark.jpg'
import m3Selection from '../assets/shots/m3/selection-light.jpg'
import m3Progress from '../assets/shots/m3/progress-dark.jpg'

/* Atic se publica en GitHub Releases, así que la ficha no escribe la versión ni
   los enlaces a mano: los resuelve de los últimos releases en cada build. No
   todos los releases traen los dos instaladores (a veces se publica solo el de
   macOS), así que cada botón apunta al release más nuevo que sí tenga el suyo y,
   si no es el último, lo dice. Si la API no responde, cae a estos valores de
   respaldo, que conviene refrescar de vez en cuando. */
const releasesPage = 'https://github.com/chrx3/atic/releases/latest'
const aticFallback = {
  tag: 'v0.5.6',
  windows: releasesPage,
  windowsTag: undefined as string | undefined,
  mac: releasesPage,
}

async function aticRelease() {
  try {
    const res = await fetch('https://api.github.com/repos/chrx3/atic/releases?per_page=15', {
      headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'chrsx3-web' },
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) return aticFallback
    const releases = (await res.json()) as {
      tag_name?: string
      draft?: boolean
      prerelease?: boolean
      assets?: { name: string; browser_download_url: string }[]
    }[]
    const published = releases.filter((r) => !r.draft && !r.prerelease)
    const find = (re: RegExp) => {
      for (const rel of published) {
        const asset = rel.assets?.find((a) => re.test(a.name))
        if (asset) return { url: asset.browser_download_url, tag: rel.tag_name }
      }
    }
    const windows = find(/x64-setup\.exe$/i)
    const mac = find(/universal\.dmg$/i) ?? find(/\.dmg$/i)
    return {
      tag: published[0]?.tag_name ?? aticFallback.tag,
      windows: windows?.url ?? releasesPage,
      windowsTag: windows?.tag,
      mac: mac?.url ?? releasesPage,
    }
  } catch {
    return aticFallback
  }
}

const latestAtic = await aticRelease()

export const meta = {
  name: 'Christian Alcántara',
  alias: 'Chrsx3',
  city: 'Santiago de Chile',
  email: 'chris.alc.13@gmail.com',
  linkedin: 'https://www.linkedin.com/in/christian-alcántara-234888213/',
  github: 'https://github.com/chrx3',
  description:
    'Ingeniero de software en Santiago de Chile. Hago con Claude, Codex y Cursor las herramientas que uso todos los días, como Atic, y sitios que mantengo en producción.',
}

/**
 * Solo proyectos autorizados o propios.
 * Los textos salen de la propia copia de cada sitio, no de inferencias.
 *
 * El orden de la lista es la numeración del índice (01, 02…).
 * `featured: true` lo marca como destacado en la ficha de la portada. Marca solo
 * uno; si no hay ninguno, se destaca el primero de la lista.
 * Los proyectos con `features` se abren en un bloque extendido bajo su fila.
 */
export const work = [
  {
    slug: 'atic',
    name: 'Atic',
    tag: 'Open source',
    host: 'github.com/chrx3/atic',
    hostLabel: 'Repo',
    url: 'https://github.com/chrx3/atic',
    shot: atic,
    shotTop: aticTop,
    featured: true,
    line: 'Caja de herramientas de escritorio local-first en una pill flotante: agentes, reuniones, dictado, capturas y más — sin ir a buscar una ventana.',
    detail:
      'Rust puro con GPUI, para Windows y macOS. Vive en una pill flotante (en Mac, en el notch) y en atajos globales. El audio se graba en tu equipo y Whisper transcribe en local. Licencia MIT.',
    year: '2026',
    role: 'Autor',
    stack: ['Rust', 'GPUI', 'Whisper'],
    cta: 'Ver en GitHub',
    downloads: [
      {
        label: `Descargar para Windows${latestAtic.windowsTag && latestAtic.windowsTag !== latestAtic.tag ? ` (${latestAtic.windowsTag})` : ''}`,
        url: latestAtic.windows,
      },
      { label: 'Descargar para macOS', url: latestAtic.mac },
    ],
    shotNote: `Atic Code · repositorio público · ${latestAtic.tag} · MIT`,
    story: [
      {
        label: 'Por qué existe',
        title: 'Las herramientas estaban, pero funcionaban mal.',
        body: 'Windows trae utilidades para casi todo, pero muchas fallan o estorban. Y en las reuniones me pedían anotar mientras tenía que estar concentrado en lo que se hablaba: dos cosas a la vez.',
      },
      {
        label: 'Cómo creció',
        title: 'Cada día aparecía algo que quería tener a mano.',
        body: 'Fui planificando cada herramienta según lo que me faltaba en el trabajo, y las quise lo más livianas posible: siempre a la vista, accesibles con un atajo, sin abrir otra aplicación.',
      },
    ],
    gallery: [
      { src: aticReuniones, caption: 'Reuniones: grabaciones, transcripción y resumen' },
      { src: aticCelular, caption: 'Celular: avisos del teléfono en el PC' },
      { src: aticTextos, caption: 'Tareas del día, en el panel de Textos' },
      { src: aticApps, caption: 'Launcher de apps' },
      { src: aticAjustes, caption: 'Ajustes' },
    ],
    features: [
      {
        title: 'Agentes y Atic Code',
        body: 'Claude Code, Codex, Cursor y OpenCode en una consola con interfaz. Atic Code suma un espacio de trabajo con carpetas, paneles, cambios y vista previa web. Atic no autentica: usa el CLI que ya tienes logueado.',
      },
      {
        title: 'Reuniones',
        body: 'Mic + sistema en pistas separadas, transcripción local con subtítulos en vivo, resumen editable y envío por correo. La detección de llamadas solo sugiere grabar.',
      },
      {
        title: 'Dictado',
        body: 'Atajo global (toggle o push-to-talk). Transcribe y pega donde estabas escribiendo.',
      },
      {
        title: 'Capturas',
        body: 'Ventana, región o monitor, al portapapeles y a un shelf flotante. Graba la pantalla y, en Mac, edítala y expórtala. Copiar texto elige el texto de una imagen por columnas.',
      },
      {
        title: 'Pizarra y Flip',
        body: 'Congela la pantalla y márcala ahí mismo, o dibuja y anota en Flip. Lo dibujado se puede mandar a un agente.',
      },
      {
        title: 'Clipboard y Textos',
        body: 'Historial local de texto e imágenes, que no archiva lo que un gestor de contraseñas marcó como efímero, y aparte los textos que guardas tú.',
      },
      {
        title: 'Celular',
        body: 'Empareja tu Android con un QR: archivos, avisos, llamadas, portapapeles, control táctil y la pantalla de uno en el otro. Sin cuentas ni nube.',
      },
      {
        title: 'Apps',
        body: 'Launcher tipo Spotlight, con calculadora y emoji.',
      },
    ],
  },
  {
    slug: 'atic-android',
    name: 'Atic para Android',
    tag: 'App Android',
    host: 'Google Play · prueba cerrada',
    hostLabel: 'Estado',
    url: 'mailto:chris.alc.13@gmail.com?subject=Quiero%20probar%20Atic%20para%20Android',
    cta: 'Pedir acceso a la prueba',
    shot: androidMusica,
    shotTop: androidMusica,
    line: 'Una isla dinámica que sale de la cámara frontal y se ve sobre cualquier app: la música con su letra, avisos, llamadas, alarmas y el tiempo. Funciona sola, y con Atic en el PC hace lo que ninguna otra isla hace.',
    year: '2026',
    role: 'Autor',
    stack: ['Kotlin', 'Jetpack Compose', 'Rust compartido con Atic', 'Android 16+'],
    shotNote: 'La isla con la canción que suena y su letra',
    highlights: [
      'Ves y apruebas lo que piden tus agentes del PC, con huella o PIN.',
      'Portapapeles en los dos sentidos y el celular como panel táctil del PC.',
      'Graba reuniones y las transcribe sin internet, con Gemini Nano en el equipo.',
      'Se conecta al PC por QUIC cifrado, sin cuentas: el pareo es un QR de un solo uso.',
    ],
    video: {
      src: '/video/atic-android-trailer.mp4',
      poster: '/video/atic-android-trailer.jpg',
      vertical: '/video/atic-android-trailer-vertical.mp4',
      verticalPoster: '/video/atic-android-trailer-vertical.jpg',
      label: 'Trailer de Atic para Android',
    },
    gallery: [
      { src: androidPermiso, caption: 'Un agente del PC pidiendo permiso desde la isla' },
      { src: androidReunion, caption: 'Resumen de una reunión grabada en el celular' },
      { src: androidPanel, caption: 'El celular usado como panel táctil del PC' },
      { src: androidAtajos, caption: 'Atajos en la isla abierta' },
    ],
  },
  {
    slug: 'gpui-m3',
    name: 'gpui-m3',
    tag: 'Librería open source',
    host: 'github.com/chrx3/gpui-m3',
    hostLabel: 'Repo',
    url: 'https://github.com/chrx3/gpui-m3',
    cta: 'Ver en GitHub',
    docs: 'https://docs.rs/gpui-m3',
    install: 'cargo add gpui-m3',
    shot: m3Buttons,
    shotTop: m3Buttons,
    line: 'Material 3 Expressive de Google, portado a Rust para GPUI, el framework de interfaz con GPU del editor Zed. Nativo, sin web view.',
    year: '2026',
    role: 'Autor',
    stack: ['Rust', 'GPUI', 'crates.io'],
    shotNote: 'Galería de componentes, tema oscuro',
    highlights: [
      'Formas que se transforman, ripples, color dinámico desde cualquier color semilla y las 14 formas de M3 Expressive.',
      'Movimiento con resortes reales: GPUI solo acepta curvas entre 0 y 1, así que los resortes se resuelven de forma analítica con los valores oficiales de Jetpack Compose.',
      'Más de 60 componentes: botones, menús, campos de texto, editor de código, diff, Markdown, selector de atajos.',
    ],
    gallery: [
      { src: m3Shapes, caption: 'Las formas de M3 Expressive' },
      { src: m3Selection, caption: 'Controles de selección, tema claro' },
      { src: m3Progress, caption: 'Indicadores de progreso ondulados' },
    ],
  },
  {
    slug: 'halftone-studio',
    name: 'Halftone Studio',
    tag: 'Herramienta propia',
    host: 'halftone.chrsx3.com',
    hostLabel: 'App',
    url: 'https://halftone.chrsx3.com',
    shot: halftone,
    shotTop: halftoneTop,
    line: 'Convierte imágenes, texto, formas y figuras 3D en tramas halftone y dither, con vista previa en vivo y exportación PNG. Todo se procesa en el navegador.',
    year: '2026',
    role: 'Autor',
    stack: ['Svelte', 'TypeScript', 'Canvas', 'Web Workers'],
    cta: 'Abrir Halftone Studio',
    shotNote: 'En producción · sin cuenta y sin servidor de procesamiento',
    gallery: [{ src: halftone3d, caption: 'Modo 3D: un toro en trama, que se gira arrastrándolo sobre el lienzo' }],
    highlights: [
      'El render corre en un Web Worker con OffscreenCanvas, fuera del hilo principal.',
      'Seis recetas de tinta, de una a cuatro tintas, que después se ajustan a mano.',
      'Exporta PNG de hasta 2800 px por lado.',
    ],
    features: [
      {
        title: 'Recetas de tinta',
        body: 'Seis puntos de partida, de una tinta a cuatro tintas visuales, que después se ajustan a mano.',
      },
      {
        title: 'Puntos o dither',
        body: 'Trama clásica que escala cada punto, o dither por difusión de error con puntos círculo o cuadrado.',
      },
      {
        title: 'Antes / después',
        body: 'Divisor que se arrastra con mouse, dedo o teclado para comparar la fuente con el resultado.',
      },
      {
        title: 'Imagen, texto y forma',
        body: 'Sube una foto o escribe una frase; las formas y el texto usan degradados para aprovechar la trama.',
      },
      {
        title: '3D',
        body: 'Esfera, toro, cubo o gota convertidos en trama. La figura se gira arrastrándola sobre el lienzo, y puede girar sola al animar.',
      },
      {
        title: 'Local',
        body: 'El render corre en un Web Worker con OffscreenCanvas. La imagen nunca sale del dispositivo.',
      },
      {
        title: 'Exportación',
        body: 'PNG de hasta 2800 px por lado, generado fuera del hilo principal.',
      },
    ],
  },
  {
    slug: 'pedi',
    name: 'Pedi',
    tag: 'Producto propio',
    host: 'pedi.cl',
    url: 'https://pedi.cl',
    shot: pedi,
    shotTop: pediTop,
    line: 'La carta de un local en un QR. El cliente arma su pedido desde el celular y llega listo al WhatsApp del local, sin apps intermediarias y sin comisión por venta.',
  },
  {
    slug: 'katemi',
    name: 'Katemi',
    tag: 'Sitio corporativo',
    host: 'katemi.cl',
    url: 'https://katemi.cl',
    shot: katemi,
    shotTop: katemiTop,
    client: true,
    line: 'Sitio de una empresa de ingeniería, construcción e instalaciones. Desplegado y mantenido en mi servidor.',
  },
  {
    slug: 'hm-inova',
    name: 'HM Inova',
    tag: 'Sitio corporativo',
    host: 'hminova.cl',
    url: 'https://hminova.cl',
    shot: hminova,
    shotTop: hminovaTop,
    client: true,
    line: 'Sitio de una empresa de energía solar, electromovilidad y climatización. Desplegado y mantenido en mi servidor.',
  },
  {
    slug: 'pet-float',
    name: 'Pet Float',
    tag: 'App publicada',
    host: 'Google Play',
    url: 'https://play.google.com/store/apps/details?id=com.chrsx3.petfloat',
    shot: petfloat,
    shotTop: petfloatTop,
    line: 'Un gato de píxeles que vive flotando sobre la pantalla, encima de cualquier app que estés usando. El mismo que camina en la portada.',
    stack: ['React Native', 'Expo'],
    cta: 'Ver en Google Play',
  },
] satisfies Project[]

export type Project = {
  /** Identifica la ficha en /trabajo/<slug> y enlaza la transición de vista */
  slug: string
  name: string
  tag: string
  host: string
  /** Rótulo del host en la ficha. Si no está, se usa «Sitio». */
  hostLabel?: string
  url: string
  shot: ImageMetadata
  shotTop: ImageMetadata
  line: string
  featured?: boolean
  detail?: string
  /**
   * Campos de la ficha. Todos opcionales y todos a mano: la ficha solo muestra
   * los que estén escritos, así que nada se inventa por omisión.
   * `stack` son las tecnologías que efectivamente usaste en ese proyecto.
   */
  year?: string
  role?: string
  stack?: string[]
  /** Texto del botón principal. Si no está, se usa «Abrir {host}». */
  cta?: string
  /** Botones de descarga (bloque extendido y ficha). Atic los arma desde su último release. */
  downloads?: { label: string; url: string }[]
  /** Pie de la captura principal. Si no está, se asume un sitio en producción. */
  shotNote?: string
  gallery?: { src: ImageMetadata; caption: string }[]
  features?: { title: string; body: string }[]
  /** La historia del proyecto (por qué existe, cómo creció…). La ficha la muestra antes de «Qué hace». */
  story?: { label: string; title: string; body: string }[]
  /** Puntos concretos que la portada lista bajo la descripción */
  highlights?: string[]
  /** Sitio de cliente: va a la lista compacta de la portada */
  client?: boolean
  /** Trailer en /public/video (horizontal y, opcional, vertical para móvil) */
  video?: { src: string; poster: string; vertical?: string; verticalPoster?: string; label: string }
  /** Librerías: enlace a la documentación y comando de instalación */
  docs?: string
  install?: string
}

/**
 * Herramientas de la pill de Atic, en el orden de las pestañas de la portada.
 * Cada una muestra su medio real: `shot` (captura), `video` o, si no hay una
 * captura vigente de la versión GPUI, `steps`: un esquema en tres pasos dibujado
 * en código. Nunca una captura de otra herramienta o de la versión anterior.
 */
export type ToolStep = { visual: 'key' | 'wave' | 'caret' | 'mark'; label?: string; text: string }
export type Tool = {
  id: string
  name: string
  key: string
  body: string
  caption: string
  shot?: ImageMetadata
  alt?: string
  video?: { src: string; poster: string }
  steps?: ToolStep[]
}

export const aticTools: Tool[] = [
  {
    id: 'agentes', name: 'Agentes', key: 'Atic Code',
    body: 'Claude Code, Codex, Cursor y OpenCode en una consola con interfaz, con carpetas, paneles, cambios y vista previa web. Usa el CLI que ya tienes logueado.',
    shot: aticCodeHd, alt: 'Atic Code con un agente trabajando en un repositorio', caption: 'Atic Code',
  },
  {
    id: 'reuniones', name: 'Reuniones', key: 'Graba y transcribe en local',
    body: 'Micrófono y sistema en pistas separadas, subtítulos en vivo, resumen editable y envío por correo. Para no tener que anotar y escuchar a la vez.',
    shot: aticReuniones, alt: 'Panel de Reuniones con grabaciones, transcripción y resumen', caption: 'Grabaciones, transcripción y resumen',
  },
  {
    id: 'dictado', name: 'Dictado', key: 'Atajo global',
    body: 'Un atajo, hablas, y el texto aparece donde estabas escribiendo: Chrome, Word o el compositor de agentes. Con Whisper local el audio no sale del equipo.',
    caption: 'Tres pasos, sin abrir ninguna ventana',
    steps: [
      { visual: 'key', text: 'Lo tocas o lo mantienes, desde cualquier app.' },
      { visual: 'wave', text: 'Hablas. Whisper transcribe en tu equipo.' },
      { visual: 'caret', label: 'texto listo', text: 'Se pega donde estabas escribiendo.' },
    ],
  },
  {
    id: 'capturas', name: 'Capturas', key: 'Ventana, región o monitor',
    body: 'Al portapapeles y a un shelf flotante. Graba la pantalla y, en Mac, edítala y expórtala. También copia el texto de una imagen.',
    video: { src: '/video/atic-capturas.mp4', poster: '/video/atic-capturas.jpg' },
    alt: 'Video de Capturas: una región de pantalla capturada desde la pill', caption: 'Capturas, en uso',
  },
  {
    id: 'pizarra', name: 'Pizarra', key: 'Congela y marca',
    body: 'Congela la pantalla y márcala ahí mismo, o dibuja en Flip. Lo que dibujas se puede mandar a un agente.',
    caption: 'Congela, marca y manda',
    steps: [
      { visual: 'key', text: 'Congela la pantalla tal como está, sobre cualquier app.' },
      { visual: 'mark', text: 'Marcas, encierras y escribes encima.' },
      { visual: 'caret', label: '→ agente', text: 'Lo marcado se puede mandar a un agente.' },
    ],
  },
  {
    id: 'celular', name: 'Celular', key: 'Android ↔ PC',
    body: 'Empareja tu Android con un QR: archivos, avisos, llamadas, portapapeles y la pantalla de uno en el otro. Sin cuentas ni nube.',
    shot: aticCelular, alt: 'Avisos del teléfono mostrados en el PC', caption: 'Avisos del teléfono en el PC',
  },
  {
    id: 'textos', name: 'Clipboard y Textos', key: 'Historial local',
    body: 'Historial de texto e imágenes que no guarda lo que un gestor de contraseñas marcó como efímero, y aparte los textos que guardas tú.',
    shot: aticTextos, alt: 'Panel de Textos de Atic con la lista de tareas del día', caption: 'Tareas del día, en el panel de Textos',
  },
  {
    id: 'apps', name: 'Apps', key: 'Launcher',
    body: 'Un launcher tipo Spotlight para abrir apps, con calculadora y emoji.',
    shot: aticApps, alt: 'Launcher de apps de Atic', caption: 'Launcher',
  },
  {
    id: 'ajustes', name: 'Ajustes', key: 'Todo configurable',
    body: 'Atajos, herramientas visibles, modelos de transcripción y comportamiento de la pill.',
    shot: aticAjustes, alt: 'Pantalla de Ajustes de Atic', caption: 'Ajustes',
  },
]

/** Para mostrar la versión junto a las descargas */
export const aticVersion = latestAtic.tag
