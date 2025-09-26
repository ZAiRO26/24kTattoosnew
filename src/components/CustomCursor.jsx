import React, { useEffect, useRef } from 'react';

// Simple wavy pointer SVG
const WavyPointer = () => (
  <svg width="40" height="40" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="16" stroke="#444" strokeWidth="1.5" fill="none" />
    <circle cx="20" cy="20" r="3.5" fill="#222" />
  </svg>
);

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const t = useRef(0);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    // Mouse move handler
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    // Animation loop
    const animate = () => {
      // Lerp position
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;
      // Wavy effect
      t.current += 0.12;
      const wave = Math.sin(t.current) * 4;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x - 20}px, ${pos.current.y - 20 + wave}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 40,
        height: 40,
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'normal',
      }}
    >
      <WavyPointer />
    </div>
  );
};

export default CustomCursor;
