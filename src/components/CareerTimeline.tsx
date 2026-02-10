"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

interface TimelineItem {
  title: string;
  heading: string;
  subheading: string;
  location?: string;
  items: string[];
  technologies?: string[];
  metadata?: {
    label: string;
    value: string;
  };
}

interface CareerTimelineProps {
  data: TimelineItem[];
}

export function CareerTimeline({ data }: CareerTimelineProps) {
  const timelineData = data.map((item) => ({
    title: item.title,
    content: (
      <div>
        <h3 className="mb-2 text-xl font-bold text-neutral-900 md:text-2xl dark:text-white">
          {item.heading}
        </h3>
        <p className="mb-2 text-base font-semibold text-teal-600 dark:text-teal-400">
          {item.subheading}
        </p>
        {item.location && (
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            {item.location}
          </p>
        )}
        <div className="mb-6 space-y-2">
          {item.items.map((text, idx) => (
            <p
              key={idx}
              className="text-sm text-neutral-700 dark:text-neutral-300"
            >
              • {text}
            </p>
          ))}
        </div>
        {item.metadata && (
          <div className="mb-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800/50">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              {item.metadata.label}
            </p>
            <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
              {item.metadata.value}
            </p>
          </div>
        )}
        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={timelineData} />
    </div>
  );
}
