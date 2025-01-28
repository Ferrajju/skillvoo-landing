"use client"

import React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full glass-effect transition-colors neon-glow"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-blue-400" />}
    </motion.button>
  )
}

export default ThemeToggle

