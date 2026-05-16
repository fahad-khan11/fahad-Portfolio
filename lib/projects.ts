export type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  featured: boolean
  link: string
  location?: string
}

/** Order matches FahadCV.pdf — Projects Completed section */
export const projects: Project[] = [
  {
    title: "RouteWise – Logistics & Route Optimization SaaS",
    description:
      "Worked as a Next.js Developer on RouteWise, a logistics management platform. Developed three distinct role-based dashboards for Admins, Managers, and Drivers. Implemented complex state management for fleet tracking, task scheduling, and real-time status updates. Built the frontend using Next.js, Tailwind CSS, and shadcn UI, ensuring a mobile-responsive experience for drivers and a data-rich interface for administrative management.",
    image: "/routewise.webp",
    technologies: ["Next.js", "Tailwind CSS", "shadcn UI", "State Management"],
    featured: true,
    link: "#",
    location: "Firnas.tech, Abbottabad",
  },
  {
    title: "Aeronaa – Hotel Booking Website",
    description:
      "Worked as a Frontend Developer on Aeronaa, a travel booking platform. Built responsive layouts and interactive UI components for hotels, flights, and rentals. Optimized performance with clean, scalable frontend code for cross-device support. Collaborated with designers and backend team to deliver a smooth user experience.",
    image: "/aeronaa.png",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Authentication"],
    featured: true,
    link: "https://aeronaa.com/",
    location: "Firnas.tech, Abbottabad",
  },
  {
    title: "Corporateasy – Company Registration & Management Platform",
    description:
      "Worked as a Full-Stack Developer on Corporateasy, building the company registration form and integrating Stripe for secure payments. Developed Admin and Company panels with role-based access using Next.js and Tailwind CSS, while implementing backend logic in NestJS and PostgreSQL for authentication, data management, and payment workflows.",
    image: "/corporate.png",
    technologies: ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "Stripe"],
    featured: true,
    link: "https://corporateasy.com/",
    location: "Firnas.tech, Abbottabad",
  },
  {
    title: "SehatYar – Digital Healthcare & Clinic Management System",
    description:
      "Worked as a Full-Stack Developer on SehatYar, a healthcare platform for patients, doctors, receptionists, and admins. Developed modules for authentication, multi-clinic management, appointments, electronic medical records (EMR), AI-assisted summaries, and billing. Built the frontend with Next.js and Tailwind CSS, and the backend with NestJS, PostgreSQL, and TypeORM, ensuring secure APIs and role-based access control.",
    image: "/sehatyar.png",
    technologies: ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "TypeORM", "AI"],
    featured: true,
    link: "https://sehatyar.vercel.app/",
    location: "Firnas.tech, Abbottabad",
  },
  {
    title: "Gigjives – Project Management Tool",
    description:
      "Worked as a Frontend Developer on Gigjives – Project Management Tool, building role-based modules for Super Admin, Admin, Manager, and Employee. Developed responsive dashboards, user management, and task workflows using Next.js, Tailwind CSS, and shadcn UI, ensuring a smooth and intuitive user experience.",
    image: "/gigjives.png",
    technologies: ["Next.js", "Tailwind CSS", "shadcn UI"],
    featured: true,
    link: "https://gig-gives.vercel.app/",
    location: "Firnas.tech, Abbottabad",
  },
  {
    title: "Shirka Noura – Appliance & AC Repair Website",
    description:
      "Developed the complete website using Next.js and shadcn/ui, with responsive layouts and interactive UI components. Integrated EmailJS for contact forms and WhatsApp for instant customer support. Optimized performance with clean, scalable code for cross-device compatibility and a smooth user experience.",
    image: "/shirkaNora.png",
    technologies: ["Next.js", "shadcn/ui", "EmailJS", "WhatsApp"],
    featured: false,
    link: "https://www.shirka-noura.com/",
    location: "Riyadh",
  },
  {
    title: "Asrar – Booking Portal Website",
    description:
      "Worked as a Full Stack Developer on Asrar – Booking Portal, a platform where hotels book cars for their customers by providing customer details. Developed hotel-side features for creating and managing bookings, while on the admin side implemented driver assignment, fare management, booking status updates, and CSV exports. Built with Next.js, Tailwind CSS, shadcn UI on the frontend and NestJS with PostgreSQL on the backend with secure authentication and role-based access.",
    image: "/asrar.png",
    technologies: ["Next.js", "Tailwind CSS", "shadcn UI", "NestJS", "PostgreSQL"],
    featured: false,
    link: "https://www.asrarbookingportal.online/",
    location: "Firnas.tech, Abbottabad",
  },
  {
    title: "S4 – Job Posting Platform",
    description:
      "Worked as a Full Stack Developer on S4-Job posting platform using React and Tailwind CSS for the frontend, and NestJS for the backend. Implemented QR code generation, dynamic navigation, and Google Maps integration with Firebase API for real-time data synchronization. Designed a responsive user interface ensuring seamless performance across devices.",
    image: "/images/s41.png",
    technologies: ["React", "Tailwind CSS", "NestJS", "PostgreSQL", "Firebase", "Google Maps"],
    featured: false,
    link: "https://s-four00.vercel.app/",
    location: "Firnas.tech, Abbottabad",
  },
]

export const additionalProjects: Project[] = [
  {
    title: "Portfolio Website – Client Project",
    description:
      "Developed and deployed a professional portfolio website for a client using Next.js, Tailwind CSS, and TypeScript. Configured custom domain and DNS settings on Hostinger and deployed on Vercel, ensuring high performance, responsive design, and seamless user experience.",
    image: "/izaz.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Hostinger"],
    featured: false,
    link: "https://www.izazdigital.com/",
  },
  {
    title: "AI Image Generator SaaS – Personal Project",
    description:
      "Developed a full-stack SaaS application using Next.js and Node.js that generates images from user-provided text prompts using an AI image generation API. Implemented user input handling, dynamic image rendering, and prompt history storage. Designed a clean and responsive user interface with Tailwind CSS for a smooth user experience.",
    image: "/images/saas1.png",
    technologies: ["Next.js", "Node.js", "Tailwind CSS", "AI API"],
    featured: false,
    link: "#",
  },
]
