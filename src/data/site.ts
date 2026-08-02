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
    'Ingeniero de software en Santiago de Chile. Construyo sitios, sistemas internos y aplicaciones móviles para empresas, y los mantengo corriendo en producción.',
}

/**
 * Solo proyectos con autorización explícita del cliente o propios.
 * Los descriptores salen de la propia meta description de cada sitio.
 */
export const board = [
  { host: 'katemi.cl', url: 'https://katemi.cl', sector: 'Ingeniería y construcción' },
  { host: 'hminovachile.cl', url: 'https://hminovachile.cl', sector: 'Energía y climatización' },
  { host: 'pedi.cl', url: 'https://pedi.cl', sector: 'Gastronomía' },
  {
    host: 'Pet Float · Google Play',
    url: 'https://play.google.com/store/apps/details?id=com.chrsx3.petfloat',
    sector: 'App móvil',
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
    body: 'Desarrollo y publicación en Google Play, con panel web para administrar el contenido sin depender de mí.',
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

/** Solo lo verificable en repos propios, en el servidor o confirmado por Christian. */
export const stack = {
  Lenguajes: ['TypeScript', 'Python', 'JavaScript', 'Rust'],
  Front: ['React', 'Next.js', 'Astro'],
  Móvil: ['React Native', 'Expo'],
  Datos: ['PostgreSQL', 'PocketBase'],
  Infra: ['Docker', 'Coolify', 'Traefik', 'Linux'],
}
