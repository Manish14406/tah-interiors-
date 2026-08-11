import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const servicesMenu = [
  { label: "Commercial Interior", id: "commercial-interior", featured: true },
  { label: "Residential Interior", id: "residential-interior", featured: true },
  { label: "Architectural Design", id: "architectural-design", featured: true },
  { label: "Aluminium Kitchen Works", id: "aluminium-kitchen", featured: true },
  { label: "Construction & Building", id: "construction", featured: false },
  { label: "Home Renovation", id: "home-renovation", featured: false },
  { label: "Glass & Aluminium", id: "glass-aluminium", featured: false },
  { label: "Outdoor & Pergola", id: "outdoor-structures", featured: false },
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
                  className="absolute top-full left-0 w-64 bg-[#FFFDF8] border border-[#E9DDC7] rounded-2xl shadow-2xl py-4 flex flex-col"
                  style={{ boxShadow: '0 24px 60px rgba(184,138,42,0.12)' }}
                >
                  {servicesMenu.map((link) => (
                    <Link
                      key={link.id}
                      to={`/service/${link.id}`}
                      className={`px-5 py-2 text-sm transition-colors flex items-center justify-between ${
                        link.featured
                          ? 'text-[#1F1F1F] font-semibold hover:text-[#B88A2A] hover:bg-[#FAF7F2]'
                          : 'text-[#5C5C5C] hover:text-[#B88A2A] hover:bg-[#FAF7F2]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <iconify-icon icon="lucide:chevron-right" className="text-[#B88A2A] text-xs"></iconify-icon>
                        {link.label}
                      </span>
                      {link.featured && (
                        <iconify-icon icon="lucide:star" className="text-[#D4AF37] text-xs shrink-0"></iconify-icon>
                      )}
                    </Link>
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
