import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
 

const BlackGreyPage = () => {

  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      // Options
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);
  // Sample black & grey tattoo images - Updated to remove titles for consistency
  const blackGreyGallery = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop'
    }
  ];

  const specialties = [
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Master Shading Techniques',
      description: 'Expert use of gradients and contrast to create depth and dimension in monochrome designs.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Photorealistic Detail',
      description: 'Achieving lifelike portraits and realistic imagery using only black and grey tones.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Timeless Aesthetic',
      description: 'Creating classic designs that maintain their elegance and impact over time.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Precision Line Work',
      description: 'Clean, precise lines combined with smooth gradients for professional results.'
    }
  ]

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      
      {/* Hero Section */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Black & Grey</h1>
            <p className="text-xl text-minimal-gray max-w-3xl mx-auto mb-8">
              Monochrome shading with depth and contrast for timeless designs.
            </p>
            <div className="flex justify-center">
              <Link
                to="/book-now"
                className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto transition-all duration-300"
              >
                Book Black & Grey Tattoo
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Black & Grey Tattoos */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
                The Art of Black & Grey
              </h2>
              <p className="text-lg text-minimal-gray mb-6">
                Black and grey tattoos represent the purest form of tattoo artistry, relying solely on the interplay of light and shadow to create stunning visual impact. This classic style emphasizes technical skill, precision, and artistic vision.
              </p>
              <p className="text-lg text-minimal-gray mb-6">
                Using only black ink diluted to various shades of grey, our artists create depth, texture, and realism that rivals any colored piece. The monochromatic palette allows for incredible detail and creates timeless designs that never go out of style.
              </p>
              <p className="text-lg text-minimal-gray">
                From photorealistic portraits to intricate geometric patterns, black and grey tattoos offer versatility and elegance that makes them perfect for both first-time clients and seasoned collectors.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=600&fit=crop" 
                alt="Black and Grey Tattoo Example" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Black & Grey Specialties */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Black & Grey Specialties
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              We excel in various black and grey techniques, ensuring your tattoo achieves the perfect balance of contrast and detail.
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
              Black & Grey Gallery
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Explore our collection of black and grey masterpieces, showcasing the depth and beauty achievable with monochromatic artistry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blackGreyGallery.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <a 
                  href={item.image}
                  data-fancybox="gallery"
                  className="flex-1 flex items-center justify-center"
                >
                  <img 
                    src={item.image} 
                    alt="Black & Grey tattoo artwork"
                    className="w-full h-64 object-cover object-center cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Black & Grey Process */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Black & Grey Process
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Every black and grey tattoo follows our proven three-step process to ensure exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Design & Consultation</h3>
              <p className="text-minimal-gray">
                We work with you to create the perfect design, considering contrast, shading, and placement for optimal visual impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Expert Application</h3>
              <p className="text-minimal-gray">
                Our skilled artists use advanced shading techniques to build depth and dimension, creating smooth gradients and sharp details.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Finishing & Care</h3>
              <p className="text-minimal-gray">
                Final touches ensure perfect contrast and detail, followed by comprehensive aftercare instructions for optimal healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">Ready for Your Black & Grey Masterpiece?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Book a consultation to discuss your vision and let our artists create a timeless black and grey design just for you.
          </p>
          <div className="flex justify-center">
            <Link
              to="/book-now"
              className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto transition-all duration-300"
            >
              BOOK BLACK & GREY CONSULTATION
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlackGreyPage