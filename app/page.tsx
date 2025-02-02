"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="text-white hover:text-gold transition-colors duration-300">
    {children}
  </Link>
)

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ children, className, ...props }) => (
  <Button className={`relative overflow-hidden group ${className}`} {...props}>
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 bg-gradient-to-r from-gold/50 to-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </Button>
)

export default function Home() {
  const [email, setEmail] = useState("")
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Submitted email:", email)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Nav */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm px-4 py-4"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-gold">Skills</span>letter
          </Link>
          <div className="space-x-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#features">Features</NavLink>
            <GlowingButton className="bg-gold text-black hover:bg-gold/90">Join Waitlist</GlowingButton>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-gold/10 to-transparent opacity-50" />
        </div>
        <div className="container mx-auto z-10">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Mejora cada día</span>
              <span className="block">en lo que</span>
              <span className="block text-gold">te importa.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Recibe un email diario con tácticas y métodos que realmente funcionan.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                className="w-full px-6 py-3 bg-white/10 border-gold/30 text-white placeholder-gray-400 focus:border-gold focus:ring-gold/50"
                required
              />
              <GlowingButton type="submit" className="w-full sm:w-auto bg-gold text-black hover:bg-gold/90">
                Suscríbete Gratis
              </GlowingButton>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

