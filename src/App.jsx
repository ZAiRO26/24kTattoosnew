import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import TattooGalleriesPage from './pages/TattooGalleriesPage'
import TattoosPage from './pages/TattoosPage'
import TattooArtistsPage from './pages/TattooArtistsPage'
import TattooAftercarePage from './pages/TattooAftercarePage'
import TattooPoliciesPage from './pages/TattooPoliciesPage'
import PiercingPage from './pages/PiercingPage';
import PiercingJewelryPage from './pages/PiercingJewelryPage';
import PiercingAftercarePage from './pages/PiercingAftercarePage';
import PiercingPricingPage from './pages/PiercingPricingPage';
import PiercingPoliciesPage from './pages/PiercingPoliciesPage';


// Simple HomePage styled to match the provided snip
const SimpleHomePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=1200&h=800&fit=crop)`}}></div>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between">
          {/* Left: Main Heading and Button */}
          <div className="md:w-2/3 w-full text-left flex flex-col items-center md:items-start">
            <img 
              src="/tattoo-hero-logo.png"
              alt="24K Tattoo Hair & oddities Logo"
              className="mb-6" 
              style={{ maxWidth: 320, width: '100%', height: 'auto', filter: 'drop-shadow(0 2px 12px #0008)' }}
            />
            <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-yellow-400 leading-tight uppercase" style={{letterSpacing: '-2px'}}>
              24K Tattoo Hair & oddities
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-white mb-2">Tattoo & Piercing Studio</p>
            <p className="text-xl md:text-2xl text-gray-200 mb-6">Hyderabad</p>
            <button className="mt-8 bg-red-700 hover:bg-red-800 px-8 py-4 rounded-none font-bold text-lg text-white tracking-wide transition-colors shadow-lg" style={{borderRadius: 0, border: 'none'}}>
              BROWSE OUR ARTISTS <span className="ml-2">&#8594;</span>
            </button>
          </div>
          {/* Right: Walk Ins Welcome */}
          <div className="md:w-1/3 w-full mt-12 md:mt-0 md:pl-12 flex flex-col items-end">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-red-600 text-right">Walk Ins Welcome</h2>
            <p className="text-lg md:text-xl text-white text-right max-w-xs">
              Bring Your Artistic Vision to Life with Hyderabad’s Premier Tattoo & Piercing Artists at 24K Tattoo Hair & oddities
            </p>
          </div>
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
      <div className="min-h-screen bg-black text-white flex flex-col min-h-screen">
        <CustomCursor />
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<SimpleHomePage />} />
            <Route path="/tattoos" element={<TattoosPage />} />
            <Route path="/tattoos/galleries" element={<TattooGalleriesPage />} />
            <Route path="/tattoos/artists" element={<TattooArtistsPage />} />
            <Route path="/tattoos/aftercare" element={<TattooAftercarePage />} />
            <Route path="/tattoos/policies" element={<TattooPoliciesPage />} />
            <Route path="/piercings" element={<PiercingPage />} />
            <Route path="/piercings/jewelry" element={<PiercingJewelryPage />} />
            <Route path="/piercings/aftercare" element={<PiercingAftercarePage />} />
            <Route path="/piercings/pricing" element={<PiercingPricingPage />} />
            <Route path="/piercings/policies" element={<PiercingPoliciesPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
