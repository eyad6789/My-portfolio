import React from 'react';
import { User,  ArrowRight } from 'lucide-react';
import Logo from '../assets/Layer_1.png';
  const Footer = () => {
    return (
            <footer className="bg-zinc-900 text-white pt-16 pb-8 px-6">
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
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Tutorial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Become a partner</a></li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Facebook</a></li>
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

    )
}
export default Footer