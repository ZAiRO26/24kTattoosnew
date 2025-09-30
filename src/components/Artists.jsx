import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { artists } from '../data/artists'

const Artists = () => {
  const [selectedArtist, setSelectedArtist] = useState(null)

  return (
    <section id="artists" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Artists</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet our talented team of professional tattoo artists, each bringing their unique style and expertise to create your perfect piece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div key={artist.id} className="bg-black/50 rounded-lg overflow-hidden hover:bg-black/70 transition-colors">
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                <p className="text-red-400 mb-3">{artist.specialty}</p>
                <p className="text-gray-400 mb-4">{artist.bio}</p>
                <button 
                  onClick={() => setSelectedArtist(selectedArtist === artist.id ? null : artist.id)}
                  className="text-red-400 hover:text-red-300 font-semibold flex items-center"
                >
                  View Portfolio 
                  {selectedArtist === artist.id ? <ChevronUp className="ml-1" size={16} /> : <ChevronDown className="ml-1" size={16} />}
                </button>
                
                {selectedArtist === artist.id && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Artists








