import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── EDIT: update the stats numbers and labels ──
const stats = [
  { num: 5000, suffix: "+", label: "Hours Dedicated" },
  { num: 250,  suffix: "+", label: "Programs Conducted" },
  { num: 100,  suffix: "+", label: "Organizations Partnered" },
  { num: 8,    suffix: "+", label: "Years of Experience" },
];

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <h3 className="font-serif text-4xl md:text-5xl text-primary mb-2">
                <Counter end={stat.num} suffix={stat.suffix} />
              </h3>
              <p className="text-sm md:text-base font-medium text-foreground/70 uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
