import type React from "react"
import { motion } from "framer-motion"

interface SimpleShapeProps {
  delay?: number
}

const SimpleShape: React.FC<SimpleShapeProps> = ({ delay = 0 }) => {
  return (
    <motion.div
      className="w-16 h-16 bg-gray-200 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay,
      }}
    />
  )
}

export default SimpleShape

