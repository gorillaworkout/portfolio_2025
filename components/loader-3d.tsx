"use client"

import { Canvas } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Environment, Text3D, Center } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function LoadingRings() {
  const group = useRef<THREE.Group>(null)
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)
  const ring3 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.5
    }
    if (ring1.current) {
      ring1.current.rotation.x = state.clock.elapsedTime * 1.2
    }
    if (ring2.current) {
      ring2.current.rotation.y = state.clock.elapsedTime * 0.8
    }
    if (ring3.current) {
      ring3.current.rotation.z = state.clock.elapsedTime * 1.5
    }
  })

  return (
    <group ref={group}>
      <mesh ref={ring1}>
        <torusGeometry args={[2, 0.1, 16, 100]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.08, 16, 100]} />
        <meshStandardMaterial color="#888888" emissive="#888888" emissiveIntensity={0.3} />
      </mesh>
      <mesh ref={ring3} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1, 0.06, 16, 100]} />
        <meshStandardMaterial color="#666666" emissive="#666666" emissiveIntensity={0.4} />
      </mesh>
      <Sphere args={[0.3]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#ffffff"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={1}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </Sphere>
    </group>
  )
}

function LoadingText() {
  return (
    <Center>
      <Text3D
        font="/fonts/Geist_Bold.json"
        size={0.5}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        LOADING
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} />
      </Text3D>
    </Center>
  )
}

interface Loader3DProps {
  progress?: number
}

export function Loader3D({ progress = 0 }: Loader3DProps) {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-full h-full relative">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <LoadingRings />
          <group position={[0, -3, 0]}>
            <LoadingText />
          </group>
          <Environment preset="night" />
        </Canvas>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-white to-gray-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm font-medium">{Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  )
}
