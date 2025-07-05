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
                            Award-Winning<br />
                            Design That<br />
                            Makes an<br />
                            Impact
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            I'm passionate about creating designs that make a difference. My work has been recognized for innovation in branding, UI/UX, and digital experiences. Each recognition reflects my commitment to crafting impactful and visually stunning designs.
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
                            year: '2024',
                            title: 'Awwwards - Site of the Day',
                            description: 'Recognized for outstanding UI/UX design and innovation, setting new standards in digital experience.',
                            category: 'Web Design'
                            },
                            {
                            year: '2024',
                            title: 'D&AD Awards - Branding Excellence',
                            description: 'Awarded for creating a compelling and cohesive brand identity that resonates with audiences.',
                            category: 'Branding'
                            },
                            {
                            year: '2023',
                            title: 'Red Dot Design Award - Best Visual Identity',
                            description: 'Honored for a bold and distinctive visual identity that captures the essence of the brand.',
                            category: 'Identity'
                            },
                            {
                            year: '2023',
                            title: 'CSS Design Awards - Best UI Innovation',
                            description: 'Celebrated for creating a seamless, engaging and visually stunning digital experience.',
                            category: 'UI/UX'
                            },
                            {
                            year: '2022',
                            title: 'Design Week Awards - Emerging Designer',
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