import { Code2, GitBranch, TestTube, FolderTree } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Tool {
  name: string;
  purpose: string;
}

interface WorkspaceItem {
  category: string;
  tools: Tool[];
}

export interface WorkspaceSection {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  items: WorkspaceItem[];
  codeExample: string;
}

export const TAB_KEYS = ["vscode", "git", "testing", "organization"] as const;
export type TabKey = (typeof TAB_KEYS)[number];

export const workspaceSections: Record<TabKey, WorkspaceSection> = {
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
