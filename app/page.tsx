'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent,  } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Clock, Brain, Zap, BookOpen, UserPlus, CheckCircle, Sparkles, Target, Puzzle, Lightbulb, MessageSquare } from 'lucide-react'
import Image from "next/image"
import { useState } from 'react'
import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })
      const data = await response.json()
      if (response.ok) {
        setMessage('¡Gracias por registrarte! Recibirás tu curso gratuito pronto.')
        setName('')
        setEmail('')
      } else {
        setMessage(`Error: ${data.message || 'Hubo un problema al procesar tu solicitud.'}`)
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage('Hubo un error al conectar con el servidor. Por favor, intenta de nuevo más tarde.')
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
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Skill%20(1)-cyWzceXVJrqFvvlloOAwSmMJbWSIAK.png"
                alt="SkillVoo Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </motion.div>
            <div className="mt-4 md:mt-0 text-center md:text-left">
              <motion.a 
                href="#registro" 
                onClick={(e) => scrollToSection(e, 'registro')}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 text-sm inline-flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(107,70,193)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Inscríbete ahora
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl sm:text-6xl font-bold text-purple-900 mb-6 font-heading leading-tight"
        >
          Descubre el potencial de tus habilidades personales
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-purple-700 mb-8 max-w-2xl mx-auto"
        >
          Cursos personalizados, sesiones diarias y resultados reales. ¡Comienza hoy a transformarte!
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full"
            onClick={(e) => scrollToSection(e as any, 'cursos')}
          >
            Explora los cursos
          </Button>
        </motion.div>
      </motion.section>

      {/* About the Platform Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="bg-purple-50 py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading"
          >
            ¿Qué ofrecemos?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-center text-purple-600 mb-8 max-w-3xl mx-auto"
          >
            Nuestra plataforma ofrece cursos personalizados diseñados para ayudarte a desarrollar habilidades como la concentración, la gestión del tiempo, el pensamiento crítico y más. Cada curso está estructurado en sesiones diarias, con ejercicios prácticos enviados por correo para que aprendas paso a paso y a tu ritmo.
          </motion.p>
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
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading"
          >
            ¿Cómo funciona?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Elige tu curso", icon: BookOpen, description: "Selecciona según tu nivel e interés" },
              { title: "Recibe sesiones diarias", icon: Mail, description: "Teoría, ejercicios y reflexiones" },
              { title: "Aplica lo aprendido", icon: Target, description: "Practica y sigue tu progreso" },
              { title: "Mejora tus habilidades", icon: Zap, description: "Alcanza tus metas personales" },
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

      {/* Skills Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        id="cursos" 
        className="bg-purple-50 py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading"
          >
            Habilidades que puedes dominar con nosotros
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Gestión del tiempo", icon: Clock },
              { title: "Comunicación efectiva", icon: MessageSquare },
              { title: "Pensamiento crítico", icon: Brain },
              { title: "Técnicas de concentración", icon: Target },
              { title: "Resolución de problemas", icon: Puzzle },
              { title: "Creatividad", icon: Lightbulb },
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, translateY: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="hover:shadow-lg transition-shadow border-none bg-white h-full">
                  <CardContent className="p-6 flex flex-col items-center">
                    <skill.icon className="w-16 h-16 text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold text-purple-800 mb-2 font-heading">{skill.title}</h3>
                    <p className="text-purple-600 text-center">Domina esta habilidad en solo 30 días y transforma tu vida.</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading"
          >
            Opiniones de nuestros estudiantes
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-none bg-purple-50 shadow-lg">
              <CardContent className="p-8 text-center">
                <p className="text-xl text-purple-700 mb-4 italic">
                  "Gracias a estos cursos, he mejorado mi concentración y soy más productivo que nunca."
                </p>
                <p className="text-purple-600 font-semibold">- Juan, estudiante</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Registration Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        id="registro" 
        className="bg-purple-50 py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-purple-800 mb-6 font-heading"
          >
            ¡Empieza hoy mismo!
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-purple-600 mb-8"
          >
            Recibe un curso gratuito al registrarte
          </motion.p>
          <motion.form 
            variants={fadeInUp}
            onSubmit={handleSubmit} 
            className="max-w-md mx-auto flex flex-col space-y-4"
          >
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Inscríbete ahora
                  </span>
                )}
              </Button>
            </motion.div>
          </motion.form>
          {message && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-purple-600"
            >
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 SkillVoo. Todos los derechos reservados.</p>
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="mt-4 space-x-4"
          >
            {['Términos y Condiciones', 'Política de Privacidad', 'Contacto'].map((link, index) => (
              <motion.a
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-purple-200 hover:text-white"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}

