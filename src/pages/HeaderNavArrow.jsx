import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const HeaderNavArrow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      // Check if we've scrolled past the first viewport height
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-8 right-8 p-3 rounded-full 
        bg-black/80 backdrop-blur-sm border border-purple-500/30
        transform transition-all duration-500 ease-in-out z-50
        hover:scale-110 group
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
    >
      {/* Ripple effect background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur group-hover:blur-xl transition-all duration-300" />
      
      {/* Animated ring */}
      <div className={`absolute inset-0 rounded-full border-2 border-purple-500/50 transition-all duration-500
        ${isHovered ? 'scale-125 opacity-0' : 'scale-100 opacity-100'}`} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: '50%',
              animation: `float-up 1.5s infinite ${i * 0.2}s`,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s'
            }}
          />
        ))}
      </div>

      {/* Arrow icon */}
      <ChevronUp 
        className={`relative w-6 h-6 text-white transition-transform duration-300 
          ${isHovered ? 'transform -translate-y-1' : ''}`}
      />

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(100%) translateX(-50%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100%) translateX(-50%);
            opacity: 0;
          }
        }
      `}</style>
    </button>
  );
};

export default HeaderNavArrow;