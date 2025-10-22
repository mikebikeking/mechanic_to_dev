import  { useState } from "react";
import {
  ExternalLinkIcon,
  GithubIcon,
  ZapIcon,
  TargetIcon,
  TrendingUpIcon,
} from "lucide-react";
// @ts-ignore: allow importing image asset without type declaration
import eport from "../assets/eport_pic.png";
// @ts-ignore: allow importing image asset without type declaration
import work1 from "../assets/work1.png";
// @ts-ignore: allow importing image asset without type declaration
import work3 from "../assets/work3.png";

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "Portfolio Website",
      subtitle: "The Pro Build",
      description:
        "The design of this portfolio prioritizes a professional, content-first user experience built on modern web standards. By utilizing React's component architecture and a strategic Single-Page flow, the site delivers a cohesive and high-performance experience.",
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
          value: "Modern CSS3 and ES6+",
        },
      ],
      liveUrl: "https://eportfolio-king.vercel.app/",
      codeUrl: "https://github.com/mikebikeking/EportfolioKing",
      image: eport,
    },
    {
      title: "NFT E-Commerce",
      subtitle: "The Reliable Commuter",
      description:
        "This React application uses React Router for dynamic navigation and Axios for data fetching, with Firebase handling its backend needs. It features a modern, user-friendly interface with animated carousels and smooth transitions powered by keen-slider and AOS. The project is built with standard npm scripts and integrates third-party assets to deliver a polished and engaging experience.",
      tech: ["React", "AXIOS", "TailwindCSS"],
      metrics: [
        {
          icon: ZapIcon,
          label: "Speed",
          value: "Dynamic routing",
        },
        {
          icon: TargetIcon,
          label: "Features",
          value: "Full cart system",
        },
        {
          icon: TrendingUpIcon,
          label: "UX",
          value: "Seamless updates",
        },
      ],
      liveUrl: "https://michael-internship.vercel.app/",
      codeUrl: "https://github.com/mikebikeking/michael-internship",
      image: work1,
    },
    {
      title: "Little Lemon",
      subtitle: "The Lightweight Climber",
      description:
        "This project is engineered for Architectural Quality and Data-Driven UX, moving beyond traditional styling to embed performance at its core. Built on React 18 and an Enterprise-Ready component structure, the design is modular, scalable, and built for team collaboration.",
      tech: ["React", "JavaScript", "Json", "npm"],
      metrics: [
        {
          icon: ZapIcon,
          label: "Routing Design",
          value: "Seamless Client-Side Routing (React Router)",
        },
        {
          icon: TargetIcon,
          label: "Design",
          value: "Fully responsive",
        },
        {
          icon: TrendingUpIcon,
          label: "States",
          value: "Robust handling",
        },
      ],
      liveUrl: "https://meta-front-end-developer-six.vercel.app/",
      codeUrl: "https://github.com/mikebikeking/meta-front-end-developer",
      image: work3,
    },
  ];

  const otherProjects = [
    {
      title: "Portfolio Website",
      subtitle: "The Daily Driver",
      description:
        "A minimal, light and dark themed portfolio website built with HTML and CSS. Features smooth scrolling, responsive design, and subtle animations.",
      tech: ["HTML", "CSS", "Modal", "JavaScript"],
      metrics: [
        {
          icon: ZapIcon,
          label: "Design",
          value: "Dual themes",
        },
        {
          icon: TargetIcon,
          label: "UX",
          value: "Smooth scroll",
        },
        {
          icon: TrendingUpIcon,
          label: "Style",
          value: "Subtle animations",
        },
      ],
      liveUrl: "https://eportfolio-liart.vercel.app/",
      codeUrl: "https://github.com/mikebikeking/Eportfolio",
      image: eport,
    },
    {
      title: "Skinstric AI",
      subtitle: "The Performance Machine",
      description:
        "This project involved a full redesign of Skinstric.ai's website, an AI-powered skincare platform, using Next.js and TailwindCSS to create a modern, high-performance online presence.",
      tech: ["JavaScript", "React", "TailwindCSS", "AOS"],
      metrics: [
        {
          icon: ZapIcon,
          label: "Framework",
          value: "Next.js",
        },
        {
          icon: TargetIcon,
          label: "Focus",
          value: "AI Platform",
        },
        {
          icon: TrendingUpIcon,
          label: "Performance",
          value: "High-speed",
        },
      ],
      liveUrl: "https://skinstric-ai-gold.vercel.app/",
      codeUrl: "https://github.com/mikebikeking/Skinstric-AI",
      image: work1,
    },
    {
      title: "React Template Project",
      subtitle: "The Component Library",
      description:
        "This landing page showcases beautiful and customizable React templates. The design is visually appealing and responsive, aiming to attract developers seeking efficient and professional website solutions.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      metrics: [
        {
          icon: ZapIcon,
          label: "Type",
          value: "Templates",
        },
        {
          icon: TargetIcon,
          label: "Design",
          value: "Customizable",
        },
        {
          icon: TrendingUpIcon,
          label: "Layout",
          value: "Responsive",
        },
      ],
      liveUrl: "https://mikebikeking.github.io/Beautiful-React-Templates/",
      codeUrl: "https://github.com/mikebikeking/Beautiful-React-Templates",
      image: work3,
    },
    {
      title: "Recipe Finder App",
      subtitle: "The Smart Kitchen",
      description:
        "A smart recipe discovery app that finds perfect recipes based on what you have in your kitchen, how much time you've got, and your dietary preferences. No more wondering 'what should I cook tonight?'",
      tech: ["HTML", "CSS", "JavaScript"],
      metrics: [
        {
          icon: ZapIcon,
          label: "Feature",
          value: "Smart search",
        },
        {
          icon: TargetIcon,
          label: "Filter",
          value: "Dietary prefs",
        },
        {
          icon: TrendingUpIcon,
          label: "UX",
          value: "Intuitive",
        },
      ],
      liveUrl: "https://recipe-finder-five-sigma.vercel.app/",
      codeUrl: "https://github.com/mikebikeking/Recipe-Finder",
      image: eport,
    },
    {
      title: "Cycling Route Planner",
      subtitle: "The Navigator",
      description:
        "A smart cycling route planner and weather intelligence platform designed specifically for Boston cyclists. The app provides AI-powered recommendations, real-time weather analysis, and interactive route mapping to help cyclists make informed decisions about when and where to ride in the Boston metropolitan area.",
      tech: ["React", "TypeScript", "TailwindCSS", "Vite"],
      metrics: [
        {
          icon: ZapIcon,
          label: "AI",
          value: "Smart routing",
        },
        {
          icon: TargetIcon,
          label: "Data",
          value: "Real-time",
        },
        {
          icon: TrendingUpIcon,
          label: "Location",
          value: "Boston-focused",
        },
      ],
      liveUrl: "https://cycling-route-planner.vercel.app/",
      codeUrl: "https://github.com/mikebikeking/cycling-route-planner",
      image: work1,
    },
    {
      title: "Lucky Shrub",
      subtitle: "The Green Machine",
      description:
        "A modern, responsive website for Lucky Shrub - a fictional garden design and landscaping business. This project demonstrates clean HTML structure, modern CSS styling techniques, and responsive design principles for a professional business homepage.",
      tech: ["HTML", "CSS"],
      metrics: [
        {
          icon: ZapIcon,
          label: "Structure",
          value: "Clean HTML",
        },
        {
          icon: TargetIcon,
          label: "Styling",
          value: "Modern CSS",
        },
        {
          icon: TrendingUpIcon,
          label: "Design",
          value: "Responsive",
        },
      ],
      liveUrl: "https://lucky-shrub-liard.vercel.app/",
      codeUrl: "https://github.com/mikebikeking/Lucky-Shrub",
      image: work3,
    },
  ];

  const displayedOtherProjects = showAllProjects
    ? otherProjects
    : otherProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gunmetal/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Projects */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-gold mb-4">
            THE BUILD JOURNAL
          </h2>
          <p className="text-xl text-textSecondary font-heading">
            FEATURED BUILDS
          </p>
          <div className="w-24 h-1 bg-blueprint mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gunmetal border-2 border-blueprint/30 hover:border-gold overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/20"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blueprint/20 to-gold/20">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-3 py-1 bg-gold text-gunmetal text-xs font-heading">
                  {project.subtitle}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading text-textPrimary mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blueprint/20 text-blueprint text-xs font-mono border border-blueprint/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-textSecondary text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-2 mb-6">
                  {project.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="flex items-center text-xs"
                    >
                      <metric.icon className="text-gold mr-2" size={14} />
                      <span className="text-textSecondary mr-2">
                        {metric.label}:
                      </span>
                      <span className="text-textPrimary font-mono">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gold text-gunmetal text-center font-heading text-sm hover:bg-torch transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLinkIcon size={16} />
                    VIEW LIVE
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-blueprint text-blueprint text-center font-heading text-sm hover:bg-blueprint hover:text-gunmetal transition-colors flex items-center justify-center gap-2"
                  >
                    <GithubIcon size={16} />
                    CODE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl font-heading text-blueprint mb-2">
            OTHER NOTABLE BUILDS
          </h3>
          <p className="text-lg text-textSecondary font-heading">
            ADDITIONAL PROJECTS & EXPERIMENTS
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedOtherProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gunmetal border-2 border-blueprint/30 hover:border-gold overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/20"
            >
              
              <div className="p-6">
                <h3 className="text-2xl font-heading text-textPrimary mb-2">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blueprint/20 text-blueprint text-xs font-mono border border-blueprint/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-textSecondary text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-2 mb-6">
                  {project.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="flex items-center text-xs"
                    >
                      <metric.icon className="text-gold mr-2" size={14} />
                      <span className="text-textSecondary mr-2">
                        {metric.label}:
                      </span>
                      <span className="text-textPrimary font-mono">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gold text-gunmetal text-center font-heading text-sm hover:bg-torch transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLinkIcon size={16} />
                    VIEW LIVE
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-blueprint text-blueprint text-center font-heading text-sm hover:bg-blueprint hover:text-gunmetal transition-colors flex items-center justify-center gap-2"
                  >
                    <GithubIcon size={16} />
                    CODE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {otherProjects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3 border-2 border-gold text-gold font-heading text-sm hover:bg-gold hover:text-gunmetal transition-all duration-300"
            >
              {showAllProjects ? "SHOW LESS" : "SHOW MORE BUILDS"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}