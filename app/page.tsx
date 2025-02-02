"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, useAnimation } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import type React from "react" // Added import for React

const FloatingWord = ({ word, delay = 0 }: { word: string; delay?: number }) => {
  return (
    <motion.div
      className="floating-text"
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: [0.1, 0.2, 0.1],
        y: [-20, 20, -20],
        x: [-20, 20, -20],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      {word}
    </motion.div>
  )
}

const words = [
  "Productividad",
  "Crecimiento",
  "Desarrollo",
  "Innovación",
  "Aprendizaje",
  "Conocimiento",
  "Estrategia",
  "Mindset",
  "Habilidades",
  "Evolución",
]

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  const [text] = useTypewriter({
    words: ["1 idea.", "1 truco.", "1 email al día."],
    loop: true,
    delaySpeed: 2000,
  })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      <div className="hero-container min-h-screen flex items-center justify-center relative">
        {/* Floating Words Background */}
        {words.map((word, index) => (
          <FloatingWord key={word} word={word} delay={index * 0.5} />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="glow-effect mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-glow">
                <span>{text}</span>
                <Cursor cursorStyle="_" />
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl md:text-2xl text-white/80 mb-8"
              >
                Aprende algo útil en menos de 2 minutos.
              </motion.p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Introduce tu email"
                required
                className="neo-input"
              />
              <button type="submit" className="neo-button">
                SUSCRÍBETE GRATIS
              </button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-8 text-white/60 text-sm"
            >
              Únete a +10,000 personas que ya mejoran cada día
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

