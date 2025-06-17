import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Gorilla Workout - Front End Developer Portfolio",
    template: "%s | Gorilla Workout",
  },
  description:
    "Professional Front End Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences with cutting-edge solutions.",
  keywords: [
    "Front End Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Gorilla Workout",
  ],
  authors: [{ name: "Gorilla Workout", url: "https://gorillaworkout.id" }],
  creator: "Gorilla Workout",
  publisher: "Gorilla Workout",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gorillaworkout.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gorillaworkout.id",
    title: "Gorilla Workout - Front End Developer Portfolio",
    description:
      "Professional Front End Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Gorilla Workout Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorilla Workout - Front End Developer Portfolio",
    description:
      "Professional Front End Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    creator: "@gorillaworkout",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'gorillaworkout'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <div className="min-h-screen bg-black text-white">
              <Navigation />
              <main className="pt-20">{children}</main>
              <Toaster />
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
