// src/components/sections/ProjectsSection.tsx
"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { GlowingEffect } from "../ui/glowing-effect";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  links?: {
    live?: string;
    github?: string;
  };
}

interface ProjectsSectionProps {
  projects: Project[];
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const projectIcons: Record<string, React.ReactNode> = {
  SymlexVPN: (
    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  "Ticket Master Automation": (
    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  "Blockchain Document Verification": (
    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  ),
};

const defaultIcon = (
  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [active, setActive] = useState<Project | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(false);
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="projects" className="relative z-10 py-20">
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Some of the notable projects I've worked on
          </p>
        </div>

        {/* Overlay */}
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-10"
            />
          )}
        </AnimatePresence>

        {/* Expanded Card Modal */}
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 border border-neutral-700 sm:rounded-3xl overflow-hidden"
              >
                <div className="flex flex-col flex-1 overflow-hidden">
                  <div className="flex justify-between items-start p-6 shrink-0">
                    <div className="flex items-center gap-3 flex-1 pr-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
                        {projectIcons[active.title] || defaultIcon}
                      </div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-xl text-white"
                      >
                        {active.title}
                      </motion.h3>
                    </div>
                  </div>

                  <div className="pt-2 relative px-6 pb-6 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-300 text-sm md:text-base pb-4 flex flex-col items-start gap-6"
                    >
                      <p className="leading-relaxed">{active.description}</p>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {active.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-sm text-teal-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        {/* Cards Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <li key={`card-${project.title}-${id}`} className="list-none">
              <div className="relative h-full rounded-2xl border border-neutral-700/50 p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <motion.div
                  layoutId={`card-${project.title}-${id}`}
                  onClick={() => setActive(project)}
                  className="relative flex h-full flex-col gap-4 rounded-xl bg-neutral-900/50 p-6 cursor-pointer hover:bg-neutral-800/70 transition-colors duration-300 shadow-[0px_0px_27px_0px_#2D2D2D]"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    {projectIcons[project.title] || defaultIcon}
                  </div>

                  {/* Title + Badge */}
                  <div>
                    <motion.h3
                      layoutId={`title-${project.title}-${id}`}
                      className="font-semibold text-white text-lg leading-snug"
                    >
                      {project.title}
                    </motion.h3>
                    {project.featured && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400 font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <motion.p
                    layoutId={`description-${project.title}-desc-${id}`}
                    className="text-neutral-400 text-sm leading-relaxed line-clamp-3 flex-1"
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 bg-neutral-800 border border-neutral-700 rounded-md text-xs text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 bg-neutral-800 border border-neutral-700 rounded-md text-xs text-neutral-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default ProjectsSection;
