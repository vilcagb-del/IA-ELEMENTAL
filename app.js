// ==========================================================================
// IA ELEMENTAL - Vanilla JavaScript Application Engine (Zero Build Needed)
// ==========================================================================

const aiPlatforms = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    company: "OpenAI",
    categoryKey: "conversational",
    tagline: "El pionero en modelos de lenguaje multimodal y razonamiento avanzado.",
    description: "ChatGPT es la plataforma líder mundial en IA generativa desarrollada por OpenAI. Cuenta con los modelos GPT-4o y GPT-o1, modo de voz avanzado en tiempo real, lienzo de edición Canvas y creación de GPTs personalizados.",
    badgeText: "Más Popular",
    badgeType: "emerald",
    rating: 4.9,
    reviewsCount: "100M+",
    url: "https://chatgpt.com",
    iconColor: "#10a37f",
    plans: [
      { name: "Gratuito", price: "$0", period: "/mes", desc: "Acceso básico a GPT-4o mini y GPT-4o" },
      { name: "Plus", price: "$20", period: "/mes", desc: "Acceso prioritario a GPT-4o, GPT-o1, Voz Avanzada y Canvas" },
      { name: "Team / Enterprise", price: "$25", period: "/usuario/mes", desc: "Consola de administración y privacidad empresarial" }
    ],
    features: [
      "Modelos GPT-4o y GPT-o1 de razonamiento complejo",
      "Modo de Voz Avanzado en tiempo real",
      "Edición interactiva en tiempo real con Canvas",
      "Generador de imágenes DALL-E 3 integrado"
    ],
    pros: ["Excelente capacidad de razonamiento", "Interfaz muy limpia", "Ecosistema de GPTs"]
  },
  {
    id: "gemini",
    name: "Google Gemini",
    company: "Google DeepMind",
    categoryKey: "productivity",
    tagline: "IA nativa multimodal de Google integrada con Workspace.",
    description: "Gemini destaca por su ventana de contexto gigante de hasta 2 millones de tokens en Gemini 1.5 Pro, permitiendo resumir vídeos largos, audios y miles de páginas de código de una sola vez.",
    badgeText: "Contexto 2M Tokens",
    badgeType: "glow",
    rating: 4.8,
    reviewsCount: "80M+",
    url: "https://gemini.google.com",
    iconColor: "#4285f4",
    plans: [
      { name: "Gratuito", price: "$0", period: "/mes", desc: "Acceso a Gemini 1.5 Flash" },
      { name: "Advanced", price: "$19.99", period: "/mes", desc: "Gemini 1.5 Pro (2M tokens) + 2TB Google One" },
      { name: "Workspace Enterprise", price: "$20", period: "/usuario/mes", desc: "Integración completa en Gmail, Docs y Drive" }
    ],
    features: [
      "Ventana de contexto ultra extendida (2M tokens)",
      "Análisis directo de vídeos largos y audios",
      "Integración nativa con Gmail, Docs y Drive",
      "Respuestas ultrarrápidas con Gemini 1.5 Flash"
    ],
    pros: ["Integración perfecta con Google Workspace", "Capacidad insuperable de contexto", "Muy rápido"]
  },
  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    company: "Microsoft",
    categoryKey: "productivity",
    tagline: "El compañero de IA integrado en Windows 11, Microsoft 365 y Edge.",
    description: "Microsoft Copilot combina la potencia de GPT-4o con el grafo de datos de Microsoft. Asiste en Word, Excel, PowerPoint, Outlook y Teams para automatizar flujos corporativos.",
    badgeText: "Ideal Empresas",
    badgeType: "glow",
    rating: 4.7,
    reviewsCount: "90M+",
    url: "https://copilot.microsoft.com",
    iconColor: "#0078d4",
    plans: [
      { name: "Gratuito", price: "$0", period: "/mes", desc: "Acceso web y en Windows 11" },
      { name: "Copilot Pro", price: "$20", period: "/mes", desc: "Integración con Word, Excel, PPT y Outlook personal" },
      { name: "Copilot Microsoft 365", price: "$30", period: "/usuario/mes", desc: "Integración corporativa con Teams y SharePoint" }
    ],
    features: [
      "Generación de presentaciones en PowerPoint",
      "Análisis automático de datos en Excel",
      "Resumen de llamadas y chats en Microsoft Teams",
      "Generación de imágenes con Microsoft Designer"
    ],
    pros: ["Líder en productividad corporativa Office", "Gratuito en la web con GPT-4o", "Excelente privacidad"]
  },
  {
    id: "canva-magic",
    name: "Canva Magic Studio",
    company: "Canva",
    categoryKey: "design",
    tagline: "Suite completa de herramientas de IA para diseño, vídeo y redes sociales.",
    description: "Magic Studio reúne Magic Media (texto a imagen/vídeo), Magic Switch (rediseño de formatos y traducción en 1 clic) y retoque de fotos inteligente para creadores visuales.",
    badgeText: "Diseño Top",
    badgeType: "amber",
    rating: 4.9,
    reviewsCount: "65M+",
    url: "https://www.canva.com/magic-studio/",
    iconColor: "#00c4cc",
    plans: [
      { name: "Gratuito", price: "$0", period: "/mes", desc: "Uso básico del editor visual y Magic Studio" },
      { name: "Canva Pro", price: "$14.99", period: "/mes", desc: "Acceso ilimitado a Magic Studio + Quitar Fondos" },
      { name: "Canva Equipos", price: "$29.99", period: "/mes", desc: "Para 5 personas con kits de marca compartidos" }
    ],
    features: [
      "Magic Media: Generador de imágenes y vídeos con IA",
      "Magic Switch: Cambia de formato y traduce en segundos",
      "Eliminador de fondo de fotos y vídeos en 1 clic",
      "Magic Write: Generador de copys para redes"
    ],
    pros: ["Curva de aprendizaje nula", "Resultados visuales espectaculares", "Ideal para redes sociales"]
  },
  {
    id: "dropbox-dash",
    name: "Dropbox Dash & AI",
    company: "Dropbox",
    categoryKey: "filesearch",
    tagline: "Búsqueda universal con IA y asistente inteligente para tus archivos.",
    description: "Dropbox Dash conecta todo tu entorno digital (Dropbox, Drive, Notion, Slack) en una sola barra de búsqueda inteligente capaz de responder preguntas y sintetizar tus PDFs.",
    badgeText: "Búsqueda IA",
    badgeType: "glow",
    rating: 4.6,
    reviewsCount: "30M+",
    url: "https://www.dropbox.com/dash",
    iconColor: "#0061ff",
    plans: [
      { name: "Dropbox Essentials", price: "$18", period: "/mes", desc: "3 TB almacenamiento + Dropbox AI en PDFs" },
      { name: "Dropbox Business / Dash", price: "$24", period: "/usuario/mes", desc: "Búsqueda universal entre Drive, Notion y Slack" }
    ],
    features: [
      "Búsqueda universal entre todas tus aplicaciones en la nube",
      "Dropbox AI: Pregunta directamente a tus contratos en PDF",
      "Resumen automático de archivos extensos",
      "Organización inteligente de colecciones Stacks"
    ],
    pros: ["Ahorra horas buscando archivos entre apps", "Resumen excelente de PDFs", "Alta seguridad"]
  }
];

// State Management
let currentCategory = 'all';
let currentSearch = '';
let billingCycle = 'monthly';
let quizGoal = '';
let quizBudget = '';

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  renderPlatforms();
  renderPricingTable();
  setupEventListeners();
});

// Render Platforms Grid
function renderPlatforms() {
  const container = document.getElementById('platforms-grid');
  if (!container) return;

  const filtered = aiPlatforms.filter(p => {
    const matchCat = currentCategory === 'all' || p.categoryKey === currentCategory;
    const q = currentSearch.toLowerCase().trim();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.company.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div className="glass-card" style="grid-column: 1 / -1; padding: 3rem; text-align: center; max-width: 500px; margin: 0 auto;">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
        <h3>No se encontraron resultados</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1rem;">No hay plataformas que coincidan con "${currentSearch}".</p>
        <button onclick="resetFilters()" class="btn btn-secondary btn-sm">Limpiar Filtros</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="glass-card" style="padding: 1.75rem; display: flex; flex-direction: column; justify-content: space-between; position: relative;">
      <div style="position: absolute; top:0; left:0; width:100%; height:4px; background: linear-gradient(90deg, ${p.iconColor}, transparent);"></div>
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
          <div>
            <h3 style="font-size: 1.35rem; color: var(--text-primary); margin: 0;">${p.name}</h3>
            <span style="font-size: 0.85rem; color: var(--text-muted);">por ${p.company}</span>
          </div>
          <span class="badge ${p.badgeType === 'emerald' ? 'badge-emerald' : p.badgeType === 'amber' ? 'badge-amber' : 'badge-glow'}">${p.badgeText}</span>
        </div>
        
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.2rem;">${p.tagline}</p>
        
        <div style="background: var(--bg-glass); padding: 0.8rem 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.4rem; text-transform: uppercase;">Funciones Clave:</div>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.3rem;">
            ${p.features.slice(0, 3).map(f => `<li style="font-size: 0.85rem; color: var(--text-secondary);">✓ ${f}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1rem; padding-top: 0.5rem; border-top: 1px dashed var(--border-color);">
          <span style="font-size: 0.85rem; color: var(--text-muted);">Planes desde:</span>
          <strong style="font-size: 1.25rem; color: var(--text-primary);">${p.plans[0].price}</strong>
        </div>

        <div style="display: flex; gap: 0.5rem;">
          <button onclick="openModal('${p.id}')" class="btn btn-primary btn-sm" style="flex: 1;">Ver Detalles</button>
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="Sitio Oficial">↗</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Pricing Comparison Table Render
function renderPricingTable() {
  const tbody = document.getElementById('pricing-tbody');
  if (!tbody) return;

  tbody.innerHTML = aiPlatforms.map(p => {
    const proPrice = p.plans[1] ? p.plans[1].price : '$19.99';
    const numPrice = parseFloat(proPrice.replace('$', '')) || 20;
    const finalProPrice = billingCycle === 'annual' ? `$${(numPrice * 0.8).toFixed(2)}` : proPrice;

    return `
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 1rem;">
          <strong style="color: var(--text-primary); display: block;">${p.name}</strong>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${p.company}</span>
        </td>
        <td style="padding: 1rem; color: var(--emerald-accent); font-weight: 700;">$0 /mes</td>
        <td style="padding: 1rem;">
          <strong style="font-size: 1.1rem; color: var(--text-primary);">${finalProPrice}</strong> /mes
          <div style="font-size: 0.75rem; color: var(--text-muted);">${p.plans[1]?.name || 'Pro'}</div>
        </td>
        <td style="padding: 1rem;">
          <strong style="color: var(--text-primary);">${p.plans[p.plans.length - 1].price}</strong> /usuario
          <div style="font-size: 0.75rem; color: var(--text-muted);">${p.plans[p.plans.length - 1].name}</div>
        </td>
        <td style="padding: 1rem; text-align: right;">
          <button onclick="openModal('${p.id}')" class="btn btn-secondary btn-sm">Detalles</button>
        </td>
      </tr>
    `;
  }).join('');
}

// Event Listeners setup
function setupEventListeners() {
  // Search Bar
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderPlatforms();
    });
  }

  // Theme Switcher
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      themeBtn.innerText = next === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    });
  }
}

// Filter Categories
function setCategory(catKey) {
  currentCategory = catKey;
  document.querySelectorAll('.cat-btn').forEach(b => {
    if (b.dataset.category === catKey) {
      b.classList.remove('btn-secondary');
      b.classList.add('btn-primary');
    } else {
      b.classList.remove('btn-primary');
      b.classList.add('btn-secondary');
    }
  });
  renderPlatforms();
}

function resetFilters() {
  currentSearch = '';
  currentCategory = 'all';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  setCategory('all');
}

// Toggle Billing Cycle
function setBilling(cycle) {
  billingCycle = cycle;
  document.getElementById('btn-monthly')?.classList.toggle('btn-primary', cycle === 'monthly');
  document.getElementById('btn-monthly')?.classList.toggle('btn-secondary', cycle !== 'monthly');
  document.getElementById('btn-annual')?.classList.toggle('btn-primary', cycle === 'annual');
  document.getElementById('btn-annual')?.classList.toggle('btn-secondary', cycle !== 'annual');
  renderPricingTable();
}

// Modal Functions
function openModal(id) {
  const p = aiPlatforms.find(item => item.id === id);
  if (!p) return;

  document.getElementById('modal-title').innerText = p.name;
  document.getElementById('modal-company').innerText = `Desarrollado por ${p.company} • Rating: ⭐ ${p.rating}`;
  document.getElementById('modal-desc').innerText = p.description;

  const plansContainer = document.getElementById('modal-plans');
  if (plansContainer) {
    plansContainer.innerHTML = p.plans.map(plan => `
      <div style="background: var(--bg-glass); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
        <strong style="color: var(--text-primary); font-size: 1rem;">${plan.name}</strong>
        <div style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary); margin: 0.3rem 0;">${plan.price} <span style="font-size: 0.8rem; font-weight: 400; color: var(--text-muted);">${plan.period}</span></div>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">${plan.desc}</p>
      </div>
    `).join('');
  }

  document.getElementById('modal-cta').href = p.url;
  document.getElementById('platform-modal').classList.add('active');
}

function closeModal() {
  document.getElementById('platform-modal').classList.remove('active');
}

function openDeployModal() {
  document.getElementById('deploy-modal').classList.add('active');
}

function closeDeployModal() {
  document.getElementById('deploy-modal').classList.remove('active');
}

// Quiz Recommender
function selectQuizOption(goal, btn) {
  quizGoal = goal;
  document.querySelectorAll('.quiz-opt-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function runQuiz() {
  if (!quizGoal) {
    alert("Por favor selecciona una opción primero.");
    return;
  }

  const map = {
    'design': 'canva-magic',
    'office': 'microsoft-copilot',
    'files': 'dropbox-dash',
    'multimodal': 'gemini',
    'allround': 'chatgpt'
  };

  const matchedId = map[quizGoal] || 'chatgpt';
  openModal(matchedId);
}
