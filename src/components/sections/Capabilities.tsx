import { motion } from "framer-motion";
import { Globe, BrainCircuit, Cloud, Building2, Cpu } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Platforms",
    description: "High-performance web applications built with modern architecture, optimized for scale and speed.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "Intelligent systems that streamline operations, from predictive analytics to custom ML pipelines.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Resilient cloud architecture on AWS, GCP, or Azure — designed for 99.99% uptime.",
  },
  {
    icon: Building2,
    title: "Enterprise Systems",
    description: "Mission-critical platforms with robust security, compliance, and seamless integration.",
  },
  {
    icon: Cpu,
    title: "Product Engineering",
    description: "End-to-end product development from ideation to market, built for performance and growth.",
  },
];

const Capabilities = () => {
  return (
    <section className="section-padding bg-card relative">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium text-brand-cyan tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Core Capabilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border/50 bg-surface-elevated p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-cyan/30"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 mb-5">
                  <service.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
