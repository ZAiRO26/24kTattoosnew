/**
 * Testing utilities for cross-browser and device compatibility
 */

// Browser detection and testing utilities
export const browserTests = {
  // Test if browser supports modern features
  testModernFeatures() {
    const results = {
      webp: this.supportsWebP(),
      avif: this.supportsAVIF(),
      intersectionObserver: 'IntersectionObserver' in window,
      customProperties: this.supportsCSSCustomProperties(),
      grid: this.supportsCSSGrid(),
      flexbox: this.supportsFlexbox(),
      es6: this.supportsES6(),
      serviceWorker: 'serviceWorker' in navigator,
      webGL: this.supportsWebGL(),
      touchEvents: 'ontouchstart' in window,
      devicePixelRatio: window.devicePixelRatio || 1
    };
    
    console.log('Browser Feature Support:', results);
    return results;
  },

  supportsWebP() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  },

  supportsAVIF() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  },

  supportsCSSCustomProperties() {
    return window.CSS && CSS.supports && CSS.supports('color', 'var(--test)');
  },

  supportsCSSGrid() {
    return CSS.supports('display', 'grid');
  },

  supportsFlexbox() {
    return CSS.supports('display', 'flex');
  },

  supportsES6() {
    try {
      return typeof Symbol !== 'undefined' && 
             typeof Promise !== 'undefined' && 
             typeof Map !== 'undefined';
    } catch (e) {
      return false;
    }
  },

  supportsWebGL() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && 
               (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }
};

// Performance testing utilities
export const performanceTests = {
  // Test loading performance
  testLoadingPerformance() {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0];
      const results = {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint: this.getFirstPaint(),
        firstContentfulPaint: this.getFirstContentfulPaint(),
        largestContentfulPaint: this.getLargestContentfulPaint()
      };
      
      console.log('Performance Metrics:', results);
      return results;
    }
    return null;
  },

  getFirstPaint() {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    return firstPaint ? firstPaint.startTime : null;
  },

  getFirstContentfulPaint() {
    const paintEntries = performance.getEntriesByType('paint');
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return fcp ? fcp.startTime : null;
  },

  getLargestContentfulPaint() {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry ? lastEntry.startTime : null);
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Timeout after 10 seconds
        setTimeout(() => resolve(null), 10000);
      } else {
        resolve(null);
      }
    });
  },

  // Test memory usage
  testMemoryUsage() {
    if ('memory' in performance) {
      const memory = performance.memory;
      const results = {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit,
        usagePercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit * 100).toFixed(2)
      };
      
      console.log('Memory Usage:', results);
      return results;
    }
    return null;
  }
};

// Mobile and responsive testing utilities
export const mobileTests = {
  // Test viewport and responsive behavior
  testViewport() {
    const results = {
      screenWidth: screen.width,
      screenHeight: screen.height,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1,
      orientation: screen.orientation ? screen.orientation.type : 'unknown',
      isMobile: this.isMobileDevice(),
      isTablet: this.isTabletDevice(),
      isDesktop: this.isDesktopDevice(),
      touchSupport: 'ontouchstart' in window,
      maxTouchPoints: navigator.maxTouchPoints || 0
    };
    
    console.log('Viewport and Device Info:', results);
    return results;
  },

  isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (window.innerWidth <= 768 && 'ontouchstart' in window);
  },

  isTabletDevice() {
    return /iPad|Android/i.test(navigator.userAgent) && window.innerWidth > 768 && window.innerWidth <= 1024;
  },

  isDesktopDevice() {
    return !this.isMobileDevice() && !this.isTabletDevice();
  },

  // Test touch interactions
  testTouchInteractions() {
    const results = {
      touchEvents: 'ontouchstart' in window,
      pointerEvents: 'onpointerdown' in window,
      maxTouchPoints: navigator.maxTouchPoints || 0,
      touchAction: CSS.supports('touch-action', 'manipulation'),
      userSelect: CSS.supports('user-select', 'none')
    };
    
    console.log('Touch Interaction Support:', results);
    return results;
  }
};

// Accessibility testing utilities
export const accessibilityTests = {
  // Test accessibility features
  testAccessibility() {
    const results = {
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      highContrast: window.matchMedia('(prefers-contrast: high)').matches,
      darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
      screenReader: this.detectScreenReader(),
      keyboardNavigation: this.testKeyboardNavigation(),
      focusVisible: CSS.supports('selector(:focus-visible)')
    };
    
    console.log('Accessibility Features:', results);
    return results;
  },

  detectScreenReader() {
    // Basic screen reader detection
    return !!(window.speechSynthesis || 
             navigator.userAgent.includes('NVDA') ||
             navigator.userAgent.includes('JAWS') ||
             navigator.userAgent.includes('VoiceOver'));
  },

  testKeyboardNavigation() {
    // Test if Tab key navigation works
    const focusableElements = document.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    return focusableElements.length > 0;
  }
};

// Comprehensive testing suite
export const runAllTests = async () => {
  console.log('🧪 Starting comprehensive browser and device testing...');
  
  const results = {
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    browserFeatures: browserTests.testModernFeatures(),
    performance: performanceTests.testLoadingPerformance(),
    memory: performanceTests.testMemoryUsage(),
    viewport: mobileTests.testViewport(),
    touch: mobileTests.testTouchInteractions(),
    accessibility: accessibilityTests.testAccessibility()
  };

  // Add LCP measurement
  try {
    results.performance.largestContentfulPaint = await performanceTests.getLargestContentfulPaint();
  } catch (e) {
    console.warn('Could not measure LCP:', e);
  }

  console.log('📊 Complete Test Results:', results);
  
  // Generate recommendations
  const recommendations = generateRecommendations(results);
  console.log('💡 Recommendations:', recommendations);
  
  return { results, recommendations };
};

// Generate recommendations based on test results
function generateRecommendations(results) {
  const recommendations = [];
  
  // Browser feature recommendations
  if (!results.browserFeatures.webp) {
    recommendations.push('Consider adding WebP fallbacks for better image optimization');
  }
  
  if (!results.browserFeatures.intersectionObserver) {
    recommendations.push('Add IntersectionObserver polyfill for lazy loading');
  }
  
  if (!results.browserFeatures.customProperties) {
    recommendations.push('Add CSS custom properties fallbacks for IE support');
  }
  
  // Performance recommendations
  if (results.performance && results.performance.firstContentfulPaint > 2500) {
    recommendations.push('First Contentful Paint is slow - optimize critical resources');
  }
  
  if (results.memory && parseFloat(results.memory.usagePercentage) > 80) {
    recommendations.push('High memory usage detected - consider optimizing JavaScript');
  }
  
  // Mobile recommendations
  if (results.viewport.isMobile && results.viewport.windowWidth < 375) {
    recommendations.push('Optimize layout for very small screens (< 375px)');
  }
  
  if (results.touch.touchEvents && !results.touch.touchAction) {
    recommendations.push('Add touch-action CSS property for better touch performance');
  }
  
  // Accessibility recommendations
  if (results.accessibility.reducedMotion) {
    recommendations.push('User prefers reduced motion - ensure animations respect this setting');
  }
  
  if (results.accessibility.darkMode) {
    recommendations.push('User prefers dark mode - ensure dark theme is properly implemented');
  }
  
  return recommendations;
}

// Export for global testing
if (typeof window !== 'undefined') {
  window.testingUtils = {
    browserTests,
    performanceTests,
    mobileTests,
    accessibilityTests,
    runAllTests
  };
}