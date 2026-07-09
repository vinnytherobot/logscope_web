import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

const examples = [
  {
    category: "File Operations",
    commands: [
      { cmd: "logscope /var/log/syslog", desc: "Basic colorized output" },
      { cmd: "logscope backend.log --follow", desc: "Tail in real-time" },
      { cmd: "logscope production.log --level ERROR", desc: "Filter by level" },
      { cmd: 'logscope server.log --search "Connection Timeout"', desc: "Search text" },
      { cmd: "logscope archive/app.log.gz", desc: "Read gzip files" },
    ],
  },
  {
    category: "Piping & Stdin",
    commands: [
      { cmd: "kubectl logs my-pod -f | logscope", desc: "Kubernetes logs" },
      { cmd: "docker logs api-gateway | logscope --level CRITICAL", desc: "Docker logs" },
      { cmd: "cat nginx.log | grep -v GET | logscope --dashboard", desc: "Filtered dashboard" },
    ],
  },
  {
    category: "Advanced",
    commands: [
      { cmd: "logscope app.log --dashboard --follow", desc: "Live dashboard mode" },
      { cmd: "logscope failed_job.log --export-html report.html", desc: "Export to HTML" },
      { cmd: 'logscope noisy.log --search "healthcheck" --invert-match', desc: "Invert match" },
    ],
  },
];

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-all opacity-0 group-hover:opacity-100"
      title="Copy command"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
};

export function Usage() {
  return (
    <section className="py-24 px-6" id="usage">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Usage & <span className="text-secondary text-glow-magenta">Examples</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            From simple file reading to complex pipelines — logscope handles it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                {group.category}
              </h3>
              <div className="space-y-3">
                {group.commands.map((ex) => (
                  <div key={ex.cmd} className="group relative">
                    <p className="text-xs text-muted-foreground mb-1">{ex.desc}</p>
                    <code className="block text-xs font-mono text-accent bg-muted/50 rounded px-3 py-2 overflow-x-auto">
                      $ {ex.cmd}
                    </code>
                    <CopyButton text={ex.cmd} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
