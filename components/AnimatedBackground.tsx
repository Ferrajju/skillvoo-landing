import type React from "react"
import { motion } from "framer-motion"

const AnimatedBackground: React.FC = () => {
  const bubbles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full bg-gradient-to-br from-indigo-300/10 to-purple-300/10 blur-xl"
      style={{
        width: `${Math.random() * 400 + 100}px`,
        height: `${Math.random() * 400 + 100}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [`${Math.random() * 200 - 100}%`, `${Math.random() * 200 - 100}%`, `${Math.random() * 200 - 100}%`],
        y: [`${Math.random() * 200 - 100}%`, `${Math.random() * 200 - 100}%`, `${Math.random() * 200 - 100}%`],
      }}
      transition={{
        duration: Math.random() * 60 + 30,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  ))

  return <div className="fixed inset-0 overflow-hidden pointer-events-none">{bubbles}</div>
}

export default AnimatedBackground

