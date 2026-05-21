"use client";

import { useEffect, useRef } from "react";

/**
 * Soft pointer-following glow used as one of the body-level atmosphere layers.
 * - Desktop only (`pointer: fine`) — hidden on touch devices via Tailwind.
 * - rAF-throttled with eased interpolation for a "lazy" feel.
 * - Respects `prefers-reduced-motion`.
 */
export default function BackgroundFX() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const el = glowRef.current;
    if (!el) return;

    let rafId = 0;
    let active = false;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;

    const tick = () => {
      // ease toward target — lower factor = smoother, lazier follow
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      el.style.setProperty("--mx", `${currentX}px`);
      el.style.setProperty("--my", `${currentY}px`);

      const dx = Math.abs(targetX - currentX);
      const dy = Math.abs(targetY - currentY);
      if (dx > 0.5 || dy > 0.5) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
        active = false;
      }
    };

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!active) {
        active = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 hidden md:block bg-mouse-glow"
    />
  );
}
