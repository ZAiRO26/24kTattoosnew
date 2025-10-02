import { lazy } from 'react';

// Enhanced lazy loading with preloading capabilities
export const createLazyComponent = (importFunc, preloadCondition = null) => {
  const LazyComponent = lazy(importFunc);
  
  // Add preload method to the component
  LazyComponent.preload = importFunc;
  
  // Auto-preload based on condition
  if (preloadCondition && preloadCondition()) {
    LazyComponent.preload();
  }
  
  return LazyComponent;
};

// Preload components on hover or other interactions
export const preloadOnHover = (componentPreloader) => {
  return {
    onMouseEnter: () => {
      if (componentPreloader) {
        componentPreloader();
      }
    },
    onFocus: () => {
      if (componentPreloader) {
        componentPreloader();
      }
    }
  };
};

// Preload components based on route patterns
export const preloadRouteComponents = (routes) => {
  const currentPath = window.location.pathname;
  
  routes.forEach(({ path, preloader }) => {
    // Preload components for likely next routes
    if (shouldPreloadRoute(currentPath, path)) {
      preloader();
    }
  });
};

// Determine if a route should be preloaded based on current path
const shouldPreloadRoute = (currentPath, targetPath) => {
  // Preload related routes (e.g., if on /styles, preload style sub-pages)
  if (currentPath === '/styles' && targetPath.startsWith('/styles/')) {
    return true;
  }
  
  // Preload common navigation targets
  const commonRoutes = ['/book-now', '/about', '/dos-and-donts'];
  if (commonRoutes.includes(targetPath)) {
    return true;
  }
  
  return false;
};

// Intersection Observer for lazy loading components when they come into view
export const createIntersectionLazyLoader = (threshold = 0.1) => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const preloader = element.dataset.preloader;
          
          if (preloader && window[preloader]) {
            window[preloader]();
            // Remove observer after loading
            observer.unobserve(element);
          }
        }
      });
    },
    { threshold }
  );
};

export default {
  createLazyComponent,
  preloadOnHover,
  preloadRouteComponents,
  createIntersectionLazyLoader
};