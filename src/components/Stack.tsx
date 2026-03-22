import { motion } from "framer-motion";

const stack = [
  { name: "Rich", url: "https://github.com/Textualize/rich", desc: "UI Layouts, Colors, Highlighters, HTML Export", color: "text-secondary" },
  { name: "Typer", url: "https://github.com/tiangolo/typer", desc: "Modern, fast CLI creation", color: "text-accent" },
  { name: "typing-extensions", url: "https://github.com/python/typing_extensions", desc: "Typed CLI annotations on Python 3.9", color: "text-primary" },
  { name: "Pathlib / gzip", url: "#", desc: "File streaming & gzip text logs", color: "text-muted-foreground" },
];

export function Stack() {
  return (
    <section className="py-24 px-6" id="stack">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
            Built with <span className="text-primary text-glow-cyan">great tools</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stack.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-lg border border-border bg-card p-4 text-left hover:border-primary/30 transition-colors group"
            >
              <span className={`font-mono font-semibold text-sm ${item.color}`}>{item.name}</span>
              <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}