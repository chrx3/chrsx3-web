export const meta = {
  name: 'Christian Alcántara',
  alias: 'Chrsx3',
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
    'Ingeniero de software en Santiago de Chile. Construyo sitios, sistemas internos y aplicaciones móviles, y los mantengo corriendo en producción.',
}

/**
 * Solo proyectos autorizados o propios.
 * Los textos salen de la propia copia de cada sitio, no de inferencias.
 */
export const work = [
  {
    name: 'Pedi',
    tag: 'Producto propio',
    host: 'pedi.cl',
    url: 'https://pedi.cl',
    shot: '/shots/pedi.jpg',
    line: 'La carta en un QR y el pedido llega armado al WhatsApp del local. Sin apps intermediarias y sin comisión por venta.',
  },
  {
    name: 'Katemi',
    tag: 'Sitio corporativo',
    host: 'katemi.cl',
    url: 'https://katemi.cl',
    shot: '/shots/katemi.jpg',
    line: 'Proyectos de ingeniería, construcción e instalaciones para los sectores comercial, industrial y de servicios.',
  },
  {
    name: 'HM Inova',
    tag: 'Sitio corporativo',
    host: 'hminovachile.cl',
    url: 'https://hminovachile.cl',
    shot: '/shots/hminova.jpg',
    line: 'Energía solar fotovoltaica, servicios eléctricos, electromovilidad y climatización para viviendas e instituciones.',
  },
  {
    name: 'Pet Float',
    tag: 'App publicada',
    host: 'Google Play',
    url: 'https://play.google.com/store/apps/details?id=com.chrsx3.petfloat',
    shot: null,
    line: 'Aplicación Android publicada en Google Play, con panel web para administrar contenido.',
  },
]

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
  Front: ['React', 'Next.js', 'Astro'],
  Móvil: ['React Native', 'Expo'],
  Datos: ['PostgreSQL', 'PocketBase'],
  Infra: ['Docker', 'Coolify', 'Traefik', 'Linux'],
}
