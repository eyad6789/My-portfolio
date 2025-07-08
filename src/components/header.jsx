import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AnimatedNavHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className='flex items-center justify-center'>
      {/* Animated background elements */}
      
      {/* Navigation Header */}
      <header className={`fixed top-0 w-l lg:min-w-4xl mx-auto z-50 transition-all duration-700 ease-out  ${
        isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-6'
      }`}>
        <nav className={`mx-3 sm:mx-4 md:mx-6 lg:mx-12 transition-all duration-700 ease-out bg-purple-900/20 backdrop-blur-sm ${
          isScrolled 
            ? 'bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 ' 
            : 'bg-purple-900/10 backdrop-blur-sm border border-purple-500/10 '
        } rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl hover:bg-purple-500/25`}>
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 md:py-4">
            
            {/* Logo */}
            <Link to="/" className="flex items-center group cursor-pointer">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br rounded-xl md:rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                <svg width="498" height="497" viewBox="0 0 498 497" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_176_11)">
                  <path d="M289.82 18.67L293.98 23.83C315.91 51.01 312.53 90.64 286.31 113.71L127.93 253.06C126.43 254.38 124.15 254.23 122.84 252.73L119.22 248.59C95.48 221.46 98.27 180.22 125.44 156.53L284.1 18.16C285.8 16.67 288.4 16.9 289.82 18.66V18.67Z" fill="#AD46FF"/>
                  <path d="M0.0200058 266.51C-0.339994 263.05 4.47001 261.81 5.82001 265.02C34.14 332.3 122.87 459.15 246.72 424.04C396.86 381.48 438.8 173.62 442.88 151.36C443.1 150.17 442.47 148.99 441.36 148.52C439.09 147.55 435.3 146.42 433.23 148.43L240.99 318.18C225.83 331.43 202.7 329.43 190.03 313.79L170.4 289.56C168.82 287.61 169.06 284.77 170.94 283.11L490.58 0.650012C492.14 -0.729988 494.62 0.210012 494.87 2.28001C498.06 28.6 509.35 158.87 444.22 311.44C417.79 373.36 339.22 481.44 246.72 494.51C109.62 513.89 30.75 411.49 15.11 388.81C13.23 386.08 12.06 382.93 11.72 379.63L0.0200058 266.51Z" fill="#AD46FF"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_176_11">
                  <rect width="497.66" height="496.94" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl font-bold text-white hidden sm:block lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                Eyad
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex space-x-6 xl:space-x-12">
              {navItems.map((item, index) => (
                <li key={item.name} className="relative">
                  <Link
                    to={item.path}
                    className={`text-white font-medium uppercase text-sm xl:text-base tracking-wide transition-all duration-300 hover:text-indigo-200 relative group ${
                      isActivePath(item.path) ? 'text-indigo-200' : ''
                    }`}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.name}
                    <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transform origin-left transition-all duration-300 ${
                      hoveredItem === index || isActivePath(item.path) ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Contact Button */}
            <Link 
              to="/contact" 
              className="hidden md:block relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-medium uppercase text-xs md:text-sm px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Contact
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>

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
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`block text-white font-medium uppercase text-sm tracking-wide py-2 px-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-indigo-200 ${
                        isActivePath(item.path) ? 'bg-white/10 text-indigo-200' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact"
                className="block w-full mt-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-medium uppercase text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
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