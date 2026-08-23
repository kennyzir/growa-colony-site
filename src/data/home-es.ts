import type { NavGroup, HeroMetric, LinkCard, PlayerJourneyStage, EditorialSignal } from "@/types/site";
import { gameConfig } from "@/data/game.config";

// Grow A Colony — ES 版首页数据层 (Navbar isEs 分支 + [locale]/page.tsx isEs 选择用)
// Numeric facts + proper nouns + enum tokens stay canonical; display copy is Spanish.

export const navEs: NavGroup[] = [
  {
    label: "Códigos", href: "/es/codes", items: [
      { label: "Códigos", href: "/es/codes", description: "Estado de códigos de Grow A Colony — códigos confirmados, dónde buscar y cómo canjear." },
      { label: "Fuentes", href: "/sources", description: "Dónde se verificaron los códigos y guías." }
    ]
  },
  {
    label: "Jugar", href: "/es/how-to-play", items: [
      { label: "Cómo jugar", href: "/es/how-to-play", description: "El bucle de construcción de colonia: recolectar, construir, expandir." },
      { label: "Actualizaciones", href: "/es/updates", description: "Registro de actualizaciones de Grow A Colony." },
      { label: "Fecha de lanzamiento", href: "/es/release-date", description: "Cuándo salió Grow A Colony (31 julio 2026)." }
    ]
  },
  {
    label: "Wiki", href: "/wiki", items: [
      { label: "Wiki completa", href: "/wiki", description: "La wiki enfocada — cómo jugar, códigos, fechas y novedades." },
      { label: "Hub de guías", href: "/guides", description: "Las guías de construcción de colonia en un solo lugar." }
    ]
  },
  {
    label: "Acerca de", href: "/about", items: [
      { label: "Divulgación", href: "/disclosure", description: "Estado de fan-made y política de claim-state." },
      { label: "Contacto", href: "/contact", description: "Ruta de contacto para correcciones." }
    ]
  }
];

export const heroActionsEs = [
  { href: "/en/codes", label: "Ver códigos" },
  { href: "/en/how-to-play", label: "Cómo jugar" },
  { href: "/en/updates", label: "Últimas actualizaciones" },
  { href: "/wiki", label: "Wiki completa" }
];

export const heroMetricsEs: HeroMetric[] = [
  { value: "1,1K", label: "Jugando ahora", note: "Página oficial del juego en Roblox, 2026-08-23" },
  { value: "290K", label: "Visitas totales", note: "Visitas de la página oficial del juego en Roblox" },
  { value: "Colony Sim", label: "Género", note: "Género oficial en Roblox — construcción de colonia" }
];

export const guideClustersEs: LinkCard[] = [
  {
    title: "Cómo jugar",
    href: "/en/how-to-play",
    description: "Recolecta recursos, construye tus primeras estructuras y expande túneles para hacer crecer tu colonia.",
    miniLabel: "Guía"
  },
  {
    title: "Progresión inicial",
    href: "/en/how-to-play",
    description: "Ruta de principiante: qué construir y mejorar primero.",
    miniLabel: "Principiante"
  },
  {
    title: "Códigos",
    href: "/en/codes",
    description: "Estado de los códigos activos y dónde salen los nuevos.",
    miniLabel: "Códigos"
  },
  {
    title: "Fecha de lanzamiento",
    href: "/en/release-date",
    description: "Cuándo salió Grow A Colony (31 julio 2026) y su historia breve.",
    miniLabel: "Historia"
  }
];

export const playerJourneyEs: PlayerJourneyStage[] = [
  {
    number: "1",
    title: "Canjea y empieza",
    question: "¿Acabas de empezar?",
    answer: "Canjea los últimos códigos si hay alguno y sigue el bucle inicial para construir tu primer nido.",
    href: "/en/codes",
    links: [
      { label: "Estado de códigos", href: "/en/codes", description: "Códigos confirmados y dónde salen los nuevos." },
      { label: "Cómo jugar", href: "/en/how-to-play", description: "El bucle de construcción de colonia y primeros pasos." }
    ]
  },
  {
    number: "2",
    title: "Construye la colonia",
    question: "¿Cómo hago crecer mi colonia?",
    answer: "Recolecta recursos, cava túneles y mejora estructuras para crecer de un pequeño nido a una base próspera.",
    href: "/en/how-to-play",
    links: [
      { label: "Cómo jugar", href: "/en/how-to-play", description: "Recolectar, construir, expandir — el bucle base." },
      { label: "Progresión", href: "/en/how-to-play", description: "Una ruta de principiante para crecer rápido." }
    ]
  },
  {
    number: "3",
    title: "Sigue el juego",
    question: "¿Qué hay de nuevo y cuándo empezó?",
    answer: "Revisa el registro de actualizaciones para los últimos cambios y la fecha de lanzamiento para la historia del juego.",
    href: "/en/updates",
    links: [
      { label: "Actualizaciones", href: "/en/updates", description: "Qué cambió en la última actualización de Grow A Colony." },
      { label: "Fecha de lanzamiento", href: "/en/release-date", description: "Cuándo salió Grow A Colony." }
    ]
  }
];

export const wikiCardsEs: LinkCard[] = [
  {
    title: "Códigos",
    href: "/en/codes",
    description: "Estado de los códigos activos, dónde buscar y cómo canjear.",
    miniLabel: "Códigos"
  },
  {
    title: "Cómo jugar",
    href: "/en/how-to-play",
    description: "El bucle de construcción de colonia y la progresión inicial.",
    miniLabel: "Jugar"
  },
  {
    title: "Actualizaciones",
    href: "/en/updates",
    description: "El registro de actualizaciones de Grow A Colony.",
    miniLabel: "Novedades"
  }
];

export const toolCardsEs: LinkCard[] = [
  {
    title: "Cómo jugar",
    href: "/en/how-to-play",
    description: "Recolectar recursos, construir estructuras y expandir túneles.",
    miniLabel: "Jugar"
  },
  {
    title: "Progresión",
    href: "/en/how-to-play",
    description: "Una ruta de principiante para crecer rápido.",
    miniLabel: "Guía"
  },
  {
    title: "Actualizaciones",
    href: "/en/updates",
    description: "Qué cambió en la última actualización.",
    miniLabel: "Novedades"
  }
];

export const officialLinksEs: LinkCard[] = [
  {
    title: "Página oficial del juego en Roblox",
    href: gameConfig.dataSources.officialGameUrl,
    description: "Juega Grow A Colony en Roblox y consulta la descripción oficial.",
    miniLabel: "Oficial"
  },
  {
    title: "YouTube oficial",
    href: "https://www.youtube.com/results?search_query=roblox+grow+a+colony",
    description: "Donde aparecerían anuncios y posibles códigos nuevos.",
    miniLabel: "Oficial"
  },
  {
    title: "Página de estado de fuentes",
    href: "/sources",
    description: "Un registro honesto de qué verificamos y cuándo.",
    miniLabel: "Fuentes"
  }
];

export const editorialSignalsEs: EditorialSignal[] = [
  {
    title: "Fan-made, con claim-state",
    body: "Grow A Colony es la fuente de registro. Etiquetamos todo como Verificado o Reportado por la comunidad y nunca inventamos un código, mecánica o paso de mejora."
  },
  {
    title: "Códigos verificados contra fuentes oficiales",
    body: "Solo mostramos códigos que podemos fechar desde una fuente oficial, y marcamos como pendientes los que aún no confirmamos, en lugar de presentar cadenas inventadas."
  },
  {
    title: "Gameplay del build actual",
    body: "Los pasos del juego reflejan el build actual (actualizado el 23 de agosto de 2026). Las cifras exactas pueden cambiar entre actualizaciones, así que las estadísticas se reportan como comunitarias salvo que se confirmen en el juego."
  }
];

export const videoGuidesEs: LinkCard[] = [];

export const valuePropositionEs =
  "Grow A Colony es un juego de construcción de colonia en Roblox: juegas como una colonia de insectos y creces desde un pequeño nido hasta una base próspera. Recolectas recursos, cavas túneles, construyes estructuras y desbloqueas mejoras. Aquí puedes revisar los códigos activos, aprender el bucle de juego y seguir el progreso del juego.";

export const shortDisclosureEs = `${gameConfig.name} es un recurso no oficial hecho por fans. Roblox y el equipo de desarrollo de Grow A Colony son la fuente de registro.`;
