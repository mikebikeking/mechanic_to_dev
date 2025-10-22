// components/BikePathBackground.tsx
import { useScroll, useTransform, motion } from 'framer-motion';

export function BikePathBackground() {
  const { scrollYProgress } = useScroll();

  // Different speeds for parallax layers
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);   // Slowest
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);  // Medium
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);  // Fastest

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
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
                stroke="rgba(255, 214, 10, 0.05)"
                strokeWidth="1"
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
          {/* Center dashed line - gold */}
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="rgba(255, 214, 10, 0.3)"
            strokeWidth="4"
            strokeDasharray="60 40"
          />
          
          {/* Left lane line - white */}
          <line
            x1="30%"
            y1="0"
            x2="30%"
            y2="100%"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="2"
            strokeDasharray="30 20"
          />
          
          {/* Right lane line - white */}
          <line
            x1="70%"
            y1="0"
            x2="70%"
            y2="100%"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="2"
            strokeDasharray="30 20"
          />
        </svg>
      </motion.div>

      {/* Layer 3 - Fastest (Small accent dots) */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0"
      >
        <svg
          className="absolute inset-0 w-full h-[200vh]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Small circular markers along the center line */}
          {Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={i}
              cx="50%"
              cy={`${i * 5}%`}
              r="2"
              fill="rgba(255, 214, 10, 0.2)"
            />
          ))}
        </svg>
      </motion.div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
    </div>
  );
}