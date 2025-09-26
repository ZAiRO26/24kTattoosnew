
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

// Google Fonts import for script and tattoo style
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Permanent+Marker&display=swap');
`;
if (typeof document !== 'undefined' && !document.getElementById('custom-fonts')) {
  const style = document.createElement('style');
  style.id = 'custom-fonts';
  style.innerHTML = fontStyles;
  document.head.appendChild(style);
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)
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
          <Link to="/" className="flex flex-col items-center gap-0 select-none" style={{textDecoration: 'none', lineHeight: 1}}>
            <span style={{
              fontFamily: 'Great Vibes, cursive',
              fontSize: '2.1rem',
              color: 'white',
              fontWeight: 400,
              letterSpacing: '0.02em',
              marginBottom: '-0.3em',
              textShadow: '2px 2px 8px #000, 0 0 2px #000'
            }}>
              24K Tattoo Hair & oddities
            </span>
            <span style={{
              fontFamily: 'Permanent Marker, sans-serif',
              fontSize: '2.2rem',
              color: '#e53e3e',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textShadow: '2px 2px 8px #000, 0 0 2px #000'
            }}>
              TATTOO
            </span>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <a href="https://www.instagram.com/xxivk.in/?hl=en" target="_blank" rel="noopener noreferrer" className="ml-8 text-pink-400 hover:text-pink-600 font-semibold text-lg flex items-center">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="mr-1"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.333 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.282.353 2.394 1.333 3.374.98.98 2.092 1.274 3.374 1.333C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.394-.353 3.374-1.333.98-.98 1.274-2.092 1.333-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.282-.353-2.394-1.333-3.374-.98-.98-2.092-1.274-3.374-1.333C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              Instagram
            </a>
            <ul className="flex space-x-8">
              {navigationItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="relative flex items-center">
                      <Link
                        to={item.name === 'Tattoos' ? '/tattoos' : item.path}
                        className={`uppercase font-semibold tracking-wide px-2 py-1 transition-colors duration-200 flex items-center gap-1 ${isActive(item.name === 'Tattoos' ? '/tattoos' : item.path) ? 'text-yellow-400' : 'text-gray-200'} hover:text-yellow-400`}
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
                        className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 bg-black border border-gray-700 rounded-lg shadow-xl z-50 flex flex-col space-y-1 py-2 transition-all duration-200 ${activeDropdown === item.name ? 'block' : 'hidden'} group-hover:block`}
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
                            className="block px-5 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors rounded"
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
