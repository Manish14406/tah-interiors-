import { motion } from 'framer-motion';

const steps = [
  { icon: 'lucide:message-square', title: 'Consultation', color: '#6B8CAE', anim: 'icon-bounce' },
  { icon: 'lucide:map-pin',        title: 'Site Visit',   color: '#C47B3B', anim: 'icon-pulse'  },
  { icon: 'lucide:clipboard-list', title: 'Planning',     color: '#D4AF37', anim: 'icon-float'  },
  { icon: 'lucide:ruler',          title: '2D Layout',    color: '#7A9E7E', anim: 'icon-bounce' },
  { icon: 'lucide:box',            title: '3D Design',    color: '#8B70B8', anim: 'icon-float'  },
  { icon: 'lucide:palette',        title: 'Materials',    color: '#C47B3B', anim: 'icon-bounce' },
  { icon: 'lucide:hammer',         title: 'Execution',    color: '#D4AF37', anim: 'icon-pulse'  },
  { icon: 'lucide:search',         title: 'Inspection',   color: '#6B8CAE', anim: 'icon-float'  },
  { icon: 'lucide:key',            title: 'Handover',     color: '#7A9E7E', anim: 'icon-bounce' },
  { icon: 'lucide:life-buoy',      title: 'Support',      color: '#8B70B8', anim: 'icon-pulse'  },
];

export function ProjectProcess() {
  return (
    <section className="py-28 bg-[#1F1F1F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-eyebrow justify-center" style={{ color: '#D4AF37' }}>
            <span className="block w-8 h-px bg-[#D4AF37]"></span>
            How We Work
          </p>
          <h2 className="section-heading" style={{ color: '#FFFDF8' }}>Our 10-Step Project Process</h2>
          <div className="gold-line mx-auto"></div>
          <p className="section-subheading mx-auto" style={{ color: 'rgba(255,253,248,0.65)' }}>
            A transparent, client-first methodology from first hello to final handover.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-[#B88A2A]/30" style={{ top: '2rem' }}></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex flex-col items-center text-center gap-3"
              >
                {/* Circle */}
                <div
                  className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${step.anim}`}
                  style={{
                    background: `${step.color}18`,
                    border: `2px solid ${step.color}55`,
                  }}
                >
                  <iconify-icon icon={step.icon} className="text-2xl" style={{ color: step.color }}></iconify-icon>
                  {/* Step number */}
                  <div
                    className="absolute -top-2 -right-2 w-5 h-5 text-white text-[10px] font-bold rounded-full flex items-center justify-center font-ui"
                    style={{ background: step.color }}
                  >
                    {i + 1}
                  </div>
                </div>
                <p className="font-ui font-medium text-[11px] tracking-wider uppercase text-white/70">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
