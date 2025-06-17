"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
      <MeshDistortMaterial
        color="#ffffff"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
        metalness={0.8}
      />
    </Sphere>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere />
      <Environment preset="night" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export function Hero3D() {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        className="bg-black"
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            GorillaWorkout
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Full Stack Developer crafting modern web experiences
          </p>
          <div className="pointer-events-auto">
            <a
              href="/work"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
