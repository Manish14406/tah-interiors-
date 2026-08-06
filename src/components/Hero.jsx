export function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#1a1814]">
      {/* Parallax Background Image - Interior Design */}
      <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80" alt="T.A.H Interior Builder's" className="parallax-hero opacity-80" />
      
      {/* Dark Overlay with subtle gold tint */}
      <div className="absolute inset-0 bg-[#1a1814]/60 z-10 mix-blend-multiply"></div>
      
      {/* Floating Side Label */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 side-label text-[#d4af37]">
        BESPOKE INTERIOR ARCHITECTURE
      </div>
      
      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-between px-12 py-16">
        {/* Massive Title / Logo */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <img src="/logo.png" alt="T.A.H Logo" className="w-64 md:w-96 mb-8 drop-shadow-2xl" />
          <h1 className="text-3xl md:text-5xl font-bold text-[#d4af37] text-center tracking-widest uppercase">
            Interior Builder's
          </h1>
        </div>
        
        {/* Bottom Content */}
        <div className="flex items-end justify-between">
          <div className="max-w-xl">
            <p className="text-[#fdfbf7]/90 text-xl leading-relaxed mb-8">
              Crafting luxurious, functional, and cinematic living spaces tailored to your unique lifestyle.
            </p>
            <div className="flex gap-4">
              <button className="btn-primary" id="hero-book-consultation">BOOK CONSULTATION</button>
              <button className="btn-secondary" id="hero-view-projects">VIEW PROJECTS</button>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[#d4af37] text-sm mb-2 tracking-wider">CALL US</div>
            <a href="tel:8553738588" id="hero-phone" className="text-[#fdfbf7] text-3xl font-semibold tracking-tight hover:text-[#d4af37] transition-colors">8553738588</a>
          </div>
        </div>
      </div>
    </section>
  );
}
