import { useRef, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const galleryImages = [
  { id: 1,  category: 'Living Room',  title: 'Modern Lounge',       image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80' },
  { id: 2,  category: 'Kitchen',      title: 'Luxury Kitchen',      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&q=80' },
  { id: 3,  category: 'Commercial',   title: 'Corporate Office',    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
  { id: 4,  category: 'Bedroom',      title: 'Master Suite',        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80' },
  { id: 5,  category: 'Construction', title: 'Villa Structure',     image: '/images/construction.png' },
  { id: 6,  category: 'Outdoor',      title: 'Garden Pergola',      image: '/images/outdoor.png' },
  { id: 7,  category: 'Living Room',  title: 'Minimalist Lounge',   image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80' },
  { id: 8,  category: 'Commercial',   title: 'Boutique Store',      image: '/images/retail-shop.png' },
  { id: 9,  category: 'Kitchen',      title: 'Modular Kitchen',     image: '/images/aluminium-kitchen.png' },
  { id: 10, category: 'Bedroom',      title: 'Cozy Kids Room',      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80' },
  { id: 11, category: 'Living Room',  title: 'Contemporary Hall',   image: '/images/arch-3d-render.png' },
  { id: 12, category: 'Commercial',   title: 'Restaurant Interior', image: '/images/restaurant-cafe.png' },
];

// Duplicate for seamless infinite loop
const track = [...galleryImages, ...galleryImages];
const CARD_W = 300;
const GAP     = 20;
const SPEED   = 60; // px/s

function InfiniteStrip({ items, reverse = false }) {
  const x = useMotionValue(0);
  const totalW = items.length * (CARD_W + GAP);
  const loopW  = totalW / 2; // one set width

  useAnimationFrame((_, delta) => {
    const dir = reverse ? 1 : -1;
    let current = x.get() + dir * (SPEED * delta / 1000);
    if (current <= -loopW) current += loopW;
    if (current >= 0)      current -= loopW;
    x.set(current);
  });

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        style={{ x }}
        className="flex gap-5 will-change-transform"
      >
        {items.map((img, i) => (
          <div
            key={i}
            className="shrink-0 relative rounded-2xl overflow-hidden group cursor-pointer border border-[#E9DDC7] shadow-md"
            style={{ width: CARD_W, height: 200 }}
          >
            <img
              src={img.image}
              alt={img.title}
              onError={(e) => { e.currentTarget.src = '/images/arch-3d-render.png'; }}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-ui text-[9px] tracking-widest uppercase text-[#D4AF37] mb-0.5">{img.category}</p>
              <h4 className="font-serif font-bold text-white text-sm leading-snug">{img.title}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ProjectGallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="section-eyebrow">Portfolio</p>
            <h2 className="section-heading">Our Gallery</h2>
            <div className="gold-line"></div>
            <p className="section-subheading max-w-lg">
              A curated look at 100+ completed projects — from luxury residences to modern commercial spaces across Bangalore.
            </p>
          </div>
          <Link to="/gallery" className="btn-gold shrink-0">
            View All Projects <iconify-icon icon="lucide:arrow-right"></iconify-icon>
          </Link>
        </motion.div>
      </div>

      {/* ── Row 1 — left to right scroll ── */}
      <div className="mb-5">
        <InfiniteStrip items={track} reverse={false} />
      </div>

      {/* ── Row 2 — right to left scroll ── */}
      <InfiniteStrip items={[...track].reverse()} reverse={true} />
    </section>
  );
}
