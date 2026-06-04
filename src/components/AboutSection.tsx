"use client";

import ScrollReveal from "./ScrollReveal";
import { personalInfo } from "@/data/personal";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent-bright text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Who I <span className="gradient-text">Am</span>
            </h2>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Visual */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative">
              <div className="relative w-full aspect-square max-w-sm mx-auto">
                {/* Decorative rings — green */}
                <div className="absolute inset-0 rounded-full border border-border opacity-40" />
                <div className="absolute inset-4 rounded-full" style={{ border: "1px solid rgba(0, 230, 118, 0.15)" }} />
                <div className="absolute inset-8 rounded-full" style={{ border: "1px solid rgba(0, 230, 118, 0.08)" }} />

                {/* Center content */}
                <div className="absolute inset-12 rounded-full glass-card flex items-center justify-center overflow-hidden !rounded-full">
                  <div className="text-center flex flex-col items-center justify-center w-full h-full p-4">
                    <div className="relative w-75 h-75 sm:w-60 sm:h-60">
                      <Image 
                        src="/Logo-Cleoverly.png" 
                        alt="Cleoverly Logo" 
                        fill 
                        className="object-contain drop-shadow-[0_0_20px_rgba(0,230,118,0.4)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 glass-card !rounded-xl px-3 py-2 animate-float" style={{ animationDelay: "0s" }}>
                  <span className="text-sm">⚛️ React</span>
                </div>
                <div className="absolute bottom-10 left-0 glass-card !rounded-xl px-3 py-2 animate-float" style={{ animationDelay: "2s" }}>
                  <span className="text-sm">▲ Next.js</span>
                </div>
                <div className="absolute top-1/3 -left-2 sm:-left-4 glass-card !rounded-xl px-3 py-2 animate-float" style={{ animationDelay: "4s" }}>
                  <span className="text-sm">🐘 Laravel</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Text */}
          <div>
            <ScrollReveal direction="right" delay={0.3}>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
                {personalInfo.bio}
              </p>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal direction="right" delay={0.5}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {personalInfo.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="glass-card p-4 sm:p-5 text-center"
                  >
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </p>
                    <p className="text-text-muted text-xs sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
