import { LucideIcon, ZapIcon, TargetIcon, TrendingUpIcon } from 'lucide-react';
import eport from '../assets/eport_pic.png';
import work1 from '../assets/work1.png';
import work3 from '../assets/work3.png';

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
    id: 'portfolio-website',
    title: 'Portfolio Website',
    subtitle: 'The Pro Build',
    description: 'The design of this portfolio prioritizes a professional, content-first user experience built on modern web standards. By utilizing React\'s component architecture and a strategic Single-Page flow, the site delivers a cohesive and high-performance experience.',
    tech: ['React', 'TailwindCSS', 'JavaScript'],
    metrics: [
      {
        icon: ZapIcon,
        label: 'Foundational Tech',
        value: 'Component-Based Architecture (React)',
      },
      {
        icon: TargetIcon,
        label: 'Responsiveness',
        value: '100% Multi-Device Optimization',
      },
      {
        icon: TrendingUpIcon,
        label: 'Technical Style',
        value: 'Modern CSS3 and ES6+',
      },
    ],
    liveUrl: 'https://eportfolio-king.vercel.app/',
    codeUrl: 'https://github.com/mikebikeking/EportfolioKing',
    image: eport,
  },
  {
    id: 'nft-ecommerce',
    title: 'NFT E-Commerce',
    subtitle: 'The Reliable Commuter',
    description: 'This React application uses React Router for dynamic navigation and Axios for data fetching, with Firebase handling its backend needs. It features a modern, user-friendly interface with animated carousels and smooth transitions powered by keen-slider and AOS.',
    tech: ['React', 'AXIOS', 'TailwindCSS'],
    metrics: [
      {
        icon: ZapIcon,
        label: 'Speed',
        value: 'Dynamic routing',
      },
      {
        icon: TargetIcon,
        label: 'Features',
        value: 'Full cart system',
      },
      {
        icon: TrendingUpIcon,
        label: 'UX',
        value: 'Seamless updates',
      },
    ],
    liveUrl: 'https://michael-internship.vercel.app/',
    codeUrl: 'https://github.com/mikebikeking/michael-internship',
    image: work1,
  },
  {
    id: 'spoke-length-calculator',
    title: 'Spoke Length Calculator',
    subtitle: 'The Lightweight Climber',
    description: 'An advanced spoke calculator built with React and TypeScript that performs real-time geometric calculations for bicycle wheel building. The application handles complex hub and rim measurements, supporting multiple lacing patterns (radial, 1x-4x cross) while providing instant validation and error prevention. Delivers professional-grade accuracy matching industry tools used by bike shops worldwide.',
    tech: ['React', 'JavaScript', 'Json', 'npm'],
    metrics: [
      {
        icon: ZapIcon,
        label: 'Calculation Engine',
        value: 'Real-time geometric computations with TypeScript validation',
      },
      {
        icon: TargetIcon,
        label: 'Design',
        value: 'Instant calculations with progressive form validation',
      },
      {
        icon: TrendingUpIcon,
        label: 'States',
        value: 'Robust handling',
      },
    ],
    liveUrl: 'https://spoke-length-calc-git-master-mikebikekings-projects.vercel.app/',
    codeUrl: 'https://github.com/mikebikeking/spoke-length-calc',
    image: work3,
  },
];

export const otherProjects: Project[] = [
  {
    id: 'portfolio-html',
    title: 'Portfolio Website',
    subtitle: 'The Daily Driver',
    description: 'A minimal, light and dark themed portfolio website built with HTML and CSS. Features smooth scrolling, responsive design, and subtle animations.',
    tech: ['HTML', 'CSS', 'Modal', 'JavaScript'],
    metrics: [
      {
        icon: ZapIcon,
        label: 'Design',
        value: 'Dual themes',
      },
      {
        icon: TargetIcon,
        label: 'UX',
        value: 'Smooth scroll',
      },
      {
        icon: TrendingUpIcon,
        label: 'Style',
        value: 'Subtle animations',
      },
    ],
    liveUrl: 'https://eportfolio-liart.vercel.app/',
    codeUrl: 'https://github.com/mikebikeking/Eportfolio',
    image: eport,
  },
  {
    id: 'skinstric-ai',
    title: 'Skinstric AI',
    subtitle: 'The Performance Machine',
    description: 'This project involved a full redesign of Skinstric.ai\'s website, an AI-powered skincare platform, using Next.js and TailwindCSS to create a modern, high-performance online presence.',
    tech: ['JavaScript', 'React', 'TailwindCSS', 'AOS'],
    metrics: [
      {
        icon: ZapIcon,
        label: 'Framework',
        value: 'Next.js',
      },
      {
        icon: TargetIcon,
        label: 'Focus',
        value: 'AI Platform',
      },
      {
        icon: TrendingUpIcon,
        label: 'Performance',
        value: 'High-speed',
      },
    ],
    liveUrl: 'https://skinstric-ai-gold.vercel.app/',
    codeUrl: 'https://github.com/mikebikeking/Skinstric-AI',
    image: work1,
  },
  {
    id: 'react-templates',
    title: 'React Template Project',
    subtitle: 'The Component Library',
    description: 'This landing page showcases beautiful and customizable React templates. The design is visually appealing and responsive, aiming to attract developers seeking efficient and professional website solutions.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    metrics: [
      {
        icon: ZapIcon,
        label: 'Type',
        value: 'Templates',
      },
      {
        icon: TargetIcon,
        label: 'Design',
        value: 'Customizable',
      },
      {
        icon: TrendingUpIcon,
        label: 'Layout',
        value: 'Responsive',
      },
    ],
    liveUrl: 'https://mikebikeking.github.io/Beautiful-React-Templates/',
    codeUrl: 'https://github.com/mikebikeking/Beautiful-React-Templates',
    image: work3,
  },
  {
    id: 'recipe-finder',
    title: 'Recipe Finder App',
    subtitle: 'The Smart Kitchen',
    description: 'A smart recipe discovery app that finds perfect recipes based on what you have in your kitchen, how much time you\'ve got, and your dietary preferences. No more wondering \'what should I cook tonight?\'',
    tech: ['HTML', 'CSS', 'JavaScript'],
    metrics: [
      {
        icon: ZapIcon,
        label: 'Feature',
        value: 'Smart search',
      },
      {
        icon: TargetIcon,
        label: 'Filter',
        value: 'Dietary prefs',
      },
      {
        icon: TrendingUpIcon,
        label: 'UX',
        value: 'Intuitive',
      },
    ],
    liveUrl: 'https://recipe-finder-five-sigma.vercel.app/',
    codeUrl: 'https://github.com/mikebikeking/Recipe-Finder',
    image: eport,
  },
  {
    id: 'cycling-route-planner',
    title: 'Cycling Route Planner',
    subtitle: 'The Navigator',
    description: 'A smart cycling route planner and weather intelligence platform designed specifically for Boston cyclists. The app provides AI-powered recommendations, real-time weather analysis, and interactive route mapping to help cyclists make informed decisions about when and where to ride in the Boston metropolitan area.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    metrics: [
      {
        icon: ZapIcon,
        label: 'AI',
        value: 'Smart routing',
      },
      {
        icon: TargetIcon,
        label: 'Data',
        value: 'Real-time',
      },
      {
        icon: TrendingUpIcon,
        label: 'Location',
        value: 'Boston-focused',
      },
    ],
    liveUrl: 'https://cycling-route-planner.vercel.app/',
    codeUrl: 'https://github.com/mikebikeking/cycling-route-planner',
    image: work1,
  },
  {
    id: 'lucky-shrub',
    title: 'Lucky Shrub',
    subtitle: 'The Green Machine',
    description: 'A modern, responsive website for Lucky Shrub - a fictional garden design and landscaping business. This project demonstrates clean HTML structure, modern CSS styling techniques, and responsive design principles for a professional business homepage.',
    tech: ['HTML', 'CSS'],
    metrics: [
      {
        icon: ZapIcon,
        label: 'Structure',
        value: 'Clean HTML',
      },
      {
        icon: TargetIcon,
        label: 'Styling',
        value: 'Modern CSS',
      },
      {
        icon: TrendingUpIcon,
        label: 'Design',
        value: 'Responsive',
      },
    ],
    liveUrl: 'https://lucky-shrub-liard.vercel.app/',
    codeUrl: 'https://github.com/mikebikeking/Lucky-Shrub',
    image: work3,
  },
];
