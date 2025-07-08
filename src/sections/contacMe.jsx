import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  User, 
  MessageSquare, 
  CheckCircle,
  ExternalLink,
  Calendar,
  Globe,
  Award,
  Instagram,
  Briefcase
} from 'lucide-react';
import AnimatedNavHeader from '../components/header';
import Footer from '../components/footer';
import myImage from '../assets/myImage.jpg';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const serviceID = "service_lmsvm32";          // من EmailJS
  const templateID = "template_n3hy4lr";      // من EmailJS
  const userID = "LzpISmBEpnTBJBzV_";      // من EmailJS

  try {
    await emailjs.send(serviceID, templateID, formData, userID);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send message. Please try again.");
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+964 773 6285 961",
      href: "tel:+9647736285961",
      color: "text-green-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "eyadqaasim@gmail.com",
      href: "mailto:eyadqaasim@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Baghdad, Iraq",
      href: "https://maps.google.com/?q=Baghdad,Iraq",
      color: "text-red-400"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/eyad6789",
      href: "https://github.com/eyad6789",
      color: "text-purple-400"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/eyad6789",
      color: "hover:text-purple-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/eyad-qasim-2a96b624b/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:eyadqaasim@gmail.com",
      color: "hover:text-green-400"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "instagram",
      href: "https://www.instagram.com/eyad.qaasim/",
      color: "hover:text-fuchsia-400"
    }
    
  ];

  const achievements = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Startup Weekend Baghdad 2023",
      description: "Winner - Dalaley Real Estate App"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "CORTISSS Hackathon 2023",
      description: "Winner - Smart Mirror IoT Project"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "AI Brain Tumor Detection",
      description: "99.93% Accuracy Achievement"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Rwafed Organization",
      description: "Program Coordinator & Executive Team"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Eduru Club",
      description: "create a community for young people to learn and grow"
    }
  ];

  return (
    <>
        <AnimatedNavHeader/>
            <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to collaborate on innovative projects and discuss new opportunities. 
            Whether you're looking for a developer, have a project idea, or just want to connect, I'd love to hear from you!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800">
              <h2 className="text-3xl font-bold mb-8 text-white">Send Me a Message</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full pl-12 pr-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full pl-12 pr-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full pl-12 pr-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="6"
                    className="w-full pl-12 pr-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-green-600 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white hover:shadow-lg hover:shadow-purple-500/25'
                  } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Message Sent Successfully!
                    </span>
                  ) : isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info & Profile */}
          <div className="space-y-8">
            
            {/* Profile Card */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src={myImage} alt="" className='rounded-full' />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Eyad Qasim Raheem</h3>
                <p className="text-purple-400 font-medium">Information Engineer</p>
                <p className="text-gray-400 text-sm mt-1">Systems Engineer</p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800/50 transition-all group"
                  >
                    <div className={`${info.color} group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-zinc-800/50 rounded-xl hover:bg-zinc-700 transition-all ${social.color} hover:scale-110`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-6">Recent Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-purple-400 mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{achievement.title}</p>
                      <p className="text-gray-400 text-xs">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub CTA Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-zinc-900/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/20">
            <Github className="w-16 h-16 mx-auto mb-6 text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Check Out My Work
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Explore my projects, contributions, and coding journey on GitHub. 
              From AI solutions to web applications, see what I've been building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <a
                href="mailto:eyadqaasim@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Send Quick Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>

  );
};

export default ContactPage;