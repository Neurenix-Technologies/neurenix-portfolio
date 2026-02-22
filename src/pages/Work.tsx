import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";

const projects = [
  {
    title: "Vertex Analytics Platform",
    category: "Web Platform · AI",
    description: "Real-time analytics dashboard processing 2M+ events daily with predictive insights and custom visualization engine.",
    tech: ["React", "Python", "AWS", "TensorFlow"],
    challenge: "Legacy analytics tool couldn't handle growing data volume, causing 30-second load times.",
    solution: "Rebuilt from scratch with streaming architecture and pre-computed aggregations.",
    results: ["40% faster decisions", "2M+ daily events", "Sub-second load times"],
  },
  {
    title: "Lumina Health System",
    category: "Enterprise · Cloud",
    description: "HIPAA-compliant patient management platform serving 500+ healthcare providers across 12 states.",
    tech: ["Next.js", "Go", "GCP", "PostgreSQL"],
    challenge: "Fragmented patient records across multiple systems with no unified view.",
    solution: "Unified platform with real-time sync, role-based access, and audit trails.",
    results: ["99.99% uptime", "500+ providers", "HIPAA compliant"],
  },
  {
    title: "Orbital Commerce Engine",
    category: "Product Engineering",
    description: "Headless commerce platform handling $50M+ in annual transactions with sub-200ms response times.",
    tech: ["TypeScript", "Node.js", "Redis", "Stripe"],
    challenge: "Monolithic e-commerce platform limiting product innovation and checkout speed.",
    solution: "Microservices-based headless commerce with edge-cached product catalog.",
    results: ["3x conversion", "$50M+ transactions", "<200ms response"],
  },
  {
    title: "Praxis Workflow Engine",
    category: "AI · Automation",
    description: "AI-powered workflow automation platform reducing manual processing time by 85% for enterprise clients.",
    tech: ["Python", "React", "Kubernetes", "OpenAI"],
    challenge: "Manual document processing requiring 40+ hours per week across departments.",
    solution: "Custom NLP pipeline with intelligent routing and human-in-the-loop verification.",
    results: ["85% time saved", "99.2% accuracy", "24/7 processing"],
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="section-padding pt-32 md:pt-40">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-16">
              <p className="text-xs font-medium text-brand-cyan tracking-widest uppercase mb-3">Portfolio</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                Work that <span className="gradient-text">speaks</span> for itself.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A selection of projects where engineering excellence met real business impact.
              </p>
            </motion.div>

            <div className="space-y-8">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border/50 bg-card overflow-hidden"
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-xs font-medium text-brand-cyan mb-2">{project.category}</p>
                        <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                      </div>
                      <ArrowUpRight size={20} className="text-muted-foreground flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">{project.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Challenge</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Solution</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Results</p>
                        <div className="flex flex-wrap gap-2">
                          {project.results.map((r) => (
                            <span key={r} className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">{r}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
