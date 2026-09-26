/* `shot` es la captura completa: el visor de la portada la recorre entera y la
   ficha la muestra sin recortar. `shotTop` es solo el encabezado en 16:10, para
   la tira sobre el pliegue y las miniaturas del índice en móvil. */
import atic from '../assets/shots/atic.jpg'
import halftone from '../assets/shots/halftone.jpg'
import hminova from '../assets/shots/hminova.jpg'
import katemi from '../assets/shots/katemi.jpg'
import pedi from '../assets/shots/pedi.jpg'
import petfloat from '../assets/shots/petfloat.jpg'

import aticTop from '../assets/shots/reel/atic.jpg'
import halftoneTop from '../assets/shots/reel/halftone.jpg'
import hminovaTop from '../assets/shots/reel/hminova.jpg'
import katemiTop from '../assets/shots/reel/katemi.jpg'
import pediTop from '../assets/shots/reel/pedi.jpg'
import petfloatTop from '../assets/shots/reel/petfloat.jpg'

import aticMarca from '../assets/shots/atic/marca.jpg'

/* Atic se publica en GitHub Releases, así que la ficha no escribe la versión ni
   los enlaces a mano: los resuelve del último release en cada build. Si la API
   no responde, cae a estos valores de respaldo, que conviene refrescar de vez
   en cuando. */
const aticFallback = {
  tag: 'v0.4.41',
  windows: 'https://github.com/chrx3/atic/releases/latest',
  mac: 'https://github.com/chrx3/atic/releases/latest',
}

async function aticRelease() {
  try {
    const res = await fetch('https://api.github.com/repos/chrx3/atic/releases/latest', {
      headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'chrsx3-web' },
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) return aticFallback
    const rel = (await res.json()) as {
      tag_name?: string
      assets?: { name: string; browser_download_url: string }[]
    }
    const asset = (re: RegExp) => rel.assets?.find((a) => re.test(a.name))?.browser_download_url
    return {
      tag: rel.tag_name ?? aticFallback.tag,
      windows: asset(/x64-setup\.exe$/i) ?? aticFallback.windows,
      mac: asset(/universal\.dmg$/i) ?? asset(/\.dmg$/i) ?? aticFallback.mac,
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
    'Ingeniero de software en Santiago de Chile. Construyo sitios, sistemas internos y aplicaciones móviles, y los mantengo corriendo en producción.',
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
    line: 'Asistente de escritorio local-first. Grabá reuniones, dictá, capturá y pegá — sin ir a buscar una ventana.',
    detail:
      'Vive en una barra flotante (la pill), la bandeja del sistema y atajos globales. El audio se graba en tu PC; Whisper transcribe en local. Licencia MIT.',
    year: '2026',
    role: 'Autor',
    stack: ['Tauri', 'Svelte', 'Rust', 'Whisper'],
    cta: 'Ver en GitHub',
    downloads: [
      { label: 'Descargar para Windows', url: latestAtic.windows },
      { label: 'Descargar para macOS', url: latestAtic.mac },
    ],
    shotNote: `Repositorio público · ${latestAtic.tag} · MIT`,
    gallery: [
      { src: aticMarca, caption: 'Marca del proyecto' },
    ],
    features: [
      {
        title: 'Reuniones',
        body: 'Mic + sistema en pistas separadas, transcripción local, resumen editable, envío por correo. La detección de llamadas solo sugiere grabar.',
      },
      {
        title: 'Dictado',
        body: 'Atajo global (toggle o push-to-talk). Transcribe y pega donde estabas escribiendo.',
      },
      {
        title: 'Clipboard',
        body: 'Historial local de texto e imágenes. No archiva lo que un gestor de contraseñas marcó como efímero.',
      },
      {
        title: 'Textos',
        body: 'Snippets a propósito, más un bloc de notas. Distinto del historial: esto lo guardás vos.',
      },
      {
        title: 'Capturas',
        body: 'Ventana, región o monitor, al portapapeles y a un shelf flotante.',
      },
      {
        title: 'Apps',
        body: 'Launcher tipo Spotlight (mismo atajo que Ctrl+Space).',
      },
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
    line: 'Convierte imágenes, texto y formas en tramas halftone y dither, con vista previa en vivo y exportación PNG. Todo se procesa en el navegador.',
    year: '2026',
    role: 'Autor',
    stack: ['Svelte', 'TypeScript', 'Canvas', 'Web Workers'],
    cta: 'Abrir Halftone Studio',
    shotNote: 'En producción · sin cuenta y sin servidor de procesamiento',
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
    line: 'La carta en un QR y el pedido llega armado al WhatsApp del local. Sin apps intermediarias y sin comisión por venta.',
  },
  {
    slug: 'katemi',
    name: 'Katemi',
    tag: 'Sitio corporativo',
    host: 'katemi.cl',
    url: 'https://katemi.cl',
    shot: katemi,
    shotTop: katemiTop,
    line: 'Proyectos de ingeniería, construcción e instalaciones para los sectores comercial, industrial y de servicios.',
  },
  {
    slug: 'hm-inova',
    name: 'HM Inova',
    tag: 'Sitio corporativo',
    host: 'hminovachile.cl',
    url: 'https://hminovachile.cl',
    shot: hminova,
    shotTop: hminovaTop,
    line: 'Energía solar fotovoltaica, servicios eléctricos, electromovilidad y climatización para viviendas e instituciones.',
  },
  {
    slug: 'pet-float',
    name: 'Pet Float',
    tag: 'App publicada',
    host: 'Google Play',
    url: 'https://play.google.com/store/apps/details?id=com.chrsx3.petfloat',
    shot: petfloat,
    shotTop: petfloatTop,
    line: 'Un gato de píxeles que vive flotando sobre la pantalla, encima de cualquier app que estés usando. Hecha con React Native y publicada en Google Play.',
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
}

export const services = [
  {
    title: 'Sitios corporativos',
    body: 'La cara pública de tu empresa: rápida, indexable y hecha para que el visitante te contacte.',
  },
  {
    title: 'Sistemas a medida',
    body: 'Paneles de administración y automatizaciones para reemplazar las planillas que ya no dan más.',
  },
  {
    title: 'Aplicaciones móviles',
    body: 'Desarrollo y publicación en Google Play, con panel web para administrar el contenido.',
  },
  {
    title: 'Integraciones',
    body: 'WhatsApp, pasarelas de pago, APIs de terceros y sistemas heredados que nadie quiere tocar.',
  },
  {
    title: 'Infraestructura',
    body: 'Despliegue, dominios, certificados y monitoreo en servidor propio. Lo dejo corriendo, no desaparezco.',
  },
]

/** Solo lo verificable en repos propios, en el servidor o confirmado por Christian. */
export const stack = {
  Lenguajes: ['TypeScript', 'Python', 'JavaScript', 'Rust'],
  Front: ['React', 'Next.js', 'Astro', 'Svelte'],
  Móvil: ['React Native', 'Expo'],
  Datos: ['PostgreSQL', 'PocketBase'],
  Infra: ['Docker', 'Coolify', 'Traefik', 'Linux', 'Tauri'],
}
