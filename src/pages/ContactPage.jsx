import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }
});

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', location: '', details: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^[0-9\+\-\s\(\)]{10,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/[^0-9]/g, ''))) {
      setError('Please enter a valid phone number (min 10 digits).');
      return;
    }
    setError('');
    
    // Redirect to WhatsApp
    const text = `Hi T.A.H Interior & Builders! I'd like to request a quote.
*Name:* ${formData.name}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ''}*Service:* ${formData.service || 'Not specified'}
${formData.location ? `*Location:* ${formData.location}\n` : ''}*Details:* ${formData.details}`;
    
    window.open(`https://wa.me/919738289434?text=${encodeURIComponent(text)}`, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: '', location: '', details: '' });
    }, 4000);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative bg-[#1F1F1F] pt-36 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=60" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.p variants={fadeUp(0)} initial="hidden" animate="visible" className="font-ui font-semibold text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-4 flex items-center gap-3">
            <span className="block w-8 h-px bg-[#D4AF37]"></span> Contact Us
          </motion.p>
          <motion.h1 variants={fadeUp(0.1)} initial="hidden" animate="visible" className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight max-w-2xl">
            Let's Build Something <span className="text-[#D4AF37] italic">Beautiful Together</span>
          </motion.h1>
          <motion.p variants={fadeUp(0.2)} initial="hidden" animate="visible" className="text-white/65 text-base max-w-xl leading-relaxed">
            Reach out for a free site visit, quote, or consultation. We're available 7 days a week across Bangalore.
          </motion.p>
        </div>
      </div>

      {/* ── Contact Info + Form ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Info */}
          <motion.div variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="section-eyebrow">Reach Us</p>
            <h2 className="section-heading">We'd Love to Hear From You</h2>
            <div className="gold-line"></div>
            <p className="section-subheading mb-10">
              Whether you're planning a complete renovation, new construction, or just looking for inspiration — our experts are happy to guide you.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: 'lucide:phone',          label: 'Phone Number',   value: '+91 97382 89434',          href: 'tel:9738289434' },
                { icon: 'lucide:message-circle',  label: 'WhatsApp',       value: '+91 97382 89434',          href: 'https://wa.me/919738289434' },
                { icon: 'lucide:mail',            label: 'Email Address',  value: 'tahinterior@gmail.com',    href: 'mailto:tahinterior@gmail.com' },
                { icon: 'lucide:map-pin',         label: 'Location',       value: 'Yelahanka, Bangalore, Karnataka', href: 'https://www.google.com/maps/place/T.+A.+H+Interior+%26+builders/@13.1154662,77.6044228,732m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae1928ed5af713:0x4e84f93ece92c902!8m2!3d13.1154662!4d77.6069977!16s%2Fg%2F11vldg1pq3' },
                { icon: 'lucide:clock',           label: 'Working Hours',  value: 'Mon – Sat: 9:00 AM – 7:00 PM', href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="icon-gold shrink-0">
                    <iconify-icon icon={item.icon} className="text-xl text-[#B88A2A]"></iconify-icon>
                  </div>
                  <div>
                    <div className="font-ui font-semibold text-sm text-[#1F1F1F] mb-0.5">{item.label}</div>
                    {item.href
                      ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#5C5C5C] hover:text-[#B88A2A] transition-colors">{item.value}</a>
                      : <span className="text-sm text-[#5C5C5C]">{item.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="tel:9738289434" className="btn-gold py-3 px-6 text-sm">
                <iconify-icon icon="lucide:phone"></iconify-icon> Call Now
              </a>
              <a href="https://wa.me/919738289434?text=Hi, I'd like to inquire about interior design services." target="_blank" rel="noopener noreferrer" className="btn-outline py-3 px-6 text-sm">
                <iconify-icon icon="lucide:message-circle"></iconify-icon> WhatsApp Us
              </a>
              <a
                href="https://www.google.com/maps/place/T.+A.+H+Interior+%26+builders/@13.1154662,77.6044228,732m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae1928ed5af713:0x4e84f93ece92c902!8m2!3d13.1154662!4d77.6069977!16s%2Fg%2F11vldg1pq3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline py-3 px-6 text-sm"
              >
                <iconify-icon icon="lucide:map-pin"></iconify-icon> Get Directions
              </a>
            </div>

            {/* Areas Served */}
            <div className="mt-10 p-6 bg-white rounded-xl border border-[#E9DDC7]">
              <h4 className="font-ui font-semibold text-sm text-[#1F1F1F] mb-3 flex items-center gap-2">
                <iconify-icon icon="lucide:map" className="text-[#B88A2A]"></iconify-icon>
                Areas We Serve in Bangalore
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Electronic City', 'Hebbal', 'Marathahalli', 'Jayanagar', 'JP Nagar', 'Banashankari', 'Yelahanka', 'Malleswaram'].map((area) => (
                  <span key={area} className="text-xs font-ui font-medium text-[#5C5C5C] bg-[#FAF7F2] border border-[#E9DDC7] px-3 py-1 rounded-full">{area}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div variants={fadeUp(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#1F1F1F] rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="font-serif font-bold text-2xl text-[#FFFDF8] mb-2">Request a Free Quote</h3>
            <p className="text-sm text-white/55 mb-8">We'll get back to you within 24 hours.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="w-16 h-16 bg-[#B88A2A] rounded-full flex items-center justify-center">
                  <iconify-icon icon="lucide:check" className="text-3xl text-white"></iconify-icon>
                </div>
                <h4 className="font-serif font-bold text-xl text-white">Inquiry Submitted!</h4>
                <p className="text-white/60 text-sm max-w-xs">Thank you for reaching out. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs px-4 py-2 rounded">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-ui font-semibold text-[#B88A2A] tracking-wider mb-2">Full Name *</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Your name" className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#B88A2A] text-sm transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-ui font-semibold text-[#B88A2A] tracking-wider mb-2">Phone Number *</label>
                    <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#B88A2A] text-sm transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-ui font-semibold text-[#B88A2A] tracking-wider mb-2">Email Address</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#B88A2A] text-sm transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-ui font-semibold text-[#B88A2A] tracking-wider mb-2">Service Required</label>
                  <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-[#2a2420] border border-white/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#B88A2A] text-sm transition-colors">
                    <option value="">Select a service...</option>
                    <option>Residential Interior Design</option>
                    <option>Commercial Interior Design</option>
                    <option>House / Villa Construction</option>
                    <option>Home Renovation</option>
                    <option>Modular Kitchen</option>
                    <option>Wardrobe & Storage</option>
                    <option>False Ceiling & Lighting</option>
                    <option>Glass & Aluminium Works</option>
                    <option>Painting Services</option>
                    <option>Outdoor / Pergola</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-ui font-semibold text-[#B88A2A] tracking-wider mb-2">Area / Location in Bangalore</label>
                  <input type="text" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} placeholder="e.g. Whitefield, HSR Layout..." className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#B88A2A] text-sm transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-ui font-semibold text-[#B88A2A] tracking-wider mb-2">Project Details</label>
                  <textarea value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} placeholder="Describe your requirements, budget range, timeline..." className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#B88A2A] text-sm min-h-[110px] resize-y transition-colors"></textarea>
                </div>
                <button type="submit" className="btn-gold w-full py-4 text-sm">
                  Submit via WhatsApp <iconify-icon icon="lucide:message-circle"></iconify-icon>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Google Maps Section ── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <p className="section-eyebrow">Find Us</p>
                <h2 className="font-serif font-bold text-2xl text-[#1F1F1F]">Visit Our Studio</h2>
                <div className="gold-line"></div>
                <p className="text-sm text-[#5C5C5C] mt-2">T.A.H Interior &amp; Builders — Yelahanka, Bangalore, Karnataka</p>
              </div>
              <a
                href="https://www.google.com/maps/place/T.+A.+H+Interior+%26+builders/@13.1154662,77.6044228,732m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae1928ed5af713:0x4e84f93ece92c902!8m2!3d13.1154662!4d77.6069977!16s%2Fg%2F11vldg1pq3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold shrink-0"
              >
                <iconify-icon icon="lucide:navigation"></iconify-icon> Open in Google Maps
              </a>
            </div>

            {/* Map Embed */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E9DDC7] shadow-xl" style={{ height: '420px' }}>
              <iframe
                title="T.A.H Interior & Builders Location"
                src="https://maps.google.com/maps?q=13.1154662,77.6069977&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Clickable overlay that opens full Google Maps */}
              <a
                href="https://www.google.com/maps/place/T.+A.+H+Interior+%26+builders/@13.1154662,77.6044228,732m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae1928ed5af713:0x4e84f93ece92c902!8m2!3d13.1154662!4d77.6069977!16s%2Fg%2F11vldg1pq3"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 text-xs font-ui font-semibold text-[#1F1F1F] hover:bg-[#B88A2A] hover:text-white transition-all duration-300 border border-[#E9DDC7]"
              >
                <iconify-icon icon="lucide:external-link" className="text-sm"></iconify-icon>
                Open Full Map
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
