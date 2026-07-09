import { Github, Package, Heart } from "lucide-react";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Installation", href: "#installation" },
  { label: "Usage", href: "#usage" },
  { label: "Stack", href: "#stack" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/vinnytherobot/logscope",
    icon: Github,
  },
  {
    label: "PyPI",
    href: "https://pypi.org/project/logscope-cli/",
    icon: Package,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + Description */}
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-lg">
              <span className="text-primary">Log</span>
              <span className="text-secondary">Scope</span>
            </span>
            <p className="text-xs text-muted-foreground mt-1 max-w-xs">
              Beautiful, simple, and powerful log viewer for the terminal.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-muted/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                title={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="flex items-center gap-1">
            MIT License · Made with <Heart className="w-3 h-3 text-secondary fill-secondary" /> by{" "}
            <a
              href="https://github.com/vinnytherobot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              vinnytherobot
            </a>
          </p>
          <p className="font-mono">
            pip install logscope-cli
          </p>
        </div>
      </div>
    </footer>
  )
}
