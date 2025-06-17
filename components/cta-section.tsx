"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import { useRef, Suspense, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

function FloatingElements() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[0.3]} position={[-2, 1, 0]}>
          <MeshDistortMaterial
            color="#ffffff"
            distort={0.3}
            speed={1}
            roughness={0.2}
            metalness={0.8}
            emissive="#ffffff"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere args={[0.2]} position={[2, -0.5, 0.5]}>
          <MeshDistortMaterial
            color="#888888"
            distort={0.4}
            speed={1.5}
            roughness={0.3}
            metalness={0.9}
            emissive="#888888"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <Sphere args={[0.15]} position={[0, -1.5, -0.5]}>
          <MeshDistortMaterial
            color="#666666"
            distort={0.5}
            speed={2}
            roughness={0.4}
            metalness={1}
            emissive="#666666"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>
    </group>
  )
}

function CTAScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <FloatingElements />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export function CTASection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03),transparent_50%)]" />
      </div>

      {isClient && (
        <div className="absolute inset-0 opacity-30">
          <Suspense fallback={null}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <CTAScene />
            </Canvas>
          </Suspense>
        </div>
      )}

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/30" />
            <Sparkles className="h-6 w-6 text-white/60" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/30" />
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Let's Create
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent">
                Something Epic
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into extraordinary digital experiences? Let's collaborate and build
              something that stands out.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="group bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center space-x-3">
                <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Start a Project</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <Link href="/work" className="flex items-center space-x-3">
                <span>View My Work</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-white">10</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-white">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
