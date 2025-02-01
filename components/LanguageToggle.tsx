"use client"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium transition-colors duration-200"
    >
      {language === "en" ? t("language.spanish") : t("language.english")}
    </button>
  )
}

