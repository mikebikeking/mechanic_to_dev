import { describe, it, expect, vi, beforeEach } from 'vitest';
import { githubService } from '../github.service';

describe('GithubService', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('parses a successful API response', async () => {
    const mockResponse = {
      data: {
        user: {
          repositories: {
            totalCount: 15,
            nodes: [
              { stargazerCount: 3, defaultBranchRef: { target: { history: { totalCount: 50 } } } },
              { stargazerCount: 1, defaultBranchRef: { target: { history: { totalCount: 30 } } } },
              { stargazerCount: 0, defaultBranchRef: null },
            ],
          },
          contributionsCollection: {
            contributionCalendar: { totalContributions: 200 },
          },
        },
      },
    };

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    } as Response);

    const stats = await githubService.getStats('testuser');

    expect(stats.totalRepos).toBe(15);
    expect(stats.totalStars).toBe(4);
    expect(stats.totalCommits).toBe(80);
    expect(stats.contributionsThisYear).toBe(200);
  });

  it('throws on HTTP error', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: false,
      status: 401,
    } as Response);

    await expect(githubService.getStats('testuser')).rejects.toThrow('GitHub API error: 401');
  });

  it('throws on GraphQL error', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ errors: [{ message: 'User not found' }] }),
    } as Response);

    await expect(githubService.getStats('baduser')).rejects.toThrow('User not found');
  });
});
