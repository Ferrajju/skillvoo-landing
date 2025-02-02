"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import ThemeToggle from "../components/ThemeToggle"
import { LanguageToggle } from "@/components/ui/language-toggle"
import { Mail, Book, Zap, Star, TrendingUp } from "lucide-react"
import IlluminatedLogo from "../components/IluminatedLogo"

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()
      if (response.ok) {
        setMessage("¡Gracias por unirte a Skillsletter!")
        setEmail("")
      } else {
        setMessage(`Error: ${data.message || "Hubo un problema al procesar tu solicitud."}`)
      }
    } catch (error) {
      console.error("Error:", error)
      setMessage("Hubo un error al conectar con el servidor. Por favor, inténtalo de nuevo más tarde.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative bg-white dark:bg-black text-black dark:text-white">
      <header className="fixed w-full top-0 z-50 bg-white dark:bg-black shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-semibold">
              <IlluminatedLogo />
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="#how-it-works" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
                Cómo Funciona
              </Link>
              <Link href="#benefits" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
                Beneficios
              </Link>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <section className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              Aprende algo nuevo cada día con Skillsletter
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
            >
              Los mejores métodos, técnicas y trucos directos a tu correo
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-400"
            >
              Recibe en tu email los mejores hacks, técnicas y métodos para mejorar en lo que te apasiona y destacar en
              tu trabajo.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                required
                className="neo-input w-full sm:w-64"
              />
              <button type="submit" className="neo-button w-full sm:w-auto" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Únete Gratis"}
              </button>
            </motion.form>
            {message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 ${message.startsWith("Error") ? "text-red-500" : "text-green-500"}`}
              >
                {message}
              </motion.p>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 text-gray-600 dark:text-gray-400"
            >
              +10,000 personas ya reciben Skillsletter cada mañana
            </motion.p>
          </div>
        </section>

        <section id="how-it-works" className="py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">¿Cómo Funciona?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Mail className="w-12 h-12 mb-4" />,
                  title: "Te suscribes en 5 segundos",
                  description: "Ingresa tu email y listo",
                },
                {
                  icon: <Book className="w-12 h-12 mb-4" />,
                  title: "Recibes un email diario",
                  description: "Con hacks, trucos y datos útiles",
                },
                {
                  icon: <Zap className="w-12 h-12 mb-4" />,
                  title: "Aprendes y mejoras cada día",
                  description: "Con contenido accionable",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {step.icon}
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">¿Qué Contenido Recibirás?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Star className="w-6 h-6 mr-2" />, text: "Técnicas probadas para mejorar tu productividad" },
                { icon: <Book className="w-6 h-6 mr-2" />, text: "Métodos científicos para aprender más rápido" },
                {
                  icon: <TrendingUp className="w-6 h-6 mr-2" />,
                  text: "Trucos para destacar en tu trabajo o proyectos",
                },
                {
                  icon: <Zap className="w-6 h-6 mr-2" />,
                  text: "Hacks de crecimiento personal que realmente funcionan",
                },
                { icon: <Mail className="w-6 h-6 mr-2" />, text: "Datos curiosos y noticias relevantes en tu sector" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="final-cta" className="py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Recibe tu primer email mañana</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email"
                  required
                  className="neo-input w-full sm:w-64"
                />
                <button type="submit" className="neo-button w-full sm:w-auto">
                  Suscríbete ahora
                </button>
              </div>
            </form>
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              Suscríbete ahora y recibe nuestra guía gratuita sobre &ldquo;Cómo multiplicar tu productividad en 7
              días&rdquo;
            </p>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Skillsletter. {t("footer.rights")}
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
