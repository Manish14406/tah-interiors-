import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const vp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } };
const vpLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } };
const vpRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } };

export function About() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Images */}
          <motion.div
            variants={vpLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4 mt-10">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80"
                alt="Interior Design"
                className="w-full h-56 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&q=80"
                alt="Modular Kitchen"
                className="w-full h-44 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80"
                alt="Bedroom"
                className="w-full h-44 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                alt="Commercial"
                className="w-full h-56 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Center Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-2xl shadow-2xl border border-[#E9DDC7] p-4 text-center w-28">
              <img src="/logo.png" alt="T.A.H Logo" className="h-10 mx-auto mb-2 object-contain" />
              <div className="font-ui font-bold text-[10px] uppercase tracking-widest text-[#B88A2A]">Est. 2015</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={vpRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="section-heading">Your Trusted Partner in Design &amp; Construction</h2>
            <div className="gold-line"></div>
            <p className="section-subheading mb-8">
              T.A.H Interior &amp; Builders is a complete design and construction company in Bangalore. We specialise in transforming spaces—from concept to handover—with custom designs, premium materials, and transparent pricing.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                'Residential Interiors', 'Commercial Interiors',
                'Restaurant & Café Design', 'Retail Shop Fit-outs',
                'Architectural 2D & 3D', 'Aluminium Kitchen Works',
                'Building Construction', 'Home Renovation',
                'Glass & Aluminium Works', 'Painting',
                'False Ceiling', 'Project Management',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-[#1F1F1F] font-medium">
                  <iconify-icon icon="lucide:check-circle-2" className="text-[#B88A2A] text-base shrink-0"></iconify-icon>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-10 py-8 border-y border-[#E9DDC7]">
              <div className="flex items-center gap-3">
                <div className="icon-gold"><iconify-icon icon="lucide:shield-check" className="text-xl"></iconify-icon></div>
                <div>
                  <div className="font-ui font-semibold text-sm text-[#1F1F1F]">Warranty</div>
                  <div className="text-xs text-[#5C5C5C]">Quality Assured</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon-gold"><iconify-icon icon="lucide:wrench" className="text-xl"></iconify-icon></div>
                <div>
                  <div className="font-ui font-semibold text-sm text-[#1F1F1F]">Maintenance</div>
                  <div className="text-xs text-[#5C5C5C]">Post-Handover Care</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon-gold"><iconify-icon icon="lucide:tags" className="text-xl"></iconify-icon></div>
                <div>
                  <div className="font-ui font-semibold text-sm text-[#1F1F1F]">Affordable</div>
                  <div className="text-xs text-[#5C5C5C]">Transparent Pricing</div>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-gold">Learn More About Us</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
