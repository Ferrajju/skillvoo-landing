import { ThemeProvider } from "next-themes"
import StyledComponentsRegistry from "../lib/registry"
import { LanguageProvider } from "@/contexts/language-context"
import { LanguageToggle } from "@/components/ui/language-toggle"
import ThemeToggle from "../components/ThemeToggle"
import "./globals.css"

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
            <LanguageProvider>
              <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
              {children}
            </LanguageProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

