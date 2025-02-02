"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Submitted email:", email)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/skillvoo-logo.svg" alt="Skillvoo Logo" width={32} height={32} />
            <span className="ml-2 text-2xl font-bold">Skillvoo</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="#about" className="text-white hover:text-gray-300 transition-colors">
              What's Skillvoo
            </Link>
            <Button
              variant="outline"
              className="bg-white text-black hover:bg-gray-200 transition-colors rounded-full px-6 py-2"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        </div>
        <div className="container mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Mejora cada día en lo que te importa.</h1>
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
                className="w-full px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300"
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

