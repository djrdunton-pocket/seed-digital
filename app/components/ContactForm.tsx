'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const packages = [
  'Seed · £899',
  'Grow · £1,499',
  'Flourish · £2,499',
  'Bespoke build',
  'Not sure yet',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business_name: '',
    package: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('contact_submissions')
      .insert([formData]);

    if (error) {
      setStatus('error');
    } else {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'manual_event_SUBMIT', {
          event_category: 'contact',
          event_label: 'Contact Form Submission',
        });
      }
      setStatus('success');
      setFormData({ name: '', email: '', business_name: '', package: '', message: '' });
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-[#1a3a2a]/20 p-8 bg-white">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#1a3a2a]/50">Message received</span>
        </div>
        <h3 className="font-syne text-2xl font-bold text-[#1a3a2a] mb-3">Thank you.</h3>
        <p className="text-sm text-[#1a3a2a]/60 leading-relaxed">Your message has been received. Daniel will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs tracking-[0.15em] uppercase text-[#1a3a2a]/50 block mb-1.5">Your name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-[#1a3a2a]/30 bg-white px-4 py-3 text-sm text-[#1a3a2a] placeholder-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-xs tracking-[0.15em] uppercase text-[#1a3a2a]/50 block mb-1.5">Email address *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-[#1a3a2a]/30 bg-white px-4 py-3 text-sm text-[#1a3a2a] placeholder-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors"
            placeholder="hello@yourbusiness.com"
          />
        </div>
      </div>

      <div>
        <label className="text-xs tracking-[0.15em] uppercase text-[#1a3a2a]/50 block mb-1.5">Business name</label>
        <input
          type="text"
          name="business_name"
          value={formData.business_name}
          onChange={handleChange}
          className="w-full border border-[#1a3a2a]/30 bg-white px-4 py-3 text-sm text-[#1a3a2a] placeholder-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors"
          placeholder="Your Business Ltd"
        />
      </div>

      <div>
        <label className="text-xs tracking-[0.15em] uppercase text-[#1a3a2a]/50 block mb-1.5">What are you looking for?</label>
        <select
          name="package"
          value={formData.package}
          onChange={handleChange}
          className="w-full border border-[#1a3a2a]/30 bg-white px-4 py-3 text-sm text-[#1a3a2a] focus:outline-none focus:border-[#1a3a2a] transition-colors"
        >
          <option value="">Select a package</option>
          {packages.map((pkg) => (
            <option key={pkg} value={pkg}>{pkg}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs tracking-[0.15em] uppercase text-[#1a3a2a]/50 block mb-1.5">Tell us about your project *</label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full border border-[#1a3a2a]/30 bg-white px-4 py-3 text-sm text-[#1a3a2a] placeholder-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors resize-none"
          placeholder="Tell us about your business, what you need and your ideal timeline..."
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500">Something went wrong. Please try again or email hello@seed-digital.ai directly.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-[#1a3a2a] text-[#f5f0e8] px-8 py-4 text-sm tracking-wide hover:bg-[#1a3a2a]/90 transition-colors disabled:opacity-50 self-start"
      >
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}