"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import ThemeToggle from "../components/ThemeToggle"
import { LanguageToggle } from "@/components/ui/language-toggle"
import { Clock, Brain, TrendingUp, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    titleKey: "features.micro-learning.title",
    descriptionKey: "features.micro-learning.description",
    icon: <Clock className="w-12 h-12" />,
  },
  {
    titleKey: "features.ai-powered.title",
    descriptionKey: "features.ai-powered.description",
    icon: <Brain className="w-12 h-12" />,
  },
  {
    titleKey: "features.skill-growth.title",
    descriptionKey: "features.skill-growth.description",
    icon: <TrendingUp className="w-12 h-12" />,
  },
  {
    titleKey: "features.community.title",
    descriptionKey: "features.community.description",
    icon: <Users className="w-12 h-12" />,
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
    <div className="min-h-screen relative bg-background text-foreground">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />

      <header className="fixed w-full top-0 z-50 bg-blur">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Skillsletter
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="#features" className="text-sm font-medium hover:text-primary">
                Features
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary">
                Skills
              </Link>
              <Button asChild variant="outline" className="btn">
                <Link href="#waitlist">{t("nav.join-waitlist")}</Link>
              </Button>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24 relative z-10">
        <section className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-8 gradient-text"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-muted-foreground"
            >
              {t("hero.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild size="lg" className="px-8 py-6 text-lg btn">
                <Link href="#waitlist">
                  {t("cta.start-journey")}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-32 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center mb-16 gradient-text">{t("how-it-works.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card flex flex-col items-center text-center p-8 bg-card/80 backdrop-blur-sm"
                >
                  <div className="text-primary mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{t(feature.titleKey)}</h3>
                  <p className="text-muted-foreground">{t(feature.descriptionKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-32 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center mb-16 gradient-text">{t("skills.title")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center"
                >
                  <h3 className="text-xl font-medium">{skill}</h3>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12 text-lg max-w-2xl mx-auto text-muted-foreground"
            >
              {t("skills.description")}
            </motion.p>
          </div>
        </section>

        <section id="waitlist" className="py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-title mb-8 gradient-text">{t("waitlist.title")}</h2>
              <p className="text-xl mb-12 text-muted-foreground">{t("waitlist.description")}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                <Button type="submit" className="w-full py-6 text-lg font-semibold btn" disabled={isLoading}>
                  {isLoading ? "Joining..." : t("nav.join-waitlist")}
                </Button>
              </form>
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 ${message.startsWith("Error") ? "text-destructive" : "text-green-500"}`}
                >
                  {message}
                </motion.p>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Skillsletter. {t("footer.rights")}
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
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

