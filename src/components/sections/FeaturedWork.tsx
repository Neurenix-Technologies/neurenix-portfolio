import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Vertex Analytics Platform",
    category: "Web Platform · AI",
    description: "Real-time analytics dashboard processing 2M+ events daily with predictive insights.",
    tech: ["React", "Python", "AWS", "TensorFlow"],
    metric: "40% faster decision-making",
  },
  {
    title: "Lumina Health System",
    category: "Enterprise · Cloud",
    description: "HIPAA-compliant patient management platform serving 500+ healthcare providers.",
    tech: ["Next.js", "Go", "GCP", "PostgreSQL"],
    metric: "99.99% uptime achieved",
  },
  {
    title: "Orbital Commerce Engine",
    category: "Product Engineering",
    description: "Headless commerce platform handling $50M+ in annual transactions.",
    tech: ["TypeScript", "Node.js", "Redis", "Stripe"],
    metric: "3x conversion increase",
  },
];

const FeaturedWork = () => {
  return (
    <section className="section-padding relative noise-bg">
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-xs font-medium text-brand-cyan tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Featured Work
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to="/work"
                className="group block rounded-2xl border border-border/50 bg-card p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-xs font-medium text-brand-cyan mb-2">{project.category}</p>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                      <p className="text-2xl font-bold gradient-text">{project.metric}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                      <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
