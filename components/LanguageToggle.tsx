"use client"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <Button variant="ghost" onClick={() => setLanguage(language === "en" ? "es" : "en")} className="btn">
      {language === "en" ? t("language.spanish") : t("language.english")}
    </Button>
  )
}

