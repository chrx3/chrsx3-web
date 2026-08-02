export const meta = {
  name: 'Christian Alcántara',
  alias: 'Chrsx3',
  role: 'Ingeniero de software',
  city: 'Santiago de Chile',
  email: 'chris.alc.13@gmail.com',
  phone: '+56984706809',
  phoneHuman: '+56 9 8470 6809',
  whatsapp:
    'https://wa.me/56984706809?text=' +
    encodeURIComponent('Hola Christian, vi tu sitio y quiero conversar un proyecto.'),
  linkedin: 'https://www.linkedin.com/in/christian-alcántara-234888213/',
  github: 'https://github.com/chrx3',
  description:
    'Ingeniero de software en Santiago de Chile. Construyo sitios, dashboards y aplicaciones móviles para empresas, y los mantengo corriendo en producción.',
}

/** Servicios públicos en producción. Solo lo que se puede mostrar y verificar. */
export const board = [
  { host: 'katemi.cl', url: 'https://katemi.cl', sector: 'Ingeniería y construcción', since: '2026' },
  { host: 'hminovachile.cl', url: 'https://hminovachile.cl', sector: 'Energía y climatización', since: '2026' },
  { host: 'pedi.cl', url: 'https://pedi.cl', sector: 'Gastronomía', since: '2026' },
  { host: 'ctp.chrsx3.com', url: 'https://ctp.chrsx3.com', sector: 'Construcción', since: '2026' },
  { host: 'vto.chrsx3.com', url: 'https://vto.chrsx3.com', sector: 'Óptica · visión por computador', since: '2026' },
  { host: 'modpack.chrsx3.com', url: 'https://modpack.chrsx3.com', sector: 'Gaming', since: '2026' },
  { host: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.chrsx3.petfloat', sector: 'App móvil Android', since: '2026' },
]

export const work = [
  {
    id: 'pedi',
    name: 'Pedi',
    kind: 'Producto propio',
    sector: 'Gastronomía · Chile',
    problem:
      'Los locales chicos pierden entre 15% y 30% de cada venta en comisiones de apps de delivery, y actualizar la carta impresa cuesta plata cada vez que cambia un precio.',
    built:
      'Carta digital con código QR que el propio local edita. El cliente arma el pedido desde su teléfono y llega listo al WhatsApp del local. Sin app que descargar, sin intermediarios, sin comisión por venta.',
    stack: ['TypeScript', 'React', 'PocketBase', 'WhatsApp'],
    url: 'https://pedi.cl',
    cta: 'Ver Pedi',
  },
  {
    id: 'vto',
    name: 'Probador virtual de lentes',
    kind: 'MVP',
    sector: 'Óptica · retail',
    problem:
      'Comprar lentes en línea falla porque nadie sabe cómo le van a quedar en la cara, y la devolución se come el margen.',
    built:
      'Probador que usa la cámara del navegador para ubicar los lentes sobre el rostro en tiempo real, siguiendo la malla facial. Corre entero en el dispositivo: no sube ninguna imagen a un servidor.',
    stack: ['Vite', 'React', 'MediaPipe Face Mesh', 'WebGL'],
    url: 'https://vto.chrsx3.com',
    cta: 'Probarlo con tu cámara',
  },
  {
    id: 'petfloat',
    name: 'Pet Float',
    kind: 'App publicada',
    sector: 'Android · Google Play',
    problem:
      'Quería una mascota de píxeles que viviera flotando sobre la pantalla del teléfono, sin abrir una app para verla.',
    built:
      'App Android nativa con la mascota como ventana flotante sobre el resto del sistema, más un panel web para administrar mascotas, sprites y contenido, y una herramienta propia para animar los sprite sheets.',
    stack: ['Kotlin', 'Android', 'TypeScript'],
    url: 'https://play.google.com/store/apps/details?id=com.chrsx3.petfloat',
    cta: 'Descargar en Google Play',
  },
  {
    id: 'katemi',
    name: 'Katemi',
    kind: 'Sitio corporativo',
    sector: 'Ingeniería y construcción',
    problem:
      'Una empresa que ejecuta proyectos industriales y comerciales necesitaba presentarse con la seriedad técnica que sus clientes esperan antes de licitar.',
    built:
      'Sitio corporativo con el catálogo de servicios, obras ejecutadas y respaldo técnico. Carga rápida, indexable, con el foco puesto en que el visitante entienda el alcance y llame.',
    stack: ['TypeScript', 'Next.js'],
    url: 'https://katemi.cl',
    cta: 'Ver katemi.cl',
  },
  {
    id: 'hminova',
    name: 'HM Inova',
    kind: 'Sitio corporativo',
    sector: 'Eléctrico, solar y climatización',
    problem:
      'Tres líneas de negocio distintas —proyectos eléctricos, fotovoltaica y climatización— compitiendo por la atención en una sola página.',
    built:
      'Estructura que separa las tres líneas sin fragmentar la marca, con el cumplimiento normativo y la certificación al frente, que es lo que decide la compra en este rubro.',
    stack: ['TypeScript', 'Next.js', 'PocketBase'],
    url: 'https://hminovachile.cl',
    cta: 'Ver hminovachile.cl',
  },
  {
    id: 'internos',
    name: 'Sistemas internos',
    kind: 'Bajo acuerdo de confidencialidad',
    sector: 'Retail, industria y logística',
    problem:
      'Equipos comerciales y de operaciones trabajando sobre planillas que nadie sincroniza, sin una sola vista confiable del estado real.',
    built:
      'Dashboards ejecutivos, automatizaciones y monitoreo de equipos en terreno para clientes que no puedo nombrar públicamente. Datos en vivo, alertas y control de acceso por rol.',
    stack: ['Python', 'React', 'PostgreSQL', 'Docker'],
    url: null,
    cta: null,
  },
]

export const services = [
  {
    title: 'Sitios corporativos',
    body: 'La cara pública de tu empresa: rápida, indexable en Google y hecha para que el visitante te contacte. Diseño y desarrollo con la misma persona.',
  },
  {
    title: 'Sistemas a medida',
    body: 'Dashboards, paneles de administración y automatizaciones para reemplazar las planillas que ya no dan más. Con usuarios, permisos y datos en vivo.',
  },
  {
    title: 'Aplicaciones móviles',
    body: 'Apps Android nativas, desde el desarrollo hasta la publicación en Google Play. Con panel web para administrar el contenido sin depender de mí.',
  },
  {
    title: 'Integraciones',
    body: 'Conectar lo que ya usas: WhatsApp, pasarelas de pago, APIs de terceros y sistemas heredados que nadie quiere tocar.',
  },
  {
    title: 'Infraestructura',
    body: 'Despliegue, dominios, certificados y monitoreo en servidor propio. Lo que construyo lo dejo corriendo, no te lo entrego y desaparezco.',
  },
]

export const stack = {
  Lenguajes: ['TypeScript', 'Python', 'Kotlin', 'Rust', 'SQL'],
  Front: ['React', 'Next.js', 'Astro', 'Tailwind'],
  Back: ['FastAPI', 'Node', 'PostgreSQL', 'PocketBase'],
  Infra: ['Docker', 'Coolify', 'Traefik', 'Linux'],
}
