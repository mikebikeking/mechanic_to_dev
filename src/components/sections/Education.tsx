import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { credentials } from '../../data/education';
import { slideIn, staggerContainer, staggerItem } from '../../utils/animations';

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="education"
      aria-label="Education and Certifications"
      className="py-20 bg-[var(--color-bg)] relative overflow-hidden"
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
            Education & Certifications
          </h2>
          <div className="w-24 h-0.5 bg-safety mx-auto mt-4" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {credentials.map((cred) => (
            <motion.div
              key={cred.title}
              variants={staggerItem}
              className="group p-6 bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-safety transition-colors duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 border border-[var(--color-border)] text-steel group-hover:text-safety group-hover:border-safety transition-colors">
                  <cred.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading text-[var(--color-text-primary)] mb-1 group-hover:text-safety transition-colors">
                    {cred.title}
                  </h3>
                  <p className="font-mono text-sm text-steel">
                    {cred.institution}
                  </p>
                  <p className="text-safety text-xs font-mono mt-1">
                    {cred.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
