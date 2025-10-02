// Image optimization utilities for better performance across all platforms

/**
 * Generate optimized image URLs with WebP support and responsive sizing
 * @param {string} originalUrl - Original image URL
 * @param {Object} options - Optimization options
 * @returns {Object} Optimized image data
 */
export const optimizeImageUrl = (originalUrl, options = {}) => {
  const {
    width = 800,
    height = 600,
    quality = 80,
    format = 'webp',
    fit = 'crop',
    auto = 'format'
  } = options;

  if (!originalUrl) return { src: '', srcSet: '', sizes: '' };

  // Handle Unsplash URLs
  if (originalUrl.includes('unsplash.com')) {
    const baseUrl = originalUrl.split('?')[0];
    const params = new URLSearchParams(originalUrl.split('?')[1] || '');
    
    // Add optimization parameters
    params.set('w', width.toString());
    params.set('h', height.toString());
    params.set('q', quality.toString());
    params.set('fm', format);
    params.set('fit', fit);
    params.set('auto', auto);

    const optimizedUrl = `${baseUrl}?${params.toString()}`;
    
    // Generate srcSet for responsive images
    const srcSet = [
      `${baseUrl}?w=400&h=${Math.round(height * 400 / width)}&q=${quality}&fm=${format}&fit=${fit}&auto=${auto} 400w`,
      `${baseUrl}?w=600&h=${Math.round(height * 600 / width)}&q=${quality}&fm=${format}&fit=${fit}&auto=${auto} 600w`,
      `${baseUrl}?w=800&h=${Math.round(height * 800 / width)}&q=${quality}&fm=${format}&fit=${fit}&auto=${auto} 800w`,
      `${baseUrl}?w=1200&h=${Math.round(height * 1200 / width)}&q=${quality}&fm=${format}&fit=${fit}&auto=${auto} 1200w`,
      `${baseUrl}?w=1600&h=${Math.round(height * 1600 / width)}&q=${quality}&fm=${format}&fit=${fit}&auto=${auto} 1600w`
    ].join(', ');

    return {
      src: optimizedUrl,
      srcSet,
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    };
  }

  // For other URLs, return as-is
  return {
    src: originalUrl,
    srcSet: '',
    sizes: ''
  };
};

/**
 * Preload critical images for better performance
 * @param {Array} imageUrls - Array of image URLs to preload
 * @param {Object} options - Preload options
 */
export const preloadImages = (imageUrls, options = {}) => {
  const { priority = 'high', fetchPriority = 'high' } = options;

  imageUrls.forEach(url => {
    if (!url) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    link.fetchPriority = fetchPriority;
    
    if (priority === 'high') {
      link.setAttribute('importance', 'high');
    }

    document.head.appendChild(link);
  });
};

/**
 * Create a low-quality image placeholder (LQIP)
 * @param {number} width - Placeholder width
 * @param {number} height - Placeholder height
 * @param {string} color - Placeholder color
 * @returns {string} Base64 encoded SVG placeholder
 */
export const createImagePlaceholder = (width = 100, height = 100, color = '#f0f0f0') => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

/**
 * Check if WebP format is supported by the browser
 * @returns {Promise<boolean>} WebP support status
 */
export const checkWebPSupport = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Get optimal image sizes based on viewport
 * @param {string} context - Context where image is used (hero, gallery, thumbnail, etc.)
 * @returns {string} Sizes attribute value
 */
export const getOptimalSizes = (context) => {
  const sizeMap = {
    hero: '100vw',
    gallery: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    thumbnail: '(max-width: 768px) 50vw, 25vw',
    card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    portrait: '(max-width: 768px) 100vw, 400px',
    fullwidth: '100vw'
  };

  return sizeMap[context] || sizeMap.gallery;
};

/**
 * Lazy load images with Intersection Observer
 * @param {HTMLElement} element - Image element to observe
 * @param {Function} callback - Callback when element is in view
 * @param {Object} options - Observer options
 */
export const lazyLoadImage = (element, callback, options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px'
  } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold, rootMargin }
  );

  observer.observe(element);
  return observer;
};