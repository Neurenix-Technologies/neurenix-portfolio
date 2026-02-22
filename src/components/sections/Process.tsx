import { motion } from "framer-motion";
import { Search, Target, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", description: "Deep dive into your goals, users, and technical landscape." },
  { icon: Target, title: "Strategy", description: "Define architecture, timelines, and measurable success criteria." },
  { icon: Code2, title: "Engineering", description: "Iterative development with continuous feedback and testing." },
  { icon: Rocket, title: "Deployment", description: "Production launch with monitoring, CI/CD, and zero-downtime." },
  { icon: TrendingUp, title: "Optimization", description: "Ongoing performance tuning and feature evolution." },
];

const Process = () => {
  return (
    <section className="section-padding relative noise-bg">
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium text-brand-cyan tracking-widest uppercase mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            From Concept to Production
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-magenta" />

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-1 md:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-start gap-6 md:pl-0 py-6"
              >
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <step.icon size={20} className="text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
