import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Pinterest } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Ballard Location */}
          <div>
            <h3 className="text-lg font-bold mb-4">Ballard</h3>
            <div className="space-y-2 text-gray-400">
              <p><strong>Address:</strong></p>
              <p>508 NW 65th Street Seattle, WA 98117</p>
              <p><strong>Phone Number:</strong></p>
              <p>206-789-2618</p>
            </div>
            <Link 
              to="/locations#ballard"
              className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition-colors inline-block text-sm"
            >
              Contact Ballard Shop
            </Link>
          </div>

          {/* Wallingford Location */}
          <div>
            <h3 className="text-lg font-bold mb-4">Wallingford</h3>
            <div className="space-y-2 text-gray-400">
              <p><strong>Address:</strong></p>
              <p>403 NE 45th Street Seattle, WA 98105</p>
              <p><strong>Phone Number:</strong></p>
              <p>206-545-3685</p>
            </div>
            <Link 
              to="/locations#wallingford"
              className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition-colors inline-block text-sm"
            >
              Contact Wallingford Shop
            </Link>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow us</h3>
            <div className="flex space-x-4 mb-4">
              <Facebook className="text-red-400 hover:text-red-300 cursor-pointer" size={24} />
              <Instagram className="text-red-400 hover:text-red-300 cursor-pointer" size={24} />
              <Pinterest className="text-red-400 hover:text-red-300 cursor-pointer" size={24} />
            </div>
            <div className="text-gray-400">
              <p className="mb-2">Stay connected for updates on:</p>
              <ul className="space-y-1 text-sm">
                <li>• New artist portfolios</li>
                <li>• Special promotions</li>
                <li>• Studio events</li>
                <li>• Latest tattoo work</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-4">
              24K TATTOOS
            </div>
            <p className="text-gray-400 mb-4">Professional tattoo artistry since 2010</p>
            <p className="text-gray-500 text-sm">
              © 2024 24K Tattoos. All rights reserved. | Website Design by Full Circle Web
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
