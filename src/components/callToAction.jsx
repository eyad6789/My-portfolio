import React  from 'react';
import { User, ArrowRight } from 'lucide-react';




const CallToActionSection = () => {

    
    return (
        <div className="relative bg-gradient-to-br from-fuchsia-600 via-fuchsia-700 to-purple-600 text-white py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-red-500 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
            <User className="w-16 h-16 text-white" />
          </div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Let's Bring Your Vision<br />
          to Life
        </h2>
        
        <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Ready to create something extraordinary? I'm here to help bring your brand to life with innovative design solutions that make a lasting impression.
        </p>
        
        <button className="group flex items-center space-x-2 bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mx-auto">
          <span>Let's work together</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
    )
}
export default CallToActionSection;
