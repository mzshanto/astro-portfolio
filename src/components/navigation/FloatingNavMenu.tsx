"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconCode,
  IconMessage,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function FloatingNavMenu() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-blue-500" />
      ),
      href: "#",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-indigo-500" />
      ),
      href: "#about",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-purple-500" />
      ),
      href: "#experience",
    },
    {
      title: "Projects",
      icon: (
        <IconCode className="h-full w-full text-teal-500" />
      ),
      href: "#projects",
    },
    {
      title: "Contact",
      icon: (
        <IconMessage className="h-full w-full text-emerald-500" />
      ),
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-800 dark:text-white" />
      ),
      href: "https://github.com/mzshanto",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-blue-600 dark:text-blue-400" />
      ),
      href: "https://linkedin.com/in/mzshanto",
    },
  ];

  return (
    <div className="fixed bottom-4 md:bottom-8 inset-x-0 w-full flex items-center justify-center z-[100] px-4 pointer-events-none">
      <div className="pointer-events-auto">
        <FloatingDock
          mobileClassName="fixed bottom-4 right-4 z-[100]"
          desktopClassName="mx-auto"
          items={links}
        />
      </div>
    </div>
  );
}
