"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

import {
  Mail,
  Clock,
  Brain,
  Zap,
  BookOpen,
  CheckCircle,
  Target,
  PenTool,
  MessageSquare,
  Users,
  Dumbbell,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
  e.preventDefault()
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
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
      setMessage("Por favor, introduce un correo electrónico válido.")
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
        setMessage("Thank you for registering! You&apos;ll receive your free course soon.")
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white font-sans">
      {/* Navigation bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="bg-white shadow-sm sticky top-0 z-10"
      >
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo y enlace "Precios" a la izquierda */}
          <div className="flex items-center space-x-4 w-1/3">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Image
                src="/images/skillvoo-logo.png"
                alt="SkillVoo Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </motion.div>
            
          </div>

          {/* Espacio central vacío */}
          <div className="w-1/3"></div>

          {/* Botón centrado a la derecha */}
          <div className="flex justify-end items-center w-1/3">
            <motion.button
              onClick={(e) => scrollToSection(e, "registro")}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full transition-transform duration-300 text-sm inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Join the waitlist
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center bg-gradient-to-b from-purple-50 to-white rounded-lg shadow-md mb-[13rem] mt-8"
      >
        {/* Texto principal */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl font-bold text-purple-900 mb-6 font-heading leading-tight"
        >
          Transform Your Life with Unique Skills
        </motion.h1>

        {/* Descripción */}
        <motion.p variants={fadeInUp} className="text-xl text-purple-700 mb-8 max-w-2xl">
          Personalized courses for you, daily <b>10-minute</b> sessions, and transformative results. Start today and
          unlock your potential!
        </motion.p>

        {/* Botón de llamada a la acción */}
        <motion.div variants={fadeInUp}>
          
        </motion.div>
      </motion.section>

      {/* What is SkillVoo Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="bg-purple-50 py-20 mt-30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading">
            What is SkillVoo?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-2xl text-center text-gradient font-semibold mb-8 max-w-3xl mx-auto p-6 bg-purple-100 rounded-lg shadow-sm"
          >
            SkillVoo is the first innovative platform offering AI-powered personalized courses to develop personal
            skills through daily email sessions.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Daily Email Sessions",
                icon: Mail,
                description: "Receive personalized content directly in your inbox",
              },
              {
                title: "AI-Adaptive Learning",
                icon: Brain,
                description: "We use artificial intelligence to adapt your learning experience",
              },
              {
                title: "Variety of Skills",
                icon: Target,
                description: "Wide range of personal skills to develop",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <feature.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-purple-800 mb-2">{feature.title}</h3>
                <p className="text-purple-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading">
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Choose a Skill",
                icon: BookOpen,
                description: "Select the personal skill you want to develop",
              },
              {
                title: "Receive Daily Sessions",
                icon: Mail,
                description: "Get your daily session with everything you need in your email",
              },
              {
                title: "Learn and Practice",
                icon: Target,
                description: "Apply what you&apos;ve learned in your daily life with session proposals",
              },
              {
                title: "Improve with AI",
                icon: Zap,
                description: "Personalized learning and exercises with artificial intelligence",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-none bg-purple-50 h-full shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-purple-100 p-3 rounded-full mb-4">
                      <step.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2 font-heading">{step.title}</h3>
                    <p className="text-purple-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills and Courses Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        id="cursos"
        className="bg-purple-50 py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading">
            Examples of Personal Skills to Develop
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-center text-purple-600 mb-8 max-w-3xl mx-auto">
            Discover our wide variety of personal skills to develop. Each day, you&apos;ll receive theory, examples, and
            practical exercises to apply in your daily life.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Time Management",
                icon: Clock,
                description: "Optimize your productivity and achieve more in less time",
              },
              {
                title: "Effective Communication",
                icon: MessageSquare,
                description: "Improve your verbal and non-verbal communication skills",
              },
              {
                title: "Mental Influence",
                icon: Users,
                description: "Learn techniques of psychological influence and persuasion",
              },
              {
                title: "Negotiation",
                icon: MessageSquare,
                description: "Develop skills to reach beneficial agreements in any situation",
              },
              {
                title: "Creative Writing",
                icon: PenTool,
                description: "Unlock your narrative potential and learn to create captivating stories",
              },
              {
                title: "Discipline Development",
                icon: Dumbbell,
                description: "Strengthen your willpower and build solid habits to achieve your goals",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, translateY: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="hover:shadow-lg transition-shadow border-none bg-white h-full">
                  <CardContent className="p-6 flex flex-col items-center">
                    <course.icon className="w-16 h-16 text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold text-purple-800 mb-2 font-heading">{course.title}</h3>
                    <p className="text-purple-600 text-center">{course.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Characteristics Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading">
            Featured Characteristics
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Adaptive Learning",
                description: "Our AI system adjusts to your learning pace and style",
                icon: Brain,
              },
              {
                title: "Daily Email Sessions",
                description: "Receive 10-minute personalized content directly in your inbox",
                icon: Mail,
              },
              {
                title: "Personalized Practical Exercises",
                description: "Apply what you&apos;ve learned with AI-adapted interactive activities",
                icon: Target,
              },
              {
                title: "Variety of Skills",
                description: "Wide range of personal skills to develop",
                icon: BookOpen,
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-purple-50 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-600 mr-4" />
                  <h3 className="text-xl font-semibold text-purple-800">{feature.title}</h3>
                </div>
                <p className="text-purple-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        id="registro"
        className="bg-purple-50 py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Título de la sección */}
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-purple-800 mb-6 font-heading">
            Join the Waitlist!
          </motion.h2>

          {/* Mensaje para indicar que la página está en desarrollo */}
          <motion.p variants={fadeInUp} className="text-xl text-purple-600 mb-8 max-w-2xl mx-auto">
            We&apos;re working on something incredible for you. Be among the first to access our platform when it&apos;s
            ready. Register now and receive exclusive updates directly in your email.
          </motion.p>

          {/* Formulario de registro */}
          <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col space-y-4">
            <Input
              type="text"
              placeholder="Your name"
              className="text-purple-800 placeholder-purple-400 bg-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Your email address"
              className="text-purple-800 placeholder-purple-400 bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                    Join the Waitlist!
                  </span>
                )}
              </Button>
            </motion.div>
          </motion.form>

          {/* Mensaje de confirmación */}
          {message && (
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-purple-600">
              {message}
            </motion.p>
          )}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-purple-800 text-white py-12"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image src="/images/skillvoo-logo.png" alt="SkillVoo Logo" width={150} height={50} className="mb-4" />
              <p className="text-purple-200">Transforming lives through personalized learning.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#cursos" className="text-purple-200 hover:text-white transition-colors">
                    Courses
                  </a>
                </li>
                
                <li>
                  <a href="#registro" className="text-purple-200 hover:text-white transition-colors">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-purple-200">Email: info@skillvoo.com</p>
              
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-700 text-center">
            <p>&copy; 2025 SkillVoo. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

