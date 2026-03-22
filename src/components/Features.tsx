import { motion } from "framer-motion";
import { Zap, Palette, FileJson, Sparkles, LayoutDashboard, FileCode, Filter, Terminal, Archive } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast & Lightweight",
    description: "Tail files natively or stream huge data via pipes. Zero overhead.",
    color: "text-accent" as const,
    glow: "glow-green" as const,
  },
  {
    icon: Palette,
    title: "Colored & Structured",
    description: "Auto-identifies INFO, WARNING, ERROR, CRITICAL, DEBUG with beautiful typography.",
    color: "text-primary" as const,
    glow: "glow-cyan" as const,
  },
  {
    icon: FileJson,
    title: "Universal Parser",
    description: "Reads bracket logs and parses NDJSON / JSON logs out of the box.",
    color: "text-secondary" as const,
    glow: "glow-magenta" as const,
  },
  {
    icon: Sparkles,
    title: "Auto-Highlighting",
    description: "Highlights IPs, URLs, timestamps, UUIDs, and emails with dynamic colors.",
    color: "text-primary" as const,
    glow: "glow-cyan" as const,
  },
  {
    icon: LayoutDashboard,
    title: "Live Dashboard",
    description: "Real-time log stream with a live statistics panel tracking error counts.",
    color: "text-accent" as const,
    glow: "glow-green" as const,
  },
  {
    icon: FileCode,
    title: "HTML Export",
    description: "Export beautiful log output directly to HTML to share with your team.",
    color: "text-secondary" as const,
    glow: "glow-magenta" as const,
  },
  {
    icon: Filter,
    title: "Powerful Filtering",
    description: "Filter by level, search by substring or regex, invert matches grep-style.",
    color: "text-accent" as const,
    glow: "glow-green" as const,
  },
  {
    icon: Terminal,
    title: "Plain Output",
    description: "Use --no-color for unstyled text when piping to other tools.",
    color: "text-primary" as const,
    glow: "glow-cyan" as const,
  },
  {
    icon: Archive,
    title: "Gzip Support",
    description: "Read .gz files directly—no manual zcat pipe needed.",
    color: "text-secondary" as const,
    glow: "glow-magenta" as const,
  },
];

export function Features() {
  return (
    <section className="py-24 px-6" id="features">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Features that <span className="text-primary text-glow-cyan">shine</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Everything you need to make sense of your logs, beautifully.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
            >
              <div className={`inline-flex p-2.5 rounded-lg bg-muted mb-4 ${feature.color}`}>
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}