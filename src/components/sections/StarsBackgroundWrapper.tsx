// src/components/sections/StarsBackgroundWrapper.tsx
"use client";
import React from "react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";

export function StarsBackgroundWrapper() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-neutral-950" />
      
      {/* Twinkling stars */}
      <StarsBackground
        starDensity={0.0004}
        allStarsTwinkle={true}
        twinkleProbability={0.8}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1}
      />
      
      {/* Shooting stars with teal/emerald colors */}
      <ShootingStars
        minSpeed={10}
        maxSpeed={30}
        minDelay={1200}
        maxDelay={4200}
        starColor="#14b8a6"
        trailColor="#10b981"
        starWidth={12}
        starHeight={2}
      />
    </div>
  );
}

export default StarsBackgroundWrapper;