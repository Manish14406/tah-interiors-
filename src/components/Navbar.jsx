import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const servicesMenu = [
  {
    title: "Residential Interior",
    links: [
      { label: "Modular Kitchen", id: "modular-kitchen" },
      { label: "Wardrobes", id: "wardrobes" },
      { label: "Living Room", id: "living-room" },
      { label: "Bedroom", id: "bedroom" },
      { label: "False Ceiling", id: "false-ceiling" },
      { label: "Wall Paneling", id: "wall-paneling" },
    ]
  },
  {
    title: "Construction",
    links: [
      { label: "House Construction", id: "house-construction" },
      { label: "Villa Construction", id: "villa-construction" },
      { label: "Building Plan", id: "building-plan" },
      { label: "Architecture", id: "architecture" },
      { label: "Project Management", id: "project-management" },
      { label: "Structural Drawing", id: "structural-drawing" },
    ]
  },
  {
    title: "Commercial & Renovation",
    links: [
      { label: "Office Interior", id: "office-interior" },
      { label: "Retail Stores", id: "retail-stores" },
      { label: "Home Renovation", id: "home-renovation" },
      { label: "Painting", id: "painting" },
      { label: "Waterproofing", id: "waterproofing" },
      { label: "Flooring & Tiles", id: "flooring" },
    ]
  },
  {
    title: "Specialised Works",
    links: [
      { label: "Glass & Partitions", id: "glass-aluminium" },
      { label: "uPVC Windows", id: "upvc-windows" },
      { label: "Pergola & Outdoor", id: "outdoor-structures" },
      { label: "Metal Fabrication", id: "metal-fabrication" },
      { label: "Printing & Branding", id: "printing" },
      { label: "Tile & Marble", id: "tile-marble" },
    ]
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
        transparent
          ? 'bg-transparent py-6'
          : 'bg-[#FFFDF8]/90 backdrop-blur-md shadow-sm border-b border-[#E9DDC7] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="relative h-10 w-10 bg-white rounded-lg p-1 shadow-sm border border-[#E9DDC7]">
            <img src="/logo.png" alt="T.A.H Logo" className="h-full w-full object-contain" />
          </div>
          <span className={`font-ui font-semibold text-base tracking-wide transition-colors ${transparent ? 'text-white' : 'text-[#1F1F1F]'}`}>
            T.A.H Interior
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className={transparent ? 'nav-link-hero' : 'nav-link'}>Home</Link>

          {/* Services with Mega Menu */}
          <div
            className="relative py-2"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className={`${transparent ? 'nav-link-hero' : 'nav-link'} flex items-center gap-1`}>
              Services
              <iconify-icon icon="lucide:chevron-down" className={`text-xs transition-transform ${megaOpen ? 'rotate-180' : ''}`}></iconify-icon>
            </button>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[820px] bg-[#FFFDF8] border border-[#E9DDC7] rounded-2xl shadow-2xl p-8 grid grid-cols-4 gap-6"
                  style={{ boxShadow: '0 24px 60px rgba(184,138,42,0.12)' }}
                >
                  {servicesMenu.map((group, i) => (
                    <div key={i}>
                      <h5 className="font-ui font-semibold text-xs tracking-widest uppercase text-[#B88A2A] mb-4 pb-2 border-b border-[#E9DDC7]">
                        {group.title}
                      </h5>
                      <ul className="space-y-2.5">
                        {group.links.map((link) => (
                          <li key={link.id}>
                            <Link
                              to={`/service/${link.id}`}
                              className="text-sm text-[#5C5C5C] hover:text-[#B88A2A] transition-colors flex items-center gap-1.5"
                            >
                              <iconify-icon icon="lucide:chevron-right" className="text-[#B88A2A] text-xs"></iconify-icon>
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/gallery" className={transparent ? 'nav-link-hero' : 'nav-link'}>Gallery</Link>
          <Link to="/about" className={transparent ? 'nav-link-hero' : 'nav-link'}>About</Link>
          <Link to="/contact" className={transparent ? 'nav-link-hero' : 'nav-link'}>Contact</Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:9738289434" className={`font-ui font-medium text-sm flex items-center gap-1.5 ${transparent ? 'text-white/90 hover:text-[#D4AF37]' : 'text-[#B88A2A] hover:text-[#A07820]'} transition-colors`}>
            <iconify-icon icon="lucide:phone" className="text-base"></iconify-icon>
            +91 97382 89434
          </a>
          <Link to="/contact" className="btn-gold py-2.5 px-5 text-sm">
            Book Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          <iconify-icon icon={mobileOpen ? 'lucide:x' : 'lucide:menu'} className={transparent ? 'text-white' : 'text-[#1F1F1F]'}></iconify-icon>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FFFDF8] border-t border-[#E9DDC7] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <Link to="/" className="nav-link text-base">Home</Link>
              <Link to="/services" className="nav-link text-base">All Services</Link>
              <Link to="/gallery" className="nav-link text-base">Gallery</Link>
              <Link to="/about" className="nav-link text-base">About</Link>
              <Link to="/contact" className="nav-link text-base">Contact</Link>
              <div className="pt-4 border-t border-[#E9DDC7]">
                <Link to="/contact" className="btn-gold w-full text-center">Book Free Consultation</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
