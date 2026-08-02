# chrsx3.com

Sitio personal y portafolio de Christian Alcántara.

Astro con salida estática, sin JavaScript de cliente. Desplegado en servidor propio
con Coolify.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

## Contenido

Todo el contenido vive en `src/data/site.ts`. Para sumar un proyecto, agrega una
entrada a `board` (el tablero de servicios en producción) o a `work` (los casos
detallados). No hay que tocar plantillas.

## Estructura

```
src/
  data/site.ts        contenido: contacto, tablero, casos, servicios, stack
  pages/index.astro   la página completa
  styles/global.css   sistema de diseño (lapislázuli y pirita)
public/               favicon, robots.txt
```
