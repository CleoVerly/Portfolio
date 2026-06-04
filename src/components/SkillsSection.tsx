"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { skillCategories } from "@/data/skills";

// Flatten all skills into cards
const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((skill) => ({ ...skill, category: cat.category }))
);

const SWIPE_THRESHOLD = 50;
const AUTO_INTERVAL = 4000; // 4 seconds per card

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 15 : -15,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -400 : 400,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? -15 : 15,
    zIndex: 0,
  }),
};

export default function SkillsSection() {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prev]) => {
        let next = prev + newDirection;
        if (next < 0) next = allSkills.length - 1;
        if (next >= allSkills.length) next = 0;
        return [next, newDirection];
      });
    },
    []
  );

  // Auto-play
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      paginate(1);
    }, AUTO_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, paginate]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      paginate(1);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      paginate(-1);
    }
  };

  const currentSkill = allSkills[currentIndex];

  // Get prev and next for the side preview cards
  const prevIndex = currentIndex === 0 ? allSkills.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === allSkills.length - 1 ? 0 : currentIndex + 1;
  const prevSkill = allSkills[prevIndex];
  const nextSkill = allSkills[nextIndex];

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04] blur-[150px] pointer-events-none"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 px-6">
            <p className="text-accent-bright text-sm font-semibold tracking-widest uppercase mb-3">
              Core Technologies
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal delay={0.1}>
          <div
            className="relative max-w-5xl mx-auto px-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6" style={{ perspective: "1200px" }}>
              {/* Previous card preview (desktop only) */}
              <div
                className="hidden lg:block w-52 flex-shrink-0 cursor-pointer"
                onClick={() => paginate(-1)}
              >
                <div className="skill-carousel-card skill-card-side opacity-50 hover:opacity-70 transition-opacity flex flex-col items-center">
                  <span className="text-4xl mb-3 flex justify-center">{prevSkill.icon}</span>
                  <p className="text-sm font-semibold text-text-primary">{prevSkill.name}</p>
                  <p className="text-xs text-text-muted">{prevSkill.category}</p>
                </div>
              </div>

              {/* Main card */}
              <div className="relative w-full max-w-md h-[320px] sm:h-[360px] flex-shrink-0">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 250, damping: 30 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.4 },
                      rotateY: { duration: 0.4 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={handleDragEnd}
                    className="absolute inset-0 cursor-grab active:cursor-grabbing"
                  >
                    <div className="skill-carousel-card skill-card-main h-full flex flex-col items-center justify-center text-center p-8">
                      {/* Glow behind icon */}
                      <div
                        className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-[60px] opacity-20 pointer-events-none"
                        style={{ background: "var(--accent)" }}
                      />

                      {/* Icon */}
                      <span className="text-6xl sm:text-7xl mb-6 relative z-10 flex justify-center">
                        {currentSkill.icon}
                      </span>

                      {/* Name */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2 relative z-10">
                        {currentSkill.name}
                      </h3>

                      {/* Category */}
                      <p className="text-sm text-accent-light mb-6 relative z-10">
                        {currentSkill.category}
                      </p>



                      {/* Swipe hint */}
                      <p className="text-xs text-text-muted mt-6 relative z-10 flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                        Swipe or drag
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50 rotate-180">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next card preview (desktop only) */}
              <div
                className="hidden lg:block w-52 flex-shrink-0 cursor-pointer"
                onClick={() => paginate(1)}
              >
                <div className="skill-carousel-card skill-card-side opacity-50 hover:opacity-70 transition-opacity flex flex-col items-center">
                  <span className="text-4xl mb-3 flex justify-center">{nextSkill.icon}</span>
                  <p className="text-sm font-semibold text-text-primary">{nextSkill.name}</p>
                  <p className="text-xs text-text-muted">{nextSkill.category}</p>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
