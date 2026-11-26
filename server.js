// Servidor pequeño sin dependencias: sirve la carpeta /public y recibe el formulario de contacto.
// Railway le da el puerto en la variable PORT.
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");
// A dónde va el formulario de contacto: el mismo endpoint del widget de LeadPrime que usa Leo AI (dato de Chuch, 25 nov 2026).
// Recibe JSON, crea el lead solo y no repite si el teléfono ya existe.
const LEADPRIME_LEAD_URL = process.env.LEADPRIME_LEAD_URL || "https://leadprime.chyrris.com/api/widget/lead";
// El token del embed kit de Leo de la cuenta de Janet (el mismo que ya usa su sitio). Se pone en Railway > Variables.
const LEO_WIDGET_TOKEN = process.env.LEO_WIDGET_TOKEN || "";

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
};

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "SAMEORIGIN",
};

// Leo AI: las páginas traen el código del chat con __LEO_WIDGET_TOKEN__ en lugar del token.
// Aquí se pone el token real (variable LEO_WIDGET_TOKEN). Sin token, se quita el bloque entero.
function withLeo(html) {
  if (LEO_WIDGET_TOKEN) return html.split("__LEO_WIDGET_TOKEN__").join(LEO_WIDGET_TOKEN.replace(/[^A-Za-z0-9_-]/g, ""));
  return html.replace(/<!-- Leo AI[\s\S]*?<!-- \/Leo AI -->/, "");
}

function notFound(res, lang) {
  const file = path.join(PUBLIC_DIR, lang === "es" ? "es/404.html" : "404.html");
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8", ...SECURITY_HEADERS });
  fs.readFile(file, "utf8", (err, html) => res.end(err ? "Not found" : withLeo(html)));
}

function sendFile(res, filePath, lang) {
  fs.readFile(filePath, (err, data) => {
    if (err) return notFound(res, lang);
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": TYPES[ext] || "application/octet-stream",
      "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=86400",
      ...SECURITY_HEADERS,
    });
    res.end(ext === ".html" ? withLeo(data.toString("utf8")) : data);
  });
}

// Mientras una foto no esté descargada en public/img, se manda a buscar a la biblioteca de Wix.
// Así el sitio se ve completo desde el primer día. Corre "npm run images" para tenerlas todas aquí.
function wixFallback(pathname) {
  let m = pathname.match(/^\/img\/([0-9a-f]{32})\.(jpg|png)$/);
  if (m) return `https://static.wixstatic.com/media/877981_${m[1]}~mv2.${m[2]}`;
  m = pathname.match(/^\/img\/([0-9a-f]{32}f000)\.jpg$/);
  if (m) return `https://static.wixstatic.com/media/877981_${m[1]}.jpg`;
  m = pathname.match(/^\/media\/([0-9a-f]{32})\.mp4$/);
  if (m) return `https://video.wixstatic.com/video/877981_${m[1]}/480p/mp4/file.mp4`;
  return null;
}

const clean = (v, max) => String(v || "").trim().slice(0, max);

// Lo que se le manda a LeadPrime. Según Chuch, el lead tiene campo propio para nombre, correo, teléfono y mensaje;
// edad del niño, fecha de inicio y "cómo nos conoció" no tienen campo, así que van dentro del mensaje.
// TODO: comparar nombres de campos con el payload de ejemplo de Chuch (sección 4 de su archivo, que llegó cortado).
function toLeadPrime(lead) {
  const extra = [
    `Child's age: ${lead.child_age}`,
    lead.desired_start_date && `Desired start date: ${lead.desired_start_date}`,
    lead.how_did_you_hear && `How did you hear about us: ${lead.how_did_you_hear}`,
    `Language: ${lead.language === "es" ? "Spanish" : "English"}`,
    `Source: ${lead.source}`,
  ].filter(Boolean);
  return {
    token: LEO_WIDGET_TOKEN,
    name: [lead.first_name, lead.last_name].filter(Boolean).join(" "),
    email: lead.email,
    phone: lead.phone,
    message: [lead.message, extra.join("\n")].filter(Boolean).join("\n\n"),
  };
}

function handleContact(req, res) {
  let body = "";
  let tooBig = false;
  req.on("data", (chunk) => {
    body += chunk;
    if (body.length > 20000) {
      tooBig = true;
      req.destroy();
    }
  });
  req.on("end", async () => {
    if (tooBig) return;
    const isJson = (req.headers["content-type"] || "").includes("application/json");
    let form = {};
    try {
      form = isJson ? JSON.parse(body) : Object.fromEntries(new URLSearchParams(body));
    } catch {
      form = {};
    }
    const lang = form.lang === "es" ? "es" : "en";
    const done = (status, payload) => {
      if (isJson) {
        res.writeHead(status, { "Content-Type": "application/json", ...SECURITY_HEADERS });
        return res.end(JSON.stringify(payload));
      }
      res.writeHead(303, { Location: lang === "es" ? "/es/thanks" : "/thanks" });
      res.end();
    };

    // Campo trampa para bots: si viene lleno, se ignora sin avisar.
    if (form.website) return done(200, { ok: true });

    // Mismos campos y mismos obligatorios que el formulario de Wix.
    const lead = {
      first_name: clean(form.first_name, 100),
      last_name: clean(form.last_name, 100),
      email: clean(form.email, 200),
      phone: (clean(form.phone_country, 5) + " " + clean(form.phone, 30)).trim(),
      child_age: clean(form.child_age, 100),
      desired_start_date: clean(form.desired_start_date, 20),
      how_did_you_hear: clean(form.how_did_you_hear, 100),
      message: clean(form.message, 3000),
      language: lang,
      source: "edulearningtree.com contact form",
      submitted_at: new Date().toISOString(),
    };
    if (!lead.first_name || !/^\S+@\S+\.\S+$/.test(lead.email) || !clean(form.phone, 30) || !lead.child_age) {
      return done(400, { ok: false, error: "missing_required" });
    }

    console.log("Nuevo contacto:", JSON.stringify({ ...lead, email: "***", phone: "***" }));
    if (LEO_WIDGET_TOKEN) {
      try {
        const r = await fetch(LEADPRIME_LEAD_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(toLeadPrime(lead)),
          signal: AbortSignal.timeout(10000),
        });
        if (!r.ok) console.error("LeadPrime respondió", r.status);
      } catch (e) {
        console.error("No se pudo mandar el contacto a LeadPrime:", e.message);
      }
    } else {
      console.warn("LEO_WIDGET_TOKEN no está puesto: el contacto NO llegó a LeadPrime.");
    }
    done(200, { ok: true });
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    res.writeHead(400);
    return res.end();
  }
  const lang = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";

  if (pathname === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("ok");
  }
  if (pathname === "/api/contact") {
    if (req.method !== "POST") {
      res.writeHead(405, { Allow: "POST" });
      return res.end();
    }
    return handleContact(req, res);
  }
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405);
    return res.end();
  }

  // Quita la diagonal final: /about-us/ -> /about-us (como Wix).
  if (pathname.length > 1 && pathname.endsWith("/")) {
    res.writeHead(301, { Location: pathname.slice(0, -1) + url.search });
    return res.end();
  }
  // Los archivos .html no se piden con extensión: /about-us.html -> /about-us
  if (pathname.endsWith(".html")) {
    const target = pathname.replace(/(\/index)?\.html$/, "") || "/";
    res.writeHead(301, { Location: target + url.search });
    return res.end();
  }

  // Direcciones limpias: /about-us -> about-us.html, /es -> es/index.html
  let rel = pathname === "/" ? "/index.html" : pathname;
  if (!path.extname(rel)) {
    const asFile = rel + ".html";
    const asIndex = rel + "/index.html";
    rel = fs.existsSync(path.join(PUBLIC_DIR, asFile)) ? asFile : asIndex;
  }
  const filePath = path.normalize(path.join(PUBLIC_DIR, rel));
  if (!filePath.startsWith(PUBLIC_DIR + path.sep)) {
    res.writeHead(403);
    return res.end();
  }
  if (!fs.existsSync(filePath)) {
    const wix = wixFallback(pathname);
    if (wix) {
      res.writeHead(302, { Location: wix, "Cache-Control": "public, max-age=3600" });
      return res.end();
    }
  }
  sendFile(res, filePath, lang);
});

server.listen(PORT, () => console.log(`Learning Tree site en el puerto ${PORT}`));
