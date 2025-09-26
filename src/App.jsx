import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

// Simple HomePage without complex components
const SimpleHomePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
               style={{backgroundImage: `url(https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1200&h=800&fit=crop)`}}>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              24K TATTOOS
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Seattle's Premier Tattoo & Piercing Studio
            </p>
            <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
              Bring Your Artistic Vision to Life with Seattle's Premier Tattoo & Piercing Artists at 24K Tattoos
            </p>
            <div className="space-x-4">
              <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Browse our Artists
              </button>
              <button className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Walk Ins Welcome Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Walk Ins Welcome</h2>
          <p className="text-xl text-gray-400 mb-8">
            No appointment needed! Come visit us during business hours for consultations and walk-in tattoos.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to 24K Tattoos</h2>
              <p className="text-lg text-gray-400 mb-6">
                Your destination for exceptional tattoo artists in Seattle. Situated in the heart of the city's lively art community, our studio is renowned for its artistic expertise.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                From elaborate tattoos to precise piercings, each piece reflects our unwavering commitment to quality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=400&fit=crop"
                alt="Tattoo artist at work"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop"
                alt="Tattoo studio interior"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Ballard Location */}
            <div className="bg-black/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ballard</h3>
              <h4 className="text-lg font-semibold mb-4">24K Tattoos & Body Piercing</h4>
              <p className="text-red-400 mb-6 font-semibold">PIERCING AT BALLARD LOCATION ONLY</p>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold">Address</h5>
                  <p className="text-gray-400">508 NW 65th Street Seattle, WA 98117</p>
                </div>
                <div>
                  <h5 className="font-semibold">Call us</h5>
                  <p className="text-gray-400">206-789-2618</p>
                </div>
              </div>
            </div>

            {/* Wallingford Location */}
            <div className="bg-black/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Wallingford</h3>
              <h4 className="text-lg font-semibold mb-4">24K Tattoos</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold">Address</h5>
                  <p className="text-gray-400">403 NE 45th Street Seattle, WA 98105</p>
                </div>
                <div>
                  <h5 className="font-semibold">Call us</h5>
                  <p className="text-gray-400">206-545-3685</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Routes>
          <Route path="/" element={<SimpleHomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
