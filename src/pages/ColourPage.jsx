import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ColourPage = () => {

  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      // Options
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  // Sample colour tattoo images
  const colourGallery = [
    {
      id: 1,
      image: '/assets/color/A84C67DA-34CC-4FCB-BBBF-D7A473E85609.jpeg',
      title: 'Vibrant Floral Design'
    },
    {
      id: 2,
      image: '/assets/color/IMG_2547.jpeg',
      title: 'Colorful Portrait Art'
    },
    {
      id: 3,
      image: '/assets/color/IMG_2606.jpeg',
      title: 'Rainbow Geometric'
    },
    {
      id: 4,
      image: '/assets/color/IMG_3185.jpeg',
      title: 'Watercolor Style'
    },
    {
      id: 5,
      image: '/assets/color/IMG_3250.jpeg',
      title: 'Bold Color Splash'
    },
    {
      id: 6,
      image: '/assets/color/IMG_4857.jpeg',
      title: 'Tropical Paradise'
    },
    {
      id: 7,
      image: '/assets/color/IMG_4950.jpeg',
      title: 'Abstract Color Blend'
    },
    {
      id: 8,
      image: '/assets/color/IMG_4995.jpeg',
      title: 'Modern Color Work'
    },
    {
      id: 9,
      image: '/assets/color/IMG_6691.jpeg',
      title: 'Vivid Animal Portrait'
    },
    {
      id: 10,
      image: '/assets/color/IMG_9622.jpeg',
      title: 'Bright & Bold'
    },
    {
      id: 11,
      image: '/assets/color/IMG_9631.jpeg',
      title: 'Color Realism'
    },
    {
      id: 12,
      image: '/assets/color/IMG_9766.jpeg',
      title: 'Surreal Color Design'
    },
    {
      id: 13,
      image: '/assets/color/IMG_9789.jpeg',
      title: 'Dynamic Color Flow'
    }
  ];

  const specialties = [
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Premium Color Inks',
      description: 'We use only the highest quality, vibrant inks that maintain their brilliance over time.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Color Theory Expertise',
      description: 'Our artists understand color relationships, creating harmonious palettes that complement your skin tone.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Smooth Blending',
      description: 'Expert gradient techniques create seamless color transitions and stunning visual effects.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-gold" />,
      title: 'Long-lasting Vibrancy',
      description: 'Proper technique and aftercare ensure your colors stay bright and beautiful for years to come.'
    }
  ];

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Colour</h1>
            <p className="text-xl text-minimal-gray max-w-3xl mx-auto mb-8">
              Vibrant color palettes and smooth blends for bold, eye-catching pieces.
            </p>
            <div className="flex justify-center">
              <Link
                to="/book-now"
                className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto transition-all duration-300"
              >
                Book Colour Tattoo
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Colour Tattoos */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
                The Power of Color
              </h2>
              <p className="text-lg text-minimal-gray mb-6">
                Color tattoos bring your vision to life with vibrant hues and stunning visual impact. From subtle pastels to bold, saturated colors, our artists create pieces that truly stand out and express your unique personality.
              </p>
              <p className="text-lg text-minimal-gray mb-6">
                Using premium inks and advanced color theory, we craft tattoos that not only look amazing on day one but maintain their vibrancy for years to come. Our color work ranges from realistic portraits to abstract watercolor effects.
              </p>
              <p className="text-lg text-minimal-gray">
                Whether you want a single accent color or a full rainbow spectrum, our artists have the expertise to blend, shade, and layer colors for maximum visual impact and longevity.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/assets/Color.jpeg" 
                alt="Colorful Tattoo Example" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Colour Specialties */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Colour Specialties
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              We excel in various color techniques, ensuring your tattoo achieves the perfect balance of vibrancy and artistic excellence.
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
              Colour Gallery
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Explore our vibrant collection of color tattoos, showcasing the full spectrum of possibilities with expert color application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colourGallery.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <a 
                  href={item.image}
                  data-fancybox="gallery"
                  data-caption={item.title}
                  className="flex-1 flex items-center justify-center"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover object-center cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Colour Process */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Colour Process
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Every color tattoo follows our proven three-step process to ensure vibrant, long-lasting results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Color Planning</h3>
              <p className="text-minimal-gray">
                We carefully select colors that complement your skin tone and design vision, creating a custom palette for your piece.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Expert Application</h3>
              <p className="text-minimal-gray">
                Our artists use advanced layering and blending techniques to achieve smooth gradients and vibrant color saturation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-luxury-dark">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-minimal-black">Color Protection</h3>
              <p className="text-minimal-gray">
                Specialized aftercare instructions help preserve color vibrancy and ensure your tattoo looks brilliant for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">Ready to Add Some Color?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Book a consultation to explore color options and let our artists create a vibrant masterpiece that reflects your style.
          </p>
          <div className="flex justify-center">
            <Link
              to="/book-now"
              className="bg-accent-gold hover:bg-gold-dark text-luxury-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto transition-all duration-300"
            >
              BOOK COLOUR CONSULTATION
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColourPage