// src/data/portfolioData.ts

import type { PersonalInfo, Experience, Project, Skill, Education } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "MD. MONIRUZZAMAN SHANTO",
  title: "Software Engineer",
  summary: "Results-driven Software Engineer with 3+ years of experience designing and scaling full-stack web applications across VPN, ERP, CRM domains. Proven record of boosting Core Web Vitals by 150%, delivering high-performance REST APIs, and optimizing backend systems serving millions of global users.",
  contact: {
    email: "ms.shanto1234@gmail.com",
    phone: "+8801792157755",
    address: "Uttara, Dhaka, Bangladesh",
    github: "https://github.com/mzshanto",
    linkedin: "https://linkedin.com/in/mzshanto"
  }
};

export const experiences: Experience[] = [
  {
    company: "Kolpolok Limited",
    role: "Software Engineer I",
    duration: "April 2024 – Present",
    current: true,
    achievements: [
      "Own and manage SymlexVPN, a production VPN platform serving millions of global users, focusing on performance, scalability, and reliability.",
      "Engineered and optimized frontend & backend systems, improving Core Web Vitals from ~35 to ~80 through targeted performance optimizations.",
      "Designed and scaled a white-label VPN platform, including admin panels and reseller portals, enabling partners to operate fully branded VPN services.",
      "Built secure REST APIs, integrated third-party services, and optimized backend systems using MySQL and Redis, improving throughput and query performance by 30%.",
      "Implemented event-driven architecture with RabbitMQ and centralized logging with Elasticsearch, reducing troubleshooting time by 60%.",
      "Developed in-app engagement systems including push notifications, email marketing automation, and dynamic banner management to improve retention and conversions.",
      "Deployed and maintained services on VPS/cloud infrastructure, ensuring high uptime, security, and operational stability."
    ],
    technologies: ["Laravel", "React", "Next.js", "MySQL", "Redis", "RabbitMQ", "Elasticsearch", "Docker", "Nginx"]
  },
  {
    company: "Face of Art Technologies",
    role: "Junior Software Engineer",
    duration: "June 2022 – March 2024",
    current: false,
    achievements: [
      "Developed and maintained scalable modules for CNG automation, e-commerce, courier, hospital, and POS systems.",
      "Integrated payments, authentication, third-party APIs, reporting, and analytics, contributing to secure, production-ready applications."
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "REST APIs", "Payment Integration"]
  }
];

export const projects: Project[] = [
  {
    title: "SymlexVPN",
    description: "Production VPN platform serving millions of global users with white-label capabilities, admin panels, and reseller portals. Achieved 150% improvement in Core Web Vitals.",
    technologies: ["Laravel", "React", "Next.js", "MySQL", "Redis", "RabbitMQ", "Elasticsearch"],
    featured: true,
    links: {
      live: "#"
    }
  },
  {
    title: "Ticket Master Automation",
    description: "Cross-platform automation system for large-scale ticket workflows with advanced scraping and automation capabilities.",
    technologies: ["TypeScript", "Node.js", "Nest.js", "React.js", "Prisma", "Electron.js", "Playwright", "PostgreSQL"],
    featured: true,
    links: {
      github: "https://github.com/mzshanto"
    }
  },
  {
    title: "Blockchain Document Verification",
    description: "Tamper-proof document verification system using file content and buffer hashing on Ethereum blockchain.",
    technologies: ["Solidity", "Node.js", "Express.js", "React.js", "Ethers.js", "MongoDB"],
    featured: false,
    links: {
      github: "https://github.com/mzshanto"
    }
  }
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "Python", "C++", "SQL", "Solidity"]
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Nest.js", "Laravel", "REST API", "JWT", "OAuth2"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Prisma"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Nginx", "CI/CD", "Git", "Linux", "Cloudflare", "VPS"]
  },
  {
    category: "Specialized",
    items: ["RabbitMQ", "Elasticsearch", "Blockchain", "WebSockets", "Event-Driven Architecture"]
  }
];

export const education: Education = {
  degree: "B.Sc. in Computer Science and Engineering",
  institution: "East West University",
  duration: "2018 – 2022",
  location: "Dhaka, Bangladesh",
  thesis: "Ethereum Blockchain based Decentralized Online Voting Platform"
};