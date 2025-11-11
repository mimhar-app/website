import React from 'react';
import links from '../data/links.json';

const Footer = () => {
  return (
    <footer className="bg-brown text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/icon.png" alt="Mimhar" className="w-12 h-12 rounded-xl" />
              <span className="text-2xl font-bold">Mimhar</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Your friendly companion for learning Tigrinya. Master the language with interactive lessons, games, and daily practice.
            </p>
            <div className="flex gap-4">
              <a
                href={links.external.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452H16.9v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.362V9h3.4v1.561h.047c.474-.9 1.634-1.852 3.364-1.852 3.598 0 4.264 2.368 4.264 5.448v6.295zM5.337 7.433a1.973 1.973 0 110-3.946 1.973 1.973 0 010 3.946zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a href={links.external.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.264 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.061 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.264-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.061-2.633-.35-3.608-1.325-.975-.975-1.264-2.242-1.325-3.608C2.175 15.784 2.163 15.404 2.163 12s.012-3.584.07-4.85c.061-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.264 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.74.346 3.9.783 3.052 1.227 2.333 1.946 1.889 2.794.452 5.606.012 7.78 0 12c.012 4.22.452 6.394 1.889 9.206.444.848 1.163 1.567 2.011 2.011.84.437 1.875.653 3.152.711C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.312-.274 3.152-.711.848-.444 1.567-1.163 2.011-2.011 1.437-2.812 1.877-4.986 1.889-9.206-.012-4.22-.452-6.394-1.889-9.206-.444-.848-1.163-1.567-2.011-2.011-.84-.437-1.875-.653-3.152-.711C15.668.014 15.259 0 12 0z" />
                  <path d="M12 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0 10.162A4 4 0 118 12a4 4 0 014 4zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              <a href={links.external.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.214 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.829-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.416-1.68 1.318-3.809 2.104-6.102 2.104-.395 0-.779-.023-1.17-.067C2.29 21.29 4.992 22 7.88 22c9.053 0 13.998-7.496 13.998-13.985 0-.21-.006-.42-.017-.63a9.936 9.936 0 002.093-2.816z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href={links.anchors.features} className="hover:text-primary transition-colors">Features</a></li>
              <li><a href={links.anchors.download} className="hover:text-primary transition-colors">Download</a></li>
              <li><a href={links.routes.learnMore} className="hover:text-primary transition-colors">Learn More</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href={links.contact.email} className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href={links.external.betaRequest} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Request Invite</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2025 Mimhar. Made with ❤️ for Tigrinya learners everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
