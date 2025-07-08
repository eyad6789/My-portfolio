import React from 'react';
import { ArrowRight } from 'lucide-react';
import brainAI from '../assets/featureProjects/about-AI.jpeg';
import dataAnalysis from '../assets/featureProjects/data-analysis-featureProjects.jpg';
import QRCode from '../assets/featureProjects/QR-featureProjects.jpg';
import SmartMirror from '../assets/featureProjects/smart-mirror-featureProjects.jpg';
import lungCancer from '../assets/featureProjects/lung-cancer.jpg';


const FeaturedProjectsSection = () => {
  const announcements = [
    {
      id: 1,
      title: "AI - Brain Tumor Detection",
      description: 'Deep learning model for X-ray analysis with 99.93% accuracy.',
      type: "PRESS RELEASE",
      size: "hero-square",
      image: brainAI,
      githubUrl: "https://github.com/eyad6789/Brain-Tumor-Detection", // Add your GitHub URL
    },
    {
      id: 2,
      title: "Smart Mirror (IoT)",
      date: "September 8, 2024",
      type: "PRESS RELEASE",
      size: "hero-rectangle",
      image: SmartMirror,
      description: 'Award-winning smart mirror project with AI integration.',
      githubUrl: "https://github.com/eyad6789/MMM-FaceRecognition", // Add your GitHub URL
    },
    {
      id: 3,
      title: "Data Dashboards & Analysis",
      date: "September 8, 2024",
      type: "UPDATES",
      size: "small-square",
      image: dataAnalysis,
      description: 'SQL, Excel, Power BI dashboards for sales, e-commerce, and more.',
      githubUrl: "https://github.com/yourusername/data-dashboards", // Add your GitHub URL
    },
    {
      id: 4,
      title: "QR Code Verification App",
      date: "September 8, 2024",
      type: "PRESS RELEASE",
      size: "small-square",
      image: QRCode,
      description: 'Custom QR code web app for conference verification.',
      githubUrl: "https://github.com/eyad6789/QR-Code-Conference-Check-in-System", // Add your GitHub URL
    },
    {
      id: 5,
      title: "Lung Cancer Prediction App",
      description: "Predict lung cancer using machine learning by Using random forest algorithm.",
      date: "September 8, 2024",
      type: "PRESS RELEASE",
      size: "",
      image:lungCancer,
      githubUrl: "https://github.com/eyad6789/Lung-Cancer-Prediction-Web-App", // Add your GitHub URL
    }
  ];

  const getCardClasses = (size) => {
    const baseClasses = "group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20";
    
    switch (size) {
      case 'hero-square':
        return `${baseClasses} col-span-2 row-span-2 aspect-square`;
      case 'hero-rectangle':
        return `${baseClasses} col-span-1 row-span-1 aspect-[2/2]`;
      case 'small-square':
        return `${baseClasses} col-span-1 row-span-1 aspect-square`;
      default:
        return `${baseClasses} col-span-1 row-span-1 aspect-square`;
    }
  };

  // Function to handle card click
  const handleCardClick = (githubUrl) => {
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-950 p-8">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore my latest work across branding, UI/UX design, and digital experiences that have helped brands stand out.
          </p>
        </div>
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ">
          {announcements.map((item) => (
            <div
              key={item.id}
              className={getCardClasses(item.size)}
              onClick={() => handleCardClick(item.githubUrl)}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                {/* Title, Description and Date */}
                <div className="mt-auto z-10">
                  <h3 className={`font-bold mb-4 leading-tight ${
                    item.size === 'hero-square' ? 'text-3xl' : 
                    item.size === 'hero-rectangle' ? 'text-2xl' : 
                    'text-lg'
                  }`}>
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm opacity-90 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <p className="text-xs opacity-80 mb-4 font-medium">
                    {item.date}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-10 h-10 text-purple-500 bg-white rounded-full p-2 shadow-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;