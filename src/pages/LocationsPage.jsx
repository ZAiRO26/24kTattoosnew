import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import BookingForm from '../components/BookingForm'

const LocationsPage = () => {
  const [formData, setFormData] = useState({
    location: '',
    artist: '',
    returningClient: '',
    inquiry: '',
    name: '',
    email: '',
    phone: '',
    tattooType: '',
    description: '',
    tattooDesign: '',
    tattooColor: '',
    tattooSize: '',
    tattooPlacement: '',
    otherPlacement: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Contact form submitted! We\'ll get back to you soon.')
  }

  const ballardArtists = [
    'Andrea Ottlewski', 'Bruce Rivera', 'Danny One-Shot Chan', 'Darryl Duncan',
    'Julie Bolene', 'Justin Pino', 'Levi Polzin', 'Lindsey Rhoades', 'Tako Hsu'
  ]

  const wallingfordArtists = [
    'Aaron Bell', 'Dave Bryant', 'Elijah Cole', 'Frank Phoenix', 'Jaco Abarca',
    'Janet Lucero', 'Lance Neatherlin', 'Tim Bradley', 'Tim Kelly', 'Tony Fentress'
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Locations + Contact
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Visit us at one of our two Seattle locations. We're here to help bring your tattoo vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ballard Location */}
            <div id="ballard" className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Ballard</h2>
              <h3 className="text-xl font-semibold mb-4">24K Tattoos & Body Piercing</h3>
              <p className="text-red-400 mb-6 font-semibold text-lg">PIERCING AT BALLARD LOCATION ONLY</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-red-400 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-400">508 NW 65th Street Seattle, WA 98117</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-red-400 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Phone Number</h4>
                    <p className="text-gray-400">206-789-2618</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-red-400 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <div className="text-gray-400">
                      <p>Monday - Saturday: 12pm - 8pm</p>
                      <p>Sunday: 12pm - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="tel:206-789-2618"
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Contact Ballard Shop
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>

            {/* Wallingford Location */}
            <div id="wallingford" className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Wallingford</h2>
              <h3 className="text-xl font-semibold mb-4">24K Tattoos</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-red-400 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-400">403 NE 45th Street Seattle, WA 98105</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-red-400 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Phone Number</h4>
                    <p className="text-gray-400">206-545-3685</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-red-400 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <div className="text-gray-400">
                      <p>Monday - Saturday: 12pm - 8pm</p>
                      <p>Sunday: 12pm - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="tel:206-545-3685"
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Contact Wallingford Shop
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/50 p-8 rounded-lg">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Legacy Contact Form - Hidden for now */}
      <section className="py-20 bg-gray-900 hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-400">
              Ready to start your tattoo journey? Fill out the form below and we'll get back to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Location Selection */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Location <span className="text-red-400">*</span>
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                required
              >
                <option value="">- Select Location -</option>
                <option value="No Preference">No Preference</option>
                <option value="Ballard">Ballard</option>
                <option value="Wallingford">Wallingford</option>
              </select>
            </div>

            {/* Artist Selection */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Are you inquiring about a specific artist at this location?
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="specificArtist"
                    value="yes"
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="specificArtist"
                    value="no"
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            {/* Artist Dropdowns */}
            {formData.location === 'Ballard' && (
              <div>
                <label className="block text-sm font-semibold mb-2">Which Ballard Artist?</label>
                <select
                  name="artist"
                  value={formData.artist}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                >
                  <option value="">Select Ballard Artist</option>
                  {ballardArtists.map((artist) => (
                    <option key={artist} value={artist}>{artist}</option>
                  ))}
                </select>
              </div>
            )}

            {formData.location === 'Wallingford' && (
              <div>
                <label className="block text-sm font-semibold mb-2">Which Wallingford Artist?</label>
                <select
                  name="artist"
                  value={formData.artist}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                >
                  <option value="">Select Wallingford Artist</option>
                  {wallingfordArtists.map((artist) => (
                    <option key={artist} value={artist}>{artist}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Are you a returning client? <span className="text-red-400">*</span>
                </label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="returningClient"
                      value="yes"
                      onChange={handleInputChange}
                      className="mr-2"
                      required
                    />
                    Yes
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="returningClient"
                      value="no"
                      onChange={handleInputChange}
                      className="mr-2"
                      required
                    />
                    No
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Inquiry <span className="text-red-400">*</span>
                </label>
                <select
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                  required
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Tattoo">Tattoo</option>
                  <option value="Piercing">Piercing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
              />
            </div>

            {/* Tattoo Details */}
            {formData.inquiry === 'Tattoo' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold">What You are Looking For</h3>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    What type of tattoo are you looking for? <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="tattooType"
                    value={formData.tattooType}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Fully Custom Design">Fully Custom Design</option>
                    <option value="Tattoo Cover-up">Tattoo Cover-up</option>
                    <option value="Touch-up/Enhancement">Touch-up/Enhancement</option>
                    <option value="Complete or Add to Existing Tattoo">Complete or Add to Existing Tattoo</option>
                    <option value="Design I Provide">Design I Provide</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Please describe <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    What tattoo design are you interested in getting? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="tattooDesign"
                    value={formData.tattooDesign}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                    placeholder="Explain your tattoo idea in detail. Providing image references or links is greatly appreciated."
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Tattoo color <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="tattooColor"
                      value={formData.tattooColor}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Color">Color</option>
                      <option value="Black / Grey">Black / Grey</option>
                      <option value="Unsure">Unsure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Tattoo size <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="tattooSize"
                      value={formData.tattooSize}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Small (Up to 3 x 3 inches)">Small (Up to 3 x 3 inches)</option>
                      <option value="Medium (Between 3 x 3 and 6 x 6 inches)">Medium (Between 3 x 3 and 6 x 6 inches)</option>
                      <option value="Large (Between 6 x 6 and 12 x 12 inches)">Large (Between 6 x 6 and 12 x 12 inches)</option>
                      <option value="Extra Large (Over 12 x 12 inches)">Extra Large (Over 12 x 12 inches)</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Tattoo placement <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="tattooPlacement"
                      value={formData.tattooPlacement}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Upper Arm">Upper Arm</option>
                      <option value="Forearm">Forearm</option>
                      <option value="Wrist">Wrist</option>
                      <option value="Hand">Hand</option>
                      <option value="Finger">Finger</option>
                      <option value="Chest">Chest</option>
                      <option value="Back">Back</option>
                      <option value="Shoulder">Shoulder</option>
                      <option value="Neck">Neck</option>
                      <option value="Ribcage">Ribcage</option>
                      <option value="Thigh">Thigh</option>
                      <option value="Calf">Calf</option>
                      <option value="Ankle">Ankle</option>
                      <option value="Foot">Foot</option>
                      <option value="Hip">Hip</option>
                      <option value="Stomach">Stomach</option>
                      <option value="Full Sleeve">Full Sleeve</option>
                      <option value="Half Sleeve">Half Sleeve</option>
                      <option value="Behind the Ear">Behind the Ear</option>
                      <option value="Lower Back">Lower Back</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {formData.tattooPlacement === 'Other' && (
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Other Placement <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="otherPlacement"
                      value={formData.otherPlacement}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                      placeholder="Please describe"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Additional Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Additional info (optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                placeholder="Any additional information you'd like to share..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-12 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LocationsPage
