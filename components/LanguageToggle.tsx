"use client"

import * as React from "react"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-sm font-medium transition-colors"
    >
      {language === "en" ? t("language.spanish") : t("language.english")}
    </motion.button>
  )
}

