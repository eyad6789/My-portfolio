import React, { useState } from 'react';



const StatisticsSection = () => {
    
    const [isLoaded] = useState(true);
    
    return (
        
    <div className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              What Defines <br /> My Work
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every project I work on is aimed at delivering tangible results. From increased brand recognition to improved user engagement, here's a look at the numbers that define success.
            </p>
          </div>

          {/* Right Content - Statistics */}
          <div className="space-y-8">
            {[
              {
                number: '3+',
                label: 'Years experience in Data & AI Projects',
                color: 'text-purple-500'
              },
              {
                number: '10+',
                label: 'Technical Projects Completed',
                color: 'text-purple-500'
              },
              {
                number: '100+',
                label: 'Hours of AI & Data Training',
                color: 'text-purple-500'
              }
            ].map((stat, index) => (
              <div
                key={index}
                className={`flex items-center space-x-6 transition-all duration-700 ${
                  isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`text-5xl lg:text-6xl font-bold ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    )
  }
export default StatisticsSection