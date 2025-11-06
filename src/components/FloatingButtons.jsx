import React, { useEffect, useState, useCallback } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'

// Floating action buttons: WhatsApp and ScrollToTop
export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    // Smooth scroll to top over ~500ms
    const start = window.scrollY
    const duration = 500
    const startTime = performance.now()

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      const nextY = Math.round(start * (1 - eased))
      window.scrollTo(0, nextY)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [])

  return (
    <>
      {/* Bottom-left: WhatsApp */}
      <div className="fixed bottom-4 left-4 z-50 pointer-events-none sm:bottom-6 sm:left-6">
        <div className="pointer-events-auto">
          <a
            href="https://wa.me/918178687129"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
            className="group inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-minimal-black hover:bg-minimal-dark-gray focus:outline-none focus:ring-2 focus:ring-minimal-black shadow-lg transition-colors duration-200"
          >
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
            <span className="sr-only">Open WhatsApp chat</span>
          </a>
        </div>
      </div>

      {/* Bottom-right: Scroll to top */}
      <div className="fixed bottom-4 right-4 z-50 pointer-events-none sm:bottom-6 sm:right-6">
        <div className="pointer-events-auto">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
            className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-minimal-black hover:bg-minimal-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-minimal-black shadow-lg transition-all duration-200 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
          >
            <ArrowUp className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </>
  )
}