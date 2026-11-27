// Datos que se repiten en todo el sitio. Si algo cambia (teléfono, enlaces), se cambia aquí una sola vez.
module.exports = {
  domain: "https://edulearningtree.com",

  // Enlaces externos, copiados tal cual del sitio de Wix (25 nov 2026).
  bookTourUrl: "https://koalendar.com/e/welcome-to-learning-tree",
  instagramUrl: "https://www.instagram.com/learningtreellc",
  facebookUrl: "https://www.facebook.com/edulearningtree",
  // Mapa de la página de contacto (en Wix es un mapa de Google con la dirección de la guardería).
  mapEmbedUrl: "https://maps.google.com/maps?q=2854+Delia+Ct,+Turlock,+CA+95382&z=14&output=embed",
  phone: "(209) 499-2779",
  email: "info@edulearningtree.com",
  license: "503912200",

  // Botón "Start Enrollment": todos los botones de inscripción usan esta dirección.
  // Es la dirección permanente de inscripción en LeadPrime que dio Gelasio (26 nov 2026). El fee de $60 se paga ahí.
  ENROLLMENT_URL: "https://leadprime.chyrris.com/learning-tree-enrollment/learning-tree-family-childcare-llc",

  // App de padres (LeadPrime): las familias ya inscritas entran con su número de teléfono.
  PARENT_APP_URL: "https://app.edulearningtree.com",

  // Las fotos vienen de la biblioteca de Wix de Janet. Se guardan en public/img/<id>.<ext>.
  // Si una foto todavía no se descargó, el servidor la pide a Wix (ver server.js).
  wixMediaPrefix: "877981_",
};
