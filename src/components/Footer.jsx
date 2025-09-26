import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram } from 'lucide-react'
import { FaPinterest } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="bg-[#181818] border-t border-b border-yellow-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* BALLARD */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-white tracking-wide">BALLARD</h3>
            <div className="mb-2">
              <span className="font-bold text-white">ADDRESS</span>
              <div className="text-gray-200 font-serif text-lg">508 NW 65th Street<br/>Seattle, WA 98117</div>
            </div>
            <div className="mb-2">
              <span className="font-bold text-white">PHONE NUMBER</span>
              <div className="text-gray-200 font-serif text-lg">206-789-2618</div>
            </div>
            <button className="mt-4 border border-white text-white px-6 py-2 font-bold font-serif text-lg hover:bg-white hover:text-black transition-colors">CONTACT BALLARD SHOP →</button>
          </div>
          {/* WALLINGFORD */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-white tracking-wide">WALLINGFORD</h3>
            <div className="mb-2">
              <span className="font-bold text-white">ADDRESS</span>
              <div className="text-gray-200 font-serif text-lg">403 NE 45th Street<br/>Seattle, WA 98105</div>
            </div>
            <div className="mb-2">
              <span className="font-bold text-white">PHONE NUMBER</span>
              <div className="text-gray-200 font-serif text-lg">206-545-3685</div>
            </div>
            <button className="mt-4 border border-white text-white px-6 py-2 font-bold font-serif text-lg hover:bg-white hover:text-black transition-colors">CONTACT WALLINGFORD SHOP →</button>
          </div>
          {/* FOLLOW US */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-white tracking-wide">FOLLOW US</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="bg-[#3a3533] p-3 rounded"><Facebook className="text-white w-6 h-6" /></a>
              <a href="#" className="bg-[#3a3533] p-3 rounded"><Instagram className="text-white w-6 h-6" /></a>
              <a href="#" className="bg-[#3a3533] p-3 rounded"><FaPinterest className="text-white w-6 h-6" /></a>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-yellow-700 pt-8 mt-8">
          <div className="text-center">
            <span className="text-white font-serif text-lg">© 2025 24K Tattoo Hair & oddities</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
