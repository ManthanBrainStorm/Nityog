// ── EDIT: update footer links and brand details ──
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.jpeg" alt="Nityog Logo" className="h-10 w-10 object-contain rounded-full" />
              <h3 className="font-serif text-2xl">Nityog</h3>
            </div>
            <p className="text-primary-foreground/80 max-w-sm">
              Transforming workplace culture through meaningful wellness experiences.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Connect</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>nityog.04@gmail.com</p>
              <p>+91 98263 96009</p>
              <p>Indore, M.P.</p>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Follow Us</h4>
            <a href="https://instagram.com/nityogstudio" target="_blank" rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent transition-colors block">
              Instagram: @nityogstudio
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/60">
          <p>&copy; 2026 Nityog. All rights reserved.</p>
          <p>Designed & Developed by Manthan and shreya.</p>
        </div>
      </div>
    </footer>
  );
}
