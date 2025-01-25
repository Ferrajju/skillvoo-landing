"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const LanguageToggle = () => {
  const [language, setLanguage] = useState("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"))
  }

  return (
    <Button onClick={toggleLanguage} variant="outline" size="sm">
      {language === "en" ? "ES" : "EN"}
    </Button>
  )
}

export default LanguageToggle

