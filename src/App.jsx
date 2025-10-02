import FAQSection from './components/FAQSection';
import HeroSlider from './components/HeroSlider';
import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
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



// Redesigned HomePage matching the Ganga Tattoo Studio minimalistic design
const HomePage = () => {
  const { scrollY } = useScroll();
  
  // Enhanced parallax transforms for bidirectional scrolling
  const workSectionY = useTransform(scrollY, [0, 2000], [0, -100]);
  const academySectionY = useTransform(scrollY, [500, 2500], [0, -150]);
  const servicesSectionY = useTransform(scrollY, [1000, 3000], [0, -100]);
  const aboutSectionY = useTransform(scrollY, [1500, 3500], [0, -120]);
  const contactSectionY = useTransform(scrollY, [2000, 4000], [0, -80]);
  
  return (
    <div className="pt-0 bg-minimal-white dark:bg-soothing-charcoal text-minimal-black dark:text-charcoal-text transition-colors duration-300">
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Work Section */}
      <motion.section 
        className="py-20 bg-minimal-white dark:bg-soothing-charcoal transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y: workSectionY }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-minimal-black dark:text-charcoal-text mb-6 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Work
            </motion.h2>
            <motion.p 
              className="text-lg text-minimal-gray dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Browse our most recent projects below and enjoy our professional tattoo studio work with love for every detail.
            </motion.p>
          </motion.div>
          
          {/* Work Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div 
                key={i} 
                className="aspect-square bg-minimal-light-gray overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1, 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <img 
                  src={`/work-${i+1}.jpg`} 
                  alt={`Work ${i+1}`}
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
            >
              VIEW FULL GALLERY
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Academy Section */}
      <motion.section 
        className="py-20" 
        style={{ 
          backgroundColor: '#B8B8B8',
          y: academySectionY
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
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
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Start learning with us
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-8"
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

      {/* Services Section */}
      <motion.section 
        className="py-20 bg-light-charcoal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
          y: servicesSectionY
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-300 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Do you want a tattoo?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-400 mb-8"
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
          
          {/* Services Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
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

      {/* FAQ Section */}
      <motion.section 
        className="py-20 bg-deep-charcoal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
          y: aboutSectionY
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-charcoal-text mb-12 text-center"
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
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-minimal-white dark:bg-soothing-charcoal text-minimal-black dark:text-charcoal-text flex flex-col transition-colors duration-300">
          <Header />
          <ScrollRestoration />
          <div className="flex-1">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center bg-minimal-white dark:bg-soothing-charcoal">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-minimal-black dark:border-charcoal-text mx-auto mb-4"></div>
                  <p className="text-minimal-gray dark:text-charcoal-text">Loading...</p>
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
    </ThemeProvider>
  )
}

export default App
