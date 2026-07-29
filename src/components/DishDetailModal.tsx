import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';
import { MenuItem, menuItems, formatPrice, categories } from '../data/menuData';
import { useState, useEffect } from 'react';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onSelectItem: (item: MenuItem) => void;
}

export default function DishDetailModal({ item, onClose, onSelectItem }: DishDetailModalProps) {
  const [relatedItems, setRelatedItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (item) {
      const sameCategory = menuItems.filter(
        (i) => i.category === item.category && i.id !== item.id
      );
      setRelatedItems(sameCategory.slice(0, 4));
    }
  }, [item]);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  if (!item) return null;

  const spiceLabels = ['Mild', 'Medium', 'Hot'];
  const categoryInfo = categories.find((c) => c.id === item.category);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] bg-[#100F0C] text-[#E9E1CE] grain overflow-y-auto"
        >
          {/* ambient glows */}
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full bg-[#C9A24B]/[0.05] blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#7A1F2B]/10 blur-[110px]" />

          {/* Close */}
          <button
            onClick={onClose}
            className="fixed top-5 right-5 sm:top-8 sm:right-8 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-[#E9E1CE]/15 text-[#E9E1CE]/60 hover:text-[#C9A24B] hover:border-[#C9A24B]/50 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Back */}
          <button
            onClick={onClose}
            className="fixed top-6 sm:top-9 left-5 sm:left-8 z-10 flex items-center gap-1.5 text-[11px] tracking-[0.25em] uppercase text-[#E9E1CE]/40 hover:text-[#C9A24B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Menu
          </button>

          <div className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-24 pb-12">
            {/* Enso image */}
            <motion.div
              key={item.id + '-image'}
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 mb-10"
            >
              <div className="absolute -inset-3 rounded-full border border-[#C9A24B]/30" />
              <div className="absolute -inset-8 rounded-full border border-[#E9E1CE]/[0.06]" />
              <div className="w-full h-full rounded-full overflow-hidden border border-[#E9E1CE]/10">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              {/* glow under plate */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-[#C9A24B]/10 blur-2xl rounded-full" />
            </motion.div>

            {/* Text */}
            <motion.div
              key={item.id + '-text'}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="text-center max-w-md mx-auto mb-10"
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#E9E1CE]/35 mb-4">
                {categoryInfo?.name}
              </p>

              <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-3">
                {item.name}
              </h1>

              <p className="font-display text-2xl text-[#C9A24B] mb-5">{formatPrice(item.price)}</p>

              <p className="text-[#E9E1CE]/50 text-sm leading-relaxed mb-7 max-w-sm mx-auto font-light">
                {item.longDescription || item.description}
              </p>

              {/* Info row */}
              <div className="flex items-center justify-center gap-4 mb-9 text-xs tracking-[0.15em] uppercase text-[#E9E1CE]/40">
                {item.isVeg ? (
                  <span className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 border border-green-500 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    </span>
                    Veg
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 border border-red-500 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    </span>
                    Non-Veg
                  </span>
                )}
                <span className="text-[#C9A24B]/50">◆</span>
                <span>{spiceLabels[item.spiceLevel - 1]}</span>
                {item.isChefRecommended && (
                  <>
                    <span className="text-[#C9A24B]/50">◆</span>
                    <span className="text-[#C9A24B]">Chef's Pick</span>
                  </>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/918681992233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3 bg-[#C9A24B] text-[#161411] text-[12px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-[#d8b566] transition-colors"
                >
                  Order via WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-8 py-3 border border-[#E9E1CE]/15 text-[12px] font-medium tracking-[0.2em] uppercase text-[#E9E1CE]/60 hover:text-[#C9A24B] hover:border-[#C9A24B]/50 transition-colors rounded-full"
                >
                  Back to Menu
                </button>
              </div>
            </motion.div>

            {/* Related */}
            {relatedItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.35 }}
                className="w-full max-w-lg mx-auto"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#E9E1CE]/30 text-center mb-5">
                  More from {categoryInfo?.name}
                </p>
                <div className="flex gap-5 justify-center flex-wrap">
                  {relatedItems.map((related) => (
                    <button
                      key={related.id}
                      onClick={() => onSelectItem(related)}
                      className="group text-center w-20"
                    >
                      <div className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] mx-auto rounded-full overflow-hidden border border-[#E9E1CE]/10 group-hover:border-[#C9A24B]/60 transition-colors">
                        <img
                          src={related.image}
                          alt={related.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-[#E9E1CE]/40 text-[10px] mt-2 leading-tight group-hover:text-[#C9A24B] transition-colors">
                        {related.name}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
