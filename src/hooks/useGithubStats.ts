import { useState, useEffect, useRef, useCallback } from 'react';
import { githubService, GithubStats } from '../services/github.service';

const statsCache = new Map<string, { data: GithubStats; timestamp: number }>();
const CACHE_DURATION = 1000 * 60 * 30;

export function useGithubStats(username: string) {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchStats = useCallback(async () => {
    const cached = statsCache.get(username);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      setStats(cached.data);
      setLoading(false);
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    setLoading(true);
    setError(null);

    try {
      const data = await githubService.getStats(username);

      statsCache.set(username, {
        data,
        timestamp: Date.now(),
      });

      setStats(data);
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchStats();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [username, fetchStats]);

  return { stats, loading, error, refetch: fetchStats };
}
