import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// ── EDIT: update title, description, and image for each signature program ──
const programs = [
  {
    image: "/images/sig1.png",        // replace with your own image in /public/images/
    alt: "Corporate Yoga",
    title: "Corporate Yoga Experience",
    description:
      "A holistic session integrating gentle warm-ups, body mobility, conscious breathwork, and deep relaxation. Designed to release physical tension built up during the workday and foster a sense of clarity.",
  },
  {
    image: "/images/sig2.png",        // replace with your own image in /public/images/
    alt: "Mindfulness & Meditation",
    title: "Mindfulness & Meditation Day",
    description:
      "A deeply immersive experience aimed at calming the mind and building inner resilience. Includes guided meditation, practical mindfulness tools, restorative sound healing, and a reflective sharing circle.",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-muted border-y border-border">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Signature Programs</h2>
          <p className="text-foreground/70 text-lg max-w-2xl">Immersive experiences crafted for corporate environments.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group bg-background rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={program.image} alt={program.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-serif text-2xl mb-4">{program.title}</h3>
                <p className="text-foreground/70 mb-8 leading-relaxed">{program.description}</p>
                <Button className="rounded-full bg-primary hover:bg-primary/90">Explore Program</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
