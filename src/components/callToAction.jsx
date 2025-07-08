import React from 'react';
import { User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import myImage from '../assets/sticker.webp';


const CallToActionSection = () => {
    return (
        <div className="relative bg-zinc-950 text-white py-20 px-6 overflow-hidden min-h-60 flex items-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/90 via-purple-600/85 to-pink-600/80 opacity-50"></div>
            
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-contain bg-bottom bg-no-repeat"
                style={{
                    backgroundImage: `url(${myImage})`,
                }}
            ></div>
          <div className=" hidden md:block absolute bottom-0 left-0 w-full h-200 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none z-10 "></div>
            {/* Additional animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-fuchsia-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                    Let's Bring Your Tech <br />
                    Vision to Life
                </h2>
                
                <p className="text-red-100 text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md">
                    Ready to transform your idea into a data-powered solution? I specialize in building AI tools, smart systems, and data dashboards that deliver results.
                </p>
                <Link to="/contact">
                <button className="inline-flex items-center gap-3 px-8 py-4 text-purple-600 hover:text-purple-700 bg-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                    <span>Let's Work Together</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                </Link>
            </div>
        </div>
    )
}

export default CallToActionSection;