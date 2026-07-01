import { motion } from "framer-motion";

// ── EDIT: update name, image path, and benefits for each service card ──
// Images live in /public/images/ — replace the file keeping the same name, or change the path here
const services = [
  {
    name: "Yoga Experiences",
    image: "/images/gal1.png",
    benefits: ["Improves flexibility & posture", "Reduces workplace tension", "Boosts energy & clarity", "Strengthens body-mind connection"],
  },
  {
    name: "Meditation Journeys",
    image: "/images/gal2.png",
    benefits: ["Reduces stress & anxiety", "Enhances focus & productivity", "Builds emotional resilience", "Promotes deeper rest"],
  },
  {
    name: "Breathwork Sessions",
    image: "/images/gal3.png",
    benefits: ["Regulates the nervous system", "Increases oxygen & mental clarity", "Releases stored tension", "Elevates mood instantly"],
  },
  {
    name: "Ice Bath Recovery",
    image: "/images/gal4.png",
    benefits: ["Accelerates muscle recovery", "Sharpens mental toughness", "Boosts circulation & immunity", "Increases dopamine levels"],
  },
  {
    name: "Sound Healing",
    image: "/images/gal5.png",
    benefits: ["Deep relaxation response", "Clears mental chatter", "Harmonizes energy & mood", "Enhances team bonding"],
  },
  {
    name: "Team Wellness Days",
    image: "/images/sig1.png",
    benefits: ["Improves team cohesion", "Reduces collective burnout", "Sparks creativity & innovation", "Creates lasting wellness habits"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Experiences() {
  return (
    <section id="experiences" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Experiences We Bring</h2>
          <p className="text-foreground/70 text-lg">Curated practices designed to restore balance and elevate energy within your teams.</p>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
              style={{ height: "300px" }}>
              <img src={service.image} alt={service.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Default state: name at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl text-white font-medium">{service.name}</h3>
              </div>
              {/* Hover state: dark overlay with benefits */}
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-center px-6 py-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="font-serif text-xl text-white font-medium mb-4">{service.name}</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/90 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
