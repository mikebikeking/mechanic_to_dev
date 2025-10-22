declare global {
  interface ImportMetaEnv {
    VITE_GITHUB_TOKEN?: string;
    [key: string]: string | undefined;
  }
  interface ImportMeta {
    env: ImportMetaEnv;
  }
}

interface GithubStats {
  totalCommits: number;
  totalRepos: number;
  totalStars: number;
  contributionsThisYear: number;
}

class GithubService {
  private readonly token: string;
  private readonly baseUrl = 'https://api.github.com/graphql';

  constructor() {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (!token) {
      console.warn('GitHub token not found. API requests may be rate-limited.');
    }
    this.token = token || '';
  }

  async getStats(username: string): Promise<GithubStats> {
    const query = `
      query($username: String!) {
        user(login: $username) {
          repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: UPDATED_AT, direction: DESC}) {
            totalCount
            nodes {
              stargazerCount
              defaultBranchRef {
                target {
                  ... on Commit {
                    history {
                      totalCount
                    }
                  }
                }
              }
            }
          }
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `;

    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': `bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: { username },
        }),
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();

      if (data.errors) {
        throw new Error(data.errors[0].message);
      }

      const repos = data.data.user.repositories.nodes;

      const totalStars = repos.reduce(
        (acc: number, repo: { stargazerCount: number }) => acc + repo.stargazerCount,
        0
      );

      const totalCommits = repos.reduce(
        (acc: number, repo: { defaultBranchRef?: { target?: { history?: { totalCount: number } } } }) => {
          return acc + (repo.defaultBranchRef?.target?.history?.totalCount || 0);
        },
        0
      );

      return {
        totalCommits,
        totalRepos: data.data.user.repositories.totalCount,
        totalStars,
        contributionsThisYear: data.data.user.contributionsCollection.contributionCalendar.totalContributions,
      };
    } catch (error) {
      console.error('Failed to fetch GitHub stats:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const githubService = new GithubService();