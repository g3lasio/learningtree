// Datos que se repiten en todo el sitio. Si algo cambia (teléfono, enlaces), se cambia aquí una sola vez.
module.exports = {
  domain: "https://www.edulearningtree.com",

  // Enlaces externos, copiados tal cual del sitio de Wix (25 nov 2026).
  bookTourUrl: "https://koalendar.com/e/welcome-to-learning-tree",
  brightwheelUrl:
    "https://schools.mybrightwheel.com/sign-in?redirect_path=%2Fadmissions%2Fpacket%2F46fb9a50-a2ad-4d30-ae58-5e951e6d1a99%2Ffill%3Fschool_id%3D40f24253-3a75-43f2-b4fd-a72d0c86ee01",
  instagramUrl: "https://www.instagram.com/learningtreellc",
  facebookUrl: "https://www.facebook.com/edulearningtree",
  // Mapa de la página de contacto (en Wix es un mapa de Google con la dirección de la guardería).
  mapEmbedUrl: "https://maps.google.com/maps?q=2854+Delia+Ct,+Turlock,+CA+95382&z=14&output=embed",
  phone: "(209) 499-2779",
  email: "info@edulearningtree.com",
  license: "503912200",

  // NUEVO: botón "Start enrollment". ENROLLMENT_URL es la única dirección que usan todos los botones de inscripción.
  // Hoy es la dirección interina que dio Chuch (25 nov 2026): el app de familias en LeadPrime.
  // Cuando LeadPrime termine la página pública de inscripción, Chuch da la dirección final y solo se cambia esta línea.
  ENROLLMENT_URL: "https://leadprime.chyrris.com/learning-tree-familia",

  // Las fotos vienen de la biblioteca de Wix de Janet. Se guardan en public/img/<id>.<ext>.
  // Si una foto todavía no se descargó, el servidor la pide a Wix (ver server.js).
  wixMediaPrefix: "877981_",
};
