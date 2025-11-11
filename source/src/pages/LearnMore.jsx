import React from 'react';
import links from '../data/links.json';

const LearnMore = () => {
  const pillars = [
    {
      title: 'Real Conversations',
      description:
        'Follow guided dialogues, cultural notes, and pronunciation tips crafted with native speakers so you can feel confident when you chat in Tigrinya.',
      emoji: '💬',
    },
    {
      title: 'Personal Coach',
      description:
        'Adaptive review sessions highlight the words you struggle with most. Mimhar keeps the learning curve gentle while your skills grow.',
      emoji: '🧠',
    },
    {
      title: 'Community Support',
      description:
        'We are building a welcoming community of learners and mentors. Expect live sessions, progress circles, and a safe space to practice.',
      emoji: '🤝',
    },
  ];

  const helpItems = [
    {
      title: 'Beta Testers',
      text:
        'Try upcoming lessons, spot rough edges, and share honest feedback so we can polish the experience before launch.',
    },
    {
      title: 'Cultural Contributors',
      text:
        'Share authentic phrases, stories, and everyday scenarios to help us keep Mimhar rooted in Eritrean and Ethiopian culture.',
    },
    {
      title: 'Supporters & Advocates',
      text:
        'Spread the word to families, schools, and diaspora groups who would love a playful way to keep Tigrinya alive.',
    },
  ];

  return (
    <section className="pt-24 md:pt-28 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            Why Mimhar matters
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-brown mb-6">Learn More about Mimhar</h1>
          <p className="text-brown-light text-lg md:text-xl">
            Mimhar is a joyful path to learning Tigrinya. We blend storytelling, smart practice, and a friendly camel guide to make every lesson memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-3xl p-8 shadow-xl border border-beige/60 text-center"
            >
              <div className="text-5xl mb-4" aria-hidden="true">{pillar.emoji}</div>
              <h2 className="text-xl font-bold text-brown mb-3">{pillar.title}</h2>
              <p className="text-brown-light">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-beige/60 mb-16">
          <h2 className="text-3xl font-bold text-brown mb-4 text-center">How you can help</h2>
          <p className="text-brown-light text-lg text-center mb-8">
            Mimhar grows faster with community energy. We are inviting passionate learners, educators, and culture bearers to build with us.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {helpItems.map((item) => (
              <div key={item.title} className="bg-cream rounded-2xl p-6 border border-beige/50 text-center">
                <h3 className="text-lg font-semibold text-brown mb-3">{item.title}</h3>
                <p className="text-brown-light text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brown mb-4">Join the journey</h2>
          <p className="text-brown-light text-lg mb-6">
            Ready to shape the future of Tigrinya learning? Drop us a line, share your story, or sign up for early access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={links.contact.email}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <span>Contact the Team</span>
            </a>
            <a
              href={links.external.betaRequest}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <span>Request Beta Access</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
