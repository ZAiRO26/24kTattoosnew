import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ImageLightbox = ({ images, selectedImage, setSelectedImage, onClose }) => {
  if (selectedImage === null) return null;

  const handleNext = (e) => {
    e?.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'Escape') onClose();
  };

  React.useEffect(() => {
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4"
        onClick={onClose}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999
        }}
      >
        <motion.img
          key={selectedImage}
          src={images[selectedImage].image}
          alt={images[selectedImage].title}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x > 100) {
              handlePrev();
            } else if (info.offset.x < -100) {
              handleNext();
            }
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="max-w-[95vw] max-h-[85vh] md:max-w-[90vw] md:max-h-[90vh] object-contain select-none"
          onClick={(e) => e.stopPropagation()}
          style={{ touchAction: 'pan-x' }}
        />

        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 md:p-3 rounded-full text-white z-10 touch-manipulation"
          style={{ touchAction: 'manipulation' }}
        >
          <ChevronLeft size={24} className="md:w-8 md:h-8" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 md:p-3 rounded-full text-white z-10 touch-manipulation"
          style={{ touchAction: 'manipulation' }}
        >
          <ChevronRight size={24} className="md:w-8 md:h-8" />
        </button>

        <button
          onClick={onClose}
          className="absolute top-2 md:top-4 right-2 md:right-4 bg-white/20 hover:bg-white/40 p-2 md:p-3 rounded-full text-white z-10 touch-manipulation"
          style={{ touchAction: 'manipulation' }}
        >
          <X size={20} className="md:w-6 md:h-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageLightbox;