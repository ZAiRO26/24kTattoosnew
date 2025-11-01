import React, { useEffect } from 'react'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const MicroMinimalistPage = () => {
  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind('[data-fancybox="micro-gallery"]', {
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

  // Micro/minimalist tattoo images from studio assets
  const microGallery = [
    {
      id: 1,
      image: '/assets/Minamalist/IMG_0160.jpg'
    },
    {
      id: 2,
      image: '/assets/Minamalist/IMG_3250.jpg'
    },
    {
      id: 3,
      image: '/assets/Minamalist/IMG_4024.jpg'
    },
    {
      id: 4,
      image: '/assets/Minamalist/IMG_4454.jpg'
    },
    {
      id: 5,
      image: '/assets/Minamalist/IMG_4732.jpg'
    },
    {
      id: 6,
      image: '/assets/Minamalist/IMG_4857.jpg'
    },
    {
      id: 7,
      image: '/assets/Minamalist/IMG_4950.jpg'
    },
    {
      id: 8,
      image: '/assets/Minamalist/IMG_6062.jpg'
    },
    {
      id: 9,
      image: '/assets/Minamalist/IMG_6741.jpg'
    },
    {
      id: 10,
      image: '/assets/Minamalist/IMG_6749.jpg'
    },
    {
      id: 11,
      image: '/assets/Minamalist/IMG_6851.jpg'
    },
    {
      id: 12,
      image: '/assets/Minamalist/IMG_6866.jpg'
    },
    {
      id: 13,
      image: '/assets/Minamalist/IMG_6930.jpg'
    },
    {
      id: 14,
      image: '/assets/Minamalist/IMG_6940.jpg'
    },
    {
      id: 15,
      image: '/assets/Minamalist/IMG_6945.jpg'
    },
    {
      id: 16,
      image: '/assets/Minamalist/IMG_7010.jpg'
    },
    {
      id: 17,
      image: '/assets/Minamalist/IMG_7017.jpg'
    },
    {
      id: 18,
      image: '/assets/Minamalist/IMG_7248.jpg'
    }
  ]

  const specialties = [
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Precision Line Work',
      description: 'Ultra-fine lines and delicate details that require exceptional steadiness and skill to execute perfectly.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Elegant Simplicity',
      description: 'Creating maximum impact with minimal elements, focusing on clean design and meaningful symbolism.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Subtle Placement',
      description: 'Expert guidance on optimal placement for small tattoos that complement your natural body contours.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Crisp Detail',
      description: 'Maintaining sharp, clean lines and precise details even at the smallest scales for lasting clarity.'
    }
  ]

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Micro / Minimalist</h1>
            <p className="text-xl text-minimal-gray max-w-3xl mx-auto mb-8">
              Elegant, small-scale designs with crisp, precise line work.
            </p>
            <div className="flex justify-center">
              <Link
                to="/book-now"
                className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto transition-all duration-300"
              >
                Book Micro Tattoo
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Micro Tattoos */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
                The Beauty of Minimalism
              </h2>
              <p className="text-lg text-minimal-gray mb-6">
                Micro and minimalist tattoos prove that size doesn't determine impact. These delicate, small-scale designs focus on clean lines, elegant simplicity, and meaningful symbolism that speaks volumes through subtle artistry.
              </p>
              <p className="text-lg text-minimal-gray mb-6">
                Perfect for first-time tattoo clients or those who prefer understated elegance, these pieces require exceptional precision and skill to execute properly. Every line must be perfect, every detail crisp and intentional.
              </p>
              <p className="text-lg text-minimal-gray">
                From tiny symbols and delicate florals to fine-line geometric patterns and minimalist script, these tattoos offer sophisticated beauty that complements any lifestyle or profession.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=600&fit=crop" 
                alt="Minimalist Tattoo Example" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Micro Specialties */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Micro Specialties
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              We excel in the precise techniques required for micro and minimalist tattoos, ensuring every small detail is executed flawlessly.
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
              Micro Gallery
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Explore our collection of delicate micro and minimalist tattoos, showcasing the elegance possible in small-scale artistry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microGallery.map((item) => (
              <motion.div 
                key={item.id} 
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={item.image}
                  data-fancybox="micro-gallery"
                  className="block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img 
                    src={item.image} 
                    alt="Micro tattoo"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Micro Process */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Micro Process
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Every micro tattoo follows our careful three-step process to ensure precision, clarity, and lasting beauty at any size.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Design Refinement</h3>
              <p className="text-minimal-gray">
                We simplify and refine your concept to its essential elements, ensuring it will translate beautifully at a small scale.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Precise Execution</h3>
              <p className="text-minimal-gray">
                Using the finest needles and steadiest hands, we create ultra-clean lines and perfect details with surgical precision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Quality Assurance</h3>
              <p className="text-minimal-gray">
                We ensure every line is crisp, every detail sharp, and the overall design maintains its clarity and impact over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">Ready for Elegant Simplicity?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Book a consultation to explore minimalist design options and let our artists create a delicate masterpiece that speaks volumes.
          </p>
          <div className="flex justify-center">
            <Link
              to="/book-now"
              className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto transition-all duration-300"
            >
              BOOK MICRO CONSULTATION
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MicroMinimalistPage