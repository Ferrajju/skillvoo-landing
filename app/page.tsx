"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
    <div className="min-h-screen relative overflow-hidden">
      <div className="parallax-bg" />
      <header className="fixed w-full top-0 z-50">
        <nav className="glass-effect px-6 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-semibold gradient-text neon-glow">
              SkillVoo
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="#how-it-works" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity neon-glow">
                {t("nav.how-it-works")}
              </Link>
              <Link href="#skills" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity neon-glow">
                {t("nav.skills")}
              </Link>
              <Link href="#waitlist" className="apple-button neon-glow">
                {t("nav.join-waitlist")}
              </Link>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <section className="section-spacing min-h-screen flex items-center relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-6xl md:text-7xl font-semibold mb-8 gradient-text neon-glow leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-xl md:text-2xl opacity-70 mb-12 leading-relaxed">
                {t("hero.description")}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#waitlist" className="apple-button text-lg px-8 py-4 neon-glow">
                  {t("cta.start-journey")}
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="scroll-indicator" style={{ opacity }} />
        </section>

        <section id="how-it-works" className="section-spacing">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold text-center mb-16 gradient-text neon-glow"
            >
              {t("how-it-works.title")}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="apple-card"
                >
                  <h3 className="text-2xl font-semibold mb-4 gradient-text neon-glow">{t(feature.titleKey)}</h3>
                  <p className="opacity-70 leading-relaxed">{t(feature.descriptionKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-spacing">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold text-center mb-16 gradient-text neon-glow"
            >
              {t("skills.title")}
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="apple-card text-center"
                >
                  <h3 className="text-xl font-medium gradient-text neon-glow">{skill}</h3>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12 opacity-70 max-w-2xl mx-auto"
            >
              {t("skills.description")}
            </motion.p>
          </div>
        </section>

        <section id="waitlist" className="section-spacing glass-effect">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-semibold mb-8 gradient-text neon-glow">
                {t("waitlist.title")}
              </h2>
              <p className="text-xl mb-12 opacity-70">
                {t("waitlist.description")}
              </p>
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
                <motion.button
                  type="submit"
                  className="apple-button w-full py-4 text-lg neon-glow"
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? "Joining..." : t("nav.join-waitlist")}
                </motion.button>
              </motion.form>
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 ${message.startsWith("Error") ? "text-red-400" : "text-green-400"} neon-glow`}
                >
                  {message}
                </motion.p>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 opacity-70">
        <div className="container mx-auto px-6 text-center">
          <p className="neon-glow">© {new Date().getFullYear()} SkillVoo. {t("footer.rights")}</p>
          <div className="mt-4 space-x-8">
            <Link href="/privacy" className="text-sm hover:opacity-100 transition-opacity neon-glow">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:opacity-100 transition-opacity neon-glow">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
