'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Clock, Brain, Zap, Calendar, BookOpen, UserPlus, CheckCircle, Sparkles, Target, Puzzle, Lightbulb } from 'lucide-react'
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
              className="mb-4 md:mb-0"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Skill%20(1)-cyWzceXVJrqFvvlloOAwSmMJbWSIAK.png"
                alt="SkillVoo Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <p className="text-purple-600 font-semibold mb-2">¡Página en desarrollo! 🚀</p>
              <motion.a 
                href="#waitlist" 
                onClick={scrollToWaitlist}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 text-sm inline-flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(107,70,193)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Únete a nuestra lista de espera
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
          Domina habilidades únicas<br />en solo 30 días
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-purple-700 mb-8 max-w-2xl mx-auto"
        >
          La primera plataforma centrada en el desarrollo de habilidades personales únicas. Transforma tu vida, un mes a la vez.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full"
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
          Explora Nuestro Universo de Habilidades
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-purple-600 text-center mb-12 max-w-3xl mx-auto"
        >
          En SkillVoo, ofrecemos una amplia gama de cursos diseñados para potenciar tus habilidades personales en todas las áreas de tu vida. Desde la productividad hasta el crecimiento personal, tenemos el curso perfecto para ti.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            { title: "Organización y Productividad", icon: Calendar, description: "Optimiza tu tiempo y aumenta tu eficiencia" },
            { title: "Disciplina Personal", icon: Zap, description: "Desarrolla hábitos poderosos y constantes" },
            { title: "Inteligencia Emocional", icon: Brain, description: "Mejora tus relaciones y autoconocimiento" },
            { title: "Superación de la Procrastinación", icon: Clock, description: "Vence la postergación y logra tus metas" },
            { title: "Técnicas de Estudio Avanzadas", icon: BookOpen, description: "Aprende a aprender de manera efectiva" },
            { title: "Habilidades Sociales", icon: UserPlus, description: "Mejora tu comunicación y carisma" },
            { title: "Creatividad e Innovación", icon: Lightbulb, description: "Desbloquea tu potencial creativo" },
            { title: "Resolución de Problemas", icon: Puzzle, description: "Desarrolla un pensamiento crítico y analítico" },
            { title: "Liderazgo Personal", icon: Target, description: "Inspira y motiva desde tu ejemplo" },
            { title: "Mindfulness y Meditación", icon: Sparkles, description: "Cultiva la atención plena y reduce el estrés" },
          ].map((course, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, translateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="hover:shadow-lg transition-shadow border-none bg-white h-full">
                <CardContent className="p-6 flex flex-col items-center">
                  <course.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-purple-800 mb-2 font-heading text-center">{course.title}</h3>
                  <p className="text-purple-600 text-center text-sm">{course.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <p className="text-lg text-purple-700 mb-4">Y muchos más cursos por venir...</p>
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
        className="bg-purple-50 py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading"
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
                <Card className="border-none bg-white h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-semibold text-purple-800 font-heading">
                      <method.icon className="w-8 h-8 text-purple-600 mr-4" />
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-600">{method.description}</p>
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
          className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading"
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
              <div className="text-6xl font-bold text-purple-600 mb-2 font-heading">{stat.number}</div>
              <p className="text-xl text-purple-800">{stat.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.p 
          variants={fadeInUp}
          className="text-center text-lg text-purple-700 mt-12 max-w-2xl mx-auto"
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
          className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-xl py-16 px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-white mb-6 font-heading"
          >
            Sé parte de la revolución del aprendizaje
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-purple-100 mb-4"
          >
            Estamos a punto de lanzar algo extraordinario
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-purple-200 mb-8"
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
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-800 font-bold shadow-lg" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            className="mt-6 text-sm text-purple-200"
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

