# Sitio de Learning Tree Family Child Care

Copia exacta del sitio de Wix (www.edulearningtree.com), en inglés y en español, hecha como código propio.
No usa librerías: solo Node 20 o más nuevo.

## Cómo está organizado
- `src/content/en.js` y `src/content/es.js`: todo el texto del sitio, copiado tal cual de Wix el 25 nov 2026.
  Si Janet quiere cambiar un texto, se cambia aquí.
- `src/site.js`: datos que se repiten (teléfono, correo, enlaces de Koalendar, Brightwheel e Instagram, y el botón nuevo de inscripción).
- `src/templates.js`: el diseño de cada página. El texto viene de los archivos de arriba.
- `src/partials/leo-ai.html`: aquí va el código del chat Leo AI (embed kit de LeadPrime).
- `build.js`: arma las páginas HTML en `public/` a partir de lo anterior.
- `public/`: lo que ve el visitante (páginas, `css/site.css`, `js/site.js`, fotos en `img/`, video en `media/`).
- `server.js`: sirve las páginas, recibe el formulario de contacto y lo manda a LeadPrime.
- `_inventory/`: notas de cómo se veía cada página en Wix, para comparar.

## Comandos
```
npm run build    # arma las páginas después de cambiar un texto
npm run check    # arma y revisa que no haya páginas ni enlaces rotos
npm run images   # descarga una vez las fotos y el video desde Wix a public/img y public/media
npm start        # prende el sitio en http://localhost:3000
```
Mientras no corras `npm run images`, el servidor muestra las fotos directo desde Wix, así que el sitio se ve completo igual.
Corre `npm run images` antes de cancelar Wix, porque después esas fotos ya no van a estar.

## Formulario de contacto -> LeadPrime
El formulario manda los datos a `/api/contact`, y el servidor los manda al mismo endpoint del widget de Leo:
`POST https://leadprime.chyrris.com/api/widget/lead`, en JSON, con el token de Leo de Janet adentro. LeadPrime crea el lead solo y no lo repite si el teléfono ya existe.
Pon en Railway > Variables: `LEO_WIDGET_TOKEN` = el token del embed kit de Janet (el mismo que usa su sitio hoy).
Sin esa variable, el contacto solo queda en los logs y NO llega a LeadPrime.
Se manda: token, name, email, phone y message. Edad del niño, fecha de inicio y "cómo nos conoció" no tienen campo en LeadPrime, así que van dentro del mensaje.
Pendiente: comparar los nombres de campo con el payload de ejemplo de Chuch (función `toLeadPrime` en `server.js`).

## Leo AI
Pega el código del embed kit de LeadPrime en `src/partials/leo-ai.html` y corre `npm run build`.
Se pone solo en todas las páginas. El dominio principal no cambia, así que Leo sigue igual.
La dirección de prueba de Railway solo importa si la lista de dominios permitidos de Leo tiene algo escrito (vacía deja pasar todo).

## Botón nuevo "Start enrollment"
Todos los botones de inscripción usan una sola constante: `src/site.js` > `ENROLLMENT_URL`.
Hoy es la dirección interina que dio Chuch: https://leadprime.chyrris.com/learning-tree-familia
Cuando Chuch dé la dirección final, se cambia esa línea y se corre `npm run build`.

## Deploy en Railway (lo haces tú)
1. En railway.com: New Project > Deploy from GitHub repo > `g3lasio/learningtree`, rama `main`.
   No hay que configurar nada más: Railway ve el `package.json`, corre `npm start` y revisa `/health` (ver `railway.json`).
2. Service > Variables: agrega `LEO_WIDGET_TOKEN` con el token del embed kit de Leo de Janet.
   Puedes hacer el deploy sin ella para ver el sitio; el formulario no mandará nada a LeadPrime hasta que la pongas.
3. Service > Settings > Networking > Generate Domain. Te da una dirección `...up.railway.app` para ver el sitio.
4. Revisa en esa dirección: inglés y español, teléfono y computadora, el menú, los botones de Koalendar y Brightwheel, y el botón "Start enrollment".
5. Todavía NO pongas el dominio de Janet. Eso (Custom Domain con `www.edulearningtree.com` y `edulearningtree.com`, y luego mover el DNS) va después, cuando ella apruebe el sitio.

## Pendientes (busca TODO en el código)
- Dirección final del formulario de inscripción (hoy va la interina).
- Nombres de campo del payload de LeadPrime (comparar con el ejemplo de Chuch).
- Código del embed kit de Leo AI.
- Descripciones para Google (meta description) de cada página: copiarlas de Wix > SEO.
- Mensaje exacto que Wix muestra al enviar el formulario.
- El enlace "Privacy Policy" del pie da error 404 también en Wix hoy.
- En español la cuota dice $55 y en inglés $60, y el paquete de Brightwheel es distinto en cada idioma. Se copió igual; confirmar con Janet.
- Instagram: se muestran fotos fijas con enlace al perfil, no el feed en vivo.
- Las letras son muy parecidas a las de Wix, no idénticas (Jost y Source Sans 3).
