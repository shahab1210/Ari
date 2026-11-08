'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { trackConversion } from '@/lib/analytics';

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
  budget: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  inquiryType: '',
  budget: '',
  message: '',
};

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        trackConversion('submit_inquiry', { type: formData.inquiryType || 'General Consultation' });
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch {
      setErrorMessage('Network communication error. Please try again or reach out on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setFormData(initialFormData);
    setIsSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  const directWhatsAppUrl = `https://wa.me/918828087472?text=${encodeURIComponent(
    `Hi Arifa, I just submitted an inquiry regarding ${formData.inquiryType || "a consultation"} through your portfolio and wanted to connect directly.`
  )}`;

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Overlay */}
      <div
        onClick={handleResetAndClose}
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
            {isSubmitted ? 'Inquiry Confirmed' : 'Initiate Advisory Consultation'}
          </h2>
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close drawer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A1A1A6] hover:text-[#F4F1EE] hover:border-[#C5A880] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body: Success State or Contact Form */}
        {isSubmitted ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-6 shadow-[0_0_30px_rgba(197,168,128,0.25)] animate-pulse">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-medium text-[#F4F1EE] mb-2">Inquiry Received</h3>
            <p className="text-[#A1A1A6] text-center text-sm leading-relaxed max-w-sm mb-6">
              Thank you, <span className="text-[#F4F1EE] font-medium">{formData.name}</span>. Your brief has been registered. Arifa Shaikh will review the details and reach out within 24 hours.
            </p>

            {/* Instant WhatsApp Alternative */}
            <div className="w-full max-w-sm p-5 rounded-2xl bg-[#13131A] border border-white/10 text-left mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#636366] block mb-1">
                Fast-Track Channel
              </span>
              <p className="text-xs text-[#A1A1A6] mb-4">
                Require immediate turnaround or have an active walk-in closure today?
              </p>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('click_whatsapp', { location: 'modal_success' })}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C5A880] text-[#0A0A0E] text-xs font-semibold hover:bg-[#E6CA9E] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="text-xs font-mono text-[#636366] hover:text-[#C5A880] uppercase tracking-wider transition-colors"
            >
              ← Return to Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 flex-1">
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono leading-relaxed">
                {errorMessage}
              </div>
            )}

            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-[#636366] mb-2"
              >
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-3 rounded-xl bg-[#13131A] border border-white/5 text-[#F4F1EE] text-sm focus:outline-none focus:border-[#C5A880]/50 transition-colors placeholder:text-[#636366]"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-[#636366] mb-2"
              >
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rahul@domain.com"
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
                placeholder="e.g. +91 98200 12345"
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
                placeholder="e.g. Real Estate Advisory / Family Office"
                className="w-full px-4 py-3 rounded-xl bg-[#13131A] border border-white/5 text-[#F4F1EE] text-sm focus:outline-none focus:border-[#C5A880]/50 transition-colors placeholder:text-[#636366]"
              />
            </div>

            {/* Inquiry Type & Budget Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 rounded-xl bg-[#13131A] border border-white/5 text-[#F4F1EE] text-xs focus:outline-none focus:border-[#C5A880]/50 transition-colors appearance-none pr-8 cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#13131A] text-[#636366]">
                      Select Type
                    </option>
                    <option value="Executive Recruitment" className="bg-[#13131A] text-[#F4F1EE]">
                      Executive Recruitment
                    </option>
                    <option value="Real Estate Advisory" className="bg-[#13131A] text-[#F4F1EE]">
                      Real Estate Advisory
                    </option>
                    <option value="Turnkey Interior Consultation" className="bg-[#13131A] text-[#F4F1EE]">
                      Turnkey Interiors
                    </option>
                    <option value="General Inquiry" className="bg-[#13131A] text-[#F4F1EE]">
                      General Inquiry
                    </option>
                  </select>
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-mono uppercase tracking-[0.15em] text-[#636366] mb-2"
                >
                  Budget Range
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#13131A] border border-white/5 text-[#F4F1EE] text-xs focus:outline-none focus:border-[#C5A880]/50 transition-colors appearance-none pr-8 cursor-pointer"
                  >
                    <option value="" className="bg-[#13131A] text-[#636366]">
                      Select Scope
                    </option>
                    <option value="₹25 Lakhs – ₹50 Lakhs" className="bg-[#13131A] text-[#F4F1EE]">
                      ₹25 L – ₹50 Lakhs
                    </option>
                    <option value="₹50 Lakhs – ₹1.5 Crore" className="bg-[#13131A] text-[#F4F1EE]">
                      ₹50 L – ₹1.5 Cr
                    </option>
                    <option value="₹1.5 Crore – ₹5 Crore+" className="bg-[#13131A] text-[#F4F1EE]">
                      ₹1.5 Cr – ₹5 Cr+
                    </option>
                    <option value="Corporate / Leadership Role" className="bg-[#13131A] text-[#F4F1EE]">
                      Leadership Role
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-[0.15em] text-[#636366] mb-2"
              >
                Project Parameters / Objectives
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share transaction timelines, development scope, or role specifications..."
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
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Send Advisory Inquiry</span>
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
