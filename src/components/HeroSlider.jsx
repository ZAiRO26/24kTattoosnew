import React, { useState, useEffect } from "react";

const images = [
  "/tattoo-hero-1.jpg",
  "/tattoo-hero-2.jpg",
  "/tattoo-hero-3.jpg"
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-warm-white overflow-hidden">
      {/* Background Images */}
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Hero Slide ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{transitionProperty: 'opacity'}}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-luxury-dark/30 z-20"></div>
      
      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center w-full h-full text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-charcoal-text mb-3 sm:mb-4 tracking-wide">
            24K Tattoo Hair & oddities
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-charcoal-text mb-4 sm:mb-6 tracking-tight leading-tight">
            We are a Professional Tattoo Studio & Academy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-soft-grey mb-6 sm:mb-8 font-light px-4">
            Focused on Realism, Micro Realism, Fine Line
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button 
              className="bg-accent-gold text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-accent-gold-dark hover:text-warm-white transition-colors duration-200 text-sm sm:text-base min-h-[48px] flex items-center justify-center"
              onClick={() => window.location.href = '/book-now'}
            >
              BOOK TATTOO APPOINTMENT
            </button>
            <button 
              className="border border-accent-gold text-accent-gold px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-accent-gold hover:text-luxury-dark transition-colors duration-200 text-sm sm:text-base min-h-[48px] flex items-center justify-center"
              onClick={() => window.location.href = '/styles'}
            >
              VIEW OUR WORK
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 touch-manipulation ${
              current === idx ? 'bg-accent-gold' : 'bg-accent-gold/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
