import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }
});

const allServices = [
  {
    category: 'Residential Interior',
    icon: 'lucide:home',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80',
    items: [
      { id: 'modular-kitchen', name: 'Modular Kitchen', desc: 'L-shaped, U-shaped, parallel & island kitchens with premium finishes.' },
      { id: 'wardrobes', name: 'Wardrobes & Storage', desc: 'Sliding, swing & walk-in wardrobes with smart storage solutions.' },
      { id: 'living-room', name: 'Living Room Design', desc: 'TV units, feature walls, seating arrangements & complete living spaces.' },
      { id: 'bedroom', name: 'Bedroom Design', desc: 'Master, guest & kids bedroom designs with custom furniture.' },
      { id: 'false-ceiling', name: 'False Ceiling & Lighting', desc: 'Gypsum, POP, wooden & grid false ceilings with ambient lighting.' },
      { id: 'wall-paneling', name: 'Wall Paneling & Wallpaper', desc: 'Decorative wall panels, textured wallpapers & accent walls.' },
    ]
  },
  {
    category: 'Commercial Interior',
    icon: 'lucide:building-2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
    items: [
      { id: 'office-interior', name: 'Office Interior', desc: 'Modern workspaces, cabins, conference rooms & reception areas.' },
      { id: 'retail-stores', name: 'Retail & Showrooms', desc: 'Premium retail fit-outs for shops, boutiques & showrooms.' },
      { id: 'restaurants', name: 'Restaurants & Cafes', desc: 'Theme-based dining spaces with custom furniture & lighting.' },
      { id: 'clinics', name: 'Clinics & Hospitals', desc: 'Hygienic, calming medical interiors for hospitals & clinics.' },
    ]
  },
  {
    category: 'Construction & Architecture',
    icon: 'lucide:hard-hat',
    image: '/images/construction.png',
    items: [
      { id: 'house-construction', name: 'House Construction', desc: 'Complete residential building construction from foundation to finish.' },
      { id: 'villa-construction', name: 'Villa Construction', desc: 'Luxury villa construction with premium materials and modern design.' },
      { id: 'building-plan', name: 'Building Plan & Approval', desc: 'Architectural plans, BBMP approvals & structural drawings.' },
      { id: 'architecture', name: 'Architecture & Design', desc: '3D architectural visualizations, floor plans & working drawings.' },
      { id: 'project-management', name: 'Project Management', desc: 'End-to-end site supervision and construction management.' },
    ]
  },
  {
    category: 'Renovation & Repair',
    icon: 'lucide:hammer',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=700&q=80',
    items: [
      { id: 'home-renovation', name: 'Home Renovation', desc: 'Complete home makeovers including civil, electrical & plumbing.' },
      { id: 'kitchen-remodel', name: 'Kitchen Remodelling', desc: 'Full kitchen renovation with new layout, tiles, plumbing & fixtures.' },
      { id: 'bathroom-renovation', name: 'Bathroom Renovation', desc: 'Premium bathroom transformation with modern fixtures & tiling.' },
      { id: 'painting', name: 'Interior & Exterior Painting', desc: 'Professional painting services with premium brands like Asian Paints.' },
      { id: 'waterproofing', name: 'Waterproofing', desc: 'Terrace, bathroom & wall waterproofing with long-term warranties.' },
      { id: 'flooring', name: 'Flooring & Tile Work', desc: 'Marble, vitrified, wooden & vinyl flooring installation.' },
    ]
  },
  {
    category: 'Glass & Aluminium',
    icon: 'lucide:layout-panel-left',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
    items: [
      { id: 'glass-aluminium', name: 'Glass Partitions', desc: 'Toughened & frosted glass partitions for offices and homes.' },
      { id: 'upvc-windows', name: 'uPVC Windows & Doors', desc: 'Energy-efficient uPVC systems for homes and commercial spaces.' },
      { id: 'acp-cladding', name: 'ACP Cladding', desc: 'Aluminium composite panel cladding for exterior facades.' },
      { id: 'metal-fabrication', name: 'Metal Fabrication', desc: 'Custom SS railings, gates, grills & structural steel work.' },
    ]
  },
  {
    category: 'Outdoor & Printing',
    icon: 'lucide:tree-pine',
    image: '/images/outdoor.png',
    items: [
      { id: 'outdoor-structures', name: 'Pergola & Shade Structures', desc: 'Garden pergolas, patio covers & outdoor shade structures.' },
      { id: 'gates-railings', name: 'Gates & Railings', desc: 'MS & SS compound gates, staircase railings & balcony railing.' },
      { id: 'printing', name: 'Printing & Branding', desc: 'Flex boards, backlit signage, vinyl wraps & office branding.' },
      { id: 'tile-marble', name: 'Tile & Marble Work', desc: 'Premium marble, granite & tile laying for all areas.' },
    ]
  },
];

export function ServicesPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative bg-[#1F1F1F] pt-36 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=60" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.p variants={fadeUp(0)} initial="hidden" animate="visible" className="font-ui font-semibold text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-4 flex items-center gap-3">
            <span className="block w-8 h-px bg-[#D4AF37]"></span> Our Services
          </motion.p>
          <motion.h1 variants={fadeUp(0.1)} initial="hidden" animate="visible" className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight max-w-3xl">
            Comprehensive Design &amp; Construction <span className="text-[#D4AF37] italic">Solutions</span>
          </motion.h1>
          <motion.p variants={fadeUp(0.2)} initial="hidden" animate="visible" className="text-white/65 text-base max-w-xl leading-relaxed mb-8">
            From residential interiors to full building construction — every service you need, delivered with artisanal quality across Bangalore.
          </motion.p>
          <motion.div variants={fadeUp(0.3)} initial="hidden" animate="visible" className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-gold">Get Free Quote</Link>
            <a href="tel:9738289434" className="btn-outline-white">Call Now</a>
          </motion.div>
        </div>
      </div>

      {/* ── Service Categories ── */}
      {allServices.map((group, gi) => (
        <section key={group.category} className={`py-20 ${gi % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F2]'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-12 items-start">

              {/* Category header */}
              <motion.div
                variants={fadeUp(0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:w-72 shrink-0"
              >
                <div className="sticky top-28">
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6 shadow-lg">
                    <img src={group.image} alt={group.category} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                      <iconify-icon icon={group.icon} className="text-3xl text-[#D4AF37]"></iconify-icon>
                    </div>
                  </div>
                  <h2 className="font-serif font-bold text-2xl text-[#1F1F1F] mb-3">{group.category}</h2>
                  <div className="gold-line"></div>
                  <Link to="/contact" className="btn-gold w-full text-center py-3 text-sm mt-4">
                    Get Quote
                  </Link>
                </div>
              </motion.div>

              {/* Service items grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    variants={fadeUp(i * 0.08)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Link to={`/service/${item.id}`} className="block card-luxury p-6 h-full group">
                      <h3 className="font-serif font-bold text-lg text-[#1F1F1F] group-hover:text-[#B88A2A] transition-colors mb-2">{item.name}</h3>
                      <p className="text-sm text-[#5C5C5C] leading-relaxed mb-4">{item.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-[#B88A2A] font-ui font-semibold text-xs group-hover:gap-3 transition-all duration-300">
                        Learn More <iconify-icon icon="lucide:arrow-right"></iconify-icon>
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="py-20 bg-[#1F1F1F] text-center px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">Ready to Get Started?</h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">Book a free site visit and let our experts design your dream space.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-gold">Book Free Consultation</Link>
          <a href="https://wa.me/919738289434" target="_blank" rel="noopener noreferrer" className="btn-outline-white">WhatsApp Us</a>
        </div>
      </section>
    </div>
  );
}
