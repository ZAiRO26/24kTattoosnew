import React from 'react'
import { CheckCircle, Zap, Shield, Clock, Star, Award } from 'lucide-react'
 

const PiercingServicesPage = () => {
  const piercingServices = [
    {
      name: "Ear Piercings",
      services: ["Earlobe", "Cartilage", "Helix", "Tragus", "Daith", "Conch"],
      price: "₹300 - ₹800"
    },
    {
      name: "Facial Piercings",
      services: ["Nose", "Lip", "Eyebrow", "Cheek", "Tongue", "Septum"],
      price: "₹500 - ₹1200"
    },
    {
      name: "Body Piercings",
      services: ["Navel", "Nipple", "Surface", "Dermal", "Industrial"],
      price: "₹800 - ₹2000"
    },
    {
      name: "Specialty Piercings",
      services: ["Custom Placement", "Multiple Piercings", "Stretching Consultation"],
      price: "₹1000 - ₹3000"
    }
  ]

  const jewelryTypes = [
    { name: "Surgical Steel", description: "Hypoallergenic and durable" },
    { name: "Titanium", description: "Lightweight and biocompatible" },
    { name: "14K Gold", description: "Premium quality and elegant" },
    { name: "Bioflex", description: "Flexible and comfortable" }
  ]

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      
      {/* Hero Section */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-minimal-black mb-6">
              Piercing Services
            </h1>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Professional piercing services with premium jewelry and expert care
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
              Our Piercing Services
            </h2>
            <p className="text-lg text-minimal-gray">
              Professional piercing services for all body parts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {piercingServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-minimal-border hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-minimal-black mb-4">{service.name}</h3>
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-minimal-black mb-3">Available Piercings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.services.map((item, idx) => (
                      <span key={idx} className="bg-minimal-light-gray text-minimal-black px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-minimal-gray">Starting from</span>
                  <span className="text-xl font-bold text-minimal-black">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jewelry Section */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
              Premium Jewelry Collection
            </h2>
            <p className="text-lg text-minimal-gray">
              High-quality jewelry for safe and stylish piercings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jewelryTypes.map((jewelry, index) => (
              <div key={index} className="bg-minimal-light-gray p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-minimal-black mb-2">{jewelry.name}</h3>
                <p className="text-minimal-gray">{jewelry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
              Why Choose Our Piercing Services?
            </h2>
            <p className="text-lg text-minimal-gray">
              Professional piercing with safety and style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Sterile Environment</h3>
              <p className="text-minimal-gray">
                All equipment is sterilized and we follow strict hygiene protocols for your safety.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Expert Piercers</h3>
              <p className="text-minimal-gray">
                Our certified piercers have years of experience and stay updated with latest techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Quick & Painless</h3>
              <p className="text-minimal-gray">
                Professional techniques ensure minimal discomfort and quick healing process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare Section */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
              Aftercare Support
            </h2>
            <p className="text-lg text-minimal-gray">
              We provide comprehensive aftercare guidance for all piercings
            </p>
          </div>

          <div className="bg-minimal-light-gray p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-minimal-black mb-4">What We Provide:</h3>
                <ul className="space-y-2 text-minimal-gray">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Detailed aftercare instructions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Free follow-up consultations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Healing timeline guidance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Jewelry change assistance
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-minimal-black mb-4">Healing Times:</h3>
                <ul className="space-y-2 text-minimal-gray">
                  <li>• Earlobe: 6-8 weeks</li>
                  <li>• Cartilage: 3-6 months</li>
                  <li>• Nose: 2-4 months</li>
                  <li>• Navel: 6-12 months</li>
                  <li>• Tongue: 4-6 weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-light-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-300 mb-6">
            Book Your Piercing Appointment
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Schedule your piercing with our professional piercers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-now"
              className="bg-accent-gold text-luxury-dark px-8 py-4 font-medium hover:bg-gold-dark transition-colors duration-200"
            >
              BOOK PIERCING APPOINTMENT
            </a>
            <a
              href="/dos-and-donts"
              className="border border-accent-gold text-accent-gold px-8 py-4 font-medium hover:bg-accent-gold hover:text-luxury-dark transition-colors duration-200"
            >
              VIEW AFTERCARE GUIDE
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PiercingServicesPage
