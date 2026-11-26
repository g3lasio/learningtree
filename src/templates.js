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

function layout(c, { title, description, path, body, current }) {
  const u = c.ui;
  const otherLang = c.lang === "en" ? "es" : "en";
  const pathNoLang = path; // ruta sin el prefijo de idioma, por ejemplo "/about-us"
  const enUrl = pathNoLang || "/";
  const esUrl = "/es" + (pathNoLang === "/" ? "" : pathNoLang);
  const navLink = (key, label) =>
    `<li><a href="${href(c.lang, key)}"${current === key ? ' aria-current="page"' : ""}>${esc(label)}</a></li>`;
  const startEnroll = site.ENROLLMENT_URL
    ? `<a class="btn btn-start" href="${esc(site.ENROLLMENT_URL)}">${esc(u.startEnrollment)}</a>`
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
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400&family=Source+Sans+3:wght@300;400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/site.css">
</head>
<body>
<a class="skip" href="#main">${esc(u.skip)}</a>
<header class="site-header">
  <div class="header-inner">
    <div class="brand-row">
      <a class="logo" href="${href(c.lang, "home")}"><img src="/img/a45c9f7ab14141b883ee04b0cd4ee1d6.png" alt="${esc(u.logoAlt)}" width="105" height="115"></a>
      <div class="lang">
        <button class="lang-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="${esc(u.languageSelector)}">
          <span class="flag flag-${c.lang}" aria-hidden="true"></span><span class="chev" aria-hidden="true"></span>
        </button>
        <ul class="lang-menu" role="menu">
          <li role="none"><a role="menuitem" href="${enUrl}" lang="en"${c.lang === "en" ? ' aria-current="true"' : ""}><span class="flag flag-en" aria-hidden="true"></span>${esc(u.languages.en)}</a></li>
          <li role="none"><a role="menuitem" href="${esUrl}" lang="es"${c.lang === "es" ? ' aria-current="true"' : ""}><span class="flag flag-es" aria-hidden="true"></span>${esc(u.languages.es)}</a></li>
        </ul>
      </div>
    </div>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr">Menu</span></button>
    <nav id="site-nav" class="site-nav" aria-label="${c.lang === "es" ? "Sitio" : "Site"}">
      <ul>
        ${navLink("home", u.nav.home)}
        ${navLink("about", u.nav.about)}
        <li class="has-sub">
          <button type="button" class="sub-btn" aria-expanded="false">${esc(u.nav.approach)}</button>
          <ul class="sub">
            ${navLink("programs", u.nav.programs)}
            ${navLink("curriculum", u.nav.curriculum)}
          </ul>
        </li>
        ${navLink("gallery", u.nav.gallery)}
        <li class="has-sub">
          <button type="button" class="sub-btn" aria-expanded="false">${esc(u.nav.admissions)}</button>
          <ul class="sub">
            ${navLink("admissions", u.nav.gettingStarted)}
            ${navLink("enrollment", u.nav.enrollment)}
          </ul>
        </li>
        ${navLink("contact", u.nav.contact)}
      </ul>
      ${startEnroll}
    </nav>
  </div>
</header>
<main id="main">
${body}
</main>
<a class="float-tour" href="${site.bookTourUrl}">${esc(u.floatingBookTour)}</a>
${footer(c)}
${popup(c)}
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
  <div class="footer-inner">
    <div class="footer-text">
      ${f.hours ? `<h5>${esc(f.hours)}</h5>` : ""}
      ${f.contactPrefix ? `<p>${esc(f.contactPrefix)} <a href="mailto:${site.email}">${site.email}</a></p>` : ""}
      <p>${esc(f.copyright)}</p>
      ${f.licensePrefix ? `<p>${esc(f.licensePrefix)} <a href="${prefix(c.lang)}/privacy-policy">${esc(f.privacy)}</a></p>` : ""}
    </div>
    <a class="footer-logo" href="${href(c.lang, "home")}"><img src="/img/a45c9f7ab14141b883ee04b0cd4ee1d6.png" alt="${esc(c.ui.logoAlt)}" width="122" height="114" loading="lazy"></a>
  </div>
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
    <a class="btn" href="${site.bookTourUrl}">${esc(p.button)}</a>
  </div>
</div>
<button class="welcome-open" type="button" aria-label="${esc(p.open)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7h-2.2A3 3 0 0 0 12 3.8 3 3 0 0 0 6.2 7H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm-6-2a1 1 0 1 1 0 2h-1V6a1 1 0 0 1 1-1Zm-5 1a1 1 0 0 1 2 0v1h-1a1 1 0 0 1-1-1Zm2 14H7v-8h4v8Zm0-10H5V9h6v1Zm6 10h-4v-8h4v8Zm2-10h-6V9h6v1Z"/></svg></button>`;
}

// ---------- Páginas ----------

function home(c) {
  const h = c.home;
  const body = `
<section class="hero wrap">
  <div class="hero-text">
    <h1>${esc(h.h1)}</h1>
    <p class="tagline">${esc(h.tagline)}</p>
    <p class="body">${h.welcome ? esc(h.welcome) + "<br>" : ""}${esc(h.intro)}</p>
    <a class="btn" href="${href(c.lang, "contact")}">${esc(h.heroButton)}</a>
  </div>
  <div class="hero-img">${image(h.heroImg, "", ' loading="eager" fetchpriority="high"')}</div>
</section>

<section class="split wrap">
  <div class="split-text">
    <h2>${esc(h.philosophyH2)}</h2>
    <p class="body">${esc(h.philosophy)}</p>
    <a class="btn" href="${href(c.lang, "about")}">${esc(h.philosophyButton)}</a>
  </div>
  <div class="split-img">${image(h.philosophyImg)}</div>
</section>

<section class="band">
  <div class="wrap center">
    <h2>${esc(h.programsH2)}</h2>
    <div class="program-cards">
      ${h.programs
        .map(
          (p) => `<div class="program-card${p.imgFirst ? "" : " text-first"}">
        ${p.imgFirst ? image(p.img) : ""}
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.text)}</p>
        ${p.imgFirst ? "" : image(p.img)}
      </div>`
        )
        .join("\n      ")}
    </div>
    <a class="btn" href="${href(c.lang, "programs")}">${esc(h.programsButton)}</a>
  </div>
</section>

<section class="band instagram">
  <div class="wrap center">
    <h2>${esc(h.instagramH2)}</h2>
    <div class="ig-grid">
      ${h.instagram.map((im) => `<a href="${site.instagramUrl}" target="_blank" rel="noopener">${image(im)}</a>`).join("\n      ")}
    </div>
    <a class="btn btn-outline" href="${site.instagramUrl}" target="_blank" rel="noopener">${esc(h.instagramButton)}</a>
  </div>
</section>`;
  return layout(c, { title: h.title, description: h.description, path: "/", body, current: "home" });
}

function about(c) {
  const a = c.about;
  const body = `
<section class="hero wrap">
  <div class="hero-text">
    <h1>${esc(a.h1)}</h1>
    <p class="tagline">${esc(a.kicker)}</p>
    <p class="body">${esc(a.p1)}</p>
    <p class="body">${esc(a.p2)}</p>
  </div>
  <div class="about-imgs">${image(a.img1, "", ' loading="eager"')}${image(a.img2, "", ' loading="eager"')}</div>
</section>

<section class="band">
  <div class="wrap narrow center">
    <h2>${esc(a.missionH2)}</h2>
    <p class="tagline">${esc(a.missionKicker)}</p>
    <p class="body">${esc(a.mission)}</p>
    <a class="text-link" href="${href(c.lang, "gallery")}">${esc(a.missionLink)}</a>
  </div>
</section>

<section class="wrap team">
  <div class="team-text">
    <h2>${esc(a.teamH2)}</h2>
    <p class="tagline">${esc(a.teamKicker)}</p>
    <p class="body">${esc(a.team)}</p>
  </div>
  <div class="team-members">
    ${a.members
      .map(
        (m) => `<figure class="member">${image(m.img)}<figcaption><p class="member-name">${esc(m.name)}</p><p class="member-role">${esc(m.role)}</p></figcaption></figure>`
      )
      .join("\n    ")}
  </div>
</section>

<section class="band">
  <div class="wrap split">
    <div class="split-text">
      <h3 class="h2like">${esc(a.growingH3)}</h3>
      <p class="body">${esc(a.growing)}</p>
      <a class="btn" href="${site.bookTourUrl}">${esc(a.growingButton)}</a>
    </div>
    <div class="split-img">${image(a.growingImg)}</div>
  </div>
</section>`;
  return layout(c, { title: a.title, description: a.description, path: "/about-us", body, current: "about" });
}

function programs(c) {
  const p = c.programs;
  const body = `
<section class="wrap programs-top">
  <h1 class="caps">${esc(p.h1)}</h1>
  <div class="programs-imgs">${image(p.img1, "", ' loading="eager"')}${image(p.img2, "", ' loading="eager"')}</div>
  <p class="body narrow">${esc(p.intro)}</p>
</section>

<section class="band">
  <div class="wrap">
    <h2 class="center">${esc(p.stageH2)}</h2>
    <div class="stage-img">${image(p.stageImg)}</div>
    <div class="stage-list">
      ${p.list
        .map(
          (s) => `<div class="stage">
        <span class="stage-n">${esc(s.n)}</span>
        <div>
          ${s.titleLines.map((t) => `<h3>${esc(t)}</h3>`).join("")}
          <h4>${esc(s.ages)}</h4>
          <p class="body">${esc(s.text)}</p>
        </div>
      </div>`
        )
        .join("\n      ")}
    </div>
    <p class="center"><a class="text-link" href="${href(c.lang, "contact")}">${esc(p.contactLink)}</a></p>
  </div>
</section>

<section class="wrap testimonials" aria-roledescription="carousel">
  <div class="quote-mark" aria-hidden="true">&ldquo;</div>
  <div class="slides">
    ${p.testimonials
      .map(
        (t, i) => `<figure class="slide"${i === 0 ? "" : " hidden"} aria-label="${esc(p.slideLabel)} ${i + 1}">
      <blockquote class="body">${esc(t.quote)}</blockquote>
      <figcaption>${esc(t.name)}</figcaption>
    </figure>`
      )
      .join("\n    ")}
  </div>
  <div class="slide-nav">
    <button type="button" class="slide-prev" aria-label="${esc(c.ui.previous)}">&#8249;</button>
    <div class="dots">${p.testimonials
      .map((_, i) => `<button type="button" class="dot" aria-label="${esc(p.slideLabel)}${i + 1}"${i === 0 ? ' aria-current="true"' : ""}></button>`)
      .join("")}</div>
    <button type="button" class="slide-next" aria-label="${esc(c.ui.next)}">&#8250;</button>
  </div>
</section>`;
  return layout(c, { title: p.title, description: p.description, path: "/programs", body, current: "programs" });
}

function curriculum(c) {
  const k = c.curriculum;
  const body = `
<section class="wrap narrow center page-intro">
  <h1>${esc(k.h1)}</h1>
  <p class="body">${esc(k.intro)}</p>
</section>
<section class="wrap areas">
  ${k.areas
    .map(
      (a, i) => `<div class="area${i % 2 ? " reverse" : ""}">
    <div class="area-text"><h2>${esc(a.title)}</h2><p class="body">${esc(a.text)}</p></div>
    <div class="area-img">${image(a.img)}</div>
  </div>`
    )
    .join("\n  ")}
</section>`;
  return layout(c, { title: k.title, description: k.description, path: "/curriculum", body, current: "curriculum" });
}

function gallery(c) {
  const g = c.gallery;
  const body = `
<section class="wrap narrow center page-intro">
  <h1>${esc(g.h1)}</h1>
  <p class="body">${esc(g.intro)}</p>
</section>
<section class="wrap tiles">
  ${c.portfolio
    .map(
      (p) => `<a class="tile" href="${portfolioHref(c.lang, p.slug)}">${image(p.cover)}<span class="tile-title">${esc(p.h1)}</span></a>`
    )
    .join("\n  ")}
</section>`;
  return layout(c, { title: g.title, description: g.description, path: "/gallery", body, current: "gallery" });
}

function portfolioPage(c, i) {
  const list = c.portfolio;
  const p = list[i];
  const prev = list[(i - 1 + list.length) % list.length];
  const next = list[(i + 1) % list.length];
  // En inglés los botones dan la vuelta (de la última colección se regresa a la primera).
  // En español Wix no da la vuelta: la primera no tiene "Previous" y la última no tiene "Next".
  const loop = c.ui.pfLoop !== false;
  const showPrev = loop || i > 0;
  const showNext = loop || i < list.length - 1;
  const item = (it) =>
    it.video
      ? `<div class="pf-item"><video controls preload="none" playsinline poster="/img/${it.video}f000.jpg"><source src="/media/${it.video}.mp4" type="video/mp4"></video></div>`
      : `<div class="pf-item">${image(it)}</div>`;
  const body = `
<section class="wrap portfolio">
  <div class="pf-cover">${image(p.cover, "", ' loading="eager"')}</div>
  <div class="pf-head">
    <h1>${esc(p.h1)}</h1>
    <p class="body">${esc(p.text)}</p>
  </div>
  <div class="pf-grid">
    ${p.items.map(item).join("\n    ")}
  </div>
  <div class="pf-nav">
    ${showPrev ? `<a class="btn btn-outline" href="${portfolioHref(c.lang, prev.slug)}">&#8249; ${esc(c.ui.pfPrevious || c.ui.previous)}</a>` : "<span></span>"}
    ${showNext ? `<a class="btn btn-outline" href="${portfolioHref(c.lang, next.slug)}">${esc(c.ui.pfNext || c.ui.next)} &#8250;</a>` : "<span></span>"}
  </div>
</section>`;
  return layout(c, { title: p.title, description: p.description || "", path: `/portfolio-collections/my-portfolio/${p.slug}`, body, current: "gallery" });
}

function admissions(c) {
  const a = c.admissions;
  const body = `
<section class="hero wrap">
  <div class="hero-text">
    <h1>${esc(a.h1)}</h1>
    <p class="body">${esc(a.intro)}</p>
  </div>
  <div class="hero-img square">${image(a.img, "", ' loading="eager"')}</div>
</section>
<section class="band">
  <div class="wrap steps">
    ${a.steps
      .map((s) => `<div class="step"><span class="stage-n">${esc(s.n)}</span><h3>${esc(s.title)}</h3><p class="body">${esc(s.text)}</p></div>`)
      .join("\n    ")}
  </div>
</section>
<section class="wrap split touch">
  <div class="split-img">${image(a.touchImg)}</div>
  <div class="split-text">
    <h2>${esc(a.touchH2)}</h2>
    <a class="btn" href="${site.bookTourUrl}">${esc(a.touchButton)}</a>
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
        ? `${t.intro ? `<p>${esc(t.intro)}</p>` : ""}<table><tbody>${t.rows.map(([n, d]) => `<tr><td>${esc(n)}</td><td>${esc(String(d))}</td></tr>`).join("")}</tbody></table>`
        : `<ul>${t.list.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
      return `<div role="tabpanel" class="tab-panel" id="vx-panel-${i}" aria-labelledby="vx-tab-${i}"${i === 0 ? "" : " hidden"}>${inner}</div>`;
    })
    .join("\n    ");
  return `<div class="modal" id="vaccines" hidden>
  <div class="modal-box" role="dialog" aria-modal="true" aria-label="${esc(v.tabs[0].label)}">
    <div class="tabs" role="tablist">${tabs}</div>
    ${panels}
    <button type="button" class="btn modal-close">${esc(v.close)}</button>
  </div>
</div>`;
}

function enrollment(c) {
  const e = c.enrollment;
  const self = href(c.lang, "enrollment");
  const body = `
<section class="hero wrap">
  <div class="hero-img tall">${image(e.img, "", ' loading="eager"')}</div>
  <div class="hero-text">
    <h1>${esc(e.h1)}</h1>
    <p class="body">${e.introLines.map(esc).join("<br>")}</p>
    <a class="btn" href="${self}">${esc(e.clickHere)}</a>
  </div>
</section>
<section class="band">
  <div class="wrap">
    <h2 class="center caps">${esc(e.howH2)}</h2>
    <div class="enroll-steps">
      ${e.steps
        .map(
          (s) => `<div class="step">
        <h3>${s.link ? `<a href="${self}#anchor-1">${esc(s.title)}</a>` : esc(s.title)}</h3>
        ${s.text.map((t) => `<p class="body">${esc(t)}</p>`).join("")}
      </div>`
        )
        .join("\n      ")}
    </div>
  </div>
</section>
<section class="wrap narrow need">
  <h2>${esc(e.needH2)}</h2>
  <p class="body">${esc(e.needIntro)}</p>
  <ul class="body">
    ${e.needList.map((x) => `<li>${esc(x)}</li>`).join("\n    ")}
    <li>${esc(e.immunizations)} <button type="button" class="link-btn"${e.vaccines ? ' data-open="vaccines" aria-haspopup="dialog"' : ' data-todo="immunizations-info"'}>${esc(e.immunizationsButton)}</button></li>
  </ul>
  ${e.vaccines ? "" : "<!-- TODO: en inglés no se pudo ver la ventana de vacunas. En español sí (ver src/content/es.js > enrollment.vaccines). Copiar el texto en inglés. -->"}
</section>
${vaccinesModal(e.vaccines)}
<section class="band" id="anchor-1" aria-label="Enroll">
  <div class="wrap narrow center">
    <h2>${esc(e.startH2)}</h2>
    <p class="body">${e.startLines.map(esc).join("<br>")}</p>
    <p class="body">${esc(e.startNote)}</p>
    <a class="btn" href="${esc(e.brightwheelUrl || site.brightwheelUrl)}">${esc(e.brightwheelButton)}</a>
  </div>
</section>`;
  return layout(c, { title: e.title, description: e.description, path: "/enrollment", body, current: "enrollment" });
}

function contact(c) {
  const k = c.contact;
  const f = k.fields;
  const req = ' <span class="req" aria-hidden="true">*</span>';
  const body = `
<section class="wrap page-intro">
  <h1>${esc(k.h1)}</h1>
  <p class="tagline">${esc(k.kicker)}</p>
  <p class="body">${esc(k.intro)}</p>
</section>
<section class="wrap contact-grid">
  <form class="contact-form" method="post" action="/api/contact" data-lang="${c.lang}" novalidate>
    <h2 class="form-title">${esc(k.formTitle)}</h2>
    <div class="row2">
      <label>${esc(f.firstName)}${req}<input name="first_name" type="text" autocomplete="given-name" required maxlength="100"></label>
      <label>${esc(f.lastName)}<input name="last_name" type="text" autocomplete="family-name" maxlength="100"></label>
    </div>
    <label>${esc(f.email)}${req}<input name="email" type="email" autocomplete="email" required maxlength="200"></label>
    <label>${esc(f.phone)}${req}
      <span class="phone"><select name="phone_country" aria-label="Country code"><option value="+1" selected>🇺🇸 +1</option><option value="+52">🇲🇽 +52</option></select><input name="phone" type="tel" autocomplete="tel-national" required maxlength="30"></span>
    </label>
    <label>${esc(f.childAge)}${req}
      <select name="child_age" required>
        <option value="" selected disabled></option>
        ${f.childAgeOptions.map((o) => `<option>${esc(o)}</option>`).join("")}
      </select>
      <span class="field-error" hidden>${esc(f.chooseOption)}</span>
    </label>
    <label>${esc(f.startDate)}<input name="desired_start_date" type="date" placeholder="${esc(f.startDatePlaceholder)}" aria-description="${esc(f.startDatePlaceholder)}"></label>
    <label>${esc(f.heard)}
      <select name="how_did_you_hear">
        <option value="" selected></option>
        ${f.heardOptions.map((o) => `<option>${esc(o)}</option>`).join("")}
      </select>
    </label>
    <label>${esc(f.message)}<textarea name="message" rows="4" maxlength="3000"></textarea></label>
    <input type="hidden" name="lang" value="${c.lang}">
    <label class="hp" aria-hidden="true">Website<input name="website" type="text" tabindex="-1" autocomplete="off"></label>
    <button class="btn" type="submit">${esc(f.submit)}</button>
    <p class="form-status" role="status" hidden></p>
  </form>
  <aside class="contact-side">
    ${k.hours.map((h) => `<h5>${esc(h.title)}</h5><p>${h.lines.map(esc).join("<br>")}</p>`).join("\n    ")}
    ${image(k.img)}
  </aside>
</section>
<section class="band">
  <div class="wrap center">
    <h3 class="h2like">${esc(k.tourH3)}</h3>
    <a class="btn" href="${site.bookTourUrl}">${esc(k.tourButton)}</a>
    <!-- En Wix aquí hay un iframe vacío (probablemente el calendario de Koalendar). No se copió porque no carga nada. Confirmar. -->
  </div>
</section>`;
  return layout(c, { title: k.title, description: k.description, path: "/contact", body, current: "contact" });
}

function thanks(c) {
  const t = c.thanks;
  const body = `<section class="wrap narrow center page-intro"><h1>${esc(t.h1)}</h1><p class="body">${esc(t.text)}</p><a class="btn" href="${href(c.lang, "home")}">${esc(t.back)}</a></section>`;
  return layout(c, { title: t.title, description: "", path: "/thanks", body, current: "" }).replace("<head>", '<head>\n<meta name="robots" content="noindex">');
}

function notFound(c) {
  const t = c.notFound;
  const body = `<section class="wrap narrow center page-intro"><h1>${esc(t.h1)}</h1><p class="body">${esc(t.text)}</p><a class="btn" href="${href(c.lang, "home")}">${esc(t.back)}</a></section>`;
  return layout(c, { title: t.title, description: "", path: "/404", body, current: "" }).replace("<head>", '<head>\n<meta name="robots" content="noindex">');
}

module.exports = { home, about, programs, curriculum, gallery, portfolioPage, admissions, enrollment, contact, thanks, notFound };
