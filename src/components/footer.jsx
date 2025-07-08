import React from 'react';
import { User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Fixed import

import Logo from '../assets/Layer_1.png';

const Footer = () => {
  return (
    <footer className=" group relative bg-zinc-900/50 backdrop-blur-sm overflow-hidden border border-zinc-800  text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                <img src={Logo} className="w-6 h-6 object-cover " alt="" />
              </div>
              <span className="text-white font-medium text-lg">Eyad</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Eyad Qasim — Data Analyst | AI Developer | Tech Innovator
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate about transforming ideas into data-driven, AI-powered solutions.
            </p>
            <p className="text-gray-400 text-sm">
              © 2025 Eyad Qasim
            </p>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {/* <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</Link></li> */}
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</Link></li>
              {/* <li><Link to="/tutorial" className="text-gray-400 hover:text-white transition-colors duration-300">Tutorial</Link></li>
              <li><Link to="/documentation" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</Link></li> */}
              <li><a href="https://drive.google.com/file/d/15YVr5LPUgr8fTJs1WUwA0B1aGKpuSiMl/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">My CV</a></li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/eyad-qasim-2a96b624b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/eyad.qaasim/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a></li>
              <li><a href="https://github.com/eyad6789" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a></li>
              <li><a href="https://t.me/MyOpinionsLifeExperience" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Telegram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="text-center">
            <div className="text-8xl lg:text-9xl font-black text-zinc-800 leading-none select-none">
              EYAD
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;