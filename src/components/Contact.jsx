export function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-screen px-12 py-32 bg-[#f7f4ea]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title-massive text-[#1a1814] mb-20 tracking-tight leading-none">
          START<br/>YOUR<br/>PROJECT
        </h2>
        
        <div className="grid grid-cols-2 gap-20">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#d4af37] mb-2 tracking-wide">NAME</label>
                <input type="text" placeholder="Your full name" className="form-input bg-white border-[#d4af37]/30 focus:border-[#d4af37]" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-[#d4af37] mb-2 tracking-wide">PHONE NUMBER</label>
                <input type="tel" placeholder="Your contact number" className="form-input bg-white border-[#d4af37]/30 focus:border-[#d4af37]" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-[#d4af37] mb-2 tracking-wide">PROJECT TYPE</label>
                <select className="form-input bg-white border-[#d4af37]/30 focus:border-[#d4af37]">
                  <option>Select project type</option>
                  <option>Residential Interior</option>
                  <option>Commercial Interior</option>
                  <option>Architecture Design</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-[#d4af37] mb-2 tracking-wide">EXPECTED START DATE</label>
                <input type="date" className="form-input bg-white border-[#d4af37]/30 focus:border-[#d4af37]" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-[#d4af37] mb-2 tracking-wide">MESSAGE</label>
                <textarea placeholder="Tell us about your space and requirements..." className="form-input bg-white border-[#d4af37]/30 focus:border-[#d4af37]"></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full" id="contact-submit">SUBMIT INQUIRY</button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="mb-16">
              <div className="text-sm text-[#d4af37] tracking-wider mb-4 font-bold">CONTACT US</div>
              <div className="space-y-6">
                <a href="tel:8553738588" id="contact-phone-1" className="block text-5xl font-bold text-[#1a1814] hover:text-[#d4af37] transition-colors tracking-tight">8553738588</a>
                <a href="tel:9738224702" id="contact-phone-2" className="block text-5xl font-bold text-[#1a1814] hover:text-[#d4af37] transition-colors tracking-tight">9738224702</a>
              </div>
            </div>
            
            <div className="space-y-4 mb-16">
              <button className="btn-primary w-full flex items-center justify-center gap-3" id="contact-call">
                <iconify-icon icon="lucide:phone" className="text-xl"></iconify-icon>
                CALL NOW
              </button>
              <button className="btn-secondary w-full flex items-center justify-center gap-3 bg-white" id="contact-whatsapp">
                <iconify-icon icon="lucide:message-circle" className="text-xl"></iconify-icon>
                WHATSAPP US
              </button>
              <button className="btn-secondary w-full flex items-center justify-center gap-3 bg-white" id="contact-visit">
                <iconify-icon icon="lucide:calendar" className="text-xl"></iconify-icon>
                BOOK A CONSULTATION
              </button>
            </div>
            
            <div className="border-t border-[#d4af37]/30 pt-8 flex items-center gap-6">
              <img src="/logo.png" alt="T.A.H Logo" className="h-16" />
              <div>
                <div className="text-sm text-[#d4af37] tracking-wider mb-1 font-bold">STUDIO HOURS</div>
                <p className="text-lg text-[#1a1814]">Monday - Friday<br/>9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
