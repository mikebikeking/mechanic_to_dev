import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories } from "../../data/skills";
import { staggerContainer, staggerItem, slideIn } from "../../utils/animations";

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Expertise"
      className="py-20 bg-[var(--color-bg)] relative overflow-hidden"
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
            The Toolbox
          </h2>
          <div className="w-24 h-0.5 bg-safety mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group p-6 bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-safety transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <category.icon
                    className="text-steel group-hover:text-safety transition-colors"
                    size={32}
                  />
                </div>
                <h3 className="text-2xl font-heading text-[var(--color-text-primary)] mb-1 group-hover:text-safety transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] font-mono mb-4">
                  {category.subtitle}
                </p>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-[var(--color-text-secondary)] text-sm flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-safety mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-start"
          >
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-8 md:p-10 h-full">
              <h3 className="text-2xl font-heading text-[var(--color-text-primary)] mb-4">
                TECHNICAL EXPERTISE
              </h3>
              <div className="space-y-4">
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">
                  My toolkit includes <span className="font-semibold text-safety">React, TypeScript, and Next.js</span> for building scalable applications, along with <span className="font-semibold text-safety">Tailwind CSS</span> for pixel-perfect designs. I'm passionate about web performance, accessibility, and creating intuitive user experiences that work flawlessly across all devices.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">
                  In my transition to development, I've built and deployed multiple production applications, and completed <span className="font-semibold text-safety">Meta's Frontend Developer Certification</span>—proving that career pivots at any stage can lead to expertise.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">
                  My mechanical background taught me that documentation prevents disasters—a practice that now results in <span className="font-semibold text-safety">clean, maintainable, and reusable code</span> with comprehensive comments and clear commit messages that other developers love working with.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
