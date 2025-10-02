
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;
      
      setShowScrollButton(scrollPercentage > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <footer className="bg-gray-50 border-t border-gray-200 py-6 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-4 items-start">
            {/* Brand/Intro */}
            <div className="md:col-span-1">
              <h2 className="text-xl font-bold mb-2 tracking-tight">24K Tattoo Hair & oddities</h2>
              <p className="mb-2 text-sm leading-relaxed">Tattoos that tell your story – Since 2005 🔱Hyderabad's OG Tattoo Artist🔱</p>
              <div className="flex gap-3 text-lg">
                <a href="#" className="hover:text-green-600"><FaFacebookF /></a>
                <a href="#" className="hover:text-green-600"><FaInstagram /></a>
                <a href="#" className="hover:text-green-600"><FaWhatsapp /></a>
                <a href="#" className="hover:text-green-600"><FaYoutube /></a>
              </div>
            </div>
            {/* Quick Links */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-2">Quick Links</h3>
              <ul className="space-y-0 text-sm">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/about/our-story" className="hover:underline">About Us</Link></li>
                <li><Link to="/styles" className="hover:underline">Styles</Link></li>
                <li><Link to="/hair-services" className="hover:underline">Hair and Piercing</Link></li>
                <li><Link to="/dos-and-donts" className="hover:underline">Do's and Don'ts</Link></li>
                <li><Link to="/book-now" className="hover:underline">Contact us</Link></li>
              </ul>
            </div>
            {/* Styles */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-2">Styles</h3>
              <ul className="space-y-0 text-sm">
                <li><Link to="/styles" className="hover:underline">Cover ups</Link></li>
                <li><Link to="/styles" className="hover:underline">Black & grey</Link></li>
                <li><Link to="/styles" className="hover:underline">Colour</Link></li>
                <li><Link to="/styles" className="hover:underline">Portraits & Realistic</Link></li>
                <li><Link to="/styles" className="hover:underline">Micro/Minimalist Tattoo</Link></li>
                <li><Link to="/styles" className="hover:underline">Customised</Link></li>
              </ul>
            </div>
            {/* Contact Us */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-2">Contact Us</h3>
              <ul className="space-y-1 text-sm">
                <li><span className="font-semibold">24K Tattoo Hair & oddities</span></li>
                <li className="leading-relaxed">Road no 1, entry, near Nagarjuna Circle Road, opp. Mpm Times Square mall, Banjara Hills, near Florists, Hyderabad 500034</li>
                <li><a href="tel:+918178687129" className="hover:underline">+91-8178687129</a></li>
                <li><a href="https://maps.app.goo.gl/7nRm6BdhYTs7rP2w7" target="_blank" rel="noopener noreferrer" className="hover:underline">View on Google Maps</a></li>
              </ul>
            </div>
          </div>
          <hr className="my-3 border-gray-200" />
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <span>© 2025 24K Tattoo Hair & oddities. All rights reserved.</span>
          </div>
        </div>
      </footer>
      
      {/* Floating Action Buttons */}
      <div className="fixed left-4 sm:left-6 md:left-8 bottom-4 sm:bottom-6 md:bottom-8 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/918178687129"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        >
          <FaWhatsapp className="text-white text-xl sm:text-2xl" />
        </a>
      </div>
      
      {/* Scroll to Top Floating Button */}
      {showScrollButton && (
        <div className="fixed right-4 sm:right-6 md:right-8 bottom-4 sm:bottom-6 md:bottom-12 z-50">
          <button
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-6 h-6 sm:w-7 sm:h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8l-6 6m6-6l6 6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Footer;
