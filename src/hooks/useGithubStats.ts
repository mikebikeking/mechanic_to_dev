import { useState, useEffect, useRef, useCallback } from 'react';
import { githubService } from '../services/github.service';

interface GithubStats {
  totalCommits: number;
  totalRepos: number;
  totalStars: number;
  contributionsThisYear: number;
}

interface UseGithubStatsReturn {
  stats: GithubStats | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

// Cache to avoid redundant API calls
const statsCache = new Map<string, { data: GithubStats; timestamp: number }>();
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export const useGithubStats = (username: string): UseGithubStatsReturn => {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchStats = useCallback(async () => {
    // Check cache first
    const cached = statsCache.get(username);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      setStats(cached.data);
      setLoading(false);
      return;
    }

    // Cancel previous request if still pending
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    setLoading(true);
    setError(null);

    try {
      const data = await githubService.getStats(username);
      
      // Update cache
      statsCache.set(username, {
        data,
        timestamp: Date.now(),
      });

      setStats(data);
    } catch (err) {
      // Don't set error if request was aborted
      if (err instanceof Error && err.name !== 'AbortError') {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchStats();

    // Cleanup
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [username, fetchStats]);

  return {
    stats,
    loading,
    error,
    refetch: fetchStats,
  };
};