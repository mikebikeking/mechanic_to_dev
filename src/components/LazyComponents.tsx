import { lazy } from 'react';

// Lazy load heavy components
export const LazyProjects = lazy(() => import('./sections/Projects').then(module => ({ default: module.Projects })));
export const LazyExperience = lazy(() => import('./sections/Experience').then(module => ({ default: module.Experience })));
export const LazyEducation = lazy(() => import('./sections/Education').then(module => ({ default: module.Education })));
export const LazyContact = lazy(() => import('./sections/Contact').then(module => ({ default: module.Contact })));
export const LazySkills = lazy(() => import('./sections/Skills').then(module => ({ default: module.Skills })));
export const LazyAbout = lazy(() => import('./sections/About').then(module => ({ default: module.About })));
