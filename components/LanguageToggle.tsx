"use client"

import * as React from "react"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-medium apple-transition"
    >
      {language === "en" ? t("language.spanish") : t("language.english")}
    </button>
  )
}

