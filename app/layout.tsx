import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from "@/components/error-boundary"
import { QiscusWidget } from "@/components/qiscus-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Gorilla Workout - Front End Developer Portfolio | Indonesia",
    template: "%s | Gorilla Workout",
  },
  description:
    "Gorilla Workout - Professional Front End Developer in Indonesia specializing in React, Next.js, Node.js, and modern web technologies. Hire me for your next project!",
  keywords: [
    "Gorilla Workout",
    "gorillaworkout",
    "Gorilla Workout Portfolio",
    "Gorilla Workout Indonesia",
    "Gorilla Workout Developer",
    "Front End Developer Indonesia",
    "React Developer Indonesia",
    "Next.js Developer",
    "Node.js Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Portfolio Developer",
    "Full Stack Developer",
    "Web Developer Jakarta",
    "jasa website",
    "pembuat website",
    "developer Indonesia",
    "frontend specialist",
    "react specialist",
    "nextjs expert",
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
    languages: {
      "en-US": "/",
      "id-ID": "/",
    },
  },
  icons: {
    icon: "/images/gorillalogops.png",
    shortcut: "/images/gorillalogops.png",
    apple: "/images/gorillalogops.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gorillaworkout.id",
    title: "Gorilla Workout - Front End Developer Portfolio | Indonesia",
    description:
      "Professional Front End Developer specializing in React, Next.js, Node.js, and modern web technologies. Based in Indonesia, available worldwide.",
    siteName: "Gorilla Workout Portfolio",
    images: [
      {
        url: "/images/gorillalogops.png",
        width: 1200,
        height: 630,
        alt: "Gorilla Workout - Front End Developer Portfolio Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorilla Workout - Front End Developer Portfolio | Indonesia",
    description:
      "Professional Front End Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    creator: "@gorillaworkout",
    site: "@gorillaworkout",
    images: ["/images/gorillalogops.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
  applicationName: "Gorilla Workout Portfolio",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "JHMIvrDote4BARD1JBrp8AkIcxTESu7CRSE7kTshP4E",
    yandex: "YANDEX_VERIFICATION_CODE_HERE",
    yahoo: "YAHOO_VERIFICATION_CODE_HERE",
    other: {
      me: ["https://instagram.com/gorillaworkout", "https://github.com/gorillaworkout"],
    },
  },
  category: "technology",
  classification: "Developer Portfolio",
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
              <QiscusWidget />
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
