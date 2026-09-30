"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src="/logo.jpg"
                alt="Dovix Media Logo"
                className="w-9 h-9 rounded-full object-cover shadow-md border border-slate-800"
              />
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Dovix<span className="text-primary">Media</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premium website design and digital marketing agency. Grow faster, rank higher, and convert better with data-driven marketing campaigns.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 text-slate-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 text-slate-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/dovixmedia1/?hl=en"
                target="_blank"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 text-slate-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 text-slate-300"
                aria-label="Linkedin"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-base mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link href="/#about" className="hover:text-primary transition-colors text-sm">About Us</Link>
              <Link href="/#services" className="hover:text-primary transition-colors text-sm">Our Services</Link>
              <Link href="/#portfolio" className="hover:text-primary transition-colors text-sm">Case Studies</Link>
              <Link href="/pricing" className="hover:text-primary transition-colors text-sm">Pricing Plans</Link>
              <Link href="/careers" className="hover:text-primary transition-colors text-sm">Careers</Link>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-base mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              <Link href="/#services" className="hover:text-primary transition-colors text-sm">Web Design & Dev</Link>
              <Link href="/#services" className="hover:text-primary transition-colors text-sm">Search Engine Optimization</Link>
              <Link href="/#services" className="hover:text-primary transition-colors text-sm">Google PPC Ads</Link>
              <Link href="/#services" className="hover:text-primary transition-colors text-sm">Meta Ads Campaigns</Link>
              <Link href="/#services" className="hover:text-primary transition-colors text-sm">Local SEO Strategy</Link>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-semibold text-white text-base">Newsletter</h4>
            <p className="text-sm text-slate-400">
              Get the latest marketing insights, tips, and strategies sent directly to your inbox.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs">
                Thanks for subscribing to our newsletter!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-primary flex-grow"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="p-3 rounded-xl bg-primary hover:bg-primary-hover text-white transition-all shadow-md shadow-primary/20 flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Dovix Media. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
