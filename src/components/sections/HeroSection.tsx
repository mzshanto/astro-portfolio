// src/components/sections/HeroSection.tsx
"use client";
import React from "react";
import { FlipWords } from "../ui/flip-words";

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
      <div
        className="uppercase tracking-[0.05em] text-[#4a5568]"
        style={{ fontSize: "9px" }}
      >
        {sub}
      </div>
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

      <div className="relative z-10 mx-auto max-w-[1280px] px-8 md:px-14 py-16 md:py-24">
        <div className="flex flex-col-reverse items-center gap-12 md:grid md:grid-cols-[1fr_380px] md:items-center md:gap-14 lg:gap-16">

          {/* ════════════ LEFT ════════════ */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">

            {/* Availability badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/[0.08] px-[14px] py-[6px] pl-[10px]">
              <span className="relative flex h-[7px] w-[7px] flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
                <span
                  className="relative inline-flex h-[7px] w-[7px] rounded-full bg-teal-400"
                  style={{ boxShadow: "0 0 6px #14b8a6" }}
                />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-teal-300">
                Open to opportunities
              </span>
            </div>

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

            {/* Bio */}
            <p
              className="mb-10 max-w-[480px] leading-[1.8] text-[#8892a4]"
              style={{ fontSize: "15px" }}
            >
              3+ years engineering{" "}
              <strong className="font-medium text-[#c8d3e0]">
                high-throughput systems
              </strong>{" "}
              trusted by millions globally. Boosted{" "}
              <strong className="font-medium text-[#c8d3e0]">
                Core Web Vitals by 150%
              </strong>
              , cut troubleshooting time by{" "}
              <strong className="font-medium text-[#c8d3e0]">60%</strong>, and
              improved backend throughput by{" "}
              <strong className="font-medium text-[#c8d3e0]">30%</strong>{" "}
              through event-driven architecture, Redis caching, and
              Elasticsearch. Owns{" "}
              <strong className="font-medium text-[#c8d3e0]">SymlexVPN</strong>{" "}
              end-to-end — a production white-label SaaS platform with
              multi-tier reseller infrastructure, real-time analytics, and
              distributed microservice workflows.
            </p>

            {/* ── Stats: Glowing card tiles ── */}
            <div className="mb-11 flex w-full max-w-[440px] gap-[10px]">
              <StatTile
                value="3+"
                main="Years exp."
                sub="Professional"
                accent="teal"
              />
              <StatTile
                value="M+"
                main="Active users"
                sub="Global reach"
                accent="purple"
              />
              <StatTile
                value="White-label"
                main="VPN · SaaS"
                sub="Built & owned"
                accent="teal"
              />
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="inline-flex items-center gap-2 rounded-[8px] bg-teal-400 px-6 py-[11px] text-[14px] font-semibold text-[#051a18] tracking-[0.02em] transition-all hover:bg-teal-500 hover:-translate-y-[1px]"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
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
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[8px] border border-slate-400/15 p-[10px] text-slate-400 transition-all hover:border-slate-400/30 hover:text-[#e8eaf0]"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
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
                  style={{ width: "300px", height: "380px", borderRadius: "16px" }}
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

                  {/* Location chip */}
                  <div className="absolute bottom-[14px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[5px] whitespace-nowrap rounded-full border border-white/[0.06] bg-[rgba(8,12,16,0.90)] px-[12px] py-[5px] text-[11px] font-medium tracking-[0.04em] text-[#4a5568]">
                    <svg
                      width="9" height="9"
                      viewBox="0 0 24 24" fill="#14b8a6"
                      style={{ opacity: 0.7, flexShrink: 0 }}
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    Dhaka, Bangladesh
                  </div>
                </div>
              </div>

              {/* Floating tags — right */}
              <FloatingTag label="Node.js · Nest.js"  style={{ top: "36px",     right: "-62px" }} />
              <FloatingTag label="TypeScript"          style={{ top: "108px",    right: "-52px" }} />
              <FloatingTag label="Docker · Redis"      style={{ bottom: "110px", right: "-54px" }} />

              {/* Floating tags — left */}
              <FloatingTag label="Elasticsearch"       style={{ top: "68px",  left: "-56px" }} />
              <FloatingTag label="WebSockets · RMQ"    style={{ top: "148px", left: "-64px" }} />
            </div>
          </div>

        </div>
      </div>

      {/* Mobile tech pills */}
      <div className="relative z-10 flex flex-wrap justify-center gap-[6px] px-6 pb-12 md:hidden">
        {["Node.js", "TypeScript", "Next.js", "Docker", "Redis", "Elasticsearch", "RabbitMQ"].map(
          (t) => (
            <span
              key={t}
              className="rounded-full border border-teal-500/15 bg-teal-500/[0.07] px-[10px] py-[4px] text-[10px] font-medium tracking-[0.02em] text-teal-300"
            >
              {t}
            </span>
          )
        )}
      </div>

    </section>
  );
}

export default HeroSection;