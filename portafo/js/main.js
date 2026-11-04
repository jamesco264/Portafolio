/**
 * Santiago Román - Portafolio Interactivo
 * Lógica principal: Proyectos, filtros dinámicos, modal técnico, portapapeles y contacto.
 */

// Proyectos destacados basados en las habilidades del CV
const projectsData = [
  {
    id: "stock-control",
    title: "Sistema de Control de Stock e Inventario",
    category: "software",
    badge: "Python & SQLite",
    shortDesc: "Aplicación para auditoría de inventario, registro de entradas/salidas, alertas automáticas de reposición crítica y reportes de movimientos.",
    fullDesc: "Desarrollado para optimizar el control de almacenes y depósitos. Integra una base de datos relacional con SQLite, validaciones de integridad de datos y una interfaz gráfica funcional. Permite registrar altas y bajas de productos, calcular costos promedio y generar resúmenes exportables para la toma de decisiones.",
    highlights: [
      "Persistencia robusta mediante base de datos relacional SQLite.",
      "Algoritmo de alerta automática cuando un artículo llega al umbral mínimo de stock.",
      "Manejo de excepciones y validación estricta de tipos de datos en entradas.",
      "Diseño modular aplicando principios de Programación Orientada a Objetos (POO)."
    ],
    tech: ["Python", "SQLite", "Tkinter", "SQL Relacional", "Git"],
    githubUrl: "https://github.com/jamesco264",
    icon: "fa-solid fa-boxes-stacked"
  },
  {
    id: "cpp-engine",
    title: "Motor de Cálculo y Tolerancias Mecánicas en C++",
    category: "software",
    badge: "C++ & Algoritmos",
    shortDesc: "Herramienta de consola de alto rendimiento para cálculo de tolerancias dimensionales, alineación de ejes y optimización de memoria.",
    fullDesc: "Inspirado en los requerimientos de precisión dimensional y control aprendidos en el entorno de ensamble industrial. Implementa estructuras de datos eficientes en C++, gestión de punteros y algoritmos para verificar tolerancias de fabricación y compatibilidad de rodamientos.",
    highlights: [
      "Tiempo de ejecución ultraveloz y bajo consumo de memoria RAM.",
      "Cálculo automatizado de tolerancias y márgenes de error mecánico.",
      "Estructuras de datos a medida (punteros, structs, clases template).",
      "Validación de datos de entrada para prevenir desbordamientos numéricos."
    ],
    tech: ["C++", "C++17", "Algoritmos", "POO", "Optimización"],
    githubUrl: "https://github.com/jamesco264",
    icon: "fa-solid fa-microchip"
  },
  {
    id: "sql-services",
    title: "Base de Datos para Gestión de Servicios y Órdenes",
    category: "databases",
    badge: "SQL Relacional",
    shortDesc: "Diseño e implementación de modelo relacional normalizado (3FN) para seguimiento de clientes, servicios técnicos y órdenes de trabajo.",
    fullDesc: "Arquitectura de base de datos relacional orientada a negocios de soporte técnico y mantenimiento. Incluye modelado entidad-relación (ER), normalización hasta 3FN, claves foráneas, índices para optimizar consultas complejas y vistas para reportería gerencial rápida.",
    highlights: [
      "Esquema normalizado (3FN) que previene redundancia e inconsistencias.",
      "Consultas estructuradas (JOINs múltiples, subconsultas y agrupamientos).",
      "Vistas preparadas para auditoría de tiempos y estados de servicio.",
      "Triggers para actualización automática de historial y auditoría de cambios."
    ],
    tech: ["SQL", "Modelado ER", "MySQL/PostgreSQL", "Normalización 3FN"],
    githubUrl: "https://github.com/jamesco264",
    icon: "fa-solid fa-database"
  },
  {
    id: "hardware-audit",
    title: "Protocolo & Scripts de Diagnóstico de Hardware",
    category: "hardware",
    badge: "Hardware & Sistemas",
    shortDesc: "Procedimientos estandarizados y scripts de benchmarking para diagnóstico de componentes de PC y optimización de Windows y Linux.",
    fullDesc: "Metodología integral para diagnóstico rápido de componentes críticos de hardware (memorias RAM, discos de almacenamiento, temperaturas de procesador, estabilidad de fuentes de poder) y optimización de sistemas operativos Windows y distribuciones Linux.",
    highlights: [
      "Checklist paso a paso para descarte rápido de fallas de arranque y pantallazos.",
      "Scripts de verificación automática de estado de discos (SMART) y estrés térmico.",
      "Políticas de configuración segura y depuración de servicios innecesarios en SO.",
      "Documentación técnica profesional para mantenimiento preventivo y correctivo."
    ],
    tech: ["Diagnóstico Hardware", "Windows", "Linux", "PowerShell", "Benchmarking"],
    githubUrl: "https://github.com/jamesco264",
    icon: "fa-solid fa-screwdriver-wrench"
  },
  {
    id: "quality-checklist",
    title: "Checklist Digital de Inspección y Calidad Operativa",
    category: "hardware",
    badge: "Control de Calidad",
    shortDesc: "Herramienta de verificación de parámetros de seguridad operativa en líneas de montaje mecánico y ensamble de precisión.",
    fullDesc: "Solución técnica inspirada directamente en la experiencia de control de calidad en Todo Ruedas 2. Facilita la auditoría paso a paso en cada etapa del montaje (alineación de ejes, ajuste de bulonería, rodamientos y prueba funcional), garantizando el cumplimiento de normas de seguridad antes de la entrega del producto final.",
    highlights: [
      "Reducción de errores mediante verificación obligatoria de ítems de seguridad.",
      "Registro de trazabilidad por número de serie del producto terminado.",
      "Métricas de conformidad para asegurar cero accidentes y cumplimiento técnico.",
      "Enfoque en estándares ergonómicos y prevención de riesgos en planta."
    ],
    tech: ["Control de Calidad", "Normas de Seguridad", "Alineación de Ejes", "Python"],
    githubUrl: "https://github.com/jamesco264",
    icon: "fa-solid fa-clipboard-check"
  },
  {
    id: "office-automation",
    title: "Automatización & Planillas Avanzadas de Gestión",
    category: "software",
    badge: "Office 365 & Python",
    shortDesc: "Modelos dinámicos en Excel y scripts de consolidación en Python para agilizar consultas, órdenes y métricas de atención.",
    fullDesc: "Herramientas diseñadas para agilizar la gestión operativa y la resolución rápida de consultas de usuarios bajo presión. Combina funciones avanzadas de Microsoft Excel (fórmulas complejas, tablas dinámicas, búsquedas) con scripts en Python para procesar datos de manera automatizada.",
    highlights: [
      "Dashboard interactivo para monitorear volumen y tiempos de respuesta.",
      "Eliminación de tareas manuales repetitivas mediante fórmulas y scripts.",
      "Formato estandarizado para reportes técnicos claros y ejecutivos.",
      "Orientado a la optimización de procesos mediante tecnología accesible."
    ],
    tech: ["Excel Avanzado", "Office 365", "Python", "Automatización"],
    githubUrl: "https://github.com/jamesco264",
    icon: "fa-solid fa-file-excel"
  }
];

// Inicialización del DOM
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  initProjectFilters();
  initContactForm();
  initMobileMenu();
  setupModal();
});

/* ==========================================================================
   RENDERIZADO Y FILTRADO DE PROYECTOS
   ========================================================================== */
function renderProjects(filterCategory = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = "";

  const filtered = filterCategory === "all"
    ? projectsData
    : projectsData.filter(p => p.category === filterCategory);

  filtered.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card glass-panel rounded-2xl p-6 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden";
    card.setAttribute("data-category", project.category);

    const techBadges = project.tech
      .slice(0, 3)
      .map(t => `<span class="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/50 font-mono-tag">${t}</span>`)
      .join(" ");

    card.innerHTML = `
      <!-- Glow superior decorativo -->
      <div class="absolute -top-12 -right-12 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/25 transition-all duration-500"></div>

      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform duration-300">
            <i class="${project.icon}"></i>
          </div>
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            ${project.badge}
          </span>
        </div>

        <h3 class="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
          ${project.title}
        </h3>

        <p class="text-slate-400 text-sm leading-relaxed mb-6">
          ${project.shortDesc}
        </p>
      </div>

      <div>
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${techBadges}
        </div>

        <div class="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          <button onclick="openProjectModal('${project.id}')" class="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition-colors">
            <i class="fa-solid fa-circle-info text-cyan-400"></i> Ver detalles
          </button>
          
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 py-2 px-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-colors">
            <i class="fa-brands fa-github"></i> GitHub <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-cyan-500", "text-slate-950", "shadow-lg", "shadow-cyan-500/25");
        b.classList.add("bg-slate-800/80", "text-slate-300");
      });

      btn.classList.remove("bg-slate-800/80", "text-slate-300");
      btn.classList.add("bg-cyan-500", "text-slate-950", "shadow-lg", "shadow-cyan-500/25");

      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

/* ==========================================================================
   MODAL DE DETALLES TÉCNICOS
   ========================================================================== */
function setupModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal) return;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalIcon = document.getElementById("modal-project-icon");
  const modalBadge = document.getElementById("modal-project-badge");
  const modalTitle = document.getElementById("modal-project-title");
  const modalDesc = document.getElementById("modal-project-desc");
  const modalHighlights = document.getElementById("modal-project-highlights");
  const modalTech = document.getElementById("modal-project-tech");
  const modalGithub = document.getElementById("modal-project-github");

  if (modalIcon) modalIcon.className = `${project.icon} text-cyan-400 text-2xl`;
  if (modalBadge) modalBadge.textContent = project.badge;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDesc) modalDesc.textContent = project.fullDesc;

  if (modalHighlights) {
    modalHighlights.innerHTML = project.highlights
      .map(item => `
        <li class="flex items-start gap-2.5 text-sm text-slate-300">
          <i class="fa-solid fa-check text-emerald-400 mt-1 flex-shrink-0"></i>
          <span>${item}</span>
        </li>
      `).join("");
  }

  if (modalTech) {
    modalTech.innerHTML = project.tech
      .map(t => `<span class="text-xs font-mono-tag px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700">${t}</span>`)
      .join(" ");
  }

  if (modalGithub) {
    modalGithub.href = project.githubUrl;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

/* ==========================================================================
   COPIAR AL PORTAPAPELES CON TOAST
   ========================================================================== */
function copyToClipboard(text, label = "Dato") {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`¡${label} copiado al portapapeles!`);
    }).catch(() => {
      fallbackCopy(text, label);
    });
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  showToast(`¡${label} copiado al portapapeles!`);
}

function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/* ==========================================================================
   FORMULARIO DE CONTACTO (WHATSAPP & CORREO)
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name")?.value.trim() || "";
    const email = document.getElementById("form-email")?.value.trim() || "";
    const subject = document.getElementById("form-subject")?.value.trim() || "Contacto desde Portafolio";
    const message = document.getElementById("form-message")?.value.trim() || "";
    const sendMethod = document.querySelector('input[name="send-channel"]:checked')?.value || "whatsapp";

    if (!name || !message) {
      showToast("Por favor completa tu nombre y mensaje");
      return;
    }

    if (sendMethod === "whatsapp") {
      const fullText = `Hola Santiago! Mi nombre es *${name}* (${email}).\nAsunto: *${subject}*\n\n${message}`;
      const waUrl = `https://wa.me/543515323662?text=${encodeURIComponent(fullText)}`;
      window.open(waUrl, "_blank");
      showToast("Abriendo WhatsApp...");
    } else {
      const mailtoUrl = `mailto:romansantiago054@gmail.com?subject=${encodeURIComponent(subject + " - " + name)}&body=${encodeURIComponent("De: " + name + " (" + email + ")\n\n" + message)}`;
      window.location.href = mailtoUrl;
      showToast("Abriendo cliente de correo...");
    }
  });
}

/* ==========================================================================
   MENÚ MÓVIL
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    menuBtn.setAttribute("aria-expanded", !isHidden);
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// Funciones globales expuestas para eventos inline
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.copyToClipboard = copyToClipboard;
window.showToast = showToast;
