import type { ComponentType } from "react"
import type { LucideProps } from "lucide-react"

interface IconWrapperProps {
  icon: ComponentType<LucideProps>
  className?: string
}

const IconWrapper = ({ icon: Icon, className }: IconWrapperProps) => {
  return <Icon className={className} />
}

export default IconWrapper

