// Plantillas de las páginas. Cada función recibe el texto de un idioma (src/content/en.js o es.js)
// y regresa el HTML. La estructura es la misma en los dos idiomas; solo cambia el texto.
const site = require("./site");

// Escapa texto para que se vea tal cual en el HTML.
const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const imgSrc = (im) => `/img/${im.id}.${im.ext}`;
const image = (im, cls = "", extra = "") =>
  `<img src="${imgSrc(im)}" alt="${esc(im.alt)}"${cls ? ` class="${cls}"` : ""} loading="lazy" decoding="async"${extra}>`;

// Rutas de cada página. Inglés en la raíz, español bajo /es (igual que en Wix).
const PAGES = {
  home: "",
  about: "about-us",
  programs: "programs",
  curriculum: "curriculum",
  gallery: "gallery",
  admissions: "admissions",
  enrollment: "enrollment",
  contact: "contact",
};
const prefix = (lang) => (lang === "es" ? "/es" : "");
const href = (lang, key) => {
  const p = PAGES[key] !== undefined ? PAGES[key] : key;
  return p ? `${prefix(lang)}/${p}` : prefix(lang) || "/";
};
const portfolioHref = (lang, slug) => `${prefix(lang)}/portfolio-collections/my-portfolio/${slug}`;
// Los enlaces del menú en Wix son direcciones completas; aquí usamos rutas relativas al dominio.

// Ícono de flecha (chevron) que Wix usa en el menú de idioma y en los botones "Learn more >".
const chev = (dir = "down") => {
  const d = { down: "M1 1l6 6 6-6", right: "M1 1l6 6-6 6", left: "M7 1L1 7l6 6", up: "M1 7l6-6 6 6" }[dir];
  const vb = dir === "down" || dir === "up" ? "0 0 14 8" : "0 0 8 14";
  return `<svg class="chev-${dir}" viewBox="${vb}" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>`;
};

// Íconos de la barra fija de abajo en el teléfono (igual que la barra de acciones de Wix).
const ICONS = {
  phone: '<path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z"/>',
  email: '<path d="M2 5h20v14H2V5Zm2 2v.5l8 5 8-5V7H4Z"/>',
  instagram: '<path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3.6c2.7 0 3 0 4.1.1 2.7.1 4 1.4 4.1 4.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.7-1.4 4-4.1 4.1-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-4-1.4-4.1-4.1C3.7 15 3.6 14.7 3.6 12s0-3 .1-4.1c.1-2.7 1.4-4 4.1-4.1C9 3.6 9.3 3.6 12 3.6ZM12 2C9.3 2 8.9 2 7.9 2.1 4.2 2.2 2.2 4.2 2.1 7.9 2 8.9 2 9.3 2 12s0 3.1.1 4.1c.1 3.7 2.1 5.7 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.7-.1 5.7-2.1 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-3.7-2.1-5.7-5.8-5.8C15.1 2 14.7 2 12 2Z"/>',
  facebook: '<path d="M21 3v18h-5.3v-6.9h2.3l.4-2.7h-2.7V9.7c0-.8.2-1.3 1.3-1.3h1.4V6c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2h-2.3v2.7h2.3V21H3V3h18Z"/>',
  calendar: '<path d="M7 2h2v2h6V2h2v2h4v18H3V4h4V2Zm12 7H5v11h14V9Zm-8 2.5h1.6V18h-1.5v-4.8l-1.2.7-.4-1.3 1.5-1.1Z"/>',
};
const icon = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>`;

function layout(c, { title, description, path, body, current }) {
  const u = c.ui;
  const pathNoLang = path; // ruta sin el prefijo de idioma, por ejemplo "/about-us"
  const enUrl = pathNoLang || "/";
  const esUrl = "/es" + (pathNoLang === "/" ? "" : pathNoLang);
  const navLink = (key, label) =>
    `<li><a href="${href(c.lang, key)}"${current === key ? ' aria-current="page"' : ""}>${esc(label)}</a></li>`;
  const sub = (label, items) => {
    const on = items.some(([k]) => k === current);
    return `<li class="has-sub${on ? " current" : ""}">
          <button type="button" class="sub-btn" aria-expanded="false">${esc(label)}</button>
          <ul class="sub">
            ${items.map(([k, l]) => navLink(k, l)).join("\n            ")}
          </ul>
        </li>`;
  };
  // Menú del teléfono: en Wix es una lista plana, sin submenús.
  const mobileItems = [
    ["home", u.nav.home], ["about", u.nav.about], ["curriculum", u.nav.curriculum], ["programs", u.nav.programs],
    ["gallery", u.nav.gallery], ["admissions", u.nav.gettingStarted], ["enrollment", u.nav.enrollment], ["contact", u.nav.contact],
  ];
  const startEnroll = site.ENROLLMENT_URL
    ? `<a class="btn-start" href="${esc(site.ENROLLMENT_URL)}">${esc(u.startEnrollment)}</a>`
    : `<!-- Botón "Start enrollment": se muestra cuando ENROLLMENT_URL tiene dirección en src/site.js -->`;

  return `<!DOCTYPE html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
${description ? `<meta name="description" content="${esc(description)}">` : "<!-- TODO: meta description (copiar de Wix > SEO) -->"}
<meta property="og:title" content="${esc(title)}">
<meta property="og:site_name" content="Learning Tree Family Child Care">
<meta property="og:url" content="${site.domain}${c.lang === "es" ? esUrl : enUrl}">
<link rel="canonical" href="${site.domain}${c.lang === "es" ? esUrl : enUrl}">
<link rel="alternate" hreflang="en" href="${site.domain}${enUrl}">
<link rel="alternate" hreflang="es" href="${site.domain}${esUrl}">
<link rel="alternate" hreflang="x-default" href="${site.domain}${enUrl}">
<link rel="icon" href="/img/a45c9f7ab14141b883ee04b0cd4ee1d6.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@300..500&family=Source+Sans+3:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/site.css">
<script>/* ancho sin la barra de desplazamiento, para que las medidas sean las de Wix */document.documentElement.style.setProperty("--sb",(window.innerWidth-document.documentElement.clientWidth)+"px")</script>
</head>
<body class="page-${current || "other"}">
<a class="skip" href="#main">${esc(u.skip)}</a>
<header class="site-header">
  <a class="logo" href="${href(c.lang, "home")}"><img src="/img/a45c9f7ab14141b883ee04b0cd4ee1d6.png" alt="${esc(u.logoAlt)}" width="105" height="105"></a>
  <div class="lang">
    <button class="lang-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="${esc(u.languageSelector)}">
      <span class="flag flag-${c.lang}" aria-hidden="true"></span>${chev("down")}
    </button>
    <ul class="lang-menu" role="menu">
      <li role="none"><a role="menuitem" href="${enUrl}" lang="en"${c.lang === "en" ? ' aria-current="true"' : ""}><span class="flag flag-en" aria-hidden="true"></span>${esc(u.languages.en)}</a></li>
      <li role="none"><a role="menuitem" href="${esUrl}" lang="es"${c.lang === "es" ? ' aria-current="true"' : ""}><span class="flag flag-es" aria-hidden="true"></span>${esc(u.languages.es)}</a></li>
    </ul>
  </div>
  <nav class="site-nav" aria-label="${c.lang === "es" ? "Sitio" : "Site"}">
    <ul>
      ${navLink("home", u.nav.home)}
      ${navLink("about", u.nav.about)}
      ${sub(u.nav.approach, [["programs", u.nav.programs], ["curriculum", u.nav.curriculum]])}
      ${navLink("gallery", u.nav.gallery)}
      ${sub(u.nav.admissions, [["admissions", u.nav.gettingStarted], ["enrollment", u.nav.enrollment]])}
      ${navLink("contact", u.nav.contact)}
    </ul>
  </nav>
  ${startEnroll}
  <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="${c.lang === "es" ? "Abrir menú" : "Open navigation menu"}"><span></span><span></span><span></span></button>
</header>
<div class="mobile-menu" id="mobile-menu" hidden>
  <button class="mobile-close" type="button" aria-label="${c.lang === "es" ? "Cerrar menú" : "Close navigation menu"}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="1.4"/></svg></button>
  <nav aria-label="${c.lang === "es" ? "Menú móvil" : "Menu Mobile"}">
    <ul>
      ${mobileItems.map(([k, l]) => `<li><a href="${href(c.lang, k)}"${current === k ? ' aria-current="page"' : ""}>${esc(l)}</a></li>`).join("\n      ")}
    </ul>
    ${site.ENROLLMENT_URL ? `<a class="mobile-start" href="${esc(site.ENROLLMENT_URL)}">${esc(u.startEnrollment)}</a>` : ""}
  </nav>
</div>
<main id="main">
${body}
</main>
${footer(c)}
<a class="float-tour" href="${site.bookTourUrl}">${esc(u.floatingBookTour)}</a>
${popup(c)}
<nav class="action-bar" aria-label="${c.lang === "es" ? "Acciones rápidas" : "Quick actions"}">
  <a href="tel:+12094992779" aria-label="Phone">${icon("phone")}</a>
  <a href="mailto:${site.email}?subject=Join%20The%20Learning%20Tree%20Family" aria-label="Email">${icon("email")}</a>
  <a href="${site.instagramUrl}/" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram")}</a>
  <a href="${site.facebookUrl}" target="_blank" rel="noopener" aria-label="Facebook">${icon("facebook")}</a>
  <a href="${site.bookTourUrl}" aria-label="${esc(u.floatingBookTour)}">${icon("calendar")}</a>
</nav>
<!-- LEO_AI_EMBED: pega aquí el código del embed kit de LeadPrime (Leo AI) de la cuenta de Janet. Ver src/partials/leo-ai.html -->
__LEO_AI_EMBED__
<script src="/js/site.js" defer></script>
</body>
</html>
`;
}

function footer(c) {
  const f = c.ui.footer;
  // En la versión en español de Wix el pie solo muestra el copyright; si es.js no trae
  // las otras líneas, no se muestran (igual que el original).
  return `<footer class="site-footer">
  <div class="footer-text">
    ${f.hours ? `<h5>${esc(f.hours)}</h5>` : ""}
    ${f.contactPrefix ? `<p>${esc(f.contactPrefix).replace(site.phone, `<a class="tel" href="tel:+12094992779">${site.phone}</a>`)} <a href="mailto:${site.email}">${site.email}</a></p>` : ""}
    <p class="copy">${esc(f.copyright)}</p>
    ${f.licensePrefix ? `<p class="copy">${esc(f.licensePrefix)} <a href="${prefix(c.lang)}/privacy-policy">${esc(f.privacy)}</a></p>` : ""}
  </div>
  <a class="footer-logo" href="${href(c.lang, "home")}"><img src="/img/a45c9f7ab14141b883ee04b0cd4ee1d6.png" alt="${esc(c.ui.logoAlt)}" width="105" height="105" loading="lazy"></a>
</footer>`;
}

// Ventana de bienvenida ($60). En Wix la pone la app Smartarget; aquí es propia, mismo texto.
function popup(c) {
  const p = c.ui.popup;
  return `<div class="welcome" id="welcome" hidden>
  <div class="welcome-box" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
    <button class="welcome-close" type="button" aria-label="${esc(p.close)}">&times;</button>
    <h2 id="welcome-title">${esc(p.title)}</h2>
    <p>${esc(p.text)}</p>
    <a class="btn-sq btn-dark" href="${site.bookTourUrl}">${esc(p.button)}</a>
  </div>
</div>
<button class="welcome-open" type="button" aria-label="${esc(p.open)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7h-2.2A3 3 0 0 0 12 3.8 3 3 0 0 0 6.2 7H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm-6-2a1 1 0 1 1 0 2h-1V6a1 1 0 0 1 1-1Zm-5 1a1 1 0 0 1 2 0v1h-1a1 1 0 0 1-1-1Zm2 14H7v-8h4v8Zm0-10H5V9h6v1Zm6 10h-4v-8h4v8Zm2-10h-6V9h6v1Z"/></svg></button>`;
}

// ---------- Páginas ----------
// Las medidas de cada sección están en public/css/site.css, tomadas del sitio de Wix a 1265 px de ancho.

function home(c) {
  const h = c.home;
  const body = `
<section class="h-hero">
  <div class="h-hero-text">
    <h1>${esc(h.h1)}</h1>
    <p class="tagline">${esc(h.tagline)}</p>
    <div class="body">${h.welcome ? `<p>${esc(h.welcome)}</p>` : ""}<p>${esc(h.intro)}</p></div>
    <a class="btn-fill" href="${href(c.lang, "contact")}">${esc(h.heroButton)}</a>
  </div>
  <div class="h-hero-img">${image(h.heroImg, "", ' loading="eager" fetchpriority="high"')}</div>
</section>

<section class="h-philo">
  <div class="h-philo-text">
    <h2>${esc(h.philosophyH2)}</h2>
    <p class="body">${esc(h.philosophy)}</p>
    <a class="btn-line" href="${href(c.lang, "about")}">${esc(h.philosophyButton)}</a>
  </div>
  <div class="h-philo-img">${image(h.philosophyImg)}</div>
</section>

<section class="h-band">
  <h2>${esc(h.programsH2)}</h2>
  <div class="h-cards">
    ${h.programs
      .map(
        (p) => `<div class="h-card${p.imgFirst ? "" : " text-first"}">
      ${p.imgFirst ? image(p.img) : ""}
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.text)}</p>
      ${p.imgFirst ? "" : image(p.img)}
    </div>`
      )
      .join("\n    ")}
  </div>
  <a class="btn-line" href="${href(c.lang, "programs")}">${esc(h.programsButton)}</a>

  <h2 class="h-ig-title">${esc(h.instagramH2)}</h2>
  <div class="h-ig">
    ${h.instagram.map((im) => `<a href="${site.instagramUrl}" target="_blank" rel="noopener">${image(im)}</a>`).join("\n    ")}
  </div>
  <a class="btn-follow" href="${site.instagramUrl}" target="_blank" rel="noopener">${esc(h.instagramButton)}</a>
</section>`;
  return layout(c, { title: h.title, description: h.description, path: "/", body, current: "home" });
}

function about(c) {
  const a = c.about;
  const body = `
<section class="a-hero">
  <h1>${esc(a.h1)}</h1>
  <p class="a-kicker">${esc(a.kicker)}</p>
  <div class="a-hero-text body"><p>${esc(a.p1)}</p><p>${esc(a.p2)}</p></div>
  <div class="a-hero-img">${image(a.img1, "", ' loading="eager"')}</div>
</section>

<section class="a-mission">
  <div class="a-mission-img">${image(a.img2)}</div>
  <div class="a-mission-text">
    <h2>${esc(a.missionH2)}</h2>
    <p class="a-mission-kicker">${esc(a.missionKicker)}</p>
    <p class="body">${esc(a.mission)}</p>
    <a class="btn-sq btn-outline-dark" href="${href(c.lang, "gallery")}">${esc(a.missionLink)} ${chev("right")}</a>
  </div>
</section>

<section class="a-band">
  <div class="a-team-head">
    <h2>${esc(a.teamH2)}</h2>
    <p class="a-team-kicker">${esc(a.teamKicker)}</p>
  </div>
  <p class="a-team-text body">${esc(a.team)}</p>
  <div class="a-members">
    ${a.members
      .map(
        (m) => `<figure class="a-member">${image(m.img)}<figcaption><p class="a-member-name">${esc(m.name)}</p><p class="a-member-role">${esc(m.role)}</p></figcaption></figure>`
      )
      .join("\n    ")}
  </div>
  <h3>${esc(a.growingH3)}</h3>
  <p class="a-growing body">${esc(a.growing)}</p>
  <a class="btn-sq btn-dark" href="${site.bookTourUrl}">${esc(a.growingButton)}</a>
  <div class="a-growing-img">${image(a.growingImg)}</div>
</section>`;
  return layout(c, { title: a.title, description: a.description, path: "/about-us", body, current: "about" });
}

function programs(c) {
  const p = c.programs;
  const body = `
<section class="p-top">
  <h1>${esc(p.h1)}</h1>
  <div class="p-imgs">${image(p.img1, "p-img1", ' loading="eager"')}${image(p.img2, "p-img2", ' loading="eager"')}</div>
</section>
<section class="p-mid">
  <p class="p-intro">${esc(p.intro)}</p>
  <h2>${esc(p.stageH2)}</h2>
</section>

<section class="p-stages">
  ${image(p.stageImg, "p-stage-bg")}
  <div class="p-cards">
    ${p.list
      .map(
        (s) => `<div class="p-card">
      <span class="p-n">${esc(s.n)}</span>
      <h3>${s.titleLines.map(esc).join("<br>")}</h3>
      <p class="p-ages">${esc(s.ages)}</p>
      <p class="p-text">${esc(s.text)}</p>
    </div>`
      )
      .join("\n    ")}
  </div>
  <a class="btn-sq btn-light" href="${href(c.lang, "contact")}">${esc(p.contactLink)} ${chev("up")}</a>
</section>

<section class="p-testi" aria-roledescription="carousel">
  <button type="button" class="slide-prev" aria-label="${esc(c.ui.previous)}">${chev("left")}</button>
  <div class="slides">
    ${p.testimonials
      .map(
        (t, i) => `<figure class="slide"${i === 0 ? "" : " hidden"} aria-label="${esc(p.slideLabel)} ${i + 1}">
      <span class="q-open" aria-hidden="true">&ldquo;</span>
      <blockquote>${esc(t.quote)}</blockquote>
      <span class="q-close" aria-hidden="true">&rdquo;</span>
      <figcaption>${esc(t.name)}</figcaption>
    </figure>`
      )
      .join("\n    ")}
  </div>
  <button type="button" class="slide-next" aria-label="${esc(c.ui.next)}">${chev("right")}</button>
  <div class="dots">${p.testimonials
    .map((_, i) => `<button type="button" class="dot" aria-label="${esc(p.slideLabel)} ${i + 1}"${i === 0 ? ' aria-current="true"' : ""}></button>`)
    .join("")}</div>
</section>`;
  return layout(c, { title: p.title, description: p.description, path: "/programs", body, current: "programs" });
}

function curriculum(c) {
  const k = c.curriculum;
  const body = `
<section class="k-intro">
  <h1>${esc(k.h1)}</h1>
  <p>${esc(k.intro)}</p>
</section>
<section class="k-grid">
  ${k.areas
    .map(
      (a, i) => `<div class="k-text${i % 2 ? " right" : ""}"><h2>${esc(a.title)}</h2><p>${esc(a.text)}</p></div>
  <div class="k-img${i % 2 ? " left" : ""}">${image(a.img)}</div>`
    )
    .join("\n  ")}
</section>`;
  return layout(c, { title: k.title, description: k.description, path: "/curriculum", body, current: "curriculum" });
}

function gallery(c) {
  const g = c.gallery;
  const body = `
<section class="g-intro">
  <h1>${esc(g.h1)}</h1>
  <p>${esc(g.intro)}</p>
</section>
<section class="g-tiles">
  ${c.portfolio
    .map((p) => `<a class="g-tile" href="${portfolioHref(c.lang, p.slug)}">${image(p.cover)}<span class="g-title">${esc(p.h1)}</span></a>`)
    .join("\n  ")}
</section>`;
  return layout(c, { title: g.title, description: g.description, path: "/gallery", body, current: "gallery" });
}

function portfolioPage(c, i) {
  const list = c.portfolio;
  const p = list[i];
  const prev = list[(i - 1 + list.length) % list.length];
  const next = list[(i + 1) % list.length];
  // En Wix la primera colección no tiene "Previous" y la última no tiene "Next" (pfLoop: false en en.js y es.js).
  const loop = c.ui.pfLoop !== false;
  const showPrev = loop || i > 0;
  const showNext = loop || i < list.length - 1;
  const item = (it) =>
    it.video
      ? `<div class="pf-item is-video"><video controls preload="none" playsinline poster="/img/${it.video}f000.jpg"><source src="/media/${it.video}.mp4" type="video/mp4"></video></div>`
      : `<div class="pf-item">${image(it)}</div>`;
  const body = `
<section class="pf">
  <div class="pf-head">
    <h1>${esc(p.h1)}</h1>
    <p>${esc(p.text)}</p>
  </div>
  <div class="pf-cover">${image(p.cover, "", ' loading="eager"')}</div>
  <div class="pf-grid">
    ${p.items.map(item).join("\n    ")}
  </div>
  <div class="pf-nav">
    ${showPrev ? `<a class="pf-prev" href="${portfolioHref(c.lang, prev.slug)}">${chev("left")} ${esc(c.ui.pfPrevious || c.ui.previous)}</a>` : "<span></span>"}
    ${showNext ? `<a class="pf-next" href="${portfolioHref(c.lang, next.slug)}">${esc(c.ui.pfNext || c.ui.next)} ${chev("right")}</a>` : "<span></span>"}
  </div>
</section>`;
  return layout(c, { title: p.title, description: p.description || "", path: `/portfolio-collections/my-portfolio/${p.slug}`, body, current: "gallery" });
}

function admissions(c) {
  const a = c.admissions;
  const body = `
<section class="ad-main">
  <div class="ad-left">
    <h1>${esc(a.h1)}</h1>
    <p class="body">${esc(a.intro)}</p>
    <div class="ad-img">${image(a.img, "", ' loading="eager"')}</div>
  </div>
  <ol class="ad-steps">
    ${a.steps
      .map((s) => `<li><h3><span>${esc(s.n)}</span><span class="bar" aria-hidden="true"></span><span>${esc(s.title)}</span></h3><p class="body">${esc(s.text)}</p></li>`)
      .join("\n    ")}
  </ol>
</section>
<section class="ad-touch">
  ${image(a.touchImg, "ad-touch-bg")}
  <div class="ad-touch-box">
    <h2>${esc(a.touchH2)}</h2>
    <a class="btn-sq btn-dark" href="${site.bookTourUrl}">${esc(a.touchButton)}</a>
  </div>
</section>`;
  return layout(c, { title: a.title, description: a.description, path: "/admissions", body, current: "admissions" });
}

// Ventana de vacunas (botón "(Click for more information)"), con dos pestañas como en Wix.
function vaccinesModal(v) {
  if (!v) return "";
  const tabs = v.tabs
    .map((t, i) => `<button type="button" role="tab" class="tab" id="vx-tab-${i}" aria-controls="vx-panel-${i}" aria-selected="${i === 0}">${esc(t.label)}</button>`)
    .join("");
  const panels = v.tabs
    .map((t, i) => {
      const inner = t.rows
        ? `${t.intro ? `<p class="vx-intro">${esc(t.intro)}</p>` : ""}<ul>${t.rows
            .map(([n, d]) => `<li>${esc(n)}${Array.from({ length: d }, (_, k) => ` &#9744; #${k + 1}`).join("")}</li>`)
            .join("")}</ul>`
        : `<ul>${t.list.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
      return `<div role="tabpanel" class="tab-panel" id="vx-panel-${i}" aria-labelledby="vx-tab-${i}"${i === 0 ? "" : " hidden"}>${inner}</div>`;
    })
    .join("\n    ");
  return `<div class="modal" id="vaccines" hidden>
  <div class="modal-box" role="dialog" aria-modal="true" aria-label="${esc(v.tabs[0].label)}">
    <button type="button" class="modal-x" aria-label="${esc(v.close)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" stroke-width="1.6"/></svg></button>
    <div class="tabs" role="tablist">${tabs}</div>
    ${panels}
    <button type="button" class="modal-close">${esc(v.close)}</button>
  </div>
</div>`;
}

function enrollment(c) {
  const e = c.enrollment;
  const self = href(c.lang, "enrollment");
  const col = (s) => `<div class="en-step">
      <h3>${s.link ? `<a href="${self}#anchor-1">${esc(s.title)}</a>` : esc(s.title)}</h3>
      ${s.text.map((t) => `<p>${esc(t)}</p>`).join("")}
    </div>`;
  const st = e.steps;
  const body = `
<section class="en-hero">
  <div class="en-hero-img">${image(e.img, "", ' loading="eager"')}</div>
  <div class="en-hero-box">
    <h1>${esc(e.h1)}</h1>
    <p>${e.introLines.map(esc).join("<br>")}</p>
    <a class="btn-sq btn-dark" href="${self}#anchor-1">${esc(e.clickHere)}</a>
  </div>
</section>
<section class="en-how">
  <h2>${esc(e.howH2)}</h2>
  <div class="en-steps">
    <div class="en-col">${col(st[0])}${st[3] ? col(st[3]) : ""}</div>
    <div class="en-col">${col(st[1])}</div>
    <div class="en-col">${col(st[2])}</div>
  </div>
</section>
<section class="en-need">
  <h2>${esc(e.needH2)}</h2>
  <p>${esc(e.needIntro)}</p>
  <ul>
    ${e.needList.map((x) => `<li>${esc(x)}</li>`).join("\n    ")}
    <li>${esc(e.immunizations)} <button type="button" class="link-btn"${e.vaccines ? ' data-open="vaccines" aria-haspopup="dialog"' : ""}>${esc(e.immunizationsButton)}</button></li>
  </ul>
</section>
${vaccinesModal(e.vaccines)}
<section class="en-start" id="anchor-1">
  <h2>${esc(e.startH2)}</h2>
  <p>${e.startLines.map(esc).join("<br>")}<br>${esc(e.startNote)}</p>
  <a class="btn-sq btn-dark btn-wide" href="${esc(e.brightwheelUrl || site.brightwheelUrl)}">${esc(e.brightwheelButton)}</a>
</section>`;
  return layout(c, { title: e.title, description: e.description, path: "/enrollment", body, current: "enrollment" });
}

function contact(c) {
  const k = c.contact;
  const f = k.fields;
  const req = ' <span class="req" aria-hidden="true">*</span>';
  const body = `
<section class="ct-main">
  <div class="ct-left">
    <h1>${esc(k.h1)}</h1>
    <p class="ct-kicker">${esc(k.kicker)}</p>
    <p class="ct-intro">${esc(k.intro)}</p>
    <form class="contact-form" method="post" action="/api/contact" data-lang="${c.lang}" novalidate aria-label="${esc(k.formTitle)}">
      <div class="row2">
        <label><span class="lbl">${esc(f.firstName)}${req}</span><input name="first_name" type="text" autocomplete="given-name" required maxlength="100"></label>
        <label><span class="lbl">${esc(f.lastName)}</span><input name="last_name" type="text" autocomplete="family-name" maxlength="100"></label>
      </div>
      <label><span class="lbl">${esc(f.email)}${req}</span><input name="email" type="email" autocomplete="email" required maxlength="200"></label>
      <label><span class="lbl">${esc(f.phone)}${req}</span>
        <span class="phone"><select name="phone_country" aria-label="Country code"><option value="+1" selected label="🇺🇸">🇺🇸 United States (+1)</option><option value="+52" label="🇲🇽">🇲🇽 México (+52)</option></select><input name="phone" type="tel" autocomplete="tel-national" required maxlength="30"></span>
      </label>
      <label><span class="lbl">${esc(f.childAge)}${req}</span>
        <select name="child_age" required>
          <option value="" selected disabled></option>
          ${f.childAgeOptions.map((o) => `<option>${esc(o)}</option>`).join("")}
        </select>
        <span class="field-error" hidden>${esc(f.chooseOption)}</span>
      </label>
      <label><span class="lbl">${esc(f.startDate)}</span><input name="desired_start_date" type="text" class="date-input" placeholder="${esc(f.startDatePlaceholder)}" aria-description="${esc(f.startDatePlaceholder)}"></label>
      <label><span class="lbl">${esc(f.heard)}</span>
        <select name="how_did_you_hear">
          <option value="" selected></option>
          ${f.heardOptions.map((o) => `<option>${esc(o)}</option>`).join("")}
        </select>
      </label>
      <label><span class="lbl">${esc(f.message)}</span><textarea name="message" rows="3" maxlength="3000"></textarea></label>
      <input type="hidden" name="lang" value="${c.lang}">
      <label class="hp" aria-hidden="true">Website<input name="website" type="text" tabindex="-1" autocomplete="off"></label>
      <button class="ct-submit" type="submit">${esc(f.submit)}</button>
      <p class="form-status" role="status" hidden></p>
    </form>
  </div>
  <aside class="ct-side">
    ${k.hours.map((h) => `<h2>${esc(h.title)}</h2><p><strong>${esc(h.lines[0])}</strong>${h.lines.slice(1).map((l) => `<br>${esc(l)}`).join("")}</p>`).join("\n    ")}
    ${image(k.img)}
  </aside>
</section>
<section class="ct-band">
  <h2>${esc(k.tourH3)}</h2>
  <a class="btn-sq btn-dark" href="${site.bookTourUrl}">${esc(k.tourButton)}</a>
</section>
<section class="ct-map">
  <iframe title="Google Maps: Learning Tree Child Care, 2854 Delia Ct, Turlock, CA 95382" src="${site.mapEmbedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
</section>`;
  return layout(c, { title: k.title, description: k.description, path: "/contact", body, current: "contact" });
}

function thanks(c) {
  const t = c.thanks;
  const body = `<section class="simple"><h1>${esc(t.h1)}</h1><p>${esc(t.text)}</p><a class="btn-fill" href="${href(c.lang, "home")}">${esc(t.back)}</a></section>`;
  return layout(c, { title: t.title, description: "", path: "/thanks", body, current: "" }).replace("<head>", '<head>\n<meta name="robots" content="noindex">');
}

function notFound(c) {
  const t = c.notFound;
  const body = `<section class="simple"><h1>${esc(t.h1)}</h1><p>${esc(t.text)}</p><a class="btn-fill" href="${href(c.lang, "home")}">${esc(t.back)}</a></section>`;
  return layout(c, { title: t.title, description: "", path: "/404", body, current: "" }).replace("<head>", '<head>\n<meta name="robots" content="noindex">');
}

module.exports = { home, about, programs, curriculum, gallery, portfolioPage, admissions, enrollment, contact, thanks, notFound };
