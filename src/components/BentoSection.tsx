"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const ease = [0.22, 1, 0.36, 1] as const;

const updates = [
  { text: "Added navbar to site", time: "2m" },
  { text: "Applied client suggestions", time: "1h" },
  { text: "Fixed bugs on home page", time: "3h" },
];

function Card({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
      className={`card p-6 flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function BentoSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <p className="eyebrow mb-6">Why work with me</p>
          <h2 className="display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary max-w-2xl">
            A smooth, reliable build — start to finish.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {/* On-time delivery */}
          <Card delay={0}>
            <div className="flex-1 flex items-center justify-center py-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-accent/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 text-xs font-medium bg-white border border-border rounded-full px-2.5 py-1 shadow-sm">
                  Completed
                </span>
              </div>
            </div>
            <h3 className="text-base font-semibold text-text-primary mt-2">
              On-time delivery
            </h3>
            <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
              Clear estimates up front, then shipped on schedule — every milestone.
            </p>
          </Card>

          {/* Consistent updates (commit feed) */}
          <Card delay={0.08}>
            <div className="flex-1 rounded-xl bg-bg-secondary border border-border p-3.5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-medium text-text-secondary">
                  Latest updates
                </span>
              </div>
              <div className="space-y-2">
                {updates.map((u, i) => (
                  <motion.div
                    key={u.text}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2.5 bg-white border border-border rounded-lg px-3 py-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-xs text-text-primary flex-1 truncate">
                      {u.text}
                    </span>
                    <span className="text-[0.65rem] text-text-muted font-mono">
                      {u.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <h3 className="text-base font-semibold text-text-primary mt-5">
              Consistent updates
            </h3>
            <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
              You always know what changed — frequent, transparent progress.
            </p>
          </Card>

          {/* Seamless feedback (chat) */}
          <Card delay={0.16}>
            <div className="flex-1 flex flex-col justify-center gap-3 py-4">
              <div className="self-start max-w-[80%] bg-bg-secondary border border-border rounded-2xl rounded-bl-sm px-3.5 py-2.5">
                <p className="text-xs text-text-primary">
                  Can we nudge the hero up a bit?
                </p>
              </div>
              <div className="self-end max-w-[80%] bg-accent text-white rounded-2xl rounded-br-sm px-3.5 py-2.5">
                <p className="text-xs">On it — pushing the fix now ✦</p>
              </div>
              <div className="self-start flex items-center gap-1.5 text-text-muted px-1">
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted/50 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted/50 animate-pulse" style={{ animationDelay: "0.2s" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted/50 animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
            <h3 className="text-base font-semibold text-text-primary mt-2">
              Seamless feedback
            </h3>
            <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
              Open communication throughout — no jargon, no back-and-forth.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
