import { describe, it, expect } from 'vitest';
import { experiences } from '../experience';

describe('experience data', () => {
  it('has entries', () => {
    expect(experiences.length).toBeGreaterThan(0);
  });

  it('every entry has required fields', () => {
    for (const exp of experiences) {
      expect(exp.title).toBeTruthy();
      expect(exp.company).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.highlights.length).toBeGreaterThan(0);
    }
  });

  it('includes both tech and mechanical roles', () => {
    const titles = experiences.map(e => e.title.toLowerCase()).join(' ');
    expect(titles).toMatch(/frontend|developer|engineer/i);
    expect(titles).toMatch(/mechanic|manager|technician/i);
  });
});
