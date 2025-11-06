
import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)
  const [mobileDropdowns, setMobileDropdowns] = useState({})
  const location = useLocation()
  const mobileMenuRef = useRef(null)

  // Close mobile menu when clicking outside or on links
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
        setMobileDropdowns({}) // Reset mobile dropdowns when menu closes
      }
    }

    const handleTouchOutside = (event) => {
      if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
        setMobileDropdowns({}) // Reset mobile dropdowns when menu closes
      }
    }

    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleTouchOutside)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleTouchOutside)
    }
  }, [isMenuOpen])

  // Toggle mobile dropdown
  const toggleMobileDropdown = (itemName) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }))
  }

  const navigationItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Styles', 
      path: '/styles',
      dropdown: [
        { name: 'Cover Ups', path: '/styles/cover-ups' },
        { name: 'Black & Grey', path: '/styles/black-grey' },
        { name: 'Colour', path: '/styles/colour' },
        { name: 'Portraits & Realistic', path: '/styles/portraits-realistic' },
        { name: 'Micro / Minimalist', path: '/styles/micro-minimalist' },
        { name: 'Customised', path: '/styles/customised-tattoo' },
        { name: 'Gallery', path: '/styles/gallery' }
      ]
    },
    {
      name: 'Hair and Piercing',
      path: '/hair-and-piercing',
      dropdown: [
        { name: 'Hair Services', path: '/hair-services' },
        { name: 'Piercing Services', path: '/piercing-services' },
        { name: 'About Hair Artist', path: '/hair-and-piercing/hair-artist' }
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
    {
      name: 'Tattoo Academy',
      path: '/tattoo-academy',
      dropdown: [
        { name: 'Short Term Courses', path: '/tattoo-academy/short-term-courses' },
        { name: 'Basic Tattoo Courses', path: '/tattoo-academy/basic-courses' },
        { name: 'Pro Tattoo courses', path: '/tattoo-academy/pro-courses' }
      ]
    },
    {
      name: 'About Us',
      path: '/about',
      dropdown: [
        { name: 'Our story', path: '/about/our-story' },
        { name: 'About Artist', path: '/about/artist' },
        { name: 'Studio', path: '/about/studio' },
        { name: 'Press & Socials', path: '/press-socials' }
      ]
    },
    { name: 'Contact us', path: '/book-now' }
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-soft-gray transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <img 
              src="/assets/logo2.PNG"
              alt="24K Tattoo Hair & Oddities Logo" 
              className="h-16 w-auto object-contain"
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative flex items-center">
                    <Link
                      to={item.path}
                      className={`text-sm font-medium tracking-wide transition-colors duration-200 flex items-center gap-1 ${
                        isActive(item.path) 
                          ? 'text-luxury-dark border-b border-accent-gold pb-1' 
                          : 'text-charcoal hover:text-luxury-dark'
                      }`}
                      onClick={(e) => {
                        if (location.pathname === item.path) {
                          e.preventDefault();
                          window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
                        }
                        setActiveDropdown(null);
                      }}
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
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 bg-white border border-soft-gray rounded-lg shadow-xl z-50 flex flex-col space-y-1 py-2 transition-all duration-200 ${
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
                          className="block px-5 py-2 text-base font-medium text-luxury-dark hover:bg-light-gray hover:text-luxury-dark transition-colors rounded"
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
                        ? 'text-luxury-dark border-b border-accent-gold pb-1' 
                        : 'text-charcoal hover:text-luxury-dark'
                    }`}
                    onClick={(e) => {
                      if (location.pathname === item.path) {
                        e.preventDefault();
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-3 ml-auto">
            <Link
              to="/book-now"
              className="bg-accent-gold text-luxury-dark px-6 py-2 text-sm font-medium hover:bg-gold-dark hover:text-warm-white transition-colors duration-200 rounded"
            >
              BOOK TATTOO APPOINTMENT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 touch-manipulation ml-auto relative z-50 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
              if (isMenuOpen) {
                setMobileDropdowns({})
              }
            }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} className="text-charcoal" /> : <Menu size={24} className="text-charcoal" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div ref={mobileMenuRef} className="lg:hidden border-t border-soft-gray bg-white">
            <div className="px-6 py-4 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={`flex items-center justify-between w-full text-base font-medium transition-colors py-2 touch-manipulation ${
                          isActive(item.path) 
                            ? 'text-luxury-dark' 
                            : 'text-charcoal hover:text-luxury-dark'
                        }`}
                      >
                        <span>{item.name}</span>
                        {mobileDropdowns[item.name] ? (
                          <ChevronUp size={20} className="text-accent-gold" />
                        ) : (
                          <ChevronDown size={20} className="text-accent-gold" />
                        )}
                      </button>
                      {mobileDropdowns[item.name] && (
                        <div className="ml-4 space-y-2 mt-2 pb-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block text-sm text-charcoal hover:text-luxury-dark transition-colors py-2 touch-manipulation"
                              onClick={() => {
                                setIsMenuOpen(false)
                                setMobileDropdowns({})
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block text-base font-medium transition-colors py-2 touch-manipulation ${
                        isActive(item.path) 
                          ? 'text-luxury-dark' 
                          : 'text-charcoal hover:text-luxury-dark'
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setMobileDropdowns({});
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Link
                  to="/book-now"
                  className="block w-full bg-accent-gold text-luxury-dark px-4 py-3 text-base font-medium text-center hover:bg-gold-dark hover:text-warm-white transition-colors duration-200 min-h-[48px] flex items-center justify-center touch-manipulation"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setMobileDropdowns({})
                  }}
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
