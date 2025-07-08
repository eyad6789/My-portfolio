import React, { useState } from 'react';



const AchievementSection = () => {
    
    const [isLoaded] = useState(true);
    
    return (
        <div className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Services Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
           Practical Tech Solutions <br />
            To Drive Innovation
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Whether you're looking to harness AI, leverage data, or build smart systems, I provide hands-on technical solutions that create real value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: '01',
              title: 'Data Analysis & Dashboards',
              description: 'Turn raw data into clear, interactive reports and dashboards using Python, Power BI, SQL, and Excel.'
            },
            {
              number: '02',
              title: 'AI Development',
              description: 'Build machine learning and deep learning models for healthcare, smart cities, and other real-world applications.'
            },
            {
              number: '03',
              title: 'Smart Systems & IoT',
              description: 'Design and develop intelligent systems like Smart Mirrors, QR platforms, and IoT solutions.'
            }
          ].map((service, index) => (
            <div
              key={service.number}
              className={`bg-gradient-to-br from-purple-900/10 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-purple-500 text-4xl font-bold mb-6">{service.number}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}
    
export default AchievementSection;