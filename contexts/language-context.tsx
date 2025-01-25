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
    "language.english": "English",
    "language.spanish": "Spanish",
    "hero.title": "Transform Your Life with Unique Skills",
    "hero.description":
      "Personalized courses for you, daily 10-minute sessions, and transformative results. Start today and unlock your potential!",
    "about.title": "About SkillVoo",
    "about.description":
      "SkillVoo is your personal growth companion, designed to help you develop essential skills through daily micro-learning sessions.",
    "waitlist.title": "Join the Waitlist!",
    "waitlist.description": "Be among the first to access our platform when it's ready.",
  },
  es: {
    "nav.how-it-works": "Cómo Funciona",
    "nav.skills": "Habilidades",
    "nav.join-us": "Únete",
    "nav.join-waitlist": "Únete a la Lista",
    "language.english": "Inglés",
    "language.spanish": "Español",
    "hero.title": "Transforma Tu Vida con Habilidades Únicas",
    "hero.description":
      "Cursos personalizados para ti, sesiones diarias de 10 minutos y resultados transformadores. ¡Comienza hoy y desbloquea tu potencial!",
    "about.title": "Acerca de SkillVoo",
    "about.description":
      "SkillVoo es tu compañero de crecimiento personal, diseñado para ayudarte a desarrollar habilidades esenciales a través de sesiones diarias de micro-aprendizaje.",
    "waitlist.title": "¡Únete a la Lista de Espera!",
    "waitlist.description": "Sé de los primeros en acceder a nuestra plataforma cuando esté lista.",
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
    console.log("Changing language to:", lang)
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }, [])

  const t = useCallback(
    (key: string): string => {
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

