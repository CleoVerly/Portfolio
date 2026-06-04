"use client";

import { useRef, useEffect, useCallback } from "react";

interface Bubble {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  hue: number;
  saturation: number;
}

export default function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const scrollYRef = useRef(0);
  const prevScrollYRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);

  const createBubble = useCallback((canvasWidth: number, canvasHeight: number, scrollDelta: number): Bubble => {
    const side = Math.random();
    let x: number, y: number;

    if (side < 0.3) {
      x = Math.random() * canvasWidth;
      y = canvasHeight + 20;
    } else if (side < 0.6) {
      x = -20;
      y = Math.random() * canvasHeight;
    } else {
      x = canvasWidth + 20;
      y = Math.random() * canvasHeight;
    }

    const maxLife = 120 + Math.random() * 180;
    const speedMultiplier = Math.min(Math.abs(scrollDelta) * 0.15, 3);

    // Green hues only (130-160)
    const hue = 130 + Math.random() * 30;
    const saturation = 70 + Math.random() * 25;

    return {
      x,
      y,
      radius: 3 + Math.random() * 20,
      opacity: 0.1 + Math.random() * 0.25,
      speedX: (Math.random() - 0.5) * 1.5 * (1 + speedMultiplier),
      speedY: -(0.5 + Math.random() * 2) * (1 + speedMultiplier),
      life: 0,
      maxLife,
      hue,
      saturation,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleScroll = () => {
      prevScrollYRef.current = scrollYRef.current;
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollDelta = scrollYRef.current - prevScrollYRef.current;
      const isScrolling = Math.abs(scrollDelta) > 1;

      // Spawn bubbles on scroll
      if (isScrolling && timestamp - lastSpawnRef.current > 40) {
        const count = Math.min(Math.floor(Math.abs(scrollDelta) * 0.3), 5);
        for (let i = 0; i < count; i++) {
          bubblesRef.current.push(createBubble(canvas.width, canvas.height, scrollDelta));
        }
        lastSpawnRef.current = timestamp;
      }

      // Ambient bubbles (very few)
      if (Math.random() < 0.02 && bubblesRef.current.length < 50) {
        bubblesRef.current.push(createBubble(canvas.width, canvas.height, 0));
      }

      // Update and draw bubbles
      bubblesRef.current = bubblesRef.current.filter((bubble) => {
        bubble.life++;
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;

        // Gentle wave motion
        bubble.x += Math.sin(bubble.life * 0.03) * 0.5;

        // Slow down over time
        bubble.speedX *= 0.998;
        bubble.speedY *= 0.998;

        const lifeRatio = bubble.life / bubble.maxLife;
        let currentOpacity = bubble.opacity;

        // Fade in
        if (lifeRatio < 0.1) {
          currentOpacity *= lifeRatio / 0.1;
        }
        // Fade out
        if (lifeRatio > 0.7) {
          currentOpacity *= 1 - (lifeRatio - 0.7) / 0.3;
        }

        if (bubble.life >= bubble.maxLife || currentOpacity <= 0) {
          return false;
        }

        // Draw bubble with neon green glow
        const gradient = ctx.createRadialGradient(
          bubble.x,
          bubble.y,
          0,
          bubble.x,
          bubble.y,
          bubble.radius
        );
        gradient.addColorStop(0, `hsla(${bubble.hue}, ${bubble.saturation}%, 50%, ${currentOpacity * 0.8})`);
        gradient.addColorStop(0.5, `hsla(${bubble.hue}, ${bubble.saturation}%, 35%, ${currentOpacity * 0.4})`);
        gradient.addColorStop(1, `hsla(${bubble.hue}, ${bubble.saturation}%, 25%, 0)`);

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Highlight
        ctx.beginPath();
        ctx.arc(
          bubble.x - bubble.radius * 0.3,
          bubble.y - bubble.radius * 0.3,
          bubble.radius * 0.2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `hsla(${bubble.hue}, ${bubble.saturation}%, 65%, ${currentOpacity * 0.3})`;
        ctx.fill();

        return true;
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [createBubble]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
