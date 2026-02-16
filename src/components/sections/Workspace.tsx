import { useState } from "react";
import { ChevronRight, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useGithubStats } from "../../hooks/useGithubStats";
import { StatCardSkeleton } from "../ui/SkeletonLoader";
import { workspaceSections, type TabKey } from "../../data/workspace";

const TAB_FILENAMES: Record<TabKey, string> = {
  vscode: "settings.json",
  git: "terminal",
  testing: "Button.test.tsx",
  organization: "project-structure",
};

function StatCard({ number, label }: { number: string | number; label: string }) {
  return (
    <div className="bg-blue-50 dark:bg-gunmetal/50 border border-blue-200 dark:border-blueprint/20 p-6 text-center hover:border-blue-500 dark:hover:border-gold/50 transition-colors">
      <div className="text-3xl font-heading text-blue-600 dark:text-gold mb-2">
        {String(number)}
      </div>
      <div className="text-sm text-gray-600 dark:text-textSecondary">{label}</div>
    </div>
  );
}

export function Workspace() {
  const [activeTab, setActiveTab] = useState<TabKey>("vscode");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { stats, error, loading } = useGithubStats("mikebikeking");

  const currentSection = workspaceSections[activeTab];
  const Icon = currentSection.icon;

  return (
    <section
      id="workspace"
      aria-label="Development Workflow and GitHub Statistics"
      className="py-20 bg-white/80 dark:bg-gunmetal/50 backdrop-blur-sm relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-torch/5 rounded-full blur-3xl opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-blue-700 dark:text-gold mb-4">
            THE WORKSPACE
          </h2>
          <p className="text-xl text-textSecondary font-heading italic mb-2">
            The same discipline that keeps tools organized keeps code maintainable.
          </p>
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {(Object.keys(workspaceSections) as TabKey[]).map((key) => {
            const section = workspaceSections[key];
            const TabIcon = section.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 font-heading text-sm transition-all ${
                  activeTab === key
                    ? "bg-blue-600 dark:bg-gold text-white dark:text-gunmetal"
                    : "bg-blue-50 dark:bg-gunmetal/50 text-blue-700 dark:text-textPrimary border-2 border-blue-300 dark:border-blueprint/30 hover:border-blue-600 dark:hover:border-gold"
                }`}
              >
                <TabIcon size={20} />
                {section.title}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            <div className="bg-blue-50 dark:bg-gunmetal/50 border-2 border-blue-200 dark:border-blueprint/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon className="text-blue-600 dark:text-gold" size={32} />
                <div>
                  <h3 className="text-2xl font-heading text-gray-900 dark:text-textPrimary">
                    {currentSection.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-textSecondary">
                    {currentSection.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {currentSection.items.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="text-blue-600 dark:text-blueprint font-heading text-sm mb-3 flex items-center gap-2">
                      <ChevronRight size={16} />
                      {item.category}
                    </h4>
                    <div className="space-y-2 ml-6">
                      {item.tools.map((tool, toolIdx) => (
                        <div key={toolIdx} className="flex items-start gap-3 text-sm">
                          <span className="text-blue-700 dark:text-gold font-mono min-w-[120px]">
                            {tool.name}
                          </span>
                          <span className="text-gray-600 dark:text-textSecondary">
                            {tool.purpose}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-[#1e1e1e] border-2 border-blue-200 dark:border-blueprint/30 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-200 dark:border-blueprint/20">
                <Terminal className="text-blue-600 dark:text-gold" size={20} />
                <span className="text-gray-600 dark:text-textSecondary font-mono text-sm">
                  {TAB_FILENAMES[activeTab]}
                </span>
              </div>
              <pre className="text-sm text-gray-800 dark:text-gray-300 font-mono overflow-x-auto">
                <code>{currentSection.codeExample}</code>
              </pre>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {loading ? (
            <>
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
            </>
          ) : (
            <>
              <StatCard number={stats?.contributionsThisYear || 0} label="GitHub Contributions" />
              <StatCard number={stats?.totalRepos || 0} label="Projects Built" />
              <StatCard number="Mechanic → Dev" label="Unique Journey" />
              <StatCard number="Quality Obsessed" label="Core Value" />
            </>
          )}
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded text-center">
            <p className="text-red-400 text-sm">
              Unable to load GitHub stats: {error.message}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
