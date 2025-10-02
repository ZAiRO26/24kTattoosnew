/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Soothing charcoal palette inspired by the shared design
        'soothing-charcoal': '#2a2a2a',     // Main soft charcoal (replaces harsh black)
        'deep-charcoal': '#1f1f1f',         // Deeper charcoal for backgrounds
        'light-charcoal': '#3a3a3a',        // Lighter charcoal for hover states
        'charcoal-text': '#e8e8e8',         // Light text on charcoal backgrounds
        'soft-grey': '#4a4a4a',             // Soft grey for borders/accents
        'warm-grey': '#f5f5f5',             // Warm light grey for backgrounds
        'elegant-white': '#fafafa',         // Elegant off-white
        'accent-gold': '#d4af37',           // Keeping the gold accent
        'gold-dark': '#b8941f',             // Darker gold for hover
        'gold-light': '#e6c547',            // Lighter gold variation
        
        // Legacy color mappings for compatibility
        'luxury-dark': '#2a2a2a',           // Maps to soothing-charcoal
        'warm-white': '#fafafa',            // Maps to elegant-white
        'charcoal': '#4a4a4a',              // Maps to soft-grey
        'light-gray': '#f5f5f5',            // Maps to warm-grey
        'soft-gray': '#e0e0e0',             // Light border color
        
        // Minimal color classes for component compatibility
        'minimal-black': '#2a2a2a',         // Soothing charcoal instead of harsh black
        'minimal-white': '#fafafa',         // Elegant off-white
        'minimal-gray': '#4a4a4a',          // Soft grey for text
        'minimal-light-gray': '#f5f5f5',    // Warm light grey for backgrounds
        'minimal-dark-gray': '#3a3a3a',     // Light charcoal for hover states
        'minimal-border': '#e0e0e0',        // Soft border color
      },
      fontFamily: {
        'minimal': ['Inter', 'system-ui', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Playfair Display', 'serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

