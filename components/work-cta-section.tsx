"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text3D, Center, Float, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Calendar, Lightbulb } from "lucide-react"
import Link from "next/link"

function FloatingCode() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
        <Center>
          <Text3D
            font="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json"
            size={0.3}
            height={0.05}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.01}
            bevelSize={0.01}
            position={[-2, 1, 0]}
          >
            {"</>"}
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} />
          </Text3D>
        </Center>
      </Float>

      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.6}>
        <Sphere args={[0.1]} position={[2, 0.5, 0]}>
          <MeshDistortMaterial
            color="#888888"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
            emissive="#888888"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
        <Center>
          <Text3D font="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json" size={0.15} height={0.03} position={[1, -1, 0.5]}>
            {"{ }"}
            <meshStandardMaterial color="#666666" emissive="#666666" emissiveIntensity={0.15} />
          </Text3D>
        </Center>
      </Float>
    </group>
  )
}

export function WorkCTASection() {
  const features = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Free Consultation",
      description: "Let's discuss your project requirements and goals",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Quick Turnaround",
      description: "Fast delivery without compromising on quality",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Creative Solutions",
      description: "Innovative approaches to solve complex problems",
    },
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.03)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.03)_360deg)]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.3} />
          <pointLight position={[-10, -10, -10]} intensity={0.2} />
          <FloatingCode />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Available for new projects</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Ready to Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent">
              Your Next Project?
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            I'm passionate about turning innovative ideas into exceptional digital experiences. Let's collaborate and
            create something extraordinary together.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="group bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact" className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Let's Talk</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <Link href="/about" className="flex items-center space-x-3">
                <span>Learn More About Me</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white group-hover:text-gray-200 transition-colors">{feature.icon}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 pt-16 border-t border-white/10">
          <p className="text-gray-400 mb-6">
            Join the growing list of satisfied clients who've transformed their ideas into reality
          </p>

          {/* Client Logos or Testimonial Placeholder */}
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-24 h-8 bg-white/10 rounded-lg animate-pulse" />
            <div className="w-20 h-8 bg-white/10 rounded-lg animate-pulse" />
            <div className="w-28 h-8 bg-white/10 rounded-lg animate-pulse" />
            <div className="w-22 h-8 bg-white/10 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
