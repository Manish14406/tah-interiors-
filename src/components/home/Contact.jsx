import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const vp = (dir = 0) => ({
  hidden: { opacity: 0, x: dir },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
});

export function Contact() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', details: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^[0-9\+\-\s\(\)]{10,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/[^0-9]/g, ''))) {
      setError('Please enter a valid phone number (min 10 digits).');
      return;
    }
    setError('');
    
    const text = `Hi T.A.H Interior & Builders! I'd like to request a free quote.
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Details:* ${formData.details}`;
    
    window.open(`https://wa.me/919738289434?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-28 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Info */}
          <motion.div
            variants={vp(-40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="section-eyebrow">Start Your Project</p>
            <h2 className="section-heading">Let's Discuss Your Vision</h2>
            <div className="gold-line"></div>
            <p className="section-subheading mb-10">
              Whether you're planning a luxury home renovation, new construction, or premium modular interiors, our team is ready to turn your vision into reality.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: 'lucide:phone',        label: 'Phone Number',    value: '+91 97382 89434',        href: 'tel:9738289434',                color: '#6B8CAE', anim: 'icon-bounce' },
                { icon: 'lucide:mail',         label: 'Email Address',   value: 'tahinterior@gmail.com',  href: 'mailto:tahinterior@gmail.com',  color: '#D4AF37', anim: 'icon-float'  },
                { icon: 'lucide:map-pin',      label: 'Studio Location', value: 'Bangalore, Karnataka',   href: null,                            color: '#C47B3B', anim: 'icon-pulse'  },
                { icon: 'lucide:globe',        label: 'Website',         value: 'www.tahinterior.com',    href: 'https://www.tahinterior.com',   color: '#7A9E7E', anim: 'icon-float'  },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${item.anim}`}
                    style={{ background: `${item.color}18`, border: `1.5px solid ${item.color}44` }}
                  >
                    <iconify-icon icon={item.icon} className="text-xl" style={{ color: item.color }}></iconify-icon>
                  </div>
                  <div>
                    <div className="font-ui font-semibold text-sm text-[#1F1F1F] mb-0.5">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="text-sm text-[#5C5C5C] hover:text-[#B88A2A] transition-colors">{item.value}</a>
                      : <span className="text-sm text-[#5C5C5C]">{item.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="tel:9738289434" className="btn-gold py-3 px-6 text-sm">
                <iconify-icon icon="lucide:phone"></iconify-icon> Call Now
              </a>
              <a href="https://wa.me/919738289434" target="_blank" rel="noopener noreferrer" className="btn-outline py-3 px-6 text-sm">
                <iconify-icon icon="lucide:message-circle"></iconify-icon> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={vp(40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#1F1F1F] rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <h3 className="font-serif font-bold text-2xl text-[#FFFDF8] mb-2">Request a Free Quote</h3>
            <p className="text-sm text-white/60 mb-8">We'll respond within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs px-4 py-2 rounded">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-ui font-semibold text-[#B88A2A] tracking-wider mb-2">Full Name *</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Your name" className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-[#B88A2A] text-sm transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-ui font-semibold text-[#B88A2A] tracking-wider mb-2">Phone Number *</label>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+91" className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-[#B88A2A] text-sm transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-ui font-semibold text-[#B88A2A] tracking-wider mb-2">Service Required</label>
                <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#B88A2A] text-sm transition-colors appearance-none">
                  <option value="" className="text-gray-800">Select a service</option>
                  <option value="Residential Interior" className="text-gray-800">Residential Interior</option>
                  <option value="Commercial Interior" className="text-gray-800">Commercial Interior</option>
                  <option value="Construction & Architecture" className="text-gray-800">Construction & Architecture</option>
                  <option value="Home Renovation" className="text-gray-800">Home Renovation</option>
                  <option value="Other" className="text-gray-800">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-ui font-semibold text-[#B88A2A] tracking-wider mb-2">Project Details</label>
                <textarea value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} placeholder="Describe your requirements..." className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/35 focus:outline-none focus:border-[#B88A2A] text-sm min-h-[110px] resize-y transition-colors"></textarea>
              </div>

              <button type="submit" className="btn-gold w-full py-3.5 text-sm">
                Submit via WhatsApp <iconify-icon icon="lucide:message-circle"></iconify-icon>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
