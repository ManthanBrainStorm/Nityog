import { motion } from "framer-motion";

const experiences = [
  {
    title: "Yoga Sessions",
    subtitle: "Flexibility • Recovery",
    image: "/images/Retreats/yoga.webp",
    benefit:
      "Improve posture, flexibility and reduce workplace stress through guided yoga sessions.",
  },
  {
    title: "Breathwork",
    subtitle: "Focus • Calm",
    image: "/images/Retreats/breathwork.webp",
    benefit:
      "Enhance focus, emotional balance and energy with conscious breathing techniques.",
  },
  {
    title: "Sound Therapy",
    subtitle: "Healing • Relaxation",
    image: "/images/Retreats/soundtherapy.webp",
    benefit:
      "Deep relaxation through healing frequencies that calm the nervous system.",
  },
  {
    title: "Ice Bath",
    subtitle: "Recovery • Resilience",
    image: "/images/Retreats/icebath.webp",
    benefit:
      "Improve resilience, recovery and mental toughness with guided cold exposure.",
  },
  {
    title: "Mindfulness",
    subtitle: "Awareness • Balance",
    image: "/images/Retreats/mindfulness.webp",
    benefit:
      "Cultivate awareness and emotional wellbeing through mindfulness practices.",
  },
  {
    title: "Team Building",
    subtitle: "Trust • Collaboration",
    image: "/images/Retreats/teambuilding.webp",
    benefit:
      "Meaningful collaborative activities that strengthen trust and communication.",
  },
  {
    title: "Stress Management",
    subtitle: "Resilience • Performance",
    image: "/images/Retreats/stress.webp",
    benefit:
      "Practical techniques employees can use every day to reduce stress.",
  },
];

export function Programs() {
  return (
    <section
      id="programs"
      className="py-24 bg-muted border-y border-border"
    >
      <div className="container mx-auto px-6">

        {/* ================= Heading ================= */}

        <div className="max-w-3xl mx-auto text-center mb-24">

          <span className="uppercase tracking-[0.25em] text-primary text-sm font-semibold">
            Programs
          </span>

          <h2 className="font-serif text-5xl mt-5 mb-6">
            Wellness Experiences Designed
            <br />
            For Modern Workplaces
          </h2>

          <p className="text-lg text-foreground/70 leading-8">
            From immersive corporate wellness retreats to flagship
            community experiences, every program is designed to improve
            wellbeing, strengthen teams and inspire healthier lifestyles.
          </p>

        </div>

        {/* ================= Corporate Retreat ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >

          {/* Left */}

          <div>

            <span className="uppercase tracking-[0.2em] text-primary text-sm font-semibold">
              Corporate Wellness Retreats
            </span>

            <h3 className="font-serif text-5xl mt-5 mb-6">
              Wellness Beyond
              <br />
              The Workplace
            </h3>

            <p className="text-lg text-foreground/70 leading-8">
              We curate immersive corporate wellness retreats where
              movement, mindfulness and nature come together to improve
              productivity, reduce stress and build healthier teams.
            </p>

          </div>

          {/* Right */}

          <div className="overflow-hidden rounded-[2rem] shadow-xl">

            <img
              src="/images/Retreats/retreat1.webp"
              alt="Corporate Retreat"
              className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
            />

          </div>

        </motion.div>

        {/* ================= Experiences ================= */}

        <div className="mt-20">

          <div className="flex items-center justify-between mb-10">

            <div>

              <h3 className="font-serif text-3xl">
                Retreat Experiences
              </h3>

              <p className="text-foreground/60 mt-2">
                Every retreat is fully customizable based on your team.
              </p>

            </div>

          </div>

          <div className="relative">



            <div
              id="retreat-scroll"
              className="
    flex
    gap-8
    overflow-x-auto
    pb-6
    no-scrollbar
    cursor-grab
    active:cursor-grabbing
    
    px-2
  "
            >
              {experiences.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group min-w-[300px] max-w-[300px] overflow-hidden rounded-[1.8rem] bg-background border border-border shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="relative h-56 overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={224}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">

                      <p className="text-white text-sm leading-6">
                        {item.benefit}
                      </p>

                    </div>

                  </div>

                  <div className="p-5">

                    <h4 className="font-semibold text-lg mb-2">
                      {item.title}
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>

                  </div>

                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= Signature Events ================= */}

          <div className="mt-32">

            <div className="text-center mb-16">

              <span className="uppercase tracking-[0.25em] text-primary text-sm font-semibold">
                Signature Events
              </span>

              <h3 className="font-serif text-5xl mt-5">
                Experiences That Bring
                <br />
                Communities Together
              </h3>

              <p className="text-foreground/70 mt-6 max-w-2xl mx-auto leading-8">
                Our flagship events celebrate yoga, mindfulness and holistic
                wellbeing through immersive community experiences.
              </p>

            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* ================= YogUtsav ================= */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-[2rem] bg-background border border-border shadow-sm hover:shadow-xl transition-all duration-500"
              >

                <div className="relative h-[380px] overflow-hidden">

                  <img
                    src="/images/events/yogutsav.webp"
                    alt="YogUtsav"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute top-5 left-5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-semibold">
                    Flagship Event
                  </div>

                </div>

                <div className="p-8">

                  <h4 className="font-serif text-3xl mb-4">
                    YogUtsav
                  </h4>

                  <p className="text-foreground/70 leading-8 mb-8">
                    A celebration of yoga, mindfulness and community through immersive
                    wellness experiences, workshops and inspiring sessions.
                  </p>

                  <a
                    href="#gallery"
                    className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all"
                  >
                    View Highlights →
                  </a>

                </div>

              </motion.div>

              {/* ================= Meditation Day ================= */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-[2rem] bg-background border border-border shadow-sm hover:shadow-xl transition-all duration-500"
              >

                <div className="relative h-[380px] overflow-hidden">

                  <img
                    src="/images/events/meditation.webp"
                    alt="Meditation Day"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute top-5 right-5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-semibold">
                    Coming Soon
                  </div>

                </div>

                <div className="p-8">

                  <h4 className="font-serif text-3xl mb-4">
                    Meditation Day
                  </h4>

                  <p className="text-foreground/70 leading-8">
                    A restorative day focused on meditation, breath awareness, sound
                    healing and mindful practices for individuals and corporate teams.
                  </p>

                </div>

              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>

  );
}
