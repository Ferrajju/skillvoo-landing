import { ThemeProvider } from "next-themes"
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
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

