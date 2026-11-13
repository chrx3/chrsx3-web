---
target: esta web (portada chrsx3)
total_score: 18
max_score: 28
na_heuristics: 5,7,10
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\Christian\\OneDrive - The Synergy Group SPA\\Documentos\\chrsx3-web\\src\\pages\\index.astro"
target_fingerprint: "sha256:0f01c912a48fc18b70622ddd83d1e5082b33e13a0a07ad50de86f46dba5e6cab"
target_path: "C:\\Users\\Christian\\OneDrive - The Synergy Group SPA\\Documentos\\chrsx3-web\\src\\pages\\index.astro"
timestamp: 2026-11-04T15-35-31Z
slug: src-pages-index-astro
---
# Critique chrsx3.com (portada + fichas) — modo Experience

Method: dual-agent. Score 18/28 (n/a: 5, 7, 10) — Aceptable.

| # | Heurística | Score | Problema |
|---|---|---|---|
| 1 | Estado del sistema | 3 | Pill invisible sobre .dark |
| 2 | Lenguaje | 3 | «Ficha» poco claro |
| 3 | Control | 2 | Video sin pausa; 9 tabs sin cue de scroll |
| 4 | Consistencia | 2 | Dos pills gemelas; tags con/sin año |
| 5 | Prevención | n/a | Sin formularios |
| 6 | Reconocimiento | 3 | «Clientes» oculto en nav móvil |
| 7 | Flexibilidad | n/a | Portafolio |
| 8 | Estética | 3 | Portada ~12.3k px en móvil |
| 9 | Recuperación | 2 | Gato desactivado sin explicación (reduced motion) |
| 10 | Ayuda | n/a | Portafolio |

Especificidad: motivos propios (notch→pill, halftone, demos), composición genérica desde «Proyectos propios».
Detector: src/ limpio (no lee .astro); URL: low-contrast kicker 2.1:1 (#a3a9b3/#f1f2f4), #h-contacto overflow ~58px, h1 overflow 87–121px (benigno, P3), script-error de Vite (falso positivo).

## Priority issues
- [P1] Pill de navegación invisible sobre secciones oscuras — global.css:138 fill var(--dark). Fix: stroke 1px rgb(255 255 255/.08) o fill --dark-2 sobre .dark. → polish
- [P1] Kicker 2.1:1 — global.css:172 default --dark-ink-2. Fix: default --ink-2, .dark override. → audit
- [P1] Móvil 12.3k px, contacto a ~13.5 pantallas, Atic Android 1797px, Clientes oculto. Fix: aligerar bloques de portada, mover detalle a fichas, acceso a contacto. → distill
- [P2] Toolbar Atic 9 tabs sin cue de scroll en móvil (global.css:204). Fix: 3–4 grupos + fade derecho. → layout
- [P2] Fichas débiles: pedi casi vacía; atic repite portada, 6 capturas borrosas apiladas, caption «Textos guardados» bajo «Tareas». Fix: campos Problema/Decisiones/Resultado, galería 2 col, ancho nativo, corregir caption. → layout/clarify

## Persona red flags
- Jordan: «Ficha» huérfana; pills gemelas; «Toca» en desktop; no dice si está disponible.
- Riley: h2 contacto desborda; video sin pausa; halftone bajo texto; rail no scrolleable con teclado; README desactualizado.
- Casey: 12.3k px; 3.5/9 tabs; capturas ~290px ilegibles; imagen Pet Float = listing de Play en inglés.

## Minor
h1 > 12ch; CTAs bajo el pliegue a 665px; tags sin año; correo gmail; mat blanco en capturas.

## Questions
1. ¿Por qué 6.000 px a cinco proyectos equivalentes si Atic es la razón?
2. ¿Halftone es identidad o easter egg de escritorio?
3. ¿El CTA final es para cliente o empleador?
