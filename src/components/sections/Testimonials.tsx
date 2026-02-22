import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Neurenix transformed our legacy platform into a system that actually scales. Their engineering depth is unmatched.",
    name: "Sarah Chen",
    position: "CTO, Vertex Analytics",
  },
  {
    quote: "They didn't just build software — they architected a growth engine. Our infrastructure costs dropped 60% while handling 10x the traffic.",
    name: "Marcus Rivera",
    position: "VP Engineering, Lumina Health",
  },
  {
    quote: "Working with Neurenix felt like having a world-class engineering team embedded in our company. Exceptional from day one.",
    name: "Elena Kowalski",
    position: "Founder, Orbital Commerce",
  },
];

const Testimonials = () => {
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
          <p className="text-xs font-medium text-brand-cyan tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What Our Partners Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border/50 bg-surface-elevated p-8 flex flex-col"
            >
              <Quote size={20} className="text-brand-cyan/40 mb-4" />
              <p className="text-sm text-foreground leading-relaxed flex-1 mb-6">
                "{item.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
