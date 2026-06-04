"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SwipeGate() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasTriggered && window.scrollY > 30) {
        setHasTriggered(true);
        setTimeout(() => setIsVisible(false), 1400);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasTriggered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[60] pointer-events-none overflow-hidden">
          {/* Left gate panel — dark with green edge glow */}
          <motion.div
            initial={{ x: 0 }}
            animate={hasTriggered ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full"
            style={{
              background: "linear-gradient(135deg, #050505 0%, #0A140A 50%, #0A0F0A 100%)",
            }}
          >
            {/* Green glow on the inner edge */}
            <div
              className="absolute top-0 right-0 w-24 h-full"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(0, 230, 118, 0.08))",
              }}
            />
            {/* Subtle pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(rgba(0, 230, 118, 0.5) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </motion.div>

          {/* Right gate panel — dark with green edge glow */}
          <motion.div
            initial={{ x: 0 }}
            animate={hasTriggered ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full"
            style={{
              background: "linear-gradient(225deg, #050505 0%, #0A140A 50%, #0A0F0A 100%)",
            }}
          >
            {/* Green glow on the inner edge */}
            <div
              className="absolute top-0 left-0 w-24 h-full"
              style={{
                background: "linear-gradient(270deg, transparent, rgba(0, 230, 118, 0.08))",
              }}
            />
            {/* Subtle pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(rgba(0, 230, 118, 0.5) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </motion.div>

          {/* Center glow line where gates meet — neon green */}
          <motion.div
            initial={{ opacity: 0.9, scaleY: 1 }}
            animate={hasTriggered ? { opacity: 0, scaleY: 0 } : { opacity: 0.9, scaleY: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full"
            style={{
              background: "linear-gradient(180deg, transparent 5%, #00E676 20%, #00FF88 50%, #00E676 80%, transparent 95%)",
              boxShadow: "0 0 15px rgba(0, 230, 118, 0.6), 0 0 40px rgba(0, 230, 118, 0.3), 0 0 80px rgba(0, 230, 118, 0.1)",
            }}
          />

          {/* "Scroll to explore" text */}
          {!hasTriggered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-3"
              >
                <span
                  className="text-xs tracking-[0.3em] uppercase font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  Scroll to Explore
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--accent-bright)" }}>
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
