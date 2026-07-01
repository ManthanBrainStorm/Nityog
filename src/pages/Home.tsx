import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { About } from "@/components/sections/About";
import { Experiences } from "@/components/sections/Experiences";
import { Programs } from "@/components/sections/Programs";
import { Gallery } from "@/components/sections/Gallery";
import { WhyUs } from "@/components/sections/WhyUs";
import { Story } from "@/components/sections/Story";
import { Stats } from "@/components/sections/Stats";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Experiences />
        <Programs />
        <Gallery />
        <WhyUs />
        <Story />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
