// ── EDIT: add or remove company names from the logos array ──
const logos = [
  "AYM Yoga School", "INMO", "Cult Gym", "Kendriya Vidhyalaya", "Decathalon", "Radisson Hotel","UD Creation","Kid Foundation International School","Ananta Spa",
  "AYM Yoga School", "INMO", "Cult Gym", "Kendriya Vidhyalaya", "Decathalon", "Radisson Hotel","UD Creation","Kid Foundation International School","Ananta Spa",
];

export function TrustedBy() {
  return (
    <section className="py-12 border-b border-border bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-center text-sm font-medium text-foreground/50 tracking-widest uppercase">
          TRUSTED BY FORWARD-THINKING ORGANIZATIONS
        </p>
      </div>
      <div className="relative flex w-full">
        <div className="animate-marquee flex whitespace-nowrap">
          {logos.map((logo, i) => (
            <span key={i} className="mx-12 font-serif text-2xl text-foreground/30 font-bold tracking-tight">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
