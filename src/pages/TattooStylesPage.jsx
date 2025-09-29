import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const styles = [
  {
    name: 'Cover Ups',
    description: 'Transform existing tattoos into refreshed artwork with expert cover-up techniques.',
    image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=400&fit=crop'
  },
  {
    name: 'Black & Grey',
    description: 'Monochrome shading with depth and contrast for timeless designs.',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=400&fit=crop'
  },
  {
    name: 'Colour',
    description: 'Vibrant color palettes and smooth blends for bold, eye-catching pieces.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop'
  },
  {
    name: 'Portraits & Realistic',
    description: 'Photorealistic detail capturing expressions, textures, and lifelike accuracy.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
  },
  {
    name: 'Micro / Minimalist tattoo',
    description: 'Elegant, small-scale designs with crisp, precise line work.',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop'
  },
  {
    name: 'Customised tattoo',
    description: 'Fully custom designs tailored to your story, style, and placement.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop'
  }
]

const TattooStylesPage = () => {
  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Styles</h1>
            <p className="text-xl text-minimal-gray max-w-3xl mx-auto">
              Explore our core styles. Every piece is crafted with precision and a minimalist sensibility.
            </p>
          </div>
        </div>
      </section>

      {/* Styles Grid */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {styles.map((style) => (
              <div key={style.name} className="bg-white border border-minimal-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src={style.image} alt={style.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-minimal-black">{style.name}</h3>
                  <p className="text-minimal-gray mb-4">{style.description}</p>
                  <Link
                    to="/locations"
                    className="bg-minimal-black hover:bg-minimal-dark-gray text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center"
                  >
                    Book {style.name}
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-6">Ready to Choose Your Style?</h2>
          <p className="text-lg text-minimal-gray mb-8">Book a consultation and we’ll help refine your idea, placement, and sizing.</p>
          <Link
            to="/book-now"
            className="bg-minimal-black hover:bg-minimal-dark-gray text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center"
          >
            BOOK CONSULTATION
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default TattooStylesPage


