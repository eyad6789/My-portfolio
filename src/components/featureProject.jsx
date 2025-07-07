import React, { useState } from 'react';
import { User, ArrowRight } from 'lucide-react';
import brainAI from '../assets/featureProjects/about-AI.jpeg';
import dataAnalysis from '../assets/featureProjects/data-analysis-featureProjects.jpg';
import QRCode from '../assets/featureProjects/QR-featureProjects.jpg';
import SmartMirror from '../assets/featureProjects/smart-mirror-featureProjects.jpg';






const FeaturedProjectsSection = () => {
//       const [isLoaded] = useState(true);
//     return (
//         <div className="bg-zinc-950 text-white py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
//           <p className="text-gray-400 text-lg max-w-2xl">
//             Explore my latest work across branding, UI/UX design, and digital experiences that have helped brands stand out.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {[
//             {
//               title: 'AI - Brain Tumor Detection',
//               category: 'Branding',
//               image: brainAI,
//               description: 'Deep learning model for X-ray analysis with 99.93% accuracy.'
//             },
//             {
//               title: 'Smart Mirror (IoT)',
//               category: 'Product Design',
//               image:  SmartMirror,
//               description: 'Award-winning smart mirror project with AI integration.'
//             },
//             {
//               title: 'Data Dashboards & Analysis',
//               category: 'Interior Design',
//               image:  dataAnalysis,
//               description: 'SQL, Excel, Power BI dashboards for sales, e-commerce, and more.'
//             },
//             {
//               title: 'QR Code System',
//               category: 'Fashion',
//               image: QRCode,
//               description: 'Custom QR code web app for conference verification.'
//             }
//           ].map((project, index) => (
//             <div
//               key={index}
//               className={`group cursor-pointer transition-all duration-700 ${
//                 isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//               }`}
//               style={{ animationDelay: `${index * 200}ms` }}
//             >
//               <div className="relative overflow-hidden rounded-2xl aspect-[3/3] mb-6 transform group-hover:scale-104 transition-transform duration-500">
//                 <div 
//                   className="w-full h-full bg-cover bg-center"
//                   style={{ background:`url(${project.image}) center center` }}
//                 >
//                   {/* Hover overlay */}
//                   {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
//                     <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
//                       <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
//                         <ArrowRight className="w-6 h-6 text-black" />
//                       </div>
//                     </div>
//                   </div> */}
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2 mb-2">
//                   <span className="text-purple-500 text-sm font-medium">{project.category}</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm">{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//     )
//  }
  const announcements = [
    {
      id: 1,
      title: "AI - Brain Tumor Detection",
      description: 'Deep learning model for X-ray analysis with 99.93% accuracy.',
      type: "PRESS RELEASE",
      size: "hero-square",
      image: brainAI,
    },
    {
      id: 2,
      title: "Smart Mirror (IoT)",
      date: "September 8, 2024",
      type: "PRESS RELEASE",
      size: "hero-rectangle",
      image:  SmartMirror,
      description: 'Award-winning smart mirror project with AI integration.'
    },
    {
      id: 3,
      title: "Data Dashboards & Analysis",
      date: "September 8, 2024",
      type: "UPDATES",
      size: "small-square",
      image:  dataAnalysis,
      description: 'SQL, Excel, Power BI dashboards for sales, e-commerce, and more.'
    },
    {
      id: 4,
      title: "QR Code Verification App",
      date: "September 8, 2024",
      type: "PRESS RELEASE",
      size: "small-square",
      image: QRCode,
      description: 'Custom QR code web app for conference verification.'
    },
    {
      id: 5,
      title: "Model E",
      description: "Electric performance meets luxury in perfect harmony",
      date: "September 8, 2024",
      type: "PRESS RELEASE",
      size: "",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop&crop=entropy&auto=format",
    }
  ];

  const getCardClasses = (size) => {
    const baseClasses = "group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl";
    
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
          <a href="">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {announcements.map((item) => (
            <div
              key={item.id}
              className={getCardClasses(item.size)}
            >
              {/* Background Image */}

              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>

              Content
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
              </a>
        
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;