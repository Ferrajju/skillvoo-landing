import type React from "react"
import { motion } from "framer-motion"

interface CyberHexagonProps {
  delay?: number
}

const CyberHexagon: React.FC<CyberHexagonProps> = ({ delay = 0 }) => {
  return (
    <motion.div
      className="hexagon"
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

export default CyberHexagon

