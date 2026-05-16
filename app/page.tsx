"use client"

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
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ContactForm } from "./components/contact-form"
import { AnimatedBackground } from "./components/animated-background"
import { HeroBackground } from "./components/hero-background"
import { SectionHeading } from "./components/section-heading"
import { ProjectCard } from "./components/project-card"
import { ExperienceCard } from "./components/experience-card"
import { SkillCard } from "./components/skill-card"
import { BlurText } from "./components/animations/blur-text"
import { UniqueCursor } from "./components/animations/unique-cursor"
import { FadeUp } from "./components/animations/fade-up"
import { GradientCard } from "./components/animations/gradient-card"
import { ContactInfoCard } from "./components/contact-info-card"
import { HeroHighlights } from "./components/hero-highlights"
import { SubSectionHeading } from "./components/sub-section-heading"
import { SectionLottie } from "./components/section-lottie"
import { projects, additionalProjects } from "@/lib/projects"
import { theme } from "@/lib/theme"
import { motion } from "framer-motion"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
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

  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "ShadCN",
    "Redux",
    "RTK Query",
    "React Query",
    "Strapi",
  ]
  const backendSkills = ["Node.js", "NestJS", "REST APIs", "OAuth 2.0", "WebSockets", "Stripe"]
  const databaseSkills = ["MongoDB", "PostgreSQL"]
  const programmingSkills = ["JavaScript", "TypeScript", "C", "C++", "Java"]
  const otherSkills = [
    "MVC Architecture",
    "Authentication (JWT & Cookies)",
    "Responsive Web Design",
    "Postman",
    "Swagger",
    "FastAPI",
    "AI Integration",
    "Zustand",
  ]

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const heroSkills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "FastAPI",
    "AI Integration",
    "Redux",
    "Zustand",
    "RTK Query",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
  ]

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  }

  const skillEmoji = (skill: string) => {
    const map: Record<string, string> = {
      "React.js": "⚛️",
      "Next.js": "▲",
      TypeScript: "📘",
      "Node.js": "🟢",
      NestJS: "🐱",
      FastAPI: "⚡",
      "AI Integration": "🤖",
      Redux: "🔄",
      Zustand: "🐻",
      "RTK Query": "📡",
      PostgreSQL: "🐘",
      MongoDB: "🍃",
      "Tailwind CSS": "🎨",
      "REST APIs": "🔌",
    }
    return map[skill] ?? "✦"
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
            description: "Fahad Farman is a Professional Full Stack Web Developer with 1.5+ years of experience across 20+ projects. Builds responsive, scalable applications with React, Next.js, Node.js, NestJS, FastAPI, AI integration, Redux, Zustand, PostgreSQL, and MongoDB — including secure REST APIs and role-based authentication.",
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
    <motion.div className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
      <AnimatedBackground />
      <UniqueCursor />
      <nav
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-cyan-500/20 bg-background/80 shadow-lg shadow-cyan-500/5 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div className="font-[family-name:var(--font-heading)] text-xl font-bold sm:text-2xl" whileHover={{ scale: 1.02 }}>
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                Fahad Farman
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-sm lg:text-base hover:scale-105 transform"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-sm lg:text-base hover:scale-105 transform"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-sm lg:text-base hover:scale-105 transform"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-sm lg:text-base hover:scale-105 transform"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-sm lg:text-base hover:scale-105 transform"
              >
                Contact
              </button>
              <div className="flex items-center space-x-2 ml-4 lg:ml-6">
                <Button variant="ghost" size="icon" className="hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors" asChild>
                  <a href="https://github.com/fahad-khan11" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 lg:h-5 lg:w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-violet-500/10 hover:text-violet-400 dark:hover:text-violet-300 transition-colors" asChild>
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
                  className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-left py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-left py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-left py-2"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-left py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-left py-2"
                >
                  Contact
                </button>
                <div className="flex items-center space-x-3 pt-4">
                  <Button variant="ghost" size="icon" className="hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors" asChild>
                    <a href="https://github.com/fahad-khan11" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-violet-500/10 hover:text-violet-400 dark:hover:text-violet-300 transition-colors" asChild>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 overflow-hidden px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20"
        >
          <HeroBackground />
          <div className="relative z-10 mx-auto max-w-7xl">
            <motion.div className="mx-auto max-w-4xl px-4 text-center py-16 sm:px-6 sm:py-20 lg:py-28">
              <motion.div
                className="mb-8 lg:mb-12"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className="animate-float mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full shadow-2xl shadow-cyan-500/20 ring-4 ring-cyan-500/40 sm:mb-8 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
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
                </motion.div>
              </motion.div>
              <BlurText
                text="Hi, I'm 👋"
                as="p"
                className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-500/90 sm:text-sm"
                delay={0.2}
              />
              <motion.h1
                className={`font-[family-name:var(--font-heading)] mb-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl ${theme.gradientText}`}
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, delay: 0.3 }}
              >
                Fahad Farman
              </motion.h1>
              <motion.p
                className="mb-5 text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-2xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.42 }}
              >
                <span className="mr-2" aria-hidden>
                  💻
                </span>
                Full Stack Developer
              </motion.p>
              <motion.p
                className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.52 }}
              >
                Building scalable apps with React, Next.js, NestJS & FastAPI — AI integration, Redux & Zustand, and
                secure APIs across 1.5+ years and 20+ projects.
              </motion.p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12 max-w-4xl mx-auto px-4">
                {heroSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-cyan-500/25 bg-cyan-500/5 text-xs text-foreground/90 sm:text-sm"
                  >
                    <span className="mr-1" aria-hidden>
                      {skillEmoji(skill)}
                    </span>
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-center gap-3 sm:gap-4 flex-wrap px-4">
                <Button
                  size="lg"
                  className="bg-cyan-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:bg-cyan-400 hover:scale-105 active:scale-95"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={downloadCV}
                  className="border-cyan-500/40 px-8 py-4 text-lg font-bold hover:bg-cyan-500/10"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-violet-500/40 px-8 py-4 text-lg font-bold hover:bg-violet-500/10"
                  asChild
                >
                  <a href="https://github.com/fahad-khan11" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
              <HeroHighlights />
            </motion.div>
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
            <SectionHeading
              emoji="👨‍💻"
              label="About"
              title="About Me"
              description="Passionate about clean code, AI-powered products, and shipping real-world apps."
            />
            <SectionLottie src="/lottie/ai-bot.json" className="mb-6 h-20 w-20 sm:h-24 sm:w-24" />
            <FadeUp>
              <p className="mx-auto mb-20 max-w-4xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mb-24">
                Full Stack Web Developer with 1.5+ years of hands-on experience building responsive, scalable applications across 20+
                projects using React.js, Next.js, Node.js, NestJS, and FastAPI. Experienced in AI integration, secure RESTful APIs,
                role-based authentication, and delivering polished interfaces in professional team environments.
              </p>
            </FadeUp>

            {/* Education */}
            <FadeUp className="mb-20 lg:mb-24">
              <SubSectionHeading emoji="🎓" title="Education" />
              <GradientCard glow="mixed" className="mx-auto max-w-4xl">
                <CardHeader className="pb-6 lg:pb-8">
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:gap-6">
                    <div className={theme.iconBox}>
                      <GraduationCap className="h-8 w-8 text-white lg:h-10 lg:w-10" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-2 text-2xl text-foreground lg:text-3xl">
                        Bachelor of Science in Software Engineering
                      </CardTitle>
                      <CardDescription className="mb-2 text-lg text-muted-foreground lg:text-xl">
                        COMSATS University Islamabad, Abbottabad Campus
                      </CardDescription>
                      <p className="font-medium text-cyan-500/90">Sep 2023 – Present</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={theme.contentBox}>
                    <h4 className="mb-3 font-semibold text-foreground">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Database", "OOP", "DSA", "Programming Fundamentals"].map((course) => (
                        <Badge
                          key={course}
                          variant="outline"
                          className="border-cyan-500/25 bg-cyan-500/5 text-foreground/90"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </GradientCard>
            </FadeUp>

            {/* Skills Grid */}
            <FadeUp>
              <SubSectionHeading emoji="🛠️" title="Technical Skills" />
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                <SkillCard title="Frontend" icon={Code} skills={frontendSkills} glow="cyan" delay={0} />
                <SkillCard title="Backend" icon={Server} skills={backendSkills} glow="violet" delay={0.08} />
                <SkillCard title="Database" icon={Database} skills={[...databaseSkills, ...programmingSkills]} glow="mixed" delay={0.16} />
                <SkillCard title="Other Skills" icon={Award} skills={otherSkills} glow="cyan" delay={0.24} />
              </div>
            </FadeUp>

            <FadeUp className="mt-16">
              <SubSectionHeading emoji="🏆" title="Certifications" />
              <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
                {[
                  { name: "Introduction to AI", org: "Google", glow: "cyan" as const },
                  { name: "Crash Course on Python", org: "Google", glow: "violet" as const },
                  { name: "Full Stack Developer", org: "Simplilearn", glow: "mixed" as const },
                ].map((cert, i) => (
                  <FadeUp key={cert.name} delay={i * 0.08}>
                    <GradientCard glow={cert.glow} className="h-full text-center">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base text-foreground">{cert.name}</CardTitle>
                        <CardDescription className="text-cyan-500/80">{cert.org}</CardDescription>
                      </CardHeader>
                    </GradientCard>
                  </FadeUp>
                ))}
              </div>
            </FadeUp>
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
            <SectionHeading emoji="💼" label="Career" title="Work Experience" />
            <SectionLottie src="/lottie/code.json" className="mb-8 h-16 w-16" />

            <motion.div className="space-y-8">
              <ExperienceCard
                title="Web Developer"
                company="Firnas.tech, Abbottabad"
                period="March 2025 – Present"
                description="Developing responsive user interfaces using React.js and Tailwind CSS on the frontend. Building and integrating secure RESTful APIs using Node.js and NestJS on the backend. Working with MongoDB and PostgreSQL for database management. Collaborating with the team in a professional environment, improving communication, problem-solving, and time management skills."
                variant="primary"
              />
              <ExperienceCard
                title="Web Developer (Intern)"
                company="Firnas.tech, Abbottabad"
                period="Dec 2024 – March 2025"
                description="Worked as a Web Developer Intern at Firnas.tech, learning and implementing frontend development using React.js and Next.js with Tailwind CSS. Gained hands-on experience integrating APIs and managing data with MongoDB while focusing on PostgreSQL. Built UI components, connected them with backend services, and improved skills in a professional team environment."
                delay={0.1}
                variant="secondary"
              />
            </motion.div>
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
            <SectionHeading
              emoji="🚀"
              label="Portfolio"
              title="Projects Completed"
              description="Built across Firnas.tech and client work — listed in the same order as my CV, from RouteWise to S4."
            />
            <motion.div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  displayIndex={index + 1}
                />
              ))}
            </motion.div>
            <div className="mt-20">
              <SectionHeading
                emoji="✨"
                label="More work"
                title="Additional Projects"
                description="Side projects and client work beyond the CV list."
              />
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {additionalProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                    displayIndex={projects.length + index + 1}
                  />
                ))}
              </div>
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
            <SectionHeading
              emoji="📬"
              label="Contact"
              title="Get In Touch"
              description="I'm always open to discussing new opportunities and interesting projects. Let's connect and create something amazing together!"
            />

            <SectionLottie src="/lottie/mail.json" className="mb-8 h-16 w-16" />
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <ContactInfoCard
                    title="Email"
                    icon={<Mail className="text-white" />}
                    href="https://mail.google.com/mail/?view=cm&to=fahadfarman00@gmail.com"
                    glow="cyan"
                    delay={0}
                  >
                    <p className="text-sm break-all">fahadfarman00@gmail.com</p>
                  </ContactInfoCard>
                  <ContactInfoCard
                    title="WhatsApp"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                    }
                    href="https://wa.me/923406218617"
                    glow="violet"
                    delay={0.08}
                  >
                    <span className="inline-flex items-center gap-1 text-sm text-cyan-400">
                      Chat on WhatsApp <ExternalLink className="h-3 w-3" />
                    </span>
                  </ContactInfoCard>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <ContactInfoCard
                    title="GitHub"
                    icon={<Github className="text-white" />}
                    href="https://github.com/fahad-khan11"
                    glow="mixed"
                    delay={0.16}
                  >
                    <span className="inline-flex items-center gap-1 text-sm">
                      View Profile <ExternalLink className="h-3 w-3" />
                    </span>
                  </ContactInfoCard>
                  <ContactInfoCard
                    title="LinkedIn"
                    icon={<Linkedin className="text-white" />}
                    href="https://www.linkedin.com/in/fahadfarman/"
                    glow="cyan"
                    delay={0.24}
                  >
                    <span className="inline-flex items-center gap-1 text-sm">
                      Connect <ExternalLink className="h-3 w-3" />
                    </span>
                  </ContactInfoCard>
                </div>
              </div>

              <FadeUp delay={0.12}>
                <ContactForm />
              </FadeUp>
            </div>

            <div className="text-center mt-16">
              <div className="flex justify-center gap-6 flex-wrap">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={downloadCV}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 border-0 px-8 py-4 text-lg font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-violet-500/40 bg-transparent px-8 py-4 text-lg font-bold hover:bg-violet-500/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
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
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/15 bg-card/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="mb-6 text-lg text-muted-foreground">© 2026 Fahad Farman. All rights reserved.</p>
            <div className="flex justify-center items-center gap-6">
              <Button
                variant="ghost"
                size="lg"
                className="hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 transform hover:scale-105"
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
                className="hover:bg-violet-500/10 hover:text-violet-400 dark:hover:text-violet-300 transition-all duration-300 transform hover:scale-105"
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
    </motion.div>
    </>
  )
}
