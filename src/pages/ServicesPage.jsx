import React from 'react'
import { Link } from 'react-router-dom'
import { Scissors, Sparkles, Shield, Award, Star, CheckCircle } from 'lucide-react'

const ServicesPage = () => {
  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-minimal-black mb-6">
              Our Services
            </h1>
            <p className="text-lg text-minimal-gray max-w-4xl mx-auto leading-relaxed">
              At <strong className="text-minimal-black">24K Tattoo Hair & Oddities</strong>, we offer an exclusive blend of tattoo artistry, hair styling, and piercing services—all delivered with the same level of precision, creativity, and care that defines our brand.
            </p>
          </div>
        </div>
      </section>

      {/* Tattoo Services Section */}
      <section className="py-16 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-6">
              Tattoo Artistry
            </h2>
            <p className="text-lg text-minimal-gray max-w-4xl mx-auto leading-relaxed">
              Our tattoo division is helmed by one of India's finest artists, <strong className="text-minimal-black">Vikram Mehndiratta</strong>, whose masterful designs transform personal stories into timeless works of art. Using professional-grade tools and premium inks, every tattoo is crafted in a hygienic, serene environment ensuring your complete comfort and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-minimal-border hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Custom Design</h3>
              <p className="text-minimal-gray">
                Unique artwork tailored to your personal story and vision, crafted by master artist Vikram Mehndiratta.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Premium Quality</h3>
              <p className="text-minimal-gray">
                Professional-grade tools, premium inks, and rigorous hygiene protocols for your safety and comfort.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Timeless Art</h3>
              <p className="text-minimal-gray">
                Every tattoo is a masterpiece designed to stand the test of time, both in quality and artistic vision.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/styles" 
              className="bg-accent-gold text-luxury-dark px-8 py-4 font-medium hover:bg-gold-dark transition-colors duration-200 inline-block"
            >
              VIEW TATTOO STYLES
            </Link>
          </div>
        </div>
      </section>

      {/* Hair Services Section */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-6">
              Hair Services
            </h2>
            <p className="text-lg text-minimal-gray max-w-4xl mx-auto leading-relaxed">
              Complementing this, our hair services blend innovation with elegance. Whether seeking a fresh cut, tailored styling, or bespoke grooming, our expert stylists understand how to enhance your natural charisma while maintaining impeccable standards of hygiene and care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-minimal-light-gray p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Expert Cuts</h3>
              <p className="text-minimal-gray">
                Fresh cuts and tailored styling that enhance your natural charisma and personal style.
              </p>
            </div>

            <div className="bg-minimal-light-gray p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Bespoke Grooming</h3>
              <p className="text-minimal-gray">
                Personalized grooming services that blend innovation with elegance for a unique look.
              </p>
            </div>

            <div className="bg-minimal-light-gray p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Impeccable Standards</h3>
              <p className="text-minimal-gray">
                Maintaining the highest standards of hygiene and care in every hair service we provide.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/hair-services" 
              className="bg-accent-gold text-luxury-dark px-8 py-4 font-medium hover:bg-gold-dark transition-colors duration-200 inline-block"
            >
              EXPLORE HAIR SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Piercing Services Section */}
      <section className="py-16 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-6">
              Piercing Studio
            </h2>
            <p className="text-lg text-minimal-gray max-w-4xl mx-auto leading-relaxed">
              Our piercing studio offers a range of options performed with clinical precision and the utmost attention to safety. From classic ear piercings to more unique placements, each procedure is conducted with professional-grade equipment and sterilization protocols that exceed industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-minimal-border hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Clinical Precision</h3>
              <p className="text-minimal-gray">
                Every piercing performed with clinical precision and the utmost attention to safety protocols.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Unique Placements</h3>
              <p className="text-minimal-gray">
                From classic ear piercings to more unique placements, we offer a comprehensive range of options.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-minimal-border hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Industry Standards</h3>
              <p className="text-minimal-gray">
                Professional-grade equipment and sterilization protocols that exceed industry standards.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/piercing-services" 
              className="bg-accent-gold text-luxury-dark px-8 py-4 font-medium hover:bg-gold-dark transition-colors duration-200 inline-block"
            >
              VIEW PIERCING SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-light-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
            An Experience Beyond Appearance
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            At <strong className="text-gray-300">24K Tattoo Hair & Oddities</strong>, every service is an experience designed to elevate your personal expression. We invite clients to relax, trust our expertise, and emerge transformed—not just in appearance, but in confidence and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-now" 
              className="bg-accent-gold text-luxury-dark px-8 py-4 font-medium hover:bg-gold-dark transition-colors duration-200"
            >
              BOOK APPOINTMENT
            </Link>
            <Link 
              to="/about/our-story" 
              className="border border-accent-gold text-accent-gold px-8 py-4 font-medium hover:bg-accent-gold hover:text-luxury-dark transition-colors duration-200"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage