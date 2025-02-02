import type React from "react"
import type { LucideProps } from "lucide-react"

interface IconWrapperProps {
  icon: React.ElementType // ✅ Asegura compatibilidad con los iconos de lucide-react
  className?: string
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, className }) => {
  return <Icon className={className} />
}

export default IconWrapper
