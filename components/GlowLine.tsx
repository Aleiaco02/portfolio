"use client";

import { useEffect, useState } from "react";
import { getGlowDelay } from "@/lib/glowSync";

interface GlowLineProps {
  from: "left" | "right";
  entryDelay?: number; // seconds before the slide-in starts
  className?: string;
}

export default function GlowLine({
  from,
  entryDelay = 0,
  className = "",
}: GlowLineProps) {
  const [glowDelay, setGlowDelay] = useState("0.8s");

  useEffect(() => {
    setGlowDelay(getGlowDelay());
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`absolute left-0 right-0 h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 ${className}`}
      style={{
        transformOrigin: `${from} center`,
        animation: `line-${from} 0.8s ease ${entryDelay}s both, glow-pulse 3s ease-in-out ${glowDelay} infinite`,
      }}
    />
  );
}
