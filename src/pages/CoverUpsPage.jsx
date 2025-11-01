import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const CoverUpsPage = () => {

  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      // Options
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);
  // Cover-up tattoo images from studio assets
  const coverUpGallery = [
    {
      id: 1,
      before: '/assets/Cover ups/IMG_0138.jpg',
      after: '/assets/Cover ups/IMG_0149.jpg'
    },
    {
      id: 2,
      before: '/assets/Cover ups/IMG_0170.jpg',
      after: '/assets/Cover ups/IMG_0180.jpg'
    },
    {
      id: 3,
      before: '/assets/Cover ups/IMG_1419.jpg',
      after: '/assets/Cover ups/IMG_1422.jpg'
    },
    {
      id: 4,
      before: '/assets/Cover ups/IMG_1641.jpg',
      after: '/assets/Cover ups/IMG_1650.jpg'
    },
    {
      id: 5,
      before: '/assets/Cover ups/IMG_2317.jpg',
      after: '/assets/Cover ups/IMG_2319.jpg'
    },
    {
      id: 6,
      before: '/assets/Cover ups/IMG_3157.jpg',
      after: '/assets/Cover ups/IMG_3169.jpg'
    },
    {
      id: 7,
      before: '/assets/Cover ups/IMG_3725.jpg',
      after: '/assets/Cover ups/IMG_3730.jpg'
    },
    {
      id: 8,
      before: '/assets/Cover ups/IMG_3896.jpg',
      after: '/assets/Cover ups/IMG_3904.jpg'
    },
    {
      id: 9,
      before: '/assets/Cover ups/IMG_3911.jpg',
      after: '/assets/Cover ups/IMG_3962.jpg'
    },
    {
      id: 10,
      before: '/assets/Cover ups/IMG_4458.jpg',
      after: '/assets/Cover ups/IMG_4475.jpg'
    },
    {
      id: 11,
      before: '/assets/Cover ups/IMG_5607.jpg',
      after: '/assets/Cover ups/IMG_5617.jpg'
    },
    {
      id: 12,
      before: '/assets/Cover ups/IMG_5644.jpg',
      after: '/assets/Cover ups/IMG_5646.jpg'
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
                className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto transition-all duration-300"
              >
                Book Cover-Up Consultation
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
            {coverUpGallery.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <a 
                      href={item.before}
                      data-fancybox="gallery"
                      className="block"
                    >
                      <OptimizedImage 
                        src={item.before} 
                        alt="Cover-up transformation" 
                        className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </a>
                  </div>
                  <div className="relative">
                    <a 
                      href={item.after}
                      data-fancybox="gallery"
                      className="block"
                    >
                      <OptimizedImage 
                        src={item.after} 
                        alt="Cover-up transformation" 
                        className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </a>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
            Ready to Transform Your Tattoo?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Book a consultation with our cover-up specialists and discover how we can transform your unwanted tattoo into a masterpiece.
          </p>
          <div className="flex justify-center">
            <Link
              to="/book-now"
              className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto transition-all duration-300"
            >
              BOOK COVER-UP CONSULTATION
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoverUpsPage;