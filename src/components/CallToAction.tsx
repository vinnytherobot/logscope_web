import { motion } from "framer-motion";
import { ExternalLink, Package } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-10 md:p-14 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Ready to <span className="text-primary text-glow-cyan">transform</span> your logs?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Install logscope in seconds and start reading your logs like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://pypi.org/project/logscope-cli/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-primary-foreground bg-primary glow-cyan hover:opacity-90 transition-opacity"
              >
                <Package className="w-4 h-4" />
                Install from PyPI
              </a>
              <a
                href="https://github.com/vinnytherobot/logscope"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View on GitHub
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground font-mono">
              pip install logscope-cli
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
