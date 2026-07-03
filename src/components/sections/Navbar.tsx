import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Programs", "About", "Gallery", "Contact"];

  const whatsappLink =
    "https://wa.me/919826396009?text=Hi%20Nityog,%20I'm%20interested%20in%20your%20Corporate%20Wellness%20Retreats.";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="Nityog Logo"
            className="h-12.5 w-12.5 object-contain rounded-full"
          />

          <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">
            Nityog
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8.5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium tracking-wide text-foreground hover:text-primary transition-all duration-300"
            >
              {link}
            </a>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-6">
              
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors block py-2"
                >
                  {link}
                </a>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-secondary text-secondary-foreground w-full rounded-full mt-4">
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}