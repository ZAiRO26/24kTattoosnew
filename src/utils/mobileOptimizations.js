// Mobile-specific optimizations and utilities

// Detect mobile device type
export const detectMobileDevice = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  return {
    isAndroid: /android/i.test(userAgent),
    isIOS: /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent),
    isTablet: /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)|Android(?=.*\bMobile\b)/i.test(userAgent),
    hasTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0
  };
};

// Optimize viewport for mobile devices
export const optimizeViewport = () => {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    // Enhanced viewport settings for better mobile experience
    viewport.setAttribute('content', 
      'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover'
    );
  }
};

// Prevent iOS zoom on input focus
export const preventIOSZoom = () => {
  const device = detectMobileDevice();
  
  if (device.isIOS) {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      if (parseFloat(getComputedStyle(input).fontSize) < 16) {
        input.style.fontSize = '16px';
      }
    });
  }
};

// Optimize touch events for better performance
export const optimizeTouchEvents = () => {
  // Add passive event listeners for better scroll performance
  const addPassiveEventListener = (element, event, handler) => {
    element.addEventListener(event, handler, { passive: true });
  };

  // Optimize scroll events
  addPassiveEventListener(window, 'scroll', () => {
    // Throttled scroll handling
  });

  // Optimize touch events
  addPassiveEventListener(document, 'touchstart', () => {});
  addPassiveEventListener(document, 'touchmove', () => {});
};

// Add mobile-specific CSS classes
export const addMobileClasses = () => {
  const device = detectMobileDevice();
  const html = document.documentElement;
  
  if (device.isMobile) html.classList.add('is-mobile');
  if (device.isTablet) html.classList.add('is-tablet');
  if (device.isAndroid) html.classList.add('is-android');
  if (device.isIOS) html.classList.add('is-ios');
  if (device.hasTouch) html.classList.add('has-touch');
  
  // Add screen size classes
  const updateScreenClasses = () => {
    const width = window.innerWidth;
    html.classList.remove('screen-xs', 'screen-sm', 'screen-md', 'screen-lg', 'screen-xl');
    
    if (width < 480) html.classList.add('screen-xs');
    else if (width < 768) html.classList.add('screen-sm');
    else if (width < 1024) html.classList.add('screen-md');
    else if (width < 1280) html.classList.add('screen-lg');
    else html.classList.add('screen-xl');
  };
  
  updateScreenClasses();
  window.addEventListener('resize', updateScreenClasses);
};

// Optimize images for mobile
export const optimizeImagesForMobile = () => {
  const device = detectMobileDevice();
  
  if (device.isMobile) {
    // Reduce image quality for mobile to save bandwidth
    const images = document.querySelectorAll('img[src*="unsplash"]');
    images.forEach(img => {
      const src = img.src;
      if (src.includes('?')) {
        img.src = src + '&q=60'; // Lower quality for mobile
      } else {
        img.src = src + '?q=60';
      }
    });
  }
};

// Handle safe area insets for devices with notches
export const handleSafeAreaInsets = () => {
  const css = `
    :root {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
    
    .safe-area-top { padding-top: var(--safe-area-inset-top); }
    .safe-area-bottom { padding-bottom: var(--safe-area-inset-bottom); }
    .safe-area-left { padding-left: var(--safe-area-inset-left); }
    .safe-area-right { padding-right: var(--safe-area-inset-right); }
  `;
  
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

// Improve mobile scrolling performance
export const improveMobileScrolling = () => {
  // Add momentum scrolling for iOS
  document.body.style.webkitOverflowScrolling = 'touch';
  
  // Optimize scroll containers
  const scrollContainers = document.querySelectorAll('.overflow-auto, .overflow-scroll');
  scrollContainers.forEach(container => {
    container.style.webkitOverflowScrolling = 'touch';
    container.style.overscrollBehavior = 'contain';
  });
};

// Initialize all mobile optimizations
export const initializeMobileOptimizations = () => {
  optimizeViewport();
  addMobileClasses();
  optimizeTouchEvents();
  handleSafeAreaInsets();
  improveMobileScrolling();
  
  // Delay iOS-specific optimizations to ensure DOM is ready
  setTimeout(() => {
    preventIOSZoom();
    optimizeImagesForMobile();
  }, 100);
};

export default {
  detectMobileDevice,
  optimizeViewport,
  preventIOSZoom,
  optimizeTouchEvents,
  addMobileClasses,
  optimizeImagesForMobile,
  handleSafeAreaInsets,
  improveMobileScrolling,
  initializeMobileOptimizations
};