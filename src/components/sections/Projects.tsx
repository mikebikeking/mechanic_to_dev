import { motion } from "framer-motion";
import { featuredProjects } from "../../data/projects";
import { ProjectList } from "../ui/ProjectList";
import { slideIn } from "../../utils/animations";

export function Projects() {
  return (
    <section id="projects" aria-label="Portfolio Projects" className="py-20 bg-[var(--color-surface)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-[var(--color-text-primary)] mb-4">
            The Build Journal
          </h2>
          <div className="w-24 h-0.5 bg-safety mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectList projects={featuredProjects} />
        </motion.div>
      </div>
    </section>
  );
}
