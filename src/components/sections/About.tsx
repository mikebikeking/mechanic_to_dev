import { WrenchIcon, CodeIcon, UsersIcon, GaugeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MikeImage from "../../assets/Mike_192.webp";
import { staggerContainer, staggerItem, slideIn, MECHANICAL_EASE } from "../../utils/animations";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const parallels = [
    { icon: WrenchIcon, from: "Diagnosis", to: "Debugging" },
    { icon: CodeIcon, from: "Attention to Detail", to: "Code Quality" },
    { icon: UsersIcon, from: "Customer Service", to: "User Experience" },
    { icon: GaugeIcon, from: "Performance Tuning", to: "Web Vitals" },
  ];

  return (
    <section
      id="about"
      aria-label="About Michael King"
      className="py-20 bg-[var(--color-surface)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-[var(--color-text-primary)] mb-4">
            The Mechanic's Code
          </h2>
          <div className="w-24 h-0.5 bg-safety mx-auto" />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:items-center">
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 0.8, ease: MECHANICAL_EASE }}
            className="flex justify-center mb-8 md:mb-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden">
              <div className="absolute inset-0 border border-[var(--color-border)] rounded-xl" />
              <img
                src={MikeImage}
                alt="Portrait of Mike"
                className="w-full h-full object-cover rounded-xl"
                width="320"
                height="320"
                loading="eager"
                decoding="async"
                
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: MECHANICAL_EASE }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-heading text-[var(--color-text-primary)]">
              FROM MECHANIC TO DEVELOPER
            </h3>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                After 20 years as a bicycle mechanic and service manager, I
                discovered that the same precision, problem-solving, and
                attention to detail that made me successful in the cycling
                industry translates perfectly to frontend development.
              </p>
              <p>
                From diagnosing complex mechanical issues to debugging intricate
                code problems, from tuning bikes for peak performance to
                optimizing web applications for speed and efficiency—the
                parallels are striking.
              </p>
              <p>
                Now I bring that same meticulous craftsmanship to building
                modern, high-performance web applications that are engineered to
                perfection.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
            >
              {parallels.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="p-4 bg-[var(--color-elevated)] border border-[var(--color-border)] hover:border-safety transition-colors cursor-default"
                >
                  <item.icon
                    className="text-steel hover:text-safety transition-colors mb-2"
                    size={24}
                  />
                  <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                    {item.from} →{" "}
                    <span className="text-safety font-semibold">
                      {item.to}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
