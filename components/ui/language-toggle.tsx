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
      className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium transition-all duration-300"
    >
      {language === "en" ? t("language.spanish") : t("language.english")}
    </motion.button>
  )
}

