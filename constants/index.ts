// Navegación de la landing de scroll: anclas a las secciones (en español).
export const navbarData = [
    { title: "Inicio", href: "#inicio" },
    { title: "Experiencia", href: "#experiencia" },
    { title: "Proyectos", href: "#proyectos" },
    { title: "Servicios", href: "#servicios" },
    { title: "Contacto", href: "#contacto" },
];

// Stack principal curado para el hero (match rápido para reclutadores)
export const topSkillsData = [
    "Node.js",
    "Next.js",
    "TypeScript",
    "Python",
    "MySQL",
    "Docker",
    "IA / LLMs",
];

export const experienceData = [
    {
        role: "Analista Funcional y Desarrollador Full Stack",
        company: "Soluciones Tecnológicas Pissis SpA",
        period: "Ene 2025 - May 2026",
        description:
            "Desarrollé y desplegué PRISMA en producción, una plataforma web empresarial para la gestión de encuestas corporativas y el análisis organizacional. Construida con Node.js/Express 5, MySQL, EJS y Tailwind CSS bajo una arquitectura MVC extendida. Implementé Firebase Auth con RBAC, integré un Toolkit de clasificación masiva con IA (Claude vía OpenRouter), creé dashboards interactivos con D3.js y desarrollé scripts avanzados en Python y pipelines ETL con embeddings locales.",
        highlights: [
            "Node.js",
            "Express",
            "MySQL",
            "EJS",
            "Firebase Auth",
            "Docker Compose",
            "D3.js",
            "Python",
            "Sentence Transformers",
            "LLMs",
        ],
    },
    {
        role: "Desarrollador Web Full Stack (Freelance)",
        company: "Desarrollo Independiente",
        period: "Mar 2024 - Presente",
        description:
            "Diseñé y desarrollé el sitio de reservas del hostal Damme Jeanne (Node.js, EJS, Google Calendar API). Construí la plataforma web integral para Escuela Roquer. Desarrollé la landing page de China Business Bridge. Implementé SEO, certificados SSL y medidas de seguridad en todos los proyectos.",
        highlights: [
            "Node.js",
            "Express",
            "EJS",
            "Optimización SEO",
            "Seguridad y SSL",
            "Diseño responsivo",
        ],
    },
    {
        role: "Desarrollador de Proyecto de Título",
        company: "Universidad Andrés Bello",
        period: "Mar 2023 - Oct 2023",
        description:
            "Diseñé y desarrollé una WebApp de gestión de asistencia usando Next.js, Tailwind CSS, NextAuth y MongoDB. Implementé autenticación segura, gestión de usuarios y funcionalidades CRUD. Apliqué metodologías ágiles como Scrum para la planificación y el seguimiento. Creé documentación, casos de uso y modelado de procesos con BPMN usando Bizagi.",
        highlights: [
            "Next.js",
            "Tailwind CSS",
            "NextAuth",
            "MongoDB",
            "Modelado BPMN",
            "Bizagi",
            "Metodologías ágiles",
            "Autenticación",
        ],
    },
    {
        role: "Desarrollador Front-End Junior",
        company: "Tesseract Softwares",
        period: "Oct 2021 - Mar 2022",
        description:
            "Aprendí React para desarrollar una landing page desde el diseño hasta la integración de APIs. Diseñé interfaces responsivas con Bootstrap y Styled Components. Participé en flujos ágiles usando Scrum y Azure Boards. Realicé pruebas unitarias en React y colaboré con el equipo de diseño para implementar funcionalidades clave. Utilicé Azure DevOps para el control de versiones y la gestión del backlog.",
        highlights: [
            "React.js",
            "Bootstrap",
            "Styled Components",
            "Azure Boards",
            "Scrum",
            "Pruebas unitarias",
            "Integración de APIs",
            "Azure DevOps",
        ],
    },
];

export const skillsData = [
    {
        name: "Lenguajes y Frameworks",
        skills: [
            "JavaScript",
            "TypeScript",
            "Python",
            "Node.js",
            "Express.js",
            "Next.js",
            "React",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "EJS",
        ],
    },
    {
        name: "Bases de Datos y ORM",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM"],
    },
    {
        name: "IA y Datos",
        skills: [
            "LLMs (Claude/OpenRouter)",
            "Sentence Transformers",
            "D3.js",
            "Pandas",
            "scikit-learn",
            "Pipelines ETL",
        ],
    },
    {
        name: "Herramientas y DevOps",
        skills: [
            "Git",
            "GitHub",
            "Docker",
            "Docker Compose",
            "Firebase Auth",
            "APIs REST",
            "CI/CD",
            "SSH/rsync",
        ],
    },
    {
        name: "Metodologías",
        skills: [
            "Agile",
            "Scrum",
            "Patrones de Diseño",
            "Patrones de Arquitectura",
            "Clean Code (SOLID)",
        ],
    },
];

export const educationData = [
    {
        degree: "Ingeniero Civil Informático",
        institution: "Universidad Andrés Bello",
        period: "Titulado Dic 2023",
        description:
            "Ingeniero Civil Informático con una sólida base en ciencias de la computación e ingeniería informática, enfocado en la optimización de procesos, el desarrollo de software y la gestión de bases de datos.",
        achievements: [
            "Gestión de procesos con BPM, BPMN y Bizagi",
            "Metodologías ágiles: Scrum y design thinking",
            "Diseño y gestión de bases de datos SQL y NoSQL",
            "Aplicaciones web seguras con Next.js y MongoDB",
        ],
    },
];

// Proyectos del portafolio (migrados desde la antigua página Work, en español).
// La imagen se referencia por ruta pública para que ProjectCard la cargue con
// next/image (fill) sin acoplar imports estáticos a este archivo de datos.
// `featured: true` se muestra siempre en la grilla; el resto (proyectos más
// antiguos) queda detrás del toggle "Ver proyectos anteriores".
export const projectsData = [
    {
        id: "04",
        title: "MoccadevAI Companion",
        category: "IA & Full Stack",
        description:
            "Agente de IA personal con backend LLM local en FastAPI async. Frontend HTML/JS con un avatar 3D animado (VRM) que expresa emociones según las respuestas de la IA, más tool calling para búsqueda web y acceso a archivos locales.",
        stack: ["Python", "FastAPI", "Three.js", "LLM", "Tool Calling"],
        image: "/images/projectNine.png",
        liveUrl: "",
        githubUrl: "https://github.com/MoccadevLabs/moccadev-agent",
        featured: true,
    },
    {
        id: "02",
        title: "Sistema de Login y Gestión de Usuarios",
        category: "Full Stack / Auth",
        description:
            "Sistema robusto de autenticación, login y gestión de usuarios y organizaciones, pensado como arquitectura base reutilizable para futuras aplicaciones. Construido en un entorno Turborepo con Next.js, Prisma ORM, PostgreSQL y Firebase Auth.",
        stack: ["Next.js 15", "Turborepo", "Prisma", "PostgreSQL", "Firebase Auth"],
        image: "/images/projectSeven.png",
        liveUrl: "",
        githubUrl: "https://github.com/Blacklifth/control-de-gastos",
        featured: true,
    },
    {
        id: "03",
        title: "Damme Jeanne Booking",
        category: "Full Stack",
        description:
            "Sitio de reservas completo para el hostal Damme Jeanne. Disponibilidad en tiempo real, sincronización bidireccional con Google Calendar y Booking.com vía iCal, confirmaciones automáticas con NodeMailer y rutas seguras con Helmet/CSRF.",
        stack: ["Node.js", "Express", "EJS", "Google Calendar API"],
        image: "/images/projectEight.png",
        liveUrl: "https://damejeanne.cl/",
        githubUrl: "https://github.com/Blacklifth/dame-jeanne",
        featured: true,
    },
    {
        id: "01",
        title: "Telegram Link Scraper",
        category: "Backend / OSINT",
        description:
            "Herramienta CLI y panel web para descubrir canales públicos de Telegram mediante scraping híbrido (Axios/Puppeteer) y expansión semántica con IA vía Google Autocomplete. Rotación de User-Agent y métricas en tiempo real, sin usar la API oficial de Telegram.",
        stack: ["TypeScript", "Node.js", "Puppeteer", "Express"],
        image: "/images/projectSix.png",
        liveUrl: "",
        githubUrl: "https://github.com/Blacklifth/telegram-link-discovery",
        featured: true,
    },
    {
        id: "05",
        title: "Landing Page Escuela Roquer",
        category: "Front End",
        description:
            "Rediseño del sitio oficial de Escuela Roquer con Node.js y Express. Diseño totalmente responsivo con CSS vanilla y automatización de correos con NodeMailer, mejorando la presencia online de la institución.",
        stack: ["Node.js", "Express", "Vanilla CSS", "NodeMailer"],
        image: "/images/projectOne.png",
        liveUrl: "https://escuelaroquer.com/",
        githubUrl: "https://github.com/Blacklifth/web-roquer",
        featured: false,
    },
    {
        id: "06",
        title: "Landing Page Peonetas Chile",
        category: "Front End",
        description:
            "Landing mobile-first y optimizada para SEO para Peonetas Chile. Backend con Node.js y Express, diseño responsivo en CSS vanilla e integración de correos con NodeMailer para agilizar las consultas de usuarios.",
        stack: ["Node.js", "Express", "Vanilla CSS", "NodeMailer"],
        image: "/images/projectTwo.png",
        liveUrl: "https://www.peonetaschile.com/",
        githubUrl: "https://github.com/Blacklifth/Hemmopeonetas",
        featured: false,
    },
    {
        id: "07",
        title: "Gestión de Instrumentos",
        category: "Full Stack",
        description:
            "Aplicación full-stack para gestionar y rastrear instrumentos. Frontend dinámico en React, backend escalable con Prisma y MongoDB e interfaz moderna con MaterialUI. Operaciones CRUD robustas para una gestión de datos eficiente.",
        stack: ["React", "Prisma", "MongoDB", "MaterialUI"],
        image: "/images/projectThree.png",
        liveUrl: "",
        githubUrl:
            "https://github.com/Blacklifth/papageno-inventory/tree/development",
        featured: false,
    },
    {
        id: "08",
        title: "Gestión de Asistencia",
        category: "Full Stack",
        description:
            "WebApp segura de gestión de asistencia desarrollada como proyecto de título. Next.js para un frontend optimizado, Tailwind CSS para diseño responsivo, NextAuth con JWT para autenticación y MongoDB como base de datos.",
        stack: ["Next.js 14", "React", "NextAuth", "JWT", "Tailwind", "MongoDB"],
        image: "/images/projectFour.png",
        liveUrl: "https://pt-app-deploy-ten.vercel.app/login",
        githubUrl: "https://github.com/Blacklifth/ptApp-deploy",
        featured: false,
    },
    {
        id: "09",
        title: "Portfolio Personal",
        category: "Front End",
        description:
            "Sitio de portafolio personal construido con Next.js y React. Diseñado con Tailwind CSS para una estética pulida y responsiva, con animaciones fluidas usando Motion.",
        stack: ["Next.js 14", "React", "Tailwind", "Motion"],
        image: "/images/projectFive.png",
        liveUrl:
            "https://myportfolio-jzf3to0je-blacklifths-projects.vercel.app/",
        githubUrl: "https://github.com/Blacklifth/myportfolio",
        featured: false,
    },
];

// Servicios ofrecidos (curados a 3, en español, alineados al perfil real).
// `icon` es una clave que ServicesSection mapea a un ícono de lucide,
// manteniendo los datos puros (sin acoplar componentes a este archivo).
export const servicesData = [
    {
        id: "01",
        title: "Desarrollo Web Full-Stack",
        description:
            "Sitios y plataformas a medida con Node.js, Next.js y React: responsivos, seguros y optimizados para SEO.",
        icon: "code",
    },
    {
        id: "02",
        title: "Integración de IA / LLMs",
        description:
            "Incorporo capacidades de IA a tu producto: clasificación, agentes y RAG con LLMs vía API, más automatización inteligente.",
        icon: "ai",
    },
    {
        id: "03",
        title: "Automatización y Datos",
        description:
            "Scripts en Python, pipelines ETL y visualización de datos con D3.js para optimizar procesos y decisiones.",
        icon: "data",
    },
];
