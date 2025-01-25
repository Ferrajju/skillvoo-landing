import { ThemeProvider } from "next-themes"
import ThemeToggle from "../components/ThemeToggle"
import StyledComponentsRegistry from "../lib/registry"
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
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
              <nav className="p-4 flex justify-end">
                <ThemeToggle />
              </nav>
              {children}
            </div>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

