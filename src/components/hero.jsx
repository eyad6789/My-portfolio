import React, { useState, useEffect } from 'react';
import { Play, Plus } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger loading animation
    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden mx-auto">
      {/* Main Forest Background */}
      <div 
        className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-1000 ease-out "
        style={{
          backgroundImage: `url("./src/assets/my-img.png")`,
          transform: `scale(${1 + scrollY * 0.0002})`,
        }}
      />
      {/* Atmospheric Overlay with Mouse Parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10 transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%)
          `
        }}
      />

      {/* Misty Forest Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-white/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-3 mx-auto">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
            
            {/* Left Side Content */}
            <div className="text-white">
              {/* Subtitle - Left */}
              <div 
                className={`
                  mb-6 transform transition-all duration-1500 ease-out
                  ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                `}
                style={{ transitionDelay: '0.3s' }}
              >
                <p className="text-lg md:text-xl font-light tracking-wide text-white/90 hover:text-white transition-colors duration-500">
                  Nelover garden Classical
                </p>
              </div>

              {/* Main Title - Left */}
              <div 
                className={`
                  mb-8 transform transition-all duration-1500 ease-out
                  ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
                `}
                style={{ transitionDelay: '0.6s' }}
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block hover:scale-105 transition-transform duration-700 cursor-default">
                    The definitive
                  </span>
                  <span className="block mt-2 bg-gradient-to-r from-purple-600 via-purple-300 to-purple-100 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-200 hover:to-pink-200 transition-all duration-700 cursor-default">
                    classic garden.
                  </span>
                </h1>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="text-white lg:text-right">
              {/* Description - Right */}
              <div 
                className={`
                  mb-8 transform transition-all duration-1500 ease-out
                  ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                `}
                style={{ transitionDelay: '0.4s' }}
              >
                <p className="text-lg md:text-xl font-light leading-relaxed text-white/80 hover:text-white transition-colors duration-500 max-w-md lg:ml-auto">
                  Discover the timeless beauty of our classical garden, where nature's artistry meets human creativity in perfect harmony.
                </p>
              </div>

              {/* Action Buttons - Right */}
              <div 
                className={`
                  flex flex-col sm:flex-row gap-6 lg:justify-end justify-center items-center transform transition-all duration-1500 ease-out
                  ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}
                `}
                style={{ transitionDelay: '0.9s' }}
              >
                {/* Explore Button */}
                {/* <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    Explore Garden
                  </span>
                </button> */}

                {/* Learn More Button */}
                <button className="group relative px-8 py-4 bg-transparent border-2 border-purple-400/30 rounded-full text-white font-semibold hover:bg-purple-600 hover:text-white-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    Contact Me
                    <Plus size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
        
        @keyframes scroll-line {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-scroll-line {
          animation: scroll-line 2s ease-in-out infinite;
        }
        
        /* Add a subtle breathing effect to the background */
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        /* Glowing text effect on hover */
        .glow-text:hover {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};
export default HeroSection;