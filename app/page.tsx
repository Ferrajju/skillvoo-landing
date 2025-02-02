"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted email:", email)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold logo-text">
              <span className="golden-gradient">Skills</span>letter
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="#about" className="text-white hover:text-[#B49B57] transition-colors">
              What&apos;s Skillsletter
            </Link>
            <Button
              variant="outline"
              className="golden-border golden-hover text-[#B49B57] hover:text-black transition-colors rounded-full px-6 py-2"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                Mejora cada día
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                en lo que
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="golden-gradient"
              >
                te importa.
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Recibe un email diario con tácticas y métodos que realmente funcionan.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                className="w-full px-6 py-3 rounded-full bg-black/50 border border-[#B49B57]/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B49B57]/50 transition-all duration-300"
                required
              />
              <Button
                type="submit"
                className="w-full sm:w-auto rounded-full golden-hover bg-[#B49B57] text-black hover:text-black transition-all duration-300"
              >
                Suscríbete Gratis
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

