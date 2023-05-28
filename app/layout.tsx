import "@/styles/tailwind.css"
import { enabled } from "./config/darkMode"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const darkModeStyles = enabled ? "dark" : ""

  return (
    <html lang="en">
      <body
        className={`${darkModeStyles} max-w-screen w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
