import React, { useState } from 'react';
import { User, ArrowRight } from 'lucide-react';






const FeaturedProjectsSection = () => {
      const [isLoaded] = useState(true);
    return (
        <div className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore my latest work across branding, UI/UX design, and digital experiences that have helped brands stand out.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'AI - Brain Tumor Detection',
              category: 'Branding',
              image: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              description: 'Deep learning model for X-ray analysis with 99.93% accuracy.'
            },
            {
              title: 'Smart Mirror (IoT)',
              category: 'Product Design',
              image: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
              description: 'Award-winning smart mirror project with AI integration.'
            },
            {
              title: 'Data Dashboards & Analysis',
              category: 'Interior Design',
              image: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
              description: 'SQL, Excel, Power BI dashboards for sales, e-commerce, and more.'
            },
            {
              title: 'QR Code System',
              category: 'Fashion',
              image: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
              description: 'Custom QR code web app for conference verification.'
            }
          ].map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 transform group-hover:scale-105 transition-transform duration-500">
                <div 
                  className="w-full h-full flex items-center justify-center relative"
                  style={{ background: project.image }}
                >
                  {/* Project-specific visual elements */}
                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-16 bg-black bg-opacity-20 rounded-xl flex items-center justify-center">
                        <div className="w-16 h-8 bg-white rounded-lg opacity-80"></div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-black bg-opacity-30 rounded-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full opacity-90"></div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="absolute inset-0 p-8">
                      <div className="w-full h-full bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-12 bg-white rounded-lg mx-auto mb-4 opacity-80"></div>
                          <div className="w-20 h-2 bg-white rounded-full mx-auto opacity-60"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
                        <User className="w-20 h-20 text-white opacity-80" />
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-purple-500 text-sm font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    )
 }
export default FeaturedProjectsSection;