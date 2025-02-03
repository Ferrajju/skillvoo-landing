"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Newspaper, Lightbulb, BotIcon, TrendingUp, Brain, Target } from "lucide-react"
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

  const transformationSteps = [
    {
      title: "Consistent Growth",
      description: "Experience steady improvement in your skills with daily practice and insights.",
      icon: TrendingUp,
    },
    {
      title: "Expanded Knowledge",
      description: "Broaden your understanding across various domains and industries.",
      icon: Brain,
    },
    {
      title: "Achieve Your Goals",
      description: "Turn your aspirations into reality with targeted skill development.",
      icon: Target,
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
      <section id="daily-mails" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Daily Mails
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {dailyMails.map((mail, index) => (
              <motion.div
                key={mail.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all border border-[#FFD700]/30 hover:border-[#FFD700]/50"
              >
                {mail.icon &&
                  React.createElement(mail.icon as React.ElementType, { className: "w-12 h-12 text-[#FFD700] mb-4" })}
                <h3 className="text-xl font-semibold text-white mb-4">{mail.title}</h3>
                <p className="text-white/70">{mail.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More than Just a NewsLetter */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            More Than Just Daily Emails
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Your Personal Growth Hub</h3>
              <p className="text-white/70 mb-6">
                Skillsletter isn't just about receiving daily emails. Our platform provides a comprehensive dashboard
                where you can:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Manage and organize your favorite tactics and methods</li>
                <li>Track your progress and see your skill growth over time</li>
                <li>Access a library of past content for review and deeper learning</li>
                <li>Set personal goals and receive tailored content recommendations</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 rounded-lg p-4"
            >
              {/* Placeholder for dashboard image */}
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <p className="text-white/50">Dashboard Image Coming Soon</p>
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

