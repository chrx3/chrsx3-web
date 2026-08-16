// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://chrsx3.com',
  output: 'static',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },

  /* Las fuentes se descargan y subsetean en el build, y se sirven desde el
     mismo dominio. Sin fonts.googleapis.com ni fonts.gstatic.com. */
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Fraunces',
        cssVariable: '--font-display',
        styles: ['normal', 'italic'],
        weights: ['340 640'],
        subsets: ['latin'],
        fallbacks: ['Iowan Old Style', 'Georgia', 'serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'Geist',
        cssVariable: '--font-body',
        weights: ['300 600'],
        subsets: ['latin'],
      },
      {
        provider: fontProviders.google(),
        name: 'Geist Mono',
        cssVariable: '--font-mono',
        weights: ['400 500'],
        subsets: ['latin'],
        fallbacks: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    ],
  },
})
