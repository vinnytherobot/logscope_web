import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, GitPullRequest, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import logoscopeLogo from "@/assets/logscope-logo.png";

const REPO = "vinnytherobot/logscope";
const CACHE_KEY = "logscope_gh_stats";
const CACHE_TTL = 5 * 60 * 1000;

interface GitHubStats {
  stars: number;
  forks: number;
  openPRs: number;
  fetchedAt: number;
}

function getCached(): GitHubStats | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const data: GitHubStats = JSON.parse(raw);
    if (Date.now() - data.fetchedAt > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

export function Navbar() {
  const [stats, setStats] = useState<GitHubStats | null>(getCached);
  const [loading, setLoading] = useState(!getCached());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const cached = getCached();
    if (cached) {
      setStats(cached);
      setLoading(false);
      return;
    }

    const fetchStats = async () => {
      try {
        const [repoRes, prsRes] = await Promise.all([
          fetch(`https://api.github.com/repos/${REPO}`),
          fetch(`https://api.github.com/repos/${REPO}/pulls?state=open&per_page=1`),
        ]);

        if (!repoRes.ok) throw new Error("GitHub API error");

        const repoData = await repoRes.json();
        const prsData = await prsRes.json();

        const result: GitHubStats = {
          stars: repoData.stargazers_count ?? 0,
          forks: repoData.forks_count ?? 0,
          openPRs: Array.isArray(prsData) ? prsData.length : 0,
          fetchedAt: Date.now(),
        };

        localStorage.setItem(CACHE_KEY, JSON.stringify(result));
        setStats(result);
      } catch (err) {
        console.error("Failed to fetch GitHub stats:", err);
        setStats({ stars: 0, forks: 0, openPRs: 0, fetchedAt: Date.now() });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Install", href: "#installation" },
    { label: "Usage", href: "#usage" },
    { label: "Stack", href: "#stack" },
  ];

  const StatBadge = ({ icon: Icon, value, label, color }: { icon: React.ElementType; value: number; label: string; color: string }) => (
    <div className={`flex items-center gap-1.5 text-xs font-mono ${color}`} title={label}>
      <Icon className="w-3.5 h-3.5" />
      <span>{value.toLocaleString()}</span>
    </div>
  );

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo + Name */}
        <a href="#" className="flex items-center gap-2 group">
          <img src={logoscopeLogo} alt="LogScope" className="w-7 h-7" />
          <span className="font-display font-bold text-lg hidden sm:inline">
            <span className="text-primary">Log</span>
            <span className="text-secondary">Scope</span>
          </span>
        </a>

        {/* Nav links — hidden on small mobile */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* GitHub stats + link */}
        <div className="flex items-center gap-3 sm:gap-4">
          {loading ? (
            <div className="flex items-center gap-3">
              <Skeleton className="h-4 w-10 bg-muted/50" />
              <Skeleton className="h-4 w-10 bg-muted/50" />
              <Skeleton className="h-4 w-10 bg-muted/50" />
            </div>
          ) : stats ? (
            <div className="flex items-center gap-3 sm:gap-4">
              <StatBadge icon={Star} value={stats.stars} label="Stars" color="text-primary" />
              <StatBadge icon={GitFork} value={stats.forks} label="Forks" color="text-accent" />
              <StatBadge icon={GitPullRequest} value={stats.openPRs} label="Open PRs" color="text-secondary" />
            </div>
          ) : null}

          <a
            href={`https://github.com/${REPO}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </motion.nav>
  )
}