// src/components/sections/AboutSection.tsx
"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    github: string;
    linkedin: string;
  };
}

interface AboutSectionProps {
  personalInfo: PersonalInfo;
}

export function AboutSection({ personalInfo }: AboutSectionProps) {
  return (
    <section id="about" className="relative z-10 py-20">
      {/* Semi-transparent overlay */}
      <div className="absolute"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Building scalable systems that serve millions
          </p>
        </div>

        {/* WobbleCard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          {/* Main About Card (Large - spans 2 cols) */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[500px] lg:min-h-[400px] bg-gradient-to-br from-teal-900 to-emerald-900 bg-opacity-0">
            <div className="max-w-lg">
              <div className="w-14 h-14 bg-teal-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Full-Stack Engineer Specializing in High-Performance Systems
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                With 3+ years of experience, I've built and scaled applications
                serving millions of users globally. I'm passionate about clean
                architecture, system optimization, and delivering measurable
                impact—like the 150% Core Web Vitals improvement I achieved for
                SymlexVPN.
              </p>
              <p className="mt-4 text-left text-sm text-neutral-300">
                Experienced in distributed systems, cloud/VPS deployments, and
                event-driven architectures using Redis, RabbitMQ, and
                Elasticsearch.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-teal-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-teal-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </WobbleCard>

          {/* Performance Metric Card */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-cyan-900 to-teal-900 bg-opacity-0">
            <div className="max-w-xs">
              <div className="w-12 h-12 bg-cyan-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                150% Performance Boost
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Optimized Core Web Vitals from ~35 to ~80, delivering
                blazing-fast user experiences for millions of global users.
              </p>
            </div>
          </WobbleCard>

          {/* Users Served Card */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-emerald-900 to-green-900 bg-opacity-0">
            <div className="max-w-xs">
              <div className="w-12 h-12 bg-emerald-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Millions of Users
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Managing SymlexVPN, a production platform trusted by millions
                worldwide with 3+ years of full-stack expertise.
              </p>
            </div>
          </WobbleCard>

          {/* Tech Stack Card (spans 2 cols) */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[300px] bg-gradient-to-br from-neutral-800 to-neutral-900 bg-opacity-0">
            <div className="max-w-lg">
              <div className="w-12 h-12 bg-teal-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-teal-400"
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
              </div>
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Currently Building Event-Driven Systems
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200 mb-6">
                Architecting scalable solutions with modern technologies and
                distributed systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-teal-500/20 border border-teal-500/30 rounded-full text-sm text-teal-300 font-medium">
                  Laravel + React
                </span>
                <span className="px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-sm text-emerald-300 font-medium">
                  RabbitMQ
                </span>
                <span className="px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300 font-medium">
                  Redis
                </span>
                <span className="px-3 py-1.5 bg-teal-500/20 border border-teal-500/30 rounded-full text-sm text-teal-300 font-medium">
                  Elasticsearch
                </span>
                <span className="px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-sm text-emerald-300 font-medium">
                  PostgreSQL
                </span>
                <span className="px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300 font-medium">
                  Docker
                </span>
              </div>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
