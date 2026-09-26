// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

/* Sin webfonts: grotesca y mono del sistema (ver --sans y --mono en global.css) */
export default defineConfig({
  site: 'https://chrsx3.com',
  output: 'static',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
})
