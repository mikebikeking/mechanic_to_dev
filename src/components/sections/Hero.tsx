import { ChevronDownIcon } from "lucide-react";
import { motion } from "framer-motion";
import { IndustrialButton } from "../ui/IndustrialButton";
import { slideIn, MECHANICAL_EASE } from "../../utils/animations";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-label="Hero - Michael King Frontend Developer"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-16"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <motion.h1
            className="text-7xl md:text-9xl font-heading text-[var(--color-text-primary)] leading-tight"
            variants={slideIn}
            initial="hidden"
            animate="visible"
          >
            Two Wheels,
            <br />
            One Code.
          </motion.h1>

          <motion.p
            className="font-mono text-sm md:text-base tracking-widest uppercase text-steel dark:text-steel"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 0.8, delay: 0.3, ease: MECHANICAL_EASE }}
          >
            MICHAEL KING — Frontend Developer
          </motion.p>

          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.8, delay: 0.6, ease: MECHANICAL_EASE }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <IndustrialButton onClick={scrollToProjects} variant="primary">
              VIEW PORTFOLIO
              <ChevronDownIcon size={20} className="ml-2" />
            </IndustrialButton>
            <IndustrialButton href="#contact" variant="outline" as="a">
              GET IN TOUCH
            </IndustrialButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
