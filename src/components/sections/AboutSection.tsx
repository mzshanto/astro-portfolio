// src/components/sections/AboutSection.tsx
"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import {
  Code2,
  Cpu,
  Package,
  Rocket,
  Hammer,
  BookOpen,
  MessageSquare,
  MapPin,
  UserRound,
  Briefcase,
  Zap,
  Layers,
} from "lucide-react";

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
      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Engineer by trade, builder by nature
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full">

          {/* ── Card 1: Who I Am ── */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 min-h-[420px] bg-teal-950/35 border border-teal-500/20"
            className="!py-10 sm:!px-8"
          >
            <div className="max-w-xl">
              <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <UserRound size={18} className="text-teal-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 leading-snug">
                I build things people actually use
              </h3>
              <p className="text-neutral-200 text-[15px] leading-relaxed mb-3">
                I'm a full-stack engineer who <strong className="text-teal-300 font-medium">owns products end-to-end</strong> — from architecture and database design to deployment pipelines and 2am production incidents.
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                3+ years shipping and scaling systems across VPN, ERP, and CRM domains — equally comfortable reviewing a DB query plan as polishing a UI interaction.
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                I care about systems that stay up, code that's readable months later, and products that genuinely solve real problems.
              </p>
            </div>
          </WobbleCard>

          {/* ── Card 2: What I Do ── */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 min-h-[420px] bg-emerald-950/35 border border-emerald-500/20"
            className="!py-10 sm:!px-8"
          >
            <div>
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <Briefcase size={18} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-5">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 size={14} className="text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Full-Stack Engineering</p>
                    <p className="text-neutral-300 text-xs mt-0.5 leading-relaxed">
                      React / Next.js frontends + Laravel REST APIs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu size={14} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">System Architecture</p>
                    <p className="text-neutral-300 text-xs mt-0.5 leading-relaxed">
                      Event-driven, queues, distributed microservices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package size={14} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">SaaS / Product Building</p>
                    <p className="text-neutral-300 text-xs mt-0.5 leading-relaxed">
                      Own it end-to-end — not just code it
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket size={14} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Performance &amp; DevOps</p>
                    <p className="text-neutral-300 text-xs mt-0.5 leading-relaxed">
                      VPS / cloud deployments, uptime &amp; monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </WobbleCard>

          {/* ── Card 3: Right Now ── */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 min-h-[360px] bg-teal-950/35 border border-teal-500/20"
            className="!py-10 sm:!px-8"
          >
            <div>
              <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                <Zap size={18} className="text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-5">Right Now</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Hammer size={14} className="text-amber-400 flex-shrink-0 mt-[2px]" />
                  <div>
                    <p className="text-teal-500/80 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Building</p>
                    <p className="text-white text-sm leading-relaxed">
                      SymlexHUB — multi-tenant white-label SaaS platform
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen size={14} className="text-sky-400 flex-shrink-0 mt-[2px]" />
                  <div>
                    <p className="text-teal-500/80 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Exploring</p>
                    <p className="text-white text-sm leading-relaxed">
                      AI &amp; System Design
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare size={14} className="text-teal-400 flex-shrink-0 mt-[2px]" />
                  <div>
                    <p className="text-teal-500/80 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Open to</p>
                    <p className="text-white text-sm leading-relaxed">
                      Freelance projects &amp; full-time roles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-rose-400 flex-shrink-0 mt-[2px]" />
                  <div>
                    <p className="text-teal-500/80 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Based in</p>
                    <p className="text-neutral-200 text-sm">Bangladesh 🇧🇩</p>
                  </div>
                </div>
              </div>
            </div>
          </WobbleCard>

          {/* ── Card 4: Tech Stack ── */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 min-h-[360px] bg-slate-900/35 border border-slate-500/20"
            className="!py-10 sm:!px-8"
          >
            <div>
              <div className="w-10 h-10 bg-slate-500/20 rounded-xl flex items-center justify-center mb-4">
                <Layers size={18} className="text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-5">Tech Stack</h3>
              <div className="space-y-3">

                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest w-16 flex-shrink-0 pt-[4px]">Frontend</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "Next.js", "Vue.js", "TypeScript"].map((t) => (
                      <span key={t} className="px-2.5 py-0.5 bg-teal-500/15 border border-teal-500/25 rounded-full text-xs text-teal-300 font-medium">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest w-16 flex-shrink-0 pt-[4px]">Backend</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Laravel", "Node.js", "NestJS", "Express"].map((t) => (
                      <span key={t} className="px-2.5 py-0.5 bg-blue-500/15 border border-blue-500/25 rounded-full text-xs text-blue-300 font-medium">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest w-16 flex-shrink-0 pt-[4px]">Database</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["MySQL", "PostgreSQL", "MongoDB", "Redis"].map((t) => (
                      <span key={t} className="px-2.5 py-0.5 bg-emerald-500/15 border border-emerald-500/25 rounded-full text-xs text-emerald-300 font-medium">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest w-16 flex-shrink-0 pt-[4px]">Infra</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["RabbitMQ", "Elasticsearch", "Docker", "VPS / Cloud"].map((t) => (
                      <span key={t} className="px-2.5 py-0.5 bg-cyan-500/15 border border-cyan-500/25 rounded-full text-xs text-cyan-300 font-medium">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest w-16 flex-shrink-0 pt-[4px]">Tooling</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Playwright", "Electron", "Prisma", "Solidity"].map((t) => (
                      <span key={t} className="px-2.5 py-0.5 bg-sky-500/15 border border-sky-500/25 rounded-full text-xs text-sky-300 font-medium">{t}</span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </WobbleCard>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
