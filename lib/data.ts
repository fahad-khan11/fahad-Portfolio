export const SITE_URL = "https://fahadfarman.me"

export const profile = {
  name: "Fahad Farman",
  role: "Full Stack Engineer",
  headline: "Building AI-powered apps & SaaS products that deliver results.",
  summary:
    "Full-Stack Engineer with 2 years of practical experience engineering, shipping, and maintaining production SaaS and business web applications using React.js, Next.js, Node.js, NestJS, and TypeScript. I architect RESTful APIs, integrate third-party services, build real-time systems with WebSockets/WebRTC, and optimize relational and document databases.",
  location: "Islamabad, Pakistan",
  email: "fahadfarman00@gmail.com",
  phone: "+92 340 6218617",
  whatsapp: "https://wa.me/923406218617",
  linkedin: "https://www.linkedin.com/in/fahadfarman/",
  github: "https://github.com/fahad-khan11",
  cv: "/cv/Fahad-Farman-CV.pdf",
  photo: "/fahad-farman-portrait.jpg",
  rotatingRoles: ["SaaS Products", "AI Integrations", "Real-Time Apps", "Scalable APIs"],
}

export const stats = [
  { value: 2, suffix: "+", label: "Years shipping" },
  { value: 15, suffix: "+", label: "Projects delivered" },
  { value: 20, suffix: "", label: "Certifications" },
  { value: 40, suffix: "+", label: "Technologies" },
]

export type Experience = {
  file: string
  company: string
  role: string
  location: string
  period: string
  current?: boolean
  points: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    file: "firnas-tech.role",
    company: "Firnas.tech",
    role: "Full Stack Engineer",
    location: "Abbottabad, Pakistan",
    period: "Mar 2025 — Present",
    current: true,
    points: [
      "Engineer and maintain responsive frontend modules and scalable backend services with Next.js, React.js, NestJS and Node.js across live production SaaS platforms.",
      "Design and implement RESTful APIs using NestJS and TypeORM, managing PostgreSQL and MongoDB data for production business workflows.",
      "Integrate JWT authentication, Role-Based Access Control (RBAC), and third-party payment and notification services across client and admin portals.",
      "Deliver customer-facing features including booking workflows, administrative dashboards, and third-party integrations.",
    ],
    stack: ["Next.js", "NestJS", "TypeORM", "PostgreSQL", "MongoDB", "RBAC"],
  },
  {
    file: "softwareforge.role",
    company: "SoftwareForge",
    role: "Full Stack Developer",
    location: "Remote · Rawalpindi, Pakistan",
    period: "Jan 2026 — Apr 2026",
    points: [
      "Developed client-facing web applications using Next.js server-side rendering and static generation with a Strapi headless CMS backend.",
      "Integrated Strapi REST APIs for dynamic content delivery, state synchronization, and page generation across structured workflows.",
      "Delivered Next.js features independently in a fully remote environment.",
    ],
    stack: ["Next.js", "Strapi", "SSR / SSG", "REST APIs"],
  },
  {
    file: "firnas-tech.internship",
    company: "Firnas.tech",
    role: "Web Developer Intern",
    location: "Abbottabad, Pakistan",
    period: "Dec 2024 — Mar 2025",
    points: [
      "Implemented responsive UI components with React.js and Tailwind CSS, connecting client views to backend REST API routes.",
      "Assisted senior engineers in designing MongoDB document schemas and PostgreSQL table structures.",
      "Contributed to a live production codebase within 2 weeks of joining.",
    ],
    stack: ["React.js", "Tailwind CSS", "MongoDB", "PostgreSQL"],
  },
]

export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  points?: string[]
  image?: string
  stack: string[]
  link?: string
  featured?: boolean
  /** Case-study fields */
  role: string
  company: string
  category: string
  overview: string
  users: string[]
  built: string[]
  integrations?: string[]
}

export const projects: Project[] = [
  {
    slug: "aeronaa",
    title: "Aeronaa",
    tagline: "Global Travel Booking SaaS Platform",
    description:
      "Full-stack modules for an international travel platform covering flights, hotels, car rentals and Umrah packages across User, Vendor and Admin portals.",
    points: [
      "Akbar Travel API integration for flight & hotel search-to-booking",
      "Stripe payments with automated SMTP receipts and invoices",
    ],
    image: "/projects/aeronaa.webp",
    stack: ["Next.js", "NestJS", "Tailwind CSS", "PostgreSQL", "Stripe", "Akbar Travel API", "SMTP"],
    link: "https://www.aeronaa.com/",
    featured: true,
    role: "Full-Stack Engineer",
    company: "Firnas.tech",
    category: "Travel · Booking SaaS",
    overview:
      "Aeronaa is an international travel booking platform that brings flights, hotels, car rentals and Umrah packages into one product. I developed full-stack modules across its three portals, connecting third-party travel inventory to the platform's own booking, payment and notification flows.",
    users: ["User portal", "Vendor portal", "Admin portal"],
    built: [
      "Developed full-stack modules for flight, hotel, car rental and Umrah package management across the User, Vendor and Admin portals.",
      "Integrated the Akbar Travel API for flight and hotel search-to-booking workflows, connecting third-party travel data with the platform's booking modules.",
      "Connected Stripe payment gateways and SMTP email services for automated booking confirmation receipts and invoice dispatching.",
      "Built responsive layouts and interactive UI components for hotels, flights and rentals with clean, scalable frontend code for cross-device support.",
      "Collaborated closely with designers and the backend team to deliver a smooth end-to-end booking experience.",
    ],
    integrations: ["Akbar Travel API", "Stripe", "SMTP email"],
  },
  {
    slug: "routewise",
    title: "RouteWise",
    tagline: "Logistics & Fleet Management SaaS",
    description:
      "Multi-role dashboards for fleet management, route assignment, task scheduling, driver tracking and payroll reporting.",
    points: ["Real-time WebSocket chat inside role-based dashboards"],
    image: "/routewise.webp",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "WebSockets"],
    link: "https://www.goroutewise.com/",
    featured: true,
    role: "Next.js Engineer",
    company: "Firnas.tech",
    category: "Logistics · Fleet SaaS",
    overview:
      "RouteWise is a logistics management platform for fleet operators. I engineered its multi-role frontend: three distinct dashboards for Admins, Managers and Drivers, each tuned to how that role works, from data-rich admin views to a mobile-first driver experience.",
    users: ["Admin dashboard", "Manager dashboard", "Driver dashboard"],
    built: [
      "Engineered multi-role frontend dashboards for fleet management, route assignment, task scheduling, driver tracking and payroll reporting.",
      "Implemented real-time messaging between logistics users using WebSockets, integrating chat into the role-based Next.js dashboards.",
      "Built complex state management for fleet tracking, task scheduling and real-time status updates.",
      "Delivered a mobile-responsive experience for drivers alongside a data-rich interface for administrative management, using Tailwind CSS and shadcn/ui.",
    ],
    integrations: ["WebSockets"],
  },
  {
    slug: "vilsal-connect",
    title: "Vilsal Connect",
    tagline: "Real-Time Remote Interpretation Platform",
    description:
      "Connects clients with professional interpreters through dedicated Client, Interpreter and Admin portals.",
    points: [
      "WebRTC audio/video calling with Socket.IO signaling & ICE exchange",
      "Interpreter matching and session history in NestJS with JWT RBAC",
    ],
    stack: ["Next.js", "TypeScript", "NestJS", "Material UI", "React Query", "WebRTC", "Socket.IO", "PostgreSQL"],
    link: "https://connect.vilsal.app/",
    featured: true,
    role: "Full-Stack Engineer",
    company: "Firnas.tech",
    category: "Real-Time Communication",
    overview:
      "Vilsal Connect is a real-time remote interpretation platform that connects clients with professional language interpreters over live audio and video. I built both the real-time calling layer and the backend that routes requests, matches active interpreters and keeps session history.",
    users: ["Client portal", "Interpreter portal", "Admin portal"],
    built: [
      "Built a real-time remote interpretation platform connecting clients with professional language interpreters across dedicated Client, Interpreter and Admin portals.",
      "Implemented WebRTC audio/video calling with Socket.IO signaling, handling call initiation, ICE candidate exchange and session state management.",
      "Constructed backend request routing, active interpreter matching and session history management in NestJS, protected by JWT-based RBAC.",
      "Used React Query and Material UI on the frontend for responsive, server-state-driven portal screens.",
    ],
    integrations: ["WebRTC", "Socket.IO", "JWT RBAC"],
  },
  {
    slug: "squaredesk",
    title: "SquareDesk HRM",
    tagline: "HR Management SaaS Platform",
    description:
      "Role-based dashboards for attendance, PTO, payroll visualization and Provider 360 analytics.",
    points: ["React Query for server-state caching and dashboard sync"],
    stack: ["Next.js", "TypeScript", "Material UI", "React Query", "ApexCharts", "JWT"],
    link: "https://www.squareddesk.com/",
    featured: true,
    role: "Frontend / Full-Stack Engineer",
    company: "Firnas.tech",
    category: "HR · Analytics SaaS",
    overview:
      "SquareDesk is an HR management SaaS. I developed its responsive, role-based dashboards that turn attendance, leave and payroll data into clear visual analytics, backed by a cached, always-in-sync data layer.",
    users: ["Role-based dashboards"],
    built: [
      "Developed responsive role-based dashboards featuring employee attendance, PTO management and payroll visualization.",
      "Built Provider 360 analytics modules with ApexCharts.",
      "Integrated REST APIs using React Query to manage server-state fetching, caching and dashboard data synchronization.",
      "Secured dashboards with JWT-based authentication.",
    ],
    integrations: ["REST APIs", "ApexCharts", "JWT"],
  },
  {
    slug: "corporateasy",
    title: "Corporateasy",
    tagline: "Company Registration & Management",
    description:
      "Registration workflows with Admin and Corporate control panels, PostgreSQL-backed company management and Stripe payments.",
    image: "/corporate.png",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Stripe"],
    link: "https://corporateasy.com/",
    featured: true,
    role: "Full-Stack Engineer",
    company: "Firnas.tech",
    category: "Corporate Services",
    overview:
      "Corporateasy helps businesses register and manage their companies online. I built the registration experience end to end, from the multi-step form and Stripe checkout to the Admin and Company control panels and the NestJS/PostgreSQL backend behind them.",
    users: ["Admin panel", "Company panel"],
    built: [
      "Built company registration application workflows with Admin and Corporate user control panels using Next.js and NestJS.",
      "Implemented PostgreSQL-backed company management features.",
      "Integrated Stripe payments into registration and administrative workflows.",
      "Developed role-based access for Admin and Company panels, with backend logic for authentication, data management and payment workflows.",
    ],
    integrations: ["Stripe"],
  },
  {
    slug: "asrar",
    title: "Asrar",
    tagline: "Hotel & Booking Portal",
    description:
      "Hotel booking management with driver assignment, fare rules, booking status and CSV reporting, powered by NestJS APIs.",
    image: "/asrar.png",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "shadcn/ui"],
    link: "https://www.asrarbookingportal.online/",
    featured: true,
    role: "Full-Stack Engineer",
    company: "Firnas.tech",
    category: "Hospitality · Transport",
    overview:
      "Asrar is a booking portal where hotels book cars for their guests by submitting customer details. I built both sides: hotel-facing booking management, and an admin console for assigning drivers, managing fares and tracking every booking.",
    users: ["Hotel portal", "Admin portal"],
    built: [
      "Built hotel booking and management modules: hotels create and manage car bookings for their customers.",
      "Implemented admin features for driver assignment, fare rules, booking status updates and CSV exports/reporting.",
      "Developed NestJS backend APIs and PostgreSQL data models supporting booking management, fare handling and driver assignments.",
      "Secured the platform with authentication and role-based access; UI built with Next.js, Tailwind CSS and shadcn/ui.",
    ],
    integrations: ["CSV reporting", "RBAC"],
  },
  {
    slug: "sehatyar",
    title: "SehatYar",
    tagline: "Healthcare & Clinic Management",
    description:
      "Multi-clinic platform with appointments, EMR, AI-assisted summaries and billing for patients, doctors and admins.",
    image: "/sehatyar.png",
    stack: ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "TypeORM"],
    link: "https://sehatyar.vercel.app/",
    role: "Full-Stack Engineer",
    company: "Firnas.tech",
    category: "Healthcare",
    overview:
      "SehatYar is a digital healthcare and clinic management system serving patients, doctors, receptionists and admins. I developed modules across the product, from multi-clinic management and appointments to medical records, AI-assisted summaries and billing.",
    users: ["Patients", "Doctors", "Receptionists", "Admins"],
    built: [
      "Developed modules for authentication, multi-clinic management and appointments.",
      "Built electronic medical records (EMR), AI-assisted summaries and billing features.",
      "Frontend in Next.js and Tailwind CSS; backend in NestJS, PostgreSQL and TypeORM with secure APIs and role-based access control.",
    ],
    integrations: ["AI summaries", "RBAC"],
  },
  {
    slug: "gigjives",
    title: "Gigjives",
    tagline: "Project Management Tool",
    description:
      "Role-based modules for Super Admin, Admin, Manager and Employee with dashboards and task workflows.",
    image: "/gigjives.png",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    link: "https://gig-gives.vercel.app/",
    role: "Frontend Developer",
    company: "Firnas.tech",
    category: "Productivity",
    overview:
      "Gigjives is a project management tool with four levels of access. I built its role-based frontend modules, dashboards and task workflows with a focus on a smooth, intuitive experience.",
    users: ["Super Admin", "Admin", "Manager", "Employee"],
    built: [
      "Built role-based modules for Super Admin, Admin, Manager and Employee.",
      "Developed responsive dashboards, user management and task workflows.",
      "Implemented the UI with Next.js, Tailwind CSS and shadcn/ui.",
    ],
  },
  {
    slug: "shirka-noura",
    title: "Shirka Noura",
    tagline: "Appliance & AC Repair Website",
    description:
      "Fast marketing site for a Riyadh-based company with EmailJS lead forms and WhatsApp support.",
    image: "/shirkaNora.png",
    stack: ["Next.js", "shadcn/ui", "EmailJS"],
    link: "https://www.shirka-noura.com/",
    role: "Full-Stack Engineer (freelance)",
    company: "Client · Riyadh",
    category: "Business Website",
    overview:
      "Shirka Noura is an appliance and AC repair company in Riyadh. I developed their complete website, a fast, responsive marketing site designed to turn visitors into service requests.",
    users: ["Customers in Riyadh"],
    built: [
      "Developed the complete website using Next.js and shadcn/ui with responsive layouts and interactive UI components.",
      "Integrated EmailJS for contact forms and WhatsApp for instant customer support.",
      "Optimized performance with clean, scalable code for cross-device compatibility.",
    ],
    integrations: ["EmailJS", "WhatsApp"],
  },
]

export const skills: { group: string; dir: string; items: string[] }[] = [
  { group: "Languages & Tools", dir: "languages-tools", items: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "C++", "C", "Git", "GitHub", "Postman", "Swagger", "Jira", "Linux"] },
  {
    group: "Frontend",
    dir: "frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Material UI", "shadcn/ui", "React Query", "ApexCharts", "HTML5", "CSS3"],
  },
  {
    group: "Backend",
    dir: "backend",
    items: ["Node.js", "Express.js", "NestJS", "FastAPI", "Flask", "REST APIs", "TypeORM", "Strapi CMS"],
  },
  { group: "Databases & Security", dir: "databases-security", items: ["PostgreSQL", "MongoDB", "JWT", "OAuth 2.0", "RBAC"] },
  {
    group: "Real-Time & Integrations",
    dir: "realtime-integrations",
    items: ["WebRTC", "Socket.IO", "WebSockets", "Stripe", "Google Maps API", "Twilio", "SendGrid", "EmailJS"],
  },
  {
    group: "AI Engineering",
    dir: "ai-engineering",
    items: ["RAG Pipelines", "LangChain", "LangGraph", "OpenAI API", "AI Agents", "Model Context Protocol (MCP)", "CrewAI", "AutoGen", "Vector Databases", "Embeddings & Semantic Search", "LLM Fine-Tuning", "Transformers", "Prompt Engineering", "Multimodal GenAI"],
  },
]

export const techRows = [
  ["Next.js", "React", "TypeScript", "JavaScript", "Node.js", "NestJS", "Express.js", "Tailwind CSS", "Material UI", "React Query", "Python", "FastAPI"],
  ["PostgreSQL", "MongoDB", "TypeORM", "Socket.IO", "WebRTC", "Stripe", "OpenAI API", "LangChain", "Strapi CMS", "Docker", "Git", "Postman"],
]

export const marquee = [
  "Next.js", "React", "TypeScript", "NestJS", "Node.js", "PostgreSQL", "MongoDB", "WebRTC",
  "Socket.IO", "Stripe", "Tailwind CSS", "LangChain", "OpenAI", "FastAPI", "React Query", "TypeORM",
]

export const education = {
  school: "COMSATS University Islamabad",
  degree: "BS in Software Engineering",
  location: "Abbottabad, Pakistan",
  period: "Sep 2023 — Expected Jul 2027",
  coursework: [
    "Database Systems",
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "Web Engineering",
    "Machine Learning",
    "Operating Systems",
  ],
}

export const CERTS_URL = "https://www.linkedin.com/in/fahadfarman/details/certifications/"

export type Cert = { title: string; issuer: "IBM" | "Google" | "Vanderbilt University" | "Simplilearn"; date: string; id: string; topic: "Agentic AI" | "Generative AI" | "Machine Learning" | "Development" }

/** All certifications, newest first (from LinkedIn). */
export const certifications: Cert[] = [
  { title: "Build AI Agents using MCP", issuer: "IBM", date: "Oct 2026", id: "9C154S1MDWZ9", topic: "Agentic AI" },
  { title: "Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI", issuer: "IBM", date: "Oct 2026", id: "UVMNB08CEJY6", topic: "Agentic AI" },
  { title: "Agentic AI with LangChain and LangGraph", issuer: "IBM", date: "Oct 2026", id: "HSIK1B38X5S4", topic: "Agentic AI" },
  { title: "Fundamentals of Building AI Agents", issuer: "IBM", date: "Oct 2026", id: "4GRT5MT3K0LY", topic: "Agentic AI" },
  { title: "Build Multimodal Generative AI Applications", issuer: "IBM", date: "Oct 2026", id: "NHRM5G80IFZC", topic: "Generative AI" },
  { title: "Vector Databases for RAG: An Introduction", issuer: "IBM", date: "Oct 2026", id: "KE1SAUWBOVCJ", topic: "Generative AI" },
  { title: "Develop Generative AI Applications: Get Started", issuer: "IBM", date: "Oct 2026", id: "L54O3PNO6IJJ", topic: "Generative AI" },
  { title: "Project: Generative AI Applications with RAG and LangChain", issuer: "IBM", date: "Sep 2026", id: "1BPN200XCXIT", topic: "Generative AI" },
  { title: "Fundamentals of AI Agents Using RAG and LangChain", issuer: "IBM", date: "Sep 2026", id: "A47UM3IMM7SS", topic: "Agentic AI" },
  { title: "Generative AI Advanced Fine-Tuning for LLMs", issuer: "IBM", date: "Sep 2026", id: "MI21AM5RMV3N", topic: "Generative AI" },
  { title: "Generative AI Engineering and Fine-Tuning Transformers", issuer: "IBM", date: "Sep 2026", id: "CN41D5TPGCJV", topic: "Generative AI" },
  { title: "Generative AI Language Modeling with Transformers", issuer: "IBM", date: "Sep 2026", id: "7Q5UTQI17F56", topic: "Generative AI" },
  { title: "Gen AI Foundational Models for NLP & Language Understanding", issuer: "IBM", date: "Aug 2026", id: "OQID81QTGKVK", topic: "Generative AI" },
  { title: "Generative AI and LLMs: Architecture and Data Preparation", issuer: "IBM", date: "Aug 2026", id: "WN6LE3BC40U3", topic: "Generative AI" },
  { title: "Introduction to Deep Learning & Neural Networks with Keras", issuer: "IBM", date: "Aug 2026", id: "E7W3R3BII71Q", topic: "Machine Learning" },
  { title: "Prompt Engineering for ChatGPT", issuer: "Vanderbilt University", date: "Jul 2026", id: "ONCLLV1AYYFF", topic: "Generative AI" },
  { title: "Machine Learning with Python", issuer: "IBM", date: "Jun 2026", id: "T43Y636HFQZI", topic: "Machine Learning" },
  { title: "Crash Course on Python", issuer: "Google", date: "Mar 2026", id: "PBNXD35TCZOJ", topic: "Development" },
  { title: "Introduction to AI", issuer: "Google", date: "Feb 2026", id: "MA6ESPI2SFXE", topic: "Machine Learning" },
  { title: "Full Stack Developer Course", issuer: "Simplilearn", date: "Nov 2025", id: "9362618", topic: "Development" },
]
