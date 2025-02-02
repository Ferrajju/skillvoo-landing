"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import ThemeToggle from "../components/ThemeToggle"
import { LanguageToggle } from "@/components/ui/language-toggle"
import IlluminatedLogo from "../components/IluminatedLogo"

const Particle = ({ index }: { index: number }) => {
  const size = Math.random() * 5 + 2
  const duration = Math.random() * 2 + 1
  const initialX = Math.random() * window.innerWidth
  const initialY = Math.random() * window.innerHeight
  const endX = (Math.random() - 0.5) * 200
  const endY = (Math.random() - 0.5) * 200

  return (
    <motion.div
      className="particle"
      style={{
        width: size,
        height: size,
        x: initialX,
        y: initialY,
      }}
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

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
    setParticles(Array.from({ length: 50 }, (_, i) => i))
  }, [controls])

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
        setMessage("Thank you for joining Skillsletter!")
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
    <div className="min-h-screen relative bg-white dark:bg-black text-black dark:text-white">
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
                How It Works
              </Link>
              <Link
                href="#benefits"
                className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Benefits
              </Link>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <section className="min-h-screen flex items-center justify-center hero-background">
          {particles.map((index) => (
            <Particle key={index} index={index} />
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
                placeholder="Your email"
                required
                className="neo-input w-full sm:w-64"
              />
              <button type="submit" className="neo-button w-full sm:w-auto" disabled={isLoading}>
                {isLoading ? "Sending..." : "Join Free"}
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
              +10,000 people already receive Skillsletter every morning
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Learning illustration"
                className="mx-auto floating"
              />
            </motion.div>
          </div>
        </section>

        <section id="how-it-works" className="py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Subscribe in 5 seconds",
                  description: "Enter your email and you're set",
                },
                {
                  title: "Receive a daily email",
                  description: "With hacks, tricks, and useful data",
                },
                {
                  title: "Learn and improve every day",
                  description: "With actionable content",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center p-6 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-lg golden-border"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Content Will You Receive?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Proven techniques to improve your productivity",
                "Scientific methods to learn faster",
                "Tricks to stand out in your work or projects",
                "Personal growth hacks that really work",
                "Curious facts and relevant news in your sector",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="final-cta" className="py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Receive your first email tomorrow</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="neo-input w-full sm:w-64"
                />
                <button type="submit" className="neo-button w-full sm:w-auto">
                  Subscribe now
                </button>
              </div>
            </form>
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              Subscribe now and receive our free guide on "How to multiply your productivity in 7 days"
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
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

