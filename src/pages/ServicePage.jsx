import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }
});

const getServiceDetails = (id) => {
  const images = {
    'residential-interior': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80',
    'commercial-interior': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    'construction': '/images/construction.png',
    'house-construction': '/images/construction.png',
    'villa-construction': '/images/construction.png',
    'building-plan': '/images/construction.png',
    'architecture': '/images/construction.png',
    'project-management': '/images/construction.png',
    'modular-kitchen': 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1600&q=80',
    'home-renovation': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&q=80',
    'glass-aluminium': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
    'outdoor-structures': '/images/outdoor.png',
    'gates-railings': '/images/outdoor.png',
    'printing': '/images/outdoor.png',
    'tile-marble': '/images/outdoor.png'
  };

  return {
    title: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    image: images[id] || 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80'
  };
};

export function ServicePage() {
  const { serviceId } = useParams();
  const { title, image } = getServiceDetails(serviceId);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* ── Hero Banner ── */}
      <div className="relative bg-[#1F1F1F] pt-36 pb-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={image} alt={title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.p variants={fadeUp(0)} initial="hidden" animate="visible" className="font-ui font-semibold text-xs tracking-[0.2em] uppercase text-[#D4AF37] justify-center mb-4 flex items-center gap-3">
            <span className="block w-8 h-px bg-[#D4AF37]"></span> Our Services
          </motion.p>
          <motion.h1 variants={fadeUp(0.1)} initial="hidden" animate="visible" className="font-serif font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight">
            Premium <span className="text-[#D4AF37] italic">{title}</span>
          </motion.h1>
          <motion.p variants={fadeUp(0.2)} initial="hidden" animate="visible" className="text-white/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Expertly crafted {title.toLowerCase()} solutions tailored to your unique requirements, delivered with flawless finishing across Bangalore.
          </motion.p>
        </div>
      </div>

      {/* ── Content Section ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-16 relative z-10 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl border border-[#E9DDC7] overflow-hidden"
        >
          <div className="p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Details */}
              <div>
                <h2 className="font-serif font-bold text-3xl text-[#1F1F1F] mb-6">Why Choose Us for {title}?</h2>
                <div className="gold-line"></div>
                <p className="text-sm text-[#5C5C5C] leading-relaxed mb-8">
                  T.A.H Interior & Builders specializes in providing top-tier {title.toLowerCase()} services. Our experienced in-house team uses premium materials and modern designs to ensure 100% customer satisfaction. We handle the entire process from conceptualization to final handover.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    'Customized designs tailored to your taste',
                    'Use of premium, certified materials only',
                    'Dedicated project manager for daily updates',
                    'Comprehensive warranty and post-handover support'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#1F1F1F]">
                      <iconify-icon icon="lucide:check-circle-2" className="text-[#B88A2A] text-lg shrink-0 mt-0.5"></iconify-icon>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-gold">Book Free Site Visit</Link>
                  <a href="tel:9738289434" className="btn-outline"><iconify-icon icon="lucide:phone"></iconify-icon> Call Now</a>
                </div>
              </div>

              {/* Right Images / Process */}
              <div className="space-y-6">
                <img src={image} alt={title} className="w-full h-64 object-cover rounded-xl shadow-md border border-[#E9DDC7]" />
                
                <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#E9DDC7]">
                  <h3 className="font-serif font-bold text-xl text-[#1F1F1F] mb-6 flex items-center gap-3">
                    <iconify-icon icon="lucide:clipboard-list" className="text-[#B88A2A]"></iconify-icon>
                    Our Process
                  </h3>
                  <div className="space-y-5 relative">
                    <div className="absolute left-3 top-2 bottom-2 w-px bg-[#E9DDC7]"></div>
                    {[
                      { step: '1', title: 'Free Consultation & Site Visit' },
                      { step: '2', title: '2D Layout & 3D Visualization' },
                      { step: '3', title: 'Material Selection & Finalization' },
                      { step: '4', title: 'Execution & Handover' },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4 relative pl-10">
                        <div className="absolute left-0 top-0 w-6 h-6 bg-[#B88A2A] text-white rounded-full flex items-center justify-center font-ui font-bold text-[10px]">
                          {item.step}
                        </div>
                        <div className="font-ui font-medium text-sm text-[#1F1F1F] mt-0.5">{item.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
}
