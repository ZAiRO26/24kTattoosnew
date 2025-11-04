import React, { useEffect } from 'react'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const PortraitsRealisticPage = () => {
  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind('[data-fancybox="portrait-gallery"]', {
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY"],
          right: ["slideshow", "thumbs", "close"]
        }
      }
    })

    return () => {
      Fancybox.destroy()
    }
  }, [])

  // Sample portrait/realistic tattoo images
  const portraitGallery = [
    { id: 1, image: '/assets/portrait/IMG_0149.jpg' },
    { id: 2, image: '/assets/portrait/IMG_2061.jpg' },
    { id: 3, image: '/assets/portrait/IMG_5668.jpg' },
    { id: 4, image: '/assets/portrait/IMG_5771.jpg' },
    { id: 5, image: '/assets/portrait/IMG_6019.jpg' },
    { id: 6, image: '/assets/portrait/IMG_6385.jpg' },
    { id: 7, image: '/assets/portrait/IMG_6691.jpg' },
    { id: 8, image: '/assets/portrait/IMG_7218.jpg' },
    { id: 9, image: '/assets/portrait/IMG_7277.jpg' },
    { id: 10, image: '/assets/portrait/IMG_7280.jpg' },
    { id: 11, image: '/assets/portrait/IMG_7327.jpg' },
    { id: 12, image: '/assets/portrait/IMG_7490.jpg' },
    { id: 13, image: '/assets/portrait/IMG_7691.jpg' },
    { id: 14, image: '/assets/portrait/IMG_7823.jpg' },
    { id: 15, image: '/assets/portrait/IMG_7893.jpg' },
    { id: 16, image: '/assets/portrait/IMG_8673.jpg' },
    { id: 17, image: '/assets/portrait/IMG_8894.jpg' },
    { id: 18, image: '/assets/portrait/IMG_9037.jpg' },
    { id: 19, image: '/assets/portrait/IMG_9082.jpg' },
    { id: 20, image: '/assets/portrait/IMG_9464.jpg' },
    { id: 21, image: '/assets/portrait/IMG_9510.jpg' }
  ]

  const specialties = [
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Photorealistic Detail',
      description: 'Capturing every nuance, texture, and expression with incredible precision and lifelike accuracy.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Advanced Shading',
      description: 'Expert use of light and shadow to create depth, dimension, and three-dimensional realism.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Expression Capture',
      description: 'Preserving the essence and emotion of your subject with careful attention to facial features.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Reference Mastery',
      description: 'Working from high-quality photos to ensure accurate proportions and faithful representation.'
    }
  ]

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Portraits & Realistic</h1>
            <p className="text-xl text-minimal-gray max-w-3xl mx-auto mb-8">
              Photorealistic detail capturing expressions, textures, and lifelike accuracy.
            </p>
            <div className="flex justify-center">
              <Link
                to="/book-now"
                className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto transition-all duration-300"
              >
                Book Portrait Tattoo
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Portrait Tattoos */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
                The Art of Realism
              </h2>
              <p className="text-lg text-minimal-gray mb-6">
                Portrait and realistic tattoos represent the pinnacle of tattoo artistry, requiring exceptional skill, patience, and attention to detail. These pieces capture the essence of a person, pet, or subject with stunning photographic accuracy.
              </p>
              <p className="text-lg text-minimal-gray mb-6">
                Our artists specialize in creating lifelike representations that preserve memories, honor loved ones, and showcase incredible artistic mastery. From subtle skin textures to expressive eyes, every detail matters.
              </p>
              <p className="text-lg text-minimal-gray">
                Using advanced shading and precise line work, we transform your cherished photographs into permanent works of art that capture not just appearance, but emotion and personality.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/assets/portrait/IMG_0149.jpg" 
                alt="Realistic Portrait Tattoo Example" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Portrait Specialties */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Portrait Specialties
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              We excel in various realistic techniques, ensuring your portrait tattoo achieves the highest level of photographic accuracy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-minimal-light-gray rounded-lg">
                {specialty.icon}
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-minimal-black">{specialty.title}</h3>
                  <p className="text-minimal-gray">{specialty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Portrait Gallery
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Explore our collection of photorealistic portraits and realistic tattoos, showcasing the incredible detail and artistry possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portraitGallery.map((item) => (
              <motion.div 
                key={item.id} 
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={item.image}
                  data-fancybox="portrait-gallery"
                  className="block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img 
                    src={item.image} 
                    alt="Portrait tattoo"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">View Full Size</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Portrait Process */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Portrait Process
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Every portrait tattoo follows our meticulous three-step process to ensure exceptional realism and lasting quality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Reference Analysis</h3>
              <p className="text-minimal-gray">
                We carefully study your reference photos, analyzing lighting, proportions, and key features to plan the perfect composition.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Detailed Execution</h3>
              <p className="text-minimal-gray">
                Using advanced shading and line techniques, we build up layers of detail to achieve photorealistic depth and texture.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Final Refinement</h3>
              <p className="text-minimal-gray">
                We add finishing touches and fine details to ensure every aspect captures the essence and emotion of your subject.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">Ready for a Realistic Masterpiece?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Book a consultation to discuss your portrait vision and let our artists create a photorealistic tribute that captures every detail.
          </p>
          <div className="flex justify-center">
            <Link
              to="/book-now"
              className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto transition-all duration-300"
            >
              BOOK PORTRAIT CONSULTATION
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortraitsRealisticPage