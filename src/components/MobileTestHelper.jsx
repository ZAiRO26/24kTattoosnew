import React, { useState, useEffect } from 'react';

const MobileTestHelper = () => {
  const [screenInfo, setScreenInfo] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio,
    orientation: window.screen?.orientation?.type || 'unknown'
  });

  const [touchSupport, setTouchSupport] = useState(false);

  useEffect(() => {
    // Check for touch support
    setTouchSupport('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const handleResize = () => {
      setScreenInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
        orientation: window.screen?.orientation?.type || 'unknown'
      });
    };

    const handleOrientationChange = () => {
      setTimeout(() => {
        setScreenInfo(prev => ({
          ...prev,
          width: window.innerWidth,
          height: window.innerHeight,
          orientation: window.screen?.orientation?.type || 'unknown'
        }));
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  const getDeviceType = () => {
    if (screenInfo.width < 640) return 'Mobile';
    if (screenInfo.width < 1024) return 'Tablet';
    return 'Desktop';
  };

  const getBreakpoint = () => {
    if (screenInfo.width < 640) return 'sm (< 640px)';
    if (screenInfo.width < 768) return 'md (640px - 768px)';
    if (screenInfo.width < 1024) return 'lg (768px - 1024px)';
    if (screenInfo.width < 1280) return 'xl (1024px - 1280px)';
    return '2xl (> 1280px)';
  };

  // Only show in development
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-3 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="mb-2 font-bold text-yellow-400">Mobile Test Info</div>
      <div className="space-y-1">
        <div>Device: {getDeviceType()}</div>
        <div>Screen: {screenInfo.width} × {screenInfo.height}</div>
        <div>Breakpoint: {getBreakpoint()}</div>
        <div>DPR: {screenInfo.devicePixelRatio}</div>
        <div>Touch: {touchSupport ? '✓' : '✗'}</div>
        <div>Orientation: {screenInfo.orientation}</div>
      </div>
    </div>
  );
};

export default MobileTestHelper;