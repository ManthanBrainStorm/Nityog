import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// ── EDIT: update title and description for each reason ──
const reasons = [
  { title: "Holistic Approach", desc: "Focusing on mind, body & emotional well-being simultaneously." },
  { title: "Custom Programs", desc: "Tailored specifically to your team's culture and needs." },
  { title: "Expert Facilitators", desc: "Trained, compassionate & highly experienced practitioners." },
  { title: "On-Site Convenience", desc: "We bring the sanctuary to your workplace, anywhere." },
  { title: "Lasting Impact", desc: "Creating habits for better well-being and enhanced performance." },
  { title: "PAN India", desc: "Experience the wellness across the     NATION. " },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white">Why Organizations Choose Us</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">The Nityog difference.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl p-8 backdrop-blur-sm">
              <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-serif text-xl mb-2 text-white">{reason.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
