import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/hero.webp"
          alt="Corporate Wellness Retreat"
          className="w-full h-full object-cover"
        />

        {/* Better overlays */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 mb-8">
            <span className="text-white text-sm tracking-wide">
              Corporate Wellness Retreats
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-white mb-8">
            Transform Your Workplace
            <br />
            Through
            <span className="text-primary italic"> Wellness</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10">
            Curated yoga retreats, mindfulness workshops and wellness
            experiences that help organizations reduce stress, strengthen team
            culture and build healthier workplaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
           <a href="#contact">
              <Button 
              size="lg"
              className="rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-white"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-xs tracking-[0.3em] uppercase mb-2">
            Scroll
          </span>

          <div className="w-[1px] h-10 bg-white/40" />
        </div>
      </motion.div>
    </section>
  );
}