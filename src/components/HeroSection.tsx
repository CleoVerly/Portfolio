"use client";

import { motion, useMotionValue, useAnimationFrame, useMotionTemplate } from "framer-motion";
import { useEffect, useRef } from "react";
import { personalInfo } from "@/data/personal";

export default function HeroSection() {
  const targetSpeed = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate distance moved
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Increase speed based on movement. Cap max speed.
      targetSpeed.current = Math.min(targetSpeed.current + distance * 0.04, 8);
      
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // 20-second heartbeat pulse
    const heartbeat = setInterval(() => {
      targetSpeed.current = 10;
    }, 20000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(heartbeat);
    };
  }, []);

  useAnimationFrame((time, delta) => {
    if (targetSpeed.current > 0.05) {
      targetSpeed.current *= 0.94; // Friction/decay
    } else {
      targetSpeed.current = 0;
    }
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Green radial glow top */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "#00E676" }}
        />
        {/* Green accent glow right */}
        <div
          className="absolute top-1/3 -right-40 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: "#00FF88" }}
        />
        {/* Bottom glow */}
        <div
          className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[140px]"
          style={{ background: "#00E676" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,230,118,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs — green only */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-accent opacity-30 animate-float" />
        <div className="absolute top-[60%] right-[20%] w-3 h-3 rounded-full bg-accent-bright opacity-20 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[70%] w-1.5 h-1.5 rounded-full bg-accent opacity-40 animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-[30%] left-[25%] w-2.5 h-2.5 rounded-full bg-accent-dim opacity-20 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "var(--accent-subtle)",
            border: "1px solid rgba(0, 230, 118, 0.2)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-accent-bright animate-pulse" />
          <span className="text-sm text-accent-bright font-medium">
            Available for new projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-flex flex-col mb-6"
        >
          {/* Top row: Hi, I'm + Wave */}
          <div className="flex items-center w-full gap-4 mb-2 pl-1 pr-2">
            <span className="text-xl sm:text-3xl font-medium text-text-primary whitespace-nowrap">
              Hi, I&apos;m
            </span>
            <Spectrum targetSpeed={targetSpeed} />
          </div>
          
          <h1 className="text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tight leading-none gradient-text text-left">
            {personalInfo.name}
          </h1>
        </motion.div>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl md:text-3xl font-light mb-4 text-accent-light"
        >
          {personalInfo.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-12"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// SPECTRUM COMPONENT
// ---------------------------------------------------------

function Spectrum({ targetSpeed }: { targetSpeed: React.MutableRefObject<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let phase = 0;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.scale(dpr, dpr);
      }

      const width = rect.width;
      const height = rect.height;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);
      
      const speed = targetSpeed.current;
      // Cap intensity to ~1/4 of previous max (0.45 instead of 1.8)
      const intensity = Math.max(0.15, Math.min(speed / 8, 0.45));
      
      phase += 0.04 + (intensity * 0.15);

      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.strokeStyle = "rgba(0, 230, 118, 0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      const drawWave = (amplitudeMulti: number, freqMulti: number, phaseOffset: number, stepSize: number, color: string, lineWidth: number) => {
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        
        let pointIndex = 0;
        for (let x = 0; x <= width + stepSize; x += stepSize) {
          // Alternating sign: up, down, up, down
          const sign = pointIndex % 2 === 0 ? 1 : -1;
          pointIndex++;
          
          // Envelope determines the base height of the spike at this specific point
          const envelope = Math.sin(x * 0.015 * freqMulti + phase) * Math.cos(x * 0.02 * freqMulti - phase * 0.8);
          
          // Asymmetry factor: independent modulation for top vs bottom spikes
          const asymmetry = sign > 0 
             ? Math.abs(Math.sin(x * 0.025 * freqMulti + phase * 1.3)) * 0.8 + 0.2
             : Math.abs(Math.cos(x * 0.02 * freqMulti - phase * 1.1)) * 0.8 + 0.2;
          
          // Add chaos when moving fast
          let currentChaos = 0.1;
          if (intensity > 0.2) {
             currentChaos += (intensity - 0.2) * 0.6;
          }
          
          // Calculate final amplitude for this point (incorporating asymmetry)
          const pointAmplitude = (Math.abs(envelope) * asymmetry + currentChaos) * intensity * amplitudeMulti;
          const edgeFade = Math.sin((x / width) * Math.PI);
          const maxPixelDist = (height / 2) - lineWidth - 1;
          
          let yOffset = sign * pointAmplitude * (maxPixelDist * 0.9) * edgeFade;
          
          // Hard clamp
          if (yOffset > maxPixelDist) yOffset = maxPixelDist;
          if (yOffset < -maxPixelDist) yOffset = -maxPixelDist;
          
          ctx.lineTo(x, centerY + yOffset);
        }
        
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      };

      // Faint background zigzag (wider steps, slower)
      drawWave(0.6, 0.8, Math.PI, 14, "rgba(0, 230, 118, 0.3)", 1.5);
      
      // Main solid zigzag (tighter steps, faster)
      drawWave(1.0, 1.2, 0, 10, "#00E676", 2);

      animationId = requestAnimationFrame(render);
    };
    
    render();

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Increased height to h-16/h-20 and used negative margins so it doesn't push the layout
  return (
    <div className="flex-1 h-16 sm:h-20 -my-4 sm:-my-4 relative w-full overflow-visible opacity-90">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
