import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'commercial-interior',
    icon: 'lucide:building-2',
    title: 'Commercial Interior',
    desc: 'Restaurants, cafés, retail shops, offices & showrooms — theme-based commercial spaces built to impress and drive business.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80',
    badge: 'Popular',
    featured: true,
    link: '/service/commercial-interior',
  },
  {
    id: 'residential-interior',
    icon: 'lucide:home',
    title: 'Residential Interior',
    desc: 'Smart modular kitchens, wardrobes, living rooms, false ceilings — a complete home transformation.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80',
    badge: 'Flagship',
    featured: true,
    link: '/service/residential-interior',
  },
  {
    id: 'architectural-design',
    icon: 'lucide:drafting-compass',
    title: 'Architectural Design',
    desc: 'Precise 2D floor plans, elevation drawings, and photo-realistic 3D renders & walkthroughs for homes and commercial spaces.',
    image: '/images/arch-2d-design.png',
    badge: 'New',
    featured: true,
    link: '/service/architectural-design',
  },
  {
    id: 'aluminium-kitchen',
    icon: 'lucide:utensils',
    title: 'Aluminium Kitchen Works',
    desc: 'Rust-proof, termite-resistant aluminium modular kitchens with PU-coated shutters & soft-close mechanisms.',
    image: '/images/aluminium-kitchen.png',
    badge: 'Specialty',
    featured: true,
    link: '/service/aluminium-kitchen',
  },
  {
    id: 'construction',
    icon: 'lucide:hard-hat',
    title: 'Construction & Building',
    desc: 'House & villa construction, structural drawings, BBMP approvals, and full project management.',
    image: '/images/construction.png',
    featured: false,
    link: '/service/construction',
  },
  {
    id: 'home-renovation',
    icon: 'lucide:hammer',
    title: 'Home Renovation',
    desc: 'Kitchen & bathroom remodels, painting, waterproofing, flooring, and structural alterations.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80',
    featured: false,
    link: '/service/home-renovation',
  },
  {
    id: 'glass-aluminium',
    icon: 'lucide:layout-panel-left',
    title: 'Glass & Aluminium',
    desc: 'Toughened glass partitions, sliding doors, uPVC windows, ACP cladding, and metal fabrication.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
    featured: false,
    link: '/service/glass-aluminium',
  },
  {
    id: 'outdoor-structures',
    icon: 'lucide:tree-pine',
    title: 'Outdoor & Pergola',
    desc: 'Beautiful terrace pergolas, garden shade structures, gates, railings, and outdoor fabrication.',
    image: '/images/outdoor.png',
    featured: false,
    link: '/service/outdoor-structures',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export function ServicesOverview() {
  return (
    <section className="py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p className="section-eyebrow">Our Expertise</p>
            <h2 className="section-heading">Comprehensive Solutions Under One Roof</h2>
            <div className="gold-line"></div>
            <p className="section-subheading">From concept to creation — featuring our core interior & design specializations.</p>
          </div>
          <Link to="/services" className="btn-outline shrink-0 self-start md:self-auto">View All Services</Link>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((svc) => (
            <motion.div key={svc.id} variants={cardVariants} className="group">
              <Link
                to={svc.link || `/services#${svc.id}`}
                className={`block card-luxury overflow-hidden h-full transition-all duration-300 ${
                  svc.featured
                    ? 'ring-2 ring-[#B88A2A]/40 border-2 border-[#D4AF37]/60 bg-gradient-to-b from-[#FFFDF8] via-white to-white shadow-xl hover:shadow-2xl hover:border-[#B88A2A]'
                    : 'border border-[#E9DDC7]/70 bg-white shadow-sm hover:shadow-md'
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    onError={(e) => { e.currentTarget.src = '/images/arch-3d-render.png'; }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-400"></div>
                  
                  <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center shadow-md backdrop-blur-sm ${
                    svc.featured
                      ? 'bg-gradient-to-br from-[#D4AF37] to-[#B88A2A] text-white'
                      : 'bg-white/90 text-[#B88A2A]'
                  }`}>
                    <iconify-icon icon={svc.icon} className="text-xl"></iconify-icon>
                  </div>

                  {svc.badge && (
                    <div className={`absolute top-3 right-3 text-[10px] font-ui font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1 ${
                      svc.featured
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#B88A2A] text-white'
                        : 'bg-black/60 text-white backdrop-blur-sm'
                    }`}>
                      {svc.featured && <iconify-icon icon="lucide:sparkles" className="text-xs"></iconify-icon>}
                      {svc.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between" style={{ minHeight: '160px' }}>
                  <div>
                    {svc.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#B88A2A] mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B88A2A]"></span> Core Specialization
                      </span>
                    )}
                    <h3 className="font-serif font-bold text-lg text-[#1F1F1F] mb-2 group-hover:text-[#B88A2A] transition-colors leading-tight">{svc.title}</h3>
                    <p className="text-xs text-[#5C5C5C] leading-relaxed mb-3">{svc.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[#B88A2A] font-ui font-semibold text-xs group-hover:gap-3 transition-all duration-300">
                    Explore Service <iconify-icon icon="lucide:arrow-right"></iconify-icon>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
