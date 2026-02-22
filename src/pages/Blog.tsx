import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const posts = [
  {
    title: "Why We Chose Rust for Our Edge Computing Layer",
    excerpt: "Performance-critical systems demand performance-critical tools. Here's how Rust transformed our edge infrastructure.",
    category: "Engineering",
    date: "Feb 12, 2026",
    readTime: "8 min read",
  },
  {
    title: "The Real Cost of Technical Debt",
    excerpt: "A data-driven analysis of how shortcuts compound and what forward-thinking teams do differently.",
    category: "Strategy",
    date: "Feb 5, 2026",
    readTime: "6 min read",
  },
  {
    title: "Building AI Systems That Actually Ship",
    excerpt: "Most AI projects stall in POC. We break down the engineering practices that get models into production.",
    category: "AI & ML",
    date: "Jan 28, 2026",
    readTime: "10 min read",
  },
  {
    title: "Zero-Downtime Migrations at Scale",
    excerpt: "How we migrated 200M records across databases without a single second of downtime.",
    category: "Infrastructure",
    date: "Jan 20, 2026",
    readTime: "7 min read",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="section-padding pt-32 md:pt-40">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-16">
              <p className="text-xs font-medium text-brand-cyan tracking-widest uppercase mb-3">Blog</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                Insights from the <span className="gradient-text">engineering floor</span>.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technical deep dives, engineering culture, and lessons from building production systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, i) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-2xl border border-border/50 bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
