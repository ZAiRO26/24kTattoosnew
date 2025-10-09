import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      className="relative w-full h-screen flex items-center justify-center bg-warm-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Background Images with Framer Motion Effects */}
      {images.map((img, idx) => (
        <motion.img
          key={img}
          src={img}
          alt={`Hero Slide ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover ${
            current === idx ? 'z-10' : 'z-0'
          }`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: current === idx ? 1 : 0,
            scale: current === idx ? 1 : 1.05
          }}
          transition={{ 
            opacity: { duration: 1, ease: "easeInOut" },
            scale: { duration: 8, ease: "easeOut" }
          }}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}
      
      {/* Animated Overlay */}
      <motion.div 
        className="absolute inset-0 bg-luxury-dark/30 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      
      {/* Content with Enhanced Framer Motion */}
      <motion.div 
        className="relative z-30 flex flex-col items-center justify-center w-full h-full text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
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
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          >
            <motion.button
              onClick={() => {
                setIsBookingNavigating(true);
                setTimeout(() => {
                  navigate('/book-now');
                  // Reset state after navigation
                  setTimeout(() => {
                    setIsBookingNavigating(false);
                  }, 100);
                }, 600);
              }}
              className="bg-accent-gold text-luxury-dark px-8 py-3 text-sm sm:text-base font-semibold hover:bg-gold-dark hover:text-warm-white transition-all duration-300 rounded-sm tracking-wide min-w-[200px] sm:min-w-[220px] touch-manipulation"
              initial={{ x: -100, opacity: 0 }}
              animate={{ 
                x: isBookingNavigating ? -400 : 0, 
                opacity: isBookingNavigating ? 0 : 1,
                rotate: isBookingNavigating ? -15 : 0,
                scale: isBookingNavigating ? 0.8 : 1
              }}
              transition={{ 
                x: { duration: 1, ease: "easeInOut" },
                opacity: { duration: 0.8, ease: "easeInOut" },
                rotate: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "easeOut" }
              }}
              whileHover={{ 
                scale: 1.05,
                x: 10,
                boxShadow: "0px 10px 30px rgba(255, 215, 0, 0.3)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
              disabled={isBookingNavigating}
            >
              BOOK TATTOO APPOINTMENT
            </motion.button>
            
            <motion.button
              onClick={() => {
                setIsViewWorkNavigating(true);
                setTimeout(() => {
                  navigate('/styles');
                  // Reset state after navigation
                  setTimeout(() => {
                    setIsViewWorkNavigating(false);
                  }, 100);
                }, 600);
              }}
              className="border-2 border-accent-gold text-accent-gold px-8 py-3 text-sm sm:text-base font-semibold hover:bg-accent-gold hover:text-luxury-dark transition-all duration-300 rounded-sm tracking-wide min-w-[200px] sm:min-w-[220px] touch-manipulation"
              initial={{ x: 100, opacity: 0 }}
              animate={{ 
                x: isViewWorkNavigating ? 400 : 0, 
                opacity: isViewWorkNavigating ? 0 : 1,
                rotate: isViewWorkNavigating ? 15 : 0,
                scale: isViewWorkNavigating ? 0.8 : 1
              }}
              transition={{ 
                x: { duration: 1, ease: "easeInOut", delay: 0.2 },
                opacity: { duration: 0.8, ease: "easeInOut" },
                rotate: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "easeOut" }
              }}
              whileHover={{ 
                scale: 1.05,
                x: -10,
                boxShadow: "0px 10px 30px rgba(255, 215, 0, 0.2)",
                borderColor: "#FFD700",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
              disabled={isViewWorkNavigating}
            >
              VIEW OUR WORK
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      

    </motion.section>
  );
}
