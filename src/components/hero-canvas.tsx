"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function FloatingMesh({ position, color, type }: { position: [number, number, number]; color: string; type: "box" | "octa" | "cone" }) {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.012;
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.12;
  });

  return (
    <mesh ref={mesh} position={position}>
      {type === "box" ? <boxGeometry args={[0.45, 0.45, 0.45]} /> : null}
      {type === "octa" ? <octahedronGeometry args={[0.35, 0]} /> : null}
      {type === "cone" ? <coneGeometry args={[0.36, 0.72, 6]} /> : null}
      <meshStandardMaterial color={color} metalness={0.45} roughness={0.2} />
    </mesh>
  );
}

function OrbitalScene() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.2;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.12;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.45, 48, 48]} />
        <meshStandardMaterial color="#6fe7ff" wireframe transparent opacity={0.32} />
      </mesh>
      <mesh rotation={[1.1, 0, 0]}>
        <torusGeometry args={[2.2, 0.08, 18, 100]} />
        <meshStandardMaterial color="#82ffb4" metalness={0.35} roughness={0.18} />
      </mesh>
      <FloatingMesh position={[2.35, -0.7, 0]} color="#ff7b72" type="box" />
      <FloatingMesh position={[-2.2, 0.95, 0.4]} color="#ffffff" type="octa" />
      <FloatingMesh position={[0.2, -1.85, 0.1]} color="#82ffb4" type="cone" />
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="h-[380px] w-full md:h-[520px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 2, 4]} intensity={1.4} />
        <pointLight position={[-4, -4, -2]} intensity={1.2} color="#82ffb4" />
        <OrbitalScene />
      </Canvas>
    </div>
  );
}
