import React from 'react'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const CustomisedTattooPage = () => {
  // Sample customised tattoo images
  const customGallery = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop',
      title: 'Personal Symbol Design'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop',
      title: 'Custom Sleeve Concept'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
      title: 'Unique Geometric Pattern'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      title: 'Bespoke Artwork'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop',
      title: 'Personalized Memorial'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      title: 'Original Concept Art'
    }
  ]

  const specialties = [
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Original Design Creation',
      description: 'We create completely unique designs tailored to your vision, story, and personal aesthetic preferences.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Collaborative Process',
      description: 'Working closely with you through every step, from initial concept to final design refinement and execution.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Style Adaptation',
      description: 'Adapting any artistic style or combining multiple influences to create something uniquely yours.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Perfect Placement',
      description: 'Custom sizing and placement consultation to ensure your design complements your body perfectly.'
    }
  ]

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Customised Tattoo</h1>
            <p className="text-xl text-minimal-gray max-w-3xl mx-auto mb-8">
              Fully custom designs tailored to your vision, style, and placement.
            </p>
            <div className="flex justify-center">
              <Link
                to="/book-now"
                className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center"
              >
                Book Custom Design
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Custom Tattoos */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
                Your Vision, Our Artistry
              </h2>
              <p className="text-lg text-minimal-gray mb-6">
                Customised tattoos represent the ultimate in personal expression. These are completely original designs created specifically for you, incorporating your ideas, memories, and aesthetic preferences into a one-of-a-kind piece of art.
              </p>
              <p className="text-lg text-minimal-gray mb-6">
                Our collaborative design process ensures that every element has meaning and purpose. From initial sketches to final execution, we work together to bring your unique vision to life with professional artistry and technical excellence.
              </p>
              <p className="text-lg text-minimal-gray">
                Whether you have a clear concept or just a feeling you want to capture, our artists excel at translating ideas into stunning visual designs that tell your story in a way that's uniquely yours.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=600&fit=crop" 
                alt="Custom Tattoo Design Example" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Custom Specialties */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Custom Specialties
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              We excel in creating original, personalized designs that perfectly capture your vision and translate beautifully to skin.
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
              Custom Gallery
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Explore our collection of fully customised tattoos, each one a unique collaboration between artist and client.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customGallery.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-minimal-black">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Custom Process */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Custom Process
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Every custom tattoo follows our comprehensive three-step collaborative process to ensure your vision becomes reality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Concept Development</h3>
              <p className="text-minimal-gray">
                We discuss your ideas, inspiration, and vision in detail, then create initial sketches and design concepts for your review.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Design Refinement</h3>
              <p className="text-minimal-gray">
                Through collaborative feedback, we refine and perfect the design until it captures exactly what you envisioned.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Masterful Execution</h3>
              <p className="text-minimal-gray">
                With the perfect design finalized, we execute your custom tattoo with precision, artistry, and attention to every detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">Ready to Create Something Unique?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Book a consultation to discuss your custom design ideas and let our artists bring your personal vision to life.
          </p>
          <Link
            to="/book-now"
            className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center"
          >
            BOOK CUSTOM CONSULTATION
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CustomisedTattooPage