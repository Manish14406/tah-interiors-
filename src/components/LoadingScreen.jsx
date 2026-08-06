import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#1F1F1F' }}
        >
          {/* Background radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184,138,42,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* Logo Image */}
            <motion.img
              src="/logo.png"
              alt="T.A.H Interior & Builders"
              className="h-24 w-auto object-contain drop-shadow-2xl"
              animate={{ filter: ['drop-shadow(0 0 0px rgba(212,175,55,0))', 'drop-shadow(0 0 20px rgba(212,175,55,0.5))', 'drop-shadow(0 0 0px rgba(212,175,55,0))'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <h1 className="font-serif font-bold text-2xl text-white tracking-[0.05em]">
                T.A.H <span className="text-[#D4AF37]">Interior</span>
              </h1>
              <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/50 mt-1">
                & Builders — Bangalore
              </p>
            </motion.div>

            {/* Animated gold bar */}
            <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.2 }}
              />
            </div>
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-[#D4AF37]/30 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-[#D4AF37]/30 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-[#D4AF37]/30 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-[#D4AF37]/30 rounded-br-lg pointer-events-none" />

          {/* Footer tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 font-ui text-[10px] tracking-widest uppercase text-white/40"
          >
            Crafting Beautiful Spaces
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
