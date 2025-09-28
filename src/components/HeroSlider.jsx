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
    <section className="relative w-full h-screen flex items-center justify-center bg-minimal-white overflow-hidden">
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
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-20"></div>
      
      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center w-full h-full text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            We are a Professional Tattoo Studio & Academy
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Focused on Realism, Micro Realism, Fine Line
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors duration-200"
              onClick={() => window.location.href = '/book-now'}
            >
              BOOK TATTOO APPOINTMENT
            </button>
            <button 
              className="border border-white text-white px-8 py-4 font-medium hover:bg-white hover:text-black transition-colors duration-200"
              onClick={() => window.location.href = '/tattoos/galleries'}
            >
              VIEW OUR WORK
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              current === idx ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
