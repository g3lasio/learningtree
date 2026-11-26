// Texto exacto de la versión en español del sitio (edulearningtree.com/es), copiado el 25 nov 2026.
// Igual que en Wix, varias partes siguen en inglés (galería, portafolio, campos del formulario, la mayoría de los títulos).
// Las rarezas del original se dejan igual a propósito ("pacientes", "Nuestras aula", tú/usted mezclados).
// Cambios pedidos por Gelasio (26 nov 2026): la cuota es $60 en los dos idiomas e inscripción sin Brightwheel.
const en = require("./en");
const img = (id, ext, alt) => ({ id, ext, alt });
const withAlts = (list, alts) => list.map((it, i) => (it.video ? it : { ...it, alt: alts.shift() }));

const portfolioAlts = {
  "creative-arts": [
    "Pintura al aire libre",
    "Pintando al aire libre con amigos",
    "Disfrutando del arte al aire libre",
    "Inspirarse en la naturaleza",
    "Colorear al aire libre para Pascua",
    "Colorear al aire libre",
    "rasgar papel para desarrollar la motricidad fina.",
    "Tiempo libre para colorear, niños coloreando dinosaurios",
  ],
  "outdoor-adventures": [
    "Niños jugando con juguetes al aire libre.",
    "Logotipo con diseño estilizado de hoja y círculo.",
    "Niños jugando al aire libre con juguetes y estructuras de juego.",
    "Niños jugando con arena y agua en una bañera.",
    "Niños jugando al aire libre con juguetes y bicicletas.",
    "**Imagen 1:** Formas y patrones geométricos abstractos y coloridos. **Imagen 2:** Un niño tirando de un carrito de juguete con objetos coloridos.",
    "Niños jugando en un parque infantil al aire libre.",
    "Árbol con follaje denso y gente debajo.",
    "Niños jugando con una mesa de agua al aire libre.",
    "Niños jugando con agua y juguetes de colores al aire libre.",
  ],
  "memorable-moments": [
    "Dos niños sonriendo mientras juegan en un coche de juguete.",
    "Dos niños con magdalenas y gorros de fiesta.",
    "Niños disfrutando de una fiesta en una mesa decorada.",
    "Niños comiendo juntos en una mesa.",
    "Niña con gafas en forma de corazón, con una magdalena y velas.",
    "Bebé sonriente con una camiseta roja, sentado felizmente.",
    "Niño con un gorro de papel que dice \"Feliz Año Nuevo\".",
    "Niño con paletas de helado de colores, sonriendo en el interior de una vivienda.",
  ],
  "our-facility": [
    "Acogedora habitación infantil con juguetes y libros.",
    "Habitación infantil colorida con cunas y zona de juegos.",
    "Zona de juegos infantil colorida con juguetes y cojines.",
    "Habitación infantil con cunas y decoración en las paredes.",
    "Muro verde con cabezas de dinosaurio",
    "Zona de juegos al aire libre",
    "Dinosaurio instalado en una chimenea",
  ],
  "fun-activities": [
    "Un niño jugando con dinosaurios.",
    "Niños jugando con cuentas de colores en una mesa.",
    "Un niño juega con bloques de construcción de colores en el interior de su casa.",
    "Un niño juega con un vehículo de construcción de juguete en el interior de su casa.",
    "Niño jugando con coloridos materiales educativos en el suelo.",
    "Un niño jugando en una sala de juegos colorida y educativa.",
    "Niños leyendo juntos libros ilustrados a color.",
    "Dos niños jugando con juguetes al aire libre.",
    "Niños jugando con materiales sensoriales en un contenedor azul.",
    "Dos niños jugando con una flor de juguete de colores.",
  ],
};

module.exports = {
  lang: "es",
  ui: {
    nav: {
      home: "Principal",
      about: "Sobre nosotros",
      approach: "Nuestro enfoque",
      programs: "Programas",
      curriculum: "Currículo",
      gallery: "Galería",
      admissions: "Admisiones",
      gettingStarted: "Pasos de Ingreso",
      enrollment: "Inscripción",
      contact: "Contacto",
    },
    logoAlt: "Logotipo de Learning Tree",
    languageSelector: "Language Selector: Spanish",
    languages: { en: "English", es: "Spanish" },
    floatingBookTour: "Programe una visita",
    startEnrollment: "Iniciar inscripción", // NUEVO (no existe en Wix). Confirmar el texto con Janet.
    skip: "Ir al contenido principal",
    // En español Wix solo muestra el copyright en el pie (sin horario, contacto, licencia ni Privacy Policy).
    footer: { copyright: "© 2026 por Learning Tree Family Child Care" },
    // La ventana de $60 no apareció en español durante la revisión; se deja el texto en inglés. Confirmar.
    popup: en.ui.popup,
    previous: "Previo",
    next: "Próximo",
    pfPrevious: "Previous",
    pfNext: "Next",
    pfLoop: false, // en español la primera colección solo tiene "Next" y la última solo "Previous"
  },

  home: {
    ...en.home,
    title: "Learning Tree Family Child Care | Best Family Daycare in Turlock, CA",
    h1: "Cultivando corazones bondadosos y mentes brillantes",
    tagline: "Un niño a la vez",
    welcome: "", // en español va todo en un solo párrafo
    intro:
      "Bienvenidos a Learning Tree Family Child Care en Turlock, CA. El lugar donde su hijo/a es querido/a, cuidado/a y animado/a a explorar, aprender y crecer en un entorno seguro y acogedor. Nos enfocamos en el desarrollo integral del niño/a, ayudándolo/a a desarrollar habilidades sociales, emocionales, cognitivas y físicas, a la vez que fomentamos su independencia, curiosidad y creatividad. Cada día en Learning Tree es una oportunidad para que su hijo/a descubra nuevas maravillas, establezca conexiones significativas y desarrolle un amor por el aprendizaje que perdure toda la vida, en un lugar que realmente se siente como un hogar.",
    heroButton: "Programa una visita",
    philosophyH2: "Nuestra filosofía: Fomentar el desarrollo integral del niño.",
    philosophy:
      "En Learning Tree Family Child Care, creemos en el desarrollo integral del niño, apoyando su crecimiento emocional, social, cognitivo, físico y creativo por igual. Nuestra filosofía educativa reconoce que los niños son exploradores por naturaleza que aprenden mejor a través de experiencias significativas y descubrimientos guiados.",
    philosophyButton: "Más información",
    programsH2: "Nuestros programas",
    programs: [
      { ...en.home.programs[0], title: "Jugar", text: "Participa y aprende", img: { ...en.home.programs[0].img, alt: "A los niños les encanta Learning Tree" } },
      { ...en.home.programs[1], title: "Aprender", text: "Currículo creativo", img: { ...en.home.programs[1].img, alt: "Actividades interesantes en Learning Tree" } },
      { ...en.home.programs[2], title: "Crecer", text: "Entorno de apoyo", img: { ...en.home.programs[2].img, alt: "En Learning Tree, un entorno acogedor y familiar." } },
    ],
    programsButton: "Más información",
    instagramH2: "Síguenos en Instagram",
    instagramButton: "Follow @learningtreellc",
  },

  about: {
    ...en.about,
    h1: "Nuestro entorno propicio",
    kicker: "Quiénes somos",
    p1: "En Learning Tree Family Child Care, ofrecemos un ambiente cálido y hogareño que fomenta el aprendizaje temprano y la atención personalizada. Nuestro equipo se centra en las necesidades únicas de cada niño, impulsando su crecimiento a través de actividades lúdicas y estimulantes en un entorno estructurado pero flexible, garantizando así un desarrollo integral.",
    p2: "Creemos que el desarrollo de cada niño es importante, y nuestro enfoque afectuoso empodera a las familias al tiempo que prioriza el crecimiento, la exploración y la alegría.",
    img1: { ...en.about.img1, alt: "Los niños están felices aprendiendo sobre árboles" },
    missionH2: "Dedicados al crecimiento",
    missionKicker: "Nuestra misión",
    mission:
      "En Learning Tree, nuestro enfoque se centra en cultivar la bondad, la responsabilidad y la curiosidad como rasgos fundamentales del carácter. Los niños a nuestro cargo aprenden a cuidar de sí mismos, de sus compañeros y de su entorno. Mediante rutinas consistentes, relaciones afectuosas y desafíos apropiados para su edad, ayudamos a cada niño a desarrollar confianza, resiliencia y un auténtico amor por el aprendizaje que les acompañará a lo largo de su vida.",
    missionLink: "Más información",
    teamH2: "Conócenos",
    teamKicker: "Profesionales que se preocupan por sus pacientes",
    team:
      "En Learning Tree Child Care, nos enorgullecemos de contar con un equipo dedicado de profesionales experimentados en el desarrollo infantil temprano, certificados en primeros auxilios pediátricos, RCP y uso de desfibrilador automático externo (DEA). Creemos que cada niño es único y nos esforzamos por crear un entorno afectuoso que apoye sus logros individuales. El crecimiento y el bienestar de su hijo son nuestra máxima prioridad, y nos comprometemos a brindar una experiencia positiva y enriquecedora a cada pequeño a nuestro cargo.",
    members: [
      { name: "Janet Cervantes, Directora/Propietaria", role: "Experto en cuidado infantil", img: { ...en.about.members[0].img, alt: "Janet Cervantes, Propietaria/Directora" } },
      { name: "Rosella Martínez, educadora", role: "Profesor principal", img: { ...en.about.members[1].img, alt: "Rosella Martínez, educadora" } },
    ],
    growingH3: "Creciendo juntos",
    growing:
      "Cada actividad, interacción y momento bajo nuestro cuidado está diseñado intencionalmente para ayudar a los niños a desarrollar confianza, habilidades para resolver problemas y cultivar la empatía hacia los demás. Celebramos cada logro, respetamos el estilo de aprendizaje único de cada niño y colaboramos con las familias para garantizar un apoyo constante tanto en nuestro centro como en casa.",
    growingButton: "Programe una visita",
    growingImg: { ...en.about.growingImg, alt: "Niños jugando con la vía del tren" },
  },

  programs: {
    ...en.programs,
    h1: "NUESTROS PROGRAMAS",
    img1: { ...en.programs.img1, alt: "Aventuras de aprendizaje diarias en Learning Tree" },
    img2: { ...en.programs.img2, alt: "En Learning Tree, los días están llenos de alegría." },
    intro:
      "Learning Tree Family Child Care ofrece programas cuidadosamente diseñados para niños de 6 semanas a 6 años de edad. Cada programa está diseñado con esmero para satisfacer las necesidades de desarrollo de los niños en las diferentes etapas, brindando desafíos apropiados, apoyo afectuoso y oportunidades de crecimiento. Nuestras aulas de edades mixtas en la etapa preescolar permiten que los niños más pequeños aprendan de sus compañeros mayores, a la vez que ofrecen a los mayores la oportunidad de desarrollar habilidades de liderazgo y mentoría.",
    stageH2: "Adaptado a cada etapa",
    list: [
      {
        n: "1",
        titleLines: ["Programa para bebés"],
        ages: "De 6 semanas a 12 meses",
        text: "Nuestro programa para bebés ofrece un entorno seguro, limpio y estimulante, con muebles adaptados a su tamaño, colchonetas suaves, camas en el suelo y materiales sensoriales cuidadosamente seleccionados. Con una proporción de un adulto por cada tres bebés, su bebé recibe atención personalizada y cuidados constantes de los mismos cuidadores. Hacemos un seguimiento diario de su desarrollo y nos comunicamos regularmente con los padres, lo que garantiza una transición sin problemas a nuestro programa para niños pequeños a los 18 meses.",
      },
      {
        n: "2",
        titleLines: ["Programa para niños pequeños"],
        ages: "18 meses – 36 meses",
        text: "Nuestras aula para niños pequeños, tranquilas y con un enfoque práctico, fomentan la concentración, el autocontrol y el aprendizaje en comunidad. Los niños utilizan herramientas adaptadas a su tamaño para desarrollar independencia mediante la preparación de meriendas, la limpieza, el autocuidado y el aprendizaje del control de esfínteres. Nuestro entorno rico en lenguaje favorece el rápido desarrollo del vocabulario, preparando a los niños para una transición sin problemas a nuestro programa preescolar.",
      },
      {
        n: "3",
        titleLines: ["Preescolar/", "Programa Primario"],
        ages: "3-6 años",
        text: "Nuestras aulas, centradas en el niño y con grupos de edades mixtas, ofrecen actividades individualizadas basadas en los intereses y el nivel de desarrollo de cada niño. Los niños interactúan con materiales prácticos para desarrollar la lectoescritura, las matemáticas, las ciencias, la resolución de problemas y la creatividad. Combinamos el trabajo autodirigido con actividades grupales colaborativas, y nuestro programa incluye la preparación para el jardín de infancia, fomentando habilidades académicas avanzadas y el desarrollo social.",
      },
    ],
    contactLink: "Contáctanos",
    testimonials: [
      {
        quote:
          "Estoy muy agradecido por esta guardería y el cuidado excepcional que le brindan a nuestra pequeña. Significa muchísimo para mí saber que la quieren, la mantienen segura y la cuidan bien cada día. Las actividades que realizan la han ayudado a aprender y crecer muchísimo, y ha sido increíble ver su desarrollo. No podría pedir un lugar mejor y la recomiendo ampliamente.",
        name: "Andrew Mulgado",
      },
      {
        quote:
          "Mis dos hijos vinieron aquí, ahora solo viene uno porque el mayor empezó el colegio. ¡A los dos les encantaba! ¡Hay mucha educación, manualidades y baile! Hacen un trabajo estupendo con las actividades diarias. Cuando mi hijo mayor no tiene colegio, Janet siempre lo recibe. Es muy amable, al igual que el resto del personal. ¡Se nota que les apasiona lo que hacen!",
        name: "Mónica Palacio",
      },
      {
        quote:
          "¡Nos encanta Learning Tree Family Child Care! Nuestro pequeño tiene 2 años y también le encanta. Es un entorno muy seguro y acogedor, y nuestro hijo aprende muchísimo cada día. ¡Estamos encantados!",
        name: "James Inouye",
      },
    ],
  },

  curriculum: {
    ...en.curriculum,
    title: "Currículo | Learning Tree Family Child Care",
    h1: "Áreas Curriculares Integrales",
    intro:
      "Nuestro currículo está diseñado para involucrar a los niños en múltiples áreas de aprendizaje, asegurando un desarrollo integral que los prepara para el éxito académico y las habilidades para la vida. Cada área curricular se integra cuidadosamente en las actividades diarias, brindando a los niños experiencias de aprendizaje enriquecedoras y significativas que potencian su curiosidad natural y su madurez para el desarrollo. Mediante la exploración práctica y el descubrimiento guiado, los niños desarrollan sólidas habilidades fundamentales a la vez que cultivan su amor por el aprendizaje.",
    areas: [
      ["Vida práctica", "Los niños desarrollan habilidades de autonomía, aprenden a cuidar de sí mismos y de su entorno, desarrollan habilidades sociales y perfeccionan la coordinación a través de tareas y actividades diarias significativas."],
      ["Sensorial y cognitivo", "Las actividades especializadas perfeccionan las habilidades de observación, fortalecen la capacidad de razonamiento y desarrollan el pensamiento crítico mediante la exploración del tamaño, el color, la textura y mucho más."],
      ["Idioma", "Fomentamos la comunicación verbal y escrita, las habilidades de lectoescritura temprana e introducimos un segundo idioma a través de la conversación, la narración de cuentos y materiales lingüísticos atractivos."],
      ["Matemáticas", "El aprendizaje práctico mediante el conteo, los patrones, las formas y la resolución de problemas sienta bases matemáticas sólidas y desarrolla el sentido numérico de una manera apropiada para el desarrollo."],
      ["Música", "A través del canto, el ritmo, los instrumentos y el movimiento, los niños exploran la creatividad, la autoexpresión, la apreciación cultural y desarrollan habilidades de discriminación auditiva."],
      ["Ciencia y descubrimiento", "Los experimentos prácticos, la exploración de la naturaleza y las actividades STEM tempranas fomentan el pensamiento científico, la curiosidad por el mundo y las habilidades para resolver problemas."],
    ].map(([title, text], i) => ({ ...en.curriculum.areas[i], title, text })),
  },

  // La galería y las páginas del portafolio siguen en inglés en Wix; solo las fotos de cada colección tienen texto alterno en español.
  gallery: en.gallery,
  portfolio: en.portfolio.map((p) => ({ ...p, items: withAlts(p.items, [...portfolioAlts[p.slug]]) })),

  admissions: {
    ...en.admissions,
    h1: "Cómo empezar",
    intro:
      "Elegir el centro de cuidado infantil adecuado para su hijo es una de las decisiones más importantes que tomará como padre o madre. Hemos diseñado nuestro proceso de admisión para que sea sencillo, transparente y acogedor, facilitando así que las familias se unan a la comunidad de Learning Tree. Le invitamos a visitar nuestras instalaciones, conocer a nuestro dedicado personal, observar nuestras aulas en funcionamiento y experimentar de primera mano el ambiente cálido y estimulante donde su hijo aprenderá y crecerá. Las plazas en nuestros programas se agotan rápidamente a lo largo del año, por lo que le recomendamos comenzar el proceso con anticipación para asegurar la fecha de inscripción que prefiera.",
    img: { ...en.admissions.img, alt: "Los niños disfrutan de la hora de lectura en Learning Tree." },
    steps: [
      { n: "1", title: "Reserva una visita guiada", text: "Programe una visita personalizada para conocer nuestras aulas, a nuestro experimentado personal y experimentar de primera mano nuestro ambiente estimulante. Haga preguntas y vea cómo ponemos en práctica nuestra filosofía." },
      { n: "2", title: "Presenta tu solicitud", text: "Completa tu solicitud en línea en nuestro sistema seguro de inscripción, proporciona toda la documentación requerida y paga la cuota de inscripción para una experiencia de matrícula sin complicaciones. Presentar tu solicitud con anticipación te brinda la mejor oportunidad de asegurar la fecha de inicio que prefieras." },
      { n: "3", title: "Asegure la inscripción de su hijo/a", text: "Una vez aceptada la solicitud, se requiere un depósito equivalente a un mes de matrícula para reservar la plaza de su hijo/a. Este depósito se aplicará al último mes de matrícula. El pago debe realizarse puntualmente para garantizar la plaza." },
      { n: "4", title: "Únete a nuestra comunidad", text: "Conéctate con nosotros en las redes sociales, asiste a la sesión informativa y forma parte de la familia Learning Tree. Mantente al tanto de los eventos, actividades, novedades y las aventuras diarias de tu hijo/a." },
    ],
    touchH2: "Ponte en contacto",
    touchButton: "¡Programa tu visita hoy mismo!",
  },

  enrollment: {
    ...en.enrollment,
    h1: "Bienvenido al siguiente paso.",
    introLines: [
      "Nos alegra mucho que se haya tomado el tiempo de visitar Learning Tree Family Child Care y conocer nuestro programa.",
      "Esperamos dar la bienvenida a su familia a nuestra comunidad.",
    ],
    clickHere: "Haga clic aquí",
    howH2: "CÓMO INSCRIBIRSE",
    steps: [
      { title: "Paso 1: Haga clic en el botón de inscripción.", link: true, text: ["Haz clic en el botón \"Iniciar inscripción\" que aparece a continuación para abrir nuestro sistema seguro de inscripción y acceder al paquete de inscripción."] },
      { title: "Paso 2: Complete los formularios", text: ["Por favor, rellene todos los formularios obligatorios y suba los documentos que se le soliciten."] },
      { title: "Paso 3: Enviar y pagar la cuota de inscripción", text: ["Revisa tu información, envía tus formularios y paga la cuota de inscripción de $60 en nuestro sistema seguro de inscripción.", "Tenga en cuenta: La cuota de inscripción es necesaria para tramitar su solicitud y no garantiza una plaza."] },
      { title: "Paso 4: Confirmación de inscripción", text: ["Una vez revisados sus formularios, nos pondremos en contacto con usted para confirmar la disponibilidad y la fecha oficial de inicio de su hijo/a."] },
    ],
    needH2: "Lo que necesitarás",
    needIntro: "Para facilitar el proceso, tenga a mano lo siguiente:",
    needList: [
      "Información básica del niño",
      "Información de contacto del padre/tutor",
      "Contactos de emergencia",
      "Información médica",
      "Formularios firmados requeridos",
    ],
    immunizations: "Vacunas",
    immunizationsButton: "(Haga clic para obtener más información)",
    // Ventana de vacunas tal como se ve en español (la pestaña "Vaccines" sigue en inglés en Wix).
    vaccines: {
      close: "Volver al sitio",
      tabs: [
        {
          label: "Vaccines",
          intro: "Vacunas:",
          rows: [
            ["Polio", 4],
            ["DTaP", 5],
            ["MMR", 2],
            ["Hib", 4],
            ["Hepatitis B", 3],
            ["Varicela", 2],
          ],
        },
        {
          label: "Dosis",
          list: [
            "Polio: al menos tres dosis (si la tercera o última dosis se administró antes de los dos años de edad, se requiere una dosis adicional).",
            "DTaP/TD: al menos cuatro dosis (si la cuarta o última dosis se administró antes de los dos años de edad, se requiere una dosis adicional).",
            "Vacuna triple vírica (sarampión, paperas y rubéola): una dosis de cada una a partir del primer cumpleaños.",
            "Hib y HepB: tercera dosis al menos cuatro meses después de la primera dosis.",
            "Varicela – en o después del primer cumpleaños",
            "Vacuna de refuerzo contra la polio, DTaP y MMR entre los cuatro y cinco años de edad.",
          ],
        },
      ],
    },
    startH2: "Inicie su proceso de inscripción",
    startLines: [
      "Estás a solo unos pasos de unirte a la familia de Learning Tree.",
      "Para comenzar, complete su inscripción a través de nuestro sistema seguro.",
    ],
    startNote: "Para una experiencia sencilla y sin complicaciones, todos los formularios, documentos y la cuota de inscripción de $60 se completan en nuestro sistema seguro de inscripción.",
    enrollButton: "Iniciar inscripción",
  },

  contact: {
    ...en.contact,
    h1: "Ponte en contacto",
    kicker: "Estamos aquí para ti",
    intro: "No dudes en contactarnos si tienes alguna pregunta. Nuestro equipo está a tu disposición para brindarte la información y el apoyo que necesitas.",
    fields: {
      ...en.contact.fields, // Phone, Child's age, Desired start date, etc. siguen en inglés en Wix
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo electrónico",
      chooseOption: "Elige una opción.",
      submit: "Entregar",
    },
    hours: [
      { title: "Horario de la guardería", lines: ["De lunes a viernes", "De 7:00 am a 11:00 pm"] },
      { title: "Horario de oficina", lines: ["De lunes a viernes", "10:00 a. m. - 4:00 p. m."] },
    ],
    img: { ...en.contact.img, alt: "En Learning Tree, cada día es una aventura." },
    tourH3: "Programe una visita de orientación.",
    tourButton: "Programa una visita",
  },

  // Páginas que no existen en Wix (gracias y 404); texto propio.
  thanks: {
    title: "Gracias | Learning Tree Family Child Care",
    h1: "¡Gracias!",
    text: "Recibimos tu mensaje y te contactaremos pronto.",
    back: "Volver al inicio",
  },
  notFound: {
    title: "Página no encontrada | Learning Tree Family Child Care",
    h1: "Página no encontrada",
    text: "La página que buscas no existe.",
    back: "Volver al inicio",
  },
};
