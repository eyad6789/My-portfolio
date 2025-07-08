import React, { useState, useEffect } from 'react';
import { User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutAI from '../assets/about/about-AI.jpeg';
import DataAnalysis from '../assets/about/about-dataAnalysis.jpeg';
import IoT from '../assets/about/about-IoT.jpeg';


const DominicPortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'AI Solutions',
      category: 'AI & Innovation',
      image: aboutAI,
      type: 'image',
      description: 'Brain Tumor Detection, Face Recognition Systems, Smart Agriculture'
    },
    {
      id: 2,
      title: 'Data Analytics',
      category: 'Data & Insights',
      image: DataAnalysis,
      type: 'image',
      description: 'SQL, Excel, Power BI, Python – turning raw data into powerful dashboards'
    },
    {
      id: 3,
      title: 'Tech Projects',
      category: 'IoT & Development',
      image: IoT,
      type: 'image',
      description: 'IoT with STM32, Web Development, QR Systems, and more'
    }
  ];

  const PortfolioSection = () => (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Main Content */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-left flex-col text-left mb-16 m-auto lg:ml-120">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
              <span className="block">Turning Data</span>
              <span className="block">Into</span>
              <span className="block">Actionable Insights</span>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </h2>
            
            <div className="max-w-7xl mx-auto mb-8">
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm Eyad Qasim Rahim, a Data Analyst, AI Developer, and Information Engineer based in Baghdad. With a strong foundation in problem-solving, project development, and AI solutions, I specialize in building real-world applications that make a measurable impact.
                From AI-driven medical tools to data dashboards and smart IoT projects, my work combines technical expertise with strategic thinking to help organizations and startups achieve their goals.
              </p>
            </div>
            <Link to='/projects'>
              <button className="inline-flex items-center gap-3 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 mr-auto">
                <span>See my works</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
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
                  {/* Background - Handle both images and gradients */}
                  {project.type === 'image' ? (
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  ) : (
                    <div 
                      className="w-full h-full"
                      style={{ background: project.image }}
                    />
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 bg-opacity-0 hover:bg-purple-900/30  group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-purple-400" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
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