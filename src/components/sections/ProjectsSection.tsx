// src/components/sections/ProjectsSection.tsx
"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

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

// Project icon SVGs for cards (since we don't have images)
const projectIcons: Record<string, string> = {
  SymlexVPN: "🛡️",
  "Ticket Master Automation": "🎫",
  "Blockchain Document Verification": "🔗",
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [active, setActive] = useState<Project | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
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
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Some of the notable projects I've worked on
          </p>
        </div>

        {/* Expandable Card Overlay */}
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

        {/* Expanded Card */}
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
                {/* Expanded Header with gradient */}
                {/* <motion.div
                  layoutId={`image-${active.title}-${id}`}
                  className="w-full h-48 lg:h-56 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-700 flex items-center justify-center"
                >
                  <span className="text-7xl">
                    {projectIcons[active.title] || "🚀"}
                  </span>
                </motion.div> */}

                <div className="flex flex-col flex-1 overflow-hidden">
                  {/* Title, Description & CTA */}
                  <div className="flex justify-between items-start p-6 shrink-0">
                    <div className="flex-1 pr-4">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-xl text-white"
                      >
                        {active.title}
                      </motion.h3>
                      {/* <motion.p
                        layoutId={`description-${active.title}-desc-${id}`}
                        className="text-neutral-400 text-sm mt-1"
                      >
                        {active.featured ? "Featured Project" : "Project"}
                      </motion.p> */}
                    </div>

                    {/* <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.links?.live || active.links?.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-teal-500 text-white flex-shrink-0"
                    >
                      {active.links?.live ? "Live Demo" : "View Code"}
                    </motion.a> */}
                  </div>

                  {/* Expanded Content */}
                  <div className="pt-2 relative px-6 pb-6 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-300 text-sm md:text-base pb-4 flex flex-col items-start gap-6"
                    >
                      {/* Full Description */}
                      <p className="leading-relaxed">{active.description}</p>

                      {/* Technologies */}
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

                      {/* Links */}
                      {/* <div className="flex gap-4">
                        {active.links?.live && (
                          <a
                            href={active.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            Live Demo
                          </a>
                        )}
                        {active.links?.github && (
                          <a
                            href={active.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-300 transition-colors"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Source Code
                          </a>
                        )}
                      </div> */}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        {/* Project List */}
        <ul className="max-w-3xl mx-auto w-full space-y-2">
          {projects.map((project) => (
            <motion.div
              layoutId={`card-${project.title}-${id}`}
              key={`card-${project.title}-${id}`}
              onClick={() => setActive(project)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-800/50 rounded-xl cursor-pointer border border-transparent hover:border-neutral-700/50 transition-colors duration-200"
            >
              <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
                {/* Project Icon */}
                {/* <motion.div
                  layoutId={`image-${project.title}-${id}`}
                  className="h-28 w-28 md:h-14 md:w-14 rounded-lg bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-700 flex items-center justify-center flex-shrink-0"
                >
                  <span className="text-3xl md:text-xl">
                    {projectIcons[project.title] || "🚀"}
                  </span>
                </motion.div> */}

                {/* Title & Short Description */}
                <div className="flex-1">
                  <motion.h3
                    layoutId={`title-${project.title}-${id}`}
                    className="font-medium text-white text-center md:text-left"
                  >
                    {project.title}
                    {project.featured && (
                      <span className="ml-2 inline-block px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400 font-medium">
                        Featured
                      </span>
                    )}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${project.title}-desc-${id}`}
                    className="text-neutral-400 text-sm text-center md:text-left mt-1 line-clamp-2"
                  >
                    {project.description}
                  </motion.p>

                  {/* Inline Tech Tags (visible on list) */}
                  <div className="flex flex-wrap gap-1.5 mt-2 justify-center md:justify-start">
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
                </div>
              </div>

              {/* CTA Button */}
              {/* <motion.button
                layoutId={`button-${project.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-neutral-800 hover:bg-teal-500 hover:text-white text-neutral-300 mt-4 md:mt-0 border border-neutral-700 hover:border-teal-500 transition-colors duration-200 flex-shrink-0"
              >
                {project.links?.live ? "Live Demo" : "View Code"}
              </motion.button> */}
            </motion.div>
          ))}
        </ul>
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default ProjectsSection;
