// Descarga las fotos y el video del sitio desde la biblioteca de Wix de Janet a public/img y public/media.
// Uso (en tu computadora, una sola vez): npm run images
// No borra nada; si una foto ya está descargada, la salta.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "media-manifest.json"), "utf8"));

async function get(source, dest) {
  if (fs.existsSync(dest)) return "ya estaba";
  const res = await fetch(source);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  return "descargada";
}

(async () => {
  const jobs = [
    ...manifest.images.map((i) => [i.source, path.join(root, "public", "img", i.file)]),
    ...manifest.videos.map((v) => [v.source, path.join(root, "public", "media", v.file)]),
    ...manifest.videos.map((v) => [v.poster.source, path.join(root, "public", "img", v.poster.file)]),
  ];
  let fallas = 0;
  for (const [source, dest] of jobs) {
    try {
      console.log(`${path.basename(dest)}: ${await get(source, dest)}`);
    } catch (e) {
      fallas++;
      console.log(`${path.basename(dest)}: FALLÓ (${e.message}) ${source}`);
    }
  }
  console.log(fallas ? `Terminado con ${fallas} fallas. Vuelve a correrlo.` : "Todas las fotos están en public/img y public/media.");
})();
