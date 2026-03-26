"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

const palettes = {
  cyan: { primary: "#6fe7ff", secondary: "#82ffb4", accent: "#ffffff" },
  coral: { primary: "#ff7b72", secondary: "#ffd166", accent: "#fff5ef" },
  violet: { primary: "#a78bfa", secondary: "#60a5fa", accent: "#eef2ff" },
} as const;

type Accent = keyof typeof palettes;

function OrbitalPiece({ position, color, shape }: { position: [number, number, number]; color: string; shape: "box" | "octa" | "cone" }) {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.008;
    mesh.current.rotation.y += 0.012;
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[0]) * 0.12;
  });

  return (
    <mesh ref={mesh} position={position}>
      {shape === "box" ? <boxGeometry args={[0.7, 0.7, 0.7]} /> : null}
      {shape === "octa" ? <octahedronGeometry args={[0.45, 0]} /> : null}
      {shape === "cone" ? <coneGeometry args={[0.44, 0.8, 6]} /> : null}
      <meshStandardMaterial color={color} metalness={0.45} roughness={0.2} />
    </mesh>
  );
}

function Scene({ accent }: { accent: Accent }) {
  const group = useRef<Group>(null);
  const colors = palettes[accent];

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.18;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.24) * 0.12;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.45, 48, 48]} />
        <meshStandardMaterial color={colors.primary} wireframe transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[1.1, 0.2, 0]}>
        <torusGeometry args={[2.15, 0.08, 24, 120]} />
        <meshStandardMaterial color={colors.secondary} metalness={0.4} roughness={0.15} />
      </mesh>
      <OrbitalPiece position={[2.2, -0.75, 0]} color={colors.accent} shape="box" />
      <OrbitalPiece position={[-2.25, 0.95, 0.45]} color={colors.primary} shape="octa" />
      <OrbitalPiece position={[0.1, -1.9, 0.1]} color={colors.secondary} shape="cone" />
    </group>
  );
}

export default function PageOrb({ accent = "cyan", className = "h-[320px] md:h-[420px]" }: { accent?: Accent; className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 2, 4]} intensity={1.2} />
        <pointLight position={[-3, -2, 2]} intensity={1.1} color={palettes[accent].secondary} />
        <Scene accent={accent} />
      </Canvas>
    </div>
  );
}
