import FAQSection from './components/FAQSection';
import HeroSlider from './components/HeroSlider';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollRestoration from './components/ScrollRestoration'
import MobileTestHelper from './components/MobileTestHelper'

import BookNowPage from './pages/BookNowPage';
import DosAndDontsPage from './pages/DosAndDontsPage';
import HairServicesPage from './pages/HairServicesPage';
import PiercingServicesPage from './pages/PiercingServicesPage';
import PressSocialsPage from './pages/PressSocialsPage';
import TattooStylesPage from './pages/TattooStylesPage';
import OurStoryPage from './pages/OurStoryPage';
import AboutArtistPage from './pages/AboutArtistPage';
import StudioPage from './pages/StudioPage';
import DosAndDontsTattoosPage from './pages/DosAndDontsTattoosPage';
import DosAndDontsPiercingsPage from './pages/DosAndDontsPiercingsPage';
import DosAndDontsFAQPage from './pages/DosAndDontsFAQPage';
import DosAndDontsPoliciesPage from './pages/DosAndDontsPoliciesPage';
import ServicesPage from './pages/ServicesPage';



// Redesigned HomePage matching the Ganga Tattoo Studio minimalistic design
const HomePage = () => {
  return (
    <div className="pt-0 bg-minimal-white text-minimal-black">
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Work Section */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-minimal-black mb-6">
              Work
            </h2>
            <p className="text-lg text-minimal-gray max-w-3xl mx-auto">
              Browse our most recent projects below and enjoy our professional tattoo studio work with love for every detail.
            </p>
          </div>
          
          {/* Work Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-square bg-minimal-light-gray overflow-hidden group cursor-pointer">
                <img 
                  src={`/work-${i+1}.jpg`} 
                  alt={`Work ${i+1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="btn-outline">
              VIEW FULL GALLERY
            </button>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-minimal-black mb-6">
                Start learning with us
              </h2>
              <p className="text-lg text-minimal-gray mb-8">
                Get the possibility of tattooing in 24K Tattoo Studio
              </p>
              <button className="btn-minimal">
                DISCOVER OUR ACADEMY
              </button>
            </div>
            <div className="aspect-video bg-minimal-white border border-minimal-border">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="text-minimal-gray">Academy Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-minimal-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-minimal-black mb-6">
              Do you want a tattoo?
            </h2>
            <p className="text-lg text-minimal-gray mb-8">
              Professional tattoo services with personalized attention
            </p>
            <button 
              className="btn-minimal"
              onClick={() => window.location.href = '/book-now'}
            >
              BOOK TATTOO APPOINTMENT
            </button>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Custom Design</h3>
              <p className="text-minimal-gray">Unique artwork tailored to your vision and style preferences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Professional Quality</h3>
              <p className="text-minimal-gray">Licensed artists with years of experience and attention to detail</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-minimal-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-minimal-black mb-4">Quick Response</h3>
              <p className="text-minimal-gray">We respond to all inquiries within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-minimal-light-gray">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-minimal-black mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <FAQSection />
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-minimal-white text-minimal-black flex flex-col">
        <Header />
        <ScrollRestoration />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Redirect old URLs to /styles */}
            <Route path="/tattoos" element={<TattooStylesPage />} />
            <Route path="/tattoos/galleries" element={<TattooStylesPage />} />
            <Route path="/styles" element={<TattooStylesPage />} />
            {/* Redirect legacy piercing URLs to Do's and Don'ts/Piercings */}
            <Route path="/piercings" element={<DosAndDontsPiercingsPage />} />
            <Route path="/piercings/jewelry" element={<DosAndDontsPiercingsPage />} />
            <Route path="/piercings/aftercare" element={<DosAndDontsPiercingsPage />} />
            <Route path="/piercings/pricing" element={<DosAndDontsPiercingsPage />} />
            <Route path="/piercings/policies" element={<DosAndDontsPoliciesPage />} />
            <Route path="/book-now" element={<BookNowPage />} />
            <Route path="/dos-and-donts" element={<DosAndDontsPage />} />
            <Route path="/hair-services" element={<HairServicesPage />} />
            <Route path="/hair-and-piercing" element={<ServicesPage />} />
            <Route path="/piercing-services" element={<PiercingServicesPage />} />
            <Route path="/press-socials" element={<PressSocialsPage />} />
            <Route path="/about" element={<OurStoryPage />} />
            <Route path="/about/our-story" element={<OurStoryPage />} />
            <Route path="/about/artist" element={<AboutArtistPage />} />
            <Route path="/about/studio" element={<StudioPage />} />
            <Route path="/dos-and-donts/tattoos" element={<DosAndDontsTattoosPage />} />
            <Route path="/dos-and-donts/piercings" element={<DosAndDontsPiercingsPage />} />
            <Route path="/dos-and-donts/faq" element={<DosAndDontsFAQPage />} />
            <Route path="/dos-and-donts/policies" element={<DosAndDontsPoliciesPage />} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTop />
        <MobileTestHelper />
      </div>
    </Router>
  )
}

export default App
