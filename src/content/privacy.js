// Política de privacidad (página /privacy-policy y /es/privacy-policy).
// BORRADOR: Wix no tenía esta página (daba 404), así que este texto es nuevo.
// Janet tiene que leerlo y aprobarlo antes de que el sitio salga con su dominio.
// Cada sección es { h: título, p: [párrafos], list: [viñetas] }.

const updated = { en: "Last updated: November 26, 2026", es: "Última actualización: 26 de noviembre de 2026" };

const en = {
  title: "Privacy Policy | Learning Tree Family Child Care",
  description: "Privacy Policy of Learning Tree Family Child Care in Turlock, CA — what information we collect through our website and how we use and protect it.",
  h1: "Privacy Policy",
  updated: updated.en,
  intro:
    "Learning Tree Family Child Care (“Learning Tree,” “we,” “us”) respects the privacy of the families who visit our website and trust us with their children. This policy explains what information we collect through edulearningtree.com, how we use it, and the choices you have.",
  sections: [
    {
      h: "Information we collect",
      p: ["We only collect the information you choose to give us, plus basic technical information that any website receives."],
      list: [
        "Contact form: your first and last name, email address, phone number, your child’s age, your desired start date, how you heard about us, and any message you write.",
        "Leo AI chat: the messages you type and any contact details you share in the chat.",
        "Enrollment: when you start enrollment, our secure enrollment system collects the information needed to enroll your child, such as your child’s basic information, parent or guardian contact information, emergency contacts, medical and immunization information, and signed forms.",
        "Enrollment fee: the fee is paid in our secure enrollment system and processed by its payment provider. We do not see or store your full card number.",
        "Technical information: like most websites, our hosting provider records basic information such as your IP address, browser type, and the pages you visit, to keep the site running and secure.",
      ],
    },
    {
      h: "How we use your information",
      list: [
        "To answer your questions and schedule tours.",
        "To process your child’s application and enrollment, and to contact you about availability and start dates.",
        "To care for your child safely and meet the requirements of our California family child care license.",
        "To keep our website working and secure.",
      ],
      p: ["If you give us your phone number, we may call or text you about your inquiry or enrollment. You can ask us to stop at any time, and you can reply STOP to any text message."],
    },
    {
      h: "How we share your information",
      p: [
        "We do not sell or rent your personal information, and we do not share it for advertising.",
        "We share information only with the service providers that help us run our program and this website, such as LeadPrime (the system we use for our contact form, the Leo AI chat, and enrollment) and our website hosting provider. They may use your information only to provide their services to us.",
        "We may also share information when the law requires it, including with the California Department of Social Services, Community Care Licensing Division, as part of our license, or to protect the safety of a child.",
      ],
    },
    {
      h: "Other websites and services",
      p: [
        "Our website links to or shows content from other services, such as Koalendar (tour booking), Google Maps, Instagram, and Facebook. When you use them, their own privacy policies apply.",
        "Our website does not use advertising cookies. It saves a small note in your browser so the welcome message does not open again during the same visit.",
      ],
    },
    {
      h: "Children’s privacy",
      p: [
        "Our website is meant for parents and guardians, not for children. We collect information about children only from their parents or guardians, and only to provide child care. If you believe a child sent us information through this website, please contact us and we will delete it.",
      ],
    },
    {
      h: "How long we keep information",
      p: [
        "We keep inquiry information only as long as we need it to respond to you. We keep enrollment and child records for as long as California child care licensing rules require, and then delete them securely.",
      ],
    },
    {
      h: "Your choices",
      p: [
        "You can ask us to see, correct, or delete the personal information we have about you, or to stop contacting you, by calling or emailing us. We may need to keep some records when the law requires it.",
      ],
    },
    {
      h: "How we protect your information",
      p: [
        "We use secure (encrypted) connections on our website and trusted service providers to protect your information. No website is completely secure, so please do not send sensitive medical details through the contact form or chat; we will collect them through our secure enrollment system instead.",
      ],
    },
    {
      h: "Changes to this policy",
      p: ["If we change this policy, we will post the new version on this page and update the date above."],
    },
  ],
  contactH: "Contact us",
  contactText: "Questions about this policy? Call us at {phone} or email {email}.",
};

const es = {
  title: "Política de privacidad | Learning Tree Family Child Care",
  description: "Política de privacidad de Learning Tree Family Child Care en Turlock, CA: qué información recopila nuestro sitio y cómo la usamos y protegemos.",
  h1: "Política de privacidad",
  updated: updated.es,
  intro:
    "Learning Tree Family Child Care (“Learning Tree”, “nosotros”) respeta la privacidad de las familias que visitan nuestro sitio web y nos confían a sus hijos. Esta política explica qué información recopilamos en edulearningtree.com, cómo la usamos y qué opciones tiene usted.",
  sections: [
    {
      h: "Información que recopilamos",
      p: ["Solo recopilamos la información que usted decide darnos, además de la información técnica básica que recibe cualquier sitio web."],
      list: [
        "Formulario de contacto: su nombre y apellido, correo electrónico, teléfono, la edad de su hijo/a, la fecha de inicio deseada, cómo supo de nosotros y cualquier mensaje que escriba.",
        "Chat de Leo AI: los mensajes que escribe y los datos de contacto que comparta en el chat.",
        "Inscripción: cuando inicia la inscripción, nuestro sistema seguro de inscripción recopila la información necesaria para inscribir a su hijo/a, como sus datos básicos, la información de contacto de los padres o tutores, contactos de emergencia, información médica y de vacunas, y formularios firmados.",
        "Cuota de inscripción: la cuota se paga en nuestro sistema seguro de inscripción y la procesa su proveedor de pagos. Nosotros no vemos ni guardamos el número completo de su tarjeta.",
        "Información técnica: como la mayoría de los sitios web, nuestro proveedor de hospedaje registra información básica como su dirección IP, el tipo de navegador y las páginas que visita, para mantener el sitio funcionando y seguro.",
      ],
    },
    {
      h: "Cómo usamos su información",
      list: [
        "Para responder sus preguntas y programar visitas.",
        "Para tramitar la solicitud e inscripción de su hijo/a y comunicarnos con usted sobre disponibilidad y fechas de inicio.",
        "Para cuidar a su hijo/a de forma segura y cumplir con los requisitos de nuestra licencia de cuidado infantil familiar en California.",
        "Para mantener nuestro sitio web funcionando y seguro.",
      ],
      p: ["Si nos da su número de teléfono, podemos llamarle o enviarle mensajes de texto sobre su consulta o inscripción. Puede pedirnos que dejemos de hacerlo en cualquier momento y puede responder STOP a cualquier mensaje de texto."],
    },
    {
      h: "Con quién compartimos su información",
      p: [
        "No vendemos ni alquilamos su información personal, y no la compartimos para publicidad.",
        "Solo compartimos información con los proveedores de servicios que nos ayudan a operar nuestro programa y este sitio web, como LeadPrime (el sistema que usamos para el formulario de contacto, el chat de Leo AI y la inscripción) y nuestro proveedor de hospedaje web. Ellos solo pueden usar su información para prestarnos sus servicios.",
        "También podemos compartir información cuando la ley lo exige, incluido con el Departamento de Servicios Sociales de California, División de Licencias de Cuidado Comunitario, como parte de nuestra licencia, o para proteger la seguridad de un niño.",
      ],
    },
    {
      h: "Otros sitios y servicios",
      p: [
        "Nuestro sitio enlaza o muestra contenido de otros servicios, como Koalendar (reserva de visitas), Google Maps, Instagram y Facebook. Cuando usted los usa, se aplican sus propias políticas de privacidad.",
        "Nuestro sitio no usa cookies de publicidad. Guarda una pequeña nota en su navegador para que el mensaje de bienvenida no se vuelva a abrir durante la misma visita.",
      ],
    },
    {
      h: "Privacidad de los niños",
      p: [
        "Nuestro sitio web está pensado para padres y tutores, no para niños. Solo recopilamos información sobre los niños a través de sus padres o tutores, y únicamente para brindar el cuidado infantil. Si cree que un niño nos envió información por este sitio, comuníquese con nosotros y la borraremos.",
      ],
    },
    {
      h: "Cuánto tiempo guardamos la información",
      p: [
        "Guardamos la información de las consultas solo el tiempo necesario para responderle. Guardamos los expedientes de inscripción y de los niños el tiempo que exigen las normas de licencias de cuidado infantil de California, y después los eliminamos de forma segura.",
      ],
    },
    {
      h: "Sus opciones",
      p: [
        "Puede pedirnos ver, corregir o borrar la información personal que tenemos sobre usted, o que dejemos de contactarle, llamándonos o escribiéndonos por correo. Es posible que debamos conservar algunos registros cuando la ley lo exija.",
      ],
    },
    {
      h: "Cómo protegemos su información",
      p: [
        "Usamos conexiones seguras (cifradas) en nuestro sitio y proveedores de confianza para proteger su información. Ningún sitio web es completamente seguro, así que le pedimos no enviar datos médicos delicados por el formulario de contacto ni por el chat; los recopilaremos en nuestro sistema seguro de inscripción.",
      ],
    },
    {
      h: "Cambios a esta política",
      p: ["Si cambiamos esta política, publicaremos la nueva versión en esta página y actualizaremos la fecha de arriba."],
    },
  ],
  contactH: "Contáctenos",
  contactText: "¿Preguntas sobre esta política? Llámenos al {phone} o escríbanos a {email}.",
};

module.exports = { en, es };
