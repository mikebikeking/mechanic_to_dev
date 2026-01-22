import { LucideIcon, ZapIcon, TargetIcon, TrendingUpIcon } from "lucide-react";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import skinstric from "../assets/skinstric.png";
import twoWheel from "../assets/two_wheels_daily.png";

export interface ProjectMetric {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metrics: ProjectMetric[];
  liveUrl: string;
  codeUrl: string;
  image: string;
}

export const featuredProjects: Project[] = [
  {
    id: "spoke-length-calculator",
    title: "Spoke Length Calculator",
    subtitle: "The Wheel Build",
    description:
      "An advanced spoke calculator built with React and TypeScript that performs real-time geometric calculations for bicycle wheel building. The application handles complex hub and rim measurements, supporting multiple lacing patterns (radial, 1x-4x cross) while providing instant validation and error prevention. Delivers professional-grade accuracy matching industry tools used by bike shops worldwide.",
    tech: ["React", "JavaScript", "TailwindCSS"],
    metrics: [
      {
        icon: ZapIcon,
        label: "Calculation Engine",
        value: "Real-time geometric computations with TypeScript validation",
      },
      {
        icon: TargetIcon,
        label: "Design",
        value: "Instant calculations with progressive form validation",
      },
      {
        icon: TrendingUpIcon,
        label: "States",
        value: "Robust handling",
      },
    ],
    liveUrl: "https://spoke-length-calc.vercel.app/",
    codeUrl: "https://github.com/mikebikeking/spoke-length-calc",
    image: work3,
  },

  {
    id: "skinstric-ai",
    title: "Skinstric AI",
    subtitle: "The Performance Machine",
    description:
      "Built a production AI-powered facial analysis platform using React and OpenAI's Vision API to perform real-time skin analysis. The application processes both live camera feeds and uploaded images, predicting demographics and skin characteristics with 98% accuracy. Features dual-input media processing, real-time computer vision analysis, and a mobile-responsive interface optimized for seamless user experience.",
    tech: ["JavaScript", "React", "TailwindCSS"],
    metrics: [
      {
        icon: ZapIcon,
        label: "Framework",
        value: "React",
      },
      {
        icon: TargetIcon,
        label: "Focus",
        value: "AI Platform",
      },
      {
        icon: TrendingUpIcon,
        label: "Performance",
        value: " 98% detection accuracy",
      },
    ],
    liveUrl: "https://skinstric-ai-gold.vercel.app/",
    codeUrl: "https://github.com/mikebikeking/Skinstric-AI",
    image: skinstric,
  },
  {
    id: "two-wheels-daily",
    title: "Two Wheels Daily",
    subtitle: "The Navigator",
    description:
      "A modern cycling news aggregator delivering curated content from 7 sources directly to your inbox. Every morning, pro racing, gear drops, industry news, and weekend ride inspiration—no noise, just the news that matters.",
    tech: ["Next.js", "React", "TailwindCSS", "Vercel"],
    metrics: [
      {
        icon: ZapIcon,
        label: "API Integration",
        value: "Next.js API Routes",
      },
      {
        icon: TargetIcon,
        label: "Feed Parsing",
        value: "Native Node.js RSS parsing",
      },
      {
        icon: TrendingUpIcon,
        label: "Caching",
        value: "In-memory cache with 1-hour TTL",
      },
    ],
    liveUrl: "https://two-wheels-daily.vercel.app/",
    codeUrl: "https://github.com/mikebikeking/two-wheels-daily",
    image: twoWheel,
  },

  {
    id: "business-portfolio-website",
    title: "Business Portfolio Website",
    subtitle: "The Reliable Commuter",
    description:
      "King Wheel Works is a modern, responsive website showcasing custom bicycle wheel building services. The site emphasizes craftsmanship, expertise, and provides a clear path for potential customers to initiate custom wheel build consultations.",
    tech: ["React", "TailwindCSS", "JavaScript"],
    metrics: [
      {
        icon: ZapIcon,
        label: "Foundational Tech",
        value: "Component-Based Architecture (React)",
      },
      {
        icon: TargetIcon,
        label: "Responsiveness",
        value: "100% Multi-Device Optimization",
      },
      {
        icon: TrendingUpIcon,
        label: "Technical Style",
        value: "TailwindCSS and JavaScript",
      },
    ],
    liveUrl: "https://king-wheel-works.vercel.app/",
    codeUrl: "https://github.com/mikebikeking/King-Wheel-Works",
    image: work2,
  },
];
