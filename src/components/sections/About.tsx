import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="relative">
            {/* ── PHOTO: replace /images/about.png with your own image ── */}
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
              <img src="/images/about.png" alt="Wellness space" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}>
            {/* ── TEXT: edit this section's heading and body copy ── */}
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground leading-tight">
              We partner with organizations to create meaningful{" "}
              <span className="text-primary italic">wellness</span> experiences.
            </h2>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              In today's fast-paced corporate world, burnout is common. We bring a sanctuary of calm directly
              to your office. Our tailored programs reduce stress, improve focus, and enhance overall employee
              well-being through proven holistic practices.
            </p>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
