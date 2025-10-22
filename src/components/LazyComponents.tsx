import { lazy } from 'react';

// Lazy load heavy components
export const LazyProjects = lazy(() => import('./Projects').then(module => ({ default: module.Projects })));
export const LazyWorkshop = lazy(() => import('./Workshop').then(module => ({ default: module.Workshop })));
export const LazyExperience = lazy(() => import('./Experience').then(module => ({ default: module.Experience })));
export const LazyEducation = lazy(() => import('./Education').then(module => ({ default: module.Education })));
export const LazyContact = lazy(() => import('./Contact').then(module => ({ default: module.Contact })));
export const LazySkills = lazy(() => import('./Skills').then(module => ({ default: module.Skills })));
export const LazyAbout = lazy(() => import('./About').then(module => ({ default: module.About })));
