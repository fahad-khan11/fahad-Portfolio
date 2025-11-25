"use client"
import image1 from '../public/images/aerona.png'
import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  Code,
  Database,
  Server,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Download,
  ExternalLink,
  Star,
  Award,
  Send,
  User,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { ContactForm } from "./components/contact-form"
import { motion, AnimatePresence } from "framer-motion"
import { Suspense } from "react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true) // Changed initial state to true
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({})
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "cv/FahadCV.pdf"
    link.download = "Fahad_Farman_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleDescription = (index: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  // SKILL SET
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "ShadCN", "Admin dashboards"]
  const backendSkills = ["Node.js", "NestJS", "REST APIs", "OAuth 2.0", "web sockets", "stripe"]
  const databaseSkills = ["MongoDB", "PostgreSQL"]
  const programmingSkills = ["JavaScript", "TypeScript", "C", "C++", "Java"]
  const otherSkills = [
    "Typescript",
    "MVC Architecture",
    "Authentication (JWT & Cookies)",
    "Responsive Web Design",
    "Postman",
    "Swagger",
    "VS Code",
    "Linux (Basic)",
  ]

  const projects = [
    {
      title: "Corporateasy – Company Registration & Management Platform",
      description:
        "Worked as a Full-Stack Developer on Corporateasy, building the company registration form and integrating Stripe for secure payments. Developed Admin and Company panels with role-based access using Next.js and Tailwind CSS, while implementing backend logic in NestJS and PostgreSQL for authentication, data management, and payment workflows.",
      image: "/corporate.png",
      technologies: ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "Stripe"],
      featured: true,
      link: "https://corporateasy.com/"
    },
    {
      title: "SehatYar – Digital Healthcare & Clinic Management System",
      description:
        "Worked as a Full-Stack Developer on SehatYar, a healthcare platform for patients, doctors, receptionists, and admins. Developed modules for authentication, multi-clinic management, appointments, electronic medical records (EMR), AI-assisted summaries, and billing. Built the frontend with Next.js and Tailwind CSS, and the backend with NestJS, PostgreSQL, and TypeORM, ensuring secure APIs and role-based access control.",
      image: "/sehatyar.png",
      technologies: ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "TypeORM", "AI"],
      featured: true,
      link: "https://sehatyar.vercel.app/"
    },
    {
      title: "Gigjives - Project Management Tool",
      description:
        "Worked as a Frontend Developer on Gigjives – Project Management Tool, building role-based modules for Super Admin, Admin, Manager, and Employee. Developed responsive dashboards, user management, and task workflows using Next.js, Tailwind CSS, and shadcn UI, ensuring a smooth and intuitive user experience.",
      image: "/gigjives.png",
      technologies: ["Next.js", "Tailwind CSS", "shadcn UI"],
      featured: true,
      link: "https://gig-gives.vercel.app/"
    },
    {
      title: "Shirka Noura – Appliance & AC Repair Website",
      description:
        "Developed the complete website using Next.js and shadcn/ui, with responsive layouts and interactive UI components. Integrated EmailJS for contact forms and WhatsApp for instant customer support. Optimized performance with clean, scalable code for cross-device compatibility and a smooth user experience.",
      image: "/shirkaNora.png",
      technologies: ["Next.js", "shadcn/ui", "EmailJS", "WhatsApp"],
      featured: false,
      link: "https://www.shirka-noura.com/"
    },
    {
      title: "Portfolio Website – Client Project",
      description:
        "Developed and deployed a professional portfolio website for a client using Next.js, Tailwind CSS, and TypeScript. Configured custom domain and DNS settings on Hostinger and deployed on Vercel, ensuring high performance, responsive design, and seamless user experience.",
      image: "/izaz.png",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Hostinger"],
      featured: false,
      link: "https://www.izazdigital.com/"
    },
    {
      title: "Asrar – Booking Portal Website",
      description:
        "Worked as a Full Stack Developer on Asrar – Booking Portal, a platform where hotels book cars for their customers by providing customer details. Developed hotel-side features for creating and managing bookings, while on the admin side implemented driver assignment, fare management, booking status updates, and CSV exports. Built with Next.js, Tailwind CSS, shadcn UI on the frontend and NestJS with PostgreSQL on the backend with secure authentication and role-based access.",
      image: "/asrar.png",
      technologies: ["Next.js", "Tailwind CSS", "shadcn UI", "NestJS", "PostgreSQL"],
      featured: false,
      link: "https://www.asrarbookingportal.online/"
    },
    {
      title: "Aerona – Hotel Booking Website",
      description:
        "Worked as a Frontend Developer on Aeronaa, a travel booking platform. Built responsive layouts and interactive UI components for hotels, flights, and rentals. Optimized performance with clean, scalable frontend code for cross-device support. Collaborated with designers and backend team to deliver a smooth user experience.",
      image: image1,
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Authentication"],
      featured: false,
      link: "https://aeronaa.com/"
    },
    {
      title: "S4 – Job Posting Platform",
      description:
        "Worked as a Full Stack Developer on S4-Job posting platform using React and Tailwind CSS for the frontend, and NestJS for the backend. Implemented QR code generation, dynamic navigation, and Google Maps integration with Firebase API for real-time data synchronization. Designed a responsive user interface ensuring seamless performance across devices.",
      image: "/images/s41.png",
      technologies: ["React", "Tailwind CSS", "NestJS", "PostgreSQL", "Firebase", "Google Maps"],
      featured: false,
      link: "https://s-four00.vercel.app/"
    },
    {
      title: "AI Image Generator SaaS – Personal Project",
      description:
        "Developed a full-stack SaaS application using Next.js and Node.js that generates images from user-provided text prompts using an AI image generation API (Dropbox API). Implemented user input handling, dynamic image rendering, and prompt history storage. Designed a clean and responsive user interface with Tailwind CSS for a smooth user experience.",
      image: "/images/saas1.png",
      technologies: ["Next.js", "Node.js", "Dropbox API", "Tailwind CSS"],
      featured: false,
      link: "#"
    }
  ];

  // Animation variants (fix: use allowed ease value)
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  }
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  }

  return (
    <>
      {/* Comprehensive JSON-LD Structured Data for GEO, AEO, and SEO */}
      
      {/* Person Schema - Enhanced for GEO/AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://fahadfarman.me/",
            name: "Fahad Farman",
            alternateName: [
              "fahad farman",
              "FAHAD FARMAN",
              "Fahad farman",
              "fahad Farman",
              "FAHAD farman",
              "Fahad",
              "fahad",
              "Fahad Farman "
            ],
            givenName: "Fahad",
            familyName: "Farman",
            url: "https://fahadfarman.me",
            image: {
              "@type": "ImageObject",
              url: "https://fahadfarman.me/images/fahad11.png",
              width: 192,
              height: 192
            },
            jobTitle: "Full Stack Developer",
            description: "Fahad Farman is a Full Stack Developer and Software Engineering student at COMSATS University Islamabad. Expert in building modern web applications using Next.js, React, Node.js, NestJS, PostgreSQL, and MongoDB. Specialized in full-stack development with 1+ years of professional experience.",
            email: "mailto:fahadfarman00@gmail.com",
            telephone: "+03406218617",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Abbottabad",
              addressRegion: "Khyber Pakhtunkhwa",
              addressCountry: "Pakistan"
            },
            worksFor: {
              "@type": "Organization",
              name: "Firnas.tech",
              url: "https://firnas.tech/",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abbottabad",
                addressCountry: "Pakistan"
              }
            },
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "COMSATS University Islamabad Abbottabad Campus",
              url: "https://www.comsats.edu.pk",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abbottabad",
                addressCountry: "Pakistan"
              }
            },
            sameAs: [
              "https://github.com/fahad-khan11",
              "https://www.linkedin.com/in/fahadfarman/",
              "https://fahadfarman.me"
            ],
            knowsAbout: [
              "Full Stack Development",
              "Web Development",
              "Next.js",
              "React.js",
              "Node.js",
              "NestJS",
              "PostgreSQL",
              "MongoDB",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "REST APIs",
              "Authentication",
              "Database Design",
              "Frontend Development",
              "Backend Development",
              "Software Engineering"
            ],
            knowsLanguage: [
              {
                "@type": "Language",
                name: "English",
                alternateName: "en"
              },
              {
                "@type": "Language",
                name: "Urdu",
                alternateName: "ur"
              }
            ],
            hasOccupation: {
              "@type": "Occupation",
              name: "Full Stack Developer",
              occupationLocation: {
                "@type": "City",
                name: "Abbottabad"
              },
              skills: "Next.js, React, Node.js, NestJS, PostgreSQL, MongoDB, TypeScript, JavaScript, Tailwind CSS, REST APIs"
            }
          })
        }}
      />

      {/* ProfilePage Schema for GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@id": "https://fahadfarman.me/"
            },
            name: "Fahad Farman - Full Stack Developer Portfolio",
            description: "Professional portfolio showcasing Fahad Farman's work as a Full Stack Developer. View projects, skills, and experience in Next.js, React, Node.js, and modern web technologies.",
            url: "https://fahadfarman.me"
          })
        }}
      />

      {/* WebSite Schema with SearchAction for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://fahadfarman.me/",
            name: "Fahad Farman Portfolio",
            alternateName: "Fahad Farman - Full Stack Developer",
            url: "https://fahadfarman.me",
            description: "Portfolio website of Fahad Farman - Full Stack Developer specializing in Next.js, React, Node.js, NestJS, PostgreSQL, and MongoDB",
            inLanguage: "en-US",
            author: {
              "@id": "https://fahadfarman.me/"
            },
            creator: {
              "@id": "https://fahadfarman.me/"
            }
          })
        }}
      />

      {/* BreadcrumbList for Navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://fahadfarman.me"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://fahadfarman.me#about"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Experience",
                item: "https://fahadfarman.me#experience"
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Projects",
                item: "https://fahadfarman.me#projects"
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Contact",
                item: "https://fahadfarman.me#contact"
              }
            ]
          })
        }}
      />

      {/* FAQPage Schema for AEO - Common Questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who is Fahad Farman?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fahad Farman is a Full Stack Developer and Software Engineering student at COMSATS University Islamabad. He specializes in building modern web applications using Next.js, React, Node.js, NestJS, PostgreSQL, and MongoDB."
                }
              },
              {
                "@type": "Question",
                name: "What technologies does Fahad Farman work with?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fahad Farman works with Next.js, React.js, Node.js, NestJS, PostgreSQL, MongoDB, TypeScript, JavaScript, Tailwind CSS, and various modern web development technologies. He specializes in full-stack development."
                }
              },
              {
                "@type": "Question",
                name: "Where does Fahad Farman work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fahad Farman works as a Web Developer at Firnas.tech in Abbottabad, Pakistan. He has experience working on various full-stack projects including healthcare platforms, company registration systems, and project management tools."
                }
              },
              {
                "@type": "Question",
                name: "What is Fahad Farman's educational background?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fahad Farman is currently pursuing a Bachelor of Science in Software Engineering at COMSATS University Islamabad, Abbottabad Campus (Sep 2023 - Present)."
                }
              },
              {
                "@type": "Question",
                name: "How can I contact Fahad Farman?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can contact Fahad Farman through his portfolio website contact form, LinkedIn (https://www.linkedin.com/in/fahadfarman/), or GitHub (https://github.com/fahad-khan11)."
                }
              }
            ]
          })
        }}
      />
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-purple-950 dark:to-indigo-950 text-gray-900 dark:text-gray-200 transition-all duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 dark:bg-white/5 backdrop-blur-xl border-b border-white/40 dark:border-white/10 z-50 shadow-lg shadow-black/5 dark:shadow-black/20 supports-[backdrop-filter]:bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
              Fahad Farman
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 font-medium text-sm lg:text-base hover:scale-105 transform"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 font-medium text-sm lg:text-base hover:scale-105 transform"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 font-medium text-sm lg:text-base hover:scale-105 transform"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 font-medium text-sm lg:text-base hover:scale-105 transform"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 font-medium text-sm lg:text-base hover:scale-105 transform"
              >
                Contact
              </button>
              <div className="flex items-center space-x-2 ml-4 lg:ml-6">
                <Button variant="ghost" size="icon" className="hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" asChild>
                  <a href="https://github.com/fahad-khan11" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 lg:h-5 lg:w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" asChild>
                  <a href="https://www.linkedin.com/in/fahadfarman/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 lg:h-5 lg:w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                  className="hover:bg-yellow-100 dark:hover:bg-gray-800 hover:text-yellow-600 transition-colors"
                >
                  {darkMode ? (
                    <Sun className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="mr-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-600" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-white/20 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 font-medium text-left py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 font-medium text-left py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 font-medium text-left py-2"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 font-medium text-left py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 font-medium text-left py-2"
                >
                  Contact
                </button>
                <div className="flex items-center space-x-3 pt-4">
                  <Button variant="ghost" size="icon" className="hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" asChild>
                    <a href="https://github.com/fahad-khan11" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" asChild>
                    <a
                      href="https://www.linkedin.com/in/fahadfarman/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
        <motion.section
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="pt-20 pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-pink-500/5 dark:from-indigo-500/10 dark:to-purple-500/10"></div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center py-16 sm:py-20 lg:py-32">
              <div className="mb-8 lg:mb-12">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 lg:mb-8 rounded-full overflow-hidden shadow-2xl shadow-black/20 dark:shadow-white/10 ring-4 ring-white/50 dark:ring-gray-800/50">
                  <Image
                    src="/images/fahad11.png"
                    alt="Fahad Farman"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFWlwmYWmNHEL0AAAAABJRU5ErkJggg=="
                  />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
                  Fahad Farman
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto font-light">
                Full Stack Developer & Software Engineering Student
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12 max-w-4xl mx-auto px-4">
                {[...frontendSkills, ...backendSkills, ...databaseSkills].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 bg-white/80 dark:bg-white/5 text-gray-800 dark:text-gray-200 border border-indigo-200 dark:border-indigo-500/30 hover:border-indigo-400 dark:hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-center gap-3 sm:gap-4 flex-wrap px-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={downloadCV}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-4 text-lg font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                  asChild
                >
                  <a href="https://github.com/fahad-khan11" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

      {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 lg:mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 mx-auto mb-8"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                I'm a passionate full stack developer and software engineering student at COMSATS University Islamabad,
                specializing in building modern, responsive web applications with cutting-edge technologies.
              </p>
            </div>

            {/* Education */}
            <div className="mb-20 lg:mb-24">
              <div className="text-center mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Education</h3>
                <div className="w-16 h-0.5 bg-gray-400 dark:bg-gray-600 mx-auto"></div>
              </div>
              <Card className="max-w-4xl mx-auto bg-white/40 dark:bg-white/5 backdrop-blur-md border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <CardHeader className="pb-6 lg:pb-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
                    <div className="p-4 lg:p-5 bg-gradient-to-br from-gray-800 to-black dark:from-gray-200 dark:to-white rounded-2xl shadow-xl">
                      <GraduationCap className="h-8 w-8 lg:h-10 lg:w-10 text-white dark:text-black" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 mb-2">
                        Bachelor of Science in Software Engineering
                      </CardTitle>
                      <CardDescription className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-2">
                        COMSATS University Islamabad, Abbottabad Campus
                      </CardDescription>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">Sep 2023 – Present</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-white/50 dark:bg-black/20 rounded-xl p-4 lg:p-6">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Database", "OOP", "DSA", "Programming Fundamentals"].map((course) => (
                        <Badge
                          key={course}
                          variant="outline"
                          className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills Grid */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Technical Skills</h3>
                <div className="w-16 h-0.5 bg-gray-400 dark:bg-gray-600 mx-auto"></div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                <Card className="group bg-white/60 dark:bg-white/5 backdrop-blur-md border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <CardHeader className="text-center pb-6">
                    <div className="p-4 lg:p-5 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl mx-auto w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Code className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl text-gray-800 dark:text-gray-200">Frontend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>



                <Card className="group bg-white/60 dark:bg-white/5 backdrop-blur-md border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <CardHeader className="text-center pb-6">
                    <div className="p-4 lg:p-5 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-xl mx-auto w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Server className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl text-gray-800 dark:text-gray-200">Backend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>



                <Card className="group bg-white/60 dark:bg-white/5 backdrop-blur-md border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <CardHeader className="text-center pb-6">
                    <div className="p-4 lg:p-5 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-xl mx-auto w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Database className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl text-gray-800 dark:text-gray-200">Database</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[...databaseSkills, ...programmingSkills].map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>



                <Card className="group bg-white/60 dark:bg-white/5 backdrop-blur-md border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <CardHeader className="text-center pb-6">
                    <div className="p-4 lg:p-5 bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl shadow-xl mx-auto w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl text-gray-800 dark:text-gray-200">Other Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {otherSkills.slice(0, 4).map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-700 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>


      {/* Experience Section */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 lg:mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
                Work Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 mx-auto"></div>
            </div>



            <Card className="max-w-5xl mx-auto bg-white/60 dark:bg-white/5 backdrop-blur-md border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]">
              <CardHeader className="pb-6 lg:pb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
                  <div className="p-4 lg:p-5 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-xl">
                    <Briefcase className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 mb-2">
                      Web Developer
                    </CardTitle>
                    <CardDescription className="text-lg lg:text-xl text-gray-600 dark:text-gray-400">
                      Firnas.tech, Abbottabad
                      March 2025 - Present
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 lg:p-8">
                  <ul className="space-y-4 lg:space-y-5 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm lg:text-base leading-relaxed">
                        Developing responsive user interfaces using React.js and Tailwind CSS on the frontend. Building and integrating secure RESTful APIs using Node.js and NestJS on the backend. Working with MongoDB and PostgreSQL for database management. Collaborating with the team in a professional environment, improving communication, problem-solving, and time management skills.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            {/* Intern Experience */}
            <Card className="max-w-5xl mx-auto mt-8 bg-white/40 dark:bg-white/5 backdrop-blur-md border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <CardHeader className="pb-6 lg:pb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
                  <div className="p-4 lg:p-5 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-xl">
                    <Briefcase className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 mb-2">
                      Web Developer (Intern)
                    </CardTitle>
                    <CardDescription className="text-lg lg:text-xl text-gray-600 dark:text-gray-400">
                      Firnas.tech, Abbottabad
                      <br />
                      Dec 2024 - March 2025
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 lg:p-8">
                  <ul className="space-y-4 lg:space-y-5 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm lg:text-base leading-relaxed">
                        I worked as a Web Developer Intern at Firnas.tech, where I learned and implemented frontend development using React.js and Next.js along with Tailwind CSS. On the backend, I worked with Node.js and gained hands-on experience integrating APIs and managing data with MongoDB, while also focusing on learning PostgreSQL. This role allowed me to build UI components, connect them with backend services, and improve my skills while working in a professional team environment.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>


      {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 lg:mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
                My Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 mx-auto mb-8"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Here are some of the projects I've completed, showcasing my skills in full stack development with various
                tech stacks.
              </p>
            </div>



              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
                {projects.map((project, index) => (
                  isMobile ? (
                    <div key={index} className="h-full">
                      <Card
                        className={`group overflow-hidden bg-white/60 dark:bg-white/5 backdrop-blur-md border-white/40 dark:border-white/10 hover:scale-105 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col ${
                          project.featured ? "ring-2 ring-indigo-500/50 dark:ring-indigo-400/50" : ""
                        }`}
                      >
                        {project.featured && (
                          <div className="absolute top-4 right-4 z-10">
                            <Badge className="bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white text-white dark:text-black shadow-lg">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                            loading={index < 3 ? "eager" : "lazy"}
                            quality={75}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFWlwmYWmNHEL0AAAAABJRU5ErkJggg=="
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                          {/* Live Link Button Overlay */}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                            style={{ background: 'rgba(0,0,0,0.45)' }}
                          >
                            <button
                              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/40 hover:shadow-indigo-500/60 transform hover:scale-105 transition-all duration-300 text-sm"
                            >
                              Live Link
                            </button>
                          </a>
                        </div>
                        <CardHeader className="pb-4">
                          <CardTitle className="text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-tight group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                            {project.title}
                          </CardTitle>
                          <div className="relative">
                            <div className={`overflow-y-auto hide-scrollbar transition-all duration-300 ${
                              expandedDescriptions[index] ? "max-h-32" : "max-h-12"
                            }`}>
                              <CardDescription className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-relaxed pr-1">
                                {project.description}
                              </CardDescription>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleDescription(index)}
                              className="absolute bottom-0 right-0 p-1 h-6 text-xs font-medium bg-gradient-to-l from-white dark:from-black via-white/30 dark:via-black/90 to-transparent w-full text-right hover:bg-transparent"
                            >
                              {expandedDescriptions[index] ? (
                                <ChevronUp className="h-4 w-4 ml-auto" />
                              ) : (
                                <ChevronDown className="h-4 w-4 ml-auto" />
                              )}
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant={
                                  tech === "NestJS" || tech === "PostgreSQL" || tech === "TypeORM"
                                    ? "default"
                                    : tech === "Node.js" || tech === "MongoDB"
                                      ? "secondary"
                                      : "outline"
                                }
                                className={`text-xs transition-all duration-300 hover:scale-105 ${
                                  tech === "NestJS" || tech === "PostgreSQL" || tech === "TypeORM"
                                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-900/50"
                                    : tech === "Node.js" || tech === "MongoDB"
                                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-900/50"
                                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ) : (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      variants={cardVariants}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.98 }}
                      className="h-full"
                    >
                    <Card
                      key={index}
                      className={`group overflow-hidden bg-white/60 dark:bg-white/5 backdrop-blur-md border-white/40 dark:border-white/10 hover:scale-105 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col ${
                        project.featured ? "ring-2 ring-indigo-500/50 dark:ring-indigo-400/50" : ""
                      }`}
                    >
                      {project.featured && (
                        <div className="absolute top-4 right-4 z-10">
                          <Badge className="bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white text-white dark:text-black shadow-lg">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                          loading={index < 3 ? "eager" : "lazy"}
                          quality={75}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFWlwmYWmNHEL0AAAAABJRU5ErkJggg=="
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                        {/* Live Link Button Overlay */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                          style={{ background: 'rgba(0,0,0,0.45)' }}
                        >
                          <button
                            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/40 hover:shadow-indigo-500/60 transform hover:scale-105 transition-all duration-300 text-sm"
                          >
                            Live Link
                          </button>
                        </a>
                      </div>
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-tight group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="relative">
                          <div className={`overflow-y-auto hide-scrollbar transition-all duration-300 ${
                            expandedDescriptions[index] ? "max-h-32" : "max-h-12"
                          }`}>
                            <CardDescription className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-relaxed pr-1">
                              {project.description}
                            </CardDescription>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleDescription(index)}
                            className="absolute bottom-0 right-0 p-1 h-6 text-xs font-medium bg-gradient-to-l from-white dark:from-black via-white/30 dark:via-black/90 to-transparent w-full text-right hover:bg-transparent"
                          >
                            {expandedDescriptions[index] ? (
                              <ChevronUp className="h-4 w-4 ml-auto" />
                            ) : (
                              <ChevronDown className="h-4 w-4 ml-auto" />
                            )}
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant={
                                tech === "NestJS" || tech === "PostgreSQL" || tech === "TypeORM"
                                  ? "default"
                                  : tech === "Node.js" || tech === "MongoDB"
                                    ? "secondary"
                                    : "outline"
                              }
                              className={`text-xs transition-all duration-300 hover:scale-105 ${
                                tech === "NestJS" || tech === "PostgreSQL" || tech === "TypeORM"
                                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-900/50"
                                  : tech === "Node.js" || tech === "MongoDB"
                                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-900/50"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
                              }`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      </Card>
                    </motion.div>
                  )
                ))}
              </div>
          </div>
        </motion.section>

      {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 lg:mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 mx-auto"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                I'm always open to discussing new opportunities and interesting projects. Let's connect and create
                something amazing together!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto w-full hover:bg-transparent"
                    asChild
                  >
                    <a
                      href="https://mail.google.com/mail/?view=cm&to=fahadfarman00@gmail.com" target="_blank"
                      className="block w-full"
                    >

                      <Card className="aspect-square w-full text-center bg-white/60 dark:bg-white/5 backdrop-blur-md border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 transform hover:scale-105 cursor-pointer group">
                        <CardHeader className="pb-4">
                          <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl mx-auto w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Mail className="h-8 w-8 text-white" />
                          </div>
                          <CardTitle className="text-xl text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Email</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 dark:text-gray-400 text-sm break-all group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">fahadfarman00@gmail.com</p>
                        </CardContent>
                      </Card>
                    </a>
                  </Button>



                  <Card className="aspect-square w-full text-center bg-white/60 dark:bg-white/5 backdrop-blur-md border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                    <CardHeader className="pb-4">
                      <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl mx-auto w-fit mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                        </svg>
                      </div>
                      <CardTitle className="text-xl text-gray-800 dark:text-gray-200">WhatsApp</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                        asChild
                      >
                        <a
                          href="https://wa.me/923406218617"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <span>Chat on WhatsApp</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Card className="aspect-square w-full text-center bg-white/60 dark:bg-white/5 backdrop-blur-md border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                    <CardHeader className="pb-4">
                      <div className="p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl shadow-xl mx-auto w-fit mb-4">
                        <Github className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-gray-800 dark:text-gray-200">GitHub</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href="https://github.com/fahad-khan11"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                        >
                          View Profile
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="aspect-square w-full text-center bg-white/60 dark:bg-white/5 backdrop-blur-md border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                    <CardHeader className="pb-4">
                      <div className="p-4 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl shadow-xl mx-auto w-fit mb-4">
                        <Linkedin className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-gray-800 dark:text-gray-200">LinkedIn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href="https://www.linkedin.com/in/fahadfarman/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                        >
                          Connect
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>

            <div className="text-center mt-16">
              <div className="flex justify-center gap-6 flex-wrap">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={downloadCV}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-4 text-lg font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/fahadfarman/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>


      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/40 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">© 2024 Fahad Farman. All rights reserved.</p>
            <div className="flex justify-center items-center gap-6">
              <Button
                variant="ghost"
                size="lg"
                className="hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://github.com/fahad-khan11" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://www.linkedin.com/in/fahadfarman/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
