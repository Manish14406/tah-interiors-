import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }
});

const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Commercial', 'Construction', 'Outdoor'];

const projects = [
  { id: 1, category: 'Living Room', title: 'Modern Luxury Lounge', location: 'Whitefield', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&q=80' },
  { id: 2, category: 'Kitchen', title: 'Premium Modular Kitchen', location: 'Koramangala', image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=700&q=80' },
  { id: 3, category: 'Commercial', title: 'Corporate Office Interior', location: 'MG Road', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80' },
  { id: 4, category: 'Bedroom', title: 'Elegant Master Suite', location: 'Indiranagar', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80' },
  { id: 5, category: 'Construction', title: 'Villa Construction', location: 'Electronic City', image: 'https://images.unsplash.com/photo-1541888086925-0c144eb9857d?w=700&q=80' },
  { id: 6, category: 'Outdoor', title: 'Garden Pergola', location: 'Hebbal', image: 'https://images.unsplash.com/photo-1595844730298-b960fa25fa82?w=700&q=80' },
  { id: 7, category: 'Living Room', title: 'Minimalist Living Space', location: 'HSR Layout', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80' },
  { id: 8, category: 'Commercial', title: 'Premium Boutique Store', location: 'Brigade Road', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80' },
  { id: 9, category: 'Bedroom', title: 'Kids Room Design', location: 'Jayanagar', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=700&q=80' },
  { id: 10, category: 'Kitchen', title: 'Open Plan Kitchen', location: 'Marathahalli', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80' },
  { id: 11, category: 'Construction', title: 'Residential Building', location: 'Banashankari', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80' },
  { id: 12, category: 'Outdoor', title: 'Rooftop Terrace', location: 'JP Nagar', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80' },
];

export function GalleryPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative bg-[#1F1F1F] pt-36 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=60" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.p variants={fadeUp(0)} initial="hidden" animate="visible" className="font-ui font-semibold text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-4 flex items-center gap-3">
            <span className="block w-8 h-px bg-[#D4AF37]"></span> Our Portfolio
          </motion.p>
          <motion.h1 variants={fadeUp(0.1)} initial="hidden" animate="visible" className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight max-w-2xl">
            A Showcase of <span className="text-[#D4AF37] italic">Our Finest Work</span>
          </motion.h1>
          <motion.p variants={fadeUp(0.2)} initial="hidden" animate="visible" className="text-white/65 text-base max-w-xl leading-relaxed">
            Explore 100+ completed projects — residential interiors, commercial spaces, construction, and outdoor transformations across Bangalore.
          </motion.p>
        </div>
      </div>

      {/* ── Gallery ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-xs font-ui font-semibold tracking-wide transition-all border ${
                  active === cat
                    ? 'bg-[#B88A2A] text-white border-[#B88A2A]'
                    : 'bg-white text-[#5C5C5C] border-[#E9DDC7] hover:border-[#B88A2A] hover:text-[#B88A2A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border border-[#E9DDC7] shadow-sm"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-ui text-[10px] tracking-widest uppercase text-[#D4AF37] mb-1">{project.category} · {project.location}</p>
                    <h4 className="font-serif font-bold text-white text-sm leading-snug">{project.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="font-serif font-bold text-3xl text-[#1F1F1F] mb-4">Like What You See?</h2>
        <p className="text-[#5C5C5C] mb-8 max-w-md mx-auto text-sm">Let's create something beautiful for your home or business too.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-gold">Start Your Project</Link>
          <a href="tel:9738289434" className="btn-outline">Call Us Now</a>
        </div>
      </section>
    </div>
  );
}
