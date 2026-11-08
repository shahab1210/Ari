"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  delta: number;
  twinkleSpeed: number;
  isChampagne: boolean;
}

export function GlobalStarfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isTabVisible = !document.hidden;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];

    const initStars = (w: number, h: number) => {
      const count = 160; // 140–180 range
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          // Particle Size & Radii: 0.8px to 2.2px for crisp high-DPI visibility
          radius: Math.random() * 1.4 + 0.8,
          // Gentle diagonal velocity (clearly visible motion at 60fps)
          vx: Math.random() * 0.1 - 0.05,
          vy: -(Math.random() * 0.2 + 0.1), // 0.15 - 0.35 px/frame upward/diagonal drift
          delta: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.02 + 0.008,
          // 80% crisp white, 20% champagne gold
          isChampagne: Math.random() < 0.2,
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      width = w;
      height = h;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initStars(w, h);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let lastTime = performance.now();

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isTabVisible) return;

      const deltaMs = time - lastTime;
      lastTime = time;
      if (deltaMs > 250) return;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move star with calibrated velocity
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen boundaries seamlessly
        if (star.y < -10) {
          star.y = height + 10;
          star.x = Math.random() * width;
        } else if (star.y > height + 10) {
          star.y = -10;
        }

        if (star.x < -10) {
          star.x = width + 10;
        } else if (star.x > width + 10) {
          star.x = -10;
        }

        // Sinusoidal opacity modulation: clamped strictly between 0.40 and 0.95
        star.delta += star.twinkleSpeed;
        const normalizedSin = (Math.sin(star.delta) + 1) * 0.5; // 0.0 to 1.0
        const alpha = 0.40 + 0.55 * normalizedSin; // 0.40 to 0.95

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        if (star.isChampagne) {
          ctx.fillStyle = `rgba(229, 202, 158, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        }
        ctx.fill();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}

export default GlobalStarfield;
