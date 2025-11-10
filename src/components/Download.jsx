import React from 'react';
import { Link } from 'react-router-dom';

const Download = () => {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🐪</div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Join the iOS TestFlight Beta
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Mimhar is currently in development and available <span className="font-semibold">only via iOS TestFlight</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              to="/beta" 
              className="group bg-white hover:bg-cream text-brown px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3l4 4-4 4-4-4 4-4m0 6l4 4-4 4-4-4 4-4" />
              </svg>
              <div className="text-left">
                <div className="text-lg font-bold">Request Invite</div>
                <div className="text-xs">Sign up for TestFlight</div>
              </div>
            </Link>

            <Link 
              to="/about" 
              className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl border border-white/20"
            >
              <div className="text-left">
                <div className="text-lg font-bold">Learn More</div>
                <div className="text-xs">About the app</div>
              </div>
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-8 justify-center text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No ads</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Early access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Help shape Mimhar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
