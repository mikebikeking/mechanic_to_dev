import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { featuredProjects, otherProjects } from "../data/projects";
import { ProjectGrid } from "./ProjectGrid";

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Separate refs for featured and other projects
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  
  const [otherRef, otherInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const displayedOtherProjects = showAllProjects
    ? otherProjects
    : otherProjects.slice(0, 3);

  return (
    <section id="projects" aria-label="Portfolio Projects" className="py-20 bg-gray-50/80 dark:bg-gunmetal/50 backdrop-blur-sm relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blueprint/5 rounded-full blur-3xl opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Featured Projects */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-blue-700 dark:text-gold mb-4">
            THE BUILD JOURNAL
          </h2>
          <p className="text-xl text-gray-600 dark:text-textSecondary font-heading">
            FEATURED BUILDS
          </p>
          <motion.div 
            className="w-24 h-1 bg-blueprint mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        <motion.div 
          ref={featuredRef}
          initial={{ opacity: 0, y: 50 }}
          animate={featuredInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <ProjectGrid projects={featuredProjects} variant="featured" />
        </motion.div>

        {/* Other Projects Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-heading text-blue-600 dark:text-blueprint mb-2">
            OTHER NOTABLE BUILDS
          </h3>
          <p className="text-lg text-gray-600 dark:text-textSecondary font-heading">
            ADDITIONAL PROJECTS & EXPERIMENTS
          </p>
          <motion.div 
            className="w-20 h-1 bg-blue-500 dark:bg-blueprint mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          ref={otherRef}
          initial={{ opacity: 0, y: 50 }}
          animate={otherInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <ProjectGrid 
            projects={displayedOtherProjects} 
            variant="other" 
            columns="3"
          />
        </motion.div>

        {otherProjects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
                  className="px-8 py-3 border-2 border-blue-600 dark:border-gold text-blue-600 dark:text-gold font-heading text-sm hover:bg-blue-600 dark:hover:bg-gold hover:text-white dark:hover:text-gunmetal transition-all duration-300"
            >
              {showAllProjects ? "SHOW LESS" : "SHOW MORE BUILDS"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}