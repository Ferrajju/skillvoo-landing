"use client"

import type React from "react"
import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import ThemeToggle from "../components/ThemeToggle"
import { LanguageToggle } from "@/components/ui/language-toggle"

const features = [
  {
    titleKey: "features.micro-learning.title",
    descriptionKey: "features.micro-learning.description",
    icon: "⏱️",
  },
  {
    titleKey: "features.ai-powered.title",
    descriptionKey: "features.ai-powered.description",
    icon: "🧠",
  },
  {
    titleKey: "features.skill-growth.title",
    descriptionKey: "features.skill-growth.description",
    icon: "📈",
  },
  {
    titleKey: "features.community.title",
    descriptionKey: "features.community.description",
    icon: "🤝",
  },
]

const skills = [
  "Time Management",
  "Effective Communication",
  "Mental Influence",
  "Negotiation",
  "Creative Writing",
  "Discipline Development",
]

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      })

      const data = await response.json()
      if (response.ok) {
        setMessage("Thank you for joining our waitlist!")
        setEmail("")
        setName("")
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <header className="fixed w-full top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Link href="/" className="text-2xl font-semibold gradient-text">
                Skillsletter
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-8"
            >
              <Link
                href="#how-it-works"
                className="text-sm font-medium hover:text-blue-500 transition-colors duration-300"
              >
                {t("nav.how-it-works")}
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-blue-500 transition-colors duration-300">
                {t("nav.skills")}
              </Link>
              <Link href="#waitlist" className="neo-button">
                {t("nav.join-waitlist")}
              </Link>
              <LanguageToggle />
              <ThemeToggle />
            </motion.div>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <motion.div style={{ opacity, y }} className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-8 gradient-text">{t("hero.title")}</h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl mb-12 leading-relaxed text-gray-600 dark:text-gray-300"
              >
                {t("hero.description")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Link href="#waitlist" className="neo-button">
                  {t("cta.start-journey")}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 opacity-10"
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </div>
        </section>

        <section id="how-it-works" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-title text-center"
            >
              {t("how-it-works.title")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{feature.icon}</span>
                    <h3 className="text-2xl font-semibold gradient-text">{t(feature.titleKey)}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{t(feature.descriptionKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 z-0 opacity-50">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
                  <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                  <stop offset="0%" stop-color="rgba(255, 0, 255, 0.1)"></stop>
                  <stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop>
                </radialGradient>
                <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
                  <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                  <stop offset="0%" stop-color="rgba(255, 255, 0, 0.1)"></stop>
                  <stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop>
                </radialGradient>
                <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
                  <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                  <stop offset="0%" stop-color="rgba(0, 255, 255, 0.1)"></stop>
                  <stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop>
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
                <animate attributeName="x" dur="20s" values="0%;25%;0%" repeatCount="indefinite" />
                <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
              </rect>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
                <animate attributeName="x" dur="23s" values="0%;25%;0%" repeatCount="indefinite" />
                <animate attributeName="y" dur="24s" values="0%;25%;0%" repeatCount="indefinite" />
              </rect>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
                <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite" />
                <animate attributeName="y" dur="26s" values="0%;25%;0%" repeatCount="indefinite" />
              </rect>
            </svg>
          </div>
        </section>

        <section id="skills" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-title text-center"
            >
              {t("skills.title")}
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center"
                >
                  <h3 className="text-xl font-medium gradient-text">{skill}</h3>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            >
              {t("skills.description")}
            </motion.p>
          </div>
          <div className="absolute inset-0 z-0 opacity-30">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#3b82f6" />
                  <stop offset="100%" stop-color="#8b5cf6" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 C16.6666667,66 33.3333333,98 50,98 C66.6666667,98 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"
                fill="url(#gradient)"
              >
                <animate
                  attributeName="d"
                  dur="10s"
                  repeatCount="indefinite"
                  values="
                  M0,0 C16.6666667,66 33.3333333,98 50,98 C66.6666667,98 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z;
                  M0,0 C16.6666667,32 33.3333333,0 50,0 C66.6666667,0 83.3333333,32 100,0 L100,100 L0,100 L0,0 Z;
                  M0,0 C16.6666667,66 33.3333333,98 50,98 C66.6666667,98 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z
                "
                />
              </path>
            </svg>
          </div>
        </section>

        <section id="waitlist" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="section-title">{t("waitlist.title")}</h2>
              <p className="text-xl mb-12 text-gray-600 dark:text-gray-300">{t("waitlist.description")}</p>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="neo-input"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="neo-input"
                />
                <motion.button
                  type="submit"
                  className="w-full neo-button py-4 text-lg font-semibold"
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? "Joining..." : t("nav.join-waitlist")}
                </motion.button>
              </motion.form>

              <AnimatePresence>
                {message && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-4 ${message.startsWith("Error") ? "text-red-500" : "text-green-500"}`}
                  >
                    {message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          <div className="absolute inset-0 z-0 opacity-30">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id="Gradient4" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
                  <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                  <stop offset="0%" stop-color="rgba(0, 255, 255, 0.1)"></stop>
                  <stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop>
                </radialGradient>
                <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
                  <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                  <stop offset="0%" stop-color="rgba(255, 0, 255, 0.1)"></stop>
                  <stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop>
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient4)">
                <animate attributeName="x" dur="20s" values="0%;25%;0%" repeatCount="indefinite" />
                <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
              </rect>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient5)">
                <animate attributeName="x" dur="23s" values="0%;25%;0%" repeatCount="indefinite" />
                <animate attributeName="y" dur="24s" values="0%;25%;0%" repeatCount="indefinite" />
              </rect>
            </svg>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Skillsletter. {t("footer.rights")}
          </p>
          <div className="mt-4 space-x-8">
            <Link
              href="/privacy"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

