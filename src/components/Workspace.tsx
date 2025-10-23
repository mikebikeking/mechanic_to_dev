import { useState } from "react";
import {
  Code2,
  GitBranch,
  TestTube,
  FolderTree,
  ChevronRight,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useGithubStats } from "../hooks/useGithubStats";
import { StatCardSkeleton } from "./SkeletonLoader";

const StatCard = ({
  number,
  label,
}: {
  number: string | number;
  label: string;
}) => (
  <div className="bg-blue-50 dark:bg-gunmetal/50 border border-blue-200 dark:border-blueprint/20 p-6 text-center hover:border-blue-500 dark:hover:border-gold/50 transition-colors">
    <div className="text-3xl font-heading text-blue-600 dark:text-gold mb-2">
      {String(number)}
    </div>
    <div className="text-sm text-gray-600 dark:text-textSecondary">{label}</div>
  </div>
);

export function Workspace() {
  type Tool = { name: string; purpose: string };
  type Item = { category: string; tools: Tool[] };
  type Section = {
    icon: React.ComponentType<{ size?: number | string; className?: string }>;
    title: string;
    subtitle: string;
    items: Item[];
    codeExample: string;
  };

  const tabKeys = ["vscode", "git", "testing", "organization"] as const;
  type TabKey = (typeof tabKeys)[number];

  const [activeTab, setActiveTab] = useState<TabKey>("vscode");
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { stats, error, loading } = useGithubStats("mikebikeking");

  const workspaceSections: Record<TabKey, Section> = {
    vscode: {
      icon: Code2,
      title: "VSCode Setup",
      subtitle: "My Development Environment",
      items: [
        {
          category: "Essential Extensions",
          tools: [
            { name: "ESLint", purpose: "Code quality enforcement" },
            { name: "Prettier", purpose: "Consistent formatting" },
            { name: "Error Lens", purpose: "Inline error highlighting" },
            { name: "GitLens", purpose: "Git supercharged" },
            { name: "Auto Rename Tag", purpose: "HTML/JSX efficiency" },
          ],
        },
        {
          category: "Settings",
          tools: [
            { name: "Format on Save", purpose: "Automatic code formatting" },
            { name: "Auto Save", purpose: "onFocusChange" },
            { name: "Tab Size", purpose: "2 spaces" },
            { name: "Bracket Pair Colorization", purpose: "Enabled" },
          ],
        },
        {
          category: "Keybindings",
          tools: [
            { name: "Cmd+P", purpose: "Quick file navigation" },
            { name: "Cmd+Shift+F", purpose: "Global search" },
            { name: "Cmd+D", purpose: "Multi-cursor selection" },
            { name: "Option+Shift+F", purpose: "Format document" },
          ],
        },
      ],
      codeExample: `{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.tabSize": 2,
  "editor.bracketPairColorization.enabled": true,
  "workbench.colorTheme": "One Dark Pro",
  "terminal.integrated.fontFamily": "JetBrains Mono"
}`,
    },
    git: {
      icon: GitBranch,
      title: "Git Workflow",
      subtitle: "Version Control Strategy",
      items: [
        {
          category: "Branch Strategy",
          tools: [
            { name: "main", purpose: "Production-ready code" },
            { name: "develop", purpose: "Integration branch" },
            { name: "feature/*", purpose: "New features" },
            { name: "fix/*", purpose: "Bug fixes" },
          ],
        },
        {
          category: "Commit Convention",
          tools: [
            { name: "feat:", purpose: "New feature" },
            { name: "fix:", purpose: "Bug fix" },
            { name: "refactor:", purpose: "Code restructuring" },
            { name: "docs:", purpose: "Documentation" },
            { name: "test:", purpose: "Adding tests" },
          ],
        },
        {
          category: "Best Practices",
          tools: [
            { name: "Small commits", purpose: "Atomic changes" },
            { name: "Descriptive messages", purpose: "Clear intent" },
            { name: "Pull before push", purpose: "Avoid conflicts" },
            { name: "Review your diff", purpose: "Catch mistakes" },
          ],
        },
      ],
      codeExample: `# Feature branch workflow
git checkout -b feature/user-authentication

# Work on feature...
git add .
git commit -m "feat: implement JWT authentication"

# Keep branch updated
git checkout develop
git pull origin develop
git checkout feature/user-authentication
git rebase develop

# Push and create PR
git push origin feature/user-authentication`,
    },
    testing: {
      icon: TestTube,
      title: "Testing Approach",
      subtitle: "Quality Assurance Strategy",
      items: [
        {
          category: "Testing Pyramid",
          tools: [
            { name: "Unit Tests", purpose: "70% - Components, hooks, utils" },
            { name: "Integration Tests", purpose: "20% - Feature workflows" },
            { name: "E2E Tests", purpose: "10% - Critical user paths" },
          ],
        },
        {
          category: "Testing Tools",
          tools: [
            { name: "Vitest", purpose: "Fast unit testing" },
            { name: "React Testing Library", purpose: "Component testing" },
            { name: "Playwright", purpose: "E2E automation" },
            { name: "MSW", purpose: "API mocking" },
          ],
        },
        {
          category: "Coverage Goals",
          tools: [
            { name: "Statements", purpose: "80%+" },
            { name: "Branches", purpose: "75%+" },
            { name: "Functions", purpose: "80%+" },
            { name: "Lines", purpose: "80%+" },
          ],
        },
      ],
      codeExample: `import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});`,
    },
    organization: {
      icon: FolderTree,
      title: "Code Organization",
      subtitle: "Project Structure Principles",
      items: [
        {
          category: "Folder Structure",
          tools: [
            { name: "/components", purpose: "Reusable UI components" },
            { name: "/hooks", purpose: "Custom React hooks" },
            { name: "/utils", purpose: "Helper functions" },
            { name: "/types", purpose: "TypeScript definitions" },
            { name: "/services", purpose: "API & external services" },
          ],
        },
        {
          category: "Naming Conventions",
          tools: [
            { name: "PascalCase", purpose: "Components (Button.tsx)" },
            { name: "camelCase", purpose: "Functions & variables" },
            { name: "UPPER_CASE", purpose: "Constants" },
            { name: "kebab-case", purpose: "File names (utils)" },
          ],
        },
        {
          category: "Code Principles",
          tools: [
            { name: "DRY", purpose: "Don't Repeat Yourself" },
            { name: "SOLID", purpose: "Clean architecture" },
            { name: "KISS", purpose: "Keep It Simple" },
            { name: "YAGNI", purpose: "You Aren't Gonna Need It" },
          ],
        },
      ],
      codeExample: `src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── features/
│       └── Projects.tsx
├── hooks/
│   ├── useAuth.ts
│   └── useLocalStorage.ts
├── services/
│   └── api.ts
├── types/
│   └── index.ts
├── utils/
│   └── helpers.ts
└── App.tsx`,
    },
  };

  const currentSection = workspaceSections[activeTab];
  const Icon = currentSection.icon;

  return (
    <section
      id="workspace"
      aria-label="Development Workflow and GitHub Statistics"
      className="py-20 bg-white/80 dark:bg-gunmetal/50 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-torch/5 rounded-full blur-3xl opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            The same discipline that keeps tools organized keeps code
            maintainable.
          </p>
          <motion.div
            className="w-24 h-1 bg-blue-500 dark:bg-blueprint mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        {/* Tab Navigation */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(workspaceSections).map(([key, section]) => {
            const k = key as TabKey;
            const TabIcon = section.icon;
            return (
              <button
                key={k}
                onClick={() => setActiveTab(k)}
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
        {/* Content Area with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Left: Tools & Practices */}
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
                        <div
                          key={toolIdx}
                          className="flex items-start gap-3 text-sm"
                        >
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

            {/* Right: Code Example */}
            <div className="bg-gray-100 dark:bg-[#1e1e1e] border-2 border-blue-200 dark:border-blueprint/30 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-200 dark:border-blueprint/20">
                <Terminal className="text-blue-600 dark:text-gold" size={20} />
                <span className="text-gray-600 dark:text-textSecondary font-mono text-sm">
                  {activeTab === "vscode" && "settings.json"}
                  {activeTab === "git" && "terminal"}
                  {activeTab === "testing" && "Button.test.tsx"}
                  {activeTab === "organization" && "project-structure"}
                </span>
              </div>
              <pre className="text-sm text-gray-800 dark:text-gray-300 font-mono overflow-x-auto">
                <code>{currentSection.codeExample}</code>
              </pre>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Bottom Stats - Professional & Impressive */}
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
              <StatCard
                number={stats?.contributionsThisYear || 0}
                label="GitHub Contributions"
              />
              <StatCard
                number={stats?.totalRepos || 0}
                label="Projects Built"
              />
              <StatCard number="Mechanic → Dev" label="Unique Journey" />
              <StatCard number="Quality Obsessed" label="Core Value" />
            </>
          )}
        </div>

        {/* Show error if any */}
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
