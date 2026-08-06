import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=85';

const fadeUp = (delay = 0) => ({
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] } }
});

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '9+',   label: 'Years Experience'   },
  { value: '100%', label: 'Customer Satisfaction' },
];

export function Hero() {
  const [imgLoaded,      setImgLoaded]      = useState(false);
  const [overlayVisible, setOverlayVisible]  = useState(false);

  useEffect(() => {
    // ── Step 1: Preload the hero image silently in the background ──
    const img = new Image();
    img.src = HERO_IMAGE;

    // ── Step 2: Wait for the loading screen to fully finish ──
    // LoadingScreen is visible for 2400ms, then fades out over 600ms = 3000ms total
    // We start showing the hero image right as the loader fades away
    const revealTimer = setTimeout(() => {
      setImgLoaded(true);                          // background image fades in
      setTimeout(() => setOverlayVisible(true), 400); // then letters pop
    }, 3000);

    return () => clearTimeout(revealTimer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#0e0a06]">

      {/* ── 1. Background Image ── fades in first */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: imgLoaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <img
          src={HERO_IMAGE}
          alt="Luxury interior by T.A.H"
          className="w-full h-full object-cover"
          fetchpriority="high"
          decoding="async"
        />
      </motion.div>

      {/* ── 2. Dark gradient overlay ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: imgLoaded ? 1 : 0 }}
        transition={{ duration: 1.0, delay: 0.3, ease: 'easeOut' }}
        style={{
          background:
            'linear-gradient(to right, rgba(10,7,4,0.80) 0%, rgba(10,7,4,0.45) 55%, rgba(10,7,4,0.10) 100%)',
        }}
      />

      {/* ── 3. Hero Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-between pt-32 pb-0">
        
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-20 max-w-3xl">

          {/* Brand eyebrow */}
          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={overlayVisible ? 'visible' : 'hidden'}
            className="font-ui font-semibold text-xs tracking-[0.22em] uppercase text-[#D4AF37] mb-6 flex items-center gap-3"
          >
            <span className="block w-8 h-px bg-[#D4AF37]" />
            T.A.H Interior &amp; Builders
          </motion.p>

          {/* ── Main heading — 2 lines, no word cuts, responsive ── */}
          <motion.h1
            className="font-serif font-bold text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            initial="hidden"
            animate={overlayVisible ? 'visible' : 'hidden'}
            variants={{
              hidden:  { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.03, delayChildren: 0.25 } }
            }}
          >
            {/* Line 1: Building Beautiful */}
            <span className="block">
              {[
                { text: 'Building ',  gold: false },
                { text: 'Beautiful',  gold: true  },
              ].flatMap(({ text, gold }) =>
                text.split('').map((char, ci) => ({ char, gold, key: `l1-${text}-${ci}` }))
              ).map(({ char, gold, key }) => (
                <motion.span
                  key={key}
                  variants={{
                    hidden:  { opacity: 0, y: 22, rotateX: 80 },
                    visible: { opacity: 1, y: 0,  rotateX: 0,
                      transition: { type: 'spring', stiffness: 130, damping: 18 }
                    }
                  }}
                  className={`inline-block ${gold ? 'text-[#D4AF37] italic' : ''}`}
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>

            {/* Line 2: Dreams. */}
            <span className="block">
              {'Dreams.'.split('').map((char, ci) => (
                <motion.span
                  key={`l2-${ci}`}
                  variants={{
                    hidden:  { opacity: 0, y: 22, rotateX: 80 },
                    visible: { opacity: 1, y: 0,  rotateX: 0,
                      transition: { type: 'spring', stiffness: 130, damping: 18 }
                    }
                  }}
                  className="inline-block"
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp(0.9)}
            initial="hidden"
            animate={overlayVisible ? 'visible' : 'hidden'}
            className="font-sans text-base md:text-lg text-white/75 leading-relaxed max-w-lg mb-10"
          >
            Premium interior design &amp; construction in Bangalore — crafting residential and commercial spaces with artisanal precision since 2015.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp(1.1)}
            initial="hidden"
            animate={overlayVisible ? 'visible' : 'hidden'}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link to="/contact" className="btn-gold py-3.5 px-8 text-sm">
              <iconify-icon icon="lucide:calendar-check" className="text-base" />
              Book Free Consultation
            </Link>
            <Link to="/gallery" className="btn-outline-white py-3.5 px-8 text-sm">
              <iconify-icon icon="lucide:image" className="text-base" />
              View Our Projects
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp(1.3)}
            initial="hidden"
            animate={overlayVisible ? 'visible' : 'hidden'}
            className="flex flex-wrap gap-8 md:gap-12 pb-10"
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="font-serif font-bold text-3xl md:text-4xl text-[#D4AF37] leading-none mb-1">
                  {stat.value}
                </div>
                <div className="font-ui text-xs tracking-widest uppercase text-white/65">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom Feature Strip ── */}
        <motion.div
          variants={fadeUp(1.6)}
          initial="hidden"
          animate={overlayVisible ? 'visible' : 'hidden'}
          className="w-full bg-[#FFFDF8]/90 backdrop-blur-sm border-t border-[#E9DDC7]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-wrap items-center justify-center md:justify-between gap-6 text-[11px] md:text-xs font-ui font-semibold tracking-widest uppercase text-[#5C5C5C]">
            {['Free Site Visit', 'Premium Materials', 'On-Time Delivery', 'Post-Handover Support'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <iconify-icon icon="lucide:check-circle" className="text-[#B88A2A] text-base" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
