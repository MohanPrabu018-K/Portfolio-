"use strict";

const projects = [
  {
    title: "Agro-Sense AI",
    category: ["ai", "fullstack"],
    label: "AI + Full Stack",
    image: "assets/images/agro-sense-screenshot.svg",
    description: "AI-based smart agriculture assistant for crop recommendation, fertilizer planning, disease detection, soil health scoring, authentication, and reporting.",
    features: ["Crop recommendation", "Disease detection using image inputs", "Fertilizer planning", "Soil health scoring", "Authentication and reporting"],
    challenges: "Combined soil, weather, and image inputs into a single Flask-based platform while keeping the experience understandable for real users.",
    metrics: ["92% crop match demo score", "4 core agriculture modules", "Mobile-first farmer workflow"],
    impact: "Helps farmers make faster crop and soil decisions from one practical dashboard.",
    tech: ["Python", "Flask", "Machine Learning", "JavaScript"],
    github: "https://github.com/MohanPrabu018-K",
    demo: "https://github.com/MohanPrabu018-K"
  },
  {
    title: "Crypto Price Tracker",
    category: ["webapp", "fullstack"],
    label: "Web App",
    image: "assets/images/crypto-tracker-screenshot.svg",
    description: "Real-time web application to track top cryptocurrencies using CoinGecko API integration and live price updates.",
    features: ["CoinGecko API integration", "Live price updates", "Search functionality", "Dynamic UI updates", "Backend optimization"],
    challenges: "Balanced frequent API-driven updates with a smooth interface that remains searchable, responsive, and easy to scan.",
    metrics: ["Live API-powered prices", "Search-driven UX", "Optimized backend response flow"],
    impact: "Turns market data into a clean dashboard recruiters can understand quickly.",
    tech: ["Flask", "JavaScript", "API Integration"],
    github: "https://github.com/MohanPrabu018-K",
    demo: "https://github.com/MohanPrabu018-K"
  },
  {
    title: "Blockchain Donation Tracking",
    category: ["blockchain", "fullstack"],
    label: "Blockchain",
    image: "assets/images/donation-tracking-screenshot.svg",
    description: "Transparent blockchain-based donation monitoring system for tracking donation flow and improving accountability.",
    features: ["Donation ledger", "Transparent transaction flow", "Admin verification states", "Trust-first user interface"],
    challenges: "Balanced blockchain transparency with a simple donor journey that non-technical users can understand quickly.",
    metrics: ["Transparent ledger flow", "Verifiable donation status", "Trust-focused UI architecture"],
    impact: "Improves donor confidence by showing where funds move and how impact is recorded.",
    tech: ["Solidity", "Blockchain", "Web3", "JavaScript"],
    github: "https://github.com/MohanPrabu018-K",
    demo: "https://github.com/MohanPrabu018-K"
  }
];

const emailAddress = "mohanprabu1823@gmail.com";

const techIcons = {
  "Python": "bxl-python",
  "Flask": "bx-server",
  "Machine Learning": "bx-brain",
  "JavaScript": "bxl-javascript",
  "API Integration": "bx-plug",
  "Solidity": "bx-cube-alt",
  "Blockchain": "bx-link-alt",
  "Web3": "bx-network-chart"
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function initLoader() {
  const loader = $("#loader");
  const bar = $("#loaderBar");
  const percent = $("#loaderPercent");
  let value = 0;
  const timer = setInterval(() => {
    value += Math.floor(Math.random() * 8) + 4;
    if (value >= 100) value = 100;
    bar.style.width = `${value}%`;
    percent.textContent = `${value}%`;
    if (value === 100) {
      clearInterval(timer);
      setTimeout(() => loader.classList.add("hide"), 450);
    }
  }, 80);
}

function initTheme() {
  const savedTheme = localStorage.getItem("mango-theme");
  const toggle = $("#themeToggle");
  const icon = $("i", toggle);
  if (savedTheme === "light") document.body.classList.add("light");
  icon.className = document.body.classList.contains("light") ? "bx bx-sun" : "bx bx-moon";

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    icon.className = isLight ? "bx bx-sun" : "bx bx-moon";
    localStorage.setItem("mango-theme", isLight ? "light" : "dark");
  });
}

function initNav() {
  const header = $("#header");
  const navMenu = $("#navMenu");
  const navToggle = $("#navToggle");
  const sections = $$("main section[id]");
  const links = $$(".nav__link");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    $("i", navToggle).className = navMenu.classList.contains("open") ? "bx bx-x" : "bx bx-menu-alt-right";
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      $("i", navToggle).className = "bx bx-menu-alt-right";
    });
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
    let current = "home";
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 140) current = section.id;
    });
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  });
}

function initTyping() {
  if (window.Typed) {
    new Typed(".typed-text", {
      strings: ["Full Stack Developer", "AI Developer", "Web3 Developer", "Cloud & Blockchain Developer"],
      typeSpeed: 58,
      backSpeed: 34,
      backDelay: 1300,
      loop: true
    });
  } else {
    $(".typed-text").textContent = "Full Stack Developer";
  }
}

function initParticles() {
  if (!window.particlesJS) return;
  particlesJS("particles-js", {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 900 } },
      color: { value: ["#22d3ee", "#3b82f6", "#a855f7"] },
      shape: { type: "circle" },
      opacity: { value: 0.35, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 145, color: "#38bdf8", opacity: 0.14, width: 1 },
      move: { enable: true, speed: 1.2, direction: "none", random: true, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { grab: { distance: 150, line_linked: { opacity: 0.25 } }, push: { particles_nb: 3 } }
    },
    retina_detect: true
  });
}

function initReveal() {
  if (!window.ScrollReveal) return;
  const base = { distance: "34px", duration: 850, easing: "cubic-bezier(.2,.8,.2,1)", interval: 90, reset: false };
  ScrollReveal().reveal(".reveal-up", { ...base, origin: "bottom" });
  ScrollReveal().reveal(".reveal-left", { ...base, origin: "left" });
  ScrollReveal().reveal(".reveal-right", { ...base, origin: "right" });
}

function initTilt() {
  if (window.VanillaTilt) {
    VanillaTilt.init($$("[data-tilt]"), {
      max: 10,
      speed: 550,
      glare: true,
      "max-glare": 0.18
    });
  }
}

function initCountersAndSkills() {
  const counters = $$("[data-count]");
  const bars = $$(".skill em");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      if (target.matches("[data-count]")) animateCounter(target);
      if (target.matches(".skill-card")) {
        $$("em", target).forEach(bar => {
          bar.style.width = `${bar.dataset.width}%`;
        });
      }
      observer.unobserve(target);
    });
  }, { threshold: 0.35 });

  counters.forEach(counter => observer.observe(counter));
  $$(".skill-card").forEach(card => observer.observe(card));
  bars.forEach(bar => bar.style.width = "0%");
}

function animateCounter(element) {
  const target = Number(element.dataset.count);
  const duration = 1300;
  const start = performance.now();
  const step = now => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function renderProjects(filter = "all") {
  const grid = $("#projectGrid");
  const filtered = filter === "all" ? projects : projects.filter(project => project.category.includes(filter));
  grid.innerHTML = filtered.map(project => `
    <article class="project-card reveal-up" data-project="${project.title}">
      <div class="project-card__image">
        <img src="${project.image}" alt="${project.title} screenshot" loading="lazy">
        <div class="project-card__overlay">
          <button class="btn btn--primary" data-open-project="${project.title}">View Details</button>
        </div>
      </div>
      <div class="project-card__body">
        <span class="eyebrow">${project.label}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="metric-list">${project.metrics.map(metric => `<span><i class="bx bx-trending-up"></i>${metric}</span>`).join("")}</div>
        <p class="project-impact"><i class="bx bx-target-lock"></i>${project.impact}</p>
        <div class="tag-list">${project.tech.map(tag => techBadge(tag)).join("")}</div>
        <div class="project-card__actions">
          <a class="btn btn--ghost" href="${project.github}" target="_blank" rel="noreferrer"><i class="bx bxl-github"></i>GitHub</a>
          <a class="btn btn--primary" href="${project.demo}" target="_blank" rel="noreferrer"><i class="bx bx-link-external"></i>Live Demo</a>
        </div>
      </div>
    </article>
  `).join("");
}

function initProjectFilters() {
  renderProjects();
  $$(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      $$(".filter-btn").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });
  });
}

function initModal() {
  const modal = $("#projectModal");
  document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-open-project], .project-card");
    const close = event.target.closest("[data-close-modal]");
    if (close) closeModal();
    if (!trigger || event.target.closest("a")) return;
    const title = trigger.dataset.openProject || trigger.dataset.project;
    const project = projects.find(item => item.title === title);
    if (project) openModal(project);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
  });

  function openModal(project) {
    $("#modalImage").src = project.image;
    $("#modalImage").alt = `${project.title} screenshot`;
    $("#modalCategory").textContent = project.label;
    $("#modalTitle").textContent = project.title;
    $("#modalDescription").textContent = project.description;
    $("#modalFeatures").innerHTML = project.features.map(feature => `<li>${feature}</li>`).join("");
    $("#modalChallenges").textContent = project.challenges;
    $("#modalTags").innerHTML = project.tech.map(tag => techBadge(tag)).join("");
    $("#modalMetrics").innerHTML = project.metrics.map(metric => `<li>${metric}</li>`).join("");
    $("#modalImpact").textContent = project.impact;
    $("#modalGithub").href = project.github;
    $("#modalDemo").href = project.demo;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

function techBadge(tag) {
  return `<span><i class="bx ${techIcons[tag] || "bx-code-alt"}"></i>${tag}</span>`;
}

function initResumePreview() {
  const modal = $("#resumeModal");
  const openButton = $("#openResumePreview");
  if (!modal || !openButton) return;

  openButton.addEventListener("click", () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });

  document.addEventListener("click", event => {
    if (!event.target.closest("[data-close-resume]")) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape" || !modal.classList.contains("open")) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  });
}


function initDownloadOptions() {
  const modal = $("#downloadModal");
  const openButtons = $$("[data-open-download], #openDownloadOptions");
  if (!modal || openButtons.length === 0) return;

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  openButtons.forEach(button => {
    button.addEventListener("click", () => {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  document.addEventListener("click", event => {
    if (event.target.closest("[data-close-download]")) closeModal();
    if (event.target.closest(".download-card")) closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
}
function initContact() {
  const form = $("#contactForm");
  const status = $("#formStatus");
  const copyButton = $("#copyEmail");

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      copyButton.innerHTML = '<i class="bx bx-check"></i>Copied';
      setTimeout(() => copyButton.innerHTML = '<i class="bx bx-copy"></i>Copy Email', 1500);
    } catch {
      copyButton.textContent = emailAddress;
    }
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    let valid = true;
    $$("input, textarea", form).forEach(field => {
      field.classList.toggle("invalid", !field.checkValidity());
      if (!field.checkValidity()) valid = false;
    });
    status.style.color = valid ? "var(--green)" : "var(--rose)";
    if (!valid) {
      status.textContent = "Please complete all fields with valid details.";
      return;
    }

    const formData = new FormData(form);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const subject = formData.get("subject").trim();
    const message = formData.get("message").trim();
    const body = encodeURIComponent(`Hi Mohan,

${message}

From:
${name}
${email}`);

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${body}`;
    status.textContent = "Opening your email app...";
    form.reset();
  });

  form.addEventListener("input", event => {
    if (event.target.matches("input, textarea")) {
      event.target.classList.toggle("invalid", !event.target.checkValidity());
    }
  });
}

function initScrollTools() {
  const progress = $("#scrollProgress");
  const backToTop = $("#backToTop");
  window.addEventListener("scroll", () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${(window.scrollY / total) * 100}%`;
    backToTop.classList.toggle("show", window.scrollY > 700);
  });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initCursor() {
  const dot = $(".cursor-dot");
  const ring = $(".cursor-ring");
  if (!dot || !ring || window.matchMedia("(pointer: coarse)").matches) return;
  const trails = Array.from({ length: 10 }, () => {
    const trail = document.createElement("span");
    trail.className = "mouse-trail";
    document.body.appendChild(trail);
    return trail;
  });
  let ringX = 0;
  let ringY = 0;
  let trailIndex = 0;
  window.addEventListener("mousemove", event => {
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    ringX += (event.clientX - ringX) * 0.22;
    ringY += (event.clientY - ringY) * 0.22;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    const trail = trails[trailIndex];
    trail.style.left = `${event.clientX}px`;
    trail.style.top = `${event.clientY}px`;
    trail.style.opacity = "0.75";
    trail.style.transform = "translate(-50%, -50%) scale(1)";
    setTimeout(() => {
      trail.style.opacity = "0";
      trail.style.transform = "translate(-50%, -50%) scale(0.25)";
    }, 180);
    trailIndex = (trailIndex + 1) % trails.length;
  });
  document.addEventListener("mouseover", event => {
    const interactive = event.target.closest("a, button, input, textarea, .project-card");
    ring.style.width = interactive ? "52px" : "34px";
    ring.style.height = interactive ? "52px" : "34px";
    ring.style.borderColor = interactive ? "rgba(168, 85, 247, 0.75)" : "rgba(34, 211, 238, 0.55)";
  });
}

function duplicateMarquee() {
  const track = $(".marquee__track");
  track.innerHTML += track.innerHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initTheme();
  initNav();
  initTyping();
  initParticles();
  initReveal();
  initTilt();
  initCountersAndSkills();
  initProjectFilters();
  initModal();
  initResumePreview();
  initDownloadOptions();
  initContact();
  initScrollTools();
  initCursor();
  duplicateMarquee();
});

