/* Versión en inglés del contenido. site.ts es la fuente (español); aquí van solo
   los textos traducidos, por slug o id. Lo que no esté aquí se muestra tal cual
   (nombres, URLs, capturas). Al sumar un proyecto, súmalo también acá. */
import type { Lang } from '../i18n/ui'
import { meta, work, aticTools, aticVersion, type Project, type Tool } from './site'

type ProjectText = Partial<
  Pick<Project, 'name' | 'tag' | 'host' | 'hostLabel' | 'url' | 'cta' | 'line' | 'detail' | 'role' | 'stack' | 'shotNote' | 'highlights' | 'features' | 'story'>
> & {
  /** Pies de `gallery`, en el mismo orden */
  gallery?: string[]
  videoLabel?: string
}

type ToolText = Partial<Pick<Tool, 'name' | 'key' | 'body' | 'caption' | 'alt'>> & {
  steps?: { text: string; label?: string }[]
}

const metaEn = {
  city: 'Santiago, Chile',
  description:
    'Software engineer in Santiago, Chile. I build the tools I use every day with Claude, Codex and Cursor, like Atic, plus sites I keep running in production.',
}

const workEn: Record<string, ProjectText> = {
  atic: {
    line: 'A local-first desktop toolbox in a floating pill: agents, meetings, dictation, screenshots and more — no hunting for a window.',
    detail:
      'Pure Rust with GPUI, for Windows and macOS. It lives in a floating pill (in the notch, on a Mac) and behind global shortcuts. Audio is recorded on your machine and Whisper transcribes it locally. MIT license.',
    role: 'Author',
    cta: 'View on GitHub',
    shotNote: `Atic Code · public repository · ${aticVersion} · MIT`,
    story: [
      {
        label: 'Why it exists',
        title: 'The tools were there, but they worked badly.',
        body: 'Windows ships utilities for almost everything, but many of them fail or get in the way. And in meetings I was asked to take notes while I needed to focus on what was being said: two things at once.',
      },
      {
        label: 'How it grew',
        title: 'Every day there was something else I wanted at hand.',
        body: 'I planned each tool around what I was missing at work, and kept them as light as possible: always in view, one shortcut away, without opening another app.',
      },
    ],
    gallery: [
      'Meetings: recordings, transcript and summary',
      'Phone: your phone’s notifications on the PC',
      'Today’s tasks, in the Texts panel',
      'App launcher',
      'Settings',
    ],
    features: [
      {
        title: 'Agents and Atic Code',
        body: 'Claude Code, Codex, Cursor and OpenCode in a console with a real interface. Atic Code adds a workspace with folders, panes, changes and a web preview. Atic doesn’t sign you in: it uses the CLI you’re already logged into.',
      },
      {
        title: 'Meetings',
        body: 'Mic and system audio on separate tracks, local transcription with live captions, an editable summary and sending by email. Call detection only suggests recording.',
      },
      {
        title: 'Dictation',
        body: 'A global shortcut (toggle or push-to-talk). It transcribes and pastes wherever you were typing.',
      },
      {
        title: 'Screenshots',
        body: 'Window, region or monitor, to the clipboard and to a floating shelf. Records the screen and, on a Mac, lets you edit and export it. Copy text picks the text out of an image, column by column.',
      },
      {
        title: 'Whiteboard and Flip',
        body: 'Freeze the screen and mark it up right there, or draw and annotate in Flip. Whatever you draw can be sent to an agent.',
      },
      {
        title: 'Clipboard and Texts',
        body: 'A local history of text and images that skips anything a password manager marked as ephemeral, plus a separate place for the texts you save yourself.',
      },
      {
        title: 'Phone',
        body: 'Pair your Android with a QR code: files, notifications, calls, clipboard, touch control and each screen on the other device. No accounts, no cloud.',
      },
      {
        title: 'Apps',
        body: 'A Spotlight-style launcher, with a calculator and emoji.',
      },
    ],
  },
  'atic-android': {
    name: 'Atic for Android',
    tag: 'Android app',
    host: 'Google Play · closed testing',
    hostLabel: 'Status',
    url: 'mailto:chris.alc.13@gmail.com?subject=I%27d%20like%20to%20try%20Atic%20for%20Android',
    cta: 'Request test access',
    line: 'A dynamic island that grows out of the front camera and floats over any app: the song playing with its lyrics, notifications, calls, alarms and the weather. It works on its own, and with Atic on your PC it does what no other island does.',
    role: 'Author',
    stack: ['Kotlin', 'Jetpack Compose', 'Rust shared with Atic', 'Android 16+'],
    shotNote: 'The island with the current song and its lyrics',
    highlights: [
      'See and approve what your PC’s agents ask for, with your fingerprint or PIN.',
      'Clipboard both ways, and the phone as a touchpad for the PC.',
      'Records meetings and transcribes them offline, with Gemini Nano on the device.',
      'Connects to the PC over encrypted QUIC, no accounts: pairing is a one-time QR code.',
    ],
    videoLabel: 'Atic for Android trailer',
    gallery: [
      'A PC agent asking for permission from the island',
      'Summary of a meeting recorded on the phone',
      'The phone used as a touchpad for the PC',
      'Shortcuts in the expanded island',
    ],
  },
  'gpui-m3': {
    tag: 'Open source library',
    cta: 'View on GitHub',
    line: 'Google’s Material 3 Expressive, ported to Rust for GPUI, the GPU-powered UI framework behind the Zed editor. Native, no web view.',
    role: 'Author',
    shotNote: 'Component gallery, dark theme',
    highlights: [
      'Morphing shapes, ripples, dynamic color from any seed color and the 14 shapes of M3 Expressive.',
      'Motion with real springs: GPUI only accepts curves between 0 and 1, so springs are solved analytically with the official Jetpack Compose values.',
      'Over 60 components: buttons, menus, text fields, a code editor, diff, Markdown and a shortcut picker.',
    ],
    gallery: ['The shapes of M3 Expressive', 'Selection controls, light theme', 'Wavy progress indicators'],
  },
  'halftone-studio': {
    tag: 'My own tool',
    line: 'Turns images, text, shapes and 3D figures into halftone and dither screens, with a live preview and PNG export. Everything runs in the browser.',
    role: 'Author',
    cta: 'Open Halftone Studio',
    shotNote: 'Live · no account and no processing server',
    gallery: ['3D mode: a screened torus you turn by dragging it across the canvas'],
    highlights: [
      'Rendering runs in a Web Worker with OffscreenCanvas, off the main thread.',
      'Six ink recipes, from one to four inks, that you can then tune by hand.',
      'Exports PNGs up to 2800 px per side.',
    ],
    features: [
      { title: 'Ink recipes', body: 'Six starting points, from one ink to four visual inks, that you can then tune by hand.' },
      { title: 'Dots or dither', body: 'A classic screen that scales each dot, or error-diffusion dither with circle or square dots.' },
      { title: 'Before / after', body: 'A divider you drag with a mouse, a finger or the keyboard to compare the source with the result.' },
      { title: 'Image, text and shape', body: 'Upload a photo or type a phrase; shapes and text use gradients to make the most of the screen.' },
      { title: '3D', body: 'A sphere, torus, cube or drop turned into a screen. Drag the figure across the canvas to turn it, or let it spin on its own when animating.' },
      { title: 'Local', body: 'Rendering runs in a Web Worker with OffscreenCanvas. The image never leaves your device.' },
      { title: 'Export', body: 'PNGs up to 2800 px per side, generated off the main thread.' },
    ],
  },
  pedi: {
    tag: 'My own product',
    line: 'A venue’s menu behind a QR code. Customers build their order on their phone and it lands, ready, in the venue’s WhatsApp — no middleman apps and no commission per sale.',
  },
  katemi: {
    tag: 'Company website',
    line: 'Website for an engineering, construction and installations company. Deployed and maintained on my server.',
  },
  'hm-inova': {
    tag: 'Company website',
    line: 'Website for a solar energy, e-mobility and climate control company. Deployed and maintained on my server.',
  },
  'pet-float': {
    tag: 'Published app',
    line: 'A pixel cat that lives floating over your screen, on top of whatever app you’re using. The same one that walks on the home page.',
    cta: 'View on Google Play',
  },
}

const toolsEn: Record<string, ToolText> = {
  agentes: {
    name: 'Agents',
    body: 'Claude Code, Codex, Cursor and OpenCode in a console with a real interface, with folders, panes, changes and a web preview. It uses the CLI you’re already logged into.',
    alt: 'Atic Code with an agent working in a repository',
  },
  reuniones: {
    name: 'Meetings',
    key: 'Records and transcribes locally',
    body: 'Mic and system audio on separate tracks, live captions, an editable summary and sending by email. So you don’t have to take notes and listen at the same time.',
    alt: 'Meetings panel with recordings, transcript and summary',
    caption: 'Recordings, transcript and summary',
  },
  dictado: {
    name: 'Dictation',
    key: 'Global shortcut',
    body: 'One shortcut, you speak, and the text appears where you were typing: Chrome, Word or the agent composer. With local Whisper, the audio never leaves your machine.',
    caption: 'Three steps, without opening a window',
    steps: [
      { text: 'Tap it or hold it, from any app.' },
      { text: 'You speak. Whisper transcribes on your machine.' },
      { label: 'text ready', text: 'It’s pasted where you were typing.' },
    ],
  },
  capturas: {
    name: 'Screenshots',
    key: 'Window, region or monitor',
    body: 'To the clipboard and to a floating shelf. Records the screen and, on a Mac, lets you edit and export it. It also copies the text out of an image.',
    alt: 'Screenshots video: a screen region captured from the pill',
    caption: 'Screenshots, in use',
  },
  pizarra: {
    name: 'Whiteboard',
    key: 'Freeze and mark up',
    body: 'Freeze the screen and mark it up right there, or draw in Flip. What you draw can be sent to an agent.',
    caption: 'Freeze, mark up and send',
    steps: [
      { text: 'Freeze the screen as it is, over any app.' },
      { text: 'Mark, circle and write on top.' },
      { label: '→ agent', text: 'What you marked can be sent to an agent.' },
    ],
  },
  celular: {
    name: 'Phone',
    body: 'Pair your Android with a QR code: files, notifications, calls, clipboard and each screen on the other device. No accounts, no cloud.',
    alt: 'Phone notifications shown on the PC',
    caption: 'Phone notifications on the PC',
  },
  textos: {
    name: 'Clipboard and Texts',
    key: 'Local history',
    body: 'A history of text and images that skips anything a password manager marked as ephemeral, plus a separate place for the texts you save yourself.',
    alt: 'Atic’s Texts panel with today’s task list',
    caption: 'Today’s tasks, in the Texts panel',
  },
  apps: {
    name: 'Apps',
    body: 'A Spotlight-style launcher to open apps, with a calculator and emoji.',
    alt: 'Atic’s app launcher',
  },
  ajustes: {
    name: 'Settings',
    key: 'Everything configurable',
    body: 'Shortcuts, visible tools, transcription models and how the pill behaves.',
    alt: 'Atic’s Settings screen',
    caption: 'Settings',
  },
}

const translateProject = (p: Project): Project => {
  const t = workEn[p.slug]
  if (!t) return p
  const { gallery, videoLabel, ...fields } = t
  return {
    ...p,
    ...fields,
    gallery: p.gallery?.map((g, i) => ({ ...g, caption: gallery?.[i] ?? g.caption })),
    video: p.video && { ...p.video, label: videoLabel ?? p.video.label },
    downloads: p.downloads?.map((d) => ({ ...d, label: d.label.replace('Descargar para', 'Download for') })),
  }
}

const translateTool = (tool: Tool): Tool => {
  const t = toolsEn[tool.id]
  if (!t) return tool
  const { steps, ...fields } = t
  return {
    ...tool,
    ...fields,
    steps: tool.steps?.map((s, i) => ({ ...s, text: steps?.[i]?.text ?? s.text, label: steps?.[i]?.label ?? s.label })),
  }
}

/** El contenido del sitio en un idioma */
export function getSite(lang: Lang) {
  if (lang === 'es') return { meta, work: work as Project[], aticTools }
  return {
    meta: { ...meta, ...metaEn },
    work: (work as Project[]).map(translateProject),
    aticTools: aticTools.map(translateTool),
  }
}
