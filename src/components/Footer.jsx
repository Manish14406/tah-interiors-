import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white rounded-lg p-1.5 w-11 h-11">
                <img src="/logo.png" alt="T.A.H Logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-ui font-semibold text-sm tracking-wide text-white/90">T.A.H Interior & Builders</span>
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-6">
              Premium interior design & construction in Bangalore. Crafting residential and commercial spaces with artisanal precision since 2015.
            </p>
            <div className="flex gap-3">
              {['lucide:facebook', 'lucide:instagram', 'lucide:youtube'].map((icon) => (
                <a key={icon} href="#" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-[#B88A2A] hover:text-[#D4AF37] transition-colors text-white/60">
                  <iconify-icon icon={icon} className="text-base"></iconify-icon>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ui font-semibold text-sm tracking-widest uppercase text-[#B88A2A] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Our Services', '/services'],
                ['Project Gallery', '/gallery'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-white/55 hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                    <iconify-icon icon="lucide:chevron-right" className="text-[#B88A2A] text-xs"></iconify-icon>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-ui font-semibold text-sm tracking-widest uppercase text-[#B88A2A] mb-5">Our Services</h4>
            <ul className="space-y-3">
              {[
                ['Residential Interior', 'residential-interior'],
                ['Commercial Interior', 'commercial-interior'],
                ['Building Construction', 'construction'],
                ['Home Renovation', 'home-renovation'],
                ['Modular Kitchen', 'modular-kitchen'],
                ['Glass & Aluminium', 'glass-aluminium'],
              ].map(([label, id]) => (
                <li key={id}>
                  <Link to={`/service/${id}`} className="text-sm text-white/55 hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                    <iconify-icon icon="lucide:chevron-right" className="text-[#B88A2A] text-xs"></iconify-icon>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-ui font-semibold text-sm tracking-widest uppercase text-[#B88A2A] mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/55">
                <iconify-icon icon="lucide:map-pin" className="text-[#B88A2A] text-lg shrink-0 mt-0.5"></iconify-icon>
                Bangalore, Karnataka, India
              </li>
              <li>
                <a href="tel:9738289434" className="flex items-center gap-3 text-sm text-white/55 hover:text-[#D4AF37] transition-colors">
                  <iconify-icon icon="lucide:phone" className="text-[#B88A2A] text-lg shrink-0"></iconify-icon>
                  +91 97382 89434
                </a>
              </li>
              <li>
                <a href="mailto:tahinterior@gmail.com" className="flex items-center gap-3 text-sm text-white/55 hover:text-[#D4AF37] transition-colors">
                  <iconify-icon icon="lucide:mail" className="text-[#B88A2A] text-lg shrink-0"></iconify-icon>
                  tahinterior@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.tahinterior.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/55 hover:text-[#D4AF37] transition-colors">
                  <iconify-icon icon="lucide:globe" className="text-[#B88A2A] text-lg shrink-0"></iconify-icon>
                  www.tahinterior.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords */}
        <div className="py-6 border-b border-white/8">
          <p className="text-[11px] text-white/25 leading-relaxed font-sans">
            <strong className="text-white/35">Popular Searches:</strong> Interior Designers Bangalore · Construction Company Bangalore · Home Renovation Bangalore · Modular Kitchen Bangalore · Bathroom Renovation Bangalore · Commercial Interior Bangalore · Glass Partition Bangalore · Painting Services Bangalore · Tile Installation Bangalore · uPVC Windows Bangalore · Pergola Bangalore · Aluminium Interior Bangalore · False Ceiling Bangalore · Wardrobe Bangalore · Luxury Interior Designers Bangalore
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/35 font-sans">
          <p>&copy; {year} T.A.H Interior &amp; Builders. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#D4AF37] transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
