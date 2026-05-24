"use client";

import * as React from "react";

export function MouseParallax() {
  React.useEffect(() => {
    // Only run on desktop/devices with hover capability
    const mediaQuery = window.matchMedia("(hover: hover)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty("--mouse-x", x.toFixed(3));
      document.documentElement.style.setProperty("--mouse-y", y.toFixed(3));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[-20] overflow-hidden opacity-30"
    >
      <div 
        className="absolute -inset-[10%] bg-cover bg-center mix-blend-screen"
        style={{
          backgroundImage: `url(/images/neon_fluid_wave.png)`,
          transform: `translate3d(
            calc((var(--mouse-x, 0.5) - 0.5) * -45px),
            calc((var(--mouse-y, 0.5) - 0.5) * -45px),
            0
          )`,
          transition: 'transform 0.7s cubic-bezier(0.15, 0.85, 0.35, 1)'
        }}
      />
    </div>
  );
}
