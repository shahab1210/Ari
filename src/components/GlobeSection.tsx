'use client';

import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

export interface GlobeSectionProps {
  className?: string;
}

interface VisitorTelemetry {
  lat: number;
  lng: number;
  city: string;
  temp: number;
}

interface GlobeOptions {
  devicePixelRatio: number;
  width: number;
  height: number;
  phi: number;
  theta: number;
  dark: number;
  diffuse: number;
  mapSamples: number;
  mapBrightness: number;
  baseColor: [number, number, number];
  markerColor: [number, number, number];
  glowColor: [number, number, number];
  markers: Array<{ location: [number, number]; size: number }>;
  onRender?: (state: Record<string, number>) => void;
  [key: string]: unknown;
}

const DEFAULT_VISITOR: VisitorTelemetry = {
  lat: 51.5074,
  lng: -0.1278,
  city: 'London',
  temp: 18,
};

export function GlobeSection({ className = '' }: GlobeSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef<number>(0);

  const [visitor, setVisitor] = useState<VisitorTelemetry>(DEFAULT_VISITOR);

  // GEOLOCATION EFFECT (fetch visitor telemetry on mount)
  useEffect(() => {
    let isMounted = true;

    async function fetchVisitorTelemetry() {
      try {
        const ipRes = await fetch('https://ipapi.co/json/');
        if (!ipRes.ok) throw new Error('Geolocation request failed');
        const ipData = await ipRes.json();

        const lat =
          typeof ipData.latitude === 'number'
            ? ipData.latitude
            : DEFAULT_VISITOR.lat;
        const lng =
          typeof ipData.longitude === 'number'
            ? ipData.longitude
            : DEFAULT_VISITOR.lng;
        const city =
          typeof ipData.city === 'string' && ipData.city.trim().length > 0
            ? ipData.city
            : DEFAULT_VISITOR.city;

        let temp = DEFAULT_VISITOR.temp;

        try {
          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
          );
          if (weatherRes.ok) {
            const weatherData = await weatherRes.json();
            if (
              weatherData?.current_weather?.temperature !== undefined &&
              typeof weatherData.current_weather.temperature === 'number'
            ) {
              temp = Math.round(weatherData.current_weather.temperature);
            }
          }
        } catch {
          // Keep default temperature if weather service fails
        }

        if (isMounted) {
          setVisitor({ lat, lng, city, temp });
        }
      } catch {
        // Keep fallback defaults on geolocation failure
      }
    }

    fetchVisitorTelemetry();

    return () => {
      isMounted = false;
    };
  }, []);

  // GLOBE EFFECT (depends on visitor state)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let width = canvas.offsetWidth || 500;
    let animationFrameId: number;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    const onRender = (state: Record<string, number>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + pointerInteractionMovement.current;
      state.width = width * 2;
      state.height = width * 2;
    };

    const globe = (createGlobe as unknown as (c: HTMLCanvasElement, opts: GlobeOptions) => { destroy: () => void; update?: (state: Partial<GlobeOptions>) => void })(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.08, 0.08, 0.12],
      markerColor: [0.77, 0.65, 0.5],
      glowColor: [0.15, 0.15, 0.2],
      markers: [
        { location: [18.9712, 72.8331], size: 0.08 },
        { location: [visitor.lat, visitor.lng], size: 0.05 },
      ],
      onRender,
    });

    // Animation loop to ensure continuous rotation across all cobe versions
    const renderLoop = () => {
      const state: Record<string, number> = {
        phi: 0,
        width: width * 2,
        height: width * 2,
      };

      onRender(state);

      if (globe && typeof globe.update === 'function') {
        globe.update({
          phi: state.phi,
          width: state.width,
          height: state.height,
        });
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [visitor]);

  return (
    <section
      id="experience"
      className={`relative w-full py-24 bg-transparent text-[#F4F1EE] overflow-hidden border-t border-white/5 ${className}`}
      aria-label="Global Presence and Live Telemetry"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start space-y-6">
          {/* Monospace label */}
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#636366]">
            RIGHT NOW
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-normal tracking-[-0.04em] text-[#F4F1EE]">
            two dots on a globe
          </h2>

          {/* Telemetry text */}
          <p className="text-lg md:text-xl text-[#A1A1A6] font-light leading-relaxed max-w-lg">
            you are reading this from somewhere near{' '}
            <span className="text-[#F4F1EE] font-medium">{visitor.city}</span>,
            where it is{' '}
            <span className="text-[#F4F1EE] font-medium">{visitor.temp}</span>
            °C right now.
            <br />
            I am based in{' '}
            <span className="text-[#C5A880] font-medium">Mumbai</span>, where it
            is <span className="text-[#F4F1EE] font-medium">31</span>°C. Small
            world.
          </p>

          {/* Italic prompt */}
          <div className="pt-4 flex items-center gap-3 text-sm font-serif italic text-[#C5A880]">
            <span>give it a spin</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex justify-center items-center relative aspect-square max-w-[500px] mx-auto w-full">
          <canvas
            ref={canvasRef}
            onPointerDown={(e) => {
              pointerInteracting.current =
                e.clientX - pointerInteractionMovement.current;
              if (canvasRef.current) {
                canvasRef.current.style.cursor = 'grabbing';
              }
            }}
            onPointerUp={() => {
              pointerInteracting.current = null;
              if (canvasRef.current) {
                canvasRef.current.style.cursor = 'grab';
              }
            }}
            onPointerOut={() => {
              pointerInteracting.current = null;
              if (canvasRef.current) {
                canvasRef.current.style.cursor = 'grab';
              }
            }}
            onMouseMove={(e) => {
              if (pointerInteracting.current !== null) {
                const delta = e.clientX - pointerInteracting.current;
                pointerInteractionMovement.current = delta * 0.005;
              }
            }}
            onTouchMove={(e) => {
              if (pointerInteracting.current !== null && e.touches[0]) {
                const delta = e.touches[0].clientX - pointerInteracting.current;
                pointerInteractionMovement.current = delta * 0.005;
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              contain: 'layout paint size',
            }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          />
        </div>
      </div>
    </section>
  );
}

export default GlobeSection;
