import React, { useState, useEffect } from 'react';

const AnimatedNavHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Services', 'Projects', 'About'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='flex items-center justify-center'>
      {/* Animated background elements */}
      
      {/* Navigation Header */}
      <header className={`fixed top-0 w-4xl m-auto z-50 transition-all duration-700 ease-out ${
        isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-6'
      }`}>
        <nav className={`mx-3 sm:mx-4 md:mx-6 lg:mx-12 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'bg-white/20 backdrop-blur-lg border border-white/20' 
            : 'bg-white/10 backdrop-blur-md border border-white/10'
        } rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl hover:bg-white/25`}>
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 md:py-4">
            
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl md:rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl font-bold text-white hidden sm:block lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                Brand
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex space-x-6 xl:space-x-12">
              {navItems.map((item, index) => (
                <li key={item} className="relative">
                  <a
                    href="#"
                    className="text-white font-medium uppercase text-sm xl:text-base tracking-wide transition-all duration-300 hover:text-indigo-200 relative group"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item}
                    <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 to-orange-400 transform origin-left transition-all duration-300 ${
                      hoveredItem === index ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Contact Button */}
            <button className="hidden md:block relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-medium uppercase text-xs md:text-sm px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-indigo-900">
                Contact
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-white hover:text-indigo-200 transition-colors duration-300 hover:bg-white/10 rounded-xl"
              onClick={toggleMobileMenu}
            >
              <svg className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-3 sm:px-4 md:px-6 pb-4 border-t border-white/20">
              <ul className="space-y-3 mt-4">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block text-white font-medium uppercase text-sm tracking-wide py-2 px-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-indigo-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <button 
                className="w-full mt-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-medium uppercase text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </button>
            </div>
          </div>
        </nav>
      </header>


      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-800 {
          animation-delay: 0.8s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-1200 {
          animation-delay: 1.2s;
        }
        
        .delay-1400 {
          animation-delay: 1.4s;
        }
      `}</style>
    </div>
  );
};

export default AnimatedNavHeader;