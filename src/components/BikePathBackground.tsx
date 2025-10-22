import { useScroll, useTransform, motion } from 'framer-motion';

export function BikePathBackground() {
  const { scrollYProgress } = useScroll();

  // Different speeds for parallax layers
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);   // Slowest
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);  // Medium

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Layer 1 - Slowest (Background Grid) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0"
      >
        <svg
          className="absolute inset-0 w-full h-[200vh]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Subtle background grid pattern */}
          <defs>
            <pattern
              id="grid-slow"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-blue-300/50 dark:text-gold/15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-slow)" />
        </svg>
      </motion.div>

      {/* Layer 2 - Medium Speed (Bike Lane Lines) */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0"
      >
        <svg
          className="absolute inset-0 w-full h-[200vh]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Center dashed line - gold/blue */}
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="60 40"
            className="text-blue-500/50 dark:text-gold/50"
          />
          
          {/* Left lane line */}
          <line
            x1="30%"
            y1="0"
            x2="30%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="30 20"
            className="text-gray-400/40 dark:text-white/30"
          />
          
          {/* Right lane line */}
          <line
            x1="70%"
            y1="0"
            x2="70%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="30 20"
            className="text-gray-400/40 dark:text-white/30"
          />
        </svg>
      </motion.div>


      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40 dark:from-black/40 dark:via-transparent dark:to-black/60 pointer-events-none transition-colors duration-300" />
    </div>
  );
}