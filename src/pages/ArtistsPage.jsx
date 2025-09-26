import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, ArrowRight, MapPin, Clock, Instagram } from 'lucide-react'
import { artists } from '../data/artists'

const ArtistsPage = () => {
  const [selectedArtist, setSelectedArtist] = React.useState(null)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Our Artists
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet our talented team of professional tattoo artists, each bringing their unique style and expertise to create your perfect piece.
            </p>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <div key={artist.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-red-400 mb-3 font-semibold">{artist.specialty}</p>
                  <p className="text-gray-400 mb-4">{artist.bio}</p>
                  
                  {/* Artist Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="mr-2" size={16} />
                      {artist.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="mr-2" size={16} />
                      {artist.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Instagram className="mr-2" size={16} />
                      {artist.instagram}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {artist.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-red-600/20 text-red-400 px-2 py-1 rounded text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedArtist(selectedArtist === artist.id ? null : artist.id)}
                    className="text-red-400 hover:text-red-300 font-semibold flex items-center mb-4"
                  >
                    View Portfolio 
                    {selectedArtist === artist.id ? <ChevronUp className="ml-1" size={16} /> : <ChevronDown className="ml-1" size={16} />}
                  </button>
                  
                  {selectedArtist === artist.id && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {artist.portfolio.map((img, idx) => (
                        <img 
                          key={idx}
                          src={img} 
                          alt={`${artist.name} work ${idx + 1}`}
                          className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      ))}
                    </div>
                  )}

                  <Link 
                    to="/locations"
                    className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center w-full justify-center"
                  >
                    Book with {artist.name.split(' ')[0]}
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Visit us at one of our two Seattle locations. Each studio offers a unique atmosphere with talented artists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ballard Location</h3>
              <p className="text-red-400 mb-4 font-semibold">PIERCING SERVICES AVAILABLE</p>
              <div className="space-y-2 text-gray-400 mb-6">
                <p>508 NW 65th Street, Seattle, WA 98117</p>
                <p>Phone: 206-789-2618</p>
                <p>Artists: Luna Zhang, Sarah Chen, Maya Patel</p>
              </div>
              <Link 
                to="/locations#ballard"
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Visit Ballard
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="bg-black/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Wallingford Location</h3>
              <p className="text-gray-400 mb-4">TATTOOS ONLY</p>
              <div className="space-y-2 text-gray-400 mb-6">
                <p>403 NE 45th Street, Seattle, WA 98105</p>
                <p>Phone: 206-545-3685</p>
                <p>Artists: Marcus Rivera, Jake Morrison, Alex Thompson</p>
              </div>
              <Link 
                to="/locations#wallingford"
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Visit Wallingford
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with one of our talented artists. We'll help bring your vision to life.
          </p>
          <div className="space-x-4">
            <Link 
              to="/locations"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Book Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              to="/tattoos/galleries"
              className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArtistsPage
