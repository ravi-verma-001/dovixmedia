"use client";

import React, { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop/devices with hover
    const mediaQuery = window.matchMedia("(hover: hover)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="glow-spot fixed pointer-events-none z-0"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
