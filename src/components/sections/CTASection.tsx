import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/20 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/15 blur-[120px]" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-brand-magenta/10 blur-[100px]" />
      </div>

      <div className="container-tight relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-background mb-6">
            Let's Build Something Exceptional.
          </h2>
          <p className="text-lg text-background/60 max-w-xl mx-auto mb-10">
            Ready to turn your vision into a production-grade reality? Let's talk about what's next.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-background text-foreground px-6 py-3.5 text-sm font-semibold transition-all hover:gap-3"
          >
            Start Your Project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
