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
              <header className="fixed top-0 left-0 right-0 z-50">
                <nav className="w-full px-6 py-4 flex justify-end">
                  <div className="w-16">
                    <ThemeToggle />
                  </div>
                </nav>
              </header>
              <main className="pt-16">{children}</main>
            </div>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

