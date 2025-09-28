import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

const BookNowPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="pt-16 bg-minimal-white text-minimal-black min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-minimal-black mb-6">
              Let's make something awesome together
            </h1>
            <p className="text-lg text-minimal-gray max-w-2xl mx-auto">
              Please don't hesitate in contacting us with any question you may have. We will get back to you as soon as possible.
            </p>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Left Column - Studio Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-minimal-black mb-6">
                  24K Tattoo Hair & Oddities
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-minimal-gray mr-4 mt-1" size={20} />
                    <div>
                      <p className="text-minimal-black">
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-minimal-gray mr-4 mt-1" size={20} />
                    <div>
                      <p className="text-minimal-black">
                        24ktattoos@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-minimal-gray mr-4 mt-1" size={20} />
                    <div>
                      <p className="text-minimal-black">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-minimal-border pt-8">
                <h3 className="text-xl font-bold text-minimal-black mb-4">
                  Studio Hours
                </h3>
                <div className="space-y-2 text-minimal-black">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>12:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-minimal-border pt-8">
                <h3 className="text-xl font-bold text-minimal-black mb-4">
                  Services
                </h3>
                <div className="space-y-2 text-minimal-black">
                  <p>• Custom Tattoo Design</p>
                  <p>• Traditional & Neo-Traditional</p>
                  <p>• Black & Grey Work</p>
                  <p>• Cover-ups & Touch-ups</p>
                  <p>• Body Piercing</p>
                  <p>• Consultation Services</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-minimal-black mb-2">
                  We speak English!
                </h3>
                <p className="text-minimal-gray">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-minimal-black mb-2">
                      Your name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-minimal-border rounded-lg focus:border-minimal-black focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-minimal-black mb-2">
                      Your email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-minimal-border rounded-lg focus:border-minimal-black focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-minimal-black mb-2">
                      Your message (optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full p-4 border border-minimal-border rounded-lg focus:border-minimal-black focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your tattoo idea, preferred style, size, placement, or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-minimal-black hover:bg-minimal-dark-gray disabled:bg-minimal-gray text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        SUBMITTING...
                      </>
                    ) : (
                      'SUBMIT'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-minimal-black mb-8 text-center">
            Find Us
          </h2>
          
          {/* Embedded Map Placeholder */}
          <div className="bg-minimal-white border border-minimal-border rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-minimal-light-gray to-minimal-border flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-minimal-gray mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-minimal-black mb-2">
                  24K Tattoo Hair & Oddities
                </h3>
                <p className="text-minimal-gray mb-4">
                  Hyderabad, Telangana, India
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-minimal-black text-white px-6 py-3 rounded-lg hover:bg-minimal-dark-gray transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Google Maps
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Info */}
          <div className="mt-8 text-center">
            <p className="text-minimal-gray">
              Located in the heart of Hyderabad, we're easily accessible by public transport and have parking available nearby.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-minimal-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-minimal-black mb-8">
            Ready to Start Your Tattoo Journey?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-2">Quick Response</h3>
              <p className="text-minimal-gray">We respond to all inquiries within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-2">Professional Service</h3>
              <p className="text-minimal-gray">Licensed artists with years of experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-2">Custom Designs</h3>
              <p className="text-minimal-gray">Unique artwork tailored to your vision</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BookNowPage
