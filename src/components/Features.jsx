import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Interactive Lessons',
      description: 'Learn with engaging, bite-sized lessons designed for real-world conversations.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: '🔥',
      title: 'Daily Streak',
      description: 'Build consistency with daily goals and keep your learning streak alive!',
      color: 'bg-sunset/10 text-orange-600'
    },
    {
      icon: '📝',
      title: 'Practice Modes',
      description: 'Quick Fire, Time Trial, and Alphabet practice to master every aspect.',
      color: 'bg-emerald/10 text-emerald'
    },
    {
      icon: '🏆',
      title: 'Achievements',
      description: 'Earn badges and rewards as you progress through your learning journey.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: '📊',
      title: 'Track Progress',
      description: 'Visualize your improvement with detailed stats and performance charts.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: '🗣️',
      title: 'Learn Ge\'ez Script',
      description: 'Master the beautiful Tigrinya alphabet with interactive character practice.',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brown mb-4">
            Why Choose Mimhar?
          </h2>
          <p className="text-xl text-brown-light max-w-2xl mx-auto">
            Everything you need to master Tigrinya, all in one beautiful app
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-cream hover:bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-primary/20"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-brown mb-3">
                {feature.title}
              </h3>
              <p className="text-brown-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
