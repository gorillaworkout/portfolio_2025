"use client"

import { useEffect, useState } from "react"

interface PremiumBackgroundProps {
  variant?: "default" | "gradient" | "dots" | "mesh"
  opacity?: number
}

export function PremiumBackground({ variant = "default", opacity = 1 }: PremiumBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isClient])

  const renderBackground = () => {
    switch (variant) {
      case "gradient":
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20 transition-all duration-1000"
              style={{
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
              }}
            />
          </div>
        )

      case "dots":
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: "50px 50px",
                transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
              }}
            />
          </div>
        )

      case "mesh":
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "100px 100px",
                transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/20 to-transparent" />
          </div>
        )

      default:
        return (
          <div className="absolute inset-0">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

            {/* Subtle animated gradients */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-blue-950/30 via-transparent to-purple-950/30 transition-all duration-1000"
              style={{
                transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
              }}
            />

            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
          </div>
        )
    }
  }

  return (
    <div className="fixed inset-0 -z-10" style={{ opacity }}>
      {renderBackground()}
    </div>
  )
}
