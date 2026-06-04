"use client";

import { useState } from "react";
import ScrollReveal, { ScrollRevealItem } from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import LinkConfirmModal from "./LinkConfirmModal";
import { projects, type Project } from "@/data/projects";
import Link from "next/link";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter((p) => p.featured);

  const handleVisitSite = (project: Project) => {
    setSelectedProject(project);
  };

  const handleConfirm = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[120px] pointer-events-none"
        style={{ background: "var(--accent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent-bright text-sm font-semibold tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="section-divider" />
            <p className="text-text-secondary mt-6 max-w-lg mx-auto">
              Here are some of my best works. Each project is crafted with attention to detail and modern technologies.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured grid */}
        <ScrollReveal stagger staggerDelay={0.15}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ScrollRevealItem key={project.id} direction="up">
                <ProjectCard
                  project={project}
                  onVisitSite={handleVisitSite}
                  index={i}
                />
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>

        {/* View all button */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/projects" className="btn-secondary inline-flex">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              View All Projects
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal */}
      {selectedProject && (
        <LinkConfirmModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onConfirm={handleConfirm}
        />
      )}
    </section>
  );
}
