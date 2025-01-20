"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

import { Mail, Clock, Brain, Zap, BookOpen, CheckCircle, Target, Puzzle, Lightbulb, MessageSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

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
    setIsLoading(true)
    setMessage("")
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      })
      const data = await response.json()
      if (response.ok) {
        setMessage("¡Gracias por registrarte! Recibirás tu curso gratuito pronto.")
        setName("")
        setEmail("")
      } else {
        setMessage(`Error: ${data.message || "Hubo un problema al procesar tu solicitud."}`)
      }
    } catch (error) {
      console.error("Error:", error)
      setMessage("Hubo un error al conectar con el servidor. Por favor, intenta de nuevo más tarde.")
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
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Skill%20(1)-cyWzceXVJrqFvvlloOAwSmMJbWSIAK.png"
                alt="SkillVoo Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </motion.div>
            <Link href="/prices" className="text-purple-600 hover:text-purple-800 transition-colors">
              Precios
            </Link>
          </div>

          {/* Botón centrado pero ligeramente desplazado a la izquierda */}
          <div className="relative w-full">
            <motion.button
              onClick={(e) => scrollToSection(e, "registro")}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full transition-transform duration-300 text-sm inline-flex items-center absolute top-[-30px] left-[30%]"
              whileHover={{ scale: 1.05 }} // Solo efecto de ampliación
              whileTap={{ scale: 0.95 }} // Contracción al hacer clic
            >
              <Mail className="w-4 h-4 mr-2" />
              Únete a la lista de espera
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
          Transforma tu vida con habilidades únicas
        </motion.h1>

        {/* Descripción */}
        <motion.p variants={fadeInUp} className="text-xl text-purple-700 mb-8 max-w-2xl">
          Cursos personalizados para ti, sesiones diarias de solo <b>10 minutos</b>, y resultados que transforman.
          ¡Empieza hoy y desbloquea tu potencial!
        </motion.p>

        {/* Botón de llamada a la acción */}
        <motion.div variants={fadeInUp}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl"
            onClick={(e) => scrollToSection(e, "cursos")}
          >
            Explora los cursos
          </Button>
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
            ¿Qué es SkillVoo?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-2xl text-center text-gradient font-semibold mb-8 max-w-3xl mx-auto p-6 bg-purple-100 rounded-lg shadow-sm"
          >
            SkillVoo es la primera plataforma innovadora que ofrece cursos personalizados impulsados por IA para
            desarrollar habilidades personales a través de sesiones diarias por correo electrónico.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Sesiones Diarias por Email",
                icon: Mail,
                description: "Recibe contenido personalizado directamente en tu bandeja de entrada",
              },
              {
                title: "Aprendizaje Adaptativo con IA",
                icon: Brain,
                description: "Utilizamos inteligencia artificial para adaptar tu experiencia de aprendizaje",
              },
              {
                title: "Variedad de Habilidades",
                icon: Target,
                description: "Amplia gama de habilidades personales para desarrollar",
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
            ¿Cómo funciona?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Elige una habilidad",
                icon: BookOpen,
                description: "Selecciona la habilidad personal que deseas desarrollar",
              },
              {
                title: "Recibe sesiones diarias",
                icon: Mail,
                description: "Recibe  en tu correo la sesión diaria con todo lo que necesitas",
              },
              {
                title: "Aprende y practica",
                icon: Target,
                description: "Aplica lo aprendido en tu día a día con las propuestas de la sesión ",
              },
              {
                title: "Mejora con IA",
                icon: Zap,
                description: "Aprendizaje y ejercicios personalizados con inteligencia artificial",
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
            Ejemplos de Habilidades Personales a Desarrollar
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-center text-purple-600 mb-8 max-w-3xl mx-auto">
            Descubre nuestra amplia variedad de habilidades personales para desarrollar. Cada día, recibirás teoría,
            ejemplos y ejercicios prácticos para aplicar en tu vida diaria.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gestión del tiempo",
                icon: Clock,
                description: "Optimiza tu productividad y logra más en menos tiempo",
              },
              {
                title: "Comunicación efectiva",
                icon: MessageSquare,
                description: "Mejora tus habilidades de comunicación verbal y no verbal",
              },
              {
                title: "Manipulación mental",
                icon: Brain,
                description: "Aprende técnicas de influencia y persuasión psicológica",
              },
              {
                title: "Técnicas de concentración",
                icon: Target,
                description: "Aumenta tu enfoque y reduce las distracciones",
              },
              {
                title: "Resolución de problemas",
                icon: Puzzle,
                description: "Aprende estrategias para abordar desafíos de manera efectiva",
              },
              {
                title: "Creatividad",
                icon: Lightbulb,
                description: "Desbloquea tu potencial creativo y genera ideas innovadoras",
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
            Características Destacadas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Aprendizaje Adaptativo con IA",
                description: "Nuestro sistema de IA se ajusta a tu ritmo y estilo de aprendizaje",
                icon: Brain,
              },
              {
                title: "Sesiones Diarias por Email",
                description: "Recibe contenido personalizado de 10 minutos directamente en tu bandeja de entrada",
                icon: Mail,
              },
              {
                title: "Ejercicios Prácticos Personalizados",
                description: "Aplica lo aprendido con actividades interactivas adaptadas por IA",
                icon: Target,
              },
              {
                title: "Variedad de Habilidades",
                description: "Amplia gama de habilidades personales para desarrollar",
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
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-purple-800 mb-6 font-heading">
            ¡Comienza tu viaje de aprendizaje hoy!
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-purple-600 mb-8 max-w-2xl mx-auto">
            Regístrate ahora y obtén acceso a un curso gratuito para experimentar el poder de SkillVoo.
          </motion.p>
          <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col space-y-4">
            <Input
              type="text"
              placeholder="Tu nombre"
              className="text-purple-800 placeholder-purple-400 bg-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Tu correo electrónico"
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
                    Procesando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Inscríbete ahora
                  </span>
                )}
              </Button>
            </motion.div>
          </motion.form>
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
              <h3 className="text-lg font-semibold mb-4">SkillVoo</h3>
              <p className="text-purple-200">Transformando vidas a través del aprendizaje personalizado.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#cursos" className="text-purple-200 hover:text-white transition-colors">
                    Cursos
                  </a>
                </li>
                <li>
                  <Link href="/prices" className="text-purple-200 hover:text-white transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <a href="#registro" className="text-purple-200 hover:text-white transition-colors">
                    Registro
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-purple-200">Email: info@skillvoo.com</p>
              <p className="text-purple-200">Teléfono: +1 234 567 890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-700 text-center">
            <p>&copy; 2025 SkillVoo. Todos los derechos reservados.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

