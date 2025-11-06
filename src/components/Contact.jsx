import React from 'react'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import { artists } from '../data/artists'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-light-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-300">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your tattoo journey? Contact us today to schedule a consultation with one of our artists.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="text-red-400 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-400">123 Art Street, Downtown City, ST 12345</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="text-red-400 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="text-red-400 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">info@24ktattoos.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="text-red-400 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <div className="text-gray-400">
                    <p>Mon-Sat: 12pm - 8pm</p>
                    <p>Sunday: 12pm - 6pm</p>
                  </div>
                </div>
              </div>
            </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/xxivk.in/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-red-400 hover:text-red-300 cursor-pointer"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/xxivk.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-red-400 hover:text-red-300 cursor-pointer"
                >
                  <Facebook size={24} />
                </a>
                </div>
              </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Book a Consultation</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                />
              </div>
              <div>
                <select className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none">
                  <option>Select Artist</option>
                  {artists.map((artist) => (
                    <option key={artist.id} value={artist.name}>{artist.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Describe your tattoo idea..."
                  rows={4}
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-red-400 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="button"
                onClick={() => alert('Contact form submitted! We\'ll get back to you soon.')}
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact













