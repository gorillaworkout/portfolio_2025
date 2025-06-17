"use client"

import { useEffect, useState } from "react"

interface SimpleLoaderProps {
  progress?: number
}

export function SimpleLoader({ progress = 0 }: SimpleLoaderProps) {
  const [displayProgress, setDisplayProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const timer = setTimeout(() => {
      setDisplayProgress(progress)
    }, 100)

    return () => clearTimeout(timer)
  }, [progress, isClient])

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Gorilla
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-white/80">Workout</h2>
        </div>

        <div className="space-y-6 mt-16">
          <div className="w-80 mx-auto">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-white to-gray-300 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${displayProgress}%` }}
              />
            </div>
          </div>

          <div className="text-4xl font-bold text-white">{Math.round(displayProgress)}%</div>
          <div className="text-white/60 text-lg">Loading experience...</div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  )
}
