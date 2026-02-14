// src/components/sections/ContactSection.tsx
"use client";
import React, { useState } from "react";

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedin: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  contact: ContactInfo;
}

interface ContactSectionProps {
  personalInfo: PersonalInfo;
}

export function ContactSection({ personalInfo }: ContactSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const dockItems = [
    {
      title: "GitHub",
      href: personalInfo.contact.github,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      href: personalInfo.contact.linkedin,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      title: "Email",
      href: `mailto:${personalInfo.contact.email}`,
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
    {
      title: "Phone",
      href: `tel:${personalInfo.contact.phone}`,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative z-10 py-20">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </div>

        {/* Contact Card with Spotlight Effect */}
        <div
          className="relative bg-gray-600/20  border border-neutral-700/50 rounded-3xl p-8 md:p-12 overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Spotlight Effect */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.1), transparent 40%)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Avatar/Initials */}
            {/* <div className="w-24 h-24 mx-auto rounded-full mb-8 shadow-lg shadow-teal-500/25 ring-2 ring-teal-500/50 ring-offset-2 ring-offset-neutral-900 overflow-hidden">
              <img
                src="#"
                alt={personalInfo.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div> */}

            {/* Name & Title */}
            {/* <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-teal-400 font-medium mb-8">
              {personalInfo.title}
            </p> */}

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="group bg-neutral-800/50 border border-neutral-700/50 rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 mx-auto bg-teal-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-500/30 transition-colors">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-neutral-500 text-sm mb-1">Email</p>
                <p className="text-white text-sm break-all group-hover:text-teal-400 transition-colors">
                  {personalInfo.contact.email}
                </p>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="group bg-neutral-800/50 border border-neutral-700/50 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 mx-auto bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <p className="text-neutral-500 text-sm mb-1">Phone</p>
                <p className="text-white text-sm group-hover:text-emerald-400 transition-colors">
                  {personalInfo.contact.phone}
                </p>
              </a>

              {/* Location */}
              <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-2xl p-6">
                <div className="w-12 h-12 mx-auto bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-neutral-500 text-sm mb-1">Location</p>
                <p className="text-white text-sm">
                  {personalInfo.contact.address}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-500/25"
            >
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
              Send Me an Email
            </a>
          </div>
        </div>

        {/* Floating Dock for Social Links */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2 p-2 bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl">
            {dockItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-700/50 hover:bg-teal-500/20 border border-transparent hover:border-teal-500/30 transition-all duration-300 hover:scale-110"
                aria-label={item.title}
              >
                <span className="text-neutral-400 group-hover:text-teal-400 transition-colors">
                  {item.icon}
                </span>

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-md text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
