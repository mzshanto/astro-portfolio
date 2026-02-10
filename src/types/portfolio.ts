// src/types/portfolio.ts

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  current?: boolean;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  links?: {
    live?: string;
    github?: string;
  };
  image?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  thesis?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedin: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
}