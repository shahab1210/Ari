'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  inquiryType: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  inquiryType: '',
  message: '',
};

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Handle escape key press and lock body scroll when drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated 1.5s delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);

    // After 3s, reset form, isSubmitted false, and call onClose()
    setTimeout(() => {
      setFormData(initialFormData);
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Drawer panel */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-lg bg-[#0A0A0E] border-l border-white/5 overflow-y-auto flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 sticky top-0 bg-[#0A0A0E]/95 backdrop-blur-sm z-10">
          <h2 id="contact-modal-title" className="text-lg font-medium text-[#F4F1EE]">
            Get in Touch
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close drawer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A1A1A6] hover:text-[#F4F1EE] hover:border-[#C5A880] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body: Success State or Contact Form */}
        {isSubmitted ? (
          <div className="flex-1 flex flex-col items-center justify-center h-full p-12 text-center">
            <CheckCircle className="w-16 h-16 text-[#C5A880]" />
            <h3 className="text-2xl font-medium text-[#F4F1EE] mt-6">Message Sent</h3>
            <p className="text-[#A1A1A6] text-center mt-2 text-sm leading-relaxed max-w-xs">
              Thank you for reaching out. I will respond within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6 flex-1">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-[#636366] mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 rounded-xl bg-[#13131A] border border-white/5 text-[#F4F1EE] text-sm focus:outline-none focus:border-[#C5A880]/50 transition-colors placeholder:text-[#636366]"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-[#636366] mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-[#13131A] border border-white/5 text-[#F4F1EE] text-sm focus:outline-none focus:border-[#C5A880]/50 transition-colors placeholder:text-[#636366]"
              />
            </div>

            {/* WhatsApp / Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-[#636366] mb-2"
              >
                WhatsApp / Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-[#13131A] border border-white/5 text-[#F4F1EE] text-sm focus:outline-none focus:border-[#C5A880]/50 transition-colors placeholder:text-[#636366]"
              />
            </div>

            {/* Company / Organization */}
            <div>
              <label
                htmlFor="organization"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-[#636366] mb-2"
              >
                Company / Organization
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                value={formData.organization}
                onChange={handleChange}
                placeholder="e.g. Lodha Group / Family Office"
                className="w-full px-4 py-3 rounded-xl bg-[#13131A] border border-white/5 text-[#F4F1EE] text-sm focus:outline-none focus:border-[#C5A880]/50 transition-colors placeholder:text-[#636366]"
              />
            </div>

            {/* Inquiry Type */}
            <div>
              <label
                htmlFor="inquiryType"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-[#636366] mb-2"
              >
                Inquiry Type
              </label>
              <div className="relative">
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#13131A] border border-white/5 text-[#F4F1EE] text-sm focus:outline-none focus:border-[#C5A880]/50 transition-colors appearance-none pr-10 cursor-pointer"
                >
                  <option value="" disabled className="bg-[#13131A] text-[#636366]">
                    Select an inquiry type
                  </option>
                  <option value="Executive Recruitment" className="bg-[#13131A] text-[#F4F1EE]">
                    Executive Recruitment
                  </option>
                  <option value="Real Estate Advisory" className="bg-[#13131A] text-[#F4F1EE]">
                    Real Estate Advisory
                  </option>
                  <option value="Turnkey Interior Consultation" className="bg-[#13131A] text-[#F4F1EE]">
                    Turnkey Interior Consultation
                  </option>
                  <option value="General Inquiry" className="bg-[#13131A] text-[#F4F1EE]">
                    General Inquiry
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-[#A1A1A6]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-[#636366] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share project parameters, timelines, or role specifications..."
                className="w-full px-4 py-3 rounded-xl bg-[#13131A] border border-white/5 text-[#F4F1EE] text-sm focus:outline-none focus:border-[#C5A880]/50 transition-colors placeholder:text-[#636366] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C5A880] text-[#0A0A0E] font-medium text-sm hover:bg-[#E6CA9E] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(230,202,158,0.25)] active:scale-[0.99]"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin text-[#0A0A0E]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
