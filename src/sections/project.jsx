import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Award, Users, Code, Database, Brain, Smartphone, Globe, Zap, Eye, BarChart3 } from 'lucide-react';
import AnimatedNavHeader from '../components/header';
import Footer from '../components/footer';


const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Dalaley - Real Estate App",
      description: "An innovative Iraqi real estate application for property exchange, developed during Startup Weekend Baghdad 2023. Features complete app and website design with modern UI/UX.",
      category: "web",
      date: "2023-07",
      tech: ["React", "React Native", "Node.js", "MongoDB"],
      github: "https://github.com/eyad6789/Dalaley-Iraqi-Real-Estate-Platform",
      // demo: "https://dalaley-demo.vercel.app",
      image: "/api/placeholder/400/250",
      icon: <Smartphone className="w-6 h-6" />,
      achievement: "Startup Weekend Baghdad Winner",
      team: "Solo Developer"
    },
    {
      id: 2,
      title: "Smart Mirror IoT System",
      description: "Award-winning IoT project developed for sustainable societies. Integrated with various APIs and sensors to create an intelligent mirror interface.",
      category: "iot",
      date: "2023-10",
      tech: ["STM32F4", "Python", "IoT", "APIs"],
      github: "https://github.com/eyadqasim/smart-mirror-iot",
      demo: "https://smart-mirror-demo.vercel.app",
      image: "/api/placeholder/400/250",
      icon: <Zap className="w-6 h-6" />,
      achievement: "CORTISSS Hackathon Winner",
      team: "3 Members"
    },
    {
      id: 3,
      title: "Brain Tumor Detection AI",
      description: "Deep learning system using CNN to analyze X-ray images for brain tumor detection. Achieved 99.93% accuracy in diagnosing different tumor types.",
      category: "ai",
      date: "2023-08",
      tech: ["Python", "TensorFlow", "CNN", "Deep Learning"],
      github: "https://github.com/eyad6789/Brain-Tumor-Detection",
      demo: "https://brain-tumor-ai.vercel.app",
      image: "/api/placeholder/400/250",
      icon: <Brain className="w-6 h-6" />,
      achievement: "99.93% Accuracy",
      team: "AI Team"
    },
    {
      id: 4,
      title: "QR Code Conference System",
      description: "Web application for generating and verifying conference invitations using QR codes. Includes real-time scanning and authentication features.",
      category: "web",
      date: "2025-02",
      tech: ["Python", "JavaScript", "QR API", "Web"],
      github: "https://github.com/eyad6789/QR-Code-Conference-Check-in-System",
      demo: "https://qr-conference.vercel.app",
      image: "/api/placeholder/400/250",
      icon: <Code className="w-6 h-6" />,
      achievement: "Conference Integration",
      team: "Solo Developer"
    },
    {
      id: 5,
      title: "MMM-FaceRecognition Module",
      description: "Real-time face recognition system integrated with ChatGPT API and Amazon Polly API. Built as a MagicMirror module with voice interaction.",
      category: "ai",
      date: "2025-02",
      tech: ["JavaScript", "ChatGPT API", "Amazon Polly", "Face Recognition"],
      github: "https://github.com/eyad6789/MMM-FaceRecognition",
      demo: "https://face-recognition-demo.vercel.app",
      image: "/api/placeholder/400/250",
      icon: <Eye className="w-6 h-6" />,
      achievement: "API Integration",
      team: "2 Members"
    },
    {
      id: 6,
      title: "Progress In Peace Website",
      description: "Frontend website development for Progress In Peace organization with modern design and responsive layout.",
      category: "web",
      date: "2024-08",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/eyad6789/Progress-In-peace",
      demo: "https://progressinpeace.org",
      image: "/api/placeholder/400/250",
      icon: <Globe className="w-6 h-6" />,
      achievement: "Non-Profit Impact",
      team: "Frontend Developer"
    },
    {
      id: 7,
      title: "E-Commerce Data Analysis",
      description: "Comprehensive data analysis project using SQL to extract insights from e-commerce database. Includes complex queries and performance optimization.",
      category: "data",
      date: "2025-06",
      tech: ["SQL", "Python", "Pandas", "Data Analysis"],
      github: "https://github.com/eyadqasim/ecommerce-data-analysis",
      demo: "https://ecommerce-analysis.vercel.app",
      image: "/api/placeholder/400/250",
      icon: <Database className="w-6 h-6" />,
      achievement: "Data Insights",
      team: "Data Analyst"
    },
    {
      id: 8,
      title: "Bike Sales Dashboard",
      description: "Interactive dashboard created in Excel and Power BI for bike sales analysis. Features dynamic charts and KPI tracking.",
      category: "data",
      date: "2025-06",
      tech: ["Excel", "Power BI", "Data Visualization", "KPIs"],
      github: "https://github.com/eyadqasim/bike-sales-dashboard",
      demo: "https://bike-sales-dashboard.vercel.app",
      image: "/api/placeholder/400/250",
      icon: <BarChart3 className="w-6 h-6" />,
      achievement: "Business Intelligence",
      team: "Solo Analyst"
    },
    {
      id: 9,
      title: "QR Code Conference System",
      description: "Web application for generating and verifying conference invitations using QR codes. Includes real-time scanning and authentication features.",
      category: "web",
      date: "2025-02",
      tech: ["Python", "JavaScript", "QR API", "Web"],
      github: "https://github.com/eyad6789/SnowBird-Travel-and-Tourism",
      demo: "https://qr-conference.vercel.app",
      image: "/api/placeholder/400/250",
      icon: <Code className="w-6 h-6" />,
      achievement: "Conference Integration",
      team: "Solo Developer"
    },
    {
      id: 10,
      title: "Kamaran Alostora Group of Companies",
      description: "Web application for generating and verifying conference invitations using QR codes. Includes real-time scanning and authentication features.",
      category: "web",
      date: "2025-02",
      tech: ["Python", "JavaScript", "QR API", "Web"],
      github: "https://github.com/eyad6789/Kamaran-Alostora-Group-of-Companies",
      image: "/api/placeholder/400/250",
      icon: <Code className="w-6 h-6" />,
      achievement: "Conference Integration",
      team: "Solo Developer"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'ai', label: 'AI & Machine Learning', count: projects.filter(p => p.category === 'ai').length },
    { id: 'iot', label: 'IoT Systems', count: projects.filter(p => p.category === 'iot').length },
    { id: 'data', label: 'Data Analysis', count: projects.filter(p => p.category === 'data').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
    <AnimatedNavHeader />
     <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
              My Projects
            </h1>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my journey through innovative projects spanning AI, web development, IoT, and data analysis. 
            Each project represents a step forward in my continuous learning adventure.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-900/20 to-zinc-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-3 bg-purple-500/20 rounded-xl backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-3 py-1 bg-zinc-800/80 backdrop-blur-sm rounded-full text-xs font-medium">
                      {project.date}
                    </span>
                  </div>
                  {project.achievement && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-xs">
                      <Award className="w-3 h-3" />
                      {project.achievement}
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zinc-800 text-xs rounded-md text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Team Info */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    {project.team}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-800 hover:bg-purple-700 rounded-lg transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-zinc-900/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/20">
            <Github className="w-16 h-16 mx-auto mb-6 text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Explore More on GitHub
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Discover additional projects, contributions, and code samples on my GitHub profile.
            </p>
            <a
              href="https://github.com/eyad6789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              Visit My GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
   
  );
};

export default ProjectsPage;