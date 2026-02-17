import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../../data/experience";
import { slideIn, staggerContainer, staggerItem } from "../../utils/animations";

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      aria-label="Professional Experience and Career Timeline"
      className="py-20 bg-[var(--color-surface)] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-[var(--color-text-primary)] mb-4">
            Experience
          </h2>
          <div className="w-24 h-0.5 bg-safety mx-auto mt-4" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={staggerItem}
              className="border-b border-[var(--color-border)] py-8"
            >
          

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-heading text-[var(--color-text-primary)]">
                    {exp.title}
                  </h3>
                  <span className="font-mono text-sm text-steel">{exp.company}</span>
                </div>
                <span className="font-mono text-sm text-steel mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li
                    key={highlightIndex}
                    className="text-[var(--color-text-secondary)] text-sm flex items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-safety mt-2 mr-3 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
