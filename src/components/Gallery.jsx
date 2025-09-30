import React from 'react'

const Gallery = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
  ]

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of custom tattoos, from traditional designs to modern masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-lg">
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery








