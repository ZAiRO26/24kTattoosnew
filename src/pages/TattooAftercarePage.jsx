import React from 'react'
import { Shield, Clock, Droplets, Heart } from 'lucide-react'

const TattooAftercarePage = () => {
  const aftercareSteps = [
    {
      icon: <Shield className="text-red-400" size={24} />,
      title: "Keep It Clean",
      description: "Gently wash your tattoo with mild, fragrance-free soap twice daily. Pat dry with a clean towel."
    },
    {
      icon: <Droplets className="text-red-400" size={24} />,
      title: "Moisturize Regularly",
      description: "Apply a thin layer of fragrance-free moisturizer 2-3 times daily to keep the skin hydrated."
    },
    {
      icon: <Clock className="text-red-400" size={24} />,
      title: "Be Patient",
      description: "Healing takes 2-4 weeks. Avoid picking at scabs and let the natural healing process occur."
    },
    {
      icon: <Heart className="text-red-400" size={24} />,
      title: "Protect Your Investment",
      description: "Avoid sun exposure, swimming, and tight clothing during the healing process."
    }
  ]

  return (
    <div className="pt-16">
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Tattoo Aftercare
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proper aftercare is essential for beautiful, long-lasting tattoos. Follow these guidelines for optimal healing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {aftercareSteps.map((step, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full mb-4 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TattooAftercarePage

