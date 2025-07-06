import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';




const CetifiactionSection = () => {

        const [isLoaded] = useState(true);
    return (
        <div className="bg-zinc-950 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Certified. Recognized. <br />
                            Committed to <br /> 
                            Excellence.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            My work and skills have been recognized through awards, certifications, and real-world projects in AI, data analysis, and tech innovation.
                        </p>
                        <button className="group flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <span>See my works</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Right Content - Awards List */}
                    <div className="space-y-8">
                        {[
                            {
                            year: '2025',
                            title: 'Data Analysis - Cisco Academy',
                            description: 'Foundational Python programming for data tasks and automation.',
                            category: 'Web Design'
                            },
                            {
                            year: '2024',
                            title: 'AI & IoT Training - Offenburg University, Germany',
                            description: 'Hands-on experience building secure, sustainable IoT systems.',
                            category: 'Branding'
                            },
                            {
                            year: '2024',
                            title: 'Riyada Entrepreneurship Program - Al Naharun University',
                            description: 'Certified for project development and feasibility studies.',
                            category: 'Identity'
                            },
                            {
                            year: '2023',
                            title: 'AI Hackathon - Computiq, Iraq',
                            description: 'Developed AI model for Brain Tumor Detection (99.93% accuracy).',
                            category: 'UI/UX'
                            },
                            {
                            year: '2023',
                            title: 'Machine Learning - AI Dojo - Makers',
                            description: 'Recognized as a rising talent in brand and identity design, pushing creative boundaries.',
                            category: 'Recognition'
                            }
                        ].map((award, index) => (
                            <div
                            key={index}
                            className={`border-l-4 border-purple-500 pl-6 hover:border-purple-400 transition-all duration-300 ${
                                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                            }`}
                            style={{ animationDelay: `${index * 150}ms` }}
                            >
                            <div className="flex items-center space-x-3 mb-2">
                                <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                {award.year}
                                </span>
                                <span className="text-gray-500 text-sm">{award.category}</span>
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">{award.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{award.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CetifiactionSection;