"use client"

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

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

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
    <div className="min-h-screen relative overflow-hidden">
      <div className="parallax-bg" />

      <header className="fixed w-full top-0 z-50">
        <nav className="glass-nav px-6 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Link href="/" className="text-2xl font-semibold text-gradient" data-text="SkillVoo">
                SkillVoo
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
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
              >
                {t("nav.how-it-works")}
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
              >
                {t("nav.skills")}
              </Link>
              <Link href="#waitlist" className="premium-button">
                {t("nav.join-waitlist")}
              </Link>
              <LanguageToggle />
              <ThemeToggle />
            </motion.div>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <section className="min-h-screen flex items-center relative">
          <motion.div style={{ scale, y }} className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1
                className="text-6xl md:text-7xl font-semibold mb-8 text-gradient leading-tight"
                data-text={t("hero.title")}
              >
                {t("hero.title")}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed"
              >
                {t("hero.description")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Link href="#waitlist" className="premium-button">
                  {t("cta.start-journey")}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div style={{ opacity }} className="scroll-indicator">
            <div className="scroll-indicator-dot" />
            <div className="scroll-indicator-dot" />
            <div className="scroll-indicator-dot" />
          </motion.div>
        </section>

        <div className="section-divider" />

        <section id="how-it-works" className="py-32">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gradient"
              data-text={t("how-it-works.title")}
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
                  className="glass-card premium-card p-8"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gradient" data-text={t(feature.titleKey)}>
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{t(feature.descriptionKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section id="skills" className="py-32">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gradient"
              data-text={t("skills.title")}
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
                  className="glass-card premium-card p-6 text-center"
                >
                  <h3 className="text-xl font-medium text-gradient" data-text={skill}>
                    {skill}
                  </h3>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12 text-white/70 max-w-2xl mx-auto"
            >
              {t("skills.description")}
            </motion.p>
          </div>
        </section>

        <div className="section-divider" />

        <section id="waitlist" className="py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-gradient" data-text={t("waitlist.title")}>
                {t("waitlist.title")}
              </h2>
              <p className="text-xl mb-12 text-white/70">{t("waitlist.description")}</p>

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
                  className="premium-input"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="premium-input"
                />
                <motion.button
                  type="submit"
                  className="premium-button w-full py-4 text-lg"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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

      <footer className="py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/50">
            © {new Date().getFullYear()} SkillVoo. {t("footer.rights")}
          </p>
          <div className="mt-4 space-x-8">
            <Link href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/50 hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

