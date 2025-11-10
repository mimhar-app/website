import React from 'react';

const About = () => {
  const items = [
    { emoji: '🐪', title: 'Friendly Guide', text: 'Learn with a playful camel companion and a warm desert-inspired design.' },
    { emoji: '🎯', title: 'Practical Learning', text: 'Short, focused lessons that build real conversational skills in Tigrinya.' },
    { emoji: '🧠', title: 'Smart Practice', text: 'Spaced repetition and quick modes that help you remember faster.' },
  ];

  return (
    <section className="pt-24 md:pt-28 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-brown mb-4">About Mimhar</h1>
          <p className="text-brown-light text-lg md:text-xl">Mimhar helps you learn Tigrinya with interactive lessons, a beautiful interface, and a focus on everyday language.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((i, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border border-beige/60 text-center">
              <div className="text-5xl mb-4">{i.emoji}</div>
              <div className="text-xl font-bold text-brown mb-2">{i.title}</div>
              <p className="text-brown-light">{i.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-14">
          <p className="text-brown-light">Mimhar is currently in active development. The app is <span className="font-semibold">available only via iOS TestFlight</span> while we polish the experience and add more content.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
