"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import Counter from "./Counter";
import Sparkle from "./Sparkle";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* soft green wash at the top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(6,179,0,0.08), transparent 70%)",
        }}
      />

      {/* decorative sparkles */}
      <div className="absolute top-[22%] left-[14%] hidden sm:block opacity-80">
        <Sparkle size={26} />
      </div>
      <div className="absolute top-[30%] right-[16%] hidden sm:block opacity-60">
        <Sparkle size={18} />
      </div>
      <div className="absolute bottom-[24%] left-[22%] hidden lg:block opacity-50">
        <Sparkle size={16} />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center pt-28 pb-20">
        {/* availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex justify-center mb-8"
        >
          <span className="eyebrow">
            Available for new projects
          </span>
        </motion.div>

        {/* intro line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6, ease }}
          className="text-text-secondary mb-5"
        >
          Hi, I&apos;m {personalInfo.name} — {personalInfo.title}
        </motion.p>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.8, ease }}
          className="display text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl font-semibold text-text-primary"
        >
          I build fast, clean web products that actually{" "}
          <span className="text-accent-word">ship</span>.
        </motion.h1>

        {/* subtext */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease }}
          className="mt-7 text-lg text-text-secondary max-w-xl mx-auto leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.8, ease }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#contact" className="btn-primary rounded-full px-7 py-3.5">
            Let&apos;s talk
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#work" className="btn-secondary rounded-full px-7 py-3.5">
            View work
          </a>
        </motion.div>

        {/* stat row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 flex items-stretch justify-center divide-x divide-border"
        >
          {personalInfo.stats.map((stat) => (
            <div key={stat.label} className="px-5 sm:px-8 text-center">
              <p className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight font-display">
                <Counter value={stat.value} />
              </p>
              <p className="text-xs text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
