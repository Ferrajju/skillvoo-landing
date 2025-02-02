"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import ThemeToggle from "../components/ThemeToggle"
import { LanguageToggle } from "@/components/ui/language-toggle"
import IlluminatedLogo from "../components/IluminatedLogo"

const Particle = () => {
  const size = Math.random() * 5 + 2
  const duration = Math.random() * 2 + 1
  const initialX = Math.random() * window.innerWidth
  const initialY = Math.random() * window.innerHeight
  const endX = (Math.random() - 0.5) * 200
  const endY = (Math.random() - 0.5) * 200

  return (
    <motion.div
      className="particle"
      style={
        {
          width: size,
          height: size,
          x: initialX,
          y: initialY,
          // Use a valid way to set custom properties
          "--end-x": `${endX}px`,
          "--end-y": `${endY}px`,
        } as React.CSSProperties
      }
      animate={{
        x: [0, endX, 0],
        y: [0, endY, 0],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const { t } = useLanguage()
  const controls = useAnimation()
  const [particles, setParticles] = useState<number[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
    setParticles(Array.from({ length: 50 }, (_, i) => i))
  }, [controls])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove])

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
      <div
        className="cursor-spotlight"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="cursor-dot"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-semibold">
              <IlluminatedLogo />
            </Link>
            <div className="flex items-center space-x-8">
              <Link
                href="#how-it-works"
                className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Cómo Funciona
              </Link>
              <Link
                href="#benefits"
                className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Beneficios
              </Link>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <section className="min-h-screen flex items-center justify-center hero-background">
          {particles.map((_) => (
            <Particle key={_} />
          ))}
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="hero-glow max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight gradient-text"
              >
                Today Is the Day to Start Improving
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-300"
              >
                Learn something new every day. From marketing to finance, get inspired and take action in 5 minutes.
              </motion.h2>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{ delay: 0.4 }}
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
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{ delay: 0.6 }}
              className="mt-6 text-gray-600 dark:text-gray-400"
            >
              +10,000 personas ya reciben Skillsletter cada mañana
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Ilustración de aprendizaje"
                width={300}
                height={300}
                className="mx-auto floating"
              />
            </motion.div>
          </div>
        </section>

        {/* El resto del contenido se mantiene igual */}
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

