"use strict";

/* ============================================================
   CENTRAL PROJECT CONFIGURATION — edit only here later
   To add a real link: replace "" with the URL.
   reportStatus: "coming-soon" | "available"
============================================================ */
const projects = {
  internflow: {
    title: "InternFlow",
    liveDemo: "",
    github: "https://github.com/MohanPrabu018-K/Internflow",
    report: "assets/reports/InternFlow-Project-Report.pdf",
    reportStatus: "available"
  },
  taxshield: {
    title: "TaxShield",
    liveDemo: "",
    github: "",
    report: "",
    reportStatus: "coming-soon"
  },
  agrosense: {
    title: "AgroSense AI",
    liveDemo: "",
    github: "https://github.com/MohanPrabu018-K/Agro-Sense-AI-",
    report: "assets/reports/AgroSense-AI-Project-Report.pdf",
    reportStatus: "available"
  },
  fpp: {
    title: "Faculty Patent Profile Verification System",
    shortTitle: "FPP",
    liveDemo: "https://faculty-patent-portal.vercel.app",
    github: "https://github.com/MohanPrabu018-K/Faculty-Patent-Collection-and-Verification-Portal",
    report: "assets/reports/FPP-Project-Report.pdf",
    reportStatus: "available"
  }
};
const projectLinks = projects; // alias required by spec

const projectReports = {
  internflow: {
    title: "InternFlow — Project Report",
    status: "available",
    content: `<p><strong>AI-Powered Internship Recruitment SaaS (Completed).</strong> Production-ready Next.js 15 + React 19 + TypeScript system managing the full recruitment lifecycle — 7-stage Kanban pipeline, candidate management, assessments, interviews, offer letters, email center, analytics, and 10 AI services — over PostgreSQL/Prisma with NextAuth.js RBAC.</p><ul><li>22 routes, 0 TypeScript errors, 0 ESLint errors; Vitest suite passing</li><li>15 Prisma models, seed data, DEPLOYMENT.md included</li><li>Repository: https://github.com/MohanPrabu018-K/Internflow</li></ul><div class="report-scope"><strong>Full professional report (PDF):</strong> <a href="assets/reports/InternFlow-Project-Report.pdf" target="_blank" rel="noopener noreferrer">Download / view the complete report</a></div>`
  },
  taxshield: {
    title: "TaxShield — Project Report",
    status: "coming-soon",
    content: ""
  },
  agrosense: {
    title: "AgroSense AI — Project Report",
    status: "available",
    content: `<p><strong>Agricultural Recommendation System (Completed).</strong> Flask web application combining a trained Random Forest crop model (2,200-row dataset, 22 crop classes), rule-based fertilizer planning, heuristic leaf-image disease screening, authentication, prediction history, PDF reports, and an admin dashboard.</p><ul><li>Dataset + training script + model artifact + metadata all in-repo (MIT)</li><li>Verified flows: auth, all three predictors, invalid-image rejection, PDF export</li><li>Repository: https://github.com/MohanPrabu018-K/Agro-Sense-AI-</li></ul><div class="report-scope"><strong>Full professional report (PDF):</strong> <a href="assets/reports/AgroSense-AI-Project-Report.pdf" target="_blank" rel="noopener noreferrer">Download / view the complete report</a></div>`
  },
  fpp: {
    title: "FPP — Project Report",
    status: "available",
    content: `<p><strong>Faculty Patent Profile Verification System (Currently Building).</strong> Institutional portal collecting and verifying faculty patents/designs: FastAPI + PostgreSQL backend running a deterministic 11-agent document pipeline (classification, QR, OCR extraction, verification, identity, duplicate, conflict, association, quality, analytics) with a React + TypeScript frontend and human review of uncertain cases.</p><ul><li>Free-first: no Docker, no paid APIs; OCR degrades gracefully</li><li>Live demo: https://faculty-patent-portal.vercel.app</li><li>Repository: https://github.com/MohanPrabu018-K/Faculty-Patent-Collection-and-Verification-Portal</li></ul><div class="report-scope"><strong>Full professional report (PDF):</strong> <a href="assets/reports/FPP-Project-Report.pdf" target="_blank" rel="noopener noreferrer">Download / view the complete report</a></div>`
  }
};

const REPORT_OUTLINE = [
  "Problem Statement", "Objectives", "Architecture", "Technology Stack",
  "System Workflow", "Key Features", "Implementation", "Challenges", "Results", "Future Scope"
];

/* Journey chapters — single source for book */
const JOURNEY = [
  {
    title: "The Beginning",
    role: "B.Tech Artificial Intelligence & Data Science • 2024–2028",
    body: "RP Sarathy Institute of Technology. Building foundations in programming, data, and systems thinking.",
    list: [],
    meta: "CGPA: 8.01 / 10"
  },
  {
    title: "Exploring Blockchain",
    role: "Blockchain Developer Intern • CODTECH IT Solutions",
    body: "Remote internship focused on smart contracts, DApps, and Web3 workflows.",
    list: ["Smart contract basics", "DApp development", "Decentralized architecture"],
    meta: "June 2025 – July 2025"
  },
  {
    title: "Building for Industry",
    role: "Flutter Developer Intern • SHE Software Solutions",
    body: "Built the Employee Barcode Management System with Flutter + Firebase — now used by the company for employee and intern ID management.",
    list: ["Flutter + Firebase", "Production usage"],
    meta: "March 2026 – May 2026"
  },
  {
    title: "Taking Leadership",
    role: "Team Lead Intern • SHE Software Solutions",
    body: "Leading Full-Stack and Data Analytics teams across 3 company projects.",
    list: ["Task allocation", "Project planning", "Progress tracking", "Team coordination", "Execution"],
    meta: "June 2026 – Present"
  },
  {
    title: "Building Products",
    role: "InternFlow • AgroSense AI",
    body: "Shipped product-style builds: AI recruitment SaaS and an agricultural recommendation system with explainable insights.",
    list: ["InternFlow — completed", "AgroSense AI — completed"],
    meta: "Product execution"
  },
  {
    title: "Current Chapter",
    role: "TaxShield • FPP",
    body: "Currently building a tax-readiness intelligence platform and a patent-profile verification system.",
    list: ["TaxShield — currently working", "FPP — currently working"],
    meta: "In progress",
    here: true
  },
  {
    title: "What's Next",
    role: "Full-Stack • AI • Web3 • Product Engineering",
    body: "Deepening product engineering, AI systems, and Web3 — with continuous learning and team leadership.",
    list: ["Full-Stack", "AI", "Web3", "Continuous learning"],
    meta: "Next"
  }
];

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Welcome (1–2s max, skippable) ---------- */
function initWelcome() {
  const welcome = $("#welcome");
  const bar = $("#welcomeBar");
  const enter = $("#welcomeEnter");
  if (!welcome) return;
  document.body.style.overflow = "hidden";
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    welcome.classList.add("hide");
    document.body.style.overflow = "";
    welcome.setAttribute("aria-hidden", "true");
  };
  enter.addEventListener("click", finish);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Enter") finish();
  });
  // progress bar ~1.4s
  const start = performance.now();
  const dur = prefersReducedMotion() ? 100 : 1400;
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    if (bar) bar.style.width = `${p * 100}%`;
    if (p < 1 && !done) requestAnimationFrame(tick);
    else finish();
  };
  requestAnimationFrame(tick);
  // hard cap 2s
  setTimeout(finish, 2000);
}

/* ---------- Subtle ambient particles (very low opacity) ---------- */
function initAmbient() {
  const canvas = $("#ambientCanvas");
  if (!canvas || prefersReducedMotion()) return;
  const ctx = canvas.getContext("2d");
  let w, h, pts = [];
  const resize = () => {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    const n = Math.min(36, Math.floor((w * h) / 45000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: 1 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18
    }));
  };
  resize();
  window.addEventListener("resize", resize, { passive: true });
  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);
  const reduced = () => document.hidden || !visible;
  (function loop() {
    requestAnimationFrame(loop);
    if (reduced()) return;
    ctx.clearRect(0, 0, w, h);
    pts.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(29,78,216,0.10)";
      ctx.fill();
    });
    ctx.strokeStyle = "rgba(29,78,216,0.06)";
    ctx.lineWidth = 1;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        if (dx * dx + dy * dy < 130 * 130) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }
  })();
}

/* ---------- Theme (light default, persisted, accessible) ---------- */
function initTheme() {
  const btn = $("#themeToggle");
  if (!btn) return;
  const icon = $("i", btn);
  const apply = (theme) => {
    document.documentElement.dataset.theme = theme;
    const dark = theme === "dark";
    btn.setAttribute("aria-pressed", String(dark));
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    btn.title = dark ? "Switch to light theme" : "Switch to dark theme";
    if (icon) icon.className = dark ? "bx bx-sun" : "bx bx-moon";
  };
  let saved = null;
  try { saved = localStorage.getItem("mohanprabu-theme"); } catch { saved = null; }
  apply(saved === "dark" ? "dark" : "light");
  btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("mohanprabu-theme", next); } catch { /* private mode */ }
    apply(next);
  });
}

/* ---------- Nav + scroll ---------- */
function initNav() {
  const header = $("#header");
  const menu = $("#navMenu");
  const toggle = $("#navToggle");
  const links = $$(".nav__link");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector("i").className = open ? "bx bx-x" : "bx bx-menu";
  });
  links.forEach((a) => a.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector("i").className = "bx bx-menu";
  }));
  const sections = ["home", "about", "journey", "experience", "skills", "projects", "contact"]
    .map((id) => document.getElementById(id)).filter(Boolean);
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
    let current = "home";
    sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 160) current = s.id; });
    links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${current}`));
    const total = document.documentElement.scrollHeight - window.innerHeight;
    $("#scrollProgress").style.width = total > 0 ? `${(window.scrollY / total) * 100}%` : "0%";
    $("#backToTop").classList.toggle("show", window.scrollY > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  $("#backToTop").addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" }));
}

/* ---------- Reveal on scroll (IntersectionObserver) ---------- */
function initReveal() {
  const els = $$(".reveal");
  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
}

/* ---------- Photo subtle parallax ---------- */
function initPhotoParallax() {
  const frame = $("#photoFrame");
  if (!frame || prefersReducedMotion()) return;
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const r = frame.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const offset = (r.top + r.height / 2 - center) / window.innerHeight;
      frame.style.transform = `translateY(${(offset * -14).toFixed(1)}px) translateZ(15px)`;
      ticking = false;
    });
  }, { passive: true });
}

/* ---------- Hero portrait differential parallax ----------
   Layers carry data-px factors (grid 1x → detail 4x). Uses the individual
   `translate` property so CSS translateZ depth is never overridden.
   Stage rotation stays with the generic tilt system; text never moves. */
function initPortraitParallax() {
  const scene = $("#photoTilt");
  const hero = $("#home");
  if (!scene || !hero) return;
  if (prefersReducedMotion()) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;
  const layers = $$("[data-px]", scene);
  if (!layers.length) return;
  hero.addEventListener("pointermove", (e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    const r = scene.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    const px = (e.clientX - (r.left + r.width / 2)) / r.width;
    const py = (e.clientY - (r.top + r.height / 2)) / r.height;
    layers.forEach((l) => {
      const f = parseFloat(l.dataset.px || "1");
      l.style.translate = `${(px * f * 4).toFixed(1)}px ${(py * f * 3).toFixed(1)}px`;
    });
  });
  hero.addEventListener("pointerleave", () => {
    layers.forEach((l) => { l.style.translate = ""; });
  });
}

/* ---------- Journey book ---------- */
function initBook() {
  const page = $("#bookPage");
  if (!page) return;
  let index = 0;
  const kicker = $("#bookKicker"), title = $("#bookTitle"),
    role = $("#bookRole"), body = $("#bookBody"),
    list = $("#bookList"), meta = $("#bookMeta"),
    dots = $("#bookDots"), progress = $("#bookProgress");

  dots.innerHTML = JOURNEY.map((_, i) =>
    `<button type="button" role="tab" aria-label="Go to chapter ${i + 1}" aria-selected="${i === 0}"></button>`).join("");
  const dotBtns = $$("button", dots);

  function render(dir = 1) {
    const c = JOURNEY[index];
    const hereEl = $("#bookHere");
    const bookEl = $("#book");
    kicker.textContent = `Chapter ${String(index + 1).padStart(2, "0")} / ${String(JOURNEY.length).padStart(2, "0")}`;
    title.textContent = c.title;
    role.textContent = c.role;
    body.textContent = c.body;
    list.innerHTML = c.list.map((li) => `<li>${li}</li>`).join("");
    meta.textContent = c.meta;
    if (hereEl) hereEl.hidden = !c.here;
    if (bookEl) bookEl.classList.toggle("book--current", !!c.here);
    dotBtns.forEach((d, i) => d.setAttribute("aria-selected", String(i === index)));
    progress.style.width = `${((index + 1) / JOURNEY.length) * 100}%`;
    const counter = $("#bookCounter");
    if (counter) counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(JOURNEY.length).padStart(2, "0")}`;
    if (!prefersReducedMotion()) {
      page.classList.remove("turning");
      void page.offsetWidth;
      page.classList.add("turning");
    }
  }
  const next = () => { index = (index + 1) % JOURNEY.length; render(1); };
  const prev = () => { index = (index - 1 + JOURNEY.length) % JOURNEY.length; render(-1); };

  $("#bookNext").addEventListener("click", next);
  $("#bookPrev").addEventListener("click", prev);
  const nextM = $("#bookNextM"), prevM = $("#bookPrevM");
  if (nextM) nextM.addEventListener("click", next);
  if (prevM) prevM.addEventListener("click", prev);
  dotBtns.forEach((d, i) => d.addEventListener("click", () => { index = i; render(1); }));
  document.addEventListener("keydown", (e) => {
    const r = page.getBoundingClientRect();
    const inView = r.top < window.innerHeight && r.bottom > 0;
    if (!inView) return;
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
  // swipe
  let sx = null;
  page.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  page.addEventListener("touchend", (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    sx = null;
  }, { passive: true });
  // click sides to turn (desktop)
  page.addEventListener("click", (e) => {
    const r = page.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    if (x > 0.65) next();
    else if (x < 0.35) prev();
  });
  render(1);
}

/* ---------- Professional minimal 3D tilt: interpolated, capped, pointer-only ---------- */
function initTilt3D() {
  const els = $$("[data-tilt-3d]");
  if (!els.length) return;
  // Disable on touch, coarse pointers, or reduced motion
  if (prefersReducedMotion()) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  els.forEach((el) => {
    const maxY = Math.min(parseFloat(el.dataset.tiltMax || "4"), 5); // rotateY cap (hero 5)
    const maxX = Math.min(parseFloat(el.dataset.tiltX || el.dataset.tiltMax || "4"), 4); // rotateX cap 4
    const shadow = el.querySelector("#photoShadow, .photo-shadow");
    let visible = true;
    let tx = 0, ty = 0, cx = 0, cy = 0, running = false;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && (tx !== 0 || ty !== 0)) start();
    }, { threshold: 0.1 });
    io.observe(el);

    function frame() {
      // smooth interpolation — no snapping
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      if (Math.abs(tx - cx) < 0.01 && Math.abs(ty - cy) < 0.01) {
        cx = tx; cy = ty;
      }
      el.style.transform = (cx === 0 && cy === 0)
        ? ""
        : `translate3d(0,0,0) rotateX(${cy.toFixed(2)}deg) rotateY(${cx.toFixed(2)}deg)`;
      if (shadow) {
        // dynamic shadow moves opposite the pointer
        shadow.style.transform = `translateX(${(-cx * 3).toFixed(1)}px)`;
        shadow.style.opacity = cx === 0 && cy === 0 ? "" : "0.85";
      }
      if ((cx !== tx || cy !== ty) && visible) {
        requestAnimationFrame(frame);
      } else {
        running = false;
      }
    }
    function start() {
      if (running || !visible) return;
      running = true;
      requestAnimationFrame(frame);
    }

    el.addEventListener("pointermove", (e) => {
      if (!visible) return;
      if (e.pointerType && e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      tx = Math.max(-maxY, Math.min(maxY, px * maxY));
      ty = Math.max(-maxX, Math.min(maxX, -py * maxX));
      start();
    });
    el.addEventListener("pointerleave", () => {
      tx = 0; ty = 0;
      start();
    });
  });
}

/* ---------- Currently Building: independent per-card 3D scenes ----------
   Each card owns its perspective (CSS), layers (CSS) and ALL pointer state
   (this closure). No shared container listeners, no global transform state:
   hovering TaxShield can never move FPP and vice versa. */
function initBuildingTilt() {
  const cards = $$("[data-btilt]");
  if (!cards.length) return;
  if (prefersReducedMotion()) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const MAX_Y = 4; // rotateY cap
  const MAX_X = 3; // rotateX cap

  cards.forEach((card) => {
    // per-card state — never shared, never global
    let pointerX = 0, pointerY = 0;
    let targetRX = 0, targetRY = 0;
    let currentRX = 0, currentRY = 0;
    let hovering = false, visible = true, running = false;

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && (targetRX !== 0 || targetRY !== 0)) start();
    }, { threshold: 0.1 });
    io.observe(card);

    function frame() {
      currentRX += (targetRX - currentRX) * 0.14;
      currentRY += (targetRY - currentRY) * 0.14;
      if (Math.abs(targetRX - currentRX) < 0.01) currentRX = targetRX;
      if (Math.abs(targetRY - currentRY) < 0.01) currentRY = targetRY;
      card.style.transform = (currentRX === 0 && currentRY === 0 && !hovering)
        ? ""
        : `translate3d(0,0,0) rotateX(${currentRX.toFixed(2)}deg) rotateY(${currentRY.toFixed(2)}deg)`;
      card.classList.toggle("tilting", hovering);
      if (((currentRX !== targetRX || currentRY !== targetRY) || hovering) && visible) {
        requestAnimationFrame(frame);
      } else {
        running = false;
        if (!hovering) { card.style.transform = ""; card.classList.remove("tilting"); }
      }
    }
    function start() {
      if (running || !visible) return;
      running = true;
      requestAnimationFrame(frame);
    }

    card.addEventListener("pointermove", (e) => {
      if (!visible) return;
      if (e.pointerType && e.pointerType !== "mouse") return;
      const r = card.getBoundingClientRect();
      pointerX = (e.clientX - r.left) / r.width - 0.5;
      pointerY = (e.clientY - r.top) / r.height - 0.5;
      targetRY = Math.max(-MAX_Y, Math.min(MAX_Y, pointerX * MAX_Y));
      targetRX = Math.max(-MAX_X, Math.min(MAX_X, -pointerY * MAX_X));
      hovering = true;
      start();
    });
    card.addEventListener("pointerenter", (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      hovering = true;
      start();
    });
    card.addEventListener("pointerleave", () => {
      // only this card returns to neutral — the other card is untouched
      hovering = false;
      targetRX = 0; targetRY = 0;
      pointerX = 0; pointerY = 0;
      start();
    });
  });
}

/* ---------- Placeholder / report modal ---------- */
function initProjectModals() {
  const modal = $("#infoModal");
  const kicker = $("#infoKicker"), title = $("#infoTitle"), body = $("#infoBody");
  let lastFocus = null;

  function open(k, t, html) {
    lastFocus = document.activeElement;
    kicker.textContent = k;
    title.textContent = t;
    body.innerHTML = html;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const closeBtn = $(".modal__close", modal);
    if (closeBtn) closeBtn.focus();
  }
  function close() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-close-info]")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) close();
  });

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action][data-project]");
    if (!btn) return;
    const key = btn.dataset.project;
    const action = btn.dataset.action;
    const cfg = projects[key];
    if (!cfg) return;
    const name = cfg.shortTitle || cfg.title;

    if (action === "live") {
      if (cfg.liveDemo) { window.open(cfg.liveDemo, "_blank", "noopener,noreferrer"); return; }
      open(name, "Live Demo Coming Soon",
        `<p>The live demo link will be added here soon. This project demo is currently being prepared.</p>
         <div class="report-scope"><strong>Demo link will be added soon.</strong></div>`);
    }
    if (action === "github") {
      if (cfg.github) { window.open(cfg.github, "_blank", "noopener,noreferrer"); return; }
      open(name, "GitHub Repository Coming Soon",
        `<p>The repository link will be added here once it is ready.</p>
         <div class="report-scope"><strong>Repository will be added soon.</strong></div>`);
    }
    if (action === "report") {
      const rep = projectReports[key];
      if (rep && (rep.status === "available" || rep.content)) {
        open(name, rep.title, `<div>${rep.content}</div>`);
        return;
      }
      if (cfg.report) { window.open(cfg.report, "_blank", "noopener,noreferrer"); return; }
      open(name, `${name} — Project Report`,
        `<p><strong>Project Report Coming Soon.</strong> The detailed project report is currently being prepared.</p>
         <p>It will include:</p>
         <ul>${REPORT_OUTLINE.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
         <div class="report-scope"><strong>Detailed report will be available soon.</strong> Report will be added here soon.</div>`);
    }
  });

  // deep-link from Currently Building cards + architecture links
  const highlight = (el) => {
    el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
    el.style.boxShadow = "0 0 0 3px rgba(29,78,216,.35)";
    setTimeout(() => { el.style.boxShadow = ""; }, 1600);
  };
  $$("[data-goto-project]").forEach((a) => a.addEventListener("click", () => {
    const id = `project-${a.dataset.gotoProject}`;
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) highlight(el);
    }, 50);
  }));
  // architecture deep links (Inside the Build → project cards)
  $$('a.arch-link[href^="#"], a[href^="#project-"]').forEach((a) => a.addEventListener("click", () => {
    const id = a.getAttribute("href").slice(1);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) highlight(el);
    }, 450);
  }));
}

/* ---------- Contact form (mailto, no fake backend) ---------- */
function initContact() {
  const form = $("#contactForm");
  if (!form) return;
  const status = $("#formStatus");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (name.length < 2 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || message.length < 12) {
      status.style.color = "#dc2626";
      status.textContent = "Please add your name, a valid email, and a message (12+ characters).";
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Mohan,\n\n${message}\n\nFrom: ${name}\n${email}`);
    window.location.href = `mailto:mohanprabu1823@gmail.com?subject=${subject}&body=${body}`;
    status.style.color = "#15803d";
    status.textContent = "Opening your email app…";
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initWelcome();
  initAmbient();
  initTheme();
  initNav();
  initReveal();
  initPhotoParallax();
  initPortraitParallax();
  initTilt3D();
  initBuildingTilt();
  initBook();
  initProjectModals();
  initContact();
});
