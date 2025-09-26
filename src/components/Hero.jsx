import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
             style={{backgroundImage: `url(${galleryImages[currentImageIndex]})`}}>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            24K TATTOOS
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Where Art Meets Skin
          </p>
          <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
            Custom tattoo artistry in the heart of the city. Our award-winning artists specialize in 
            bringing your vision to life with precision, creativity, and unmatched skill.
          </p>
          <div className="space-x-4">
            <button 
              onClick={() => scrollToSection('artists')}
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Meet Our Artists
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

