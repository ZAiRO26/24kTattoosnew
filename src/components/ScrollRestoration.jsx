import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will handle scrolling to top when route changes
function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth animation when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollRestoration;