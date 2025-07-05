import React, { useState, useEffect } from 'react';
import { User,  ArrowRight } from 'lucide-react';

const DominicPortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Brand Identity',
      category: 'Design',
      image: 'url(../assets/my-img.png)',
      description: 'Modern brand identity design'
    },
    {
      id: 2,
      title: 'Interior Design',
      category: 'UI/UX',
      image: 'linear-gradient(135deg, #ff9ff3 0%, #feca57 100%)',
      description: 'Contemporary interior concept'
    },
    {
      id: 3,
      title: 'Product Design',
      category: 'Product',
      image: 'linear-gradient(135deg, #54a0ff 0%, #2f3542 100%)',
      description: 'Minimal product photography'
    }
  ];

  const PortfolioSection = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation Tabs */}


      {/* Main Content */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-left flex-col text-left mb-16 ml-120">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="block">Crafting Meaningful</span>
              <span className="block">Brands & Intuitive</span>
              <span className="block">Digital Experiences That</span>
              <span className="block">Stand Out</span>
            </h2>
            
            <div className="max-w-7xl mx-auto mb-8 ">
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm Dominic, a London-based Brand and UI/UX Designer passionate about crafting visually compelling identities and seamless digital experiences. With a strategic approach and a keen eye for detail, I help businesses stand out and connect with their audience. Let's create something memorable together.
              </p>
            </div>

            <button className="group flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mr-auto">
              <span>See my works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Projects Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-700 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-4 transform group-hover:scale-105 transition-transform duration-500">
                  <div 
                    className="w-full h-full flex items-center justify-center relative"
                    style={{ background: project.image }}
                  >
                    {/* Project-specific content */}
                    {project.id === 1 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-lg transform rotate-45"></div>
                        </div>
                      </div>
                    )}
                    
                    {project.id === 2 && (
                      <div className="absolute inset-0 p-8">
                        <div className="w-full h-full bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-4 opacity-80"></div>
                            <div className="w-16 h-2 bg-white rounded-full mx-auto opacity-60"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {project.id === 3 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-16 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                          <div className="grid grid-cols-2 gap-1">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <ArrowRight className="w-5 h-5 text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="pb-12"></div>
    </div>
  );
  return (
    <div>
      <PortfolioSection />
    </div>
  );
};

export default DominicPortfolio;