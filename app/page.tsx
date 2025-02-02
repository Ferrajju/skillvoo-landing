"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

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

  const features = [
    {
      title: "Micro-Learning",
      description: "Short, focused 10-minute daily sessions designed to fit your busy schedule.",
    },
    {
      title: "AI-Powered",
      description: "Personalized learning experience adapting to your progress and preferences.",
    },
    {
      title: "Skill Growth",
      description: "Develop essential personal and professional skills that matter in today's world.",
    },
    {
      title: "Community",
      description: "Join a community of lifelong learners and share your growth journey.",
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
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-[#FFD700]">Skills</span>
            <span className="text-white">letter</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
              What&apos;s Skillsletter
            </Link>
            <button className="golden-button">Join Waitlist</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/baner_bw.png"
            alt="Successful entrepreneurs"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 title-shadow"
          >
            Learn from the Greatest
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 mb-8"
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
            <button type="submit" className="golden-button">
              Subscribe Free
            </button>
          </motion.form>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            How It Works
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
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
            className="text-4xl font-bold text-white text-center mb-4"
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
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-medium text-white">{skill}</h3>
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
            <h2 className="text-4xl font-bold text-white mb-4">Join the Waitlist!</h2>
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
          <div className="flex justify-center gap-4 mt-4">
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

