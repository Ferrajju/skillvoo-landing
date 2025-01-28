"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import ThemeToggle from "../components/ThemeToggle"
import { LanguageToggle } from "@/components/ui/language-toggle"

const features = [
  {
    titleKey: "features.micro-learning.title",
    descriptionKey: "features.micro-learning.description",
  },
  {
    titleKey: "features.ai-powered.title",
    descriptionKey: "features.ai-powered.description",
  },
  {
    titleKey: "features.skill-growth.title",
    descriptionKey: "features.skill-growth.description",
  },
  {
    titleKey: "features.community.title",
    descriptionKey: "features.community.description",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">
            SkillVoo
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 apple-transition"
            >
              {t("nav.how-it-works")}
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 apple-transition"
            >
              {t("nav.skills")}
            </Link>
            <Link href="#waitlist" className="apple-button">
              {t("nav.join-waitlist")}
            </Link>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main>
        <section className="apple-section text-center">
          <div className="container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-semibold mb-6"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              {t("hero.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="#waitlist" className="apple-button text-lg px-8 py-4">
                {t("cta.start-journey")}
              </Link>
            </motion.div>
          </div>
        </section>

        <section id="how-it-works" className="apple-section bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-semibold text-center mb-12">{t("how-it-works.title")}</h2>
            <div className="apple-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="apple-card dark:bg-gray-700"
                >
                  <h3 className="text-2xl font-semibold mb-4">{t(feature.titleKey)}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t(feature.descriptionKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="apple-section">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-semibold text-center mb-12">{t("skills.title")}</h2>
            <div className="apple-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="apple-card dark:bg-gray-700 text-center"
                >
                  <h3 className="text-xl font-medium">{skill}</h3>
                </motion.div>
              ))}
            </div>
            <p className="text-center mt-12 text-gray-600 dark:text-gray-300">{t("skills.description")}</p>
          </div>
        </section>

        <section id="waitlist" className="apple-section bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-semibold mb-6">{t("waitlist.title")}</h2>
              <p className="text-xl mb-8">{t("waitlist.description")}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-900"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-900"
                />
                <button type="submit" className="apple-button w-full py-3" disabled={isLoading}>
                  {isLoading ? "Joining..." : t("nav.join-waitlist")}
                </button>
              </form>
              {message && (
                <p className={`mt-4 ${message.startsWith("Error") ? "text-red-400" : "text-green-400"}`}>{message}</p>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} SkillVoo. {t("footer.rights")}
          </p>
          <div className="mt-4 space-x-4">
            <Link
              href="/privacy"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white apple-transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white apple-transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

