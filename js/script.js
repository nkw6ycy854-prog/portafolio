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
    title: "Certificado de Ejemplo 1",
    issuer: "Plataforma / Institución",
    date: "2025",
    image: "assets/certificates/cert-1.svg",
    pdf: "",
  },
  {
    title: "Certificado de Ejemplo 2",
    issuer: "Plataforma / Institución",
    date: "2025",
    image: "assets/certificates/cert-2.svg",
    pdf: "",
  },
  {
    title: "Certificado de Ejemplo 3",
    issuer: "Plataforma / Institución",
    date: "2024",
    image: "assets/certificates/cert-3.svg",
    pdf: "",
  },
];

const projectsData = [
  {
    title: "Proyecto de Ejemplo 1",
    description: "Descripción corta explicando el problema que resuelve este proyecto y tu rol en él.",
    image: "assets/projects/project-1.svg",
    pdf: "",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Proyecto de Ejemplo 2",
    description: "Descripción corta explicando el problema que resuelve este proyecto y tu rol en él.",
    image: "assets/projects/project-2.svg",
    pdf: "",
    tags: ["JavaScript", "API REST"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Proyecto de Ejemplo 3",
    description: "Descripción corta explicando el problema que resuelve este proyecto y tu rol en él.",
    image: "assets/projects/project-3.svg",
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
                    <svg viewBox="0 0 24 24" class="icon"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>
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
    window.location.href = `mailto:tu.email@example.com?subject=${subject}&body=${body}`;
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
