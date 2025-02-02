"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const IlluminatedLogo: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const logo = logoRef.current
    if (!logo) return

    const updateIllumination = (e: MouseEvent) => {
      const rect = logo.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      logo.style.setProperty("--x", `${x}px`)
      logo.style.setProperty("--y", `${y}px`)
    }

    window.addEventListener("mousemove", updateIllumination)

    return () => {
      window.removeEventListener("mousemove", updateIllumination)
    }
  }, [])

  return (
    <motion.div
      ref={logoRef}
      className="illuminated-logo relative inline-block font-bold text-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Skillsletter
    </motion.div>
  )
}

export default IlluminatedLogo

