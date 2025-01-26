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
    "features.micro-learning.title": "Micro-Learning",
    "features.micro-learning.description":
      "Short, focused 10-minute daily sessions designed to fit your busy schedule.",
    "features.ai-powered.title": "AI-Powered",
    "features.ai-powered.description": "Personalized learning experience adapting to your progress and preferences.",
    "features.skill-growth.title": "Skill Growth",
    "features.skill-growth.description":
      "Develop essential personal and professional skills that matter in today's world.",
    "features.community.title": "Community",
    "features.community.description": "Join a community of lifelong learners and share your growth journey.",
    "cta.start-journey": "Start Your Growth Journey",
    "how-it-works.title": "How It Works",
    "how-it-works.description":
      "Our simple yet powerful process to help you develop new skills and transform your life",
    "skills.title": "Examples of Personal Skills to Develop",
    "skills.description":
      "Discover our wide variety of personal skills to develop. Each day, you'll receive theory, examples, and practical exercises to apply in your daily life.",
    "waitlist.cta": "Want to explore more skills? Join our waitlist to get access to our full library.",
    "footer.quick-links": "Quick Links",
    "footer.contact": "Contact",
    "footer.newsletter": "Newsletter",
    "footer.newsletter.description": "Subscribe to our newsletter for the latest updates and insights.",
    "footer.rights": "All rights reserved.",
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
    "features.micro-learning.title": "Micro-Aprendizaje",
    "features.micro-learning.description":
      "Sesiones diarias cortas y enfocadas de 10 minutos diseñadas para adaptarse a tu agenda ocupada.",
    "features.ai-powered.title": "Impulsado por IA",
    "features.ai-powered.description":
      "Experiencia de aprendizaje personalizada que se adapta a tu progreso y preferencias.",
    "features.skill-growth.title": "Crecimiento de Habilidades",
    "features.skill-growth.description":
      "Desarrolla habilidades personales y profesionales esenciales que importan en el mundo actual.",
    "features.community.title": "Comunidad",
    "features.community.description":
      "Únete a una comunidad de aprendices de por vida y comparte tu viaje de crecimiento.",
    "cta.start-journey": "Comienza Tu Viaje de Crecimiento",
    "how-it-works.title": "Cómo Funciona",
    "how-it-works.description":
      "Nuestro proceso simple pero poderoso para ayudarte a desarrollar nuevas habilidades y transformar tu vida",
    "skills.title": "Ejemplos de Habilidades Personales para Desarrollar",
    "skills.description":
      "Descubre nuestra amplia variedad de habilidades personales para desarrollar. Cada día, recibirás teoría, ejemplos y ejercicios prácticos para aplicar en tu vida diaria.",
    "waitlist.cta":
      "¿Quieres explorar más habilidades? Únete a nuestra lista de espera para acceder a nuestra biblioteca completa.",
    "footer.quick-links": "Enlaces Rápidos",
    "footer.contact": "Contacto",
    "footer.newsletter": "Boletín",
    "footer.newsletter.description":
      "Suscríbete a nuestro boletín para recibir las últimas actualizaciones y conocimientos.",
    "footer.rights": "Todos los derechos reservados.",
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

