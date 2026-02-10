// src/components/sections/HeroSection.tsx
"use client";
import React from "react";
import { Spotlight } from "../ui/spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { FlipWords } from "../ui/flip-words";

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

interface Metric {
  value: string;
  label: string;
  color: string;
}

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  metrics: Metric[];
}

export function HeroSection({ personalInfo, metrics }: HeroSectionProps) {
  const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Architect",
    "Performance Optimizer",
  ];

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#14b8a6"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 py-20">
        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-100 to-zinc-300 mb-4 text-center">
          {personalInfo.name}
        </h1>

        {/* Animated Role/Title */}
        <div className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-center h-16 flex items-center justify-center">
          <FlipWords words={roles} className="text-teal-400" />
        </div>

        {/* Animated Summary */}
        <div className="max-w-4xl mx-auto mb-10">
          <TextGenerateEffect
            words={personalInfo.summary}
            className="text-base md:text-lg lg:text-xl font-medium text-center leading-relaxed text-neutral-300"
          />
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl px-6 py-4 hover:border-teal-500/30 transition-all duration-300"
            >
              <div
                className={`text-3xl md:text-4xl font-bold ${metric.color} mb-1`}
              >
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-neutral-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Primary CTA - Get In Touch */}
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg blur-sm group-hover:blur-md transition-all"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg"></span>
            <span className="relative flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get In Touch
            </span>
          </a>

          {/* Secondary CTA - View Projects */}
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full border-2 border-teal-500/50 rounded-lg"></span>
            <span className="absolute inset-0 w-full h-full bg-teal-500/5 rounded-lg group-hover:bg-teal-500/10 transition-all"></span>
            <span className="relative flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              View Projects
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
