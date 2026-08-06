import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const reasons = [
  { icon: 'lucide:gem',             title: 'Premium Materials',      anim: 'icon-float',  color: '#D4AF37', bg: 'rgba(212,175,55,0.12)',  desc: 'Only the highest-grade materials sourced from trusted suppliers for lasting beauty and durability.' },
  { icon: 'lucide:users',           title: 'Experienced Team',       anim: 'icon-bounce', color: '#6B8CAE', bg: 'rgba(107,140,174,0.12)', desc: 'Architects, interior designers and craftsmen with deep expertise across all project types.' },
  { icon: 'lucide:map-pin',         title: 'Free Site Visit',        anim: 'icon-pulse',  color: '#C47B3B', bg: 'rgba(196,123,59,0.12)',  desc: 'Complimentary on-site inspection and expert consultation anywhere in Bangalore — free.' },
  { icon: 'lucide:layout-template', title: 'Modern Design',          anim: 'icon-float',  color: '#7A9E7E', bg: 'rgba(122,158,126,0.12)', desc: 'Contemporary, trend-forward aesthetics blended with timeless elegance for each client.' },
  { icon: 'lucide:settings-2',      title: 'Customized Solutions',   anim: 'icon-spin',   color: '#C47B3B', bg: 'rgba(196,123,59,0.12)',  desc: 'Every detail is planned around your personal taste, lifestyle, and functional requirements.' },
  { icon: 'lucide:indian-rupee',    title: 'Transparent Pricing',    anim: 'icon-bounce', color: '#D4AF37', bg: 'rgba(212,175,55,0.12)',  desc: 'Premium quality delivered honestly — detailed quotations upfront with no hidden costs, ever.' },
  { icon: 'lucide:clock-3',         title: 'On-Time Delivery',       anim: 'icon-pulse',  color: '#8B70B8', bg: 'rgba(139,112,184,0.12)', desc: 'Strict milestone tracking and dedicated project managers ensure on-schedule handovers always.' },
  { icon: 'lucide:shield-check',    title: 'Quality Assurance',      anim: 'icon-float',  color: '#7A9E7E', bg: 'rgba(122,158,126,0.12)', desc: 'Multi-stage inspections and post-handover support guarantee flawless workmanship everywhere.' },
];

const stats = [
  { value: '100+', label: 'Projects' },
  { value: '9+',   label: 'Years' },
  { value: '50+',  label: 'Design Styles' },
  { value: '100%', label: 'Satisfaction' },
];

/* ── Card with animated border beam on hover ── */
function Card({ reason, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl p-7 border border-[#E9DDC7] overflow-hidden
                 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400"
    >
      {/* Animated gold sweep on hover */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 10% 10%, ${reason.bg} 0%, transparent 65%)` }}
      />

      {/* Top color accent line that grows on hover */}
      <div
        className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-t-2xl"
        style={{ background: `linear-gradient(to right, ${reason.color}, ${reason.color}88)` }}
      />

      {/* Number badge */}
      <div className="absolute top-5 right-5 font-ui font-bold text-3xl text-[#E9DDC7] group-hover:opacity-40 transition-colors duration-400 leading-none select-none"
        style={{ color: reason.color + '22' }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon — always animated, colored */}
      <div
        className={`w-[3.25rem] h-[3.25rem] rounded-xl flex items-center justify-center mb-5 ${reason.anim}
                    group-hover:scale-110 transition-transform duration-300`}
        style={{ background: reason.bg, border: `1.5px solid ${reason.color}33` }}
      >
        <iconify-icon
          icon={reason.icon}
          className="text-2xl"
          style={{ color: reason.color }}
        ></iconify-icon>
      </div>

      <h3 className="font-serif font-bold text-[1.1rem] text-[#1F1F1F] mb-2.5 group-hover:transition-colors duration-300"
        style={{}}>
        {reason.title}
      </h3>
      <p className="text-sm text-[#5C5C5C] leading-relaxed">{reason.desc}</p>
    </motion.div>
  );
}

/* ── Animated stat counter ── */
function StatBadge({ value, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: 'spring', stiffness: 200 }}
      className="flex flex-col items-center"
    >
      <div className="font-serif font-bold text-3xl lg:text-4xl text-[#D4AF37]">{value}</div>
      <div className="font-ui font-semibold text-[10px] tracking-widest uppercase text-white/60 mt-0.5">{label}</div>
    </motion.div>
  );
}

export function WhyChooseUs() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* ── Decorative background grid dots ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'radial-gradient(#B88A2A 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      {/* ── Large decorative circle ── */}
      <div className="pointer-events-none absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full border border-[#E9DDC7] opacity-50" />
      <div className="pointer-events-none absolute -right-24 -top-24 w-[400px] h-[400px] rounded-full border border-[#E9DDC7] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={headerInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="section-eyebrow"
              >
                Our Advantages
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="section-heading"
              >
                8 Reasons Why Bangalore Trusts <span className="text-[#B88A2A] italic">T.A.H</span>
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={headerInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="gold-line"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="section-subheading"
              >
                We combine aesthetic brilliance with structural integrity to deliver spaces that exceed every expectation — on time, within budget, and built to last.
              </motion.p>
            </div>
          </div>

          {/* Stats Strip — full width below, wraps on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 bg-[#1F1F1F] rounded-2xl px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 shadow-xl"
          >
            {stats.map((s, i) => <StatBadge key={s.label} {...s} index={i} />)}
          </motion.div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <Card key={reason.title} reason={reason} index={i} />
          ))}
        </div>



      </div>
    </section>
  );
}
