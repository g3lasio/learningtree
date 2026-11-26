# Sitio de Learning Tree Family Child Care

Copia exacta del sitio de Wix (www.edulearningtree.com), en inglés y en español, hecha como código propio.
No usa librerías: solo Node 20 o más nuevo.

## Cómo está organizado
- `src/content/en.js` y `src/content/es.js`: todo el texto del sitio, copiado tal cual de Wix el 25 nov 2026.
  Si Janet quiere cambiar un texto, se cambia aquí.
- `src/site.js`: datos que se repiten (teléfono, correo, enlaces de Koalendar e Instagram, y la dirección del botón "Start Enrollment").
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
El chat de Leo ya está en todas las páginas (inglés y español). El código está en `src/partials/leo-ai.html`
y es el mismo formato del Embed Kit de LeadPrime: `https://leadprime.chyrris.com/api/widget/embed.js` con `data-token`.
El token sale de la misma variable `LEO_WIDGET_TOKEN` que usa el formulario: una sola variable prende las dos cosas.
Sin esa variable la burbuja de Leo NO aparece (el servidor quita el bloque para que no salga un chat roto).
Dónde sacar el token (empieza con `lp_wid_`): en LeadPrime con la cuenta de Janet, My Website > Embed Kit;
o en el sitio de Wix: abre www.edulearningtree.com en la computadora, Ctrl+U (ver código fuente), busca `embed.js` y copia lo que dice `data-token`.
El dominio principal no cambia, así que Leo sigue igual.
La dirección de prueba de Railway solo importa si la lista de dominios permitidos de Leo tiene algo escrito (vacía deja pasar todo).

## Botón "Start Enrollment"
Todos los botones de inscripción (arriba en el menú y en la página Enrollment) usan una sola constante: `src/site.js` > `ENROLLMENT_URL`.
Es la dirección permanente de inscripción en LeadPrime: https://leadprime.chyrris.com/learning-tree-enrollment/learning-tree-family-childcare-llc
Ahí mismo se paga la cuota de inscripción de $60 (ya no se usa Brightwheel para inscribirse).

## Política de privacidad
El texto está en `src/content/privacy.js` (inglés y español) y se ve en `/privacy-policy` y `/es/privacy-policy`.
Es un borrador nuevo: Janet debe aprobarlo.

## Deploy en Railway (lo haces tú)
1. En railway.com: New Project > Deploy from GitHub repo > `g3lasio/learningtree`, rama `main`.
   No hay que configurar nada más: Railway ve el `package.json`, corre `npm start` y revisa `/health` (ver `railway.json`).
2. Service > Variables: agrega `LEO_WIDGET_TOKEN` con el token del embed kit de Leo de Janet.
   Puedes hacer el deploy sin ella para ver el sitio; el formulario no mandará nada a LeadPrime hasta que la pongas.
3. Service > Settings > Networking > Generate Domain. Te da una dirección `...up.railway.app` para ver el sitio.
4. Revisa en esa dirección: inglés y español, teléfono y computadora, el menú, los botones de Koalendar, el botón "Start Enrollment" y la página Privacy Policy.
5. Todavía NO pongas el dominio de Janet. Eso (Custom Domain con `www.edulearningtree.com` y `edulearningtree.com`, y luego mover el DNS) va después, cuando ella apruebe el sitio.

## Pendientes (busca TODO en el código)
- Nombres de campo del payload de LeadPrime (comparar con el ejemplo de Chuch).
- Token de Leo (`LEO_WIDGET_TOKEN`) en Railway: sin él no salen ni la burbuja de Leo ni el envío del formulario.
- Descripciones para Google (meta description) de cada página: copiarlas de Wix > SEO.
- Mensaje exacto que Wix muestra al enviar el formulario.
- Política de privacidad: es un BORRADOR nuevo (en Wix no existía). Janet debe aprobar el texto de `src/content/privacy.js` antes de salir con su dominio.
- Instagram: se muestran fotos fijas con enlace al perfil, no el feed en vivo.
- Las letras son muy parecidas a las de Wix, no idénticas (Jost y Source Sans 3).
