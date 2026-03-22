import { motion } from "framer-motion";
import logoscopeLogo from "@/assets/logscope-logo.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(185 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 100% 50%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <motion.img
            src={logoscopeLogo}
            alt="LogScope Logo"
            className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div>
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight">
              <span className="text-primary text-glow-cyan">Log</span>
              <span className="text-secondary text-glow-magenta">Scope</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Beautiful, simple, and powerful log viewer for the terminal.
              Turn messy logs into structured, colorful, readable output.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-3 py-1 rounded-full text-xs font-mono border border-primary/30 text-primary bg-primary/5">Python 3.9+</span>
            <span className="px-3 py-1 rounded-full text-xs font-mono border border-accent/30 text-accent bg-accent/5">CLI — Typer</span>
            <span className="px-3 py-1 rounded-full text-xs font-mono border border-secondary/30 text-secondary bg-secondary/5">UI — Rich</span>
            <span className="px-3 py-1 rounded-full text-xs font-mono border border-muted-foreground/30 text-muted-foreground bg-muted/30">MIT License</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#installation"
              className="px-8 py-3 rounded-lg font-semibold text-primary-foreground bg-primary glow-cyan hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
            <a
              href="https://github.com/vinnytherobot/logscope"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-semibold border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              GitHub →
            </a>
          </div>
        </motion.div>

        {/* Terminal preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden border border-border bg-card">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-accent/50" />
              <div className="w-3 h-3 rounded-full bg-primary/50" />
              <span className="ml-2 text-xs font-mono text-muted-foreground">~ terminal</span>
            </div>
            <div className="p-5 font-mono text-sm leading-7 text-left overflow-x-auto">
              <div><span className="text-muted-foreground">$</span> <span className="text-accent">logscope</span> server.log --dashboard --follow</div>
              <div className="mt-3">
                <span className="text-muted-foreground">2025-03-22 09:15:32</span>{" "}
                <span className="text-primary">[INFO]</span>{" "}
                <span className="text-foreground">Server started on port</span>{" "}
                <span className="text-accent">:8080</span>
              </div>
              <div>
                <span className="text-muted-foreground">2025-03-22 09:15:33</span>{" "}
                <span className="text-accent">[DEBUG]</span>{" "}
                <span className="text-foreground">Loading config from</span>{" "}
                <span className="text-secondary">/etc/app/config.yaml</span>
              </div>
              <div>
                <span className="text-muted-foreground">2025-03-22 09:15:35</span>{" "}
                <span className="text-orange-400">[WARN]</span>{" "}
                <span className="text-foreground">Connection pool nearing limit</span>{" "}
                <span className="text-muted-foreground">(48/50)</span>
              </div>
              <div>
                <span className="text-muted-foreground">2025-03-22 09:15:38</span>{" "}
                <span className="text-destructive">[ERROR]</span>{" "}
                <span className="text-foreground">Timeout connecting to</span>{" "}
                <span className="text-primary">192.168.1.42</span>
              </div>
              <div className="mt-2 text-muted-foreground/50">
                ▌ Watching for changes...
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}