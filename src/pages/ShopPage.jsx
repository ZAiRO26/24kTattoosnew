import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingCart } from 'lucide-react'

const ShopPage = () => {
  const merchandise = [
    {
      name: "Tattoo Art Prints",
      description: "High-quality prints of original tattoo designs",
      price: "$25 - $75",
      image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=300&h=300&fit=crop",
      category: "Prints"
    },
    {
      name: "Tattoo Posters",
      description: "Large format posters featuring our best work",
      price: "$15 - $35",
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=300&h=300&fit=crop",
      category: "Posters"
    },
    {
      name: "T-Shirts",
      description: "Comfortable tees with tattoo-inspired designs",
      price: "$20 - $30",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop",
      category: "Clothing"
    },
    {
      name: "Dragon Shirts",
      description: "Special edition dragon-themed apparel",
      price: "$25 - $35",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=300&fit=crop",
      category: "Clothing"
    },
    {
      name: "Limited Edition Prints",
      description: "Signed, numbered prints from our artists",
      price: "$50 - $150",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      category: "Collectibles"
    },
    {
      name: "Tattoo Memorabilia",
      description: "Unique items celebrating tattoo culture",
      price: "$10 - $50",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      category: "Memorabilia"
    }
  ]

  const categories = ["All", "Prints", "Posters", "Clothing", "Collectibles", "Memorabilia"]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              24K Tattoo Hair & oddities Online Shop
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A haven for tattoo enthusiasts and art lovers alike. Discover our collection of tattoo art, prints, posters, and unique merchandise.
            </p>
          </div>
        </div>
      </section>

      {/* Shop Description */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tattoo Art & Merchandise</h2>
              <p className="text-lg text-gray-400 mb-6">
                24K Tattoo Hair & oddities' online shop is a haven for tattoo enthusiasts and art lovers alike. With an extensive collection of tattoo art, tattoo prints, and tattoo posters, customers can adorn their walls with stunning and intricate designs.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                The shop also offers a wide range of tattoo-inspired merchandise, including t-shirts, prints, memorabilia, dragon shirts, and other unique items, perfect for those looking to show off their love for body art. For collectors, 24K Tattoo Hair & oddities also offers limited edition, signed, and frameable fine art prints, allowing customers to own a piece of tattoo history.
              </p>
              <div className="flex items-center space-x-4">
                <ShoppingCart className="text-red-400" size={24} />
                <span className="text-lg font-semibold">Shopping Cart</span>
              </div>
              <p className="text-gray-400 mt-2">Your cart is empty.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop"
                alt="Tattoo merchandise"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop"
                alt="Tattoo art prints"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop Categories</h2>
            <p className="text-lg text-gray-400">Browse our merchandise by category</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-black hover:bg-red-600 rounded-lg font-semibold transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchandise.map((item, index) => (
              <div key={index} className="bg-black/50 rounded-lg overflow-hidden hover:bg-black/70 transition-colors">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="mb-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-red-400">{item.price}</span>
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Physical Locations</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Shop in person at our Ballard or Wallingford locations for exclusive merchandise and personalized service.
          </p>
          <div className="space-x-4">
            <Link 
              to="/locations#ballard"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Visit Ballard Shop
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              to="/locations#wallingford"
              className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit Wallingford Shop
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage








