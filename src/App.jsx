import FAQSection from './components/FAQSection';
import HeroSlider from './components/HeroSlider';
import React, { useEffect, Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { initializeCrossBrowserSupport } from './utils/crossBrowserSupport';
import { initializeMobileOptimizations } from './utils/mobileOptimizations';

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollRestoration from './components/ScrollRestoration'

// Lazy load page components for better performance
const BookNowPage = lazy(() => import('./pages/BookNowPage'));
const DosAndDontsPage = lazy(() => import('./pages/DosAndDontsPage'));
const HairServicesPage = lazy(() => import('./pages/HairServicesPage'));
const PiercingServicesPage = lazy(() => import('./pages/PiercingServicesPage'));
const PressSocialsPage = lazy(() => import('./pages/PressSocialsPage'));
const TattooStylesPage = lazy(() => import('./pages/TattooStylesPage'));
const OurStoryPage = lazy(() => import('./pages/OurStoryPage'));
const AboutArtistPage = lazy(() => import('./pages/AboutArtistPage'));
const StudioPage = lazy(() => import('./pages/StudioPage'));
const DosAndDontsTattoosPage = lazy(() => import('./pages/DosAndDontsTattoosPage'));
const DosAndDontsPiercingsPage = lazy(() => import('./pages/DosAndDontsPiercingsPage'));
const DosAndDontsFAQPage = lazy(() => import('./pages/DosAndDontsFAQPage'));
const DosAndDontsPoliciesPage = lazy(() => import('./pages/DosAndDontsPoliciesPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const TattooAcademyPage = lazy(() => import('./pages/TattooAcademyPage'));
const ShortTermCoursesPage = lazy(() => import('./pages/ShortTermCoursesPage'));
const BasicTattooCoursesPage = lazy(() => import('./pages/BasicTattooCoursesPage'));
const ProTattooCoursesPage = lazy(() => import('./pages/ProTattooCoursesPage'));
const CoverUpsPage = lazy(() => import('./pages/CoverUpsPage'));
const BlackGreyPage = lazy(() => import('./pages/BlackGreyPage'));
const ColourPage = lazy(() => import('./pages/ColourPage'));
const PortraitsRealisticPage = lazy(() => import('./pages/PortraitsRealisticPage'));
const MicroMinimalistPage = lazy(() => import('./pages/MicroMinimalistPage'));
const CustomisedTattooPage = lazy(() => import('./pages/CustomisedTattooPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));



// Redesigned HomePage matching the Ganga Tattoo Studio minimalistic design
const HomePage = () => {
  // Work images from the home-page-work folder
  const workImages = [
    {
      id: 1,
      image: '/assets/home-page-work/230b0218-5244-40bd-b3f5-d9d88e5cdf39.jpg'
    },
    {
      id: 2,
      image: '/assets/home-page-work/665FE432-C169-4489-AEED-76F6DF5ADB29.jpg'
    },
    {
      id: 3,
      image: '/assets/home-page-work/D6739A60-E4CF-47DD-BE23-D76475C2FC23.jpg'
    },
    {
      id: 4,
      image: '/assets/home-page-work/IMG_0882.jpg'
    },
    {
      id: 5,
      image: '/assets/home-page-work/IMG_0912.jpg'
    },
    {
      id: 6,
      image: '/assets/home-page-work/IMG_1195.jpg'
    },
    {
      id: 7,
      image: '/assets/home-page-work/IMG_2362.jpg'
    },
    {
      id: 8,
      image: '/assets/home-page-work/IMG_3250.jpg'
    },
    {
      id: 9,
      image: '/assets/home-page-work/IMG_4050.jpg'
    },
    {
      id: 10,
      image: '/assets/home-page-work/IMG_4430.jpg'
    },
    {
      id: 11,
      image: '/assets/home-page-work/IMG_4513.jpg'
    },
    {
      id: 12,
      image: '/assets/home-page-work/IMG_4537.jpg'
    },
    {
      id: 13,
      image: '/assets/home-page-work/IMG_4950.jpg'
    },
    {
      id: 14,
      image: '/assets/home-page-work/IMG_6062.jpg'
    },
    {
      id: 15,
      image: '/assets/home-page-work/IMG_6385.jpg'
    },
    {
      id: 16,
      image: '/assets/home-page-work/IMG_6883.jpg'
    },
    {
      id: 17,
      image: '/assets/home-page-work/IMG_7490.jpg'
    },
    {
      id: 18,
      image: '/assets/home-page-work/IMG_7691.jpg'
    },
    {
      id: 19,
      image: '/assets/home-page-work/IMG_8052.jpg'
    },
    {
      id: 20,
      image: '/assets/home-page-work/IMG_8370.jpg'
    },
    {
      id: 21,
      image: '/assets/home-page-work/IMG_8493.jpg'
    },
    {
      id: 22,
      image: '/assets/home-page-work/IMG_8673.jpg'
    },
    {
      id: 23,
      image: '/assets/home-page-work/IMG_8894.jpg'
    },
    {
      id: 24,
      image: '/assets/home-page-work/IMG_8914.jpg'
    },
    {
      id: 25,
      image: '/assets/home-page-work/IMG_9075.jpg'
    },
    {
      id: 26,
      image: '/assets/home-page-work/IMG_9168.jpg'
    },
    {
      id: 27,
      image: '/assets/home-page-work/IMG_9238.jpg'
    },
    {
      id: 28,
      image: '/assets/home-page-work/IMG_9766.jpg'
    }
  ];
  
  return (
    <div className="pt-0 bg-minimal-white text-minimal-black transition-colors duration-300">
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Work Section - Reduced padding */}
      <motion.section 
        className="py-6 md:py-8 lg:py-10 bg-minimal-white transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-minimal-black mb-4 md:mb-6 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Work
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-minimal-gray max-w-3xl mx-auto transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Browse our most recent projects below and enjoy our professional tattoo studio work with love for every detail.
            </motion.p>
          </motion.div>
          
          {/* Work Grid - Reduced gap and margin */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {workImages.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="aspect-square bg-minimal-light-gray overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1, 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <img 
                  src={item.image} 
                  alt="Professional tattoo work"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <motion.button 
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/styles/gallery'}
            >
              VIEW FULL GALLERY
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Academy Section - Reduced padding */}
      <motion.section 
        className="py-6 md:py-8 lg:py-10" 
        style={{ 
          backgroundColor: '#B8B8B8'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Start learning with us
              </motion.h2>
              <motion.p 
                className="text-base md:text-lg text-gray-600 mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                Get the possibility of tattooing in 24K Tattoo Studio
              </motion.p>
              <motion.div
                className="bg-accent-gold text-deep-charcoal px-8 py-4 font-semibold hover:bg-gold-dark transition-colors duration-200"
                component={Link}
                to="/tattoo-academy"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                DISCOVER OUR ACADEMY
              </motion.div>
            </motion.div>
            <motion.div 
              className="aspect-video bg-white border border-gray-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-accent-gold rounded-full mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-8 h-8 text-deep-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </motion.div>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
                  >
                    Academy Preview
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section - Reduced padding */}
      <motion.section 
        className="py-6 md:py-8 lg:py-10 bg-light-charcoal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Do you want a tattoo?
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-gray-400 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Professional tattoo services with personalized attention
            </motion.p>
            <motion.button 
              className="bg-accent-gold text-deep-charcoal px-8 py-4 font-semibold hover:bg-gold-dark transition-colors duration-200"
              onClick={() => window.location.href = '/book-now'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              BOOK TATTOO APPOINTMENT
            </motion.button>
          </motion.div>
          
          {/* Services Grid - Reduced gap */}
          <motion.div 
            className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div 
                className="w-16 h-16 bg-accent-gold rounded-full mx-auto mb-6 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-8 h-8 text-deep-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-gray-300 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              >
                Custom Design
              </motion.h3>
              <motion.p 
                className="text-gray-400"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
              >
                Unique artwork tailored to your vision and style preferences
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="w-16 h-16 bg-accent-gold rounded-full mx-auto mb-6 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-8 h-8 text-deep-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-gray-300 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
              >
                Professional Quality
              </motion.h3>
              <motion.p 
                className="text-gray-400"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
              >
                Licensed artists with years of experience and attention to detail
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="w-16 h-16 bg-accent-gold rounded-full mx-auto mb-6 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-8 h-8 text-deep-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-gray-300 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
              >
                Quick Response
              </motion.h3>
              <motion.p 
                className="text-gray-400"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
              >
                We respond to all inquiries within 24 hours
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section - Reduced padding */}
      <motion.section 
        className="py-6 md:py-8 lg:py-10 bg-deep-charcoal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-text mb-8 md:mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <FAQSection />
          </motion.div>
        </div>
      </motion.section>
      
    </div>
  )
}

function App() {
  // Initialize cross-browser support and mobile optimizations on app load
  useEffect(() => {
    initializeCrossBrowserSupport();
    initializeMobileOptimizations();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-minimal-white text-minimal-black flex flex-col transition-colors duration-300">
        <Header />
        <ScrollRestoration />
        <div className="flex-1">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-minimal-white">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-minimal-black mx-auto mb-4"></div>
                <p className="text-minimal-gray">Loading...</p>
              </div>
            </div>
          }>
              <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Redirect old URLs to /styles */}
              <Route path="/tattoos" element={<TattooStylesPage />} />
              <Route path="/tattoos/galleries" element={<TattooStylesPage />} />
              <Route path="/styles" element={<TattooStylesPage />} />
              <Route path="/styles/cover-ups" element={<CoverUpsPage />} />
              <Route path="/styles/black-grey" element={<BlackGreyPage />} />
              <Route path="/styles/colour" element={<ColourPage />} />
              <Route path="/styles/portraits-realistic" element={<PortraitsRealisticPage />} />
              <Route path="/styles/micro-minimalist" element={<MicroMinimalistPage />} />
              <Route path="/styles/customised-tattoo" element={<CustomisedTattooPage />} />
              <Route path="/styles/gallery" element={<GalleryPage />} />
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
              <Route path="/tattoo-academy" element={<TattooAcademyPage />} />
              <Route path="/tattoo-academy/short-term-courses" element={<ShortTermCoursesPage />} />
              <Route path="/tattoo-academy/basic-courses" element={<BasicTattooCoursesPage />} />
              <Route path="/tattoo-academy/pro-courses" element={<ProTattooCoursesPage />} />
              {/* Legacy route redirects */}
              <Route path="/tattoo-academy/basic-tattoo-courses" element={<BasicTattooCoursesPage />} />
              <Route path="/tattoo-academy/pro-tattoo-courses" element={<ProTattooCoursesPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
