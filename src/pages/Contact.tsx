import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional(),
  budget: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
  honeypot: z.string().max(0),
});

type ContactFormData = z.infer<typeof contactSchema>;

const budgetOptions = [
  "Under $10K",
  "$10K – $25K",
  "$25K – $50K",
  "$50K – $100K",
  "$100K+",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return;
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="section-padding pt-32 md:pt-40">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <p className="text-xs font-medium text-brand-cyan tracking-widest uppercase mb-3">Contact</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                  Let's start a <span className="gradient-text">conversation</span>.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Tell us about your project. We'll respond within 24 hours with a tailored perspective on how we can help.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">hello@neurenix.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">San Francisco, CA</span>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                {submitted ? (
                  <div className="rounded-2xl border border-border/50 bg-card p-10 text-center">
                    <CheckCircle size={48} className="text-brand-cyan mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Received</h3>
                    <p className="text-sm text-muted-foreground">We'll be in touch within 24 hours. Thank you for reaching out.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-border/50 bg-card p-8 md:p-10 space-y-5">
                    {/* Honeypot */}
                    <input {...register("honeypot")} className="absolute opacity-0 pointer-events-none h-0 w-0" tabIndex={-1} autoComplete="off" />

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                      <input
                        {...register("name")}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                      <input
                        {...register("company")}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="Company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Budget Range</label>
                      <select
                        {...register("budget")}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      >
                        <option value="">Select a range</option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
