import React, { useState } from 'react';
import { User,  ArrowRight } from 'lucide-react';


const TestimonialsSection = () => {
  const [isLoaded] = useState(true);
    return (
            <div className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Trusted by Brands,<br />
            Loved by Clients
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Great design goes beyond aesthetics — it creates impact. Hear from clients who experienced the power of thoughtful branding and design firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Julia Martínez',
              role: 'Founder & CEO',
              company: 'Studio Artisan',
              rating: 5,
              testimonial: 'Dominic transformed our brand identity completely. The new design reflects our values and resonates with our audience.',
              avatar: 'JM'
            },
            {
              name: 'David Miller',
              role: 'Operations Manager',
              company: 'Miller Industries',
              rating: 5,
              testimonial: 'From concept to execution, Dominic delivered exactly what we needed. Professional, creative, and timely.',
              avatar: 'DM'
            },
            {
              name: 'Sarah Johnson',
              role: 'Director of Sales',
              company: 'Johnson & Co.',
              rating: 5,
              testimonial: 'Our website is now sleek and intuitive. Dominics design expertise is clearly visible in every element.',
              avatar: 'SJ'
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className={`bg-zinc-900 rounded-2xl p-6 hover:bg-zinc-800 transition-all duration-500 transform hover:scale-105 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-4 h-4 text-purple-500">
                    ⭐
                  </div>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.testimonial}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-purple-500 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    )
}
export default TestimonialsSection;


