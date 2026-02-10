// src/components/sections/SkillsSection.tsx
"use client";
import React from "react";
import { GlowingEffect } from "../ui/glowing-effect";

interface Skill {
  category: string;
  items: string[];
}

interface SkillsSectionProps {
  skills: Skill[];
}

// Category icons as SVG (no lucide dependency needed)
const categoryIcons: Record<string, React.ReactNode> = {
  Languages: (
    <svg
      className="h-4 w-4 text-teal-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  ),
  Frontend: (
    <svg
      className="h-4 w-4 text-cyan-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  Backend: (
    <svg
      className="h-4 w-4 text-emerald-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    </svg>
  ),
  Databases: (
    <svg
      className="h-4 w-4 text-green-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>
  ),
  DevOps: (
    <svg
      className="h-4 w-4 text-teal-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  ),
  Specialized: (
    <svg
      className="h-4 w-4 text-emerald-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
};

// Grid area assignments for the bento-style layout
const gridAreas = [
  "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]", // Languages
  "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]", // Frontend
  "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/2/8]", // Backend (tall)
  "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]", // Databases
  "md:[grid-area:3/1/4/7] xl:[grid-area:2/5/3/8]", // DevOps
  "md:[grid-area:3/7/4/13] xl:[grid-area:2/8/3/13]", // Specialized
];

interface SkillGridItemProps {
  area: string;
  icon: React.ReactNode;
  category: string;
  items: string[];
}

function SkillGridItem({ area, icon, category, items }: SkillGridItemProps) {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-neutral-700/50 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl bg-neutral-900/50 p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {/* Icon */}
            <div className="w-fit rounded-lg border border-neutral-600 p-2">
              {icon}
            </div>

            {/* Category & Skills */}
            <div className="space-y-4">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {category}
              </h3>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs text-teal-300 font-medium hover:bg-teal-500/20 hover:border-teal-500/30 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="relative z-10 py-20 overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute bg-opacity-0"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-teal-400">Skills</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* GlowingEffect Grid */}
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2">
          {skills.map((skill, index) => (
            <SkillGridItem
              key={index}
              area={gridAreas[index] || gridAreas[0]}
              icon={categoryIcons[skill.category] || categoryIcons.Languages}
              category={skill.category}
              items={skill.items}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SkillsSection;
