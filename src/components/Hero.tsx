import React from 'react';
import { ArrowDown, Linkedin, Mail, Download, Github } from 'lucide-react';

const Hero: React.FC = () => {
  // Scroll to about section smoothly
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Download resume PDF
  const downloadResume = () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume PDF in the public folder
    link.download = 'Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // Hero section with gradient background
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile avatar */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold text-slate-800">JS</span>
              </div>
            </div>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Full Stack
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 block">
              Software Engineer
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-slide-up-delay">
            Crafting robust, scalable solutions with modern technologies.<br />
            Passionate about clean code, innovative design, and delivering exceptional user experiences.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up-delay-2">
            {/* View work button */}
            <button 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>View My Work</span>
              <ArrowDown className="h-5 w-5" />
            </button>
            
            {/* Download resume button */}
            <button 
              onClick={downloadResume}
              className="border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300"
            >
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center space-x-6 animate-fade-in-delay">
            <a href="https://github.com/gripexdev" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/othmane-sadiky/" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-white/70 hover:text-white transition-colors">
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;