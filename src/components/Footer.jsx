
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {

  return (
    <>
      <footer className="bg-gray-50 border-t border-gray-200 py-6 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-4 items-start">
            {/* Brand/Intro */}
            <div className="md:col-span-1">
              <Link
                to="/"
                className="text-xl font-bold mb-2 tracking-tight text-minimal-black cursor-pointer transition-all duration-200 hover:text-accent-gold active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent-gold"
                aria-label="Go to homepage"
                title="Go to homepage"
              >
                24K Tattoo Hair & oddities
              </Link>
              <p className="mb-2 text-sm leading-relaxed">Tattoos that tell your story – Since 2005 🔱Hyderabad's OG Tattoo Artist🔱</p>
              <div className="flex gap-3 text-lg">
                <a 
                  href="https://www.facebook.com/xxivk.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-600" 
                  aria-label="Facebook"
                ><FaFacebookF /></a>
                <a 
                  href="https://www.instagram.com/xxivk.in/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="hover:text-green-600"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://www.instagram.com/tattoosbyvikram/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram - tattoosbyvikram"
                  className="hover:text-green-600"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://www.instagram.com/karishmathakkar06/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram - karishmathakkar06"
                  className="hover:text-green-600"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://wa.me/918178687129" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-600" 
                  aria-label="WhatsApp"
                ><FaWhatsapp /></a>
                <a 
                  href="https://www.youtube.com/@TattooHyderabad/featured" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-600" 
                  aria-label="YouTube"
                ><FaYoutube /></a>
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
                <li><a href="tel:+918178687129" className="hover:underline">+91 81786 87129</a></li>
                <li><a href="https://maps.app.goo.gl/7nRm6BdhYTs7rP2w7" target="_blank" rel="noopener noreferrer" className="hover:underline">View on Google Maps</a></li>
              </ul>
            </div>
          </div>
          <hr className="my-3 border-gray-200" />
          <div className="flex flex-col md:flex-row items-center justify-center text-sm text-gray-500">
            <span>© 2025 24K Tattoo Hair & oddities. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
