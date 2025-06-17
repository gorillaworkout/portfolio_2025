"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"

function GorillaHead() {
  const headRef = useRef<THREE.Group>(null)
  const eyeLeftRef = useRef<THREE.Mesh>(null)
  const eyeRightRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }

    // Blinking animation
    if (eyeLeftRef.current && eyeRightRef.current) {
      const blink = Math.sin(state.clock.elapsedTime * 3) > 0.8 ? 0.1 : 1
      eyeLeftRef.current.scale.y = blink
      eyeRightRef.current.scale.y = blink
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={headRef}>
        {/* Main head */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial color="#2D1810" roughness={0.8} metalness={0.1} />
        </mesh>

        {/* Face area */}
        <mesh position={[0, -0.3, 1.5]}>
          <sphereGeometry args={[1.2, 16, 16]} />
          <meshStandardMaterial color="#3D2820" roughness={0.9} metalness={0.05} />
        </mesh>

        {/* Eyes */}
        <mesh ref={eyeLeftRef} position={[-0.5, 0.3, 1.8]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh ref={eyeRightRef} position={[0.5, 0.3, 1.8]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Eye pupils */}
        <mesh position={[-0.5, 0.3, 2.0]}>
          <sphereGeometry args={[0.15, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.5, 0.3, 2.0]}>
          <sphereGeometry args={[0.15, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* Nose */}
        <mesh position={[0, -0.1, 1.9]}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshStandardMaterial color="#1A0F08" roughness={0.9} />
        </mesh>

        {/* Nostrils */}
        <mesh position={[-0.1, -0.1, 2.0]}>
          <sphereGeometry args={[0.05, 6, 6]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.1, -0.1, 2.0]}>
          <sphereGeometry args={[0.05, 6, 6]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Mouth area */}
        <mesh position={[0, -0.8, 1.6]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#1A0F08" roughness={0.9} />
        </mesh>

        {/* Ears */}
        <mesh position={[-1.8, 0.5, 0]}>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshStandardMaterial color="#2D1810" roughness={0.8} />
        </mesh>
        <mesh position={[1.8, 0.5, 0]}>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshStandardMaterial color="#2D1810" roughness={0.8} />
        </mesh>

        {/* Forehead ridge */}
        <mesh position={[0, 0.8, 1.2]}>
          <boxGeometry args={[1.5, 0.3, 0.8]} />
          <meshStandardMaterial color="#2D1810" roughness={0.8} />
        </mesh>

        {/* Crown/top of head */}
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[1.2, 16, 16]} />
          <meshStandardMaterial color="#2D1810" roughness={0.8} />
        </mesh>
      </group>
    </Float>
  )
}

function LoadingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = state.clock.elapsedTime * 1.2
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = state.clock.elapsedTime * 0.8
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = state.clock.elapsedTime * 1.5
    }
  })

  return (
    <group>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[4, 0.1, 16, 100]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.3} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.08, 16, 100]} />
        <meshStandardMaterial color="#FF6347" emissive="#FF6347" emissiveIntensity={0.4} />
      </mesh>
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[3, 0.06, 16, 100]} />
        <meshStandardMaterial color="#32CD32" emissive="#32CD32" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

interface GorillaLoaderProps {
  progress?: number
}

export function GorillaLoader({ progress = 0 }: GorillaLoaderProps) {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-full h-full relative">
        <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.8} />
          <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={1.2} />

          <GorillaHead />
          <LoadingRings />

          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        </Canvas>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">GORILLA WORKOUT</h1>
            <p className="text-white/60 text-lg">Preparing the ultimate experience...</p>
          </div>

          <div className="w-80 h-2 bg-white/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/80 text-xl font-bold">{Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  )
}
