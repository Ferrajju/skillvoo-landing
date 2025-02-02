import { ThemeProvider } from "next-themes"
import StyledComponentsRegistry from "../lib/registry"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"
import type React from "react" // Import React

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <LanguageProvider>{children}</LanguageProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

