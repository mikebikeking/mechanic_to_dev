import { describe, it, expect } from 'vitest';
import { featuredProjects } from '../projects';

describe('projects data', () => {
  it('has at least one project', () => {
    expect(featuredProjects.length).toBeGreaterThan(0);
  });

  it('every project has required fields', () => {
    for (const project of featuredProjects) {
      expect(project.id).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.description.length).toBeGreaterThan(20);
      expect(project.tech.length).toBeGreaterThan(0);
      expect(project.liveUrl).toMatch(/^https?:\/\//);
      expect(project.codeUrl).toMatch(/^https?:\/\//);
    }
  });

  it('project IDs are unique', () => {
    const ids = featuredProjects.map(p => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('each project has at least one metric', () => {
    for (const project of featuredProjects) {
      expect(project.metrics.length).toBeGreaterThan(0);
      for (const metric of project.metrics) {
        expect(metric.label).toBeTruthy();
        expect(metric.value).toBeTruthy();
      }
    }
  });
});
