// Performance optimization utilities for cross-platform compatibility

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Execute immediately
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

/**
 * Throttle function to limit function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Check if user prefers reduced motion
 * @returns {boolean} Reduced motion preference
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get device type based on screen size and user agent
 * @returns {string} Device type (mobile, tablet, desktop)
 */
export const getDeviceType = () => {
  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (width <= 768 || /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
    return width <= 480 ? 'mobile' : 'tablet';
  }
  return 'desktop';
};

/**
 * Check if device supports touch
 * @returns {boolean} Touch support status
 */
export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Get browser information
 * @returns {Object} Browser details
 */
export const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;
  const browsers = {
    chrome: /chrome/i.test(userAgent) && !/edge/i.test(userAgent),
    firefox: /firefox/i.test(userAgent),
    safari: /safari/i.test(userAgent) && !/chrome/i.test(userAgent),
    edge: /edge/i.test(userAgent),
    ie: /msie|trident/i.test(userAgent)
  };
  
  const browserName = Object.keys(browsers).find(key => browsers[key]) || 'unknown';
  
  return {
    name: browserName,
    ...browsers,
    version: getBrowserVersion(userAgent, browserName)
  };
};

/**
 * Get browser version
 * @param {string} userAgent - User agent string
 * @param {string} browserName - Browser name
 * @returns {string} Browser version
 */
const getBrowserVersion = (userAgent, browserName) => {
  const versionRegex = {
    chrome: /chrome\/(\d+)/i,
    firefox: /firefox\/(\d+)/i,
    safari: /version\/(\d+)/i,
    edge: /edge\/(\d+)/i,
    ie: /(?:msie |rv:)(\d+)/i
  };
  
  const regex = versionRegex[browserName];
  if (regex) {
    const match = userAgent.match(regex);
    return match ? match[1] : 'unknown';
  }
  return 'unknown';
};

/**
 * Check if browser supports modern features
 * @returns {Object} Feature support status
 */
export const checkBrowserSupport = () => {
  return {
    webp: checkWebPSupport(),
    avif: checkAVIFSupport(),
    intersectionObserver: 'IntersectionObserver' in window,
    resizeObserver: 'ResizeObserver' in window,
    customProperties: CSS.supports('color', 'var(--test)'),
    grid: CSS.supports('display', 'grid'),
    flexbox: CSS.supports('display', 'flex'),
    objectFit: CSS.supports('object-fit', 'cover'),
    backdropFilter: CSS.supports('backdrop-filter', 'blur(10px)'),
    webGL: !!window.WebGLRenderingContext,
    serviceWorker: 'serviceWorker' in navigator,
    localStorage: typeof Storage !== 'undefined'
  };
};

/**
 * Check WebP support
 * @returns {boolean} WebP support status
 */
const checkWebPSupport = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * Check AVIF support
 * @returns {boolean} AVIF support status
 */
const checkAVIFSupport = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
};

/**
 * Optimize scroll performance
 * @param {Function} callback - Scroll callback function
 * @param {Object} options - Optimization options
 * @returns {Function} Cleanup function
 */
export const optimizeScroll = (callback, options = {}) => {
  const { throttleMs = 16, passive = true } = options;
  const throttledCallback = throttle(callback, throttleMs);
  
  window.addEventListener('scroll', throttledCallback, { passive });
  
  return () => {
    window.removeEventListener('scroll', throttledCallback);
  };
};

/**
 * Optimize resize performance
 * @param {Function} callback - Resize callback function
 * @param {Object} options - Optimization options
 * @returns {Function} Cleanup function
 */
export const optimizeResize = (callback, options = {}) => {
  const { debounceMs = 250 } = options;
  const debouncedCallback = debounce(callback, debounceMs);
  
  window.addEventListener('resize', debouncedCallback);
  
  return () => {
    window.removeEventListener('resize', debouncedCallback);
  };
};

/**
 * Preload critical resources
 * @param {Array} resources - Array of resource objects
 */
export const preloadCriticalResources = (resources) => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = resource.as || 'fetch';
    link.href = resource.href;
    
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
    if (resource.media) link.media = resource.media;
    
    document.head.appendChild(link);
  });
};

/**
 * Add critical CSS inline
 * @param {string} css - Critical CSS string
 */
export const addCriticalCSS = (css) => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

/**
 * Load non-critical CSS asynchronously
 * @param {string} href - CSS file URL
 * @param {string} media - Media query
 */
export const loadAsyncCSS = (href, media = 'all') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = href;
  link.onload = () => {
    link.rel = 'stylesheet';
    link.media = media;
  };
  document.head.appendChild(link);
};

/**
 * Measure and report performance metrics
 * @param {string} name - Metric name
 * @param {Function} callback - Optional callback with metrics
 */
export const measurePerformance = (name, callback) => {
  if ('performance' in window && 'measure' in performance) {
    performance.mark(`${name}-start`);
    
    return {
      end: () => {
        performance.mark(`${name}-end`);
        performance.measure(name, `${name}-start`, `${name}-end`);
        
        const measure = performance.getEntriesByName(name)[0];
        if (callback) callback(measure);
        
        // Clean up marks
        performance.clearMarks(`${name}-start`);
        performance.clearMarks(`${name}-end`);
        performance.clearMeasures(name);
        
        return measure.duration;
      }
    };
  }
  
  // Fallback for browsers without Performance API
  const start = Date.now();
  return {
    end: () => {
      const duration = Date.now() - start;
      if (callback) callback({ duration });
      return duration;
    }
  };
};