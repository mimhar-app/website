import React, { useState } from 'react';

const Beta = () => {
  const [form, setForm] = useState({ name: '', email: '', platform: 'ios', consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.consent) {
      setError('Please complete all fields correctly and agree to be contacted.');
      return;
    }
    try {
      const entries = JSON.parse(localStorage.getItem('mimhar_beta_signups') || '[]');
      entries.push({ ...form, ts: Date.now() });
      localStorage.setItem('mimhar_beta_signups', JSON.stringify(entries));
      setSubmitted(true);
    } catch (_) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="pt-24 md:pt-28 pb-20 bg-cream min-h-screen">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-4xl md:text-5xl font-black text-brown mb-4">Thanks for signing up!</h1>
          <p className="text-brown-light text-lg mb-8">We'll send you a TestFlight invitation by email soon.</p>
          <a href="/" className="btn-secondary inline-flex items-center justify-center">Back to Home</a>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 md:pt-28 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-brown mb-4">Join the iOS TestFlight Beta</h1>
          <p className="text-brown-light text-lg">Mimhar is currently in development and is available <span className="font-semibold">only via iOS TestFlight</span>. Enter your details to request an invite.</p>
        </div>

        <form onSubmit={onSubmit} className="max-w-xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-beige/60">
          {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}

          <div className="mb-5">
            <label className="block text-brown font-semibold mb-2">Name</label>
            <input name="name" value={form.name} onChange={onChange} className="w-full rounded-xl border border-beige px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
          </div>

          <div className="mb-5">
            <label className="block text-brown font-semibold mb-2">Email</label>
            <input name="email" type="email" value={form.email} onChange={onChange} className="w-full rounded-xl border border-beige px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="name@example.com" />
          </div>

          <div className="mb-6">
            <label className="block text-brown font-semibold mb-2">Platform</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="platform" value="ios" checked={form.platform==='ios'} onChange={onChange} />
                <span>iOS (TestFlight)</span>
              </label>
              <label className="flex items-center gap-2 opacity-50">
                <input type="radio" name="platform" value="android" checked={form.platform==='android'} onChange={onChange} disabled />
                <span>Android (coming later)</span>
              </label>
            </div>
          </div>

          <label className="flex items-start gap-3 mb-6">
            <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} />
            <span className="text-brown-light">I agree to be contacted about the beta via email.</span>
          </label>

          <div className="flex flex-col sm:flex-row gap-3">
            <button type="submit" className="btn-primary w-full sm:w-auto justify-center">Request Invite</button>
            <a href="#" className="btn-secondary w-full sm:w-auto text-center">Open TestFlight</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Beta;
