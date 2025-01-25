"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

type TranslationType = {
  [key: string]: string
}

const translations: Record<Language, TranslationType> = {
  en: {
    "nav.how-it-works": "How It Works",
    "nav.skills": "Skills",
    "nav.join-us": "Join Us",
    "nav.join-waitlist": "Join Waitlist",
    // Add more translations as needed
  },
  es: {
    "nav.how-it-works": "Cómo Funciona",
    "nav.skills": "Habilidades",
    "nav.join-us": "Únete",
    "nav.join-waitlist": "Únete a la Lista",
    // Add more translations as needed
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }, [])

  const t = useCallback(
    (key: string) => {
      return translations[language][key] || key
    },
    [language],
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

