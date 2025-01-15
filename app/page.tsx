'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Clock, Brain, Zap, Calendar, BookOpen, UserPlus, CheckCircle, Sparkles, Target, Puzzle, Lightbulb } from 'lucide-react'
import Image from "next/image"
import { useState } from 'react'
import { motion } from 'framer-motion'
import './globals.css';


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

const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const waitlistSection = document.getElementById('waitlist');
  if (waitlistSection) {
    waitlistSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()
      if (response.ok) {
        setMessage('¡Gracias por unirte a nuestra lista de espera!')
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
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="bg-card shadow-md sticky top-0 z-10"
      >
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
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
            <div className="flex items-center space-x-4">
              <p className="text-primary font-semibold hidden sm:block">¡Página en desarrollo! 🚀</p>
              <motion.a 
                href="#waitlist" 
                onClick={scrollToWaitlist}
                className="gradient-bg text-white font-semibold py-2 px-6 rounded-full transition duration-300 text-sm inline-flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,92,0)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Únete a la lista
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
          className="text-5xl sm:text-6xl font-bold mb-6 font-heading leading-tight gradient-text"
        >
          Domina habilidades únicas<br />en solo 30 días
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-secondary mb-8 max-w-2xl mx-auto"
        >
          La primera plataforma centrada en el desarrollo de habilidades personales únicas. Transforma tu vida, un mes a la vez.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Button 
            size="lg" 
            className="gradient-bg hover:opacity-90 text-white text-lg px-8 py-3 rounded-full"
          >
            Comienza Tu Transformación
          </Button>
        </motion.div>
      </motion.section>

      {/* Courses Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        id="cursos" 
        className="container mx-auto py-20 px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-purple-800 mb-6 font-heading"
        >
          Descubre Nuestros Cursos de 30 Días
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-purple-600 text-center mb-12 max-w-3xl mx-auto"
        >
          Transforma tu vida, un mes a la vez, con nuestros cursos intensivos diseñados para potenciar tus habilidades personales.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Maestría en Organización", 
              icon: Calendar,
              description: "Optimiza tu tiempo y aumenta tu productividad con técnicas probadas de gestión del tiempo y organización.",
              difficulty: "Intermedio"
            },
            { 
              title: "Forja de la Disciplina", 
              icon: Zap,
              description: "Desarrolla una voluntad de hierro y hábitos poderosos que te llevarán al éxito en todas las áreas de tu vida.",
              difficulty: "Avanzado"
            },
            { 
              title: "Psicología Práctica", 
              icon: Brain,
              description: "Aprende a comprender y manejar las emociones, mejorando tus relaciones y tu bienestar personal.",
              difficulty: "Intermedio"
            },
            { 
              title: "Vence la Procrastinación", 
              icon: Clock,
              description: "Supera el hábito de postergar y aprende a actuar de manera decisiva para alcanzar tus metas.",
              difficulty: "Principiante"
            },
            { 
              title: "Aprendizaje Acelerado", 
              icon: BookOpen,
              description: "Domina técnicas de estudio avanzadas y aprende a aprender de manera más eficiente y efectiva.",
              difficulty: "Intermedio"
            },
            { 
              title: "Maestro de la Comunicación", 
              icon: UserPlus,
              description: "Desarrolla habilidades de comunicación excepcionales y aumenta tu carisma e influencia social.",
              difficulty: "Avanzado"
            },
          ].map((course, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, translateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden h-full border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full p-3 bg-purple-100 mr-4">
                      <course.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-800 font-heading">{course.title}</h3>
                  </div>
                  <p className="text-purple-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-purple-500">Dificultad: {course.difficulty}</span>
                    <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                      Más información
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full"
          >
            Explora Todos los Cursos
          </Button>
        </motion.div>
      </motion.section>

      {/* Method Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        id="metodo" 
        className="bg-muted py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 font-heading gradient-text"
          >
            El Método SkillVoo: Tu Camino al Éxito
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Lecciones Diarias por Email",
                icon: Mail,
                description: "Recibe contenido conciso y accionable directamente en tu bandeja de entrada. Cada lección está diseñada para ser absorbida en menos de 10 minutos."
              },
              {
                title: "30 Días de Práctica Intensiva",
                icon: Clock,
                description: "Nuestro programa estructurado de un mes te guía paso a paso para dominar cada habilidad. La práctica diaria asegura la retención y la mejora continua."
              },
              {
                title: "Objetivos Diarios Claros",
                icon: Brain,
                description: "Cada lección incluye una tarea específica para aplicar lo aprendido. Estos micro-objetivos te ayudan a construir nuevos hábitos de manera gradual y sostenible."
              },
              {
                title: "Contenido Basado en Evidencia",
                icon: BookOpen,
                description: "Todo lo que enseñamos en SkillVoo está respaldado por investigación científica y los métodos más efectivos conocidos, garantizando información confiable y actualizada."
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-none bg-card h-full shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="rounded-full p-2 mr-4 gradient-bg">
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold font-heading">{method.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Year Progress Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="container mx-auto py-20 px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-12 font-heading gradient-text"
        >
          Tu Año de Transformación con SkillVoo
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { number: "12", text: "Habilidades Dominadas" },
            { number: "365", text: "Días de Aprendizaje" },
            { number: "∞", text: "Potencial Desbloqueado" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="text-6xl font-bold mb-2 font-heading gradient-text">{stat.number}</div>
              <p className="text-xl text-secondary">{stat.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.p 
          variants={fadeInUp}
          className="text-center text-lg text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          Imagina cómo será tu vida después de dominar 12 habilidades únicas en un año. 
          Con SkillVoo, no solo aprendes, te transformas.
        </motion.p>
      </motion.section>

      {/* Waitlist CTA Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        id="waitlist" 
        className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div 
          variants={fadeInUp}
          className="gradient-bg rounded-2xl shadow-xl py-16 px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-white mb-6 font-heading"
          >
            Sé parte de la revolución del aprendizaje
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-white mb-4"
          >
            Estamos a punto de lanzar algo extraordinario
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-white/80 mb-8"
          >
            Únete a nuestra lista de espera exclusiva y sé el primero en experimentar la transformación SkillVoo
          </motion.p>
          <motion.form 
            variants={fadeInUp}
            onSubmit={handleSubmit} 
            className="max-w-md mx-auto flex flex-col space-y-4"
          >
            <Input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="text-foreground placeholder-muted-foreground bg-background"
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
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-accent-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Asegura tu lugar ahora
                  </span>
                )}
              </Button>
            </motion.div>
          </motion.form>
          {message && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-white"
            >
              {message}
            </motion.p>
          )}
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-sm text-white/80"
          >
            Los primeros 100 en la lista recibirán un 30% de descuento en su año premium y acceso a contenido exclusivo
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-card text-card-foreground py-12"
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
                className="text-muted-foreground hover:text-primary"
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

