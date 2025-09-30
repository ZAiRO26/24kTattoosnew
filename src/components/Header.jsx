
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)
  const location = useLocation()

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Styles', path: '/styles' },
    {
      name: 'About Us',
      path: '/about',
      dropdown: [
        { name: 'Our story', path: '/about/our-story' },
        { name: 'About artist', path: '/about/artist' },
        { name: 'Studio', path: '/about/studio' }
      ]
    },
    {
      name: 'Hair and Piercing',
      path: '/hair-and-piercing',
      dropdown: [
        { name: 'Hair Services', path: '/hair-services' },
        { name: 'Piercing Services', path: '/piercing-services' }
      ]
    },
    {
      name: "Do's and Don'ts",
      path: '/dos-and-donts',
      dropdown: [
        { name: 'Tattoos', path: '/dos-and-donts/tattoos' },
        { name: 'Piercings', path: '/dos-and-donts/piercings' },
        { name: 'Policies', path: '/dos-and-donts/policies' },
        { name: 'FAQ', path: '/dos-and-donts/faq' }
      ]
    },
    { name: 'Contact us', path: '/book-now' },
    { name: 'Press & Socials', path: '/press-socials' }
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
            <img 
              src="/assets/logo1.PNG" 
              alt="24K Tattoo Hair & Oddities Logo" 
              className="h-16 w-auto object-contain"
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 ml-20">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative flex items-center">
                    <Link
                      to={item.path}
                      className={`text-sm font-medium tracking-wide transition-colors duration-200 flex items-center gap-1 ${
                        isActive(item.path) 
                          ? 'text-minimal-black border-b border-minimal-black pb-1' 
                          : 'text-minimal-gray hover:text-minimal-black'
                      }`}
                      onClick={() => setActiveDropdown(null)}
                      onMouseEnter={() => {
                        if (dropdownTimeout) clearTimeout(dropdownTimeout)
                        setActiveDropdown(item.name)
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => setActiveDropdown(null), 250)
                        setDropdownTimeout(timeout)
                      }}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </Link>
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 bg-white border border-minimal-border rounded-lg shadow-xl z-50 flex flex-col space-y-1 py-2 transition-all duration-200 ${
                        activeDropdown === item.name ? 'block' : 'hidden'
                      } group-hover:block`}
                      onMouseEnter={() => {
                        if (dropdownTimeout) clearTimeout(dropdownTimeout)
                        setActiveDropdown(item.name)
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => setActiveDropdown(null), 250)
                        setDropdownTimeout(timeout)
                      }}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-5 py-2 text-base font-medium text-minimal-black hover:bg-minimal-light-gray hover:text-minimal-black transition-colors rounded"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive(item.path) 
                        ? 'text-minimal-black border-b border-minimal-black pb-1' 
                        : 'text-minimal-gray hover:text-minimal-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
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
                <div key={item.name}>
                  <Link
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
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block text-sm text-minimal-gray hover:text-minimal-black transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
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
