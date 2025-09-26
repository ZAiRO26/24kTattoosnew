import React from 'react'
import { Star, Clock } from 'lucide-react'
import { testimonials } from '../data/testimonials'

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional tattoo and piercing services with the highest standards of safety and artistry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black/50 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Star className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Custom Tattoos</h3>
            <p className="text-gray-400">
              Fully custom designs created specifically for you. From concept to completion, we bring your vision to life.
            </p>
          </div>

          <div className="bg-black/50 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Clock className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Cover-ups & Touch-ups</h3>
            <p className="text-gray-400">
              Expert cover-up work and touch-ups to refresh or completely transform existing tattoos.
            </p>
          </div>

          <div className="bg-black/50 p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Star className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Professional Piercing</h3>
            <p className="text-gray-400">
              Safe, sterile piercing services with high-quality jewelry and aftercare guidance.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-black/50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-red-400 text-sm">{testimonial.tattoo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

