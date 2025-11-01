import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import OptimizedImage from '../components/OptimizedImage';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GalleryPage = () => {

  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      // Options
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  // Gallery images from the gallery folder
  const galleryImages = [
    {
      id: 1,
      image: '/assets/gallery/A84C67DA-34CC-4FCB-BBBF-D7A473E85609.jpg'
    },
    {
      id: 2,
      image: '/assets/gallery/D6739A60-E4CF-47DD-BE23-D76475C2FC23.jpg'
    },
    {
      id: 3,
      image: '/assets/gallery/IMG_0882.jpg'
    },
    {
      id: 4,
      image: '/assets/gallery/IMG_0912.jpg'
    },
    {
      id: 5,
      image: '/assets/gallery/IMG_0923.jpg'
    },
    {
      id: 6,
      image: '/assets/gallery/IMG_1195.jpg'
    },
    {
      id: 7,
      image: '/assets/gallery/IMG_1214.jpg'
    },
    {
      id: 8,
      image: '/assets/gallery/IMG_1220.jpg'
    },
    {
      id: 9,
      image: '/assets/gallery/IMG_1368.jpg'
    },
    {
      id: 10,
      image: '/assets/gallery/IMG_1376.jpg'
    },
    {
      id: 11,
      image: '/assets/gallery/IMG_1788.jpg'
    },
    {
      id: 12,
      image: '/assets/gallery/IMG_2362.jpg'
    },
    {
      id: 13,
      image: '/assets/gallery/IMG_3037.jpg'
    },
    {
      id: 14,
      image: '/assets/gallery/IMG_3548.jpg'
    },
    {
      id: 15,
      image: '/assets/gallery/IMG_4041.jpg'
    },
    {
      id: 16,
      image: '/assets/gallery/IMG_4430.jpg'
    },
    {
      id: 17,
      image: '/assets/gallery/IMG_6019.jpg'
    },
    {
      id: 18,
      image: '/assets/gallery/IMG_6732.jpg'
    },
    {
      id: 19,
      image: '/assets/gallery/IMG_6908.jpg'
    },
    {
      id: 20,
      image: '/assets/gallery/IMG_7216.jpg'
    },
    {
      id: 21,
      image: '/assets/gallery/IMG_7238.jpg'
    },
    {
      id: 22,
      image: '/assets/gallery/IMG_7277.jpg'
    },
    {
      id: 23,
      image: '/assets/gallery/IMG_7280.jpg'
    },
    {
      id: 24,
      image: '/assets/gallery/IMG_7294.jpg'
    },
    {
      id: 25,
      image: '/assets/gallery/IMG_7327.jpg'
    },
    {
      id: 26,
      image: '/assets/gallery/IMG_7357.jpg'
    },
    {
      id: 27,
      image: '/assets/gallery/IMG_7361.jpg'
    },
    {
      id: 28,
      image: '/assets/gallery/IMG_7362.jpg'
    },
    {
      id: 29,
      image: '/assets/gallery/IMG_7490.jpg'
    },
    {
      id: 30,
      image: '/assets/gallery/IMG_7583.jpg'
    },
    {
      id: 31,
      image: '/assets/gallery/IMG_7690.jpg'
    },
    {
      id: 32,
      image: '/assets/gallery/IMG_7691.jpg'
    },
    {
      id: 33,
      image: '/assets/gallery/IMG_7823.jpg'
    },
    {
      id: 34,
      image: '/assets/gallery/IMG_7824.jpg'
    },
    {
      id: 35,
      image: '/assets/gallery/IMG_7852.jpg'
    },
    {
      id: 36,
      image: '/assets/gallery/IMG_7893.jpg'
    }
  ];

  const specialties = [
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Diverse Styles',
      description: 'Our portfolio showcases a wide range of tattoo styles, from traditional to contemporary designs.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Expert Artistry',
      description: 'Each piece demonstrates our artists\' technical skill and creative vision in bringing ideas to life.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Quality Craftsmanship',
      description: 'Every tattoo reflects our commitment to precision, detail, and artistic excellence.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Custom Creations',
      description: 'Our gallery features unique, personalized designs tailored to each client\'s individual story.'
    }
  ];

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-minimal-gray max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of tattoo artistry, showcasing the diverse range of styles and exceptional quality that defines our work.
            </p>
            <div className="flex justify-center">
              <Link
                to="/book-now"
                className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto transition-all duration-300"
              >
                Book Your Tattoo
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Gallery */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
                Our Artistic Journey
              </h2>
              <p className="text-lg text-minimal-gray mb-6">
                This gallery represents years of artistic dedication and countless hours of perfecting our craft. Each piece tells a unique story, showcasing the collaboration between our skilled artists and valued clients.
              </p>
              <p className="text-lg text-minimal-gray mb-6">
                From intricate detailed work to bold statement pieces, our portfolio demonstrates the versatility and expertise that has made us a trusted name in the tattoo industry.
              </p>
              <p className="text-lg text-minimal-gray">
                Every tattoo in our gallery reflects our commitment to artistic excellence, technical precision, and the personal vision of each client who trusted us with their story.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=600&fit=crop" 
                alt="Tattoo Artistry Example" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Gallery Highlights */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Gallery Highlights
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Our gallery showcases the breadth of our artistic capabilities and the quality that sets us apart in the tattoo industry.
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

      {/* Main Gallery */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Complete Gallery
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Browse through our extensive collection of tattoo artistry, featuring diverse styles and exceptional craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {galleryImages.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col"
              >
                <a 
                  href={item.image}
                  data-fancybox="gallery"
                  className="flex-1 flex items-center justify-center"
                >
                  <OptimizedImage 
                    src={item.image} 
                    alt="Gallery artwork"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Creative Process
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Every piece in our gallery follows our proven three-step process to ensure exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Design Consultation</h3>
              <p className="text-minimal-gray">
                We work closely with you to understand your vision and create a custom design that perfectly captures your story.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Expert Execution</h3>
              <p className="text-minimal-gray">
                Our skilled artists bring your design to life using advanced techniques and premium materials for lasting quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Aftercare Support</h3>
              <p className="text-minimal-gray">
                Comprehensive aftercare guidance ensures your tattoo heals perfectly and maintains its beauty for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">Ready to Create Your Masterpiece?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Book a consultation to discuss your ideas and let our artists create a unique piece that tells your story.
          </p>
          <div className="flex justify-center">
            <Link
              to="/book-now"
              className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto transition-all duration-300"
            >
              BOOK CONSULTATION
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;