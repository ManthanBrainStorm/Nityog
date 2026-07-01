import { motion } from "framer-motion";

export function Story() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative">
            {/* ── PHOTO: replace /images/story.png with the founder's portrait ── */}
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden">
              <img src="/images/story.png" alt="Nitya Soni" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Our Story</span>
            {/* ── TEXT: edit the story heading and paragraphs below ── */}
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Rooted in passion. <br />
              <span className="text-primary italic">Driven by purpose.</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Founded by Nitya Soni, a passionate Yogapreneur, wellness practitioner, yoga therapist, and mindfulness teacher.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              With over 8 years of experience dedicated to transforming lives through holistic well-being, Nityog was born
              out of a desire to make ancient wisdom accessible and practical for modern, high-performing corporate teams.
            </p>
            <div className="pt-8 border-t border-border">
              <p className="font-serif text-2xl text-foreground">
                Nitya Soni <span className="text-primary font-sans text-lg ml-2">नित्योग</span>
              </p>
              <p className="text-sm text-foreground/50 mt-1">Founder, Nityog Studio</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
