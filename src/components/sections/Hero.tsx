import { ChevronDownIcon, CodeIcon, WrenchIcon } from "lucide-react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { MagneticButton } from "../ui/MagneticButton";
import { MagneticLink } from "../ui/MagneticLink";
import { TechIcon } from "../ui/TechIcon";
import { useTypingEffect } from "../../hooks/useTypingEffect";

const HERO_TECH = ["JavaScript", "React", "TypeScript", "Next.js", "Git", "TailwindCSS"] as const;

const WHEEL_SPOKES = Array.from({ length: 24 }, (_, i) => {
  const angle = (i * 360) / 24;
  const rad = (angle * Math.PI) / 180;
  return {
    x1: 50 + 10 * Math.cos(rad),
    y1: 50 + 10 * Math.sin(rad),
    x2: 50 + 42 * Math.cos(rad),
    y2: 50 + 42 * Math.sin(rad),
  };
});

export function Hero() {
  const { displayedText } = useTypingEffect(
    "20 years of mechanical mastery, now building pixel-perfect web experiences",
    40,
    1500
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const gradientX = useSpring(mouseX, springConfig);
  const gradientY = useSpring(mouseY, springConfig);

  const inverseGradientX = useTransform(gradientX, (x) => -x * 0.5);
  const inverseGradientY = useTransform(gradientY, (y) => -y * 0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-label="Hero - Michael King Frontend Developer"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-16"
    >
      <div className="absolute inset-0 bg-blue-50/50 dark:bg-black/70">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,214,10,0.15),transparent_50%)]"
          style={{ x: gradientX, y: gradientY }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(10,132,255,0.15),transparent_50%)]"
          style={{ x: inverseGradientX, y: inverseGradientY }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="absolute inset-0 grid-pattern opacity-30" />

      <motion.div className="absolute top-20 left-10 w-32 h-32">
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500/30 dark:text-gold/30" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500/20 dark:text-gold/20" />
          {WHEEL_SPOKES.map((spoke, i) => (
            <line key={i} {...spoke} stroke="currentColor" strokeWidth="0.5" className="text-blue-500/25 dark:text-gold/25" />
          ))}
          <circle cx="50" cy="50" r="8" fill="currentColor" strokeWidth="2" className="text-blue-500/20 dark:text-gold/20 [stroke:rgb(59_130_246_/_0.4)] dark:[stroke:rgb(255_214_10_/_0.4)]" />
          <circle cx="50" cy="50" r="4" fill="currentColor" className="text-blue-500/30 dark:text-gold/30" />
        </motion.svg>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading text-gray-900 dark:text-textPrimary leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-blue-600 dark:text-gold">
                Two Wheels
                <br />
                One Code
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-4 text-gray-600 dark:text-textSecondary"
          >
            <WrenchIcon className="text-blue-600 dark:text-gold" size={24} />
            <p className="text-xl sm:text-2xl font-body max-w-2xl text-gray-600 dark:text-textSecondary min-h-[3.5rem] flex items-center">
              {displayedText}
            </p>
            <CodeIcon className="text-blue-600 dark:text-gold" size={24} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-2"
          >
            <div className="text-3xl sm:text-4xl font-heading text-blue-700 dark:text-gold">
              MICHAEL KING
            </div>
            <div className="text-lg text-blue-600 dark:text-gold font-mono">
              Frontend Developer | React Specialist
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <MagneticButton
              onClick={scrollToProjects}
              intensity={0.4}
              showGear={true}
              gearPosition="left"
              className="group px-8 py-4 bg-blue-600 dark:bg-gold text-white dark:text-gunmetal font-heading text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              VIEW PORTFOLIO
              <ChevronDownIcon size={20} />
            </MagneticButton>
            <MagneticLink
              href="#contact"
              intensity={0.4}
              showGear={true}
              gearPosition="left"
              className="px-8 py-4 border-2 border-blue-600 dark:border-gold text-blue-600 dark:text-gold font-heading text-lg transition-all duration-300 inline-flex items-center justify-center hover:bg-blue-600 dark:hover:bg-gold hover:text-white dark:hover:text-gunmetal"
            >
              GET IN TOUCH
            </MagneticLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {HERO_TECH.map((tech) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="cursor-default"
              >
                <TechIcon tech={tech} size={18} showLabel={true} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
