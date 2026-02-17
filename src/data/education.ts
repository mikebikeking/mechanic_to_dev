import { GraduationCapIcon, AwardIcon, WrenchIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Credential {
  icon: LucideIcon;
  title: string;
  institution: string;
  year: string;
  color: 'gold' | 'blueprint' | 'torch';
}

export const credentials: Credential[] = [
  {
    icon: GraduationCapIcon,
    title: 'BS Computer Science',
    institution: 'Southern New Hampshire University',
    year: '2019-2024',
    color: 'gold',
  },
  {
    icon: AwardIcon,
    title: 'Meta Front-End Developer Certificate',
    institution: 'Meta',
    year: 'Sep 2025',
    color: 'blueprint',
  },
  {
    icon: WrenchIcon,
    title: 'CompTIA A+',
    institution: 'CompTIA',
    year: 'Mar 2025',
    color: 'torch',
  },
  {
    icon: WrenchIcon,
    title: 'CompTIA IT Fundamentals',
    institution: 'CompTIA',
    year: 'Feb 2025',
    color: 'gold',
  },
  {
    icon: WrenchIcon,
    title: 'IBM Product Manager',
    institution: 'IBM',
    year: 'Dec 2025',
    color: 'torch',

  }
];
