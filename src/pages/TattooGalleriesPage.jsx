import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X } from 'lucide-react'

const TattooGalleriesPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const tattooStyles = [
    {
      name: "Japanese Tattoos",
      description: "Traditional Japanese art with koi fish, dragons, and cherry blossoms",
      images: [
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
      ]
    },
    {
      name: "Traditional Tattoos",
      description: "Classic American traditional with bold lines and vibrant colors",
      images: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=500&fit=crop"
      ]
    },
    {
      name: "Neo-Traditional Tattoos",
      description: "Modern twist on traditional with enhanced details and colors",
      images: [
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop"
      ]
    },
    {
      name: "Bodysuit Tattoos",
      description: "Full body coverage with cohesive artistic designs",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop"
      ]
    },
    {
      name: "Sleeve Tattoos",
      description: "Complete arm coverage with flowing artistic designs",
      images: [
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop"
      ]
    },
    {
      name: "Dragon Tattoos",
      description: "Powerful dragon designs in various artistic styles",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop"
      ]
    },
    {
      name: "Large Scale Tattoos",
      description: "Extensive artwork covering large areas of the body",
      images: [
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
      ]
    },
    {
      name: "Realistic Tattoos",
      description: "Photorealistic designs that capture every detail",
      images: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=500&fit=crop"
      ]
    },
    {
      name: "Americana Tattoos",
      description: "Classic American patriotic and traditional designs",
      images: [
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop"
      ]
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Tattoo Galleries
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our portfolio of custom tattoos, from traditional designs to modern masterpieces. Each piece represents our commitment to artistic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Style Galleries */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {tattooStyles.map((style, index) => (
            <div key={index} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{style.name}</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">{style.description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {style.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="relative group overflow-hidden rounded-lg">
                    <img 
                      src={img} 
                      alt={`${style.name} ${imgIndex + 1}`}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300 cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link 
                  to="/locations"
                  className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Book {style.name}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Masterpiece?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discuss your custom tattoo design.
          </p>
          <div className="space-x-4">
            <Link 
              to="/locations"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Book Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              to="/artists"
              className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Meet Our Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Tattoo gallery"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TattooGalleriesPage







