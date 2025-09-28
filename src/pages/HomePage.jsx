import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HomePage = () => {
  const tattooStyles = [
    {
      name: "Japanese Tattoos",
      description: "Traditional Japanese art with koi fish, dragons, and cherry blossoms",
      image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop"
    },
    {
      name: "Traditional Tattoos",
      description: "Classic American traditional with bold lines and vibrant colors",
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop"
    },
    {
      name: "Neo-Traditional Tattoos",
      description: "Modern twist on traditional with enhanced details and colors",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop"
    },
    {
      name: "Bodysuit Tattoos",
      description: "Full body coverage with cohesive artistic designs",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
    },
    {
      name: "Sleeve Tattoos",
      description: "Complete arm coverage with flowing artistic designs",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop"
    },
    {
      name: "Dragon Tattoos",
      description: "Powerful dragon designs in various artistic styles",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
    },
    {
      name: "Large Scale Tattoos",
      description: "Extensive artwork covering large areas of the body",
      image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop"
    },
    {
      name: "Realistic Tattoos",
      description: "Photorealistic designs that capture every detail",
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop"
    },
    {
      name: "Americana Tattoos",
      description: "Classic American patriotic and traditional designs",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop"
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
               style={{backgroundImage: `url(https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1200&h=800&fit=crop)`}}>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              24K TATTOOS
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Seattle's Premier Tattoo & Piercing Studio
            </p>
            <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
              Bring Your Artistic Vision to Life with Seattle's Premier Tattoo & Piercing Artists at 24K Tattoos
            </p>
            <div className="space-x-4">
              <Link 
                to="/artists"
                className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Browse our Artists
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/locations"
                className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Walk Ins Welcome Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Walk Ins Welcome</h2>
          <p className="text-xl text-gray-400 mb-8">
            No appointment needed! Come visit us during business hours for consultations and walk-in tattoos.
          </p>
          <Link 
            to="/locations"
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            View Our Locations
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to 24K Tattoos</h2>
              <p className="text-lg text-gray-400 mb-6">
                Your destination for exceptional tattoo artists in Seattle. Situated in the heart of the city's lively art community, our studio is renowned for its artistic expertise. Our talented and dedicated artists create custom designs that embrace uniqueness.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                From elaborate tattoos to precise piercings, each piece reflects our unwavering commitment to quality.
              </p>
              <Link 
                to="/artists"
                className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Browse our Artists
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop"
                alt="Tattoo artist at work"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop"
                alt="Tattoo studio interior"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop"
                alt="Detailed tattoo work"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop"
                alt="Traditional tattoo design"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Best Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do Best</h2>
            <p className="text-xl text-gray-400 mb-8">
              24K Tattoos is one of the most recognized Seattle tattoo shops
            </p>
            <Link 
              to="/tattoos/galleries"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Browse our Galleries
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <div className="mb-16">
            <p className="text-lg text-gray-400 text-center max-w-4xl mx-auto mb-12">
              At 24K Tattoos, we specialize in creating unique and personalized art that captures your individuality. Our talented artists are well-versed in a variety of tattoo styles, from traditional Japanese art to intricate custom designs. Whether you're looking to make a bold statement with a full bodysuit or want a realistic portrait that will leave a lasting impression, we have the expertise to bring your vision to life.
            </p>
          </div>

          {/* Tattoo Styles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tattooStyles.map((style, index) => (
              <div key={index} className="bg-black/50 rounded-lg overflow-hidden hover:bg-black/70 transition-colors">
                <img 
                  src={style.image} 
                  alt={style.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{style.name}</h3>
                  <p className="text-gray-400">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piercing Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Piercing Artistry at Its Finest</h2>
              <p className="text-lg text-gray-400 mb-6">
                From simple ear piercings to more intricate body piercings, our piercing artists have the expertise to create stunning and unique designs that suit your individual style and personality. We take the time to listen to your ideas and work closely with you to ensure that your piercing design is personalized and reflects your vision.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Not only are our piercing artists skilled in their craft, but they also prioritize your safety. We use top-of-the-line piercing equipment and follow strict sterilization protocols to ensure a clean and hygienic piercing experience. You can trust that our piercing artists will take every precaution to provide you with a safe and comfortable piercing.
              </p>
              <Link 
                to="/piercings/book-online"
                className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                BOOK A PIERCING APPOINTMENT
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
                alt="Professional piercing setup"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
                alt="Piercing jewelry display"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">24K Tattoos Online Shop</h2>
              <p className="text-lg text-gray-400 mb-6">
                24K Tattoos' online shop is a haven for tattoo enthusiasts and art lovers alike. With an extensive collection of tattoo art, tattoo prints, and tattoo posters, customers can adorn their walls with stunning and intricate designs.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                The shop also offers a wide range of tattoo-inspired merchandise, including t-shirts, prints, memorabilia, dragon shirts, and other unique items, perfect for those looking to show off their love for body art. For collectors, 24K Tattoos also offers limited edition, signed, and frameable fine art prints, allowing customers to own a piece of tattoo history.
              </p>
              <Link 
                to="/shop"
                className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Visit Our Shop
                <ArrowRight className="ml-2" size={20} />
              </Link>
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

      {/* Our Locations Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Ballard Location */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ballard</h3>
              <h4 className="text-lg font-semibold mb-4">24K Tattoos & Body Piercing</h4>
              <p className="text-red-400 mb-6 font-semibold">PIERCING AT BALLARD LOCATION ONLY</p>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold">Address</h5>
                  <p className="text-gray-400">508 NW 65th Street Seattle, WA 98117</p>
                </div>
                <div>
                  <h5 className="font-semibold">Call us</h5>
                  <p className="text-gray-400">206-789-2618</p>
                </div>
              </div>
              
              <Link 
                to="/locations#ballard"
                className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
              >
                Contact Ballard Shop
              </Link>
            </div>

            {/* Wallingford Location */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Wallingford</h3>
              <h4 className="text-lg font-semibold mb-4">24K Tattoos</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold">Address</h5>
                  <p className="text-gray-400">403 NE 45th Street Seattle, WA 98105</p>
                </div>
                <div>
                  <h5 className="font-semibold">Call us</h5>
                  <p className="text-gray-400">206-545-3685</p>
                </div>
              </div>
              
              <Link 
                to="/locations#wallingford"
                className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
              >
                Contact Wallingford Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage




