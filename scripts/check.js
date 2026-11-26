// Revisión rápida antes de subir cambios: npm run check
// Construye las páginas y avisa si falta alguna, si quedó texto "undefined" o si hay enlaces internos rotos.
// También cuenta los TODO que siguen pendientes.
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.join(__dirname, "..");
execFileSync(process.execPath, [path.join(root, "build.js")], { stdio: "inherit" });

const pub = path.join(root, "public");
const pages = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith(".html")) pages.push(p);
  }
})(pub);

const exists = (url) => {
  const clean = url.split("#")[0].split("?")[0];
  if (clean === "/" || clean === "") return fs.existsSync(path.join(pub, "index.html"));
  const rel = clean.replace(/^\//, "");
  return [rel, rel + ".html", path.join(rel, "index.html")].some((r) => fs.existsSync(path.join(pub, r)));
};

let problems = 0;
let todos = 0;
for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const name = path.relative(pub, file);
  if (/undefined/.test(html)) { problems++; console.log(`✗ ${name}: tiene "undefined"`); }
  todos += (html.match(/TODO/g) || []).length;
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    const url = m[1];
    if (url.startsWith("/css/") || url.startsWith("/img/") || url.startsWith("/js/")) continue;
    if (!exists(url)) { problems++; console.log(`✗ ${name}: enlace roto ${url}`); }
  }
}
console.log(`${pages.length} páginas revisadas, ${problems} problemas, ${todos} TODO pendientes.`);
process.exit(problems ? 1 : 0);
