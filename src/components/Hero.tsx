import { ChevronDownIcon, CodeIcon, WrenchIcon, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function Hero() {
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

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background - made more transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-gunmetal/60 via-black/40 to-gunmetal/60">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,214,10,0.15),transparent_50%)]"
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
      {/* Animated grid */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      {/* Floating bicycle wheel */}
      <motion.div className="absolute top-20 left-10 w-32 h-32">
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
          {/* Outer rim */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255, 214, 10, 0.3)"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="rgba(255, 214, 10, 0.2)"
            strokeWidth="1"
          />
          {/* Spokes */}
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
                stroke="rgba(255, 214, 10, 0.25)"
                strokeWidth="0.5"
              />
            );
          })}
          {/* Hub */}
          <circle
            cx="50"
            cy="50"
            r="8"
            fill="rgba(255, 214, 10, 0.2)"
            stroke="rgba(255, 214, 10, 0.4)"
            strokeWidth="2"
          />
          <circle cx="50" cy="50" r="4" fill="rgba(255, 214, 10, 0.3)" />
        </motion.svg>
      </motion.div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 backdrop-blur-sm"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <ZapIcon className="text-gold" size={16} />
            </motion.div>
            <span className="text-gold text-sm font-mono">
              AVAILABLE FOR HIRE
            </span>
          </motion.div>
          {/* Main heading with staggered animation */}
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
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading text-textPrimary leading-tight"
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
              PRECISION
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-torch to-blueprint"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                ENGINEERING
              </motion.span>
              <br />
              MEETS CODE
            </motion.h1>
          </motion.div>
          {/* Subtitle with icons */}
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
            className="flex items-center justify-center gap-4 text-textSecondary"
          >
            <WrenchIcon className="text-gold" size={24} />
            <p className="text-xl sm:text-2xl font-body max-w-2xl">
              20 years of mechanical mastery, now building pixel-perfect web
              experiences
            </p>
            <CodeIcon className="text-blueprint" size={24} />
          </motion.div>
          {/* Name and title */}
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
            <div className="text-3xl sm:text-4xl font-heading text-gold">
              MICHAEL KING
            </div>
            <div className="text-lg text-blueprint font-mono">
              Frontend Developer | React Specialist
            </div>
          </motion.div>
          {/* CTA buttons */}
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
            <motion.button
              onClick={scrollToAbout}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 214, 10, 0.5)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group px-8 py-4 bg-gradient-to-r from-gold to-torch text-gunmetal font-heading text-lg transition-all duration-300 flex items-center gap-2"
            >
              VIEW PORTFOLIO
              <ChevronDownIcon size={20} />
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(10, 132, 255, 1)",
                color: "#1C1C1E",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="px-8 py-4 border-2 border-blueprint text-blueprint font-heading text-lg transition-all duration-300"
            >
              GET IN TOUCH
            </motion.a>
          </motion.div>
          {/* Tech stack preview */}
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
              "JavaScript (ES6+)",
              "React",
              "TypeScript",
              "Next.js",
              "Git & Github",
              "TailwindCSS",
            ].map((tech) => (
              <motion.span
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
                  borderColor: "rgba(255, 214, 10, 0.5)",
                  color: "#FFD60A",
                }}
                className="px-3 py-1 bg-gunmetal/50 border border-blueprint/30 text-textSecondary text-xs font-mono backdrop-blur-sm transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
    </section>
  );
}
