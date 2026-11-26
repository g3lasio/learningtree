// Texto exacto del sitio en inglés, copiado de edulearningtree.com el 25 nov 2026.
// Las faltas de ortografía del original se dejan igual a propósito (por ejemplo "Inmunizations").
// img(id, ext, alt): id es el nombre de la foto en la biblioteca de Wix de Janet.
const img = (id, ext, alt) => ({ id, ext, alt });

module.exports = {
  lang: "en",
  ui: {
    nav: {
      home: "Home",
      about: "About Us",
      approach: "Our Approach",
      programs: "Programs",
      curriculum: "Curriculum",
      gallery: "Gallery",
      admissions: "Admissions",
      gettingStarted: "Getting Started",
      enrollment: "Enrollment",
      contact: "Contact",
    },
    logoAlt: "Learning Tree Logo",
    languageSelector: "Language Selector: English",
    languages: { en: "English", es: "Spanish" },
    floatingBookTour: "Book a Tour",
    startEnrollment: "Start Enrollment",
    skip: "Skip to Main Content",
    footer: {
      hours: "Daycare Hours: Monday – Friday 7:00 am - 11:00 pm",
      contactPrefix: "Contact us: (209) 499-2779 |",
      copyright: "© 2026 by Learning Tree Family Child Care",
      licensePrefix: "Licensed Family Child Care Home | CA Lic. #503912200 |",
      privacy: "Privacy Policy",
    },
    popup: {
      title: "A SPECIAL WELCOME TO NEW FAMILIES",
      text: "Pay your $60 enrollment fee online, and we’ll apply the full amount as a credit toward your first month tuition!",
      button: "Book a Tour",
      close: "Close",
      open: "Open welcome offer",
    },
    previous: "Previous",
    next: "Next",
    pfLoop: false, // en Wix la primera colección solo tiene "Next" y la última solo "Previous"
  },

  home: {
    title: "Learning Tree Family Child Care | Licensed Daycare in Turlock, CA",
    description: "", // TODO: copiar la meta descripción exacta desde Wix (SEO)
    h1: "Growing Kind Hearts and Bright Minds",
    tagline: "One Child at a Time",
    welcome: "Welcome to Learning Tree Family Child Care in Turlock, CA.",
    intro:
      "A place where your child is cherished, nurtured, and encouraged to explore, learn, and grow in a safe, home-like environment. We focus on holistic child development, helping children build social, emotional, cognitive, and physical skills while fostering independence, curiosity, and creativity. Every day at Learning Tree is an opportunity for your child to discover new wonders, make meaningful connections, and develop a lifelong love of learning in a place that truly feels like home.",
    heroButton: "Book a Free Tour",
    heroImg: img("b1cddbe027f64226848a3150e1d117e5", "png", "Planting tree.png"),
    philosophyH2: "Our Philosophy: Nurturing the Whole Child",
    philosophy:
      "At Learning Tree Family Child Care, we believe in nurturing the whole child—supporting emotional, social, cognitive, physical, and creative growth in equal measure. Our educational philosophy recognizes that children are natural explorers who learn best through meaningful experiences and guided discovery.",
    philosophyButton: "Learn About Us",
    philosophyImg: img("f7f9d0125ab4429c99f9fbebc8326f79", "jpg", "IMG_2531_jpg.jpg"),
    programsH2: "Our Programs",
    programs: [
      { title: "Play", text: "Engage and Learn", img: img("0f257f587c854446aacb4f87601e6339", "jpg", "Children love Learning Tree"), imgFirst: true },
      { title: "Learn", text: "Creative Curriculum", img: img("c3ac12ea372f4a3393e5091a3e6acfb5", "jpg", "Engaging Activities at Learning Tree"), imgFirst: false },
      { title: "Grow", text: "Supportive Environment", img: img("44cdbc8f3c364c0d8753819d8cdf145c", "jpg", "Nurturing home-like environment at Learning Tree"), imgFirst: true },
    ],
    programsButton: "See Our Programs",
    instagramH2: "Follow Us on Instagram",
    instagramButton: "Follow @learningtreellc",
    instagram: [
      "3ecd7299242644cabaf8208b7081f4d8",
      "1270c7a953aa4a26a5145d4ac6e5c3d9",
      "38796d3f6a154b479108d98d95501989",
      "f80ad785953a432191570c7c10b5d597",
      "0dad84f9f39b4938a82d434b129fc4c5",
      "d2b5cfb34c8548a6931c4323f927f025",
      "c1cb2b3e605a404c8534adf0570834d8",
      "a8782cb5b2a94bd0bafe4ff7e659af91",
    ].map((id) => img(id, "jpg", "")),
  },

  about: {
    title: "About Us | Our Nurturing Environment at Learning Tree Family Child Care",
    description: "", // TODO: meta descripción desde Wix
    h1: "Our Nurturing Environment",
    kicker: "Who We Are",
    p1: "At Learning Tree Family Child Care, we provide a warm, home-like environment that encourages early learning and personalized care. Our dedicated team focuses on each child's unique needs, fostering their growth through engaging play-based activities in a structured yet flexible setting, ensuring foundational development.",
    p2: "We believe each child's journey matters, and our nurturing approach empowers families while prioritizing growth, exploration, and joy.",
    img1: img("0b97bcdac72e4f4186f1eb7aac0d8a13", "jpg", "children happy at learning tree"),
    img2: img("fdde878f0c93435fb7a671aa3fb6bb26", "jpg", "IMG_2009_jpg.jpg"),
    missionH2: "Dedicated to Growth",
    missionKicker: "Our Mission",
    mission:
      "At Learning Tree our approach centers on building kindness, responsibility, and curiosity as foundational character traits. Children in our care learn to care for themselves, their peers, and their environment. Through consistent routines, nurturing relationships, and developmentally appropriate challenges, we help each child build confidence, resilience, and a genuine love for learning that will serve them throughout their lives.",
    missionLink: "Learn more",
    teamH2: "Meet Us",
    teamKicker: "Caring Professionals",
    team:
      "At Learning Tree Child Care, we pride ourselves on having a dedicated team of experienced professionals in early childhood development and who are also certified in Pediatric First Aid CPR AED. We believe that every child is unique, and we strive to create a caring and environment that supports their individual milestones. Your child's growth and well-being is our top priority, and we are committed to fostering a positive and enriching experience for each little one in our care.",
    members: [
      { name: "Janet Cervantes, Director/Owner", role: "Childcare Expert", img: img("4361f576c4574ee393d9d0af2971ed1e", "png", "Janet Cervantes, Owner/ Director") },
      { name: "Rosella Martinez, Educator", role: "Lead Teacher", img: img("5f9ebb35f5d44297bf2a18e2b290917c", "png", "Rosella Martinez, Educator") },
    ],
    growingH3: "Growing Together",
    growing:
      "Every activity, interaction, and moment in our care is intentionally designed to help children build confidence, develop problem-solving skills, and cultivate empathy for others. We celebrate each milestone, honor each child's unique learning style, and partner with families to ensure consistent support both at our center and at home.",
    growingButton: "Schedule a Visit",
    growingImg: img("9527fd9c9601453a84d54dad981ce14a", "jpg", "Children playing with train track"),
  },

  programs: {
    title: "Programs at Learning Tree Family Child Care | Turlock, CA",
    description: "",
    h1: "OUR PROGRAMS",
    img1: img("6b31770ba8cb41acae813df3c12ce694", "jpg", "Learning adventures everyday at Learning Tree"),
    img2: img("c44d08ca281e44b3ad01b070b85e184e", "jpg", "Days are filled with joy at Learning Tree"),
    intro:
      "Learning Tree Family Child Care offers carefully designed programs for children from 6 weeks through 6 years of age. Each program is thoughtfully crafted to meet the developmental needs of children at different stages, providing appropriate challenges, nurturing support, and opportunities for growth. Our mixed-age classrooms in the preschool years allow younger children to learn from older peers while giving older children opportunities to develop leadership and mentoring skills.",
    stageH2: "Tailored to Every Stage",
    stageImg: img("99620a21988e4612a080c8bf21909b82", "jpg", "IMG_3307_jpg.jpg"),
    list: [
      {
        n: "1",
        titleLines: ["Infant Program"],
        ages: "6 weeks – 12 months",
        text: "Our infant program provides a safe, clean, and deeply nurturing environment featuring infant-sized furniture, soft mats, floor beds, and carefully selected sensory materials. With a ratio of 1 adult per 3 infants, your baby receives personalized attention and consistent care from the same loving caregivers. We track daily milestones and communicate regularly with parents, ensuring seamless transition to our Toddler program at 18 months.",
      },
      {
        n: "2",
        titleLines: ["Toddler Program"],
        ages: "18 months – 36 months",
        text: "Our calm, purposeful toddler classrooms foster concentration, self-control, and community learning. Toddlers use child-sized tools to develop independence through preparing snacks, cleaning up, self-care activities, and toilet training. Our language-rich environment supports rapid vocabulary development while preparing children for a smooth transition to our Preschool program.",
      },
      {
        n: "3",
        titleLines: ["Preschool/", "Primary Program"],
        ages: "3 – 6 years",
        text: "Our child-centered, mixed-age classrooms offer individualized activities based on each child's interests and developmental readiness. Children engage with hands-on materials for literacy, math, science, problem-solving, and creativity. We balance self-directed work with collaborative group activities, and our program includes kindergarten preparation for advanced academic skills and social development.",
      },
    ],
    contactLink: "Contact Us",
    testimonials: [
      {
        quote:
          "I’m so grateful for this daycare and the amazing care they give our little one. It truly means everything to know she is loved, safe, and well taken care of every day. The activities they do have helped her learn and grow so much, and it’s been incredible to see her development. I couldn’t ask for a better place and highly recommend them.",
        name: "Andrew Mulgado",
      },
      {
        quote:
          "I had both my boys come here, now only one comes because my oldest started school. They both love/loved it! Lots of educating, crafts, and dancing! They do a great job with their daily schedule activities. When there’s no school for my oldest, Janet will always take him to the day. She’s very sweet and so is the rest of the staff. You can tell they love what they do!",
        name: "Monica Palacio",
      },
      {
        quote:
          "We absolutely love Learning Tree Family Child Care! Our little one is 2 years old and he loves it there too. It's a very safe and friendly environment and our child is learning a lot everyday. We couldn't be happier!",
        name: "James Inouye",
      },
    ],
    slideLabel: "Slide",
  },

  curriculum: {
    title: "Curriculum | Learning Tree Family Child Care",
    description: "",
    h1: "Comprehensive Curriculum Areas",
    intro:
      "Our curriculum is designed to engage children across multiple domains of learning, ensuring well-rounded development that prepares them for future academic success and life skills. Each curriculum area is carefully integrated into daily activities, providing children with rich, meaningful learning experiences that build upon their natural curiosity and developmental readiness. Through hands-on exploration and guided discovery, children develop strong foundational skills while maintaining their love of learning.",
    areas: [
      { title: "Practical Life", text: "Children develop self-help skills, learn to care for themselves and their environment, build social skills, and refine coordination through meaningful daily tasks and activities.", img: img("2e7c2670863c40e5aa82ebd156523767", "png", "Nature Exploration.png") },
      { title: "Sensorial and Cognitive", text: "Specialized activities refine observation skills, strengthen reasoning abilities, and build critical thinking through exploration of size, color, texture, and more.", img: img("c4f4b1032e2e4b61ab8ec42333b5f635", "jpg", "IMG_1910_jpg.jpg") },
      { title: "Language", text: "We foster verbal and written communication, early literacy skills, and introduce a second language through conversation, storytelling, and engaging language materials.", img: img("5cb2df76291e465c8e00203cfa2fd92b", "jpg", "") },
      { title: "Math", text: "Hands-on learning with counting, patterns, shapes, and problem-solving builds strong mathematical foundations and number sense in developmentally appropriate ways.", img: img("85dd4e7d5bc544e78d3ccd1f68e5da12", "jpg", "") },
      { title: "Music", text: "Through singing, rhythm, instruments, and movement, children explore creativity, self-expression, cultural appreciation, and develop auditory discrimination skills", img: img("43101fc57b064512b9702325c93e1da7", "jpg", "") },
      { title: "Science & Discovery", text: "Hands-on experiments, nature exploration, and early STEM activities nurture scientific thinking, curiosity about the world, and problem-solving skills.", img: img("c1cb2b3e605a404c8534adf0570834d8", "jpg", "IMG_1663_jpg.jpg") },
    ],
  },

  gallery: {
    title: "Gallery | Learning Tree Family Child Care",
    description: "",
    h1: "A Typical Day at Learning Tree",
    intro:
      "Each day at Learning Tree Family Child Care follows a thoughtful rhythm that balances structure with flexibility, active play with quiet time, and individual work with group activities. Our consistent daily schedule helps children feel secure while providing varied experiences that support all areas of development. Parents appreciate knowing what their child's day looks like and can observe through our Brightwheel app how their little one engages with different activities throughout the day.",
  },

  // Las 5 colecciones del portafolio, en el orden de Previous/Next del original.
  portfolio: [
    {
      slug: "creative-arts",
      title: "Creative Arts at Learning Tree: Best Daycare in Turlock for Kids' Creativity",
      h1: "Creative Arts",
      text: "Encourage creativity and self-expression through our diverse arts and crafts activities. Children have the opportunity to explore different art mediums and unleash their imagination.",
      cover: img("318d702bae40491686bc1e3b5e9eb96d", "jpg", "Child making a rainbow with dot markers"),
      items: [
        img("e064ddf7d8974ea3a8d9bda663eed487", "jpg", "Outdoor painting"),
        img("d4eff5d12d6a4ffabacdbaecb87c37d6", "jpg", "Outdoor painting with friends"),
        img("4ccb63da932c4bb1803a0a78864d688a", "jpg", "Enjoying outdoor art "),
        img("bc411b97af0947d7b849fb057f01b70a", "jpg", "Getting inspired by nature"),
        img("ffda5d99382348f1aed832a383d8d9df", "jpg", "Coloring outdoors for Easter"),
        img("d110688c25f647dba62ca538eb37e4f6", "jpg", "Coloring outdoors"),
        img("a7eaca93fdae4eb3aa47c1e00cec9200", "jpg", "tearing paper for fine motor skills"),
        img("f7f9d0125ab4429c99f9fbebc8326f79", "jpg", "Free coloring time, children coloring dinosaurs"),
      ],
    },
    {
      slug: "outdoor-adventures",
      title: "Outdoor Adventures at Learning Tree Family Child Care - Best Daycare in Turlock",
      h1: "Outdoor Adventures",
      text: "Embark on exciting outdoor adventures with our nature-based activities. From exploring the natural world to learning about the environment, children have the opportunity to connect with nature.",
      cover: img("1270c7a953aa4a26a5145d4ac6e5c3d9", "jpg", "Children looking up at a tree outdoors."),
      items: [
        img("fc806b0f66444171a7ff7070f17f7fcc", "jpg", "Children playing with toys outdoors."),
        img("2e7c2670863c40e5aa82ebd156523767", "png", "Logo with stylized leaf and circle design."),
        img("ae91f09488484ec59326aa0e5fac14f5", "jpg", "Children playing outside with toys and play structures."),
        img("749115e6590a485799ccd53a27c4fea2", "jpg", "Children playing with sand and water in a tub."),
        img("a884a01a679446e1ac8dcd0d7d3f2af3", "jpg", "Children playing outside with toys and bikes."),
        img("d05b39a7732844f8ac406d70330ecd8d", "png", "Image 1: Colorful, abstract geometric shapes and patterns. Image 2: Child pulling a toy wagon with colorful items."),
        img("a98388b80f9f42589504f9a0b4aff382", "jpg", "Children playing in an outdoor playground setting."),
        img("3bfef33afefa492f8f2e4782000ec0a7", "jpg", "Tree with dense foliage and people underneath."),
        img("cbd2088e86d6461abdf5957627716a3b", "jpg", "Children playing with a water table outdoors."),
        img("f14d5855676b43ecbff829842b826710", "jpg", "Children playing with water and colorful toys outside."),
      ],
    },
    {
      slug: "memorable-moments",
      title: "Memorable Moments - Best Daycare in Turlock | Learning Tree Family Child Care",
      h1: "Memorable Moments",
      text: "Capture the special memorable moments and memories created at our family child care center. From celebrations to learning milestones, every day is filled with joy and growth.",
      cover: img("63e7113bd79a4be1aff057d7743a6e66", "jpg", "Children lying on colorful blankets in a circle."),
      items: [
        img("3ecd7299242644cabaf8208b7081f4d8", "jpg", "Two children smiling while playing in a toy car."),
        img("a8782cb5b2a94bd0bafe4ff7e659af91", "jpg", "Two children with cupcakes and party hats."),
        img("0a7cdfcc589643d894badeff0d9d54ab", "jpg", "Children enjoying a party at a decorated table."),
        img("8e3f043338ed42cbbe6e1717806fa179", "jpg", "Children eating together at a table."),
        { video: "cf2281378a5d4de48bb85bc30de42b33" },
        img("f59114779b824f61b3654b187f64f7d4", "jpg", "Child wearing heart glasses with cupcake and candles."),
        img("0b97bcdac72e4f4186f1eb7aac0d8a13", "jpg", "Smiling baby in a red shirt, sitting happily."),
        img("0dad84f9f39b4938a82d434b129fc4c5", "jpg", "Child wearing a \"Happy New Year\" paper hat."),
        img("a6266bd9d82e4d6188f6da58049aaba7", "jpg", "Child holding colorful popsicles, smiling indoors."),
      ],
    },
    {
      slug: "our-facility",
      title: "Our Facility | Best Daycare in Turlock - Learning Tree Family Child Care",
      h1: "Our Facility",
      text: "Take a virtual tour of our family child care facility. Our safe and welcoming environment is designed to provide a nurturing space for children to learn, grow, and have fun.",
      cover: img("0a98a668bb0a44e7903191952c490a64", "jpg", "Colorful classroom with mats and educational materials."),
      items: [
        img("171c10e6ee5943b8b4ecd725a4cb07b2", "jpg", "Cozy children's room with toys and books."),
        img("74be4cf249df4c0b88ce5b67ea5113c7", "jpg", "Colorful nursery with cribs and play area."),
        img("c702aed0911647cba3760c7f91debcfa", "jpg", "Colorful children's play area with toys and cushions."),
        img("afef6c904b8f401589017600bfcdb277", "jpg", "Nursery room with cribs and wall decorations."),
        img("f80ad785953a432191570c7c10b5d597", "jpg", "Green wall with Dinosaur heads"),
        img("38796d3f6a154b479108d98d95501989", "jpg", "Outdoor Play area"),
        img("b360f9f24a9045cc8c1c5251ec38eaaa", "jpg", "Dinosaur set-up  in chimney"),
      ],
    },
    {
      slug: "fun-activities",
      title: "Fun Activities | Best Daycare in Turlock | Learning Tree Family Child Care",
      h1: "Fun Activities",
      text: "Explore the exciting and fun activities we offer for children to learn and play. From arts and crafts to outdoor adventures, there's something for every child to enjoy.",
      cover: img("a76a73efd6a644c8b5bc04b9be94c687", "jpg", "Two children smiling, playing with colorful building blocks."),
      items: [
        img("19ccdd81b9204991aef7c96cb81d2276", "png", "Child playing with dinosaurs."),
        img("0bcb40191b854042ab4b2ce09a622a8c", "jpg", "Children playing with colorful beads at a table."),
        img("561e71093e574a73a274e6e595682f87", "jpg", "Child playing with colorful building blocks indoors."),
        img("50254d5848ed4b339fc4068f1525bd24", "jpg", "Child playing with toy construction vehicle indoors."),
        img("a355831ac04044b0b2ced5b8bcc0f6a5", "jpg", "Child playing with colorful educational materials on floor."),
        img("2c4797ae32e649159fae09e6972ec194", "jpg", "Child playing in a colorful, educational playroom."),
        img("0d302e8575484a0daf3703a6f849053c", "jpg", "Children reading colorful picture books together."),
        img("c4f4b1032e2e4b61ab8ec42333b5f635", "jpg", "Two children playing with toys outdoors."),
        img("4e582eb3299f411baeec3982e23b6bc6", "jpg", "Children playing with sensory materials in a blue bin."),
        img("90b7a7fa26484f75ba7816f49ac4b76b", "jpg", "Two children playing with a colorful toy flower."),
      ],
    },
  ],

  admissions: {
    title: "Admissions & Enrollment | Learning Tree Family Child Care Turlock, CA",
    description: "",
    h1: "How to Get Started",
    intro:
      "Selecting the right childcare for your child is one of the most important decisions you'll make as a parent. We've designed our admissions process to be simple, transparent, and welcoming, making it easier for families to join the Learning Tree community. We encourage you to visit our facility, meet our dedicated staff, observe our classrooms in action, and experience firsthand the warm, nurturing environment where your child will learn and grow. Spaces in our programs fill quickly throughout the year, so we recommend starting the process early to secure your preferred enrollment date.",
    img: img("0d302e8575484a0daf3703a6f849053c", "jpg", "Children enjoying reading time at Learning Tree"),
    steps: [
      { n: "1", title: "Book a Tour", text: "Schedule a personalized visit to see our classrooms, meet our experienced staff, and experience our nurturing environment firsthand. Ask questions and see how we bring our philosophy to life." },
      { n: "2", title: "Submit Your Application", text: "Complete your online application through our secure enrollment system, provide all required documentation, and pay the enrollment fee for a seamless enrollment experience. Early submission offers the best opportunity to secure your preferred start date." },
      { n: "3", title: "Secure Your Child's Enrollment", text: "Upon acceptance, a one-month tuition deposit is required to hold your child's spot. This deposit will be applied toward your child's last month of tuition. Payment should be made promptly to guarantee placement." },
      { n: "4", title: "Join Our Community", text: "Connect with us on social media, attend orientation, and become part of the Learning Tree family. Stay informed about events, activities, updates, and your child's daily adventures." },
    ],
    touchImg: img("99620a21988e4612a080c8bf21909b82", "jpg", "IMG_3307_jpg.jpg"),
    touchH2: "Get in Touch",
    touchButton: "Schedule a Tour Today!",
  },

  enrollment: {
    title: "Enrollment | Learning Tree Family Child Care",
    description: "",
    img: img("1270c7a953aa4a26a5145d4ac6e5c3d9", "jpg", "IMG_3302_jpg - Edited.jpg"),
    h1: "Welcome to the Next Step",
    introLines: [
      "We’re so happy you’ve taken the time to tour Learning Tree Family Child Care and get to know our program.",
      "We look forward to welcoming your family into our community.",
    ],
    clickHere: "Click Here",
    howH2: "HOW TO ENROLL",
    steps: [
      { title: "Step 1: Click the Enrollment Button", link: true, text: ["Click the Start Enrollment button below to open our secure enrollment system and access the enrollment package."] },
      { title: "Step 2: Complete the Forms", text: ["Please fill out all required forms and upload any requested documents."] },
      { title: "Step 3: Submit & Pay Enrollment Fee", text: ["Review your information, submit your forms, and pay the $60 enrollment fee in our secure enrollment system.", "Please note: The enrollment fee is required to process your application and does not guarantee a spot."] },
      { title: "Step 4: Enrollment Confirmation", text: ["Once your forms are reviewed, we will contact you to confirm availability and your child’s official start date."] },
    ],
    needH2: "What You’ll Need",
    needIntro: "To make the process easier, please have the following ready:",
    needList: [
      "Child’s basic information",
      "Parent/guardian contact information",
      "Emergency contacts",
      "Medical information",
      "Required signed forms",
    ],
    immunizations: "Inmunizations",
    immunizationsButton: "(Click for more information)",
    // Ventana de vacunas (copiada de Wix en inglés, 26 nov 2026).
    vaccines: {
      close: "Back to site",
      tabs: [
        {
          label: "Vaccines",
          intro: "Vaccines:",
          rows: [["Polio", 4], ["DTaP", 5], ["MMR", 2], ["Hib", 4], ["Hepatitis B", 3], ["Varicella", 2]],
        },
        {
          label: "Dosis",
          list: [
            "Polio – at least three dosed (if the third or last dose was given before two years of age one additional dose is required)",
            "DTaP/TD – at least four doses (if the fourth or last dose was given before two years of age one additional dose is required)",
            "MMR (Measles, Mumps and Rubella) – one dose of each on or after the first birthday",
            "Hib & HepB – third dose at least four months after the first dose",
            "Varicella – on or after first birthday",
            "Booster Polio, DTaP and MMR between four to five years old",
          ],
        },
      ],
    },
    startH2: "Start your Enrollment Process",
    startLines: [
      "You’re just a few steps away from joining the Learning Tree family.",
      "Please complete your enrollment through our secure system to get started.",
    ],
    startNote: "All required forms, documents, and the $60 enrollment fee are completed in our secure enrollment system for a smooth and simple experience.",
    enrollButton: "Start Enrollment",
  },

  contact: {
    title: "Contact Us - Learning Tree Family Child Care in Turlock, CA",
    description: "",
    h1: "Get in Touch",
    kicker: "We’re Here for You",
    intro: "Feel free to reach out with any inquiries. Our team is dedicated to providing you with the information and support you need.",
    formTitle: "Contact us",
    fields: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone",
      childAge: "Child's age",
      childAgeOptions: ["Infant (6 weeks - 12 months)", "Toddler (18 - 36 months)", "Preschool (3 - 6 years)", "More than one child"],
      chooseOption: "Choose an option.",
      startDate: "Desired start date",
      startDatePlaceholder: "Choose a date",
      heard: "How did you hear about us?",
      heardOptions: ["Google", "Instagram or Facebook", "Friend or family", "Drove by / neighborhood"],
      message: "Anything else you would like us to know?",
      submit: "Request Info",
    },
    hours: [
      { title: "Daycare Hours", lines: ["Monday- Friday", "7:00 am - 11:00 pm"] },
      { title: "Office Hours", lines: ["Monday- Friday", "10:00 am - 4:00 pm"] },
    ],
    img: img("8e526c0a7d0746af97379ed46e144278", "jpg", "Every day is an adventure at Learning Tree"),
    tourH3: "Schedule an Orientation Tour",
    tourButton: "Schedule a Tour",
  },

  thanks: {
    title: "Thank you | Learning Tree Family Child Care",
    h1: "Thank you!", // TODO: confirmar el mensaje que Wix muestra después de enviar el formulario
    text: "We received your message and will get back to you soon.",
    back: "Back to Home",
  },

  notFound: {
    title: "Page Not Found | Learning Tree Family Child Care",
    h1: "Page Not Found",
    text: "The page you are looking for doesn’t exist.",
    back: "Back to Home",
  },
};
