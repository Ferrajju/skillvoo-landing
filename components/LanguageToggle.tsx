"use client"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="px-3 py-1 rounded-full glass-effect text-blue-500 dark:text-blue-400 text-sm font-medium transition-all duration-300 hover:shadow-lg"
    >
      {language === "en" ? t("language.spanish") : t("language.english")}
    </motion.button>
  )
}

