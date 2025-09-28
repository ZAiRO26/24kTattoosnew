
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)
  const location = useLocation()

  const navigationItems = [
    { name: 'Welcome', path: '/' },
    { name: 'Work', path: '/tattoos/galleries' },
    { name: 'Shop', path: '/shop' },
    { name: 'Team', path: '/tattoos/artists' },
    { name: 'Studios', path: '/locations' },
    { name: 'Contact', path: '/book-now' }
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-minimal-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-minimal-black tracking-wider">
              24K TATTOO
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive(item.path) 
                    ? 'text-minimal-black border-b border-minimal-black pb-1' 
                    : 'text-minimal-gray hover:text-minimal-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-sm font-medium text-minimal-black border border-minimal-black px-4 py-2 hover:bg-minimal-black hover:text-white transition-colors duration-200">
              FINANCE YOUR TATTOO
            </button>
            <Link
              to="/book-now"
              className="bg-minimal-black text-white px-6 py-2 text-sm font-medium hover:bg-minimal-dark-gray transition-colors duration-200"
            >
              BOOK TATTOO APPOINTMENT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-minimal-border bg-white">
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-sm font-medium transition-colors ${
                    isActive(item.path) 
                      ? 'text-minimal-black' 
                      : 'text-minimal-gray hover:text-minimal-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <button className="block w-full text-sm font-medium text-minimal-black border border-minimal-black px-4 py-2 hover:bg-minimal-black hover:text-white transition-colors duration-200">
                  FINANCE YOUR TATTOO
                </button>
                <Link
                  to="/book-now"
                  className="block w-full bg-minimal-black text-white px-4 py-2 text-sm font-medium text-center hover:bg-minimal-dark-gray transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BOOK TATTOO APPOINTMENT
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
