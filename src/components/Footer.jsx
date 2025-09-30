
import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
      {/* Scroll to Top Floating Button */}
      <div className="fixed right-8 bottom-12 z-50">
        <button
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8l-6 6m6-6l6 6" />
          </svg>
        </button>
      </div>
  return (
  <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-4 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Brand/Intro */}
          <div>
              <h2 className="text-3xl font-extrabold mb-4 tracking-tight">24K Tattoo Hair & oddities</h2>
              <p className="mb-6 text-lg leading-relaxed whitespace-pre-line">Tattoos that tell your story – Since 2005
  🔱Hyderabad's OG Tattoo Artist🔱</p>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-green-600"><FaFacebookF /></a>
              <a href="#" className="hover:text-green-600"><FaInstagram /></a>
              <a href="#" className="hover:text-green-600"><FaWhatsapp /></a>
              <a href="#" className="hover:text-green-600"><FaYoutube /></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="/styles" className="hover:underline">Styles</a></li>
              <li><a href="/hair-and-piercing" className="hover:underline">Hair and Piercing</a></li>
              <li><a href="/dos-and-donts" className="hover:underline">Do's and Don'ts</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
            </ul>
          </div>
          {/* Styles */}
          <div>
            <h3 className="text-xl font-bold mb-4"><a href="/styles" className="hover:underline">Styles</a></h3>
            <ul className="space-y-2">
              <li><a href="/styles" className="hover:underline">Cover ups</a></li>
              <li><a href="/styles" className="hover:underline">Black & grey</a></li>
              <li><a href="/styles" className="hover:underline">Colour</a></li>
              <li><a href="/styles" className="hover:underline">Portraits & Realistic</a></li>
              <li><a href="/styles" className="hover:underline">Micro /minimalist tattoo</a></li>
              <li><a href="/styles" className="hover:underline">Customised</a></li>
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-base">
              <li><span className="font-semibold">24K Tattoo Hair & oddities</span></li>
              <li>Road no 1, entry, near Nagarjuna Circle Road, opp. Mpm Times Square mall, Banjara Hills, near Florists, Hyderabad 500034</li>
              <li>+91-8178687129</li>
              <li>email@example.com</li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <span>© 2025 24K Tattoo Hair & oddities. All rights reserved.</span>
        </div>
      </div>
      {/* Floating Action Buttons */}
      <div className="fixed left-8 bottom-24 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/918178687129"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        >
          <FaWhatsapp className="text-white text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
