import { ThemeProvider } from "next-themes"
import { StyleSheetManager, ThemeProvider as StyledThemeProvider } from "styled-components"
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <StyleSheetManager shouldForwardProp={(prop) => prop !== "theme"}>
            <StyledThemeProvider theme={{}}>
              <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <nav className="p-4 flex justify-end">
                  <ThemeToggle />
                </nav>
                {children}
              </div>
            </StyledThemeProvider>
          </StyleSheetManager>
        </ThemeProvider>
      </body>
    </html>
  )
}

