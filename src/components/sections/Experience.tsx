import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";
import { experiences } from "../../data/experience";

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      aria-label="Professional Experience and Career Timeline"
      className="py-20 bg-gray-50/80 dark:bg-black/50 backdrop-blur-sm relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl opacity-30" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-blue-700 dark:text-gold mb-4">
            THE ROUTE MAP
          </h2>
          <p className="text-xl text-textSecondary font-heading">THE JOURNEY</p>
          <motion.div
            className="w-24 h-1 bg-blue-500 dark:bg-blueprint mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300 dark:bg-blueprint/30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-0 md:pl-20"
              >
                <div className="absolute left-6 top-2 w-4 h-4 bg-blue-600 dark:bg-gold border-4 border-white dark:border-gunmetal rounded-full hidden md:block" />

                <div className="p-6 bg-gradient-to-br from-blue-50 to-white dark:from-gunmetal dark:to-black border-2 border-blue-200 dark:border-blueprint/30 hover:border-blue-600 dark:hover:border-gold transition-colors group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-heading text-gray-900 dark:text-textPrimary group-hover:text-blue-600 dark:group-hover:text-gold transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-blue-600 dark:text-blueprint mt-1">
                        <BriefcaseIcon size={16} className="mr-2" />
                        <span className="font-mono text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-textSecondary font-mono text-sm mt-2 sm:mt-0">
                      <CalendarIcon size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="text-gray-600 dark:text-textSecondary text-sm flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-gold mt-2 mr-3 rounded-full flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
