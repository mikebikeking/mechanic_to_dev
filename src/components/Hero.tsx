import { ChevronDownIcon, CodeIcon, WrenchIcon } from "lucide-react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { MagneticButton } from "./MagneticButton";
import { MagneticLink } from "./MagneticLink";
import { TechIcon } from "./TechIcon";
import { useTypingEffect } from "../hooks/useTypingEffect";

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 100;
      const y = (clientY / innerHeight - 0.5) * 100;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    console.log(
      `
    %c🚴‍♂️ MICHAEL KING - Frontend Developer %c
    
    %cHey there, fellow developer! 👋
    
    Thanks for checking out the source code. Here's what makes this portfolio special:
    
    ✓ TypeScript strict mode enabled
    ✓ Performance-first architecture  
    ✓ Accessibility-focused (WCAG AA)
    ✓ 20 years of mechanical precision → Clean code
    ✓ React + Framer Motion animations
    ✓ TailwindCSS + Custom theme
    
    %cWant to chat about the tech stack or grab coffee?
    📧 Mike@mikeking.dev
    💼 linkedin.com/in/michael-king-804b6037
    🐙 github.com/mikebikeking
    
    %cP.S. - All animations are GPU-accelerated 🚀
    P.P.S. - This console message is intentional, not a forgotten debug log 😉
  `,
      "color: #2738f5; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);",
      "",
      "color: #00B4D8; font-size: 16px; line-height: 1.6;",
      "color: #2738f5; font-size: 14px; line-height: 1.8; font-weight: bold;",
      "color: #888; font-size: 12px; font-style: italic; line-height: 1.6;"
    );
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="home"
      aria-label="Hero - Michael King Frontend Developer"
      role="banner"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-16"
    >
      <div className="absolute inset-0 bg-blue-50/50 dark:bg-black/70">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,214,10,0.15),transparent_50%)]"
          style={{
            x: gradientX,
            y: gradientY,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(10,132,255,0.15),transparent_50%)]"
          style={{
            x: useTransform(gradientX, (x) => -x * 0.5),
            y: useTransform(gradientY, (y) => -y * 0.5),
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32"
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-500/30 dark:text-gold/30"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-500/20 dark:text-gold/20"
          />
          {Array.from({
            length: 24,
          }).map((_, i) => {
            const angle = (i * 360) / 24;
            const rad = (angle * Math.PI) / 180;
            const x1 = 50 + 10 * Math.cos(rad);
            const y1 = 50 + 10 * Math.sin(rad);
            const x2 = 50 + 42 * Math.cos(rad);
            const y2 = 50 + 42 * Math.sin(rad);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-blue-500/25 dark:text-gold/25"
              />
            );
          })}
          <circle
            cx="50"
            cy="50"
            r="8"
            fill="currentColor"
            strokeWidth="2"
            className="text-blue-500/20 dark:text-gold/20 [stroke:rgb(59_130_246_/_0.4)] dark:[stroke:rgb(255_214_10_/_0.4)]"
          />
          <circle 
            cx="50" 
            cy="50" 
            r="4" 
            fill="currentColor"
            className="text-blue-500/30 dark:text-gold/30"
          />
        </motion.svg>
      </motion.div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading text-gray-900 dark:text-textPrimary leading-tight"
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
            >
              <motion.span
                className="text-blue-600 dark:text-gold"
              >
                
                Two Wheels
                <br />
              One Code
              </motion.span>
            </motion.h1>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="flex items-center justify-center gap-4 text-gray-600 dark:text-textSecondary"
          >
            <WrenchIcon className="text-blue-600 dark:text-gold" size={24} />
            <p className="text-xl sm:text-2xl font-body max-w-2xl text-gray-600 dark:text-textSecondary min-h-[3.5rem] flex items-center">
              {displayedText}
            </p>
            <CodeIcon className="text-blue-600 dark:text-gold" size={24} />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
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
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
            }}
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
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1.1,
            }}
            className="pt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              "JavaScript",
              "React",
              "TypeScript",
              "Next.js",
              "Git",
              "TailwindCSS",
            ].map((tech) => (
              <motion.div
                key={tech}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                }}
                whileHover={{
                  scale: 1.1,
                }}
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
