import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const images = [
  "/tattoo-hero-1.jpg",
  "/tattoo-hero-2.jpg",
  "/tattoo-hero-3.jpg"
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isBookingNavigating, setIsBookingNavigating] = useState(false);
  const [isViewWorkNavigating, setIsViewWorkNavigating] = useState(false);
  const navigate = useNavigate();

  // Parallax scroll effects - Enhanced for bidirectional scrolling
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const backgroundYReverse = useTransform(scrollY, [0, 1000], [0, 100]);
  const overlayOpacity = useTransform(scrollY, [0, 300, 600, 1000], [0.3, 0.7, 0.5, 0.3]);
  const contentOpacity = useTransform(scrollY, [0, 200, 600, 1000], [1, 0.3, 0.5, 1]);
  const contentScale = useTransform(scrollY, [0, 500, 1000], [1, 0.95, 1]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      className="relative w-full h-screen flex items-center justify-center bg-warm-white overflow-hidden"
    >
      {/* Background Images */}
      {images.map((img, idx) => (
        <motion.img
          key={img}
          src={img}
          alt={`Hero Slide ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            transitionProperty: 'opacity',
            y: backgroundY
          }}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}
      
      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-luxury-dark/30 z-20"
        style={{ opacity: overlayOpacity }}
      ></motion.div>
      
      {/* Content */}
      <motion.div 
        className="relative z-30 flex flex-col items-center justify-center w-full h-full text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ 
          opacity: contentOpacity,
          scale: contentScale,
          y: textY
        }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2 sm:mb-3 tracking-normal leading-tight font-light" 
            style={{fontFamily: 'Cinzel, serif', letterSpacing: '0.02em'}}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            24K <span style={{fontSize: '1.2em'}}>T</span>ATTOO <span style={{fontSize: '1.2em'}}>H</span>AIR & <span style={{fontSize: '1.2em'}}>O</span>DDITIES
          </motion.h1>
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-normal leading-tight"
            style={{letterSpacing: '0.02em'}}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            We are a Professional Tattoo Studio
          </motion.h2>
          <motion.h3 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-normal leading-tight"
            style={{letterSpacing: '0.02em'}}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Since 2005
          </motion.h3>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 font-normal px-4"
            style={{letterSpacing: '0.01em'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            Focused on Realism, Micro Realism, Fine Line
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <motion.button 
              className="bg-accent-gold text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-accent-gold-dark hover:text-warm-white transition-colors duration-200 text-sm sm:text-base min-h-[48px] flex items-center justify-center relative overflow-hidden"
              onClick={async () => {
                setIsBookingNavigating(true);
                // Add a delay for the diagonal animation to be visible
                await new Promise(resolve => setTimeout(resolve, 700));
                window.location.href = '/book-now';
              }}
              whileHover={{ 
                scale: 1.08,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)",
                background: "linear-gradient(135deg, #d4af37 0%, #f4d03f  50%, #d4af37 100%)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.96,
                rotateX: -2,
                rotateY: -2,
                transition: { duration: 0.1 }
              }}
              animate={isBookingNavigating ? { 
                x: [0, 120, 280, 500, 800],
                y: [0, -60, -140, -250, -400],
                rotate: [0, 8, 18, 30, 45],
                scale: [1, 1.2, 1.5, 1.9, 2.5],
                opacity: [1, 0.8, 0.6, 0.3, 0]
              } : {}}
              transition={{ 
                duration: 0.7, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "tween"
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              BOOK TATTOO APPOINTMENT
            </motion.button>
            <motion.button 
              className="border border-accent-gold text-accent-gold px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-accent-gold hover:text-luxury-dark transition-colors duration-200 text-sm sm:text-base min-h-[48px] flex items-center justify-center"
              onClick={async () => {
                setIsViewWorkNavigating(true);
                // Add a small delay for the animation to be visible
                await new Promise(resolve => setTimeout(resolve, 800));
                navigate('/styles', { state: { fromHero: true } });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={isViewWorkNavigating ? { 
                x: [0, -20, 100, 300, 800],
                y: [0, -5, -15, -25, -40],
                scale: [1, 1.05, 1.1, 1.2, 0.8],
                opacity: [1, 0.9, 0.7, 0.4, 0],
                rotateZ: [0, -5, -10, -15, -20]
              } : {}}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                times: [0, 0.2, 0.5, 0.8, 1]
              }}
            >
              VIEW OUR WORK
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Navigation Dots */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      >
        {images.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 touch-manipulation ${
              current === idx ? 'bg-accent-gold' : 'bg-accent-gold/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
