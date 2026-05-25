// src/components/sections/HeroSection.tsx
"use client";
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { Globe, TrendingUp, Cpu, Layers, Mail } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

// ── Types ──────────────────────────────────────────────────────────────
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

// ── Floating Tag ───────────────────────────────────────────────────────
function FloatingTag({
  label,
  style,
}: {
  label: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      className="absolute hidden xl:flex items-center gap-[5px] rounded-[8px] border border-teal-500/20 bg-[rgba(8,12,16,0.88)] px-[10px] py-[6px] text-[11px] font-medium tracking-[0.03em] text-teal-300 backdrop-blur-sm whitespace-nowrap z-20"
      style={style}
    >
      <span className="inline-block h-[5px] w-[5px] rounded-full bg-teal-400 flex-shrink-0" />
      {label}
    </div>
  );
}

// ── Corner Mark ────────────────────────────────────────────────────────
function CornerMark({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const base = "absolute w-[14px] h-[14px] border-white/40 border-solid";
  const variants: Record<string, string> = {
    tl: "top-[7px] left-[7px] border-t-[1.5px] border-l-[1.5px]",
    tr: "top-[7px] right-[7px] border-t-[1.5px] border-r-[1.5px]",
    bl: "bottom-[7px] left-[7px] border-b-[1.5px] border-l-[1.5px]",
    br: "bottom-[7px] right-[7px] border-b-[1.5px] border-r-[1.5px]",
  };
  return <span className={`${base} ${variants[pos]}`} />;
}

// ── Stat Tile ──────────────────────────────────────────────────────────
function StatTile({
  value,
  main,
  sub,
  accent = "teal",
}: {
  value: string;
  main: string;
  sub: string;
  accent?: "teal" | "purple";
}) {
  const isTeal = accent === "teal";
  return (
    <div
      className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-[12px] px-3 py-4 text-center"
      style={{
        background: isTeal ? "rgba(20,184,166,0.04)" : "rgba(139,92,246,0.04)",
        border: `1px solid ${isTeal ? "rgba(20,184,166,0.14)" : "rgba(139,92,246,0.16)"}`,
      }}
    >
      {/* Top highlight line */}
      <span
        className="pointer-events-none absolute left-0 right-0 top-0 h-[1px]"
        style={{
          background: isTeal
            ? "linear-gradient(90deg, transparent, rgba(20,184,166,0.55), transparent)"
            : "linear-gradient(90deg, transparent, rgba(139,92,246,0.45), transparent)",
        }}
      />

      {/* Value */}
      <div
        className="mb-[6px] leading-none"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: value.length > 4 ? "18px" : "28px",
          lineHeight: value.length > 4 ? "1.2" : "1",
          color: isTeal ? "#14b8a6" : "#a78bfa",
        }}
      >
        {value}
      </div>

      {/* Main label */}
      <div
        className="mb-[3px] font-semibold text-[#c8d3e0]"
        style={{ fontSize: "11px", letterSpacing: "0.02em" }}
      >
        {main}
      </div>

      {/* Sub label */}
      {/* <div
        className="uppercase tracking-[0.05em] text-[#4a5568]"
        style={{ fontSize: "9px" }}
      >
        {sub}
      </div> */}
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────
export function HeroSection({ personalInfo, metrics }: HeroSectionProps) {
  const roles = [
    "Software Engineer",
    "Backend Architect",
    "Full-Stack Developer",
    "Performance Optimizer",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">

      <div className="relative z-10 mx-auto max-w-[1400px] px-8 md:px-14 py-16 md:py-24">
        <div className="flex flex-col-reverse items-center gap-12 md:grid md:grid-cols-[1.4fr_380px] md:items-center md:gap-14 lg:grid-cols-[1.6fr_440px] lg:gap-32">

          {/* ════════════ LEFT ════════════ */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">

            {/* Name */}
            <h1
              className="mb-3 leading-[1.0] tracking-[-0.02em] text-[#f0f2f5]"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(38px, 5vw, 66px)",
              }}
            >
              {personalInfo.name.split(" ").slice(0, -1).join(" ")}
              <br />
              <span className="text-teal-400">
                {personalInfo.name.split(" ").pop()}
              </span>
            </h1>

            {/* FlipWords animated role */}
            <div
              className="mb-6 uppercase tracking-[0.08em] text-[#4a5568]"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(13px, 1.4vw, 17px)",
                fontWeight: 400,
              }}
            >
              <FlipWords words={roles} className="text-teal-400/70" />
            </div>

            {/* Teal divider */}
            <div
              className="mb-6 h-[2px] w-[48px]"
              style={{
                background: "linear-gradient(90deg, #14b8a6, transparent)",
              }}
            />

            {/* Bio — Bullet Proof Points */}
            <ul className="mb-10 w-full space-y-[11px] text-left" style={{ fontSize: "15px" }}>
              <li className="flex items-start gap-[10px] text-[#8892a4] leading-[1.75]">
                <Globe className="mt-[3px] flex-shrink-0 text-teal-400" size={15} strokeWidth={1.8} />
                <span>
                  <strong className="font-semibold text-[#c8d3e0]">3+ years</strong> building &amp; scaling full-stack systems across VPN, ERP, and CRM domains — serving{" "}
                  <strong className="font-semibold text-[#c8d3e0]">millions of active users</strong> globally.
                </span>
              </li>
              <li className="flex items-start gap-[10px] text-[#8892a4] leading-[1.75]">
                <TrendingUp className="mt-[3px] flex-shrink-0 text-teal-400" size={15} strokeWidth={1.8} />
                <span>
                  Pushed <strong className="font-semibold text-[#c8d3e0]">Core Web Vitals from ~35 → ~80</strong> and boosted backend throughput by{" "}
                  <strong className="font-semibold text-[#c8d3e0]">30%</strong> via Redis caching, query optimisation, and async job queues for high-volume workloads.
                </span>
              </li>
              <li className="flex items-start gap-[10px] text-[#8892a4] leading-[1.75]">
                <Cpu className="mt-[3px] flex-shrink-0 text-teal-400" size={15} strokeWidth={1.8} />
                <span>
                  Architected event-driven systems with <strong className="font-semibold text-[#c8d3e0]">RabbitMQ</strong>, centralised logging with{" "}
                  <strong className="font-semibold text-[#c8d3e0]">Elasticsearch</strong>, and real-time broadcasting — cutting troubleshooting time by{" "}
                  <strong className="font-semibold text-[#c8d3e0]">60%</strong>.
                </span>
              </li>
              <li className="flex items-start gap-[10px] text-[#8892a4] leading-[1.75]">
                <Layers className="mt-[3px] flex-shrink-0 text-teal-400" size={15} strokeWidth={1.8} />
                <span>
                  Owns a <strong className="font-semibold text-[#c8d3e0]">production VPN &amp; SaaS ecosystem</strong> — <strong className="font-semibold text-[#c8d3e0]">SymlexVPN</strong> &amp;{" "}
                  <strong className="font-semibold text-[#c8d3e0]">SymlexHUB</strong> — built end-to-end with multi-gateway payments, email/push campaigns, dynamic content management, wallet &amp; affiliate systems, coupons, add-ons, real-time event broadcasting, queue &amp; batch processing, and full activity logging.
                </span>
              </li>
            </ul>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="inline-flex items-center gap-2 rounded-[8px] bg-teal-400 px-6 py-[11px] text-[14px] font-semibold text-[#051a18] tracking-[0.02em] transition-all hover:bg-teal-500 hover:-translate-y-[1px]"
              >
                <Mail size={14} strokeWidth={2} />
                Get In Touch
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-[8px] border border-slate-400/15 px-5 py-[10px] text-[14px] font-medium text-slate-400 transition-all hover:border-slate-400/30 hover:text-[#e8eaf0]"
              >
                View Projects →
              </a>

              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[8px] border border-slate-400/15 p-[10px] text-slate-400 transition-all hover:border-slate-400/30 hover:text-[#e8eaf0]"
              >
                <IconBrandGithub size={16} stroke={1.8} />
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[8px] border border-slate-400/15 p-[10px] text-slate-400 transition-all hover:border-slate-400/30 hover:text-[#e8eaf0]"
              >
                <IconBrandLinkedin size={16} stroke={1.8} />
              </a>
            </div>
          </div>

          {/* ════════════ RIGHT — PHOTO ════════════ */}
          <div className="relative flex justify-center">
            {/* C + F: outer ghost ring + inner teal→purple neon gradient */}
            <div
              className="relative"
              style={{
                padding: "6px",
                borderRadius: "22px",
                border: "1px solid rgba(139,92,246,0.18)",
                boxShadow:
                  "0 0 24px rgba(139,92,246,0.08), 0 0 48px rgba(20,184,166,0.06)",
              }}
            >
              {/* Inner neon gradient ring */}
              <div
                style={{
                  padding: "2.5px",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(135deg, #14b8a6, #8b5cf6, #6366f1, #14b8a6)",
                  boxShadow:
                    "0 0 18px rgba(139,92,246,0.45), 0 0 40px rgba(20,184,166,0.25), 0 0 70px rgba(139,92,246,0.15)",
                }}
              >
                {/* Photo frame */}
                <div
                  className="relative overflow-hidden"
                  style={{ borderRadius: "16px" }}
                >
                  <CornerMark pos="tl" />
                  <CornerMark pos="tr" />
                  <CornerMark pos="bl" />
                  <CornerMark pos="br" />

                  <img
                    src="/image.jpg"
                    alt={`${personalInfo.name} — Software Engineer`}
                    className="h-full w-full object-cover object-top"
                  />

                  {/* Bottom fade */}
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0"
                    style={{
                      height: "130px",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HeroSection;