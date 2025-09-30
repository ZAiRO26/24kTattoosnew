import React, { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import { artists } from '../data/artists'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    artist: '',
    service: '',
    date: '',
    time: '',
    message: '',
    returningClient: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
        phone: '',
        location: '',
        artist: '',
        service: '',
        date: '',
        time: '',
        message: '',
        returningClient: false
      })
    }, 3000)
  }

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
  ]

  if (submitted) {
    return (
      <div className="bg-green-900/20 border border-green-600 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-400 mb-2">Booking Request Sent!</h3>
        <p className="text-gray-300">
          Thank you for choosing 24K Tattoos. We'll contact you within 24 hours to confirm your appointment.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Book Your Appointment</h3>
        <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
      </div>

      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            <User className="inline mr-2" size={16} />
            Full Name *
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
            <Mail className="inline mr-2" size={16} />
            Email Address *
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

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            <Phone className="inline mr-2" size={16} />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            <MapPin className="inline mr-2" size={16} />
            Preferred Location *
          </label>
          <select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
            required
          >
            <option value="">Select Location</option>
            <option value="Ballard">Ballard (Tattoos & Piercings)</option>
            <option value="Wallingford">Wallingford (Tattoos Only)</option>
          </select>
        </div>
      </div>

      {/* Service Selection */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Service Type *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
            required
          >
            <option value="">Select Service</option>
            <option value="Tattoo Consultation">Tattoo Consultation</option>
            <option value="Custom Tattoo">Custom Tattoo</option>
            <option value="Tattoo Touch-up">Tattoo Touch-up</option>
            <option value="Tattoo Cover-up">Tattoo Cover-up</option>
            <option value="Piercing">Piercing (Ballard Only)</option>
            <option value="Piercing Consultation">Piercing Consultation</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Preferred Artist</label>
          <select
            name="artist"
            value={formData.artist}
            onChange={handleInputChange}
            className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
          >
            <option value="">No Preference</option>
            {artists.map((artist) => (
              <option key={artist.id} value={artist.name}>
                {artist.name} - {artist.specialty} ({artist.location})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Date and Time */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            <Calendar className="inline mr-2" size={16} />
            Preferred Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            <Clock className="inline mr-2" size={16} />
            Preferred Time
          </label>
          <select
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
          >
            <option value="">Select Time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold mb-2">
          <MessageSquare className="inline mr-2" size={16} />
          Tell us about your tattoo idea
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
          placeholder="Describe your tattoo idea, size, placement, style preferences, or any questions you have..."
        />
      </div>

      {/* Returning Client */}
      <div className="flex items-center">
        <input
          type="checkbox"
          name="returningClient"
          checked={formData.returningClient}
          onChange={handleInputChange}
          className="mr-3"
        />
        <label className="text-sm text-gray-400">
          I am a returning client
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          'Request Appointment'
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}

export default BookingForm








