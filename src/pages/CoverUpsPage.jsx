import React from 'react'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const CoverUpsPage = () => {
  // Sample cover-up tattoo images - in a real implementation, these would be actual studio work
  const coverUpGallery = [
    {
      id: 1,
      before: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop',
      title: 'Floral Cover-Up Transformation'
    },
    {
      id: 2,
      before: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      title: 'Geometric Pattern Cover-Up'
    },
    {
      id: 3,
      before: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      title: 'Portrait Cover-Up Masterpiece'
    },
    {
      id: 4,
      before: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop',
      title: 'Mandala Cover-Up Design'
    },
    {
      id: 5,
      before: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      title: 'Realistic Animal Cover-Up'
    },
    {
      id: 6,
      before: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop',
      after: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      title: 'Abstract Art Cover-Up'
    }
  ]

  const specialties = [
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Expert Color Matching',
      description: 'We expertly match colors and tones to seamlessly blend your new design with your skin.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Strategic Design Planning',
      description: 'Our artists carefully plan each cover-up to ensure the old tattoo is completely transformed.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Advanced Techniques',
      description: 'Using the latest cover-up techniques and high-quality inks for lasting, beautiful results.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Personalized Consultation',
      description: 'Every cover-up starts with a detailed consultation to understand your vision and goals.'
    }
  ]

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cover Ups</h1>
            <p className="text-xl text-minimal-gray max-w-3xl mx-auto mb-8">
              Transform existing tattoos into refreshed artwork with expert cover-up techniques.
            </p>
            <div className="flex justify-center">
              <Link
                to="/book-now"
                className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center"
              >
                Book Cover Up Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Cover-Up Tattoos */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
                What Are Cover-Up Tattoos?
              </h2>
              <p className="text-lg text-minimal-gray mb-6">
                Cover-up tattoos are a specialized form of tattooing that involves creating a new design over an existing tattoo. This technique allows you to transform an unwanted, faded, or poorly executed tattoo into a beautiful piece of art that you'll love.
              </p>
              <p className="text-lg text-minimal-gray mb-6">
                The process requires exceptional skill, creativity, and technical expertise. Our artists must work with the existing ink, skin texture, and design elements to create something entirely new while ensuring the old tattoo is completely concealed.
              </p>
              <p className="text-lg text-minimal-gray">
                Whether you have a tattoo that no longer represents who you are, was poorly executed, or has faded over time, a cover-up can give you a fresh start with artwork you'll be proud to wear.
              </p>
            </div>
            <div className="aspect-square bg-white border border-minimal-border rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=600&fit=crop" 
                alt="Cover-up tattoo process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Best */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              What We Do Best in Cover-Up Tattoos
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              At 24K Tattoo Hair & Oddities, we specialize in transforming unwanted tattoos into stunning works of art. Our expertise lies in these key areas:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white border border-minimal-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="mr-4 mt-1">
                    {specialty.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-minimal-black">{specialty.title}</h3>
                    <p className="text-minimal-gray">{specialty.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cover-Up Gallery */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Cover-Up Transformations
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              See the incredible transformations our skilled artists have achieved. Each before and after tells a story of renewal and artistic excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverUpGallery.map((item) => (
              <div key={item.id} className="bg-white border border-minimal-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={item.before} alt="Before cover-up" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="After cover-up" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-minimal-black mb-2">{item.title}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-accent-gold fill-current" />
                    <Star className="w-4 h-4 text-accent-gold fill-current" />
                    <Star className="w-4 h-4 text-accent-gold fill-current" />
                    <Star className="w-4 h-4 text-accent-gold fill-current" />
                    <Star className="w-4 h-4 text-accent-gold fill-current" />
                    <span className="ml-2 text-sm text-minimal-gray">Transformation Complete</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Cover-Up Process
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              We follow a meticulous process to ensure your cover-up exceeds expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-luxury-dark">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-minimal-black">Consultation & Assessment</h3>
              <p className="text-minimal-gray">
                We evaluate your existing tattoo, discuss your vision, and create a custom design plan that will effectively cover and transform your old ink.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-luxury-dark">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-minimal-black">Design & Planning</h3>
              <p className="text-minimal-gray">
                Our artists create a detailed design that strategically incorporates dark areas and uses advanced techniques to ensure complete coverage of your old tattoo.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-luxury-dark">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-minimal-black">Transformation</h3>
              <p className="text-minimal-gray">
                Using premium inks and expert techniques, we carefully execute your new design, transforming your old tattoo into a beautiful piece of art you'll love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
            Ready to Transform Your Tattoo?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Book a consultation with our cover-up specialists and discover how we can transform your unwanted tattoo into a masterpiece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-now"
              className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center"
            >
              BOOK COVER-UP CONSULTATION
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <a
              href="tel:+919876543210"
              className="border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-luxury-dark px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              CALL US NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoverUpsPage