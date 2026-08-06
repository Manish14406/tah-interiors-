import { motion } from 'framer-motion';

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call */}
      <motion.a
        href="tel:9738289434"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        className="w-13 h-13 bg-[#1F1F1F] text-white rounded-full flex items-center justify-center shadow-xl border-2 border-[#B88A2A] w-14 h-14"
        aria-label="Call T.A.H Interior"
      >
        <iconify-icon icon="lucide:phone" className="text-xl text-[#D4AF37]"></iconify-icon>
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919738289434?text=Hi, I'd like to inquire about interior design services."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, duration: 0.4, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl border-2 border-white"
        aria-label="WhatsApp T.A.H Interior"
      >
        <iconify-icon icon="lucide:message-circle" className="text-2xl"></iconify-icon>
      </motion.a>
    </div>
  );
}
