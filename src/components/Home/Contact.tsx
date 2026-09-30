"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Design",
    budget: "₹20,000 - ₹50,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setSubmitted(true);
      // Simulate API submit
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "Web Design",
          budget: "₹20,000 - ₹50,000",
          message: "",
        });
      }, 1000);
    }
  };

  const services = ["Web Design", "SEO Audit & Strategy", "Google PPC Ads", "Meta Social Campaigns", "Local GBP Rank"];
  const budgets = ["< ₹20,000", "₹20,000 - ₹50,000", "₹50,000 - ₹100,000", "₹100,000+"];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get in Touch</span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2 mb-4">
                Let&apos;s Scale Your Revenue Online.
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Book a free strategy audit call with Dovix Media. We will review your current web traffic, keyword visibility, and Meta pixel campaigns to locate growth leaks.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Email Us</span>
                  <a href="mailto:dovixmedia@gmail.com" className="text-base font-semibold text-slate-800 dark:text-white hover:text-primary transition-colors">
                    dovixmedia@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Call / WhatsApp</span>
                  <a href="tel:+916267777534" className="text-base font-semibold text-slate-800 dark:text-white hover:text-primary transition-colors">
                    +91 62677 77534
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Office Location</span>
                  <span className="text-base font-semibold text-slate-800 dark:text-white">
                    Vidisha, Madhya Pradesh - 464001
                  </span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-800 relative bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-primary animate-bounce absolute" />
              <div className="text-center text-xs text-slate-400 dark:text-slate-500 font-mono mt-12">
                Vidisha, Madhya Pradesh - 464001 Map View
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-gray-150 dark:border-slate-800/80 shadow-sm relative">
              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-slate-800 dark:text-white mt-4">
                    Audit Call Requested!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    Thank you for reaching out. A digital strategist from Dovix Media will review your website details and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-650 dark:text-slate-300" htmlFor="contact-name">Your Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 focus:outline-none focus:border-primary text-sm text-slate-800 dark:text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-650 dark:text-slate-300" htmlFor="contact-email">Email Address</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 focus:outline-none focus:border-primary text-sm text-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-650 dark:text-slate-300" htmlFor="contact-phone">Phone Number</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 focus:outline-none focus:border-primary text-sm text-slate-800 dark:text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-650 dark:text-slate-300" htmlFor="contact-company">Company Name</label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="Acme Corp"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 focus:outline-none focus:border-primary text-sm text-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-slate-650 dark:text-slate-300">Target Service</span>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setFormState({ ...formState, service: s })}
                          className={`px-4 py-2 text-xs rounded-xl font-medium border transition cursor-pointer ${
                            formState.service === s
                              ? "bg-primary text-white border-primary"
                              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-gray-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-slate-650 dark:text-slate-300">Monthly Budget</span>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormState({ ...formState, budget: b })}
                          className={`px-4 py-2 text-xs rounded-xl font-medium border transition cursor-pointer ${
                            formState.budget === b
                              ? "bg-primary text-white border-primary"
                              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-gray-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-650 dark:text-slate-300" htmlFor="contact-message">Tell Us About Your Project</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Mention your goals, website links, or target regions..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 focus:outline-none focus:border-primary text-sm text-slate-800 dark:text-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:bg-primary-hover hover:scale-101 transition-all duration-300 cursor-pointer"
                  >
                    Submit Booking Request <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
