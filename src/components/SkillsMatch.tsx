import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  WrenchIcon,
  CodeIcon,
  GaugeIcon,
  ZapIcon,
  ClipboardCheckIcon,
  TestTubeIcon,
  FileTextIcon,
  BookOpenIcon,
  ArrowRightIcon,
  ToggleLeftIcon,
  ToggleRightIcon,
} from "lucide-react";

type ViewMode = "workshop" | "codebase" | "both";

interface ParallelItem {
  workshop: {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    details: string[];
    philosophy: string;
  };
  codebase: {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    details: string[];
    philosophy: string;
  };
  insight: string;
  color: "gold" | "blueprint" | "torch" | "purple";
}

export function SkillsMatch() {
  const [viewMode, setViewMode] = useState<ViewMode>("both");
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const parallels: ParallelItem[] = [
    {
      workshop: {
        icon: WrenchIcon,
        title: "Frame Design",
        subtitle: "Structural Architecture",
        details: [
          "Bottom bracket (foundation)",
          "Chainstays (load distribution)",
          "Seat stays (flex characteristics)",
          "Dropouts (standardized interfaces)",
          "Head tube (steering geometry)",
        ],
        philosophy:
          "Every tube serves a purpose. Every junction point matters. Change one element, and the entire ride quality shifts.",
      },
      codebase: {
        icon: CodeIcon,
        title: "Component Architecture",
        subtitle: "Application Structure",
        details: [
          "App.tsx (application foundation)",
          "Context (state distribution)",
          "Hooks (reusable logic)",
          "Props interface (component contracts)",
          "Router (navigation structure)",
        ],
        philosophy:
          "Every component serves a purpose. Every data flow matters. Change one element, and the entire UX shifts.",
      },
      insight:
        "Just as I learned that a 73° head tube angle vs 74° fundamentally changes bike handling, I understand that component composition fundamentally changes application maintainability. Both require systems thinking.",
      color: "gold",
    },
    {
      workshop: {
        icon: GaugeIcon,
        title: "Performance Tuning",
        subtitle: "Optimization Protocol",
        details: [
          "Fork pressure: ±2 PSI changes ride feel",
          "Rebound damping: 2 clicks = 10% speed",
          "Compression: Stack height affects geometry",
          "Tire pressure: 2 PSI = resistance shift",
          "Chain tension: Eliminates dropped chains",
        ],
        philosophy:
          'Goal: Eliminate milliseconds of wasted motion, reduce fatigue, maximize efficiency. Measure, iterate, never accept "good enough".',
      },
      codebase: {
        icon: ZapIcon,
        title: "Web Performance",
        subtitle: "Speed Optimization",
        details: [
          "Code splitting: Reduce bundle by 40%",
          "Lazy loading: Defer non-critical resources",
          "Image optimization: WebP + proper sizing",
          "Lighthouse score: Target 90+ all metrics",
          "Cache strategy: Eliminate redundant requests",
        ],
        philosophy:
          'Goal: Eliminate milliseconds of load time, reduce bounce rates, maximize UX. Measure, iterate, never accept "good enough".',
      },
      insight:
        "I spent 20 years obsessing over 2 PSI changes that riders could feel. Now I obsess over 200ms load time reductions that users notice. Both require measurement, iteration, and refusing to accept mediocrity.",
      color: "blueprint",
    },
    {
      workshop: {
        icon: ClipboardCheckIcon,
        title: "Quality Control",
        subtitle: "Pre-Delivery Protocol",
        details: [
          "Visual inspection (frame alignment check)",
          "Functional testing (every gear, every brake)",
          "Load testing (torque specs verified)",
          "Real-world validation (test ride required)",
          "Documentation (service checklist signed)",
        ],
        philosophy:
          "A bike leaves my shop only when I would ride it down a mountain myself. My name is on every build.",
      },
      codebase: {
        icon: TestTubeIcon,
        title: "Testing Strategy",
        subtitle: "Quality Assurance",
        details: [
          "Unit tests (component behavior verified)",
          "Integration tests (feature workflows)",
          "E2E tests (critical user paths)",
          "Performance testing (Lighthouse CI)",
          "Documentation (README + inline comments)",
        ],
        philosophy:
          "Code ships to production only when I would put my name on it publicly. Every commit represents my reputation.",
      },
      insight:
        "The QC mindset doesn't change. Whether it's a $10,000 mountain bike or a production web app, the question is the same: \"Would I stake my reputation on this?\" The answer must always be yes.",
      color: "torch",
    },
    {
      workshop: {
        icon: FileTextIcon,
        title: "Service Manuals",
        subtitle: "Documentation Standards",
        details: [
          "Torque specs for every bolt documented",
          "Exploded diagrams with part numbers",
          "Troubleshooting decision trees",
          "Common failure modes catalogued",
          "Next mechanic can continue seamlessly",
        ],
        philosophy:
          '"Future me" needs to understand what "past me" was thinking. Undocumented work is unfinished work.',
      },
      codebase: {
        icon: BookOpenIcon,
        title: "Code Documentation",
        subtitle: "Knowledge Transfer",
        details: [
          "Type definitions for every function",
          "Component usage examples",
          "Architecture decision records (ADR)",
          "Common edge cases documented",
          'Next developer understands the "why"',
        ],
        philosophy:
          '"Future me" needs to understand what "past me" was thinking. Undocumented code is technical debt.',
      },
      insight:
        "A mechanic who doesn't document bearing preload specs leaves the next person guessing. A developer who doesn't document component props does the same. I learned this lesson on the shop floor—it makes me a better developer.",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      gold: {
        bg: "bg-yellow-100 dark:bg-yellow-900/20",
        border: "border-yellow-300 dark:border-yellow-600/30",
        text: "text-yellow-700 dark:text-yellow-400",
        hover: "hover:border-yellow-600 dark:hover:border-yellow-400",
      },
      blueprint: {
        bg: "bg-blue-100 dark:bg-blue-900/20",
        border: "border-blue-300 dark:border-blue-600/30",
        text: "text-blue-700 dark:text-blue-400",
        hover: "hover:border-blue-600 dark:hover:border-blue-400",
      },
      torch: {
        bg: "bg-orange-100 dark:bg-orange-900/20",
        border: "border-orange-300 dark:border-orange-600/30",
        text: "text-orange-700 dark:text-orange-400",
        hover: "hover:border-orange-600 dark:hover:border-orange-400",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900/20",
        border: "border-purple-300 dark:border-purple-600/30",
        text: "text-purple-700 dark:text-purple-400",
        hover: "hover:border-purple-600 dark:hover:border-purple-400",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section
      id="skills-match"
      aria-label="Skills Translation - Mechanical to Development"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gunmetal/50 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blueprint/5 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-blue-700 dark:text-gold mb-4">
            THE TRANSLATION
          </h2>
          <p className="text-2xl text-gray-600 dark:text-textSecondary font-heading italic mb-6">
            From Shop Floor to Codebase
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 dark:from-gold dark:via-torch dark:to-blueprint mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-blue-50 dark:bg-gunmetal border-2 border-blue-200 dark:border-blueprint/30 p-1">
            {(["workshop", "both", "codebase"] as ViewMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-6 py-3 font-heading text-sm transition-all flex items-center gap-2 ${
                  viewMode === mode
                    ? "bg-blue-600 dark:bg-gold text-white dark:text-gunmetal"
                    : "text-gray-700 dark:text-textPrimary hover:text-blue-600 dark:hover:text-gold"
                }`}
              >
                {mode === "workshop" && <WrenchIcon size={18} />}
                {mode === "both" && <ArrowRightIcon size={18} />}
                {mode === "codebase" && <CodeIcon size={18} />}
                {mode === "workshop" && "WORKSHOP"}
                {mode === "both" && "PARALLEL VIEW"}
                {mode === "codebase" && "CODEBASE"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Parallels Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {parallels.map((parallel, index) => {
            const colors = getColorClasses(parallel.color);
            const WorkshopIcon = parallel.workshop.icon;
            const CodebaseIcon = parallel.codebase.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Parallel Cards */}
                <div
                  className={`grid gap-6 ${
                    viewMode === "both"
                      ? "md:grid-cols-2"
                      : "md:grid-cols-1 max-w-3xl mx-auto"
                  }`}
                >
                  {/* Workshop Card */}
                  <AnimatePresence>
                    {(viewMode === "workshop" || viewMode === "both") && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`${colors.bg} border-2 ${colors.border} ${colors.hover} p-6 transition-all group`}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`p-3 ${colors.bg} border ${colors.border}`}
                          >
                            <WorkshopIcon className={colors.text} size={28} />
                          </div>
                          <div className="flex-1">
                            <h3
                              className={`text-2xl font-heading ${colors.text} mb-1`}
                            >
                              {parallel.workshop.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-textSecondary font-mono">
                              {parallel.workshop.subtitle}
                            </p>
                          </div>
                          <WrenchIcon
                            className={`${colors.text} opacity-20`}
                            size={24}
                          />
                        </div>

                        <div className="space-y-2 mb-4">
                          {parallel.workshop.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span
                                className={`w-1.5 h-1.5 ${colors.bg} border ${colors.border} mt-2 rounded-full flex-shrink-0`}
                              />
                              <span className="text-gray-700 dark:text-textSecondary">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
                          <p className="text-sm italic text-gray-600 dark:text-textSecondary leading-relaxed">
                            {parallel.workshop.philosophy}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Arrow Connector - Only in "both" view */}
                  {viewMode === "both" && (
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        animate={{
                          x: [-10, 10, -10],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`${colors.bg} ${colors.border} border-2 p-3 shadow-lg`}
                      >
                        <ArrowRightIcon className={colors.text} size={24} />
                      </motion.div>
                    </div>
                  )}

                  {/* Codebase Card */}
                  <AnimatePresence>
                    {(viewMode === "codebase" || viewMode === "both") && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className={`${colors.bg} border-2 ${colors.border} ${colors.hover} p-6 transition-all group`}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`p-3 ${colors.bg} border ${colors.border}`}
                          >
                            <CodebaseIcon className={colors.text} size={28} />
                          </div>
                          <div className="flex-1">
                            <h3
                              className={`text-2xl font-heading ${colors.text} mb-1`}
                            >
                              {parallel.codebase.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-textSecondary font-mono">
                              {parallel.codebase.subtitle}
                            </p>
                          </div>
                          <CodeIcon
                            className={`${colors.text} opacity-20`}
                            size={24}
                          />
                        </div>

                        <div className="space-y-2 mb-4">
                          {parallel.codebase.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span
                                className={`w-1.5 h-1.5 ${colors.bg} border ${colors.border} mt-2 rounded-full flex-shrink-0`}
                              />
                              <span className="text-gray-700 dark:text-textSecondary">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
                          <p className="text-sm italic text-gray-600 dark:text-textSecondary leading-relaxed">
                            {parallel.codebase.philosophy}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Insight Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  className={`mt-6 p-6 bg-gradient-to-r ${colors.bg} border-l-4 ${colors.border}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className={`w-2 h-2 ${colors.bg} border ${colors.border} rounded-full`}
                      />
                    </div>
                    <p className="text-gray-700 dark:text-textSecondary leading-relaxed italic">
                      <span className="font-semibold not-italic text-gray-900 dark:text-textPrimary">
                        The Parallel:{" "}
                      </span>
                      {parallel.insight}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gunmetal dark:to-blueprint/10 border-2 border-blue-200 dark:border-blueprint/30"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading text-blue-700 dark:text-gold mb-2">
              20 YEARS OF MECHANICAL PRECISION
            </h3>
            <p className="text-lg text-gray-600 dark:text-textSecondary font-mono">
              Applied to Modern Web Development
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-heading text-blue-600 dark:text-gold mb-2">
                10,000+
              </div>
              <div className="text-sm text-gray-600 dark:text-textSecondary">
                Bikes serviced → Components shipped
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-heading text-blue-600 dark:text-gold mb-2">
                73° → 0.01s
              </div>
              <div className="text-sm text-gray-600 dark:text-textSecondary">
                Head angle precision → Load time precision
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-heading text-blue-600 dark:text-gold mb-2">
                Zero
              </div>
              <div className="text-sm text-gray-600 dark:text-textSecondary">
                Failures in 20 years → Production bugs as goal
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-heading text-blue-600 dark:text-gold mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-textSecondary">
                "Future mechanic ready" → "Future dev ready"
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Money Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-textPrimary leading-relaxed italic">
            "Most developers learn to code and then try to understand users. I
            spent 20 years understanding users—
            <span className="text-blue-600 dark:text-gold font-semibold not-italic">
              cyclists pushing equipment to its limits
            </span>
            —and then learned to code.{" "}
            <span className="text-torch dark:text-torch font-semibold not-italic">
              It's an unfair advantage.
            </span>
            "
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-500 dark:via-gold to-transparent" />
            <span className="text-sm text-gray-600 dark:text-textSecondary font-mono">
              This isn't a career change. It's a translation.
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-500 dark:via-gold to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
