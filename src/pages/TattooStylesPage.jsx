import React, { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const styles = [
  {
    name: 'Cover Ups',
    description: 'Transform existing tattoos into refreshed artwork with expert cover-up techniques.',
    image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=400&fit=crop',
    route: '/styles/cover-ups'
  },
  {
    name: 'Black & Grey',
    description: 'Monochrome shading with depth and contrast for timeless designs.',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=400&fit=crop',
    route: '/styles/black-grey'
  },
  {
    name: 'Colour',
    description: 'Vibrant color palettes and smooth blends for bold, eye-catching pieces.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop',
    route: '/styles/colour'
  },
  {
    name: 'Portraits & Realistic',
    description: 'Photorealistic detail capturing expressions, textures, and lifelike accuracy.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    route: '/styles/portraits-realistic'
  },
  {
    name: 'Micro / Minimalist tattoo',
    description: 'Elegant, small-scale designs with crisp, precise line work.',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop',
    route: '/styles/micro-minimalist'
  },
  {
    name: 'Customised tattoo',
    description: 'Fully custom designs tailored to your story, style, and placement.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    route: '/styles/customised-tattoo'
  }
]

const TattooStylesPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isZooming, setIsZooming] = useState(false)
  const [fromHero, setFromHero] = useState(false)

  useEffect(() => {
    // Check if navigation came from hero section
    if (location.state?.fromHero) {
      setFromHero(true)
      // Reset the state after animation
      setTimeout(() => setFromHero(false), 1000)
    }
  }, [location])

  const handleCoverUpsClick = (e) => {
    e.preventDefault()
    setIsZooming(true)
    
    // Add zoom animation class to the clicked card
    const card = e.currentTarget.closest('.style-card')
    card.classList.add('zoom-transition')
    
    // Navigate after animation completes
    setTimeout(() => {
      navigate('/styles/cover-ups')
    }, 660)
  }

  const handleStyleClick = (style, e) => {
    e.preventDefault()
    setIsZooming(true)
    
    // Add zoom animation class to the clicked card
    const card = e.currentTarget.closest('.style-card')
    card.classList.add('zoom-transition')
    
    // Navigate after animation completes
    setTimeout(() => {
      navigate(style.route)
    }, 660)
  }
  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      {/* Hero */}
      <motion.section 
        className="py-20 bg-minimal-white"
        initial={{ 
          opacity: 0, 
          x: fromHero ? -150 : 0,
          y: fromHero ? -150 : 50, 
          scale: fromHero ? 0.6 : 1,
          rotateZ: fromHero ? -15 : 0,
          rotateX: fromHero ? 20 : 0
        }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotateZ: 0, rotateX: 0 }}
        transition={{ 
          duration: fromHero ? 1.4 : 0.8, 
          ease: fromHero ? [0.25, 0.46, 0.45, 0.94] : "easeOut",
          delay: fromHero ? 0.2 : 0,
          type: fromHero ? "spring" : "tween",
          stiffness: fromHero ? 80 : undefined,
          damping: fromHero ? 15 : undefined
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ 
              opacity: 0, 
              x: fromHero ? 100 : 0,
              y: fromHero ? -100 : 30, 
              rotateX: fromHero ? 45 : 0,
              rotateY: fromHero ? 15 : 0,
              scale: fromHero ? 0.7 : 1
            }}
            animate={{ opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
            transition={{ 
              duration: fromHero ? 1.2 : 0.8, 
              delay: fromHero ? 0.4 : 0.2, 
              ease: fromHero ? [0.25, 0.46, 0.45, 0.94] : "easeOut",
              type: fromHero ? "spring" : "tween",
              stiffness: fromHero ? 100 : undefined,
              damping: fromHero ? 12 : undefined
            }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: fromHero ? 0.5 : 0.9, y: fromHero ? 30 : 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: fromHero ? 1.2 : 0.8, 
                delay: fromHero ? 0.7 : 0.4, 
                ease: fromHero ? "easeOut" : "easeOut",
                type: fromHero ? "spring" : "tween",
                stiffness: fromHero ? 100 : undefined
              }}
            >
              Styles
            </motion.h1>
            <motion.p 
              className="text-xl text-minimal-gray max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Explore our core styles. Every piece is crafted with precision and a minimalist sensibility.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Styles Grid */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {styles.map((style, index) => {
              // Create different slide directions for each card
              const slideDirections = [
                { x: -100, y: 0 },    // slide from left
                { x: 100, y: 0 },     // slide from right
                { x: 0, y: -100 },    // slide from top
                { x: -80, y: -80 },   // slide from top-left diagonal
                { x: 80, y: -80 },    // slide from top-right diagonal
                { x: 0, y: 100 }      // slide from bottom
              ];
              const slideDirection = slideDirections[index % slideDirections.length];
              
              return (
                <motion.div 
                  key={style.name} 
                  className="style-card bg-white border border-minimal-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
                  initial={{ 
                    opacity: 0, 
                    x: fromHero ? slideDirection.x : 0,
                    y: fromHero ? slideDirection.y : 60, 
                    scale: fromHero ? 0.7 : 0.9,
                    rotateX: fromHero ? 30 : 0,
                    rotateZ: fromHero ? (index % 2 === 0 ? -10 : 10) : 0
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0, rotateZ: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: fromHero ? 0.9 : 0.6, 
                    delay: fromHero ? (index * 0.12) + 0.6 : index * 0.1,
                    ease: fromHero ? [0.25, 0.46, 0.45, 0.94] : "easeOut",
                    type: fromHero ? "spring" : "tween",
                    stiffness: fromHero ? 100 : undefined,
                    damping: fromHero ? 15 : undefined
                  }}
                  whileHover={{ 
                    y: -10,
                    x: index % 2 === 0 ? -5 : 5,
                    rotateZ: index % 2 === 0 ? -2 : 2,
                    transition: { duration: 0.3 }
                  }}
                >
                <motion.img 
                  src={style.image} 
                  alt={style.name} 
                  className="w-full h-48 object-cover"
                  initial={{ 
                    scale: fromHero ? 1.4 : 1.1, 
                    opacity: fromHero ? 0 : 1,
                    filter: fromHero ? "blur(15px)" : "blur(0px)",
                    x: fromHero ? (slideDirection.x * 0.3) : 0,
                    y: fromHero ? (slideDirection.y * 0.3) : 0,
                    rotateZ: fromHero ? (index % 3 === 0 ? -15 : index % 3 === 1 ? 15 : 0) : 0
                  }}
                  whileInView={{ 
                    scale: 1, 
                    opacity: 1,
                    filter: "blur(0px)",
                    x: 0,
                    y: 0,
                    rotateZ: 0
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: fromHero ? 1.4 : 0.8, 
                    delay: fromHero ? (index * 0.12) + 0.8 : 0,
                    ease: fromHero ? [0.25, 0.46, 0.45, 0.94] : "easeOut",
                    type: fromHero ? "spring" : "tween",
                    stiffness: fromHero ? 80 : undefined,
                    damping: fromHero ? 12 : undefined
                  }}
                />
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold mb-2 text-minimal-black"
                    initial={{ 
                      opacity: 0, 
                      x: fromHero ? (slideDirection.x * 0.5) : -20,
                      y: fromHero ? (slideDirection.y * 0.2) : 0,
                      rotateZ: fromHero ? (index % 2 === 0 ? -5 : 5) : 0
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotateZ: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: fromHero ? 0.8 : 0.5, 
                      delay: fromHero ? (index * 0.12) + 1.0 : index * 0.1 + 0.3,
                      ease: fromHero ? [0.25, 0.46, 0.45, 0.94] : "easeOut",
                      type: fromHero ? "spring" : "tween",
                      stiffness: fromHero ? 120 : undefined
                    }}
                  >
                    {style.name}
                  </motion.h3>
                  <motion.p 
                    className="text-minimal-gray mb-4"
                    initial={{ 
                      opacity: 0, 
                      x: fromHero ? (slideDirection.x * 0.3) : -20,
                      y: fromHero ? (slideDirection.y * 0.1) : 0,
                      scale: fromHero ? 0.9 : 1
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: fromHero ? 0.7 : 0.5, 
                      delay: fromHero ? (index * 0.12) + 1.1 : index * 0.1 + 0.4,
                      ease: fromHero ? "easeOut" : "easeOut"
                    }}
                  >
                    {style.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    {style.name === 'Cover Ups' ? (
                      <button
                        onClick={handleCoverUpsClick}
                        className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 py-2 rounded-lg font-semibold inline-flex items-center transition-all duration-300 hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="ml-2" size={16} />
                      </button>
                    ) : (
                      <button
                        onClick={(e) => handleStyleClick(style, e)}
                        className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 py-2 rounded-lg font-semibold inline-flex items-center transition-all duration-300 hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="ml-2" size={16} />
                      </button>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        className="py-20 bg-light-charcoal"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-300 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Ready to Choose Your Style?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Book a consultation and we'll help refine your idea, placement, and sizing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/book-now"
              className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center"
            >
              BOOK CONSULTATION
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default TattooStylesPage


