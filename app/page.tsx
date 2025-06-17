"use client"

import { useState, useEffect } from "react"
import { ErrorBoundary } from "@/components/error-boundary"
import { ClientWrapper } from "@/components/client-wrapper"
import { Hero3D } from "@/components/hero-3d"
import { CTASection } from "@/components/cta-section"
import { SimpleLoader } from "@/components/simple-loader"
import { PremiumBackground } from "@/components/premium-background"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Server, Zap } from "lucide-react"

function HomeContent() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let mounted = true

    const interval = setInterval(() => {
      if (!mounted) return

      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            if (mounted) setLoading(false)
          }, 500)
          return 100
        }
        return prev + Math.random() * 12
      })
    }, 150)

    return () => {
      mounted = false
      clearInterval(interval)
    }
  }, [])

const features = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Front-End Development",
    description: "Building interactive and responsive user interfaces with React, Next.js, and Vue",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Performance Optimization",
    description: "Ensuring fast load times and smooth user experience across devices",
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "API Integration",
    description: "Connecting front-end with back-end services using REST and GraphQL APIs",
  },
]

  if (loading) {
    return <SimpleLoader progress={progress} />
  }

  return (
    <div className="min-h-screen relative">
      <PremiumBackground variant="default" />

      <section className="relative z-10">
        <ErrorBoundary>
          <Hero3D />
        </ErrorBoundary>
      </section>

      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">What I Do</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I specialize in creating modern web applications that are fast, scalable, and user-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-black/30 backdrop-blur-xl border-white/20 hover:bg-black/40 hover:border-white/30 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <ErrorBoundary>
          <CTASection />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <ErrorBoundary>
      <ClientWrapper
        fallback={
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Gorilla
                </span>
              </h1>
              <div className="text-white/60">Loading...</div>
            </div>
          </div>
        }
      >
        <HomeContent />
      </ClientWrapper>
    </ErrorBoundary>
  )
}
