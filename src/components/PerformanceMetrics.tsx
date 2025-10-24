import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Activity, Eye, CheckCircle, Search } from "lucide-react";

interface Metric {
  label: string;
  score: number;
  icon: React.ElementType;
  description: string;
}

export function PerformanceMetrics() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const metrics: Metric[] = [
    {
      label: "Performance",
      score: 94,
      icon: Activity,
      description: "Load speed & optimization",
    },
    {
      label: "Accessibility",
      score: 96,
      icon: Eye,
      description: "Inclusive design",
    },
    {
      label: "Best Practices",
      score: 100,
      icon: CheckCircle,
      description: "Modern web standards",
    },
    {
      label: "SEO",
      score: 100,
      icon: Search,
      description: "Search optimization",
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "from-green-400 to-green-600";
    if (score >= 50) return "from-orange-400 to-orange-600";
    return "from-red-400 to-red-600";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-12 p-6 md:p-8 bg-gradient-to-br from-blue-50/90 to-purple-50/90 dark:from-gunmetal/70 dark:to-blueprint/20 border-2 border-blue-200 dark:border-blueprint/40 relative overflow-hidden"
    >
      {/* Animated background accent */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-heading text-blue-700 dark:text-gold mb-2 flex items-center justify-center gap-3">
            <span className="text-3xl">🏆</span>
            PERFORMANCE METRICS
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-textSecondary font-mono">
            Lighthouse Score — This Portfolio Site
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center group"
            >
              {/* Circular Gauge */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 mb-3">
                {/* Outer glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl opacity-0"
                  style={{
                    background:
                      metric.score >= 90
                        ? "radial-gradient(circle, rgba(74, 222, 128, 0.6), transparent)"
                        : metric.score >= 50
                        ? "radial-gradient(circle, rgba(251, 146, 60, 0.6), transparent)"
                        : "radial-gradient(circle, rgba(248, 113, 113, 0.6), transparent)",
                  }}
                  animate={{
                    opacity: inView ? [0, 0.7, 0.5, 0.7, 0.5] : 0,
                    scale: [1, 1.1, 1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.15 + 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Rotating shimmer ring */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.2,
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0deg, ${
                        metric.score >= 90
                          ? "rgba(74, 222, 128, 0.3)"
                          : metric.score >= 50
                          ? "rgba(251, 146, 60, 0.3)"
                          : "rgba(248, 113, 113, 0.3)"
                      } 30deg, transparent 60deg)`,
                    }}
                  />
                </motion.div>

                {/* Background circle */}
                <svg
                  className="transform -rotate-90 w-full h-full relative z-10"
                  viewBox="0 0 100 100"
                >
                  {/* Track with inner shadow */}
                  <defs>
                    <filter id={`inner-shadow-${index}`}>
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                      <feOffset dx="0" dy="1" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.5" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id={`glow-${index}`}>
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Track */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-gray-200 dark:text-gray-700"
                    filter={`url(#inner-shadow-${index})`}
                  />

                  {/* Progress with glow */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    strokeWidth="8"
                    strokeLinecap="round"
                    stroke={`url(#gradient-${index})`}
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    filter={`url(#glow-${index})`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                    animate={
                      inView
                        ? {
                            strokeDashoffset:
                              2 * Math.PI * 45 * (1 - metric.score / 100),
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                  />

                  {/* Animated dots along the circle */}
                  {inView && [0, 120, 240].map((angle, dotIndex) => (
                    <motion.circle
                      key={dotIndex}
                      r="2"
                      fill={metric.score >= 90 ? "#4ade80" : "#3b82f6"}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        cx: [
                          50 + 45 * Math.cos(((angle + 0) * Math.PI) / 180),
                          50 +
                            45 *
                              Math.cos(
                                ((angle + (metric.score / 100) * 360) * Math.PI) / 180
                              ),
                        ],
                        cy: [
                          50 + 45 * Math.sin(((angle + 0) * Math.PI) / 180),
                          50 +
                            45 *
                              Math.sin(
                                ((angle + (metric.score / 100) * 360) * Math.PI) / 180
                              ),
                        ],
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.15 + dotIndex * 0.3 + 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  <defs>
                    <linearGradient
                      id={`gradient-${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      {metric.score >= 90 ? (
                        <>
                          <stop offset="0%" stopColor="#4ade80" />
                          <stop offset="50%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </>
                      ) : metric.score >= 50 ? (
                        <>
                          <stop offset="0%" stopColor="#fb923c" />
                          <stop offset="50%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#ea580c" />
                        </>
                      ) : (
                        <>
                          <stop offset="0%" stopColor="#f87171" />
                          <stop offset="50%" stopColor="#ef4444" />
                          <stop offset="100%" stopColor="#dc2626" />
                        </>
                      )}
                    </linearGradient>
                  </defs>
                </svg>

                {/* Score text in center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + 0.8,
                      ease: "backOut",
                    }}
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-textPrimary"
                  >
                    {metric.score}
                  </motion.span>
                </div>

                {/* Icon badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 1,
                    ease: "backOut",
                  }}
                  className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 dark:bg-gold rounded-full flex items-center justify-center border-2 border-white dark:border-gunmetal group-hover:scale-110 transition-transform"
                >
                  <metric.icon className="w-4 h-4 text-white dark:text-gunmetal" />
                </motion.div>
              </div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                className="text-center"
              >
                <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-textPrimary mb-1">
                  {metric.label}
                </p>
                <p className="text-xs text-gray-600 dark:text-textSecondary">
                  {metric.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 text-center"
        >
          <p className="text-xs md:text-sm text-gray-500 dark:text-textSecondary/70 font-mono">
            Measured by{" "}
            <a
              href="https://developers.google.com/web/tools/lighthouse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blueprint hover:text-blue-700 dark:hover:text-gold underline transition-colors"
            >
              Google Lighthouse
            </a>{" "}
            — Scores updated October 2025
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

