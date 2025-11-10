import React from 'react';

const Screenshots = () => {
  const screenshots = [
    {
      src: '/images/screenshot1.png',
      alt: 'Learn Alphabet',
      title: 'Interactive Learning',
      description: 'Master the Tigrinya alphabet with engaging exercises'
    },
    {
      src: '/images/screenshot2.png',
      alt: 'Practice Phrases',
      title: 'Real Conversations',
      description: 'Learn practical phrases for everyday situations'
    },
    {
      src: '/images/screenshot3.png',
      alt: 'Track Progress',
      title: 'Stay Motivated',
      description: 'Watch your progress grow with detailed stats'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-cream to-sand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brown mb-4">
            See Mimhar in Action
          </h2>
          <p className="text-xl text-brown-light max-w-2xl mx-auto">
            A beautiful, intuitive interface designed for effective learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-8 border-white transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-1">
                <img 
                  src={screenshot.src} 
                  alt={screenshot.alt}
                  className="w-full h-auto"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
