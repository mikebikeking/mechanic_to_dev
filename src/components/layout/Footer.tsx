import { useGithubStats } from '../../hooks/useGithubStats';
import { useBostonTime } from '../../hooks/useBostonTime';

export function Footer() {
  const { stats } = useGithubStats('mikebikeking');
  const bostonTime = useBostonTime();

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <span className="font-mono text-xs text-steel uppercase tracking-widest">
              GitHub
            </span>
            <p className="font-mono text-xs text-[var(--color-text-primary)] mt-1">
              {stats?.totalRepos || '—'} repos · {stats?.contributionsThisYear || '—'} contributions
            </p>
          </div>

          <div className="md:text-center">
            <span className="font-mono text-xs text-steel uppercase tracking-widest">
              Location
            </span>
            <p className="font-mono text-xs text-[var(--color-text-primary)] mt-1">
              Boston, MA · {bostonTime} ET
            </p>
          </div>

          <div className="md:text-right">
            <span className="font-mono text-xs text-steel uppercase tracking-widest">
              System
            </span>
            <p className="font-mono text-xs text-[var(--color-text-primary)] mt-1">
              © {new Date().getFullYear()} Michael King. Engineered with precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
