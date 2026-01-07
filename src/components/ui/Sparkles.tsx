"use client";
import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { cn } from "@/lib/utils";

type SparklesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export default function SparklesCore(props: SparklesProps) {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    console.log("⚡ Mencoba menyalakan mesin partikel...");
    
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine);
    }).then(() => {
      console.log("✅ Mesin partikel SIAP!");
      setInit(true);
    });
  }, []);

  const controls = {
    background: {
      color: {
        value: "transparent", 
      },
    },
    fullScreen: {
      enable: false, 
      zIndex: 1,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: false, mode: "repulse" },
        resize: true as any,
      },
    },
    particles: {
      color: { value: particleColor || "#ffffff" },
      move: {
        enable: true,
        speed: speed || 4,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, width: 800, height: 800 },
        value: particleDensity || 120,
      },
      opacity: {
        value: { min: 0.1, max: 1 },
        animation: { enable: true, speed: 1, sync: false },
      },
      shape: { type: "circle" },
      size: {
        value: { min: minSize || 1, max: maxSize || 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className={cn("opacity-100 transition-opacity duration-1000", className)}>
      {init && (
        <Particles
          id={id || useId()}
          className="h-full w-full"
          options={controls as any}
        />
      )}
    </div>
  );
};