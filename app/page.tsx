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

  const frontendSkills = ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Next.js"]
  const backendSkills = ["Node.js", "NestJS", "MongoDB", "PostgreSQL"]
  const databaseSkills = ["TypeORM", "Database Design"]
  const programmingSkills = ["JavaScript", "TypeScript"]
  const otherSkills = [
    "RESTful APIs",
    "MVC Architecture",
    "JWT & Cookies",
    "Responsive Design",
    "Postman",
    "Swagger",
    "VS Code",
    "Linux",
  ]

  const projects = [
    {
      title: "Aerona – Hotel Booking Website",
      description:
        "Developed in Next.js for managing hotel listings and bookings with a responsive and modern UI. Implemented secure routing, user authentication, and booking functionality.",
      image: image1,
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Authentication"],
      featured: true,
    },
    {
      title: "S4 – Job Posting Platform",
      description:
        "Full-stack application using React and Tailwind CSS for frontend, NestJS for backend. Features QR code generation, dynamic navigation, and Google Maps integration with Firebase API.",
      image: "/images/s41.png",
      technologies: ["React", "Tailwind CSS", "NestJS", "PostgreSQL", "Firebase", "Google Maps"],
      featured: true,
    },
    {
      title: "AI Image Generator SaaS",
      description:
        "Full-stack SaaS application using Next.js and Node.js that generates images from text prompts using AI API. Features user input handling, dynamic rendering, and prompt history storage.",
      image: "/images/saas1.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "AI API", "Tailwind CSS"],
      featured: true,
    },
    {
      title: "Lemara – Commercial Website",
      description:
        "Created in Next.js with NestJS backend to showcase commercial property listings with a performance-focused design. Focused on responsive UI and clean navigation experience.",
      image: "/images/lamara1.png",
      technologies: ["Next.js", "NestJS", "PostgreSQL", "Responsive Design"],
      featured: false,
    },
    {
      title: "Zaraschool – Education Website",
      description:
        "Built using Next.js with Node.js backend to manage school-related data and pages with a clean and responsive layout. Ensured performance and user-friendly navigation.",
      image: "/images/zara.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "Education Management"],
      featured: false,
    },
    {
      title: "Ecommerce Website",
      description:
        "Fully responsive e-commerce website using the MERN stack. Implemented user authentication, product listings, and shopping cart functionality with clean UI.",
      image: "/images/fshop.JPG",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      featured: false,
    },
     {
      title: "Uni Portal – University Management System",
      description:
        "Comprehensive enterprise application with React frontend and NestJS backend. Features interactive data visualizations, dynamic navigation, and Google Maps integration with real-time data synchronization.",
      image: "/images/port.png",
      technologies: ["React", "NestJS", "PostgreSQL", "TypeORM", "Firebase", "Google Maps"],
      featured: false,
    },
  ]

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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-foreground transition-all duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 z-50 shadow-lg shadow-black/5 dark:shadow-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
              Fahad Farman
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 font-medium text-sm lg:text-base"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 font-medium text-sm lg:text-base"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 font-medium text-sm lg:text-base"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 font-medium text-sm lg:text-base"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 font-medium text-sm lg:text-base"
              >
                Contact
              </button>
              <div className="flex items-center space-x-2 ml-4 lg:ml-6">
                <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800" asChild>
                  <a href="https://github.com/fahad-khan11" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600 dark:text-gray-400" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800" asChild>
                  <a href="https://www.linkedin.com/in/fahadfarman/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600 dark:text-gray-400" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
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
            <div className="md:hidden py-6 border-t border-gray-200/50 dark:border-gray-700/50 bg-white/95 dark:bg-black/95 backdrop-blur-xl">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 font-medium text-left py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 font-medium text-left py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 font-medium text-left py-2"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 font-medium text-left py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 font-medium text-left py-2"
                >
                  Contact
                </button>
                <div className="flex items-center space-x-3 pt-4">
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800" asChild>
                    <a href="https://github.com/fahad-khan11" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800" asChild>
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
      <AnimatePresence>
        <motion.section
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="pt-20 pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-gray-900/10 dark:from-white/5 dark:to-gray-100/10"></div>
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
                    className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 shadow-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-center gap-3 sm:gap-4 flex-wrap px-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-black via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 hover:from-gray-900 hover:via-gray-700 hover:to-gray-500 dark:hover:from-gray-100 dark:hover:via-gray-300 dark:hover:to-gray-500 text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl shadow-black/20 dark:shadow-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={downloadCV}
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <a href="https://github.com/fahad-khan11" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* About Section */}
      <AnimatePresence>
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/80 via-white to-gray-100/80 dark:from-gray-900/80 dark:via-black dark:to-gray-800/80"
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
              <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white via-gray-50/50 to-gray-100 dark:from-gray-800 dark:via-gray-900/50 dark:to-black border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-black/10 dark:shadow-white/10 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
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
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 lg:p-6">
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
                <Card className="group bg-gradient-to-br from-white via-gray-50/50 to-gray-100 dark:from-gray-800 dark:via-gray-900/50 dark:to-black border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-black/5 dark:shadow-white/5 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
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

                <Card className="group bg-gradient-to-br from-white via-gray-50/50 to-gray-100 dark:from-gray-800 dark:via-gray-900/50 dark:to-black border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-black/5 dark:shadow-white/5 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
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

                <Card className="group bg-gradient-to-br from-white via-gray-50/50 to-gray-100 dark:from-gray-800 dark:via-gray-900/50 dark:to-black border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-black/5 dark:shadow-white/5 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
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

                <Card className="group bg-gradient-to-br from-white via-gray-50/50 to-gray-100 dark:from-gray-800 dark:via-gray-900/50 dark:to-black border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-black/5 dark:shadow-white/5 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
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
      </AnimatePresence>

      {/* Experience Section */}
      <AnimatePresence>
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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

            <Card className="max-w-5xl mx-auto bg-gradient-to-br from-white via-gray-50/50 to-gray-100 dark:from-gray-800 dark:via-gray-900/50 dark:to-black border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-black/10 dark:shadow-white/10 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
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
                      Firnas.tech, Abbottabad, Pakistan • Dec 2024 - Present
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
                        Developing responsive user interfaces using React.js and Tailwind CSS on the frontend
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm lg:text-base leading-relaxed">
                        Building and integrating secure RESTful APIs using Node.js and NestJS on the backend
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm lg:text-base leading-relaxed">
                        Working with MongoDB and PostgreSQL for database management
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm lg:text-base leading-relaxed">
                        Collaborating with the team in a professional environment, improving communication,
                        problem-solving, and time management skills
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Projects Section */}
      <AnimatePresence>
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/80 via-white to-gray-100/80 dark:from-gray-900/80 dark:via-black dark:to-gray-800/80"
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

            <Suspense fallback={<div>Loading projects...</div>}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.12 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  >
                    <Card
                      key={index}
                      className={`group overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-gray-100 dark:from-gray-800 dark:via-gray-900/50 dark:to-black border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:-translate-y-2 transition-all duration-500 ${
                        project.featured ? "ring-2 ring-gray-300 dark:ring-gray-600" : ""
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
                ))}
              </motion.div>
            </Suspense>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Contact Section */}
      <AnimatePresence>
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 lg:mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 mx-auto mb-8"></div>
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
                      <Card className="text-center bg-gradient-to-br from-white via-gray-50/50 to-gray-100 dark:from-gray-800 dark:via-gray-900/50 dark:to-black border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-black/5 dark:shadow-white/5 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer group">
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

                  <Card className="text-center bg-gradient-to-br from-white via-gray-50/50 to-gray-100 dark:from-gray-800 dark:via-gray-900/50 dark:to-black border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-black/5 dark:shadow-white/5 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
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
                  <Card className="text-center bg-gradient-to-br from-white via-gray-50/50 to-gray-100 dark:from-gray-800 dark:via-gray-900/50 dark:to-black border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-black/5 dark:shadow-white/5 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
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

                  <Card className="text-center bg-gradient-to-br from-white via-gray-50/50 to-gray-100 dark:from-gray-800 dark:via-gray-900/50 dark:to-black border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-black/5 dark:shadow-white/5 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
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
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-br from-gray-50/80 via-white to-gray-100/80 dark:from-gray-900/80 dark:via-black dark:to-gray-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">© 2024 Fahad Farman. All rights reserved.</p>
            <div className="flex justify-center items-center gap-6">
              <Button
                variant="ghost"
                size="lg"
                className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
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
                className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://www.linkedin.com/in/fahadfarman/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
