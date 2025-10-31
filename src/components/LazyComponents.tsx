import { lazy } from 'react';

// Lazy load heavy components
export const LazyProjects = lazy(() => import('./Projects').then(module => ({ default: module.Projects })));
export const LazyWorkspace = lazy(() => import('./Workspace').then(module => ({ default: module.Workspace })));
export const LazyExperience = lazy(() => import('./Experience').then(module => ({ default: module.Experience })));
export const LazyEducation = lazy(() => import('./Education').then(module => ({ default: module.Education })));
export const LazyContact = lazy(() => import('./Contact').then(module => ({ default: module.Contact })));
export const LazySkills = lazy(() => import('./Skills').then(module => ({ default: module.Skills })));
export const LazyAbout = lazy(() => import('./About').then(module => ({ default: module.About })));
export const LazySkillsMatch = lazy(() => import('./SkillsMatch').then(module => ({ default: module.SkillsMatch })));