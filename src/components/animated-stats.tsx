"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { stats } from "@/lib/site-data";

export default function AnimatedStats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 },
    );
  }, []);

  return (
    <div ref={containerRef} className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="glass-card rounded-3xl p-6">
          <p className="font-display text-4xl text-brand">{stat.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

