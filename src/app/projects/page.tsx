"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import LinkConfirmModal from "@/components/LinkConfirmModal";
import Footer from "@/components/Footer";
import { projects, categories, type Project } from "@/data/projects";

const BubbleCanvas = dynamic(() => import("@/components/BubbleCanvas"), {
  ssr: false,
});

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleVisitSite = (project: Project) => {
    setSelectedProject(project);
  };

  const handleConfirm = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setSelectedProject(null);
  };

  return (
    <>
      <BubbleCanvas />

      {/* Top Nav Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass py-3"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="relative group flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-text-secondary group-hover:text-accent-bright transition-colors"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-text-primary">
              CLEO<span className="gradient-text">VERLY</span>
            </span>
          </Link>
          <span className="text-text-muted text-sm hidden sm:block">
            All Projects
          </span>
        </div>
      </motion.nav>

      <main className="flex-1 relative z-10 pt-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page header */}
          <ScrollReveal>
            <div className="text-center mb-12 pt-8">
              <p className="text-accent-bright text-sm font-semibold tracking-widest uppercase mb-3">
                My Work
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-4">
                All <span className="gradient-text">Projects</span>
              </h1>
              <div className="section-divider" />
              <p className="text-text-secondary mt-6 max-w-lg mx-auto">
                A complete collection of projects I&apos;ve built with various technologies.
                Click on any project to explore more.
              </p>
            </div>
          </ScrollReveal>

          {/* Search & Filters */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              {/* Search */}
              <div className="relative flex-1 w-full sm:max-w-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search projects or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-bg-secondary border border-border text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent-dim transition-colors"
                />
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-accent text-bg-primary"
                        : "bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-bg-tertiary border border-border"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-text-muted text-sm">
              Showing{" "}
              <span className="text-text-secondary font-medium">
                {filteredProjects.length}
              </span>{" "}
              project{filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {filteredProjects.length > 0 ? (
                <ScrollReveal stagger staggerDelay={0.1}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
                    {filteredProjects.map((project, i) => (
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
              ) : (
                <div className="text-center py-20">
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="text-text-secondary text-lg mb-2">
                    No projects found
                  </p>
                  <p className="text-text-muted text-sm">
                    Try adjusting your search or filter
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />

      {/* Modal */}
      {selectedProject && (
        <LinkConfirmModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}
