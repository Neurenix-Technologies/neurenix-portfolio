import { motion } from "framer-motion";
import { Globe, BrainCircuit, Cloud, Building2, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";

const services = [
  {
    icon: Globe,
    title: "Web Platforms",
    description: "Custom web applications, SaaS products, and progressive web apps built with React, Next.js, and modern frameworks. Optimized for performance, SEO, and conversion.",
    capabilities: ["Single Page Applications", "Progressive Web Apps", "E-commerce Platforms", "Content Management"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "From custom ML models to intelligent automation workflows. We build AI systems that deliver measurable business impact, not just buzzwords.",
    capabilities: ["Predictive Analytics", "NLP & Computer Vision", "Process Automation", "Recommendation Engines"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Production-grade cloud architecture designed for resilience, security, and cost efficiency. Multi-cloud expertise across AWS, GCP, and Azure.",
    capabilities: ["Infrastructure as Code", "Kubernetes & Docker", "CI/CD Pipelines", "Monitoring & Observability"],
  },
  {
    icon: Building2,
    title: "Enterprise Systems",
    description: "Mission-critical platforms with enterprise-grade security, compliance frameworks, and seamless integration with existing business systems.",
    capabilities: ["ERP Integration", "Identity & Access Management", "Compliance & Audit", "Legacy Modernization"],
  },
  {
    icon: Cpu,
    title: "Product Engineering",
    description: "Full-cycle product development from discovery to market. We help startups and enterprises build products that users love and markets reward.",
    capabilities: ["Product Strategy", "UX Research & Design", "MVP Development", "Growth Engineering"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="section-padding pt-32 md:pt-40">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-16">
              <p className="text-xs font-medium text-brand-cyan tracking-widest uppercase mb-3">Services</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                End-to-end engineering for the <span className="gradient-text">modern era</span>.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer a comprehensive suite of engineering services, each delivered with the same commitment to quality, performance, and long-term value.
              </p>
            </motion.div>

            <div className="space-y-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border/50 bg-card p-8 md:p-10"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <service.icon size={22} className="text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.capabilities.map((cap) => (
                          <span key={cap} className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 self-center">
                      <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
                        Discuss <ArrowRight size={14} />
                      </Link>
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

export default Services;
