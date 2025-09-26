import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const navigationItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Tattoos',
      path: '/tattoos/galleries',
      dropdown: [
        { name: 'Tattoo Galleries', path: '/tattoos/galleries' },
        { name: 'Tattoo Artists', path: '/tattoos/artists' },
        { name: 'Tattoo Aftercare', path: '/tattoos/aftercare' },
        { name: 'Tattoo Policies', path: '/tattoos/policies' }
      ]
    },
    {
      name: 'Piercings',
      path: '/piercings',
      dropdown: [
        { name: 'Piercing Jewelry', path: '/piercings/jewelry' },
        { name: 'Piercing Aftercare', path: '/piercings/aftercare' },
        { name: 'Piercing Pricing', path: '/piercings/pricing' },
        { name: 'Piercing Policies', path: '/piercings/policies' },
        { name: 'Book Piercing Online', path: '/piercings/book-online' }
      ]
    },
    { name: 'Artists', path: '/artists' },
    { name: 'FAQ', path: '/faq' },
    {
      name: 'Locations',
      path: '/locations',
      dropdown: [
        { name: 'Ballard', path: '/locations#ballard' },
        { name: 'Wallingford', path: '/locations#wallingford' }
      ]
    }
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold tracking-widest text-yellow-400 uppercase font-tattoo">
            24K Tattoos
          </Link>
          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              {navigationItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        className={`uppercase font-semibold tracking-wide px-2 py-1 transition-colors duration-200 ${isActive(item.path) ? 'text-yellow-400' : 'text-gray-200'} hover:text-yellow-400 flex items-center gap-1`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.name}
                        <ChevronDown size={16} />
                      </button>
                      <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 bg-black border border-gray-700 rounded-lg shadow-xl z-50 flex flex-col space-y-1 py-2 transition-all duration-200 ${activeDropdown === item.name ? 'block' : 'hidden'} group-hover:block`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-5 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors rounded"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`uppercase font-semibold tracking-wide px-2 py-1 transition-colors duration-200 ${isActive(item.path) ? 'text-yellow-400' : 'text-gray-200'} hover:text-yellow-400`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Book Now Button */}
          <div className="hidden lg:block ml-8">
            <Link
              to="/locations"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-7 py-3 rounded-full font-bold uppercase tracking-widest shadow-lg transition-colors duration-200 border-2 border-yellow-400 hover:border-yellow-500"
            >
              Book Now
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-2 p-2 rounded hover:bg-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className="block px-3 py-2 uppercase font-semibold tracking-wide hover:text-yellow-400 transition-colors"
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
                          className="block px-3 py-1 text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/locations"
                  className="block w-full bg-yellow-400 text-black hover:bg-yellow-500 px-3 py-2 rounded-full font-bold uppercase text-center tracking-widest transition-colors border-2 border-yellow-400 hover:border-yellow-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
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
