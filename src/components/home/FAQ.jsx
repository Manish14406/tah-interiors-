import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Do you offer free site visits and consultations?',
    a: 'Yes, we provide completely free site visits and initial consultations. Our expert team will visit your location anywhere in Bangalore, understand your requirements, take measurements, and provide professional guidance — all at no cost.',
  },
  {
    q: 'What is the typical timeline for an interior design project?',
    a: 'Timelines depend on scope. A standard 3BHK residential interior project typically takes 45–60 days from 3D design approval to handover. We provide a firm timeline upfront and track milestones throughout.',
  },
  {
    q: 'Do you provide warranties on your work and materials?',
    a: 'Yes. We offer up to 10-year warranty on modular woodwork (kitchens, wardrobes) and comprehensive guarantees on construction, painting, and civil works — giving you long-term peace of mind.',
  },
  {
    q: 'Can I see 3D designs before construction starts?',
    a: 'Absolutely. Our process includes photorealistic 3D visualizations and walkthrough videos. Physical execution begins only after you are 100% satisfied and have approved the designs.',
  },
  {
    q: 'Do you handle complete home renovations and civil work?',
    a: 'Yes. We are a full-service construction and interior company. We handle complete renovations including demolition, civil alterations, plumbing, electrical, tiling, painting, and false ceiling work.',
  },
  {
    q: 'What areas in Bangalore do you serve?',
    a: 'We serve all areas across Bangalore including Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Hebbal, Marathahalli, and more. Contact us to confirm service availability for your area.',
  },
];

export function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="section-eyebrow justify-center">Got Questions?</p>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <div className="gold-line mx-auto"></div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border transition-all duration-300 ${
                active === i ? 'border-[#B88A2A] shadow-md' : 'border-[#E9DDC7]'
              }`}
            >
              <button
                className="w-full text-left px-7 py-5 flex items-center justify-between gap-4 focus:outline-none"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className={`font-ui font-semibold text-sm md:text-base leading-snug ${active === i ? 'text-[#B88A2A]' : 'text-[#1F1F1F]'}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${active === i ? 'bg-[#B88A2A] text-white' : 'bg-[#FAF7F2] text-[#5C5C5C]'}`}>
                  <iconify-icon icon={active === i ? 'lucide:minus' : 'lucide:plus'} className="text-sm"></iconify-icon>
                </div>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-7 pb-6 text-sm text-[#5C5C5C] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
