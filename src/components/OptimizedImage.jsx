import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 80,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef(null);

  // Generate responsive image URLs for different screen sizes
  const generateResponsiveUrls = (originalSrc) => {
    if (!originalSrc || !originalSrc.includes('unsplash.com')) {
      return { src: originalSrc };
    }

    const baseUrl = originalSrc.split('?')[0];
    const params = new URLSearchParams(originalSrc.split('?')[1] || '');
    
    return {
      src: `${baseUrl}?${params.toString()}&q=${quality}&fm=webp&auto=format`,
      srcSet: [
        `${baseUrl}?w=400&q=${quality}&fm=webp&auto=format 400w`,
        `${baseUrl}?w=600&q=${quality}&fm=webp&auto=format 600w`,
        `${baseUrl}?w=800&q=${quality}&fm=webp&auto=format 800w`,
        `${baseUrl}?w=1200&q=${quality}&fm=webp&auto=format 1200w`,
        `${baseUrl}?w=1600&q=${quality}&fm=webp&auto=format 1600w`
      ].join(', '),
      fallbackSrc: originalSrc // Original URL as fallback
    };
  };

  const { src: optimizedSrc, srcSet, fallbackSrc } = generateResponsiveUrls(src);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current && loading === 'lazy') {
      observer.observe(imgRef.current);
    } else {
      setIsInView(true);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    setRetryCount(0);
  };

  const handleError = () => {
    if (retryCount < 2 && fallbackSrc && fallbackSrc !== optimizedSrc) {
      // Retry with fallback URL
      setRetryCount(prev => prev + 1);
      return;
    }
    setHasError(true);
  };

  // Preload critical images
  useEffect(() => {
    if (loading === 'eager' && optimizedSrc) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimizedSrc;
      if (srcSet) link.setAttribute('imagesrcset', srcSet);
      if (sizes) link.setAttribute('imagesizes', sizes);
      document.head.appendChild(link);
      
      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [optimizedSrc, srcSet, sizes, loading]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Main Image */}
      {(isInView || loading === 'eager') && !hasError && (
        <img
          src={retryCount > 0 ? fallbackSrc : optimizedSrc}
          srcSet={retryCount === 0 ? srcSet : undefined}
          sizes={retryCount === 0 ? sizes : undefined}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            contentVisibility: 'auto',
            containIntrinsicSize: '300px 200px'
          }}
          {...props}
        />
      )}
      
      {/* Error Fallback */}
      {hasError && (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center min-h-[200px]">
          <span className="text-gray-500 text-sm">Image not available</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;













