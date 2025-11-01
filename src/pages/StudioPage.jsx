import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import OptimizedImage from '../components/OptimizedImage'

const StudioPage = () => {
  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind('[data-fancybox="studio-gallery"]', {
      // Options
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  // Studio images from the Studio folder
  const studioImages = [
    {
      id: 1,
      image: '/assets/Studio/1.jpg'
    },
    {
      id: 2,
      image: '/assets/Studio/6006432d-3834-43a1-9e76-1ce8f52426f7.jpg'
    },
    {
      id: 3,
      image: '/assets/Studio/IMG_6566.jpg'
    },
    {
      id: 4,
      image: '/assets/Studio/IMG_7646.jpg'
    },
    {
      id: 5,
      image: '/assets/Studio/IMG_7750.jpg'
    },
    {
      id: 6,
      image: '/assets/Studio/da8e4edf-fed2-470c-a272-8504fe670ad8.jpg'
    },
    {
      id: 7,
      image: '/assets/Studio/f7186c8d-886a-4a8f-b613-9d85b170e8b6.jpg'
    }
  ];

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      <section className="py-16 bg-minimal-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The Studio</h1>
          <div className="space-y-6 text-minimal-gray">
            <p className="text-lg leading-relaxed">
              At <strong className="text-minimal-black">24K Tattoo Hair & Oddities</strong>, our studio is a sanctuary where artistry meets meticulous care. Designed to embody cleanliness, calm, and precision, every corner of our space reflects our commitment to your safety and comfort.
            </p>
            <p className="text-lg leading-relaxed">
              We employ only professional-grade tools and premium materials, adhering to the highest standards of hygiene and sterilization. This rigorous attention to safety allows you to relax fully and immerse yourself in the creative journey.
            </p>
            <p className="text-lg leading-relaxed">
              More than just a workspace, our studio offers an atmosphere that soothes the mind and elevates the spirit. The tranquil surroundings invite you into a state of nirvana—a meditative trance where time slows, and the transformative power of art unfolds. Here, every session is not just an appointment but an experience of profound calm and sublime focus.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-minimal-black">
              Our Studio Space
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Take a look inside our professional studio environment, designed for comfort, safety, and artistic excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {studioImages.map((item) => (
              <motion.div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href={item.image}
                  data-fancybox="studio-gallery"
                  className="flex-1 flex items-center justify-center"
                >
                  <OptimizedImage 
                    src={item.image} 
                    alt="Studio space"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudioPage


