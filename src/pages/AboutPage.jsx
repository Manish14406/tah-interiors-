import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }
});

const team = [
  { name: 'T.A.H Founders', role: 'Leadership & Vision', icon: 'lucide:users' },
  { name: 'Design Team', role: 'Interior Architecture', icon: 'lucide:pencil-ruler' },
  { name: 'Civil Engineers', role: 'Construction & Structural', icon: 'lucide:hard-hat' },
  { name: 'Project Managers', role: 'Execution & Delivery', icon: 'lucide:clipboard-check' },
];

const milestones = [
  { year: '2015', label: 'Company Founded', desc: 'Started with a passion for beautiful, functional spaces.' },
  { year: '2017', label: '50+ Projects', desc: 'Crossed 50 successful residential and commercial deliveries.' },
  { year: '2020', label: 'Expanded Services', desc: 'Added glass, aluminium, construction and outdoor verticals.' },
  { year: '2024', label: '100+ Projects', desc: 'Serving clients across all major areas of Bangalore.' },
];

export function AboutPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative bg-[#1F1F1F] pt-36 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=60" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.p variants={fadeUp(0)} initial="hidden" animate="visible" className="font-ui font-semibold text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-4 flex items-center gap-3">
            <span className="block w-8 h-px bg-[#D4AF37]"></span> About Us
          </motion.p>
          <motion.h1 variants={fadeUp(0.1)} initial="hidden" animate="visible" className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight max-w-2xl">
            Crafting Spaces That Tell <span className="text-[#D4AF37] italic">Your Story</span>
          </motion.h1>
          <motion.p variants={fadeUp(0.2)} initial="hidden" animate="visible" className="text-white/65 text-base md:text-lg max-w-xl leading-relaxed">
            T.A.H Interior & Builders is a Bangalore-based premium interior design and construction company with over 9 years of experience crafting beautiful, functional spaces.
          </motion.p>
        </div>
      </div>

      {/* ── Story Section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="section-eyebrow">Our Story</p>
            <h2 className="section-heading">9+ Years of Design Excellence in Bangalore</h2>
            <div className="gold-line"></div>
            <p className="section-subheading mb-6">
              Founded in 2015, T.A.H Interior & Builders was built on a simple belief: every space should reflect the personality and aspirations of the people who live or work in it.
            </p>
            <p className="text-[#5C5C5C] text-sm leading-relaxed mb-8">
              From a single-bedroom transformation to a complete villa construction, we bring the same level of passion, precision, and professionalism to every project. Our in-house team of architects, designers, and civil engineers collaborates closely with every client—ensuring the final result is not just beautiful, but built to last.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[{ v: '100+', l: 'Projects' }, { v: '9+', l: 'Years' }, { v: '100%', l: 'Satisfaction' }].map((s) => (
                <div key={s.l} className="text-center p-4 bg-[#FAF7F2] rounded-xl border border-[#E9DDC7]">
                  <div className="font-serif font-bold text-2xl text-[#B88A2A]">{s.v}</div>
                  <div className="text-xs font-ui font-semibold tracking-widest uppercase text-[#5C5C5C] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeUp(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80" alt="Interior" className="rounded-xl w-full h-56 object-cover shadow-lg mt-8" />
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" alt="Bedroom" className="rounded-xl w-full h-44 object-cover shadow-lg" />
            <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&q=80" alt="Kitchen" className="rounded-xl w-full h-44 object-cover shadow-lg" />
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt="Office" className="rounded-xl w-full h-56 object-cover shadow-lg mt-8" />
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center">Our Journey</p>
            <h2 className="section-heading">Milestones That Define Us</h2>
            <div className="gold-line mx-auto"></div>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-[#E9DDC7]"></div>
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div key={m.year} variants={fadeUp(i * 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex gap-8 pl-16 relative">
                  <div className="absolute left-0 top-0 w-10 h-10 bg-[#B88A2A] text-white rounded-full flex items-center justify-center font-ui font-bold text-xs shrink-0">
                    {m.year.slice(2)}
                  </div>
                  <div>
                    <div className="font-ui font-semibold text-xs tracking-widest text-[#B88A2A] uppercase mb-1">{m.year}</div>
                    <h3 className="font-serif font-bold text-xl text-[#1F1F1F] mb-2">{m.label}</h3>
                    <p className="text-sm text-[#5C5C5C]">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center">The Team</p>
            <h2 className="section-heading">The Experts Behind Every Project</h2>
            <div className="gold-line mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <motion.div key={t.name} variants={fadeUp(i * 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="card-luxury p-8 text-center flex flex-col items-center gap-4">
                <div className="icon-gold w-16 h-16">
                  <iconify-icon icon={t.icon} className="text-3xl text-[#B88A2A]"></iconify-icon>
                </div>
                <h3 className="font-serif font-bold text-base text-[#1F1F1F]">{t.name}</h3>
                <p className="text-xs text-[#5C5C5C] font-ui tracking-wide">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#1F1F1F] text-center px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">Ready to Transform Your Space?</h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">Get a free site visit and consultation. No commitment required.</p>
        <Link to="/contact" className="btn-gold">Book Free Consultation</Link>
      </section>
    </div>
  );
}
