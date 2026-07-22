/* ==========================================================
   DATOS EDITABLES
   Agrega, quita o modifica los objetos de estos arreglos.
   image  -> ruta a una imagen (jpg/png/svg) dentro de assets/
   pdf    -> (opcional) ruta a un PDF dentro de assets/
   ========================================================== */

const techData = [
  {
    group: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    group: "Herramientas",
    items: ["Git", "Docker", "Figma", "Postman", "Vercel"],
  },
];

const certificatesData = [
  {
    title: "Certificado Desarrollo Web Full Stack",
    issuer: "Campus Digital / INDOTEL",
    date: "2026",
    image: "assets/certificates/cert1.png",
    pdf: "",
  },
  {
    title: "Certificado Foundations of Cybersecurity",
    issuer: "Coursera / Google",
    date: "2026",
    image: "assets/certificates/cert2.jpeg",
    pdf: "",
  },
  {
    title: "Certificado Diseño Gráfico",
    issuer: "Cursa / ",
    date: "2025",
    image: "assets/certificates/cert3.jpeg",
    pdf: "",
  },
];

const projectsData = [
  {
    title: "Proyecto Hospicalfa Medical",
    description: "Plataforma web full-stack para Hospicalfa Medical, distribuidora de insumos médicos. Incluye tienda pública con catálogo de productos, carrito, checkout, sistema de cotizaciones e integración con WhatsApp, además de un panel administrativo protegido para gestión de pedidos, clientes, inventario, finanzas y usuarios. Desarrollada con Next.js 15, React 19 y TypeScript.",
    image: "assets/projects/captura hospixalfa.png",
    pdf: "",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Proyecto Psicologia",
    description: "Website sobre un blog, proyecto de ejemplo para demostrar habilidades",
    image: "assets/projects/psicolgoia.png",
    pdf: "",
    tags: ["JavaScript", "API REST"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Proyecto NexusFlow",
    description: "exusFlow es una plataforma web tipo SaaS para agencias y equipos que gestionan proyectos de clientes. Desarrollé el sistema completo: frontend, backend y base de datos. Incluye: • Autenticación segura (registro, login, recuperación de contraseña) con JWT y tokens de refresco • Dashboard ejecutivo con KPIs, gráficos de ingresos y distribución por estado • CRUD completo de proyectos: crear, editar, eliminar, buscar y filtrar por estado/prioridad • Panel administrativo responsive con modo claro/oscuro y animaciones • API REST en Node.js + Express con validaciones y manejo de errores • Base de datos MongoDB con datos de demostración Stack: React, Vite, Tailwind CSS, Framer Motion, Node.js, Express, MongoDB. Proyecto pensado con arquitectura escalable y código mantenible, listo para personalizar con la marca del cliente (colores, módulos, reportes, integraciones).",
    image: "assets/projects/3.png",
    pdf: "",
    tags: ["Python", "Automatización"],
    demo: "#",
    repo: "#",
  },
];

/* ==========================================================
   RENDER
   ========================================================== */

function renderTech() {
  const container = document.getElementById("tech-groups");
  container.innerHTML = techData
    .map(
      (group) => `
      <div class="tech-group">
        <h3 class="tech-group__title">${group.group}</h3>
        <div class="tech-grid">
          ${group.items
            .map(
              (name) => `
              <div class="tech-chip">
                <span class="tech-chip__badge">${name.charAt(0)}</span>
                <span class="tech-chip__name">${name}</span>
              </div>`
            )
            .join("")}
        </div>
      </div>`
    )
    .join("");
}

function renderCertificates() {
  const container = document.getElementById("certificates-grid");
  container.innerHTML = certificatesData
    .map(
      (cert, index) => `
      <article class="card reveal">
        <div class="card__media" data-lightbox-index="${index}" data-lightbox-type="cert">
          <img src="${cert.image}" alt="${cert.title}" loading="lazy">
        </div>
        <div class="card__body">
          <h3 class="card__title">${cert.title}</h3>
          <p class="card__meta">${cert.issuer} · ${cert.date}</p>
          <div class="card__actions">
            <span class="card__link" data-lightbox-index="${index}" data-lightbox-type="cert" style="cursor:pointer;">
              <svg viewBox="0 0 24 24" class="icon"><path d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7z"/><circle cx="12" cy="12" r="3"/></svg>
              Ver certificado
            </span>
            ${
              cert.pdf
                ? `<a class="card__link" href="${cert.pdf}" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" class="icon"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/></svg>
                    PDF
                  </a>`
                : ""
            }
          </div>
        </div>
      </article>`
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  container.innerHTML = projectsData
    .map(
      (project, index) => `
      <article class="card reveal">
        <div class="card__media" data-lightbox-index="${index}" data-lightbox-type="project">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
        </div>
        <div class="card__body">
          <h3 class="card__title">${project.title}</h3>
          <p class="card__desc">${project.description}</p>
          <div class="card__tags">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="card__actions">
            ${
              project.demo
                ? `<a class="card__link" href="${project.demo}" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" class="icon"><path d="M14 3h7v7m0-7L10 14M5 5h6v0H5v14h14v-6"/></svg>
                    Demo
                  </a>`
                : ""
            }
            ${
              project.repo
                ? `<a class="card__link" href="${project.repo}" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" class="icon"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.41-1.12-1.78-1.12-1.78-.91-.62.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .28.18.6.69.5C19.14 20.62 22 16.78 22 12.25 22 6.58 17.52 2 12 2z"/></svg>
                    Código
                  </a>`
                : ""
            }
            ${
              project.pdf
                ? `<a class="card__link" href="${project.pdf}" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" class="icon"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/></svg>
                    PDF
                  </a>`
                : ""
            }
          </div>
        </div>
      </article>`
    )
    .join("");
}

/* ==========================================================
   LIGHTBOX
   ========================================================== */

function openLightbox(type, index) {
  const data = type === "cert" ? certificatesData[index] : projectsData[index];
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightbox-content");

  const isPdf = data.pdf && (!data.image || data.image.toLowerCase().endsWith(".pdf"));
  content.innerHTML = data.pdf
    ? `<embed src="${data.pdf}" type="application/pdf">`
    : `<img src="${data.image}" alt="${data.title}">`;

  lightbox.classList.add("is-open");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("is-open");
  document.getElementById("lightbox-content").innerHTML = "";
}

/* ==========================================================
   NAV / SCROLL
   ========================================================== */

function setupNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => nav.classList.toggle("is-open"));

  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
  });
}

function setupActiveLinkOnScroll() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav__link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => observer.observe(item));
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Contacto desde portafolio - ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:rosariosr974@icloud.com?subject=${subject}&body=${body}`;
  });
}

/* ==========================================================
   INIT
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderTech();
  renderCertificates();
  renderProjects();

  setupNav();
  setupActiveLinkOnScroll();
  setupRevealAnimations();
  setupContactForm();

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-lightbox-index]");
    if (trigger) {
      openLightbox(trigger.dataset.lightboxType, Number(trigger.dataset.lightboxIndex));
    }
  });

  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (event) => {
    if (event.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
});
