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
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-gray-100 overflow-hidden">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Hero Slide ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{transitionProperty: 'opacity'}}
        />
      ))}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full bg-white/70">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center drop-shadow-lg">24K TATTOO HAIR & ODDITIES</h1>
        <p className="text-xl md:text-2xl text-gray-800 mb-6 text-center drop-shadow">Hyderabad</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 px-8 py-4 font-bold text-lg text-black tracking-wide transition-colors shadow-lg uppercase rounded-full" style={{borderRadius:32}}>BOOK NOW</button>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-3 h-3 rounded-full ${current === idx ? 'bg-yellow-400' : 'bg-white/40'} transition-colors`}
          />
        ))}
      </div>
    </section>
  );
}
