// src/components/sections/ExperienceSection.tsx
"use client";
import React from "react";
import { Timeline } from "../ui/timeline";

interface Experience {
  company: string;
  role: string;
  duration: string;
  current?: boolean;
  achievements: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  thesis?: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
  education: Education;
}

export function ExperienceSection({
  experiences,
  education,
}: ExperienceSectionProps) {
  // Transform experiences and education into Timeline data format
  const timelineData = [
    // Experience items
    ...experiences.map((exp) => ({
      title: exp.duration,
      content: (
        <div>
          {/* Current Badge */}
          {exp.current && (
            <span className="inline-block mb-4 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400 font-medium">
              Currently Working
            </span>
          )}

          {/* Role */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {exp.role}
          </h3>

          {/* Company */}
          <p className="text-teal-400 font-semibold mb-4 flex items-center gap-2">
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            {exp.company}
          </p>

          {/* Achievements */}
          <div className="mb-6 space-y-2">
            {exp.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-sm text-neutral-300"
              >
                <span className="text-teal-400 mt-0.5 flex-shrink-0">✓</span>
                <span>{achievement}</span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs text-teal-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    })),

    // Education item
    {
      title: education.duration,
      content: (
        <div>
          {/* Education Badge */}
          <span className="inline-block mb-4 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-medium">
            Education
          </span>

          {/* Degree */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {education.degree}
          </h3>

          {/* Institution */}
          <p className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
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
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            {education.institution}
          </p>

          {/* Location */}
          <p className="text-neutral-400 text-sm mb-4 flex items-center gap-2">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {education.location}
          </p>

          {/* Thesis */}
          {education.thesis && (
            <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2 flex items-center gap-2">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Thesis
              </p>
              <p className="text-neutral-300 text-sm">{education.thesis}</p>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="relative z-10 py-20">
      {/* Transparent overlay - stars visible through */}
      <div className="absolute inset-0 bg-opacity-0"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-emerald-400">Education</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        {/* Aceternity Timeline */}
        <div className="relative w-full overflow-clip">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
