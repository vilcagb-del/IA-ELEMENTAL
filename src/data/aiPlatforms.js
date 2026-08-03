// Base de datos de plataformas de Inteligencia Artificial actualizadas 2025/2026

export const aiPlatforms = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    company: "OpenAI",
    category: "Asistente Conversacional y Razonamiento",
    categoryKey: "conversational",
    tagline: "El pionero en modelos de lenguaje multimodal y razonamiento avanzado.",
    description: "ChatGPT es la plataforma líder mundial en inteligencia artificial generativa desarrollada por OpenAI. Equipada con modelos como GPT-4o y GPT-o1, ofrece comprensión multimodal (texto, voz, visión), edición colaborativa en tiempo real con Canvas y creación de GPTs personalizados.",
    iconColor: "#10a37f",
    badgeText: "Más Popular",
    badgeType: "emerald",
    rating: 4.9,
    reviewsCount: "100M+",
    url: "https://chatgpt.com",
    plans: [
      { name: "Gratuito", price: "$0", period: "/mes", features: ["Acceso a GPT-4o mini y GPT-4o limitado", "Generación de texto y respuestas rápidas", "Acceso en web y móviles"] },
      { name: "Plus", price: "$20", period: "/mes", features: ["Acceso prioritario a GPT-4o y GPT-o1", "Modo de Voz Avanzado en tiempo real", "Generación de imágenes DALL-E 3", "Creación de GPTs personalizados y Canvas"] },
      { name: "Team / Enterprise", price: "$25", period: "/usuario/mes", features: ["Consola de administración avanzada", "Espacio de trabajo seguro (sin entrenamiento con tus datos)", "Límites de uso ampliados y soporte prioritario"] }
    ],
    keyFeatures: [
      "Modelos GPT-4o y GPT-o1 de razonamiento complejo",
      "Modo de Voz Avanzado con tonos naturales",
      "Entorno Canvas para programación y escritura en tiempo real",
      "Generador de imágenes DALL-E 3 integrado",
      "Tienda de GPTs personalizados para tareas específicas"
    ],
    useCases: ["Redacción y corrección de contenidos", "Generación y depuración de código", "Análisis de datos y documentos", "Brainstorming y tutoria interactiva"],
    pros: ["Excelente capacidad de razonamiento", "Interfaz limpia y accesible", "Amplia comunidad e integraciones"],
    cons: ["Límites de mensajes en horas de alta demanda para usuarios gratuitos"],
    logoSvg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#10a37f" fill-opacity="0.15" stroke="#10a37f" stroke-width="2"/>
        <path d="M72.2 41.6A19.4 19.4 0 0 0 68 28.5a19.7 19.7 0 0 0-21.7-4.1 19.4 19.4 0 0 0-14.7-6.5 19.7 19.7 0 0 0-18.7 13.5A19.4 19.4 0 0 0 7 42.4a19.7 19.7 0 0 0 3 22 19.4 19.4 0 0 0 4.2 13.1 19.7 19.7 0 0 0 21.7 4.1 19.4 19.4 0 0 0 14.7 6.5 19.7 19.7 0 0 0 18.7-13.5 19.4 19.4 0 0 0 5.9-11 19.7 19.7 0 0 0-3-22z" stroke="#10a37f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M50 35v30M35 50h30" stroke="#10a37f" stroke-width="4" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    id: "gemini",
    name: "Google Gemini",
    company: "Google",
    category: "Multimodalidad y Productividad de Workspace",
    categoryKey: "productivity",
    tagline: "IA nativa multimodal de Google integrada con el ecosistema de aplicaciones.",
    description: "Gemini es el modelo de inteligencia artificial de nueva generación desarrollado por Google DeepMind. Destaca por su gigantesca ventana de contexto (hasta 2 millones de tokens en Gemini 1.5 Pro) que permite analizar horas de vídeo, audio o miles de líneas de código de una sola vez.",
    iconColor: "#4285f4",
    badgeText: "Contexto Gigante",
    badgeType: "glow",
    rating: 4.8,
    reviewsCount: "80M+",
    url: "https://gemini.google.com",
    plans: [
      { name: "Gratuito", price: "$0", period: "/mes", features: ["Acceso a Gemini 1.5 Flash", "Integración básica con búsqueda de Google", "Carga de imágenes y documentos"] },
      { name: "Advanced (Google One)", price: "$19.99", period: "/mes", features: ["Acceso a Gemini 1.5 Pro con 1M+ tokens", "Integración nativa en Gmail, Docs y Drive", "2 TB de almacenamiento en Google One", "Prioridad en nuevas funciones"] },
      { name: "Gemini for Workspace", price: "$20", period: "/usuario/mes", features: ["Asistente de IA corporativo en todo Google Workspace", "Protección de datos empresariales de nivel bancario"] }
    ],
    keyFeatures: [
      "Ventana de contexto ultra extendida (hasta 2.000.000 tokens)",
      "Procesamiento nativo de audio, vídeo largo, imágenes y texto",
      "Conexión directa a Google Workspace (Gmail, Drive, YouTube, Maps)",
      "Gems personalizados para tareas repetitivas",
      "Velocidad extrema con el modelo Gemini 1.5 Flash"
    ],
    useCases: ["Resumen de reuniones largas en vídeo o audio", "Análisis masivo de bases de datos y libros", "Redacción asistida en Gmail y Docs", "Investigación web profunda en tiempo real"],
    pros: ["Profunda integración con herramientas de Google", "Increíble capacidad de analizar vídeos largos y código", "Velocidad de respuesta muy rápida"],
    cons: ["Requiere suscripción Google One para aprovechar el modelo Pro"],
    logoSvg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#4285f4" fill-opacity="0.15" stroke="#4285f4" stroke-width="2"/>
        <path d="M50 15C50 34.33 34.33 50 15 50C34.33 50 50 65.67 50 85C50 65.67 65.67 50 85 50C65.67 50 50 34.33 50 15Z" fill="url(#gemini-grad)"/>
        <defs>
          <linearGradient id="gemini-grad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4285f4"/>
            <stop offset="0.5" stop-color="#9b51e0"/>
            <stop offset="1" stop-color="#e91e63"/>
          </linearGradient>
        </defs>
      </svg>
    `
  },
  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    company: "Microsoft",
    category: "Productividad y Ecosistema Windows / Office",
    categoryKey: "productivity",
    tagline: "El compañero de IA integrado en Windows 11, Microsoft 365 y Edge.",
    description: "Microsoft Copilot fusiona la potencia de GPT-4o de OpenAI con el grafo de datos de Microsoft. Está integrado nativamente en Windows 11, Word, Excel, PowerPoint, Outlook y Teams, convirtiéndose en el copiloto definitivo para entornos corporativos y de oficina.",
    iconColor: "#0078d4",
    badgeText: "Ideal Empresas",
    badgeType: "glow",
    rating: 4.7,
    reviewsCount: "90M+",
    url: "https://copilot.microsoft.com",
    plans: [
      { name: "Gratuito", price: "$0", period: "/mes", features: ["Copilot en la web y Windows", "Acceso a modelos GPT-4o", "Generador de imágenes Designer (DALL-E 3)"] },
      { name: "Copilot Pro", price: "$20", period: "/mes", features: ["Integración con Word, Excel, PowerPoint y Outlook personal", "Rendimiento prioritario en horas pico", "Creación de imágenes más rápida con Designer"] },
      { name: "Copilot for Microsoft 365", price: "$30", period: "/usuario/mes", features: ["Integración completa con Teams, SharePoint y Graph", "Seguridad, privacidad y cumplimiento empresarial", "Resumen de reuniones de Teams en vivo"] }
    ],
    keyFeatures: [
      "Integración nativa con la suite Microsoft 365 (Word, Excel, PPT)",
      "Creación de presentaciones enteras a partir de borradores de texto",
      "Resumen automático de llamadas y chats en Microsoft Teams",
      "Generación visual con Microsoft Designer (DALL-E 3)",
      "Asistente de código integrado en GitHub Copilot"
    ],
    useCases: ["Automatización de análisis de tablas dinámicas en Excel", "Generación de diapositivas en PowerPoint", "Redacción de emails en Outlook", "Asistente de sistema en Windows 11"],
    pros: ["Insuperable en flujo de trabajo corporativo y Microsoft 365", "Gratuito en la web con GPT-4o", "Excelente gestión de privacidad corporativa"],
    cons: ["Requiere suscripción Microsoft 365 activa para funciones avanzadas de Office"],
    logoSvg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#0078d4" fill-opacity="0.15" stroke="#0078d4" stroke-width="2"/>
        <path d="M25 32C25 28.134 28.134 25 32 25H45V45H25V32Z" fill="#F25022"/>
        <path d="M55 25H68C71.866 25 75 28.134 75 32V45H55V25Z" fill="#7FBA00"/>
        <path d="M25 55H45V75H32C28.134 75 25 71.866 25 68V55Z" fill="#00A4EF"/>
        <path d="M55 55H75V68C75 71.866 71.866 75 68 75H55V55Z" fill="#FFB900"/>
      </svg>
    `
  },
  {
    id: "canva-magic",
    name: "Canva Magic Studio",
    company: "Canva",
    category: "Diseño Gráfico, Arte & Edición Multimedia",
    categoryKey: "design",
    tagline: "Suite completa de herramientas de IA para diseño, vídeo y creatividad visual.",
    description: "Canva Magic Studio es una revolución para creadores de contenido, diseñadores y profesionales de marketing. Reúne decenas de herramientas de IA como Magic Media (generación de texto a imagen/vídeo), Magic Switch (traducción y rediseño de formatos en 1 clic) y Magic Edit.",
    iconColor: "#00c4cc",
    badgeText: "Diseño Top",
    badgeType: "amber",
    rating: 4.9,
    reviewsCount: "65M+",
    url: "https://www.canva.com/magic-studio/",
    plans: [
      { name: "Gratuito", price: "$0", period: "/mes", features: ["Uso limitado de Estudio Mágico", "Editor visual drag-and-drop", "Generación básica de imágenes"] },
      { name: "Canva Pro", price: "$14.99", period: "/mes", features: ["Acceso ilimitado a Magic Studio", "Quitar fondos con 1 clic", "Magic Switch (cambio de formato y traducción)", "100+ millones de fotos y recursos premium"] },
      { name: "Canva para Equipos", price: "$29.99", period: "/mes (para 5 personas)", features: ["Flujos de aprobación visuales", "Kits de marca compartidos", "Controles de diseño con IA para equipos"] }
    ],
    keyFeatures: [
      "Magic Media: Generador de imágenes y clips de vídeo a partir de texto",
      "Magic Switch: Convierte una presentación en un post o documento en segundos",
      "Magic Grab & Edit: Modifica o mueve elementos individuales de una foto",
      "Magic Write: Generador de copys y textos creativos para redes sociales",
      "Eliminador de fondos automático de foto y vídeo"
    ],
    useCases: ["Creación de publicaciones para Instagram, TikTok y LinkedIn", "Diseño de presentaciones corporativas impactantes", "Retoque fotográfico rápido sin Photoshop", "Creación de marcas y logotipos"],
    pros: ["Curva de aprendizaje extremadamente rápida", "Resultados visuales profesionales en minutos", "Excelente relación calidad-precio para equipos"],
    cons: ["Menor control detallado nivel de capa en comparación con Photoshop nativo"],
    logoSvg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#00c4cc" fill-opacity="0.15" stroke="#00c4cc" stroke-width="2"/>
        <path d="M50 20C33.431 20 20 33.431 20 50C20 66.569 33.431 80 50 80C66.569 80 80 66.569 80 50C80 33.431 66.569 20 50 20ZM45 65C38 65 33 60 33 52C33 42 42 34 52 34C57 34 60 37 60 41C60 46 54 48 48 48H42C40 54 42 58 46 58C49 58 52 56 55 54L58 59C54 63 50 65 45 65Z" fill="#00c4cc"/>
      </svg>
    `
  },
  {
    id: "dropbox-dash",
    name: "Dropbox Dash & AI",
    company: "Dropbox",
    category: "Gestión de Archivos & Búsqueda Universal",
    categoryKey: "filesearch",
    tagline: "Búsqueda universal con IA y asistente inteligente para tus archivos y apps.",
    description: "Dropbox Dash & AI transforma la manera en que encuentras y utilizas tu información. Conecta todo tu entorno digital (Dropbox, Google Drive, Notion, Slack, Gmail) en una sola barra de búsqueda inteligente capaz de responder preguntas concretas sobre tus archivos y sintetizar documentos.",
    iconColor: "#0061ff",
    badgeText: "Búsqueda Inteligente",
    badgeType: "glow",
    rating: 4.6,
    reviewsCount: "30M+",
    url: "https://www.dropbox.com/dash",
    plans: [
      { name: "Dropbox Essentials", price: "$18", period: "/mes", features: ["3 TB de almacenamiento seguro", "Dropbox AI en vista previa de archivos", "Resumen de PDF y vídeos con 1 clic"] },
      { name: "Dropbox Business / Dash", price: "$24", period: "/usuario/mes", features: ["Búsqueda universal conectada a Google Workspace, Notion y Slack", "Asistente Q&A sobre toda la base de conocimientos", "Stacks y listas organizadas por IA"] }
    ],
    keyFeatures: [
      "Búsqueda universal entre todas tus aplicaciones en la nube",
      "Dropbox AI: Pregunta directamente a cualquier documento PDF o contrato",
      "Resumen instantáneo de archivos extensos sin tener que abrirlos",
      "Organización inteligente de colecciones (Stacks) asistida por IA",
      "Control estricto de accesos y permisos corporativos"
    ],
    useCases: ["Encontrar documentos traspapelados entre Slack, Drive y Dropbox", "Resumir contratos jurídicos o informes financieros en segundos", "Respuestas rápidas para atención al cliente y ventas"],
    pros: ["Ahorra horas buscando información entre múltiples apps", "Muy potente para resumir PDFs largos", "Excelente integración en escritorio"],
    cons: ["Especializado en gestión documental más que en creación de arte o código"],
    logoSvg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#0061ff" fill-opacity="0.15" stroke="#0061ff" stroke-width="2"/>
        <path d="M30 28L50 40L30 52L10 40L30 28ZM70 28L90 40L70 52L50 40L70 28ZM30 52L50 64L30 76L10 64L30 52ZM70 52L90 64L70 76L50 64L70 52ZM30 67.5L50 80L70 67.5L50 55L30 67.5Z" fill="#0061ff"/>
      </svg>
    `
  }
];

export const categories = [
  { key: "all", label: "Todas las Plataformas" },
  { key: "conversational", label: "Asistentes Conversacionales" },
  { key: "productivity", label: "Productividad y Workspace" },
  { key: "design", label: "Diseño & Multimedia" },
  { key: "filesearch", label: "Gestión de Archivos & Búsqueda" }
];
