import React from 'react';
import { User, Code, Brain, Globe, Award, MapPin, Mail, Phone, Calendar, GraduationCap, Briefcase } from 'lucide-react';
import AnimatedNavHeader from '../components/header';
import Footer from '../components/footer';
const AboutMe = () => {
  const skills = [
    { name: "AI Development & Machine Learning", icon: Brain },
    { name: "Python Programming", icon: Code },
    { name: "Front-End Web Development", icon: Globe },
    { name: "STM32F4 Microcontroller", icon: Code },
    { name: "React & JavaScript", icon: Code },
    { name: "Visual Identity & Branding", icon: Award }
  ];

  const achievements = [
    {
      title: "Smart Mirror Project Winner",
      description: "Won 1st place among 9 teams in CORTISSS hackathon at Al-Nahrain University",
      year: "2023"
    },
    {
      title: "Brain Tumor Detection AI",
      description: "Achieved 99.93% accuracy in tumor diagnosis using deep learning and CNN",
      year: "2023"
    },
    {
      title: "Highest Ranking at Al-Nahrain",
      description: "Top performer on Kattis programming platform at university",
      year: "2024"
    },
    {
      title: "Startup Weekend Baghdad",
      description: "Developed Iraqi real estate app for property exchange",
      year: "2023"
    }
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "B1 Level" },
    { name: "German", level: "A1 Level" }
  ];

  return (
    <>
        <AnimatedNavHeader/>
            <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-zinc-950 to-zinc-950"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Profile */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-purple-900/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/20">
                <User className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm">Information Engineer</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold">
                  <span className="text-white">Eyad Qasim</span>
                  <br />
                  <span className="text-purple-400">Raheem</span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Passionate Information Engineer specializing in AI development, web technologies, 
                  and innovative problem-solving. Currently pursuing my degree at Al-Nahrain University 
                  with a focus on creating impactful technological solutions.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Baghdad, Iraq</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+964 773 6285 961</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>eyadqaasim@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span>Born 2001</span>
                </div>
              </div>
            </div>

            {/* Right Side - Education & Quick Stats */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-900/10 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300">Information Engineering - Systems Engineering</h4>
                    <p className="text-gray-400">Al-Nahrain University</p>
                    <p className="text-gray-400">2020 - 2025</p>
                    <p className="text-sm text-purple-300 mt-2">GPA: 93.67 (6th Grade)</p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-gradient-to-br from-purple-900/10 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Languages</h3>
                </div>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{lang.name}</span>
                      <span className="text-purple-300 text-sm">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate Information Engineer with a strong interest in programming, 
              particularly in problem-solving and artificial intelligence. I hold the highest 
              ranking at Al-Nahrain University on the Kattis platform, demonstrating my 
              commitment to excellence in programming challenges.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My entrepreneurial spirit drives me to build innovative projects from scratch. 
              I have participated in numerous hackathons and competitions, consistently 
              delivering outstanding results. My expertise spans web development, AI programming, 
              and IoT solutions.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I am also deeply involved in community building, having founded the Eduru Tech 
              Student Club and served as Program Coordinator at Rwafed Organization, where I 
              led initiatives to empower Iraqi communities through technology education.
            </p>
          </div>

          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-purple-900/10 rounded-lg border border-purple-500/20">
                      <IconComponent className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-br from-purple-900/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Key Achievements</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-purple-900/10 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 h-full transition-all duration-300 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="flex items-start space-x-3 mb-4">
                    <Award className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-purple-300 text-sm font-medium">{achievement.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Focus */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Current Focus</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-purple-900/10 to-transparent backdrop-blur-sm rounded-2xl border border-purple-500/20">
            <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
            <p className="text-gray-300">Developing cutting-edge AI solutions with focus on computer vision and deep learning applications.</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-purple-900/10 to-transparent backdrop-blur-sm rounded-2xl border border-purple-500/20">
            <Briefcase className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Entrepreneurship</h3>
            <p className="text-gray-300">Building innovative startups and leading tech initiatives to solve real-world problems.</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-purple-900/10 to-transparent backdrop-blur-sm rounded-2xl border border-purple-500/20">
            <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Full-Stack Development</h3>
            <p className="text-gray-300">Creating comprehensive web applications with modern technologies and best practices.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default AboutMe;