"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

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
    <div className="min-h-screen">
      <header className="fixed w-full top-0 z-50">
        <nav className="glass-effect px-6 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-semibold gradient-text">
              SkillVoo
            </Link>
            <div className="flex items-center space-x-8">
              <Link
                href="#how-it-works"
                className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
              >
                {t("nav.how-it-works")}
              </Link>
              <Link href="#skills" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">
                {t("nav.skills")}
              </Link>
              <Link href="#waitlist" className="apple-button">
                {t("nav.join-waitlist")}
              </Link>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <section className="section-spacing">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-7xl font-semibold mb-8 gradient-text leading-tight"
              >
                {t("hero.title")}
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl md:text-2xl opacity-70 mb-12 leading-relaxed">
                {t("hero.description")}
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link href="#waitlist" className="apple-button text-lg px-8 py-4">
                  {t("cta.start-journey")}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="how-it-works" className="section-spacing">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-semibold text-center mb-16 gradient-text"
              >
                {t("how-it-works.title")}
              </motion.h2>
              <div className="apple-grid">
                {features.map((feature, index) => (
                  <motion.div key={index} variants={itemVariants} className="apple-card">
                    <h3 className="text-2xl font-semibold mb-4 gradient-text">{t(feature.titleKey)}</h3>
                    <p className="opacity-70 leading-relaxed">{t(feature.descriptionKey)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section-spacing">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-semibold text-center mb-16 gradient-text"
              >
                {t("skills.title")}
              </motion.h2>
              <div className="apple-grid">
                {skills.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants} className="apple-card text-center">
                    <h3 className="text-xl font-medium gradient-text">{skill}</h3>
                  </motion.div>
                ))}
              </div>
              <motion.p variants={itemVariants} className="text-center mt-12 opacity-70 max-w-2xl mx-auto">
                {t("skills.description")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section id="waitlist" className="section-spacing bg-black/40">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-semibold mb-8 gradient-text">
                {t("waitlist.title")}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl mb-12 opacity-70">
                {t("waitlist.description")}
              </motion.p>
              <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="apple-input"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="apple-input"
                />
                <button type="submit" className="apple-button w-full py-4 text-lg" disabled={isLoading}>
                  {isLoading ? "Joining..." : t("nav.join-waitlist")}
                </button>
              </motion.form>
              <AnimatePresence>
                {message && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-4 ${message.startsWith("Error") ? "text-red-400" : "text-green-400"}`}
                  >
                    {message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 opacity-70">
        <div className="container mx-auto px-6 text-center">
          <p>
            © {new Date().getFullYear()} SkillVoo. {t("footer.rights")}
          </p>
          <div className="mt-4 space-x-8">
            <Link href="/privacy" className="text-sm hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

