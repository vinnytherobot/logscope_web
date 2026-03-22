export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-lg">
            <span className="text-primary">Log</span>
            <span className="text-secondary">Scope</span>
          </span>
          <span className="text-xs text-muted-foreground">MIT License</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#installation" className="hover:text-primary transition-colors">Install</a>
          <a href="#usage" className="hover:text-primary transition-colors">Usage</a>
          <a
            href="https://github.com/vinnytherobot/logscope"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          Made by{" "}
          <a href="https://github.com/vinnytherobot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            vinnytherobot
          </a>
        </p>
      </div>
    </footer>
  )
}