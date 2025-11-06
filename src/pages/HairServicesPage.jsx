import React from 'react'
import { CheckCircle, Scissors, Sparkles, Wind, Palette, Droplets, Hand } from 'lucide-react'
 

const HairServicesPage = () => {
  const hairServices = [
    {
      icon: <Scissors className="w-6 h-6" />,
      name: "Hair Cut",
      description: "Professional haircuts tailored to your style and face shape"
    },
    {
      icon: <Wind className="w-6 h-6" />,
      name: "Ironing",
      description: "Smooth, straight hair with professional flat ironing"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      name: "Global Colouring",
      description: "Complete hair coloring with premium quality dyes"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      name: "Blow Dry",
      description: "Professional blow-drying for volume and style"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      name: "Root Touch Up",
      description: "Precise root coloring for maintaining your color"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      name: "Shampoo & Conditioning",
      description: "Deep cleansing and nourishing hair treatments"
    },
    {
      icon: <Hand className="w-6 h-6" />,
      name: "Head Massage",
      description: "Relaxing scalp massage for stress relief and hair health"
    }
  ]

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      
      {/* Hero Section */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-minimal-black mb-6">
              Hair Services
            </h1>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Unique & Personalized Hair Cuts and Professional Hair Care Services
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
              Our Hair Services
            </h2>
            <p className="text-lg text-minimal-gray">
              Professional hair care services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-minimal-border hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-minimal-black text-white p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-minimal-black">{service.name}</h3>
                </div>
                <p className="text-minimal-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
              Why Choose Our Hair Services?
            </h2>
            <p className="text-lg text-minimal-gray">
              Experience the difference with our professional approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Expert Stylists</h3>
              <p className="text-minimal-gray">
                Our professional stylists have years of experience and stay updated with the latest trends and techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Premium Products</h3>
              <p className="text-minimal-gray">
                We use only high-quality, professional-grade hair products and tools for the best results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Personalized Service</h3>
              <p className="text-minimal-gray">
                Every service is customized to your hair type, face shape, and personal style preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-minimal-light-gray">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-minimal-black mb-4">
              Service Pricing
            </h2>
            <p className="text-lg text-minimal-gray">
              Transparent pricing for all our hair services
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-minimal-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-minimal-black mb-6">Basic Services</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-minimal-border">
                    <span className="text-minimal-black">Hair Cut</span>
                    <span className="font-semibold text-minimal-black">₹500 - ₹800</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-minimal-border">
                    <span className="text-minimal-black">Shampoo & Conditioning</span>
                    <span className="font-semibold text-minimal-black">₹200 - ₹400</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-minimal-border">
                    <span className="text-minimal-black">Blow Dry</span>
                    <span className="font-semibold text-minimal-black">₹300 - ₹500</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-minimal-black">Head Massage</span>
                    <span className="font-semibold text-minimal-black">₹400 - ₹600</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-minimal-black mb-6">Premium Services</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-minimal-border">
                    <span className="text-minimal-black">Global Colouring</span>
                    <span className="font-semibold text-minimal-black">₹1500 - ₹3000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-minimal-border">
                    <span className="text-minimal-black">Root Touch Up</span>
                    <span className="font-semibold text-minimal-black">₹800 - ₹1200</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-minimal-border">
                    <span className="text-minimal-black">Ironing</span>
                    <span className="font-semibold text-minimal-black">₹600 - ₹1000</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-minimal-black">Complete Package</span>
                    <span className="font-semibold text-minimal-black">₹2000 - ₹4000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-light-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-300 mb-6">
            Book Your Hair Appointment
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Schedule your personalized hair service with our expert stylists
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-now"
              className="bg-accent-gold text-luxury-dark px-8 py-4 font-medium hover:bg-gold-dark transition-colors duration-200"
            >
              BOOK HAIR APPOINTMENT
            </a>
            <a
              href="tel:+919876543210"
              className="border border-accent-gold text-accent-gold px-8 py-4 font-medium hover:bg-accent-gold hover:text-luxury-dark transition-colors duration-200"
            >
              CALL FOR CONSULTATION
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HairServicesPage
