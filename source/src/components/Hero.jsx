import React from 'react';
import { Link } from 'react-router-dom';
import links from '../data/links.json';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-sand-light to-sunset/20 pt-24 sm:pt-28 pb-24 sm:pb-32">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left px-2">
            <div className="inline-block mb-6">
              <img 
                src="/images/icon.png" 
                alt="Mimhar Camel" 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl shadow-2xl"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brown mb-4 sm:mb-6 leading-tight">
              Learn Tigrinya
              <span className="block text-primary mt-2">The Fun Way</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-brown-light mb-8 max-w-2xl mx-auto lg:mx-0 px-2">
              Master Tigrinya with your friendly camel guide! 🐪
              <span className="block mt-2">Interactive lessons, gamified learning, and daily challenges.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href={links.external.betaRequest}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span>Join Beta</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-4-4m4 4l4-4" />
                </svg>
              </a>
              
              <Link 
                to={links.routes.learnMore} 
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-brown-light">Active Learners</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-emerald">50+</div>
                <div className="text-sm text-brown-light">Lessons</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-sunset">4.9★</div>
                <div className="text-sm text-brown-light">User Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Screenshots */}
          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              {/* Phone Frame */}
              <div className="relative">
                <img 
                  src="/images/screenshot1.png" 
                  alt="Mimhar App Screenshot" 
                  className="w-full rounded-3xl shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-300"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-4 animate-float">
                  <div className="text-4xl">🔥</div>
                  <div className="text-xs font-bold text-brown mt-1">7 Day Streak!</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float-delayed">
                  <div className="text-4xl">⚡</div>
                  <div className="text-xs font-bold text-brown mt-1">50 XP Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
