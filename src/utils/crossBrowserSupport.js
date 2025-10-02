// Cross-browser compatibility utilities

/**
 * Add vendor prefixes for CSS properties
 * @param {HTMLElement} element - Target element
 * @param {string} property - CSS property
 * @param {string} value - CSS value
 */
export const addVendorPrefixes = (element, property, value) => {
  const prefixes = ['-webkit-', '-moz-', '-ms-', '-o-', ''];
  
  prefixes.forEach(prefix => {
    element.style.setProperty(prefix + property, value);
  });
};

/**
 * Polyfill for Object.assign (IE support)
 */
export const polyfillObjectAssign = () => {
  if (typeof Object.assign !== 'function') {
    Object.assign = function(target, ...sources) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      
      const to = Object(target);
      
      sources.forEach(source => {
        if (source != null) {
          for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              to[key] = source[key];
            }
          }
        }
      });
      
      return to;
    };
  }
};

/**
 * Polyfill for Array.from (IE support)
 */
export const polyfillArrayFrom = () => {
  if (!Array.from) {
    Array.from = function(arrayLike, mapFn, thisArg) {
      const C = this;
      const items = Object(arrayLike);
      
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }
      
      const mapFunction = mapFn === undefined ? undefined : mapFn;
      if (typeof mapFunction !== 'undefined' && typeof mapFunction !== 'function') {
        throw new TypeError('Array.from: when provided, the second argument must be a function');
      }
      
      const len = parseInt(items.length);
      const A = typeof C === 'function' ? Object(new C(len)) : new Array(len);
      
      let k = 0;
      while (k < len) {
        const kValue = items[k];
        const mappedValue = mapFunction ? mapFunction.call(thisArg, kValue, k) : kValue;
        A[k] = mappedValue;
        k += 1;
      }
      
      A.length = len;
      return A;
    };
  }
};

/**
 * Polyfill for Element.closest (IE support)
 */
export const polyfillClosest = () => {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      let el = this;
      
      do {
        if (Element.prototype.matches.call(el, s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      
      return null;
    };
  }
};

/**
 * Polyfill for Element.matches (IE support)
 */
export const polyfillMatches = () => {
  if (!Element.prototype.matches) {
    Element.prototype.matches = 
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        const matches = (this.document || this.ownerDocument).querySelectorAll(s);
        let i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }
};

/**
 * Polyfill for IntersectionObserver (older browsers)
 */
export const polyfillIntersectionObserver = () => {
  if (!('IntersectionObserver' in window)) {
    // Simple fallback - immediately trigger callback for all elements
    window.IntersectionObserver = class {
      constructor(callback, options = {}) {
        this.callback = callback;
        this.options = options;
        this.elements = new Set();
      }
      
      observe(element) {
        this.elements.add(element);
        // Immediately trigger callback
        setTimeout(() => {
          this.callback([{
            target: element,
            isIntersecting: true,
            intersectionRatio: 1
          }]);
        }, 0);
      }
      
      unobserve(element) {
        this.elements.delete(element);
      }
      
      disconnect() {
        this.elements.clear();
      }
    };
  }
};

/**
 * Fix CSS custom properties for IE
 * @param {HTMLElement} element - Target element
 * @param {Object} properties - CSS custom properties
 */
export const fixCSSCustomProperties = (element, properties) => {
  // Check if properties is valid
  if (!properties || typeof properties !== 'object') {
    return;
  }
  
  const isIE = /msie|trident/i.test(navigator.userAgent);
  
  if (isIE) {
    Object.keys(properties).forEach(prop => {
      const value = properties[prop];
      // Convert CSS custom property to regular property for IE
      const regularProp = prop.replace('--', '').replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      element.style[regularProp] = value;
    });
  } else {
    Object.keys(properties).forEach(prop => {
      element.style.setProperty(prop, properties[prop]);
    });
  }
};

/**
 * Add CSS Grid fallback for older browsers
 * @param {HTMLElement} container - Grid container
 * @param {Object} fallbackStyles - Fallback styles
 */
export const addGridFallback = (container, fallbackStyles = {}) => {
  const supportsGrid = CSS.supports('display', 'grid');
  
  if (!supportsGrid) {
    // Apply flexbox fallback
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    
    // Apply fallback styles
    Object.keys(fallbackStyles).forEach(prop => {
      container.style[prop] = fallbackStyles[prop];
    });
    
    // Apply fallback to grid items
    const items = container.children;
    Array.from(items).forEach(item => {
      item.style.flex = '1 1 auto';
      item.style.minWidth = fallbackStyles.itemMinWidth || '300px';
    });
  }
};

/**
 * Fix flexbox issues in IE
 * @param {HTMLElement} container - Flex container
 */
export const fixFlexboxIE = (container) => {
  const isIE = /msie|trident/i.test(navigator.userAgent);
  
  if (isIE) {
    // Fix flex-basis bug in IE
    const items = container.querySelectorAll('[style*="flex"]');
    Array.from(items).forEach(item => {
      const computedStyle = window.getComputedStyle(item);
      const flexBasis = computedStyle.flexBasis;
      
      if (flexBasis && flexBasis !== 'auto') {
        item.style.width = flexBasis;
      }
    });
  }
};

/**
 * Add smooth scrolling polyfill
 */
export const polyfillSmoothScrolling = () => {
  if (!('scrollBehavior' in document.documentElement.style)) {
    // Simple smooth scroll implementation
    const smoothScroll = (target, duration = 500) => {
      const targetPosition = target.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;
      
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
      
      requestAnimationFrame(animation);
    };
    
    // Override scroll behavior
    const originalScrollTo = window.scrollTo;
    window.scrollTo = function(x, y) {
      if (typeof x === 'object' && x.behavior === 'smooth') {
        smoothScroll({ offsetTop: x.top || y }, 500);
      } else {
        originalScrollTo.call(this, x, y);
      }
    };
  }
};

/**
 * Fix viewport units on mobile browsers
 */
export const fixViewportUnits = () => {
  const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  setViewportHeight();
  window.addEventListener('resize', setViewportHeight);
  window.addEventListener('orientationchange', setViewportHeight);
};

/**
 * Add touch event support for desktop hover effects
 */
export const addTouchSupport = () => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) {
    document.body.classList.add('touch-device');
    
    // Convert hover effects to touch events
    const hoverElements = document.querySelectorAll('[data-hover]');
    Array.from(hoverElements).forEach(element => {
      let touchStarted = false;
      
      element.addEventListener('touchstart', () => {
        touchStarted = true;
        element.classList.add('touch-hover');
      });
      
      element.addEventListener('touchend', () => {
        if (touchStarted) {
          setTimeout(() => {
            element.classList.remove('touch-hover');
          }, 300);
        }
        touchStarted = false;
      });
      
      element.addEventListener('touchcancel', () => {
        element.classList.remove('touch-hover');
        touchStarted = false;
      });
    });
  } else {
    document.body.classList.add('no-touch');
  }
};

/**
 * Initialize all cross-browser compatibility fixes
 */
export const initCrossBrowserSupport = () => {
  // Add polyfills
  polyfillObjectAssign();
  polyfillArrayFrom();
  polyfillMatches();
  polyfillClosest();
  polyfillIntersectionObserver();
  polyfillSmoothScrolling();
  
  // Fix browser-specific issues
  fixViewportUnits();
  addTouchSupport();
  
  // Add browser detection classes
  const browserInfo = getBrowserInfo();
  document.documentElement.classList.add(`browser-${browserInfo.name}`);
  document.documentElement.classList.add(`browser-${browserInfo.name}-${browserInfo.version}`);
  
  // Add device type classes
  const deviceType = getDeviceType();
  document.documentElement.classList.add(`device-${deviceType}`);
  
  console.log('Cross-browser compatibility initialized');
};

/**
 * Initialize all cross-browser support features
 */
export const initializeCrossBrowserSupport = () => {
  // Apply polyfills
  polyfillObjectAssign();
  polyfillArrayFrom();
  polyfillClosest();
  polyfillMatches();
  polyfillIntersectionObserver();
  
  // Apply CSS fixes
  fixCSSCustomProperties();
  
  // Add browser and device classes
  const browser = getBrowserInfo();
  const device = getDeviceType();
  
  document.documentElement.classList.add(`browser-${browser.name}`);
  document.documentElement.classList.add(`browser-${browser.name}-${browser.version}`);
  document.documentElement.classList.add(`device-${device}`);
  
  // Apply mobile-specific fixes
  if (device === 'mobile') {
    document.documentElement.classList.add('is-mobile');
    fixViewportUnits();
  }
  
  console.log('Cross-browser support initialized:', { browser, device });
};

/**
 * Get browser information
 */
const getBrowserInfo = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const browsers = {
    chrome: /chrome/i.test(userAgent) && !/edge/i.test(userAgent),
    firefox: /firefox/i.test(userAgent),
    safari: /safari/i.test(userAgent) && !/chrome/i.test(userAgent),
    edge: /edge/i.test(userAgent),
    ie: /msie|trident/i.test(userAgent)
  };
  
  const browserName = Object.keys(browsers).find(key => browsers[key]) || 'unknown';
  const versionMatch = userAgent.match(new RegExp(`${browserName}[/\\s](\\d+)`));
  const version = versionMatch ? versionMatch[1] : 'unknown';
  
  return { name: browserName, version };
};

/**
 * Get device type
 */
const getDeviceType = () => {
  const width = window.innerWidth;
  if (width <= 768) return 'mobile';
  if (width <= 1024) return 'tablet';
  return 'desktop';
};