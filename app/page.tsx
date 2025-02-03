"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Newspaper, Lightbulb, BotIcon, Brain } from "lucide-react"
import React from "react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      })
      if (response.ok) {
        alert("Thanks for joining the waitlist!")
        setEmail("")
        setName("")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const dailyMails = [
    {
      title: "Industry News",
      description: "Stay updated with the latest news from your favorite sector.",
      icon: Newspaper,
    },
    {
      title: "Tips & Tricks",
      description: "Receive advice, methods, and tricks to improve in what you love.",
      icon: Lightbulb,
    },
    {
      title: "AI-Personalized",
      description: "Get completely personalized emails tailored just for you using AI.",
      icon: BotIcon,
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

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <div className="relative">
              <span className="text-[#FFD700] animate-pulse-gold">Skills</span>
              <span className="text-white">letter</span>
              <div className="absolute inset-0 bg-gradient-radial from-yellow-400 to-transparent opacity-75 blur-sm animate-pulse"></div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#daily-mails" className="text-white/80 hover:text-white transition-colors">
              What&apos;s Skillsletter
            </Link>
            <button className="golden-button">Join Waitlist</button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            <Link href="#daily-mails" className="block text-white/80 hover:text-white transition-colors py-2">
              What&apos;s Skillsletter
            </Link>
            <button className="golden-button w-full mt-4">Join Waitlist</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={isMobile ? "/images/baner_mobile.png" : "/images/baner_bw.png"}
            alt="Successful entrepreneurs"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 title-shadow"
          >
            Learn from the Greatest
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8"
          >
            Receive daily insights and methods from the world&apos;s most successful entrepreneurs.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-all w-full sm:w-auto"
              required
            />
            <button type="submit" className="golden-button w-full sm:w-auto">
              Join Owr Waitlist
            </button>
          </motion.form>
        </div>
      </section>

      {/* Daily Mails Section */}
      <section
        id="daily-mails"
        className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-black/90 via-gray-900/95 to-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/10 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-6"
          >
            Daily Mails
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/80 text-center max-w-2xl mx-auto mb-16"
          >
            Expertly curated content delivered to your inbox every day
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {dailyMails.map((mail, index) => (
              <motion.div
                key={mail.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 hover:from-white/10 hover:to-white/5 transition-all duration-500 border border-[#FFD700]/10 hover:border-[#FFD700]/30"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  {mail.icon &&
                    React.createElement(mail.icon as React.ElementType, {
                      className:
                        "w-16 h-16 text-[#FFD700]/80 mb-6 transform group-hover:scale-110 transition-transform duration-500",
                    })}
                  <h3 className="text-2xl font-semibold text-white mb-4">{mail.title}</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-500">
                    {mail.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More than Just a NewsLetter */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFD700]/5 via-transparent to-transparent opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">More Than Just Daily Emails</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Transform your learning experience with our comprehensive platform
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-[#FFD700]" />
                </span>
                Your Personal Growth Hub
              </h3>
              <div className="space-y-6">
                <p className="text-white/70">
                  Skillsletter isn&apos;t just about receiving daily emails. Our platform provides a comprehensive
                  dashboard where you can:
                </p>
                <ul className="space-y-4">
                  {[
                    "Manage and organize your favorite tactics and methods",
                    "Track your progress and see your skill growth over time",
                    "Access a library of past content for review and deeper learning",
                    "Set personal goals and receive tailored content recommendations",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFD700]/50 flex-shrink-0"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700]/10 to-transparent rounded-2xl blur-md group-hover:blur-lg transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-xl p-6 border border-[#FFD700]/20">
                <div className="aspect-video bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/images/dashboard.png"
                    alt="Skillsletter Dashboard Preview"
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
          >
            Examples of Personal Skills to Develop
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/70 text-center max-w-2xl mx-auto mb-16"
          >
            Discover our wide variety of personal skills to develop. Each day, you&apos;ll receive theory, examples, and
            practical exercises to apply in your daily life.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg md:text-xl font-medium text-white">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 px-4">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the Waitlist!</h2>
            <p className="text-white/70 mb-8">Be among the first to access our platform when it&apos;s ready.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-all"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700] transition-all"
                required
              />
              <button type="submit" className="golden-button w-full">
                Join Waitlist
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/50 text-sm">© 2025 SkillVoo. All rights reserved.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

