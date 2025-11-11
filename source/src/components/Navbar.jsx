import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import links from '../data/links.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={links.routes.home} className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <img 
              src="/images/icon.png" 
              alt="Mimhar" 
              className="w-12 h-12 rounded-xl group-hover:scale-110 transition-transform"
            />
            <span className="text-2xl font-black text-brown">Mimhar</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to={links.routes.home} className="text-brown-light hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <a href={links.anchors.features} className="text-brown-light hover:text-primary font-medium transition-colors">
              Features
            </a>
            <Link to={links.routes.learnMore} className="text-brown-light hover:text-primary font-medium transition-colors">
              Learn More
            </Link>
            <a
              href={links.external.betaRequest}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Join Beta
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brown p-2"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-beige">
            <div className="flex flex-col gap-4">
              <Link
                to={links.routes.home}
                className="text-brown-light hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <a 
                href={links.anchors.features} 
                className="text-brown-light hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <Link 
                to={links.routes.learnMore} 
                className="text-brown-light hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Learn More
              </Link>
              <a 
                href={links.external.betaRequest} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white font-semibold px-6 py-3 rounded-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Beta
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
