import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Finally, a log viewer that makes debugging actually enjoyable. The color coding is a game-changer.",
    author: "DevOps Engineer",
    role: "SRE Team",
    rating: 5,
  },
  {
    quote: "I replaced my entire logging pipeline with a single pipe to logscope. Simple, fast, beautiful.",
    author: "Backend Developer",
    role: "Startup CTO",
    rating: 5,
  },
  {
    quote: "The dashboard mode is incredible for monitoring production issues in real-time. Can't go back.",
    author: "Platform Engineer",
    role: "Enterprise",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Loved by <span className="text-secondary text-glow-magenta">developers</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Join the community of developers who use logscope every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
