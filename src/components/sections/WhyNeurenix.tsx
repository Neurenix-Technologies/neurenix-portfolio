import { motion } from "framer-motion";
import { Layers, Zap, ShieldCheck, Wrench } from "lucide-react";

const differentiators = [
  {
    icon: Layers,
    title: "Scalable Architecture",
    statement: "Systems designed to grow with your business, from first user to first million.",
  },
  {
    icon: Zap,
    title: "Performance First",
    statement: "Every millisecond matters. We optimize at every layer of the stack.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    statement: "Zero-trust principles embedded from day one, not bolted on after launch.",
  },
  {
    icon: Wrench,
    title: "Long-Term Maintainability",
    statement: "Clean code, comprehensive docs, and architecture that evolves gracefully.",
  },
];

const WhyNeurenix = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium text-brand-cyan tracking-widest uppercase mb-3">Why Neurenix</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Built for Performance.<br />Designed for Growth.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-surface-elevated"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.statement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNeurenix;
