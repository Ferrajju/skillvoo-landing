import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Clock, Brain, Zap, Calendar, BookOpen, UserPlus, CheckCircle } from 'lucide-react'
import Image from "next/image"
import { useState } from 'react'

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
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center max-w-4xl mx-auto"> {/* Update 2: Modified max-width */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Skill%20(1)-cyWzceXVJrqFvvlloOAwSmMJbWSIAK.png"
              alt="SkillVoo Logo"
              width={150}
              height={50}
              className="object-contain"
            /> {/* Update 1: Increased logo size */}
            <a 
              href="#waitlist" 
              onClick={scrollToWaitlist}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 text-sm"
            >
              Únete a la lista de espera
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-purple-900 mb-6 font-heading leading-tight">
          Domina habilidades únicas<br />en solo 30 días
        </h1>
        <p className="text-xl text-purple-700 mb-8 max-w-2xl mx-auto">
          La primera plataforma centrada en el desarrollo de habilidades personales únicas. Transforma tu vida, un mes a la vez.
        </p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full">
          Comienza Tu Transformación
        </Button>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading">Descubre Nuestros Cursos de 30 Días</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Empieza a organizarte", icon: Calendar },
            { title: "Disciplina Personal", icon: Zap },
            { title: "Psicología Inversa", icon: Brain },
            { title: "Deja de Procrastinar", icon: Clock },
            { title: "Técnicas de Estudio", icon: BookOpen },
            { title: "Vence la Ansiedad Social", icon: UserPlus },
          ].map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-none bg-white">
              <CardContent className="p-6 flex flex-col items-center">
                <course.icon className="w-16 h-16 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-purple-800 mb-2 font-heading">{course.title}</h3>
                <p className="text-purple-600 text-center">Domina esta habilidad en solo 30 días y transforma tu vida.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Method Section */}
      <section id="metodo" className="bg-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading">El Método SkillVoo: Tu Camino al Éxito</h2>
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
              <Card key={index} className="border-none bg-white">
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
            ))}
          </div>
        </div>
      </section>

      {/* Year Progress Section */}
      <section className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12 font-heading">Tu Año de Transformación con SkillVoo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-6xl font-bold text-purple-600 mb-2 font-heading">12</div>
            <p className="text-xl text-purple-800">Habilidades Dominadas</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-purple-600 mb-2 font-heading">365</div>
            <p className="text-xl text-purple-800">Días de Aprendizaje</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-purple-600 mb-2 font-heading">∞</div>
            <p className="text-xl text-purple-800">Potencial Desbloqueado</p>
          </div>
        </div>
        <p className="text-center text-lg text-purple-700 mt-12 max-w-2xl mx-auto">
          Imagina cómo será tu vida después de dominar 12 habilidades únicas en un año. 
          Con SkillVoo, no solo aprendes, te transformas.
        </p>
      </section>

      {/* Pricing Section */}
      <section className="bg-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-6 font-heading">Planes Disponibles</h2>
          <p className="text-xl text-purple-700 text-center mb-12">Conoce nuestras opciones de suscripción</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Trial Plan */}
            <Card className="border-none bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-800 font-heading">Plan de Prueba</CardTitle>
                <p className="text-purple-600">14 días de acceso premium</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-purple-800 font-heading">
                  Gratis
                </div>
                <ul className="space-y-3">
                  {["Acceso completo por 14 días", "Todos los cursos disponibles", "Sin compromiso"].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-purple-400 bg-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Plan Recomendado
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-800 font-heading">Plan Premium</CardTitle>
                <p className="text-purple-600">Acceso completo a todo el contenido</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-800 font-heading">
                    $10/mes
                  </div>
                  <div className="text-sm text-purple-600 font-medium">
                    ¡30% de descuento para los primeros 100 usuarios!
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Acceso ilimitado a todos los cursos",
                    "Nuevos cursos cada mes",
                    "Contenido exclusivo",
                    "Cancela cuando quieras"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section id="waitlist" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-xl py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-heading">Sé parte de la revolución del aprendizaje</h2>
          <p className="text-xl text-purple-100 mb-4">Estamos a punto de lanzar algo extraordinario</p>
          <p className="text-lg text-purple-200 mb-8">Únete a nuestra lista de espera exclusiva y sé el primero en experimentar la transformación SkillVoo</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col space-y-4">
            <Input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="text-purple-800 placeholder-purple-400 bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold" disabled={isLoading}>
              {isLoading ? 'Procesando...' : 'Asegura tu lugar ahora'}
            </Button>
          </form>
          <p className="mt-6 text-sm text-purple-200">Los primeros 100 en la lista recibirán un 30% de descuento en su año premium y acceso a contenido exclusivo</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 SkillVoo. Todos los derechos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-purple-200 hover:text-white">Términos y Condiciones</a>
            <a href="#" className="text-purple-200 hover:text-white">Política de Privacidad</a>
            <a href="#" className="text-purple-200 hover:text-white">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

