import FAQSection from './components/FAQSection';
import HeroSlider from './components/HeroSlider';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

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



// Redesigned HomePage matching the provided reference
const HomePage = () => {
  return (
  <div className="pt-0 bg-white text-gray-900">
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Welcome Section */}
  <section className="bg-black py-12 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">WELCOME TO <span className="text-yellow-400">24K TATTOO HAIR & ODDITIES</span></h2>
            <p className="text-gray-200 mb-4">Your destination for exceptional tattoo artists. Our studio is renowned for its artistic expertise and commitment to quality.</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 font-bold text-black tracking-wide transition-colors shadow-lg uppercase rounded-none" style={{borderRadius:0}}>BOOK AN APPOINTMENT</button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <img src="/tattoo1.jpg" alt="Tattoo 1" className="w-full h-40 object-cover rounded border border-gray-800" />
            <img src="/tattoo2.jpg" alt="Tattoo 2" className="w-full h-40 object-cover rounded" />
            <img src="/tattoo3.jpg" alt="Tattoo 3" className="w-full h-40 object-cover rounded" />
            <img src="/tattoo4.jpg" alt="Tattoo 4" className="w-full h-40 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* What We Do Best Section */}
  <section className="bg-black py-12 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">WHAT <span className="text-yellow-400">WE DO BEST</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Example tattoo categories */}
            <div className="bg-black/60 p-2 rounded text-center">
              <img src="/tattoo5.jpg" alt="Animal Tattoos" className="w-full h-32 object-cover rounded mb-2" />
              <span className="text-white text-sm font-semibold">ANIMAL TATTOOS</span>
            </div>
            <div className="bg-black/60 p-2 rounded text-center">
              <img src="/tattoo6.jpg" alt="Traditional Tattoos" className="w-full h-32 object-cover rounded mb-2" />
              <span className="text-white text-sm font-semibold">TRADITIONAL TATTOOS</span>
            </div>
            <div className="bg-black/60 p-2 rounded text-center">
              <img src="/tattoo7.jpg" alt="Neo-Traditional Tattoos" className="w-full h-32 object-cover rounded mb-2" />
              <span className="text-white text-sm font-semibold">NEO-TRADITIONAL TATTOOS</span>
            </div>
            <div className="bg-black/60 p-2 rounded text-center">
              <img src="/tattoo8.jpg" alt="Dragon Tattoos" className="w-full h-32 object-cover rounded mb-2" />
              <span className="text-white text-sm font-semibold">DRAGON TATTOOS</span>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-black text-white border border-white px-6 py-2 rounded-none font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">SHOW FULL GALLERY</button>
          </div>
        </div>
      </section>

      {/* Piercing Section */}
      <section className="bg-black py-12 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">PIERCING</h2>
            <p className="text-gray-200 mb-4">Piercing artistry at its finest. Our experienced piercers offer a wide range of services in a safe, clean, and welcoming environment.</p>
            <button className="bg-red-700 hover:bg-red-800 px-6 py-2 font-bold text-white tracking-wide transition-colors shadow-lg uppercase rounded-none" style={{borderRadius:0}}>BOOK A PIERCING APPOINTMENT</button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <img src="/piercing1.jpg" alt="Piercing 1" className="w-full h-40 object-cover rounded" />
            <img src="/piercing2.jpg" alt="Piercing 2" className="w-full h-40 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12 text-left">Frequently Asked Questions</h2>
          <FAQSection />
        </div>
      </section>




      {/* Instagram / Gallery Section */}
      <section className="bg-[#7a1818] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">ON INSTAGRAM</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {/* Placeholder images for Instagram gallery */}
            {[...Array(12)].map((_, i) => (
              <img key={i} src={`/insta${i+1}.jpg`} alt={`Instagram ${i+1}`} className="w-full h-32 object-cover rounded" />
            ))}
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
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
