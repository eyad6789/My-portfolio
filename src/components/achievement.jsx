import React, { useState } from 'react';



const AchievementSection = () => {
    
    const [isLoaded] = useState(true);
    
    return (
        <div className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Services Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Design Solutions That<br />
            Elevate Your Brand
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            From strategy to execution, I provide tailored design services that help brands stand out and create meaningful connections. Whether you need a strong identity, a seamless digital experience, or creative direction, I've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: '01',
              title: 'Brand Identity & Strategy',
              description: 'From logo design to full brand systems, I create cohesive identities that reflect your values and resonate with your audience.'
            },
            {
              number: '02',
              title: 'UI/UX Design & Digital Experiences',
              description: 'I design intuitive, user-centered digital experiences that are both beautiful and functional, ensuring they to achieve your goals.'
            },
            {
              number: '03',
              title: 'Full Integration',
              description: 'With a strong design system, I help brands maintain consistency across all touchpoints, ensuring a seamless brand experience.'
            }
          ].map((service, index) => (
            <div
              key={service.number}
              className={`bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-all duration-500 transform hover:scale-105 ${
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