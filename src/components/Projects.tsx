import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { featuredProjects } from "../data/projects";
import { ProjectGrid } from "./ProjectGrid";

export function Projects() {
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

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
      </div>
    </section>
  );
}