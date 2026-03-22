import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

const CodeBlock = ({ code, title }: { code: string; title?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-muted/50 border-b border-border">
          <span className="text-xs font-mono text-muted-foreground">{title}</span>
          <button
            onClick={handleCopy}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      )}
      <pre className="p-4 text-sm font-mono leading-7 overflow-x-auto text-foreground">
        {code}
      </pre>
    </div>
  );
};

export function Installation() {
  return (
    <section className="py-24 px-6" id="installation">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            <span className="text-accent text-glow-green">Installation</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Python 3.9+ and pip required. Up and running in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <CodeBlock
            title="bash"
            code={`# Clone the repository
git clone https://github.com/vinnytherobot/logscope.git
cd logscope

# Install via Poetry
poetry install
poetry run logscope --help

# Or install globally via pip
pip install -e .`
            }
          />
        </motion.div>
      </div>
    </section>
  )
}