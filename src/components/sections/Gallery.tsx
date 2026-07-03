import { motion } from "framer-motion";

// ── EDIT: add/remove images from this list. Files must be placed in /public/images/ ──
const images = [
  "/images/gal1.png",
  "/images/gal2.png",
  "/images/gal3.png",
  "/images/gal4.png",
  "/images/gal5.png",
  "/images/gal6.png",
  "/images/gal7.png",
  "/images/gal8.png",
  "/images/gal9.png",
  "/images/gal10.png", ];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center">Moments From Our Gatherings</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden">
              <img src={src} alt={`Gallery ${i + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t
from-black/80
via-black/20
to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
