"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import {
  BookOpen,
  Mail,
  Brain,
  Sparkles,
  Clock,
  MessageSquare,
  Lightbulb,
  Target,
  PenTool,
  CheckCircle,
} from "lucide-react"

const features = [
  {
    title: "Choose a Skill",
    description: "Select the personal skill you want to develop",
    icon: <BookOpen className="w-8 h-8" />,
  },
  {
    title: "Receive Daily Sessions",
    description: "Get your daily session with everything you need in your email",
    icon: <Mail className="w-8 h-8" />,
  },
  {
    title: "Learn and Practice",
    description: "Apply what you have learned in your daily life with session proposals",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    title: "Improve with AI",
    description: "Personalized learning and exercises with artificial intelligence",
    icon: <Sparkles className="w-8 h-8" />,
  },
]

const skills = [
  {
    title: "Time Management",
    description: "Optimize your productivity and achieve more in less time",
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: "Effective Communication",
    description: "Improve your verbal and non-verbal communication skills",
    icon: <MessageSquare className="w-8 h-8" />,
  },
  {
    title: "Mental Influence",
    description: "Learn techniques of psychological influence and persuasion",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    title: "Negotiation",
    description: "Develop skills to reach beneficial agreements in any situation",
    icon: <MessageSquare className="w-8 h-8" />,
  },
  {
    title: "Creative Writing",
    description: "Unlock your narrative potential and learn to create captivating stories",
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    title: "Discipline Development",
    description: "Strengthen your willpower and build solid habits to achieve your goals",
    icon: <Target className="w-8 h-8" />,
  },
]

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-slate-200/10
                    ${isScrolled ? "bg-[#581c87]/95 backdrop-blur-md" : "bg-transparent backdrop-blur-sm"}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300"
          >
            SkillVoo
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#skills" className="text-white/80 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#waitlist" className="text-white/80 hover:text-white transition-colors">
              Join Us
            </a>
          </div>

          <a
            href="#waitlist"
            className={`px-6 py-2.5 rounded-full text-white transition-all duration-200 
                     ${
                       isScrolled
                         ? "bg-white/20 hover:bg-white/30"
                         : "bg-white/10 border border-white/20 hover:bg-white/20"
                     }`}
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  )
}

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()
      if (response.ok) {
        setMessage("Thank you for registering! We will notify you soon.")
        setName("")
        setEmail("")
      } else {
        setMessage(`Error: ${data.message || "There was a problem processing your request."}`)
      }
    } catch (error) {
      console.error("Error:", error)
      setMessage("There was an error connecting to the server. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] z-0"></div>
          <div className="absolute -inset-[10px] bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl z-0 animate-aurora"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="relative animate-fade-in">
              <div className="absolute -top-10 sm:-top-20 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 sm:-top-10 left-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl"></div>
              <div className="absolute -top-12 sm:-top-15 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"></div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-300 animate-slide-up px-4">
                Transform Your Life with{" "}
                <span className="relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                    Unique Skills
                  </span>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400"></div>
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-10 md:mb-12 max-w-[90%] sm:max-w-3xl mx-auto leading-relaxed animate-slide-up px-4">
                Personalized courses for you, daily 10-minute sessions, and transformative results.
                <br className="hidden sm:block" />
                Start today and unlock your potential!
              </p>

              <div className="flex justify-center gap-4 animate-slide-up-delay-2 px-4">
                <Link
                  href="#waitlist"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 rounded-full 
                           text-base sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300
                           hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900
                           w-full sm:w-auto max-w-xs mx-auto"
                >
                  <span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 blur-lg opacity-0 
                                 group-hover:opacity-75 transition-opacity duration-300"
                  ></span>
                  <span className="relative">Join the Waitlist</span>
                </Link>
              </div>

              <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto animate-slide-up-delay-3 px-4">
                {[
                  { number: "10K+", label: "Active Users" },
                  { number: "50+", label: "Unique Skills" },
                  { number: "95%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-slate-900 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] z-0"></div>
          <div className="absolute top-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-[#581c87]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-[#7e22ce]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute center-0 left-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-[#6b21a8]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-full blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-purple-900">
                    What is SkillVoo?
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-700 mb-6 leading-relaxed">
                    SkillVoo is an innovative learning platform that transforms the way you develop personal skills.
                    Through our AI-powered system, we create personalized daily sessions that adapt to your learning
                    style and progress.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-purple-900">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-medium">Personalized Learning</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-900">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-medium">Daily Sessions</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-purple-900">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-medium">AI-Powered</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-900">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-medium">Progress Tracking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-12">
                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">10-Minute Daily Sessions</h3>
                    <p className="text-slate-600">
                      Each day, you&apos;ll receive a carefully crafted 10-minute session that includes theory,
                      practical exercises, and real-world applications.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">AI-Driven Personalization</h3>
                    <p className="text-slate-600">
                      Our AI system adapts your learning path based on your progress, preferences, and learning style to
                      ensure maximum effectiveness.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">Practical Application</h3>
                    <p className="text-slate-600">
                      Every session includes practical exercises and challenges that help you apply your new skills in
                      real-life situations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 text-center">
              <div className="inline-flex items-center justify-center">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-900">
                  Ready to start your journey?
                </span>
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
                Join thousands of users transforming their lives
              </h3>
              <div className="mt-6">
                <Link
                  href="#waitlist"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#581c87] to-[#7e22ce] text-white font-medium hover:opacity-90 transition-opacity duration-200"
                >
                  Get Started Now
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-[#faf5ff] relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-[#581c87]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-[#7e22ce]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-[#6b21a8]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#581c87] to-[#7e22ce]">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-[#581c87]/70 px-4">
              Our simple yet powerful process to help you develop new skills and transform your life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl
                         transition-all duration-300 transform hover:-translate-y-2 border border-[#581c87]/10"
              >
                <div className="relative w-12 sm:w-16 h-12 sm:h-16 mb-6 sm:mb-8 mx-auto">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#581c87]/10 to-[#7e22ce]/10 
                                rounded-full group-hover:scale-110 transition-transform duration-300"
                  ></div>
                  <div
                    className="relative w-full h-full flex items-center justify-center text-[#581c87] 
                                group-hover:text-[#7e22ce] transition-colors duration-300"
                  >
                    {feature.icon}
                  </div>
                </div>

                <div
                  className="absolute top-4 right-4 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gradient-to-r 
                              from-[#581c87]/10 to-[#7e22ce]/10 flex items-center justify-center"
                >
                  <span className="text-xs sm:text-sm font-semibold text-[#581c87]">{index + 1}</span>
                </div>

                <h3
                  className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 text-center group-hover:text-[#581c87] 
                             transition-colors duration-300"
                >
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4">
            <div
              className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#581c87]/5 to-[#7e22ce]/5 
                          rounded-full text-[#581c87] hover:text-[#7e22ce] transition-colors duration-300"
            >
              <span className="text-sm font-medium">Ready to start your journey?</span>
              <Link
                href="#waitlist"
                className="inline-flex items-center gap-1 sm:gap-2 font-semibold hover:gap-3 transition-all duration-300"
              >
                Join Now
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#faf5ff] to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-[#581c87]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-[#7e22ce]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-0 right-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-[#6b21a8]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#581c87] to-[#7e22ce]">
              Examples of Personal Skills to Develop
            </h2>
            <p className="text-base sm:text-lg text-[#581c87]/70 px-4">
              Discover our wide variety of personal skills to develop. Each day, you&apos;ll receive theory, examples,
              and practical exercises to apply in your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl
                         transition-all duration-300 transform hover:-translate-y-2 border border-[#581c87]/10"
              >
                <div className="relative w-12 sm:w-16 h-12 sm:h-16 mb-6 sm:mb-8">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#581c87]/10 to-[#7e22ce]/10 
                                rounded-full group-hover:scale-110 transition-transform duration-300"
                  ></div>
                  <div
                    className="relative w-full h-full flex items-center justify-center text-[#581c87] 
                                group-hover:text-[#7e22ce] transition-colors duration-300"
                  >
                    {skill.icon}
                  </div>
                </div>

                <h3
                  className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 group-hover:text-[#581c87] 
                             transition-colors duration-300"
                >
                  {skill.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">{skill.description}</p>

                <div className="flex items-center text-[#581c87] group-hover:text-[#7e22ce] transition-colors duration-300">
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4">
            <div className="inline-flex flex-col items-center">
              <p className="text-sm sm:text-base text-[#581c87]/70 mb-6">
                Want to explore more skills? Join our waitlist to get access to our full library.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#581c87] to-[#7e22ce]">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]"></div>
          <div className="absolute top-0 left-1/4 w-56 h-56 bg-white/10 rounded-full mix-blend-overlay filter blur-2xl animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-white/10 rounded-full mix-blend-overlay filter blur-2xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-white mb-4 [text-shadow:_0_1px_20px_rgb(255_255_255_/_20%)]">
                Join the Waitlist!
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Be among the first to access our platform when it&apos;s ready.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white 
                               placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30
                               focus:border-transparent transition-all duration-200 hover:bg-white/[0.15]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white 
                               placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30
                               focus:border-transparent transition-all duration-200 hover:bg-white/[0.15]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-4 bg-white rounded-xl font-semibold text-[#581c87] 
                           hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl
                           transform hover:-translate-y-0.5 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#581c87]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Join the Waitlist
                    </span>
                  )}
                </button>
              </form>

              {message && (
                <div
                  className={`mt-4 p-3 rounded-lg ${message.startsWith("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
                >
                  {message}
                </div>
              )}

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/80">
                  <div className="flex items-center justify-center gap-2 bg-white/5 rounded-lg py-2 px-3">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="text-sm font-medium">Free Access</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 bg-white/5 rounded-lg py-2 px-3">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" />
                    </svg>
                    <span className="text-sm font-medium">Secure &amp; Private</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 bg-white/5 rounded-lg py-2 px-3">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z" />
                    </svg>
                    <span className="text-sm font-medium">Cancel Anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#1a0c2c] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]"></div>
          <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-[#581c87]/10 rounded-full mix-blend-overlay filter blur-2xl"></div>
          <div className="absolute top-0 right-1/4 w-56 h-56 bg-[#7e22ce]/10 rounded-full mix-blend-overlay filter blur-2xl"></div>
        </div>

        <div className="relative">
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-6">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                    SkillVoo
                  </span>
                </Link>
                <p className="text-white/60 leading-relaxed">
                  Transforming lives through personalized learning. Join us on the journey of continuous growth and
                  development.
                </p>
                <div className="flex items-center gap-4">
                  {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                    <Link
                      key={social}
                      href={`https://${social}.com/skillvoo`}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
                               hover:bg-white/10 transition-colors duration-200"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5 text-white/80" />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {["Home", "Courses", "About Us", "Contact"].map((link) => (
                    <li key={link}>
                      <Link
                        href={`/${link.toLowerCase().replace(" ", "-")}`}
                        className="text-white/60 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#581c87] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                  Contact
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-white/60">
                    <svg className="w-5 h-5 mr-3 text-[#581c87]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    info@skillvoo.com
                  </li>
                  <li className="flex items-center text-white/60">
                    <svg className="w-5 h-5 mr-3 text-[#581c87]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    San Francisco, CA
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                  Newsletter
                </h4>
                <p className="text-white/60 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white 
                             placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#581c87]/50
                             focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-[#581c87] to-[#7e22ce] rounded-lg
                             text-white font-medium hover:opacity-90 transition-opacity duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-white/40 text-sm">© {new Date().getFullYear()} SkillVoo. All rights reserved.</div>
                <div className="flex items-center gap-6 text-sm">
                  <Link href="/privacy" className="text-white/40 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-white/40 hover:text-white transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="text-white/40 hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

