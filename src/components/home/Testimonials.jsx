import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Rahul Sharma',
    role: 'Residential Client · Bangalore',
    text: 'T.A.H completely transformed our apartment. The attention to detail in the modular kitchen and wardrobes is exceptional. Highly recommend their turnkey execution!',
    rating: 5,
    date: '2 months ago',
  },
  {
    name: 'Priya Desai',
    role: 'Commercial Client · Koramangala',
    text: 'We hired them for our office renovation. The glass partitions and false ceiling work were completed ahead of schedule. Very professional team with a great eye for design.',
    rating: 5,
    date: '4 months ago',
  },
  {
    name: 'Vikram Reddy',
    role: 'Villa Construction · Whitefield',
    text: 'From structural drawing to final handover, T.A.H handled our villa construction flawlessly. Their use of premium materials and transparent pricing gave us complete peace of mind.',
    rating: 5,
    date: '6 months ago',
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } };

export function Testimonials() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="section-eyebrow">Client Stories</p>
            <h2 className="section-heading">What Our Clients Say</h2>
            <div className="gold-line"></div>
          </div>
          {/* Google Rating Badge */}
          <div className="flex items-center gap-4 bg-[#FAF7F2] border border-[#E9DDC7] rounded-2xl px-6 py-4 self-start">
            <div>
              <div className="font-serif font-bold text-4xl text-[#1F1F1F] leading-none">4.9</div>
              <div className="text-xs font-ui text-[#5C5C5C] mt-1">Google Rating</div>
            </div>
            <div>
              <div className="flex text-[#FBBC05] text-base mb-1">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <div className="text-xs text-[#5C5C5C]">Based on 85+ reviews</div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <motion.div key={review.name} variants={cardVariants} className="card-luxury p-8 flex flex-col gap-5">
              {/* Quote mark */}
              <div className="font-serif text-5xl text-[#D4AF37]/40 leading-none -mb-3">"</div>

              {/* Stars */}
              <div className="flex text-[#B88A2A] text-sm">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>

              {/* Review text */}
              <p className="text-[#5C5C5C] text-sm leading-relaxed italic flex-grow">
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E9DDC7]">
                <div className="w-10 h-10 rounded-full bg-[#B88A2A] text-white flex items-center justify-center font-ui font-bold text-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-ui font-semibold text-sm text-[#1F1F1F]">{review.name}</div>
                  <div className="text-xs text-[#5C5C5C]">{review.role}</div>
                </div>
                <div className="ml-auto text-xs text-[#5C5C5C]">{review.date}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
