"use client";

import { useEffect, useState } from "react";

export function MouseGlow() {
  const [position, setPosition] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden opacity-70 mix-blend-screen md:block"
      style={{
        background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, rgba(255,62,191,0.12), rgba(255,62,191,0.04) 34%, transparent 68%)`
      }}
    />
  );
}
