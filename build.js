// Genera las páginas HTML en /public a partir de src/content/*.js y src/templates.js.
// Uso: npm run build
const fs = require("fs");
const path = require("path");
const t = require("./src/templates");

const OUT = path.join(__dirname, "public");
const leoPath = path.join(__dirname, "src", "partials", "leo-ai.html");
const leoEmbed = fs.existsSync(leoPath) ? fs.readFileSync(leoPath, "utf8").trim() : "";

const languages = [require("./src/content/en")];
if (fs.existsSync(path.join(__dirname, "src", "content", "es.js"))) languages.push(require("./src/content/es"));

const images = new Map(); // id -> ext, para la lista de fotos a descargar
const videos = new Set();
let count = 0;

function write(rel, html) {
  html = html.replace("__LEO_AI_EMBED__", leoEmbed);
  for (const m of html.matchAll(/\/img\/([0-9a-f]{32})\.(jpg|png)/g)) images.set(m[1], m[2]);
  for (const m of html.matchAll(/\/media\/([0-9a-f]{32})\.mp4/g)) videos.add(m[1]);
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  count++;
}

for (const c of languages) {
  const base = c.lang === "en" ? "" : c.lang + "/";
  write(base + "index.html", t.home(c));
  write(base + "about-us.html", t.about(c));
  write(base + "programs.html", t.programs(c));
  write(base + "curriculum.html", t.curriculum(c));
  write(base + "gallery.html", t.gallery(c));
  write(base + "admissions.html", t.admissions(c));
  write(base + "enrollment.html", t.enrollment(c));
  write(base + "contact.html", t.contact(c));
  c.portfolio.forEach((p, i) => write(`${base}portfolio-collections/my-portfolio/${p.slug}.html`, t.portfolioPage(c, i)));
  write(base + "thanks.html", t.thanks(c));
  write(base + "privacy-policy.html", t.privacyPolicy(c));
  write(base + (c.lang === "en" ? "404.html" : "404.html"), t.notFound(c));
}

// Lista de fotos y videos que usa el sitio (para scripts/download-images.js).
const manifest = {
  note: "Fotos de la biblioteca de Wix de Janet. Se descargan con: npm run images",
  images: [...images].map(([id, ext]) => ({ file: `${id}.${ext}`, source: `https://static.wixstatic.com/media/877981_${id}~mv2.${ext}` })),
  videos: [...videos].map((id) => ({
    file: `${id}.mp4`,
    source: `https://video.wixstatic.com/video/877981_${id}/480p/mp4/file.mp4`,
    poster: { file: `${id}f000.jpg`, source: `https://static.wixstatic.com/media/877981_${id}f000.jpg` },
  })),
};
fs.writeFileSync(path.join(__dirname, "media-manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`Listo: ${count} páginas, ${images.size} fotos y ${videos.size} video en la lista.`);
