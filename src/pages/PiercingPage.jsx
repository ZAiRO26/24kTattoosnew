import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Star, Clock } from 'lucide-react'

const PiercingPage = () => {
  const piercingServices = [
    {
      name: "Ear Piercings",
      description: "Traditional and modern ear piercings including lobes, cartilage, and specialty placements",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      includes: ["Lobe piercings", "Cartilage piercings", "Helix piercings", "Tragus piercings"]
    },
    {
      name: "Facial Piercings",
      description: "Professional facial piercings with precision placement and quality jewelry",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      includes: ["Nose piercings", "Lip piercings", "Eyebrow piercings", "Cheek piercings"]
    },
    {
      name: "Body Piercings",
      description: "Safe and professional body piercings with sterile equipment and expert technique",
      image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop",
      includes: ["Navel piercings", "Nipple piercings", "Surface piercings", "Genital piercings"]
    },
    {
      name: "Specialty Piercings",
      description: "Unique and custom piercings tailored to your individual style and anatomy",
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop",
      includes: ["Industrial piercings", "Daith piercings", "Rook piercings", "Custom placements"]
    }
  ]

  const safetyFeatures = [
    {
      icon: <Shield className="text-red-400" size={24} />,
      title: "Sterile Environment",
      description: "All equipment is sterilized using medical-grade autoclaves and single-use needles"
    },
    {
      icon: <Star className="text-red-400" size={24} />,
      title: "Quality Jewelry",
      description: "We use only high-quality, hypoallergenic jewelry from trusted manufacturers"
    },
    {
      icon: <Clock className="text-red-400" size={24} />,
      title: "Expert Technique",
      description: "Our piercers are trained professionals with years of experience and proper certification"
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Piercing Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional piercing artistry at its finest. Safe, sterile, and beautiful piercings with expert technique and quality jewelry.
            </p>
          </div>
        </div>
      </section>

      {/* Piercing Artistry Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Piercing Artistry at Its Finest</h2>
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

      {/* Safety Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Safety is Our Priority</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We maintain the highest standards of safety and hygiene in all our piercing procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-black/50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piercing Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Piercing Services</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Professional piercing services available at our Ballard location only.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {piercingServices.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Includes:</h4>
                    <ul className="text-gray-400 space-y-1">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to="/piercings/book-online"
                    className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center"
                  >
                    Book {service.name}
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-900/20 border border-red-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Important Notice</h2>
            <p className="text-lg text-gray-300 mb-6">
              <strong>Piercing services are only available at our Ballard location.</strong>
            </p>
            <p className="text-gray-400 mb-8">
              Our Wallingford location specializes in tattoos only. For all piercing services, please visit our Ballard studio at 508 NW 65th Street, Seattle, WA 98117.
            </p>
            <Link 
              to="/locations#ballard"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Visit Ballard Location
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Next Piercing?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Book your piercing appointment today at our Ballard location. Walk-ins welcome!
          </p>
          <div className="space-x-4">
            <Link 
              to="/piercings/book-online"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Book Online
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              to="/piercings/pricing"
              className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PiercingPage

