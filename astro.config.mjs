// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

/* Español en la raíz, inglés bajo /en/ (ver src/i18n/ui.ts). El sitemap enlaza
   cada página con su par en el otro idioma. */
export default defineConfig({
  site: 'https://chrsx3.com',
  output: 'static',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-CL', en: 'en' } },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
})
